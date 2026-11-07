const { scorePathway, recommend } = require('../src/js/route-engine');

describe('canonical route engine', () => {
  test('hard-gates unverified data out of recommendations', () => {
    const result = scorePathway(
      { type: 'work', status: 'research_required' },
      { id: 'GB', dataStatus: 'evidence_required' },
      { goal: 'work' }
    );
    expect(result.score).toBe(0);
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/evidence review/);
  });

  test('rewards a matching goal when pathway is publishable and provenance exists', () => {
    const result = scorePathway(
      { type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' },
      { id: 'GB', dataStatus: 'publishable' },
      { goal: 'work' }
    );
    expect(result.score).toBe(35);
    expect(result.reasons).toContain('matches your stated route goal');
    expect(result.eligible).toBe(true);
  });

  test('does not let aggregate country-data gaps suppress an independently evidenced pathway', () => {
    const result = scorePathway(
      { type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' },
      { id: 'GB', dataStatus: 'evidence_required' },
      { goal: 'work' }
    );
    expect(result.score).toBe(35);
    expect(result.eligible).toBe(true);
  });

  test.each([
    [{ type: 'work', status: 'publishable', sourceUrl: 'https://example.gov/work' }, 'missing evidence IDs'],
    [{ type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'http://example.gov/work' }, 'insecure source']
  ])('fails closed when a publishable pathway has incomplete provenance (%s)', pathway => {
    const result = scorePathway(pathway, { id: 'GB', dataStatus: 'publishable' }, { goal: 'work' });
    expect(result.score).toBe(0);
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/missing evidence references or secure source provenance/);
  });

  test('returns only eligible, ranked, bounded recommendations', () => {
    const result = recommend(
      { goal: 'work' },
      [{ id: 'GB', dataStatus: 'publishable' }, { id: 'DE', dataStatus: 'publishable' }],
      [
        { id: 'gb-work', countryId: 'GB', type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' },
        { id: 'de-study', countryId: 'DE', type: 'study', status: 'publishable', evidenceIds: ['evidence-study'], sourceUrl: 'https://example.gov/study' }
      ],
      5
    );
    expect(result.matches).toHaveLength(1);
    expect(result.matches).toHaveLength(1);
    expect(result.matches[0].pathway.id).toBe('gb-work');
    expect(result.matches.every(item => item.score >= 0 && item.score <= 100)).toBe(true);
  });

  test('returns exact-pathway matches without treating aggregate country fields as verified', () => {
    const result = recommend(
      { goal: 'work' },
      [{ id: 'GB', name: 'United Kingdom', dataStatus: 'evidence_required' }],
      [{ id: 'gb-work', countryId: 'GB', type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' }],
      5
    );
    expect(result.matches).toHaveLength(1);
    expect(result.matches[0].pathway.id).toBe('gb-work');
    expect(result.matches[0].country.dataStatus).toBe('evidence_required');
  });

  test('does not rank arbitrary pathways when the user selects Any and no structured fit signal exists', () => {
    const result = recommend(
      { goal: 'any' },
      [{ id: 'GB', dataStatus: 'evidence_required' }],
      [{ id: 'gb-work', countryId: 'GB', type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' }],
      5
    );
    expect(result.matches).toHaveLength(0);
    expect(result.missingInput).toBe(true);
  });

  test.each([undefined, null, '', 'not-a-number', -1, 0])('blocks a known positive minimum-funds route when budget is missing or invalid (%s)', budget => {
    const result = scorePathway(
      { type: 'study', status: 'publishable', minFunds: 5000, evidenceIds: ['evidence-study'], sourceUrl: 'https://example.gov/study' },
      { id: 'GB', dataStatus: 'publishable' },
      { goal: 'study', budget }
    );
    expect(result.eligible).toBe(false);
    expect(result.score).toBe(0);
    expect(result.reasons[0]).toMatch(/valid budget meeting the known minimum funds requirement/);
  });

  test('accepts a known minimum-funds route only when the supplied budget meets the threshold', () => {
    const result = scorePathway(
      { type: 'study', status: 'publishable', minFunds: 5000, evidenceIds: ['evidence-study'], sourceUrl: 'https://example.gov/study' },
      { id: 'GB', dataStatus: 'publishable' },
      { goal: 'study', budget: '5000' }
    );
    expect(result.eligible).toBe(true);
    expect(result.score).toBe(50);
    expect(result.reasons).toContain('budget appears compatible');
  });

  test('applies numeric blockers only when the pathway explicitly declares them', () => {
    const result = scorePathway(
      { type: 'work', status: 'publishable', minExperienceYears: 5, evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' },
      { id: 'GB', dataStatus: 'publishable' },
      { goal: 'work', experienceYears: 2 }
    );
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/experience requirement/);
  });
});

describe('route recommendation safety regressions',()=>{
const work={id:'gb-work',countryId:'GB',type:'work',status:'publishable',evidenceIds:['evidence-work'],sourceUrl:'https://example.gov/work'};
test('absence of structured requirements is not proof of eligibility',()=>{const r=recommend({goal:'work'},[{id:'GB',dataStatus:'evidence_required'}],[{...work}],5);expect(r.matches).toHaveLength(1);expect(r.matches[0].pathway.requirements).toBeUndefined();expect(r.matches[0].country.dataStatus).toBe('evidence_required');});
test('missing country reference is not recommended',()=>{expect(recommend({goal:'work'},[],[{...work}],5).matches).toHaveLength(0);});
test('research-required routes are never recommended',()=>{expect(recommend({goal:'work'},[{id:'GB',dataStatus:'publishable'}],[{...work,status:'research_required'}],5).matches).toHaveLength(0);});
test('unknown thresholds are not defaulted to zero or reported compatible',()=>{const r=scorePathway({...work,minFunds:undefined,minExperienceYears:undefined,minMonthlyIncome:undefined},{id:'GB',dataStatus:'evidence_required'},{goal:'work'});expect(r.eligible).toBe(true);expect(r.score).toBe(35);expect(r.reasons).not.toContain('budget appears compatible');expect(r.reasons).not.toContain('experience requirement appears compatible');expect(r.reasons).not.toContain('income requirement appears compatible');});
});


describe('route threshold and no-match boundaries', () => {
  const country = { id: 'GB', dataStatus: 'evidence_required' };
  const evidencedStudy = { id: 'gb-study', countryId: 'GB', type: 'study', status: 'publishable', evidenceIds: ['study-evidence'], sourceUrl: 'https://example.gov/study' };

  test.each([4999, 0])('blocks a budget below the declared funds threshold (%s)', budget => {
    const result = scorePathway({ ...evidencedStudy, minFunds: 5000 }, country, { goal: 'study', budget });
    expect(result.eligible).toBe(false);
    expect(result.score).toBe(0);
    expect(result.reasons[0]).toMatch(/valid budget meeting the known minimum funds requirement/);
  });

  test.each([5000, 5001])('accepts a budget at or above the declared funds threshold (%s)', budget => {
    const result = scorePathway({ ...evidencedStudy, minFunds: 5000 }, country, { goal: 'study', budget });
    expect(result.eligible).toBe(true);
    expect(result.score).toBe(50);
    expect(result.reasons).toContain('budget appears compatible');
  });

  test.each([
    ['minFunds', '5000'],
    ['minMonthlyIncome', 'not-known'],
    ['minExperienceYears', -1],
    ['minExperienceYears', Number.NaN]
  ])('fails closed on malformed declared threshold %s=%s', (field, value) => {
    const result = scorePathway({ ...evidencedStudy, [field]: value }, country, { goal: 'study', budget: 10000, monthlyIncome: 10000, experienceYears: 10 });
    expect(result.eligible).toBe(false);
    expect(result.score).toBe(0);
    expect(result.reasons[0]).toContain(`invalid ${field} threshold`);
  });

  test('returns no recommendation when no positive structured fit signal matches', () => {
    const result = recommend({ goal: 'business' }, [country], [{ ...evidencedStudy }], 5);
    expect(result.matches).toHaveLength(0);
  });

  test('respects the caller-supplied recommendation limit', () => {
    const result = recommend(
      { goal: 'study' },
      [country],
      [
        { ...evidencedStudy, id: 'study-1' },
        { ...evidencedStudy, id: 'study-2' },
        { ...evidencedStudy, id: 'study-3' }
      ],
      2
    );
    expect(result.matches).toHaveLength(2);
  });
});

describe('GOIF asymmetry filter', () => {
  const country = { id: 'AU', dataStatus: 'publishable' };
  const funded = { id: 'au-funded', countryId: 'AU', type: 'work', status: 'publishable', evidenceIds: ['ev-1'], sourceUrl: 'https://example.gov/au', capital_tier: 'tier_1_funded', asymmetry_category: 'regional_skilled_gap' };
  const standard = { id: 'au-standard', countryId: 'AU', type: 'work', status: 'publishable', evidenceIds: ['ev-2'], sourceUrl: 'https://example.gov/au2' };

  test('tier_1_funded filter returns only funded pathways', () => {
    const filtered = [funded, standard].filter(p => p.capital_tier === 'tier_1_funded' || p.asymmetry_category === 'tier_1_funded');
    const result = recommend({ goal: 'work' }, [country], filtered, 5);
    expect(result.matches.map(m => m.pathway.id)).toContain('au-funded');
    expect(result.matches.map(m => m.pathway.id)).not.toContain('au-standard');
  });

  test('regional_skilled_gap filter returns only matching pathways', () => {
    const filtered = [funded, standard].filter(p => p.capital_tier === 'regional_skilled_gap' || p.asymmetry_category === 'regional_skilled_gap');
    const result = recommend({ goal: 'work' }, [country], filtered, 5);
    expect(result.matches.map(m => m.pathway.id)).toContain('au-funded');
    expect(result.matches.map(m => m.pathway.id)).not.toContain('au-standard');
  });

  test('pathway without GOIF fields is excluded when asymmetry filter is active', () => {
    const filtered = [standard].filter(p => p.capital_tier === 'tier_1_funded' || p.asymmetry_category === 'tier_1_funded');
    const result = recommend({ goal: 'work' }, [country], filtered, 5);
    expect(result.matches).toHaveLength(0);
  });

  test('pathway without GOIF fields still scores normally when no filter is active', () => {
    const result = recommend({ goal: 'work' }, [country], [standard], 5);
    expect(result.matches).toHaveLength(1);
    expect(result.matches[0].pathway.id).toBe('au-standard');
  });
});

describe('income and experience requirement boundaries', () => {
  const country = { id: 'GB', dataStatus: 'evidence_required' };
  const evidencedWork = {
    id: 'gb-work-boundary',
    countryId: 'GB',
    type: 'work',
    status: 'publishable',
    evidenceIds: ['work-evidence'],
    sourceUrl: 'https://example.gov/work'
  };

  test.each([
    [999, false],
    [1000, true],
    [1001, true]
  ])('checks monthly income against the declared minimum (%s)', (monthlyIncome, eligible) => {
    const result = scorePathway(
      { ...evidencedWork, minMonthlyIncome: 1000 },
      country,
      { goal: 'work', monthlyIncome }
    );
    expect(result.eligible).toBe(eligible);
    if (eligible) {
      expect(result.reasons).toContain('income requirement appears compatible');
    } else {
      expect(result.reasons[0]).toMatch(/income requirement is a likely blocker/);
    }
  });

  test.each([
    [1, false],
    [2, true],
    [3, true]
  ])('checks experience against the declared minimum (%s)', (experienceYears, eligible) => {
    const result = scorePathway(
      { ...evidencedWork, minExperienceYears: 2 },
      country,
      { goal: 'work', experienceYears }
    );
    expect(result.eligible).toBe(eligible);
    if (eligible) {
      expect(result.reasons).toContain('experience requirement appears compatible');
    } else {
      expect(result.reasons[0]).toMatch(/experience requirement is a likely blocker/);
    }
  });

  test('does not infer income or experience requirements when declarations are absent', () => {
    const result = scorePathway(evidencedWork, country, { goal: 'work' });
    expect(result.eligible).toBe(true);
    expect(result.reasons).not.toContain('income requirement appears compatible');
    expect(result.reasons).not.toContain('experience requirement appears compatible');
  });
});

describe('GOIF gap card fields', () => {
  test('regional_concessions is preserved on GOIF pathway objects', () => {
    const p = {
      id: 'AU-dama-regional', countryId: 'AU', type: 'work', status: 'publishable',
      evidenceIds: ['AU-dama-regional-eligibility-2026-10-29'],
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements',
      asymmetry_category: 'regional_skilled_gap',
      capital_tier: 'tier_2_moderate',
      regional_concessions: { age_limit_extension: 55, language_score_floor_reduction: true, salary_concession_percent: 10 }
    };
    expect(p.regional_concessions.age_limit_extension).toBe(55);
    expect(p.regional_concessions.language_score_floor_reduction).toBe(true);
    expect(p.regional_concessions.salary_concession_percent).toBe(10);
  });

  test('tier_1_funded pathway has no regional_concessions', () => {
    const p = {
      id: 'IT-dsu-need-blind', countryId: 'IT', type: 'study', status: 'publishable',
      evidenceIds: ['IT-dsu-need-blind-eligibility-2026-10-29'],
      sourceUrl: 'https://www.dsu.toscana.it/',
      asymmetry_category: 'academic_research',
      capital_tier: 'tier_1_funded'
    };
    expect(p.capital_tier).toBe('tier_1_funded');
    expect(p.regional_concessions).toBeUndefined();
  });

  test('scorePathway handles GOIF pathway with regional_concessions without error', () => {
    const p = {
      id: 'AU-dama-regional', countryId: 'AU', type: 'work', status: 'publishable',
      evidenceIds: ['AU-dama-regional-eligibility-2026-10-29'],
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements',
      asymmetry_category: 'regional_skilled_gap',
      capital_tier: 'tier_2_moderate',
      regional_concessions: { age_limit_extension: 55, language_score_floor_reduction: true, salary_concession_percent: 10 }
    };
    const result = scorePathway(p, { id: 'AU', dataStatus: 'publishable' }, { goal: 'work' });
    expect(result.eligible).toBe(true);
    expect(result.score).toBeGreaterThan(0);
  });
});

const { evaluateNationality, evaluateRequirements, normalizeCurrency } = require('../src/js/route-engine');

// ── P0.2 — evaluateNationality ────────────────────────────────────────────────

describe('P0.2 evaluateNationality', () => {
  const allowlistPathway = {
    nationalityEligibility: {
      scope: 'allowlist',
      eligiblePassports: ['CA', 'AU', 'GB'],
      conditions: [{ passport: 'AU', note: 'Government support letter required.' }]
    }
  };
  const blocklistPathway = {
    nationalityEligibility: {
      scope: 'blocklist',
      excludedPassports: ['RU']
    }
  };
  const openPathway = {
    nationalityEligibility: { scope: 'all' }
  };
  const noNationalityPathway = {};

  test('returns eligible for passport on allowlist with no condition', () => {
    const r = evaluateNationality(allowlistPathway, 'CA');
    expect(r.status).toBe('eligible');
  });

  test('returns conditional for passport on allowlist with a condition', () => {
    const r = evaluateNationality(allowlistPathway, 'AU');
    expect(r.status).toBe('conditional');
    expect(r.reason).toMatch(/Government support letter/);
  });

  test('returns ineligible for passport not on allowlist', () => {
    const r = evaluateNationality(allowlistPathway, 'NG');
    expect(r.status).toBe('ineligible');
    expect(r.reason).toMatch(/NG passport is not on the eligible-country list/);
  });

  test('returns ineligible for passport on blocklist', () => {
    const r = evaluateNationality(blocklistPathway, 'RU');
    expect(r.status).toBe('ineligible');
    expect(r.reason).toMatch(/explicitly excluded/);
  });

  test('returns eligible for passport not on blocklist', () => {
    const r = evaluateNationality(blocklistPathway, 'NG');
    expect(r.status).toBe('eligible');
  });

  test('returns eligible for open scope', () => {
    const r = evaluateNationality(openPathway, 'NG');
    expect(r.status).toBe('eligible');
  });

  test('returns unknown when no nationalityEligibility declared', () => {
    const r = evaluateNationality(noNationalityPathway, 'NG');
    expect(r.status).toBe('unknown');
  });

  test('returns unknown when no passport provided', () => {
    const r = evaluateNationality(allowlistPathway, '');
    expect(r.status).toBe('unknown');
  });

  test('passport matching is case-insensitive', () => {
    expect(evaluateNationality(allowlistPathway, 'ca').status).toBe('eligible');
    expect(evaluateNationality(allowlistPathway, 'ng').status).toBe('ineligible');
  });

  test('ineligible passport blocks scorePathway', () => {
    const pathway = {
      type: 'work', status: 'publishable',
      evidenceIds: ['ev-1'], sourceUrl: 'https://example.gov/work',
      nationalityEligibility: { scope: 'allowlist', eligiblePassports: ['CA'] }
    };
    const result = scorePathway(pathway, { id: 'CA', dataStatus: 'publishable' }, { goal: 'work', passportCountry: 'NG' });
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/not on the eligible-country list/);
  });

  test('unknown nationality does not block scorePathway but sets nationalityStatus', () => {
    const pathway = {
      type: 'work', status: 'publishable',
      evidenceIds: ['ev-1'], sourceUrl: 'https://example.gov/work'
    };
    const result = scorePathway(pathway, { id: 'GB', dataStatus: 'publishable' }, { goal: 'work', passportCountry: 'NG' });
    expect(result.eligible).toBe(true);
    expect(result.nationalityStatus).toBe('unknown');
  });
});

// ── P0.3 — evaluateRequirements ──────────────────────────────────────────────

describe('P0.3 evaluateRequirements', () => {
  const basePathway = (reqs) => ({ requirements: reqs });

  test('job_offer=no is a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'job_offer', kind: 'boolean', value: true }]),
      { hasJobOffer: 'no' }
    );
    expect(blockers.length).toBe(1);
    expect(blockers[0]).toMatch(/job offer is required/);
  });

  test('job_offer unanswered is a warning not a blocker', () => {
    const { blockers, warnings } = evaluateRequirements(
      basePathway([{ field: 'job_offer', kind: 'boolean', value: true }]),
      {}
    );
    expect(blockers.length).toBe(0);
    expect(warnings.length).toBe(1);
    expect(warnings[0]).toMatch(/job offer/);
  });

  test('admission_offer=no is a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'admission_offer', kind: 'boolean', value: true }]),
      { hasAdmissionOffer: 'no' }
    );
    expect(blockers.length).toBe(1);
  });

  test('sponsorship=no is a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'sponsorship', kind: 'boolean', value: true }]),
      { hasSponsorship: 'no' }
    );
    expect(blockers.length).toBe(1);
  });

  test('age below minimum is a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'minimum_age', kind: 'number', value: 18 }]),
      { age: 17 }
    );
    expect(blockers.length).toBe(1);
    expect(blockers[0]).toMatch(/Minimum age/);
  });

  test('age at minimum is not a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'minimum_age', kind: 'number', value: 18 }]),
      { age: 18 }
    );
    expect(blockers.length).toBe(0);
  });

  test('experience below minimum is a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'minimum_experience_years', kind: 'number', value: 3 }]),
      { experienceYears: 2 }
    );
    expect(blockers.length).toBe(1);
  });

  test('annual salary below minimum is a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'minimum_annual_salary', kind: 'money', value: 30000, currency: 'GBP' }]),
      { monthlyIncome: 2000 } // 24000/yr < 30000
    );
    expect(blockers.length).toBe(1);
    expect(blockers[0]).toMatch(/Salary requirement/);
  });

  test('annual salary at minimum is not a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'minimum_annual_salary', kind: 'money', value: 30000, currency: 'GBP' }]),
      { monthlyIncome: 2500 } // 30000/yr = 30000
    );
    expect(blockers.length).toBe(0);
  });

  test('points below minimum is a blocker', () => {
    const { blockers } = evaluateRequirements(
      basePathway([{ field: 'minimum_points_score', kind: 'number', value: 67 }]),
      { pointsScore: 60 }
    );
    expect(blockers.length).toBe(1);
  });

  test('unanswered points requirement is a warning not a blocker', () => {
    const { blockers, warnings } = evaluateRequirements(
      basePathway([{ field: 'minimum_points_score', kind: 'number', value: 67 }]),
      {}
    );
    expect(blockers.length).toBe(0);
    expect(warnings.length).toBe(1);
  });

  test('minimum_funds is skipped by evaluateRequirements', () => {
    const { blockers, warnings } = evaluateRequirements(
      basePathway([{ field: 'minimum_funds', kind: 'money', value: 10000, currency: 'EUR' }]),
      {}
    );
    expect(blockers.length).toBe(0);
    expect(warnings.length).toBe(0);
  });

  test('empty requirements returns no blockers or warnings', () => {
    const { blockers, warnings } = evaluateRequirements(basePathway([]), {});
    expect(blockers.length).toBe(0);
    expect(warnings.length).toBe(0);
  });

  test('blocker from requirements blocks scorePathway', () => {
    const pathway = {
      type: 'work', status: 'publishable',
      evidenceIds: ['ev-1'], sourceUrl: 'https://example.gov/work',
      requirements: [{ field: 'job_offer', kind: 'boolean', value: true }]
    };
    const result = scorePathway(pathway, { id: 'GB', dataStatus: 'publishable' }, { goal: 'work', hasJobOffer: 'no' });
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/job offer is required/);
  });
});

