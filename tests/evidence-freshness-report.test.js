const { summarizeEvidenceFreshness } = require('../scripts/report-evidence-freshness');

describe('evidence freshness inventory', () => {
  test('classifies overdue, current, missing and impossible review dates by country', () => {
    const summary = summarizeEvidenceFreshness([
      { id: 'old', countryId: 'CA', pathwayId: 'CA-study', field: 'financial-requirement', reviewAfter: '2026-10-10', sourceUrl: 'https://example.gov/ca' },
      { id: 'today', countryId: 'SE', reviewAfter: '2026-10-11' },
      { id: 'future', countryId: 'CA', reviewAfter: '2026-10-12' },
      { id: 'missing', countryId: 'AU' },
      { id: 'invalid', countryId: 'GB', reviewAfter: '2026-02-30' }
    ], '2026-10-11');

    expect(summary.recordCount).toBe(5);
    expect(summary.countryCount).toBe(4);
    expect(summary.byStatus).toEqual({ current: 2, overdue: 1, missing_review_date: 1, invalid_review_date: 1 });
    expect(summary.byCountry.CA).toEqual({ total: 2, current: 1, overdue: 1, missing_review_date: 0, invalid_review_date: 0 });
    expect(summary.records.map(record => record.id)).toEqual(['old', 'invalid', 'missing', 'future', 'today']);
  });

  test('rejects an invalid report date rather than silently misclassifying records', () => {
    expect(() => summarizeEvidenceFreshness([], '2026-02-30')).toThrow('validationDate must be a real ISO date');
  });
});
