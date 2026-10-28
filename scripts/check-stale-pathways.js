#!/usr/bin/env node
/**
 * CP-4-O1: Quarterly Pathway Audit
 * Flags pathway requirements older than STALE_DAYS (default 90).
 * Usage: node scripts/check-stale-pathways.js [--days=90]
 * Exit 0 = nothing stale. Exit 1 = stale entries found (CI-friendly).
 */

const fs = require('fs');
const path = require('path');

const STALE_DAYS = (() => {
  const arg = process.argv.find(a => a.startsWith('--days='));
  return arg ? parseInt(arg.split('=')[1], 10) : 90;
})();

const SOURCES = {
  CA: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
  GB: 'https://www.gov.uk/browse/visas-immigration',
  DE: 'https://www.make-it-in-germany.com/',
  IE: 'https://www.irishimmigration.ie/',
  ES: 'https://www.inclusion.gob.es/',
  AU: 'https://immi.homeaffairs.gov.au/',
  US: 'https://www.uscis.gov/',
  IT: 'https://vistoperitalia.esteri.it/',
  FR: 'https://france-visas.gouv.fr/',
  PT: 'https://aima.gov.pt/',
  NZ: 'https://www.immigration.govt.nz/',
  NO: 'https://www.udi.no/en/',
  SE: 'https://www.migrationsverket.se/',
  FI: 'https://migri.fi/en/home',
  JP: 'https://www.moj.go.jp/isa/',
  KR: 'https://www.immigration.go.kr/immigration_eng/index.do',
  CH: 'https://www.sem.admin.ch/',
  AT: 'https://www.migration.gv.at/'
};

const pathwaysPath = path.join(__dirname, '..', 'src', 'data', 'pathways.json');
const { pathways } = JSON.parse(fs.readFileSync(pathwaysPath, 'utf8'));

const now = Date.now();
const staleMs = STALE_DAYS * 24 * 60 * 60 * 1000;
const stale = [];

for (const pathway of pathways) {
  if (pathway.status !== 'publishable') continue;
  const reqs = Array.isArray(pathway.requirements) ? pathway.requirements : [];
  for (const req of reqs) {
    if (!req.effectiveDate) continue;
    const age = now - new Date(req.effectiveDate).getTime();
    if (age > staleMs) {
      stale.push({
        pathwayId: pathway.id,
        pathwayName: pathway.name,
        countryId: pathway.countryId,
        field: req.field,
        effectiveDate: req.effectiveDate,
        daysOld: Math.floor(age / (24 * 60 * 60 * 1000)),
        officialSource: SOURCES[pathway.countryId] || pathway.sourceUrl
      });
    }
  }
}

if (!stale.length) {
  console.log(`All publishable pathway requirements are within ${STALE_DAYS} days. No action needed.`);
  process.exit(0);
}

console.log(`\n## Stale pathway requirements (>${STALE_DAYS} days) — ${new Date().toISOString().slice(0, 10)}\n`);
console.log(`${stale.length} requirement${stale.length !== 1 ? 's' : ''} need re-verification.\n`);

const byCountry = {};
for (const entry of stale) {
  (byCountry[entry.countryId] = byCountry[entry.countryId] || []).push(entry);
}

for (const [countryId, entries] of Object.entries(byCountry)) {
  console.log(`### ${countryId} (${entries.length} field${entries.length !== 1 ? 's' : ''})`);
  for (const e of entries) {
    console.log(`  - ${e.pathwayId} / ${e.field}: last verified ${e.effectiveDate} (${e.daysOld} days ago)`);
    console.log(`    Source: ${e.officialSource}`);
  }
  console.log('');
}

process.exit(1);
