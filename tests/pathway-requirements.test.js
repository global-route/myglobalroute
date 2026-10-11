const { isRealIsoDate, validateRequirement, validatePathwayRequirements } = require('../scripts/pathway-requirements');

const pathway = { id: 'GB-work', countryId: 'GB' };
const evidence = {
  id: 'GB-work-finance-2026-10-01',
  pathwayId: 'GB-work',
  field: 'financial-requirement',
  sourceUrl: 'https://example.gov/work/costs',
  jurisdiction: 'United Kingdom',
  effectiveDate: '2026-10-01'
};
const validMoney = {
  id: 'funds-minimum',
  field: 'minimum_funds',
  kind: 'money',
  value: 1270,
  currency: 'GBP',
  period: 'total',
  jurisdiction: 'United Kingdom',
  effectiveDate: '2026-10-01',
  sourceUrl: evidence.sourceUrl,
  evidenceIds: [evidence.id]
};

describe('pathway requirement schema validation', () => {
  test.each(['2026-10-11', '2000-02-29'])('accepts real ISO date %s', date => {
    expect(isRealIsoDate(date)).toBe(true);
  });

  test.each(['2026-02-30', '2026-13-01', '2026-1-01', '', null, 'not-a-date'])('rejects invalid ISO date %s', date => {
    expect(isRealIsoDate(date)).toBe(false);
  });

  test('accepts a structured financial requirement with exact pathway evidence', () => {
    expect(validateRequirement(validMoney, pathway, new Map([[evidence.id, evidence]]))).toEqual([]);
  });

  test('rejects absent evidence, insecure source, invalid currency and ambiguous period', () => {
    const invalid = { ...validMoney, sourceUrl: 'http://example.gov/work/costs', evidenceIds: ['missing'], currency: 'gbp', period: 'unknown' };
    const errors = validateRequirement(invalid, pathway, new Map([[evidence.id, evidence]]));
    expect(errors).toEqual(expect.arrayContaining([
      'sourceUrl must be HTTPS',
      'evidence missing does not exist',
      'currency must be a three-letter uppercase code',
      'period must be total, monthly or annual'
    ]));
  });


  test('requires monthly units for minimum monthly income', () => {
    const income = {
      ...validMoney,
      id: 'monthly-income',
      field: 'minimum_monthly_income',
      value: 2500,
      period: 'annual'
    };
    expect(validateRequirement(income, pathway, new Map([[evidence.id, evidence]]))).toContain('minimum_monthly_income period must be monthly');
  });

  test('rejects evidence from a different pathway or evidence field', () => {
    const wrongScope = { ...evidence, pathwayId: 'OTHER', field: 'eligibility' };
    const errors = validateRequirement(validMoney, pathway, new Map([[evidence.id, wrongScope]]));
    expect(errors).toContain('evidence GB-work-finance-2026-10-01 does not belong to pathway GB-work');
    expect(errors).toContain('evidence GB-work-finance-2026-10-01 must support field financial-requirement');
  });

  test('rejects effective-date or jurisdiction mismatch', () => {
    const invalid = { ...validMoney, effectiveDate: '2026-09-30', jurisdiction: 'Canada' };
    const errors = validateRequirement(invalid, pathway, new Map([[evidence.id, evidence]]));
    expect(errors).toContain('effectiveDate must match cited evidence GB-work-finance-2026-10-01 when evidence declares one');
    expect(errors).toContain('jurisdiction must match cited evidence GB-work-finance-2026-10-01');
  });

  test('validates all declared pathway requirements and duplicate IDs', () => {
    const errors = validatePathwayRequirements([
      { ...pathway, requirements: [validMoney, { ...validMoney }] }
    ], [evidence]);
    expect(errors).toContain('route GB-work has duplicate requirement id funds-minimum');
  });

  test('allows the current registry to keep unstructured requirements explicitly absent', () => {
    expect(validatePathwayRequirements([{ ...pathway }], [])).toEqual([]);
  });
});
