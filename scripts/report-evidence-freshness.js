'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { isIsoDate } = require('./date-utils');

const root = path.join(__dirname, '..');
const readJson = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));

function summarizeEvidenceFreshness(evidence, validationDate = process.env.VALIDATION_AS_OF || new Date().toISOString().slice(0, 10)) {
  if (!isIsoDate(validationDate)) throw new Error('validationDate must be a real ISO date (YYYY-MM-DD)');
  const byStatus = { current: 0, overdue: 0, missing_review_date: 0, invalid_review_date: 0 };
  const byCountry = {};
  const records = evidence.map(record => {
    let status;
    if (record.reviewAfter === undefined || record.reviewAfter === null || record.reviewAfter === '') {
      status = 'missing_review_date';
    } else if (!isIsoDate(record.reviewAfter)) {
      status = 'invalid_review_date';
    } else if (record.reviewAfter < validationDate) {
      status = 'overdue';
    } else {
      status = 'current';
    }
    byStatus[status] += 1;
    const countryId = record.countryId || 'COUNTRY_UNKNOWN';
    if (!byCountry[countryId]) byCountry[countryId] = { total: 0, ...Object.fromEntries(Object.keys(byStatus).map(key => [key, 0])) };
    byCountry[countryId].total += 1;
    byCountry[countryId][status] += 1;
    return {
      id: record.id || 'ID_UNKNOWN',
      countryId,
      pathwayId: record.pathwayId || null,
      field: record.field || null,
      sourceUrl: record.sourceUrl || null,
      reviewAfter: record.reviewAfter || null,
      status
    };
  });
  const order = { overdue: 0, invalid_review_date: 1, missing_review_date: 2, current: 3 };
  records.sort((a, b) => order[a.status] - order[b.status] || a.countryId.localeCompare(b.countryId) || a.reviewAfter?.localeCompare(b.reviewAfter || '') || a.id.localeCompare(b.id));
  return {
    validationDate,
    recordCount: evidence.length,
    byStatus,
    countryCount: Object.keys(byCountry).filter(id => id !== 'COUNTRY_UNKNOWN').length,
    byCountry: Object.fromEntries(Object.entries(byCountry).sort(([a], [b]) => a.localeCompare(b))),
    records
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
  console.log(JSON.stringify(summarizeEvidenceFreshness(readEvidenceRecords()), null, 2));
}

if (require.main === module) main();

module.exports = { summarizeEvidenceFreshness };
