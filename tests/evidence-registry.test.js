const evidence = require('../src/data/evidence/primary-source-verified.json');
const countries = require('../src/data/countries.json');
const pathways = require('../src/data/pathways.json');

describe('primary-source evidence registry', () => {
  test('every evidence record points to known country and pathway', () => {
    const countryIds = new Set(countries.countries.map(country => country.id));
    const pathwayIds = new Set(pathways.pathways.map(pathway => pathway.id));
    expect(evidence.records.length).toBeGreaterThan(0);
    for (const record of evidence.records) {
      expect(countryIds.has(record.countryId)).toBe(true);
      expect(pathwayIds.has(record.pathwayId)).toBe(true);
      expect(record.sourceUrl).toMatch(/^https:\/\//);
      expect(['high', 'medium', 'low']).toContain(record.confidence);
      expect(record.reviewAfter).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  test('unverified pathways cannot masquerade as publishable', () => {
    for (const pathway of pathways.pathways) {
      if (pathway.status !== 'publishable') expect(pathway.status).toBe('research_required');
    }
  });
});
