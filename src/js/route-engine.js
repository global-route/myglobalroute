/* Canonical route recommendation engine. It ranks only evidence-gated pathways. */
(function (root) {
  'use strict';
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;

  function scorePathway(pathway, country, profile) {
    let score = 0;
    const reasons = [];
    const goal = profile.goal || 'any';
    const budget = number(profile.budget);
    const income = number(profile.monthlyIncome);
    const experience = number(profile.experienceYears);
    if (goal !== 'any' && pathway.type === goal) { score += 35; reasons.push('matches your stated route goal'); }
    if (goal === 'any') score += 10;
    if (profile.countryId && profile.countryId === country.id) score += 5;
    if (profile.language && pathway.language && pathway.language.includes(profile.language)) { score += 10; reasons.push('language fit'); }
    if (pathway.minExperienceYears !== undefined) {
      if (experience >= number(pathway.minExperienceYears)) { score += 15; reasons.push('experience requirement appears compatible'); }
      else { score -= 35; reasons.push('experience requirement may be a blocker'); }
    }
    if (pathway.minMonthlyIncome !== undefined) {
      if (income >= number(pathway.minMonthlyIncome)) { score += 10; reasons.push('income requirement appears compatible'); }
      else { score -= 20; reasons.push('income requirement may be a blocker'); }
    }
    if (pathway.minFunds !== undefined && budget > 0) {
      score += budget >= number(pathway.minFunds) ? 15 : -25;
      reasons.push(budget >= number(pathway.minFunds) ? 'budget appears compatible' : 'budget may be insufficient');
    }
    if (country.dataStatus !== 'publishable' || pathway.status !== 'publishable') {
      score = Math.min(score, 20);
      reasons.push('evidence verification is still required');
    }
    return { score: clamp(score, 0, 100), reasons };
  }

  function recommend(profile, countries, pathways, limit = 5) {
    const countryMap = new Map(countries.map(country => [country.id, country]));
    return pathways.map(pathway => ({ pathway, country: countryMap.get(pathway.countryId) }))
      .filter(item => item.country)
      .map(item => ({ ...item, ...scorePathway(item.pathway, item.country, profile) }))
      .sort((a, b) => b.score - a.score).slice(0, limit);
  }

  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.RouteEngine = { recommend, scorePathway };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.GlobalRoute.RouteEngine;
})(typeof window !== 'undefined' ? window : globalThis);
