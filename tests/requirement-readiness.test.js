const { summarizeRequirementReadiness } = require('../scripts/report-requirement-readiness');

describe('structured pathway requirement readiness report', () => {
  const schema = { fields: { minimum_funds: {}, job_offer: {}, language_test: {} } };

  test('counts structured pathways, field declarations, and evidence fields without inventing requirements', () => {
    const summary = summarizeRequirementReadiness([
      { id: 'GB-work', countryId: 'GB', type: 'work', status: 'publishable', requirements: [{ field: 'minimum_funds' }, { field: 'job_offer' }] },
      { id: 'CA-study', countryId: 'CA', type: 'study', status: 'publishable' },
      { id: 'AU-work', countryId: 'AU', type: 'work', status: 'research_required', requirements: [] }
    ], [
      { field: 'eligibility' },
      { field: 'eligibility' },
      { field: 'financial-requirement' }
    ], schema, '2026-10-11');

    expect(summary.pathwayCount).toBe(3);
    expect(summary.structuredPathwayCount).toBe(1);
    expect(summary.pathwaysWithoutStructuredRequirements).toBe(2);
    expect(summary.pathwaysWithoutStructuredRequirementsByStatus).toEqual({ publishable: 1, research_required: 1 });
    expect(summary.pathwayCountByStatus).toEqual({ publishable: 2, research_required: 1 });
    expect(summary.declaredRequirementCount).toBe(2);
    expect(summary.requirementsByField).toEqual({ minimum_funds: 1, job_offer: 1, language_test: 0 });
    expect(summary.evidenceRecordsByField).toEqual({ eligibility: 2, 'financial-requirement': 1 });
    expect(summary.pathwaysMissingStructuredRequirements.map(route => route.id)).toEqual(['AU-work', 'CA-study']);
  });

  test('surfaces evidence past its review date without changing or extending that date', () => {
    const summary = summarizeRequirementReadiness([], [
      { id: 'old-evidence', pathwayId: 'GB-work', field: 'eligibility', reviewAfter: '2026-10-10' },
      { id: 'due-today', pathwayId: 'CA-study', field: 'financial-requirement', reviewAfter: '2026-10-11' },
      { id: 'future-evidence', pathwayId: 'AU-work', field: 'eligibility', reviewAfter: '2026-10-12' }
    ], schema, '2026-10-11');

    expect(summary.evidenceDueForReviewCount).toBe(1);
    expect(summary.evidenceDueForReview).toEqual([
      { id: 'old-evidence', pathwayId: 'GB-work', field: 'eligibility', reviewAfter: '2026-10-10' }
    ]);
  });

  test('returns a valid empty summary for no pathways or evidence', () => {
    const summary = summarizeRequirementReadiness([], [], schema, '2026-10-11');
    expect(summary.pathwayCount).toBe(0);
    expect(summary.structuredPathwayCount).toBe(0);
    expect(summary.declaredRequirementCount).toBe(0);
    expect(summary.evidenceRecordsByField).toEqual({});
    expect(summary.evidenceDueForReviewCount).toBe(0);
  });

  test('ignores unknown requirement field names in the schema breakdown rather than inventing a field', () => {
    const summary = summarizeRequirementReadiness([
      { id: 'GB-work', countryId: 'GB', type: 'work', status: 'publishable', requirements: [{ field: 'unrecognized' }] }
    ], [], schema, '2026-10-11');
    expect(summary.declaredRequirementCount).toBe(0);
    expect(summary.requirementsByField).toEqual({ minimum_funds: 0, job_offer: 0, language_test: 0 });
  });
});
