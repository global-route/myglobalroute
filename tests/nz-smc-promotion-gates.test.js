const candidates = require('../src/data/pathway-candidates.json');
const subroutes = require('../src/data/pathway-subroutes.json');
const evidence = require('../src/data/evidence/primary-source-verified.json');
const fs = require('node:fs');
const path = require('node:path');

const addendaDir = path.join(__dirname, '..', 'src/data/evidence/addenda');
const addenda = fs.existsSync(addendaDir)
  ? fs.readdirSync(addendaDir).filter(file => file.endsWith('.json')).sort().flatMap(file => JSON.parse(fs.readFileSync(path.join(addendaDir, file), 'utf8')).records || [])
  : [];
const allEvidence = [...evidence.records, ...addenda];
const evidenceById = new Map(allEvidence.map(record => [record.id, record]));
const candidateById = new Map(candidates.candidates.map(candidate => [candidate.id, candidate]));
const subrouteById = new Map(subroutes.subroutes.map(subroute => [subroute.id, subroute]));

function expectEvidence(candidateId, fields) {
  const candidate = candidateById.get(candidateId);
  expect(candidate).toBeDefined();
  expect(candidate.status).toBe('research_required');
  expect(candidate.missingMaterialFields).toEqual([]);
  expect(subrouteById.get(candidate.subrouteId)?.parentPathwayId).toBe('NZ-skilled');
  const records = candidate.evidenceIds.map(id => evidenceById.get(id));
  expect(records.every(Boolean)).toBe(true);
  expect(new Set(records.map(record => record.field))).toEqual(new Set(fields));
  for (const record of records) expect(record.pathwayId).toBe(candidate.subrouteId);
}

describe('New Zealand SMC exact-route promotion gates', () => {
  test('points-based route has complete route-scoped material evidence', () => {
    expectEvidence('NZ-smc-points-based', [
      'eligibility',
      'financial-requirement',
      'process',
      'occupation-registration-matrix',
      'qualification-exception-matrix'
    ]);
    const eligibility = evidenceById.get('NZ-smc-points-based-eligibility-2026-09-14');
    expect(eligibility.claim).toContain('6 skilled resident points');
  });

  test('Skilled Work Experience route has complete direct-relevance and wage evidence', () => {
    expectEvidence('NZ-smc-skilled-work-experience', [
      'eligibility',
      'financial-requirement',
      'process',
      'direct-relevance',
      'occupation-matrix',
      'wage-regression'
    ]);
    const wage = evidenceById.get('NZ-smc-skilled-work-experience-wage-regression-2026-09-14');
    const direct = evidenceById.get('NZ-smc-skilled-work-experience-direct-relevance-2026-09-14');
    expect(wage.effectiveDate).toBe('2026-08-24');
    expect(wage.claim).toContain('NZD 38.50/hour');
    expect(wage.claim).toContain('NZD 42.00/hour');
    expect(direct.claim).toContain('Self-employment cannot be counted');
  });

  test('Trades and Technician route has complete qualification and post-qualification evidence', () => {
    expectEvidence('NZ-smc-trades-technician', [
      'eligibility',
      'financial-requirement',
      'process',
      'occupation-qualification-matrix'
    ]);
    const matrix = evidenceById.get('NZ-smc-trades-technician-occupation-qualification-matrix-2026-09-14');
    expect(matrix.effectiveDate).toBe('2026-08-24');
    expect(matrix.claim).toContain('2.5 years of relevant post-qualification experience');
    expect(matrix.claim).toContain('additional 1.5 years of post-qualification skilled work experience in New Zealand');
  });

  test('the parent NZ-skilled umbrella remains non-publishable', () => {
    expect(candidateById.get('NZ-smc-points-based')?.parentPathwayId).toBe('NZ-skilled');
    expect(candidateById.get('NZ-smc-skilled-work-experience')?.parentPathwayId).toBe('NZ-skilled');
    expect(candidateById.get('NZ-smc-trades-technician')?.parentPathwayId).toBe('NZ-skilled');
  });
});
