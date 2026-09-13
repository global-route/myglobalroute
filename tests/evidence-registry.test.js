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

  test('the canonical registry remains exactly two pathways per country', () => {
    expect(countries.countries).toHaveLength(26);
    expect(pathways.pathways).toHaveLength(52);
    const counts = new Map();
    for (const pathway of pathways.pathways) counts.set(pathway.countryId, (counts.get(pathway.countryId) || 0) + 1);
    for (const country of countries.countries) expect(counts.get(country.id)).toBe(2);
  });

  test('publishable pathway evidence is route-scoped to the pathway record', () => {
    const allEvidence = [...evidence.records];
    for (const pathway of pathways.pathways.filter(item => item.status === 'publishable')) {
      expect(pathway.evidenceIds?.length).toBeGreaterThan(0);
      for (const evidenceId of pathway.evidenceIds) {
        const record = allEvidence.find(item => item.id === evidenceId);
        if (record) expect(record.pathwayId).toBe(pathway.id);
      }
    }
  });
});
