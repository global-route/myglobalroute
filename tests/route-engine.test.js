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
    expect(result).toHaveLength(1);
    expect(result).toHaveLength(1);
    expect(result[0].pathway.id).toBe('gb-work');
    expect(result.every(item => item.score >= 0 && item.score <= 100)).toBe(true);
  });

  test('returns exact-pathway matches without treating aggregate country fields as verified', () => {
    const result = recommend(
      { goal: 'work' },
      [{ id: 'GB', name: 'United Kingdom', dataStatus: 'evidence_required' }],
      [{ id: 'gb-work', countryId: 'GB', type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' }],
      5
    );
    expect(result).toHaveLength(1);
    expect(result[0].pathway.id).toBe('gb-work');
    expect(result[0].country.dataStatus).toBe('evidence_required');
  });

  test('does not rank arbitrary pathways when the user selects Any and no structured fit signal exists', () => {
    const result = recommend(
      { goal: 'any' },
      [{ id: 'GB', dataStatus: 'evidence_required' }],
      [{ id: 'gb-work', countryId: 'GB', type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' }],
      5
    );
    expect(result).toHaveLength(0);
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
test('absence of structured requirements is not proof of eligibility',()=>{const r=recommend({goal:'work'},[{id:'GB',dataStatus:'evidence_required'}],[{...work}],5);expect(r).toHaveLength(1);expect(r[0].pathway.requirements).toBeUndefined();expect(r[0].country.dataStatus).toBe('evidence_required');});
test('missing country reference is not recommended',()=>{expect(recommend({goal:'work'},[],[{...work}],5)).toHaveLength(0);});
test('research-required routes are never recommended',()=>{expect(recommend({goal:'work'},[{id:'GB',dataStatus:'publishable'}],[{...work,status:'research_required'}],5)).toHaveLength(0);});
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
    expect(result).toHaveLength(0);
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
    expect(result).toHaveLength(2);
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
