'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const readJson = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));

function summarizeRequirementReadiness(pathways, evidence, schema) {
  const fields = Object.keys(schema.fields || {});
  const evidenceCounts = Object.fromEntries([...new Set(evidence.map(record => record.field))].sort().map(field => [field, 0]));
  for (const record of evidence) evidenceCounts[record.field] = (evidenceCounts[record.field] || 0) + 1;

  const structured = pathways.filter(pathway => Array.isArray(pathway.requirements) && pathway.requirements.length > 0);
  const byField = Object.fromEntries(fields.map(field => [field, 0]));
  for (const pathway of pathways) {
    for (const requirement of Array.isArray(pathway.requirements) ? pathway.requirements : []) {
      if (Object.hasOwn(byField, requirement.field)) byField[requirement.field] += 1;
    }
  }

  return {
    pathwayCount: pathways.length,
    structuredPathwayCount: structured.length,
    pathwaysWithoutStructuredRequirements: pathways.length - structured.length,
    declaredRequirementCount: Object.values(byField).reduce((sum, count) => sum + count, 0),
    requirementsByField: byField,
    evidenceRecordsByField: evidenceCounts,
    pathwaysMissingStructuredRequirements: pathways
      .filter(pathway => !Array.isArray(pathway.requirements) || pathway.requirements.length === 0)
      .map(({ id, countryId, type, status }) => ({ id, countryId, type, status }))
      .sort((a, b) => a.countryId.localeCompare(b.countryId) || a.id.localeCompare(b.id))
  };
}

function readEvidenceRecords() {
  const primary = readJson('src/data/evidence/primary-source-verified.json').records || [];
  const addendaDir = path.join(root, 'src/data/evidence/addenda');
  const addenda = fs.existsSync(addendaDir)
    ? fs.readdirSync(addendaDir).filter(file => file.endsWith('.json')).sort()
      .flatMap(file => readJson(path.join('src/data/evidence/addenda', file)).records || [])
    : [];
  return [...primary, ...addenda];
}

function main() {
  const pathways = readJson('src/data/pathways.json').pathways || [];
  const schema = readJson('src/data/pathway-requirement-schema.json');
  const summary = summarizeRequirementReadiness(pathways, readEvidenceRecords(), schema);
  console.log(JSON.stringify(summary, null, 2));
}

if (require.main === module) main();

module.exports = { summarizeRequirementReadiness };
