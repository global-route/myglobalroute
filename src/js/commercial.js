(function (root) {
  'use strict';

  function createDisclosure(text = 'Some links may be commercial. Commercial relationships do not determine route eligibility or recommendations.') {
    const element = document.createElement('p');
    element.className = 'commercial-disclosure';
    element.textContent = text;
    element.setAttribute('data-commercial-disclosure', 'true');
    return element;
  }

  function createPartnerLink({ partnerId, placementId, label, pageType, countryId, pathwayId, source = 'organic' }) {
    if (!root.GlobalRoute?.Affiliates?.buildTrackedPath) return null;
    const href = root.GlobalRoute.Affiliates.buildTrackedPath({ partnerId, placementId, pageType, countryId, pathwayId, source });
    if (!href) return null;
    const link = document.createElement('a');
    link.href = href;
    link.textContent = label || 'Continue';
    link.rel = 'sponsored noopener';
    link.dataset.partnerId = partnerId;
    link.dataset.placementId = placementId;
    return link;
  }

  const api = Object.freeze({ createDisclosure, createPartnerLink });
  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.Commercial = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
