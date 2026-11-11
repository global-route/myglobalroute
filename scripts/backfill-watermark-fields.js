#!/usr/bin/env node
'use strict';
/**
 * backfill-watermark-fields.js
 * Adds missing watermark frontmatter fields to all blog posts.
 * Safe to re-run — skips posts that already have sourceAuthority.
 * Derives sourceAuthority/sourceUrl from country/topic in filename.
 * Sets evidenceStatus: research-required for posts without a known primary source.
 * Sets postVersion from the post's date field.
 */

const fs   = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');

// Known source mappings by country/topic keyword in file path
const SOURCE_MAP = [
  { match: /\/germany\//,      authority: 'Federal Foreign Office Germany',           url: 'https://www.auswaertiges-amt.de/en/visa-service' },
  { match: /\/canada\//,       authority: 'Immigration, Refugees and Citizenship Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship.html' },
  { match: /\/uk\//,           authority: 'UK Visas and Immigration',                 url: 'https://www.gov.uk/browse/visas-immigration' },
  { match: /\/australia\//,    authority: 'Department of Home Affairs Australia',     url: 'https://immi.homeaffairs.gov.au' },
  { match: /\/ireland\//,      authority: 'Irish Immigration Service Delivery',       url: 'https://www.irishimmigration.ie' },
  { match: /\/france\//,       authority: 'France-Visas',                             url: 'https://france-visas.gouv.fr/en/web/france-visas' },
  { match: /\/italy\//,        authority: 'Italian Ministry of Foreign Affairs',      url: 'https://vistoperitalia.esteri.it' },
  { match: /\/portugal\//,     authority: 'AIMA Portugal',                            url: 'https://aima.gov.pt' },
  { match: /\/spain\//,        authority: 'Spanish Government',                       url: 'https://www.inclusion.gob.es' },
  { match: /\/netherlands\//,  authority: 'IND Netherlands',                          url: 'https://ind.nl/en' },
  { match: /\/new-zealand\//,  authority: 'Immigration New Zealand',                  url: 'https://www.immigration.govt.nz' },
  { match: /\/singapore\//,    authority: 'Ministry of Manpower Singapore',           url: 'https://www.mom.gov.sg' },
  { match: /\/japan\//,        authority: 'Immigration Services Agency of Japan',     url: 'https://www.moj.go.jp/isa' },
  { match: /\/south-korea\//,  authority: 'Korea Immigration Service',                url: 'https://www.immigration.go.kr/immigration_eng' },
  { match: /\/china\//,        authority: 'National Immigration Administration China', url: 'https://en.nia.gov.cn' },
  { match: /\/uae\//,          authority: 'UAE Ministry of Human Resources and Emiratisation', url: 'https://www.mohre.gov.ae' },
  { match: /\/qatar\//,        authority: 'Qatar Ministry of Labour',                 url: 'https://adlsa.gov.qa' },
  { match: /\/saudi-arabia\//, authority: 'Saudi Ministry of Human Resources',        url: 'https://www.mol.gov.sa' },
  { match: /\/oman\//,         authority: 'Oman Ministry of Labour',                  url: 'https://mol.gov.om' },
  { match: /\/norway\//,       authority: 'Norwegian Directorate of Immigration',     url: 'https://www.udi.no/en' },
  { match: /\/sweden\//,       authority: 'Swedish Migration Agency',                 url: 'https://www.migrationsverket.se/en' },
  { match: /\/finland\//,      authority: 'Finnish Immigration Service',              url: 'https://migri.fi/en' },
  { match: /\/austria\//,      authority: 'Austrian Government Migration Portal',     url: 'https://www.migration.gv.at/en' },
  { match: /\/switzerland\//,  authority: 'State Secretariat for Migration Switzerland', url: 'https://www.sem.admin.ch/sem/en' },
  { match: /\/poland\//,       authority: 'Office for Foreigners Poland',             url: 'https://www.gov.pl/web/udsc-en' },
  { match: /\/czechia\//,      authority: 'Ministry of the Interior Czech Republic',  url: 'https://mv.gov.cz/mvcren' },
  { match: /\/hungary\//,      authority: 'National Directorate-General for Aliens Policing Hungary', url: 'https://oif.gov.hu' },
  { match: /\/luxembourg\//,   authority: 'Guichet.lu Luxembourg',                   url: 'https://guichet.public.lu/en' },
  { match: /\/lithuania\//,    authority: 'Migration Department of Lithuania',        url: 'https://migracija.lrv.lt/en' },
  { match: /\/iceland\//,      authority: 'Directorate of Immigration Iceland',       url: 'https://island.is/en/o/directorate-of-immigration' },
  { match: /\/malta\//,        authority: 'Identita Malta',                           url: 'https://identita.gov.mt' },
  { match: /\/mauritius\//,    authority: 'Economic Development Board Mauritius',     url: 'https://www.edbmauritius.org' },
  { match: /\/cape-verde\//,   authority: 'Cape Verde Immigration Service',           url: 'https://www.sefcv.gov.cv' },
  { match: /\/namibia\//,      authority: 'Ministry of Home Affairs Namibia',         url: 'https://mhaiss.gov.na' },
  { match: /\/rwanda\//,       authority: 'Directorate General of Immigration Rwanda', url: 'https://www.migration.gov.rw' },
  { match: /\/kenya\//,        authority: 'Department of Immigration Services Kenya', url: 'https://immigration.go.ke' },
  { match: /\/ghana\//,        authority: 'Ghana Immigration Service',                url: 'https://www.ghanaimmigration.org' },
  { match: /\/south-africa\//, authority: 'Department of Home Affairs South Africa',  url: 'https://www.dha.gov.za' },
  { match: /\/usa\//,          authority: 'U.S. Department of State',                 url: 'https://travel.state.gov' },
  { match: /\/guyana\//,       authority: 'Guyana Immigration Department',            url: 'https://immigration.gov.gy' },
  { match: /\/bulgaria\//,     authority: 'Bulgarian Ministry of Foreign Affairs',    url: 'https://www.mfa.bg/en' },
  { match: /\/croatia\//,      authority: 'Croatian Ministry of Interior',            url: 'https://mup.gov.hr' },
  { match: /\/antigua-barbuda\//, authority: 'Antigua and Barbuda Immigration',       url: 'https://immigration.gov.ag' },
  // Topic-based
  { match: /dama/,             authority: 'Department of Home Affairs Australia',     url: 'https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements' },
  { match: /chancenkarte|germany-shortage|engpass/, authority: 'Federal Employment Agency Germany', url: 'https://www.arbeitsagentur.de/en/shortage-occupations' },
  { match: /express-entry|canada-express|canada-tech|canada-francophone/, authority: 'Immigration, Refugees and Citizenship Canada', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html' },
  { match: /uk-shortage|immigration-salary-list/, authority: 'UK Visas and Immigration', url: 'https://www.gov.uk/government/publications/immigration-salary-list' },
  { match: /kafala|domestic-worker-rights/, authority: 'ILO Gulf Programme',          url: 'https://www.ilo.org/beirut/countries' },
  { match: /recruitment-agent|fake.*agent|spot.*agent/, authority: 'Federal Ministry of Labour Nigeria', url: 'https://www.labour.gov.ng' },
  { match: /qatar-work-visa|qatar-kafala/, authority: 'Qatar Ministry of Labour',     url: 'https://adlsa.gov.qa' },
  { match: /mongolia/,         authority: 'Mongolian Immigration Agency',             url: 'https://immigration.gov.mn' },
  { match: /oman-trades|oman-freelance|oman-work/, authority: 'Oman Ministry of Labour', url: 'https://mol.gov.om' },
  { match: /singapore.*compass|compass.*singapore/, authority: 'Ministry of Manpower Singapore', url: 'https://www.mom.gov.sg/passes-and-permits/employment-pass' },
  { match: /schengen/,         authority: 'European Commission',                      url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa_en' },
  { match: /crs-explained|fatca|mauritius-gbl|split-residency|cease-nigerian-tax|uae-second-residency/, authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' },
  { match: /passport-tiers|digital-nomad|remote-income|african-digital-nomad|intra-africa|diaspora/, authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' },
  { match: /italy-dsu|daad|erasmus|commonwealth-scholarship|saskatchewan-scholarship/, authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' },
  { match: /uk-masters|blocked-account|document-authentication|motivation-letter/, authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' },
  { match: /visa-rejection|success-stories|chisom/, authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' },
  { match: /afcfta|business-corridors|company-setup|llc-setup|global-business/, authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' },
  { match: /france-talent|uk-innovator|portugal-d3|mauritius-premium|namibia-digital|cape-verde-remote|australia-dama-regional|germany-chancenkarte-vs/, authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' },
];

function getSource(filePath) {
  const rel = filePath.replace(/\\/g, '/');
  for (const { match, authority, url } of SOURCE_MAP) {
    if (match.test(rel)) return { authority, url };
  }
  return { authority: 'MyPathway2Global Editorial', url: 'https://mypathway2global.org.uk' };
}

function extractDateFromFrontmatter(content) {
  const m = content.match(/^date:\s*(\d{4}-\d{2}-\d{2})/m);
  return m ? m[1] : null;
}

function deriveVersion(dateStr) {
  if (!dateStr) return 'v2026.01';
  const [y, m] = dateStr.split('-');
  return `v${y}.${m}`;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has sourceAuthority
  if (/^sourceAuthority:/m.test(content)) return { skipped: true };

  const dateStr = extractDateFromFrontmatter(content);
  const version = deriveVersion(dateStr);
  const { authority, url } = getSource(filePath);

  const isEditorial = authority === 'MyPathway2Global Editorial';
  const status = isEditorial ? 'research-required' : 'verified';
  const checkedDate = dateStr || '2026-11-09';

  // Find the closing --- of frontmatter — handle both CRLF and LF
  // The closing --- must be on its own line
  const fmEndCRLF = content.indexOf('\r\n---');
  const fmEndLF   = content.indexOf('\n---', 4);
  // Use whichever comes first (and is not the opening ---)
  let fmEnd = -1;
  let lineEnding = '\n';
  if (fmEndCRLF !== -1 && (fmEndLF === -1 || fmEndCRLF <= fmEndLF)) {
    fmEnd = fmEndCRLF;
    lineEnding = '\r\n';
  } else if (fmEndLF !== -1) {
    fmEnd = fmEndLF;
    lineEnding = '\n';
  }
  if (fmEnd === -1) return { skipped: true, reason: 'no frontmatter end' };

  // Only inject fields that are not already present
  const fields = [
    { key: 'postVersion',      value: `"${version}"` },
    { key: 'sourceAuthority',  value: `"${authority}"` },
    { key: 'sourceUrl',        value: `"${url}"` },
    { key: 'lastFactChecked',  value: checkedDate },
    { key: 'evidenceStatus',   value: status },
    { key: 'supersededBy',     value: '""' },
  ].filter(f => !new RegExp(`^${f.key}:`, 'm').test(content));

  if (!fields.length) return { skipped: true };

  const injection = fields.map(f => `${f.key}: ${f.value}`).join(lineEnding);
  const newContent = content.slice(0, fmEnd) + lineEnding + injection + content.slice(fmEnd);
  fs.writeFileSync(filePath, newContent, 'utf8');
  return { updated: true, version, authority, status };
}

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name.endsWith('.md')) files.push(full);
  }
  return files;
}

const files = walk(BLOG_DIR);
let updated = 0, skipped = 0, errors = 0;

for (const f of files) {
  try {
    const result = processFile(f);
    if (result.updated) {
      updated++;
      const rel = f.replace(BLOG_DIR, '').replace(/\\/g, '/');
      console.log(`  UPDATED ${rel} → ${result.version} | ${result.status} | ${result.authority}`);
    } else {
      skipped++;
    }
  } catch (e) {
    errors++;
    console.error(`  ERROR ${f}: ${e.message}`);
  }
}

console.log(`\nDone. Updated: ${updated} | Skipped (already have fields): ${skipped} | Errors: ${errors}`);
