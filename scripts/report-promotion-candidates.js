const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const readJson = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));

const pathways = readJson('src/data/pathways.json').pathways;
const requirements = readJson('src/data/pathway-requirements.json');
const primary = readJson('src/data/evidence/primary-source-verified.json').records;
const addendaDir = path.join(root, 'src/data/evidence/addenda');
const addenda = fs.readdirSync(addendaDir).filter(file => file.endsWith('.json')).flatMap(file => readJson(path.join('src/data/evidence/addenda', file)).records || []);
const evidence = [...primary, ...addenda];
const byPathway = new Map();
for (const record of evidence) {
  if (!byPathway.has(record.pathwayId)) byPathway.set(record.pathwayId, new Map());
  byPathway.get(record.pathwayId).set(record.field, record);
}

const candidates = [];
const incomplete = [];
for (const pathway of pathways) {
  if (pathway.status === 'publishable') continue;
  const required = requirements.types[pathway.type]?.requiredEvidenceFields || requirements.defaults.requiredEvidenceFields;
  const records = byPathway.get(pathway.id) || new Map();
  const missing = required.filter(field => !records.has(field));
  if (!missing.length) candidates.push({ id: pathway.id, type: pathway.type, evidenceIds: required.map(field => records.get(field).id) });
  else if (records.size) incomplete.push({ id: pathway.id, missing });
}

console.log(`PROMOTION CANDIDATES: ${candidates.length}`);
for (const candidate of candidates) console.log(`- ${candidate.id}: ${candidate.evidenceIds.join(', ')}`);
console.log(`PARTIALLY EVIDENCED PATHWAYS: ${incomplete.length}`);
for (const item of incomplete) console.log(`- ${item.id}: missing ${item.missing.join(', ')}`);

if (process.env.FAIL_ON_CANDIDATES === '1' && candidates.length) {
  console.error('FAIL_ON_CANDIDATES=1: manual promotion review is required before these records are released.');
  process.exit(1);
}
