const { validateRegistry, validHttpsDestination } = require('../scripts/validate-commercial-registry');

const emptyRegistry = { schemaVersion: '1.0.0', lastReviewedAt: null, entries: [] };
const verifiedEntry = {
  id: 'partner-one',
  status: 'verified',
  category: 'education',
  name: 'Partner One',
  destinationUrl: 'https://partner.example/apply',
  disclosure: 'Referral relationship disclosed.',
  reviewedAt: '2026-10-01',
  expiresAt: '2026-12-01'
};

describe('commercial registry governance', () => {
  test('accepts the empty launch-safe registry', () => {
    expect(validateRegistry(emptyRegistry)).toEqual([]);
  });

  test('requires reviewed and future-expiring metadata for verified entries', () => {
    expect(validateRegistry({ ...emptyRegistry, entries: [verifiedEntry] })).toEqual([]);
    expect(validateRegistry({
      ...emptyRegistry,
      entries: [{ ...verifiedEntry, reviewedAt: null, expiresAt: null }]
    })).toEqual(expect.arrayContaining([
      expect.stringContaining('reviewedAt'),
      expect.stringContaining('expiresAt')
    ]));
  });

  test('rejects non-HTTPS and credential-bearing destinations', () => {
    expect(validHttpsDestination('http://partner.example')).toBe(false);
    expect(validHttpsDestination('https://user:pass@partner.example')).toBe(false);
    expect(validHttpsDestination('https://partner.example/apply')).toBe(true);
  });

  test('rejects duplicate ids, unknown statuses and unsupported categories', () => {
    const entry = { ...verifiedEntry, status: 'verified' };
    const errors = validateRegistry({
      ...emptyRegistry,
      entries: [entry, { ...entry, category: 'crypto' }]
    });
    expect(errors).toEqual(expect.arrayContaining([
      expect.stringContaining('duplicates'),
      expect.stringContaining('category')
    ]));
  });

  test('requires a lowercase slug id and non-empty disclosure', () => {
    const errors = validateRegistry({
      ...emptyRegistry,
      entries: [{ ...verifiedEntry, id: 'Partner One', disclosure: ' ' }]
    });
    expect(errors).toEqual(expect.arrayContaining([
      expect.stringContaining('lowercase slug'),
      expect.stringContaining('disclosure')
    ]));
  });
});
