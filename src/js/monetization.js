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

  const api = Object.freeze({
    AD_SLOTS,
    PARTNER_SLOTS,
    canRenderAd,
    canRenderPartner,
    getAdSlot,
    getPageType,
    createAdPlaceholder,
    getPartnerSlot
  });

  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.Monetization = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
