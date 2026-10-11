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
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const key = 'globalroute.analyticsConsent';
    let stored = null;
    try { stored = window.localStorage.getItem(key); } catch (_) {}
    if (stored && ['granted', 'denied'].includes(stored)) setConsent(stored);

    const mount = document.body;
    if (!mount) return;
    let banner = document.getElementById('analytics-consent');
    let settings = document.getElementById('analytics-consent-settings');

    if (!settings) {
      settings = document.createElement('button');
      settings.id = 'analytics-consent-settings';
      settings.type = 'button';
      settings.textContent = 'Privacy settings';
      settings.setAttribute('aria-controls', 'analytics-consent');
      settings.addEventListener('click', () => {
        const panel = document.getElementById('analytics-consent');
        if (panel) {
          panel.hidden = false;
          settings.hidden = true;
          panel.querySelector('[data-consent]')?.focus();
        }
      });
      mount.appendChild(settings);
    }

    if (!banner) {
      banner = document.createElement('aside');
      banner.id = 'analytics-consent';
      banner.setAttribute('role', 'region');
      banner.setAttribute('aria-label', 'Analytics and advertising preferences');
      banner.setAttribute('aria-live', 'polite');
      banner.innerHTML = '<p>Analytics and eligible advertising placements remain disabled until you choose. Event measurement does not need your migration profile details.</p><div><button type="button" data-consent="granted">Allow analytics</button><button type="button" data-consent="denied">Decline analytics</button></div>';
      mount.appendChild(banner);
    }

    banner.querySelectorAll('[data-consent]').forEach(button => {
      if (button.dataset.consentBound === 'true') return;
      button.dataset.consentBound = 'true';
      button.addEventListener('click', () => {
        const state = button.getAttribute('data-consent');
        setConsent(state);
        try { window.localStorage.setItem(key, state); } catch (_) {}
        banner.hidden = true;
        settings.hidden = false;
        settings.setAttribute('aria-label', `Privacy settings; analytics consent is ${state}`);
        // Consent also gates eligible advertising placements. Refresh only after
        // the user's explicit choice has been applied.
        root.GlobalRoute?.Monetization?.refreshAfterConsent?.();
        settings.focus();
      });
    });

    // Existing decisions stay in force, but the user can reopen this panel
    // from the persistent settings control to change or withdraw consent.
    banner.hidden = consentState !== 'unknown';
    settings.hidden = !banner.hidden;
    settings.setAttribute('aria-label', `Privacy settings; analytics consent is ${consentState}`);
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
  // Consent controls must work on pages that use analytics without app.js too.
  if (typeof document !== 'undefined') {
    const initializeConsent = () => api.initConsentUI();
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeConsent, { once: true });
    else initializeConsent();
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
