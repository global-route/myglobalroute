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

  test('rewards a matching goal only when country and pathway are publishable', () => {
    const result = scorePathway(
      { type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' },
      { id: 'GB', dataStatus: 'publishable' },
      { goal: 'work' }
    );
    expect(result.score).toBe(35);
    expect(result.reasons).toContain('matches your stated route goal');
    expect(result.eligible).toBe(true);
  });

  test('rejects a publishable pathway when the country is still evidence-gated', () => {
    const result = scorePathway(
      { type: 'work', status: 'publishable', evidenceIds: ['evidence-work'], sourceUrl: 'https://example.gov/work' },
      { id: 'GB', dataStatus: 'evidence_required' },
      { goal: 'work' }
    );
    expect(result.score).toBe(0);
    expect(result.eligible).toBe(false);
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
    expect(result[0].pathway.id).toBe('gb-work');
    expect(result.every(item => item.score >= 0 && item.score <= 100)).toBe(true);
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
