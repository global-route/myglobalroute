const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const requiredFiles = [
  'index.html',
  'data/countries.json',
  'data/pathways.json',
  'data/evidence/primary-source-verified.json',
  'pages/find-my-route.html',
  'pages/countries.html',
  'pages/calculator.html',
  'robots.txt',
  'sitemap.xml'
];
const errors = [];

if (!fs.existsSync(dist)) errors.push('dist/ does not exist; run the production build first');
for (const relative of requiredFiles) {
  const file = path.join(dist, relative);
  if (!fs.existsSync(file)) errors.push(`missing generated artifact: ${relative}`);
}
const read = relative => {
  const file = path.join(dist, relative);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
};
const index = read('index.html');
const countries = read('data/countries.json');
const pathways = read('data/pathways.json');
const evidence = read('data/evidence/primary-source-verified.json');
const routeFinder = read('pages/find-my-route.html');

if (index && !index.includes('<title>Global Route')) errors.push('generated homepage is missing the expected title');
if (countries) {
  try {
    const payload = JSON.parse(countries);
    if (!Array.isArray(payload.countries) || payload.countries.length !== 26) errors.push(`generated countries.json must contain exactly 26 countries; found ${payload.countries?.length ?? 0}`);
  } catch (error) { errors.push(`generated countries.json is invalid JSON: ${error.message}`); }
}
if (pathways) {
  try {
    const payload = JSON.parse(pathways);
    if (!Array.isArray(payload.pathways) || payload.pathways.length < 52) errors.push(`generated pathways.json must contain at least 52 pathways; found ${payload.pathways?.length ?? 0}`);
  } catch (error) { errors.push(`generated pathways.json is invalid JSON: ${error.message}`); }
}
if (evidence) {
  try {
    const payload = JSON.parse(evidence);
    if (!Array.isArray(payload.records) || payload.records.length < 1) errors.push('generated primary evidence registry is empty');
  } catch (error) { errors.push(`generated primary evidence registry is invalid JSON: ${error.message}`); }
}
if (routeFinder && !routeFinder.includes('GlobalRoute.RouteEngine')) errors.push('generated Find My Route page is missing the canonical route engine');

const generatedJs = [];
const jsDir = path.join(dist, 'js');
if (fs.existsSync(jsDir)) {
  for (const name of fs.readdirSync(jsDir)) if (name.endsWith('.js')) generatedJs.push(fs.readFileSync(path.join(jsDir, name), 'utf8'));
}
if (generatedJs.some(content => content.includes('/src/data/countries.json'))) errors.push('generated JavaScript still references the source-only /src/data/countries.json path');

if (errors.length) {
  console.error('BUILD INTEGRITY FAILED');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}
console.log(`BUILD INTEGRITY PASSED: ${requiredFiles.length} required artifacts checked`);
