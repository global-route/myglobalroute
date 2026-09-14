const fs = require('node:fs');
const path = require('node:path');
const evidence = require('../src/data/evidence/primary-source-verified.json');
const countries = require('../src/data/countries.json');
const pathways = require('../src/data/pathways.json');
const requirements = require('../src/data/pathway-requirements.json');
const candidates = require('../src/data/pathway-candidates.json');
const subroutes = require('../src/data/pathway-subroutes.json');

const addendaDir = path.join(__dirname, '..', 'src/data/evidence/addenda');
const addenda = fs.existsSync(addendaDir)
  ? fs.readdirSync(addendaDir)
      .filter(file => file.endsWith('.json'))
      .sort()
      .flatMap(file => JSON.parse(fs.readFileSync(path.join(addendaDir, file), 'utf8')).records || [])
  : [];
const allEvidence = [...evidence.records, ...addenda];

describe('primary-source evidence registry', () => {
  test('every evidence record points to a known canonical pathway or exact subroute', () => {
    const countryIds = new Set(countries.countries.map(country => country.id));
    const pathwayIds = new Set(pathways.pathways.map(pathway => pathway.id));
    const subrouteIds = new Set(subroutes.subroutes.map(subroute => subroute.id));
    expect(allEvidence.length).toBeGreaterThan(0);
    for (const record of allEvidence) {
      expect(countryIds.has(record.countryId)).toBe(true);
      expect(pathwayIds.has(record.pathwayId) || subrouteIds.has(record.pathwayId)).toBe(true);
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

  test('publishable pathway evidence is fully resolved and route-scoped', () => {
    const evidenceById = new Map(allEvidence.map(record => [record.id, record]));
    for (const pathway of pathways.pathways.filter(item => item.status === 'publishable')) {
      expect(pathway.evidenceIds?.length).toBeGreaterThan(0);
      for (const evidenceId of pathway.evidenceIds) {
        const record = evidenceById.get(evidenceId);
        expect(record).toBeDefined();
        expect(record.pathwayId).toBe(pathway.id);
        expect(record.countryId).toBe(pathway.countryId);
      }
    }
  });

  test('publishable pathways have every material field required for their route type', () => {
    const evidenceByPathway = new Map();
    for (const record of allEvidence) {
      const records = evidenceByPathway.get(record.pathwayId) || [];
      records.push(record);
      evidenceByPathway.set(record.pathwayId, records);
    }

    for (const pathway of pathways.pathways.filter(item => item.status === 'publishable')) {
      const records = evidenceByPathway.get(pathway.id) || [];
      const fields = new Set(records.map(record => record.field));
      const required = requirements.types?.[pathway.type]?.requiredEvidenceFields || requirements.defaults.requiredEvidenceFields;
      for (const field of required) expect(fields.has(field)).toBe(true);
    }
  });

  test('broad pathway promotion is blocked when evidence belongs to a narrower route', () => {
    const evidenceById = new Map(allEvidence.map(record => [record.id, record]));
    for (const pathway of pathways.pathways.filter(item => item.status === 'publishable')) {
      for (const evidenceId of pathway.evidenceIds || []) {
        const record = evidenceById.get(evidenceId);
        expect(record?.pathwayId).toBe(pathway.id);
      }
    }
  });

  test('exact-route candidates remain research-stage until canonicalized', () => {
    const pathwayIds = new Set(pathways.pathways.map(pathway => pathway.id));
    const subrouteIds = new Set(subroutes.subroutes.map(subroute => subroute.id));
    const evidenceById = new Map(allEvidence.map(record => [record.id, record]));
    expect(candidates.candidates.length).toBeGreaterThan(0);
    for (const candidate of candidates.candidates) {
      expect(candidate.status).toBe('research_required');
      expect(pathwayIds.has(candidate.parentPathwayId)).toBe(true);
      expect(subrouteIds.has(candidate.subrouteId)).toBe(true);
      for (const evidenceId of candidate.evidenceIds || []) {
        const record = evidenceById.get(evidenceId);
        expect(record).toBeDefined();
        expect(record.countryId).toBe(candidate.countryId);
        expect(record.pathwayId).toBe(candidate.subrouteId);
      }
    }
  });

  test('exact subroutes cannot inherit parent evidence as promotion proof', () => {
    const evidenceById = new Map(allEvidence.map(record => [record.id, record]));
    for (const subroute of subroutes.subroutes) {
      const records = allEvidence.filter(record => record.pathwayId === subroute.id);
      for (const record of records) expect(record.pathwayId).toBe(subroute.id);
      if (subroute.status === 'publishable') {
        const fields = new Set(records.map(record => record.field));
        for (const field of subroute.requiredEvidenceFields) expect(fields.has(field)).toBe(true);
      }
    }
    for (const candidate of candidates.candidates) {
      for (const evidenceId of candidate.evidenceIds || []) {
        expect(evidenceById.get(evidenceId)?.pathwayId).toBe(candidate.subrouteId);
      }
    }
  });

  test('New Zealand SMC child routes cannot inherit parent evidence as promotion proof', () => {
    const nzCandidates = candidates.candidates.filter(candidate => candidate.countryId === 'NZ');
    expect(nzCandidates.map(candidate => candidate.id)).toEqual(expect.arrayContaining([
      'NZ-smc-points-based',
      'NZ-smc-skilled-work-experience',
      'NZ-smc-trades-technician'
    ]));
    for (const candidate of nzCandidates) expect(candidate.status).toBe('research_required');
    expect(pathways.pathways.find(pathway => pathway.id === 'NZ-skilled')?.status).toBe('research_required');
  });
});