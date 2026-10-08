(function (root) {
  'use strict';
  const PARTNERS = Object.freeze({});
  function getPartner(partnerId) { return PARTNERS[partnerId] || null; }
  function buildTrackedPath(input) {
    const { partnerId, placementId, pageType, countryId, pathwayId, source } = input || {};
    if (!partnerId || !placementId) return null;
    const params = new URLSearchParams({ partner: partnerId, placement: placementId, page: pageType || 'unknown' });
    if (countryId) params.set('country', countryId);
    if (pathwayId) params.set('pathway', pathwayId);
    if (source) params.set('source', source);
    return '/go/partner?' + params.toString();
  }
  const api = Object.freeze({ PARTNERS, getPartner, buildTrackedPath });
  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.Affiliates = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
