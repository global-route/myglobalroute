describe('canonical route engine contract', () => {
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const score = (pathway, country, profile) => {
    let value = 0;
    if (profile.goal !== 'any' && pathway.type === profile.goal) value += 35;
    if (country.dataStatus !== 'publishable' || pathway.status !== 'publishable') value = Math.min(value, 20);
    return clamp(value, 0, 100);
  };

  test('never emits a score above 20 for unverified data', () => {
    expect(score({ type: 'work', status: 'research_required' }, { dataStatus: 'evidence_required' }, { goal: 'work' })).toBe(20);
  });

  test('goal match is rewarded for publishable pathways', () => {
    expect(score({ type: 'work', status: 'publishable' }, { dataStatus: 'publishable' }, { goal: 'work' })).toBe(35);
  });

  test('score is bounded', () => {
    expect(clamp(150, 0, 100)).toBe(100);
    expect(clamp(-5, 0, 100)).toBe(0);
  });
});
