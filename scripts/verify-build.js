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
const walkHtml = directory => {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkHtml(target);
    return entry.isFile() && entry.name.endsWith('.html') ? [target] : [];
  });
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

if (countries && pathways) {
  try {
    const countryPayload = JSON.parse(countries);
    const pathwayPayload = JSON.parse(pathways);
    const countryIds = new Set(countryPayload.countries.map(country => country.id));
    const missingCountryPages = [...countryIds].filter(id => !fs.existsSync(path.join(dist, 'pages', 'countries', id, 'index.html')));
    if (missingCountryPages.length) errors.push(`missing generated country detail pages: ${missingCountryPages.join(', ')}`);
    const missingPathwayPages = pathwayPayload.pathways.filter(pathway => !fs.existsSync(path.join(dist, 'pathways', pathway.id, 'index.html'))).map(pathway => pathway.id);
    if (missingPathwayPages.length) errors.push(`missing generated pathway detail pages: ${missingPathwayPages.join(', ')}`);

    for (const country of countryPayload.countries) {
      const html = read(`pages/countries/${country.id}/index.html`);
      if (!html) continue;
      if (!html.includes('<title>') || !html.includes('<meta name="description"')) errors.push(`country detail page ${country.id} is missing basic SEO metadata`);
      if (!html.includes('Open country source')) errors.push(`country detail page ${country.id} is missing its source-trail link`);
    }
    for (const pathway of pathwayPayload.pathways) {
      const html = read(`pathways/${pathway.id}/index.html`);
      if (!html) continue;
      if (!html.includes('<title>') || !html.includes('<meta name="description"')) errors.push(`pathway detail page ${pathway.id} is missing basic SEO metadata`);
      if (!html.includes('Open the official source')) errors.push(`pathway detail page ${pathway.id} is missing its official-source link`);
    }
  } catch (error) {
    errors.push(`detail-page integrity check could not parse generated data: ${error.message}`);
  }
}

// Static-site deep-link guard: every generated internal href must resolve to a
// generated file. External URLs, mailto/tel links, and fragment-only links are
// intentionally excluded.
for (const file of walkHtml(dist)) {
  const relative = path.relative(dist, file).replaceAll(path.sep, '/');
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    const href = match[1].trim();
    if (!href || href.startsWith('#') || /^(?:https?:|mailto:|tel:|javascript:)/i.test(href)) continue;
    let targetPath;
    try {
      targetPath = new URL(href, `https://local.invalid/${relative}`).pathname;
    } catch {
      errors.push(`${relative}: invalid internal href "${href}"`);
      continue;
    }
    const decoded = decodeURIComponent(targetPath).replace(/^\//, '');
    const candidates = [
      decoded,
      decoded.endsWith('/') ? `${decoded}index.html` : `${decoded}/index.html`
    ];
    if (!candidates.some(candidate => fs.existsSync(path.join(dist, candidate)))) {
      errors.push(`${relative}: broken internal href "${href}"`);
    }
  }
}

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
console.log(`BUILD INTEGRITY PASSED: ${requiredFiles.length} required artifacts plus country/pathway detail pages, SEO/source-trail checks and internal deep-link validation`);
