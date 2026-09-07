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
      { type: 'work', status: 'publishable' },
      { id: 'GB', dataStatus: 'publishable' },
      { goal: 'work' }
    );
    expect(result.score).toBe(35);
    expect(result.reasons).toContain('matches your stated route goal');
    expect(result.eligible).toBe(true);
  });

  test('rejects a publishable pathway when the country is still evidence-gated', () => {
    const result = scorePathway(
      { type: 'work', status: 'publishable' },
      { id: 'GB', dataStatus: 'evidence_required' },
      { goal: 'work' }
    );
    expect(result.score).toBe(0);
    expect(result.eligible).toBe(false);
  });

  test('returns only eligible, ranked, bounded recommendations', () => {
    const result = recommend(
      { goal: 'work' },
      [{ id: 'GB', dataStatus: 'publishable' }, { id: 'DE', dataStatus: 'publishable' }],
      [
        { id: 'gb-work', countryId: 'GB', type: 'work', status: 'publishable' },
        { id: 'de-study', countryId: 'DE', type: 'study', status: 'publishable' }
      ],
      5
    );
    expect(result).toHaveLength(1);
    expect(result[0].pathway.id).toBe('gb-work');
    expect(result.every(item => item.score >= 0 && item.score <= 100)).toBe(true);
  });

  test('applies numeric blockers only when the pathway explicitly declares them', () => {
    const result = scorePathway(
      { type: 'work', status: 'publishable', minExperienceYears: 5 },
      { id: 'GB', dataStatus: 'publishable' },
      { goal: 'work', experienceYears: 2 }
    );
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/experience requirement/);
  });
});
