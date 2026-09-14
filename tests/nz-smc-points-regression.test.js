const SMC_POINTS = 6;
const MAX_NZ_WORK_POINTS = 3;

function scorePointsBase(primaryPoints, nzWorkPoints = 0) {
  if (!Number.isInteger(primaryPoints) || primaryPoints < 3 || primaryPoints > 6) {
    throw new Error('Primary SMC points must be an integer from 3 to 6');
  }
  if (!Number.isInteger(nzWorkPoints) || nzWorkPoints < 0 || nzWorkPoints > MAX_NZ_WORK_POINTS) {
    throw new Error('NZ skilled-work points must be an integer from 0 to 3');
  }
  return primaryPoints + nzWorkPoints;
}

describe('New Zealand SMC points-based route', () => {
  test('requires 6 total points', () => {
    expect(scorePointsBase(6)).toBe(6);
    expect(scorePointsBase(3, 3)).toBe(6);
    expect(scorePointsBase(5, 1)).toBe(6);
    expect(scorePointsBase(4, 2)).toBe(6);
  });

  test('caps New Zealand skilled-work contribution at 3 points', () => {
    expect(scorePointsBase(3, 3)).toBe(6);
    expect(() => scorePointsBase(3, 4)).toThrow();
  });

  test('does not allow a zero-point primary category to masquerade as a points route', () => {
    expect(() => scorePointsBase(0, 6)).toThrow();
    expect(() => scorePointsBase(2, 4)).toThrow();
  });

  test('primary-category points and NZ work points are separate inputs', () => {
    // INZ permits points from one skill category (qualification, registration, or
    // income) to be combined only with eligible NZ skilled-work experience.
    expect(scorePointsBase(4, 2)).toBe(6);
    expect(scorePointsBase(5, 1)).toBe(6);
    expect(scorePointsBase(6, 0)).toBe(6);
  });

  test('under-six totals remain ineligible', () => {
    expect(scorePointsBase(3, 0)).toBeLessThan(SMC_POINTS);
    expect(scorePointsBase(4, 1)).toBeLessThan(SMC_POINTS);
    expect(scorePointsBase(5, 0)).toBeLessThan(SMC_POINTS);
  });
});
