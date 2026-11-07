/* Canonical route recommendation engine. Safety-first: only publishable, evidence-backed pathways can be recommended. */
(function (root) {
  'use strict';
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const number = value => Number.isFinite(Number(value)) ? Number(value) : 0;

  const STALE_DAYS = 180;

  // P0.2 — Nationality eligibility check.
  // Returns { status, reason } where status is one of:
  //   'eligible'   — passport explicitly allowed or no restriction declared
  //   'ineligible' — passport explicitly excluded
  //   'conditional'— passport allowed subject to additional conditions
  //   'unknown'    — nationality eligibility not yet verified for this pathway
  function evaluateNationality(pathway, passportCountry) {
    const ne = pathway.nationalityEligibility;
    if (!ne || !passportCountry) {
      return { status: 'unknown', reason: 'Nationality eligibility not yet verified for this pathway.' };
    }
    const scope = ne.scope || 'unknown';
    const passport = String(passportCountry).toUpperCase();
    if (scope === 'all') {
      return { status: 'eligible', reason: 'Open to all nationalities.' };
    }
    if (scope === 'allowlist') {
      const allowed = (ne.eligiblePassports || []).map(p => p.toUpperCase());
      if (allowed.includes(passport)) {
        const cond = (ne.conditions || []).find(c => c.passport === passport || c.passport === 'all');
        if (cond) return { status: 'conditional', reason: cond.note || 'Additional condition applies.' };
        return { status: 'eligible', reason: 'Passport is on the eligible list.' };
      }
      return { status: 'ineligible', reason: `${passport} passport is not on the eligible-country list for this programme.` };
    }
    if (scope === 'blocklist') {
      const blocked = (ne.excludedPassports || []).map(p => p.toUpperCase());
      if (blocked.includes(passport)) {
        return { status: 'ineligible', reason: `${passport} passport is explicitly excluded from this programme.` };
      }
      return { status: 'eligible', reason: 'Passport is not on the exclusion list.' };
    }
    return { status: 'unknown', reason: 'Nationality eligibility scope not declared for this pathway.' };
  }

  // P0.3 — Structured requirement evaluation.
  // Evaluates all non-funds requirements declared in pathway.requirements[].
  // Returns { blockers: [], warnings: [] }
  // A blocker means the user has provided information that confirms they cannot meet a mandatory condition.
  // Unknown (user did not answer) is never treated as a pass — it becomes a warning, not a blocker.
  function evaluateRequirements(pathway, profile) {
    const reqs = Array.isArray(pathway.requirements) ? pathway.requirements : [];
    const blockers = [];
    const warnings = [];

    for (const req of reqs) {
      const field = req.field;
      const kind = req.kind;

      // minimum_funds handled separately in scorePathway — skip here
      if (field === 'minimum_funds' || field === 'minimum_maintenance_funds') continue;

      if (field === 'job_offer' && kind === 'boolean') {
        if (profile.hasJobOffer === 'no') blockers.push('A confirmed job offer is required for this pathway.');
        else if (!profile.hasJobOffer) warnings.push('This pathway requires a job offer — confirm before applying.');
      }

      if (field === 'admission_offer' && kind === 'boolean') {
        if (profile.hasAdmissionOffer === 'no') blockers.push('A confirmed university admission offer is required.');
        else if (!profile.hasAdmissionOffer) warnings.push('This pathway requires an admission offer — confirm before applying.');
      }

      if (field === 'sponsorship' && kind === 'boolean') {
        if (profile.hasSponsorship === 'no') blockers.push('Employer sponsorship is required for this pathway.');
        else if (!profile.hasSponsorship) warnings.push('This pathway requires employer sponsorship — confirm before applying.');
      }

      if (field === 'minimum_age' && kind === 'number') {
        const age = number(profile.age);
        const minAge = number(req.value);
        if (age > 0 && minAge > 0 && age < minAge) blockers.push(`Minimum age for this pathway is ${minAge}.`);
      }

      if (field === 'minimum_experience_years' && kind === 'number') {
        const exp = number(profile.experienceYears);
        const minExp = number(req.value);
        if (exp > 0 && minExp > 0 && exp < minExp) blockers.push(`Minimum ${minExp} years of experience required.`);
        else if (!profile.experienceYears && minExp > 0) warnings.push(`This pathway requires ${minExp}+ years of experience.`);
      }

      if ((field === 'minimum_annual_salary' || field === 'minimum_monthly_salary') && kind === 'money') {
        const income = number(profile.monthlyIncome);
        const reqVal = number(req.value);
        if (income > 0 && reqVal > 0) {
          const compareIncome = field === 'minimum_annual_salary' ? income * 12 : income;
          if (compareIncome < reqVal) blockers.push(`Salary requirement: ${req.currency || ''} ${reqVal} (${field.replace('minimum_', '').replace('_', ' ')}).`);
        } else if (!profile.monthlyIncome && reqVal > 0) {
          warnings.push(`This pathway has a salary requirement of ${req.currency || ''} ${reqVal}.`);
        }
      }

      if (field === 'minimum_points_score' && kind === 'number') {
        const points = number(profile.pointsScore);
        const minPoints = number(req.value);
        if (points > 0 && minPoints > 0 && points < minPoints) blockers.push(`Minimum points score of ${minPoints} required.`);
        else if (!profile.pointsScore && minPoints > 0) warnings.push(`This pathway uses a points test — minimum ${minPoints} points required.`);
      }

      if (field === 'qualification' && kind === 'text') {
        if (!profile.hasQualification) warnings.push(`Qualification required: ${req.value || 'see official source'}.`);
      }
    }

    return { blockers, warnings };
  }

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
    if (!pathway || !country || pathway.status !== 'publishable') {
      return { score: 0, reasons: ['not recommendation-eligible until pathway evidence review is complete'], eligible: false };
    }
    const hasEvidenceIds = Array.isArray(pathway.evidenceIds) && pathway.evidenceIds.length > 0 && pathway.evidenceIds.every(id => typeof id === 'string' && id.trim().length > 0);
    const hasSecureSource = typeof pathway.sourceUrl === 'string' && /^https:\/\//i.test(pathway.sourceUrl);
    if (!hasEvidenceIds || !hasSecureSource) {
      return { score: 0, reasons: ['missing evidence references or secure source provenance'], eligible: false };
    }
    for (const field of ['minFunds', 'minMonthlyIncome', 'minExperienceYears']) {
      if (pathway[field] !== undefined && (typeof pathway[field] !== 'number' || !Number.isFinite(pathway[field]) || pathway[field] < 0)) {
        return { score: 0, reasons: [`invalid ${field} threshold prevents safe recommendation`], eligible: false };
      }
    }

    // P0.2 — Nationality check: ineligible passport is a hard block
    const nationality = evaluateNationality(pathway, profile.passportCountry);
    if (nationality.status === 'ineligible') {
      return { score: 0, reasons: [nationality.reason], eligible: false, nationalityStatus: nationality.status };
    }

    // P0.3 — Structured requirement evaluation: any blocker is a hard block
    const { blockers, warnings } = evaluateRequirements(pathway, profile);
    if (blockers.length) {
      return { score: 0, reasons: blockers, eligible: false };
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
      const tier = selectFundsTier(pathway.requirements, profile);
      if (tier) {
        const tierMin = number(tier.value);
        if (tierMin > 0 && hasValidBudget && budget < tierMin) {
          return { score: 0, reasons: [`budget below the ${tier.currency || ''} ${tierMin} funds threshold for your family size`], eligible: false };
        }
        if (tierMin > 0 && hasValidBudget) { score += 10; reasons.push(`funds threshold (${tier.currency || ''} ${tierMin}) appears compatible`); }
      }
    }

    // Nationality unknown — eligible for discovery but flag it
    if (nationality.status === 'unknown') {
      warnings.push('Nationality eligibility not yet verified — confirm with the official source.');
    }

    return {
      score: clamp(score, 0, 100),
      reasons,
      warnings,
      eligible: true,
      matchedTier: selectFundsTier(pathway.requirements, profile),
      nationalityStatus: nationality.status,
      nationalityReason: nationality.reason
    };
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
  root.GlobalRoute.RouteEngine = { recommend, scorePathway, isStale, evaluateNationality, evaluateRequirements };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.GlobalRoute.RouteEngine;
})(typeof window !== 'undefined' ? window : globalThis);
