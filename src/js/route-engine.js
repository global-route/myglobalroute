/* Canonical route recommendation engine. Safety-first: only publishable, evidence-backed pathways can be recommended. */
(function (root) {
  'use strict';
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;

  function scorePathway(pathway, country, profile) {
    if (!pathway || !country || pathway.status !== 'publishable' || country.dataStatus !== 'publishable') {
      return { score: 0, reasons: ['not recommendation-eligible until evidence review is complete'], eligible: false };
    }
    const hasEvidenceIds = Array.isArray(pathway.evidenceIds) && pathway.evidenceIds.length > 0 && pathway.evidenceIds.every(id => typeof id === 'string' && id.trim().length > 0);
    const hasSecureSource = typeof pathway.sourceUrl === 'string' && /^https:\/\//i.test(pathway.sourceUrl);
    if (!hasEvidenceIds || !hasSecureSource) {
      return { score: 0, reasons: ['missing evidence references or secure source provenance'], eligible: false };
    }
    let score = 0;
    const reasons = [];
    const goal = profile.goal || 'any';
    const rawBudget = profile.budget;
    const parsedBudget = Number(rawBudget);
    const hasValidBudget = rawBudget !== undefined && rawBudget !== null && String(rawBudget).trim() !== '' && Number.isFinite(parsedBudget) && parsedBudget >= 0;
    const budget = hasValidBudget ? parsedBudget : 0;
    const income = number(profile.monthlyIncome);
    const experience = number(profile.experienceYears);
    if (goal !== 'any' && pathway.type === goal) { score += 35; reasons.push('matches your stated route goal'); }
    if (goal === 'any') score += 10;
    if (profile.countryId && profile.countryId === country.id) { score += 5; reasons.push('destination preference matches'); }
    if (profile.language && pathway.language && pathway.language.includes(profile.language)) { score += 10; reasons.push('language fit'); }
    if (pathway.minExperienceYears !== undefined) {
      if (experience >= number(pathway.minExperienceYears)) { score += 15; reasons.push('experience requirement appears compatible'); }
      else return { score: 0, reasons: ['experience requirement is a likely blocker'], eligible: false };
    }
    if (pathway.minMonthlyIncome !== undefined) {
      if (income >= number(pathway.minMonthlyIncome)) { score += 10; reasons.push('income requirement appears compatible'); }
      else return { score: 0, reasons: ['income requirement is a likely blocker'], eligible: false };
    }
    if (pathway.minFunds !== undefined) {
      const minimumFunds = number(pathway.minFunds);
      if (minimumFunds > 0 && (!hasValidBudget || budget < minimumFunds)) {
        return { score: 0, reasons: ['a valid budget meeting the known minimum funds requirement is required'], eligible: false };
      }
      if (minimumFunds > 0) { score += 15; reasons.push('budget appears compatible'); }
    }
    return { score: clamp(score, 0, 100), reasons, eligible: true };
  }

  function recommend(profile = {}, countries = [], pathways = [], limit = 5) {
    const countryMap = new Map(countries.map(country => [country.id, country]));
    return pathways.map(pathway => ({ pathway, country: countryMap.get(pathway.countryId) }))
      .filter(item => item.country)
      .map(item => ({ ...item, ...scorePathway(item.pathway, item.country, profile) }))
      // A publishable route with no positive fit signal is not a useful recommendation.
      // Keep it out of the ranked result rather than presenting a misleading score of 0.
      .filter(item => item.eligible && item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.RouteEngine = { recommend, scorePathway };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.GlobalRoute.RouteEngine;
})(typeof window !== 'undefined' ? window : globalThis);