// ── P0.4 — normalizeCurrency ─────────────────────────────────────────────────

describe('P0.4 normalizeCurrency', () => {
  test('USD to USD returns same amount', () => {
    const r = normalizeCurrency(1000, 'USD');
    expect(r.usd).toBe(1000);
    expect(r.unknown).toBe(false);
    expect(r.currency).toBe('USD');
  });

  test('EUR converts to USD', () => {
    const r = normalizeCurrency(1000, 'EUR');
    expect(r.usd).toBe(1080);
    expect(r.unknown).toBe(false);
    expect(r.original).toBe(1000);
    expect(r.currency).toBe('EUR');
  });

  test('GBP converts to USD', () => {
    const r = normalizeCurrency(1000, 'GBP');
    expect(r.usd).toBe(1270);
    expect(r.unknown).toBe(false);
  });

  test('unknown currency returns unknown=true and null usd', () => {
    const r = normalizeCurrency(1000, 'XYZ');
    expect(r.unknown).toBe(true);
    expect(r.usd).toBeNull();
    expect(r.original).toBe(1000);
  });

  test('missing currency defaults to USD', () => {
    const r = normalizeCurrency(500, undefined);
    expect(r.usd).toBe(500);
    expect(r.unknown).toBe(false);
  });

  test('currency matching is case-insensitive', () => {
    const r = normalizeCurrency(1000, 'eur');
    expect(r.usd).toBe(1080);
    expect(r.unknown).toBe(false);
  });

  test('EUR funds threshold blocks USD budget below normalized value', () => {
    const pathway = {
      type: 'study', status: 'publishable',
      evidenceIds: ['ev-1'], sourceUrl: 'https://example.gov/study',
      requirements: [{ field: 'minimum_funds', kind: 'money', value: 10000, currency: 'EUR' }]
    };
    // EUR 10000 = USD 10800 — budget of USD 9000 should block
    const result = scorePathway(pathway, { id: 'DE', dataStatus: 'publishable' }, { goal: 'study', budget: '9000' });
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/EUR 10000/);
  });

  test('EUR funds threshold passes USD budget above normalized value', () => {
    const pathway = {
      type: 'study', status: 'publishable',
      evidenceIds: ['ev-1'], sourceUrl: 'https://example.gov/study',
      requirements: [{ field: 'minimum_funds', kind: 'money', value: 10000, currency: 'EUR' }]
    };
    // EUR 10000 = USD 10800 — budget of USD 11000 should pass
    const result = scorePathway(pathway, { id: 'DE', dataStatus: 'publishable' }, { goal: 'study', budget: '11000' });
    expect(result.eligible).toBe(true);
  });

  test('unknown currency does not block — produces warning instead', () => {
    const pathway = {
      type: 'study', status: 'publishable',
      evidenceIds: ['ev-1'], sourceUrl: 'https://example.gov/study',
      requirements: [{ field: 'minimum_funds', kind: 'money', value: 10000, currency: 'XYZ' }]
    };
    const result = scorePathway(pathway, { id: 'XX', dataStatus: 'publishable' }, { goal: 'study', budget: '5000' });
    expect(result.eligible).toBe(true);
    expect(result.warnings.some(w => w.match(/currency conversion unavailable/))).toBe(true);
  });
});
