const { scorePathway, recommend } = require('../src/js/route-engine');

describe('canonical route engine', () => {
  test('never scores unverified data above the safe ceiling', () => {
    expect(scorePathway({ type: 'work', status: 'research_required' }, { id: 'GB', dataStatus: 'evidence_required' }, { goal: 'work' }).score).toBe(20);
  });
  test('rewards a matching goal when evidence is publishable', () => {
    const result = scorePathway({ type: 'work', status: 'publishable' }, { id: 'GB', dataStatus: 'publishable' }, { goal: 'work' });
    expect(result.score).toBe(35);
    expect(result.reasons).toContain('matches your stated route goal');
  });
  test('returns ranked, bounded recommendations', () => {
    const result = recommend(
      { goal: 'work' },
      [{ id: 'GB', dataStatus: 'publishable' }, { id: 'DE', dataStatus: 'publishable' }],
      [{ id: 'gb-work', countryId: 'GB', type: 'work', status: 'publishable' }, { id: 'de-study', countryId: 'DE', type: 'study', status: 'publishable' }],
      5
    );
    expect(result).toHaveLength(2);
    expect(result[0].pathway.id).toBe('gb-work');
    expect(result.every(item => item.score >= 0 && item.score <= 100)).toBe(true);
  });
});
