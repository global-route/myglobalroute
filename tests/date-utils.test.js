const { isIsoDate, isOnOrBefore, isOnOrAfter } = require('../scripts/date-utils');

describe('strict ISO calendar date validation', () => {
  test.each(['2026-01-01', '2000-02-29', '2024-12-31'])('accepts valid date %s', value => {
    expect(isIsoDate(value)).toBe(true);
  });

  test.each(['2026-02-30', '2025-02-29', '2026-13-01', '2026-1-01', '', null, '2026-01-01T00:00:00Z'])('rejects invalid date %s', value => {
    expect(isIsoDate(value)).toBe(false);
  });

  test('compares valid ISO dates lexically and rejects invalid operands', () => {
    expect(isOnOrBefore('2026-10-01', '2026-10-09')).toBe(true);
    expect(isOnOrBefore('2026-10-10', '2026-10-09')).toBe(false);
    expect(isOnOrBefore('not-a-date', '2026-10-09')).toBe(false);
    expect(isOnOrAfter('2026-10-09', '2026-10-09')).toBe(true);
    expect(isOnOrAfter('2026-10-08', '2026-10-09')).toBe(false);
  });
});
