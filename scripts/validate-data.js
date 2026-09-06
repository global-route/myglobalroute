const fs = require('node:fs');
const path = require('node:path');

const readJson = file => JSON.parse(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'));
const countriesPayload = readJson('src/data/countries.json');
const pathwaysPayload = readJson('src/data/pathways.json');
const evidencePayload = readJson('src/data/evidence/primary-source-verified.json');
const countries = countriesPayload.countries;
const pathways = pathwaysPayload.pathways;
const evidence = evidencePayload.records;
const errors = [];
const warnings = [];
const today = new Date('2026-09-06T00:00:00Z');

const countryIds = new Set();
if (!Array.isArray(countries) || countries.length !== 26) errors.push(`countries must contain exactly 26 records; found ${countries?.length ?? 0}`);
for (const [index, country] of (countries || []).entries()) {
  for (const field of ['id', 'name', 'category', 'sweetSpot', 'dataStatus', 'source']) if (!country[field]) errors.push(`countries[${index}] ${field} is required`);
  if (countryIds.has(country.id)) errors.push(`duplicate country id: ${country.id}`);
  countryIds.add(country.id);
  if (!country.source?.authority || !country.source?.url || !country.source?.retrievedAt) errors.push(`countries[${index}] requires authority, source url and retrievedAt`);
  if (country.officialRate !== null || country.africanRate !== null) errors.push(`countries[${index}] approval rates must be null until evidence-backed`);
  if (country.trueCost !== null || country.timeline !== null) errors.push(`countries[${index}] cost/timeline claims must be null until evidence-backed`);
  if (!/^https:\/\//.test(country.source.url)) errors.push(`countries[${index}] source url must be HTTPS`);
}

const pathwayIds = new Set();
for (const [index, pathway] of (pathways || []).entries()) {
  for (const field of ['id', 'countryId', 'type', 'name', 'sourceUrl', 'sourceAuthority', 'status']) if (!pathway[field]) errors.push(`pathways[${index}] ${field} is required`);
  if (!countryIds.has(pathway.countryId)) errors.push(`pathways[${index}] references unknown country ${pathway.countryId}`);
  if (pathwayIds.has(pathway.id)) errors.push(`duplicate pathway id: ${pathway.id}`);
  pathwayIds.add(pathway.id);
  if (!/^https:\/\//.test(pathway.sourceUrl)) errors.push(`pathways[${index}] sourceUrl must be HTTPS`);
}

const evidenceIds = new Set();
for (const [index, record] of (evidence || []).entries()) {
  for (const field of ['id', 'countryId', 'pathwayId', 'field', 'claim', 'sourceAuthority', 'sourceUrl', 'jurisdiction', 'retrievedAt', 'methodology', 'confidence', 'reviewAfter']) if (!record[field]) errors.push(`evidence[${index}] ${field} is required`);
  if (evidenceIds.has(record.id)) errors.push(`duplicate evidence id: ${record.id}`);
  evidenceIds.add(record.id);
  if (!countryIds.has(record.countryId)) errors.push(`evidence[${index}] references unknown country ${record.countryId}`);
  if (!pathwayIds.has(record.pathwayId)) errors.push(`evidence[${index}] references unknown pathway ${record.pathwayId}`);
  if (!/^https:\/\//.test(record.sourceUrl)) errors.push(`evidence[${index}] sourceUrl must be HTTPS`);
  if (!['high', 'medium', 'low'].includes(record.confidence)) errors.push(`evidence[${index}] confidence must be high, medium or low`);
  if (new Date(`${record.reviewAfter}T00:00:00Z`) < today) warnings.push(`evidence ${record.id} is due for review`);
}

for (const pathway of pathways) {
  const records = evidence.filter(record => record.pathwayId === pathway.id);
  if (pathway.status === 'publishable' && records.length === 0) errors.push(`publishable pathway ${pathway.id} requires field-level evidence`);
}

if (countriesPayload.dataset?.asOf) {
  const age = Math.floor((today - new Date(`${countriesPayload.dataset.asOf}T00:00:00Z`)) / 86400000);
  if (age > 31) warnings.push(`country dataset is ${age} days old`);
}

if (errors.length) {
  console.error('DATA VALIDATION FAILED');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`DATA VALIDATION PASSED: ${countries.length} countries, ${pathways.length} pathways, ${evidence.length} evidence records`);
warnings.forEach(warning => console.warn(`WARNING: ${warning}`));
