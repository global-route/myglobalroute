/**
 * Global Route: privacy-aware measurement contract.
 *
 * Provider-neutral by default. A provider adapter may consume accepted events,
 * but no event is emitted until consent is explicitly granted.
 */
(function (root) {
  'use strict';

  const EVENTS = Object.freeze([
    'route_search_started',
    'route_recommendation_generated',
    'pathway_viewed',
    'calculator_started',
    'calculator_completed',
    'official_source_clicked',
    'ad_impression',
    'partner_impression',
    'partner_clicked',
    'lead_started',
    'lead_submitted',
    'subscription_started',
    'subscription_cancelled'
  ]);

  const DIMENSION_KEYS = new Set([
    'page_type',
    'country_id',
    'pathway_id',
    'placement_id',
    'partner_id',
    'acquisition_source',
    'device_class',
    'experiment_id',
    'consent_state',
    'source_id',
    'revenue_source_id'
  ]);

  const SENSITIVE_KEYS = /(?:email|phone|mobile|address|passport|document|name|dob|birth|nationality|salary|income|expense|savings|budget|identity|token|cookie|ip)/i;
  let consentState = 'unknown';
  let provider = null;

  function isKnownEvent(eventName) {
    return EVENTS.includes(eventName);
  }

  function sanitizePayload(payload = {}) {
    const output = {};
    Object.entries(payload || {}).forEach(([key, value]) => {
      if (!DIMENSION_KEYS.has(key) || SENSITIVE_KEYS.test(key)) return;
      if (value === undefined || value === null) return;
      if (typeof value === 'string' && value.length > 200) return;
      if (!['string', 'number', 'boolean'].includes(typeof value)) return;
      output[key] = value;
    });
    return output;
  }

  function validateEvent(eventName, payload = {}) {
    if (!isKnownEvent(eventName)) return { valid: false, reason: 'unknown_event' };
    const clean = sanitizePayload(payload);
    if (payload && Object.keys(clean).length !== Object.keys(payload).filter(key => payload[key] !== undefined && payload[key] !== null).length) {
      const unsafeKeys = Object.keys(payload).filter(key => !Object.prototype.hasOwnProperty.call(clean, key));
      if (unsafeKeys.length) return { valid: false, reason: 'unsupported_or_sensitive_dimension', unsafeKeys };
    }
    if (clean.consent_state && !['unknown', 'denied', 'granted', 'withdrawn'].includes(clean.consent_state)) {
      return { valid: false, reason: 'invalid_consent_state' };
    }
    return { valid: true, payload: clean };
  }

  function initConsentUI() {
    const key = 'globalroute.analyticsConsent';
    let stored = null;
    try { stored = window.localStorage.getItem(key); } catch (_) {}
    if (stored && ['granted', 'denied'].includes(stored)) setConsent(stored);
    if (document.getElementById('analytics-consent')) return;
    const banner = document.createElement('aside');
    banner.id = 'analytics-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Analytics consent');
    banner.innerHTML = '<p>We use privacy-aware analytics to understand product usage. No migration profile details are sent to analytics.</p><div><button type="button" data-consent="granted">Allow analytics</button><button type="button" data-consent="denied">Decline</button></div>';
    const mount = document.body;
    if (!mount) return;
    mount.appendChild(banner);
    banner.querySelectorAll('[data-consent]').forEach(button => button.addEventListener('click', () => {
      const state = button.getAttribute('data-consent');
      setConsent(state);
      try { window.localStorage.setItem(key, state); } catch (_) {}
      banner.remove();
    }));
    if (consentState !== 'unknown') banner.remove();
  }

  function setConsent(state) {
    if (!['unknown', 'denied', 'granted', 'withdrawn'].includes(state)) {
      throw new Error('Invalid analytics consent state');
    }
    consentState = state;
    if (provider && typeof provider.setConsent === 'function') provider.setConsent(state);
    return consentState;
  }

  function getConsentState() {
    return consentState;
  }

  function setProvider(adapter) {
    if (adapter !== null && typeof adapter?.emit !== 'function') {
      throw new Error('Analytics provider must expose emit(eventName, payload)');
    }
    provider = adapter;
  }

  function track(eventName, payload = {}) {
    const validation = validateEvent(eventName, payload);
    if (!validation.valid) return { accepted: false, reason: validation.reason };
    if (consentState !== 'granted') return { accepted: false, reason: 'consent_required' };

    const eventPayload = Object.freeze({
      ...validation.payload,
      consent_state: 'granted'
    });
    if (provider) provider.emit(eventName, eventPayload);
    return { accepted: true, eventName, payload: eventPayload };
  }

  function createGA4Provider(gtag) {
    if (typeof gtag !== 'function') return null;
    return {
      emit: (eventName, payload) => gtag('event', eventName, payload),
      setConsent: state => gtag('consent', 'update', {
        analytics_storage: state === 'granted' ? 'granted' : 'denied',
        ad_storage: state === 'granted' ? 'granted' : 'denied'
      })
    };
  }

  const api = Object.freeze({
    EVENTS,
    validateEvent,
    sanitizePayload,
    setConsent,
    getConsentState,
    setProvider,
    track,
    createGA4Provider,
    initConsentUI
  });

  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.Analytics = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
