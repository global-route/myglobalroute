/**
 * Global Route monetization configuration.
 *
 * Configuration only: this module does not load ads or send partner data.
 */
(function (root) {
  'use strict';

  const AD_SLOTS = Object.freeze({
    ad_article_top: { pageTypes: ['blog', 'guide'], level: 'high' },
    ad_article_mid: { pageTypes: ['blog', 'guide'], level: 'high' },
    ad_article_end: { pageTypes: ['blog', 'guide'], level: 'high' },
    ad_country_mid: { pageTypes: ['country'], level: 'medium' },
    ad_pathway_after_core: { pageTypes: ['pathway'], level: 'low' },
    ad_calculator_result: { pageTypes: ['calculator'], level: 'low' },
    ad_homepage_secondary: { pageTypes: ['home'], level: 'low' }
  });

  const PARTNER_SLOTS = Object.freeze({
    partner_route_next_step: { pageTypes: ['find-my-route', 'pathway'], categories: ['relocation', 'education', 'insurance', 'accommodation'] },
    partner_insurance: { pageTypes: ['country', 'pathway', 'find-my-route'], categories: ['insurance'] },
    partner_education: { pageTypes: ['country', 'pathway', 'find-my-route'], categories: ['education'] },
    partner_accommodation: { pageTypes: ['country', 'pathway', 'find-my-route'], categories: ['accommodation'] },
    partner_relocation: { pageTypes: ['country', 'pathway', 'find-my-route'], categories: ['relocation'] }
  });

  const EXCLUDED_PAGE_TYPES = new Set(['search', 'forms', 'account', 'checkout', 'legal', 'error']);
  let adProvider = null;
  const EXCLUDED_AD_WORKFLOWS = new Set(['find-my-route', 'search']);

  function canRenderAd(slotId, pageType, consentGranted) {
    const slot = AD_SLOTS[slotId];
    return Boolean(slot && consentGranted && !EXCLUDED_PAGE_TYPES.has(pageType) &&
      !EXCLUDED_AD_WORKFLOWS.has(pageType) && slot.pageTypes.includes(pageType));
  }

  function canRenderPartner(slotId, pageType) {
    const slot = PARTNER_SLOTS[slotId];
    return Boolean(slot && !EXCLUDED_PAGE_TYPES.has(pageType) && slot.pageTypes.includes(pageType));
  }

  function getPageType() {
    return typeof document !== 'undefined' ? (document.body?.dataset?.pageType || 'unknown') : 'unknown';
  }

  function createAdPlaceholder(slotId, { consentGranted = false } = {}) {
    const pageType = getPageType();
    if (!canRenderAd(slotId, pageType, consentGranted)) return null;
    const element = document.createElement('aside');
    element.className = 'monetization-slot monetization-ad-slot';
    element.dataset.slotId = slotId;
    element.setAttribute('aria-label', 'Advertisement');
    element.hidden = true;
    return element;
  }

  function getAdSlot(slotId) {
    return AD_SLOTS[slotId] || null;
  }

  function getPartnerSlot(slotId) {
    return PARTNER_SLOTS[slotId] || null;
  }

  function mountSlots({ pageType = getPageType(), consentGranted = false } = {}) {
    if (typeof document === 'undefined') return { ads: 0, partners: 0 };
    let ads = 0;
    let partners = 0;
    document.querySelectorAll('[data-ad-slot]').forEach(host => {
      const slotId = host.dataset.adSlot;
      if (!canRenderAd(slotId, pageType, consentGranted)) {
        host.hidden = true;
        host.replaceChildren();
        return;
      }
      // Never show an empty/fake ad placeholder. A verified provider adapter must
      // mount the actual creative after consent and page-policy checks pass.
      if (!adProvider || typeof adProvider.mount !== 'function') {
        host.hidden = true;
        host.replaceChildren();
        return;
      }
      const mounted = adProvider.mount(host, { slotId, pageType });
      if (mounted === false) {
        host.hidden = true;
        host.replaceChildren();
        return;
      }
      host.classList.add('monetization-slot', 'monetization-ad-slot');
      host.setAttribute('aria-label', 'Advertisement');
      host.hidden = false;
      ads += 1;
    });
    document.querySelectorAll('[data-partner-slot]').forEach(host => {
      const slotId = host.dataset.partnerSlot;
      if (!canRenderPartner(slotId, pageType)) {
        host.hidden = true;
        host.replaceChildren();
        return;
      }
      host.classList.add('monetization-slot', 'monetization-partner-slot');
      host.setAttribute('aria-label', 'Partner information');
      host.hidden = true;
      host.replaceChildren();
      partners += 1;
    });
    return { ads, partners };
  }

  function setAdProvider(adapter) {
    if (adapter !== null && typeof adapter?.mount !== 'function') {
      throw new Error('Ad provider must expose mount(host, context)');
    }
    adProvider = adapter;
  }

  function init() {
    const analytics = root.GlobalRoute?.Analytics;
    const consentGranted = analytics?.getConsentState?.() === 'granted';
    return mountSlots({ consentGranted });
  }

  const api = Object.freeze({
    AD_SLOTS,
    PARTNER_SLOTS,
    canRenderAd,
    canRenderPartner,
    setAdProvider,
    getAdSlot,
    getPageType,
    createAdPlaceholder,
    getPartnerSlot,
    mountSlots,
    init,
    refreshAfterConsent: init
  });

  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.Monetization = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
