import { readFile } from 'node:fs/promises';
import { isDeepStrictEqual } from 'node:util';
import { URL } from 'node:url';

const origin = process.env.PRODUCTION_URL;

if (!origin) {
  console.error('DEPLOYED SITE VERIFICATION NOT RUN: set PRODUCTION_URL to an authoritative deployed origin.');
  process.exit(2);
}

let base;
try {
  base = new URL(origin);
  if (!['http:', 'https:'].includes(base.protocol)) throw new Error('origin must use http or https');
  if (base.pathname !== '/' || base.search || base.hash) throw new Error('PRODUCTION_URL must be an origin only, without path, query or fragment');
} catch (error) {
  console.error(`DEPLOYED SITE VERIFICATION FAILED: invalid PRODUCTION_URL (${error.message})`);
  process.exit(1);
}

const cleanOrigin = `${base.protocol}//${base.host}`;
const failures = [];
const sourceCountries = JSON.parse(await readFile(new URL('../src/data/countries.json', import.meta.url), 'utf8'));
const sourcePathways = JSON.parse(await readFile(new URL('../src/data/pathways.json', import.meta.url), 'utf8'));

async function check(route, expectedContentType, expectedText) {
  const url = new URL(route, `${cleanOrigin}/`).toString();
  try {
    const response = await fetch(url, { redirect: 'manual' });
    if (response.status < 200 || response.status >= 300) {
      failures.push(`${route}: expected a direct 2xx response, received HTTP ${response.status}`);
      return;
    }
    if (expectedContentType) {
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.toLowerCase().includes(expectedContentType.toLowerCase())) {
        failures.push(`${route}: unexpected content-type ${contentType}`);
      }
    }
    if (expectedText) {
      const body = await response.text();
      if (!body.includes(expectedText)) failures.push(`${route}: expected application marker was not found`);
    }
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
}

async function checkRegistry(route, sourcePayload, label) {
  const url = new URL(route, `${cleanOrigin}/`).toString();
  try {
    const response = await fetch(url, { redirect: 'manual' });
    if (!response.ok || response.status >= 300) throw new Error(`HTTP ${response.status}`);
    const deployedPayload = await response.json();
    if (!Array.isArray(deployedPayload?.[label])) throw new Error(`missing ${label} array`);
    if (deployedPayload[label].length === 0) throw new Error(`${label} array is empty`);
    if (!isDeepStrictEqual(deployedPayload, sourcePayload)) {
      failures.push(`${route}: deployed registry differs from the checked-out source registry; deployment may be stale or mismatched`);
    }
    return deployedPayload[label];
  } catch (error) {
    failures.push(`${route}: unable to verify deployed registry (${error.message})`);
    return [];
  }
}

const countries = await checkRegistry('/data/countries.json', sourceCountries, 'countries');
const pathways = await checkRegistry('/data/pathways.json', sourcePathways, 'pathways');

const requiredRoutes = [
  ['/', 'text/html', 'Global Route - African Global Mobility Intelligence'],
  ['/pages/find-my-route.html', 'text/html', 'Find My Route'],
  ['/pages/countries.html', 'text/html', 'Countries'],
  ['/pages/calculator.html', 'text/html', 'Budget Calculator'],
  ['/pages/blog.html', 'text/html', 'Blog'],
  ['/js/app.js', 'javascript'],
  ['/js/analytics.js', 'javascript'],
  ['/js/route-engine.js', 'javascript'],
  ['/js/monetization.js', 'javascript'],
  ['/js/admob-loader.js', 'javascript'],
  ['/css/styles.css', 'text/css'],
  ['/data/countries.json', 'application/json'],
  ['/data/pathways.json', 'application/json'],
  ['/robots.txt', 'text/plain'],
  ['/sitemap.xml', 'xml']
];

for (const country of countries) {
  if (country.id) requiredRoutes.push([`/pages/countries/${country.id}/`, 'text/html']);
}
for (const pathway of pathways) {
  if (pathway.id) requiredRoutes.push([`/pathways/${pathway.id}/`, 'text/html']);
}

for (const [route, contentType, expectedText] of requiredRoutes) {
  await check(route, contentType, expectedText);
}

if (failures.length) {
  console.error('DEPLOYED SITE VERIFICATION FAILED');
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`DEPLOYED SITE VERIFICATION PASSED: ${requiredRoutes.length} routes checked on ${cleanOrigin} (${countries.length} countries, ${pathways.length} pathways); deployed registries match checked-out source`);
