const { URL } = require('node:url');

const origin = process.env.PRODUCTION_URL;

if (!origin) {
  console.error('DEPLOYED SITE VERIFICATION NOT RUN: set PRODUCTION_URL to an authoritative deployed origin.');
  process.exit(2);
}

let base;
try {
  base = new URL(origin);
  if (!['http:', 'https:'].includes(base.protocol)) throw new Error('origin must use http or https');
} catch (error) {
  console.error(`DEPLOYED SITE VERIFICATION FAILED: invalid PRODUCTION_URL (${error.message})`);
  process.exit(1);
}

const cleanOrigin = `${base.protocol}//${base.host}`;
const failures = [];

async function check(route, expectedContentType) {
  const url = new URL(route, `${cleanOrigin}/`).toString();
  try {
    const response = await fetch(url, { redirect: 'manual' });
    if (response.status < 200 || response.status >= 400) {
      failures.push(`${route}: HTTP ${response.status}`);
      return;
    }
    const location = response.headers.get('location');
    if (location && new URL(location, url).hostname !== base.hostname) {
      failures.push(`${route}: unexpected cross-origin redirect to ${location}`);
    }
    if (expectedContentType) {
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes(expectedContentType)) failures.push(`${route}: unexpected content-type ${contentType}`);
    }
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
}

const registryUrl = new URL('/data/countries.json', `${cleanOrigin}/`).toString();
let countries = [];
let pathways = [];
try {
  const response = await fetch(registryUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  countries = Array.isArray(data.countries) ? data.countries : [];
} catch (error) {
  failures.push(`/data/countries.json: unable to parse registry (${error.message})`);
}

try {
  const response = await fetch(new URL('/data/pathways.json', `${cleanOrigin}/`));
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  pathways = Array.isArray(data.pathways) ? data.pathways : [];
} catch (error) {
  failures.push(`/data/pathways.json: unable to parse registry (${error.message})`);
}

const requiredRoutes = [
  ['/', 'text/html'],
  ['/pages/find-my-route.html', 'text/html'],
  ['/pages/countries.html', 'text/html'],
  ['/pages/calculator.html', 'text/html'],
  ['/pages/blog.html', 'text/html'],
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

for (const [route, contentType] of requiredRoutes) await check(route, contentType);

if (failures.length) {
  console.error('DEPLOYED SITE VERIFICATION FAILED');
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`DEPLOYED SITE VERIFICATION PASSED: ${requiredRoutes.length} routes checked on ${cleanOrigin} (${countries.length} countries, ${pathways.length} pathways)`);
