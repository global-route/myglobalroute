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
  let advertisingConsentState = 'unknown';
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
    const analyticsKey = 'globalroute.analyticsConsent';
    const advertisingKey = 'globalroute.advertisingConsent';
    let storedAnalytics = null;
    let storedAdvertising = null;
    try {
      storedAnalytics = window.localStorage.getItem(analyticsKey);
      storedAdvertising = window.localStorage.getItem(advertisingKey);
    } catch (_) {}
    if (storedAnalytics && ['granted', 'denied'].includes(storedAnalytics)) setConsent(storedAnalytics);
    if (storedAdvertising && ['granted', 'denied'].includes(storedAdvertising)) setAdvertisingConsent(storedAdvertising);

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
          syncConsentInputs(panel);
          panel.hidden = false;
          settings.hidden = true;
          panel.querySelector('[data-consent-option="analytics"]')?.focus();
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
      banner.innerHTML = '<p>Choose independently whether to allow analytics measurement and advertising storage. Your choice does not affect access to migration information.</p><div class="consent-options"><label><input type="checkbox" data-consent-option="analytics"> Allow analytics measurement</label><label><input type="checkbox" data-consent-option="advertising"> Allow advertising storage and eligible ad placements</label></div><div class="consent-actions"><button type="button" data-save-consent>Save choices</button><button type="button" data-reject-consent>Reject all optional measurement and advertising</button></div>';
      mount.appendChild(banner);
    }

    syncConsentInputs(banner);

    const saveButton = banner.querySelector('[data-save-consent]');
    if (saveButton && saveButton.dataset.consentBound !== 'true') {
      saveButton.dataset.consentBound = 'true';
      saveButton.addEventListener('click', () => {
        const analyticsChoice = banner.querySelector('[data-consent-option="analytics"]')?.checked ? 'granted' : 'denied';
        const advertisingChoice = banner.querySelector('[data-consent-option="advertising"]')?.checked ? 'granted' : 'denied';
        persistConsentChoices(analyticsChoice, advertisingChoice, analyticsKey, advertisingKey, banner, settings);
      });
    }

    const rejectButton = banner.querySelector('[data-reject-consent]');
    if (rejectButton && rejectButton.dataset.consentBound !== 'true') {
      rejectButton.dataset.consentBound = 'true';
      rejectButton.addEventListener('click', () => {
        syncConsentInputs(banner, false, false);
        persistConsentChoices('denied', 'denied', analyticsKey, advertisingKey, banner, settings);
      });
    }

    banner.hidden = consentState !== 'unknown' && advertisingConsentState !== 'unknown';
    settings.hidden = !banner.hidden;
    settings.setAttribute('aria-label', `Privacy settings; analytics ${consentState}, advertising ${advertisingConsentState}`);
  }

  function syncConsentInputs(panel, analyticsGranted = consentState === 'granted', advertisingGranted = advertisingConsentState === 'granted') {
    const analyticsInput = panel.querySelector('[data-consent-option="analytics"]');
    const advertisingInput = panel.querySelector('[data-consent-option="advertising"]');
    if (analyticsInput) analyticsInput.checked = analyticsGranted;
    if (advertisingInput) advertisingInput.checked = advertisingGranted;
  }

  function persistConsentChoices(analyticsChoice, advertisingChoice, analyticsKey, advertisingKey, banner, settings) {
    setConsent(analyticsChoice);
    setAdvertisingConsent(advertisingChoice);
    try {
      window.localStorage.setItem(analyticsKey, analyticsChoice);
      window.localStorage.setItem(advertisingKey, advertisingChoice);
    } catch (_) {}
    banner.hidden = true;
    settings.hidden = false;
    settings.setAttribute('aria-label', `Privacy settings; analytics ${analyticsChoice}, advertising ${advertisingChoice}`);
    root.GlobalRoute?.Monetization?.refreshAfterConsent?.();
    settings.focus();
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

  function setAdvertisingConsent(state) {
    if (!['unknown', 'denied', 'granted', 'withdrawn'].includes(state)) {
      throw new Error('Invalid advertising consent state');
    }
    advertisingConsentState = state;
    if (provider && typeof provider.setAdvertisingConsent === 'function') provider.setAdvertisingConsent(state);
    return advertisingConsentState;
  }

  function getAdvertisingConsentState() {
    return advertisingConsentState;
  }

  function setProvider(adapter) {
    if (adapter !== null && typeof adapter?.emit !== 'function') {
      throw new Error('Analytics provider must expose emit(eventName, payload)');
    }
    provider = adapter;
    if (provider && typeof provider.setConsent === 'function') provider.setConsent(consentState);
    if (provider && typeof provider.setAdvertisingConsent === 'function') {
      provider.setAdvertisingConsent(advertisingConsentState);
    }
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
        analytics_storage: state === 'granted' ? 'granted' : 'denied'
      }),
      setAdvertisingConsent: state => gtag('consent', 'update', {
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
    setAdvertisingConsent,
    getAdvertisingConsentState,
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
