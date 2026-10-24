/* Canonical route recommendation engine. Safety-first: only publishable, evidence-backed pathways can be recommended. */
(function (root) {
  'use strict';
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;

  const STALE_DAYS = 180;

  // Returns true if the most recent requirement effectiveDate is older than STALE_DAYS.
  // If no requirements have an effectiveDate, staleness is unknown — treat as not stale (do not warn on absence).
  function isStale(pathway, asOf) {
    const reqs = Array.isArray(pathway.requirements) ? pathway.requirements : [];
    const dates = reqs.map(r => r.effectiveDate).filter(Boolean).map(d => new Date(d).getTime()).filter(Number.isFinite);
    if (!dates.length) return false;
    const newest = Math.max(...dates);
    return (asOf - newest) > STALE_DAYS * 86400000;
  }

  // Pick the most applicable minimum_funds requirement for the profile.
  // Prefers the tier matching familySize + applicationDateFrom; falls back to family-1 or first tier.
  function selectFundsTier(requirements, profile) {
    const tiers = (requirements || []).filter(r => r.field === 'minimum_funds' && r.kind === 'money');
    if (!tiers.length) return null;
    const familySize = Number(profile.familySize) || 1;
    const appDate = profile.applicationDate ? new Date(profile.applicationDate).getTime() : Date.now();
    // Filter to tiers whose applicationDateFrom condition is satisfied
    const dateSatisfied = tiers.filter(r => {
      const from = r.conditions?.applicationDateFrom ? new Date(r.conditions.applicationDateFrom).getTime() : 0;
      return appDate >= from;
    });
    const pool = dateSatisfied.length ? dateSatisfied : tiers;
    // Among those, prefer exact family-size match, then family-1, then first
    const exact = pool.find(r => r.conditions?.familySize === familySize);
    if (exact) return exact;
    const family1 = pool.find(r => r.conditions?.familySize === 1);
    return family1 || pool[0];
  }

  function scorePathway(pathway, country, profile) {
    // Country-level status governs aggregate costs/rates/timelines, not exact-pathway evidence.
    // Do not infer country-level metrics from a route; assess each canonical pathway against its own evidence gate.
    if (!pathway || !country || pathway.status !== 'publishable') {
      return { score: 0, reasons: ['not recommendation-eligible until pathway evidence review is complete'], eligible: false };
    }
    const hasEvidenceIds = Array.isArray(pathway.evidenceIds) && pathway.evidenceIds.length > 0 && pathway.evidenceIds.every(id => typeof id === 'string' && id.trim().length > 0);
    const hasSecureSource = typeof pathway.sourceUrl === 'string' && /^https:\/\//i.test(pathway.sourceUrl);
    if (!hasEvidenceIds || !hasSecureSource) {
      return { score: 0, reasons: ['missing evidence references or secure source provenance'], eligible: false };
    }
    // A missing threshold is unknown; a malformed declared threshold must not be treated as zero.
    for (const field of ['minFunds', 'minMonthlyIncome', 'minExperienceYears']) {
      if (pathway[field] !== undefined && (typeof pathway[field] !== 'number' || !Number.isFinite(pathway[field]) || pathway[field] < 0)) {
        return { score: 0, reasons: [`invalid ${field} threshold prevents safe recommendation`], eligible: false };
      }
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
    // Do not invent a ranking when the user has not selected a goal or no other structured fit signal exists.
    if (profile.countryId && profile.countryId === country.id) { score += 5; reasons.push('destination preference matches'); }
    if (profile.language && pathway.language && pathway.language.includes(profile.language)) { score += 10; reasons.push('language fit'); }
    if (pathway.minExperienceYears > 0) {
      if (experience >= pathway.minExperienceYears) { score += 15; reasons.push('experience requirement appears compatible'); }
      else return { score: 0, reasons: ['experience requirement is a likely blocker'], eligible: false };
    }
    if (pathway.minMonthlyIncome > 0) {
      if (income >= pathway.minMonthlyIncome) { score += 10; reasons.push('income requirement appears compatible'); }
      else return { score: 0, reasons: ['income requirement is a likely blocker'], eligible: false };
    }
    if (pathway.minFunds !== undefined) {
      const minimumFunds = number(pathway.minFunds);
      if (minimumFunds > 0 && (!hasValidBudget || budget < minimumFunds)) {
        return { score: 0, reasons: ['a valid budget meeting the known minimum funds requirement is required'], eligible: false };
      }
      if (minimumFunds > 0) { score += 15; reasons.push('budget appears compatible'); }
    } else {
      // Conditional funds tiers from structured requirements[]
      const tier = selectFundsTier(pathway.requirements, profile);
      if (tier) {
        const tierMin = number(tier.value);
        if (tierMin > 0 && hasValidBudget && budget < tierMin) {
          return { score: 0, reasons: [`budget below the ${tier.currency || ''} ${tierMin} funds threshold for your family size`], eligible: false };
        }
        if (tierMin > 0 && hasValidBudget) { score += 10; reasons.push(`funds threshold (${tier.currency || ''} ${tierMin}) appears compatible`); }
      }
    }
    return { score: clamp(score, 0, 100), reasons, eligible: true, matchedTier: selectFundsTier(pathway.requirements, profile) };
  }

  // recommend returns { matches, alternatives, missingInput }
  // matches: top `limit` eligible routes sorted by score
  // alternatives: up to 5 ineligible publishable routes with their blocker reason (only when matches is empty)
  // missingInput: true when no actionable goal was provided
  function recommend(profile = {}, countries = [], pathways = [], limit = 5) {
    const goal = profile.goal || 'any';
    if (goal === 'any') {
      return { matches: [], alternatives: [], missingInput: true };
    }
    const now = Date.now();
    const countryMap = new Map(countries.map(c => [c.id, c]));
    const scored = pathways
      .map(pathway => ({ pathway, country: countryMap.get(pathway.countryId) }))
      .filter(item => item.country)
      .map(item => ({ ...item, ...scorePathway(item.pathway, item.country, profile), stale: isStale(item.pathway, now) }));

    const matches = scored
      .filter(item => item.eligible && item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    // Alternatives: ineligible publishable routes that match the goal type, up to 5, with their blocker.
    // When matches is empty, also return zero-fit explanations for every ineligible goal-type pathway.
    const ineligibleGoalRoutes = scored.filter(item => !item.eligible && item.pathway.status === 'publishable' && item.pathway.type === goal);
    const alternatives = matches.length === 0
      ? ineligibleGoalRoutes
          .slice(0, 5)
          .map(item => ({ pathway: item.pathway, country: item.country, blocker: item.reasons[0] || 'does not meet current criteria' }))
      : [];

    // Zero-fit explanations: full list of why each pathway failed, grouped by reason
    const zeroFitExplanations = matches.length === 0 && ineligibleGoalRoutes.length > 0
      ? ineligibleGoalRoutes.map(item => ({ name: `${item.country.name} — ${item.pathway.name}`, reason: item.reasons[0] || 'does not meet current criteria' }))
      : [];

    return { matches, alternatives, missingInput: false, zeroFitExplanations };
  }

  root.GlobalRoute = root.GlobalRoute || {};
  root.GlobalRoute.RouteEngine = { recommend, scorePathway, isStale };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.GlobalRoute.RouteEngine;
})(typeof window !== 'undefined' ? window : globalThis);
