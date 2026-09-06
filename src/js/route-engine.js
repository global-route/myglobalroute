/* Canonical route recommendation engine. Safety-first: only publishable, evidence-backed pathways can be recommended. */
(function (root) {
  'use strict';
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;

  function scorePathway(pathway, country, profile) {
    if (!pathway || !country || pathway.status !== 'publishable' || country.dataStatus !== 'publishable') {
      return { score: 0, reasons: ['not recommendation-eligible until evidence review is complete'], eligible: false };
    }
    let score = 0;
    const reasons = [];
    const goal = profile.goal || 'any';
    const budget = number(profile.budget);
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
    if (pathway.minFunds !== undefined && budget > 0) {
      if (budget >= number(pathway.minFunds)) { score += 15; reasons.push('budget appears compatible'); }
      else return { score: 0, reasons: ['available budget is below the known minimum funds requirement'], eligible: false };
    }
    return { score: clamp(score, 0, 100), reasons, eligible: true };
  }

  function recommend(profile = {}, countries = [], pathways = [], limit = 5) {
    const countryMap = new Map(countries.map(country => [country.id, country]));
    return pathways.map(pathway => ({ pathway, country: countryMap.get(pathway.countryId) }))
      .filter(item => item.country)
      .map(item => ({ ...item, ...scorePathway(item.pathway, item.country, profile) }))
      .filter(item => item.eligible)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.RouteEngine = { recommend, scorePathway };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.GlobalRoute.RouteEngine;
})(typeof window !== 'undefined' ? window : globalThis);
