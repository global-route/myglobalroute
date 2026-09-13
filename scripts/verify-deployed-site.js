const { URL } = require('node:url');

const origin = process.env.PRODUCTION_URL;
const requiredRoutes = [
  '/',
  '/pages/find-my-route.html',
  '/pages/countries.html',
  '/pages/calculator.html',
  '/data/countries.json',
  '/data/pathways.json',
  '/robots.txt',
  '/sitemap.xml'
];

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

for (const route of requiredRoutes) {
  const url = new URL(route, `${cleanOrigin}/`).toString();
  try {
    const response = await fetch(url, { redirect: 'manual' });
    if (response.status < 200 || response.status >= 400) failures.push(`${route}: HTTP ${response.status}`);
    const location = response.headers.get('location');
    if (location && new URL(location, url).hostname !== base.hostname) failures.push(`${route}: unexpected cross-origin redirect to ${location}`);
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
}

if (failures.length) {
  console.error('DEPLOYED SITE VERIFICATION FAILED');
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`DEPLOYED SITE VERIFICATION PASSED: ${requiredRoutes.length} routes checked on ${cleanOrigin}`);
