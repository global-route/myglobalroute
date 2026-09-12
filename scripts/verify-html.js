const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const errors = [];

const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const target = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});

if (!fs.existsSync(dist)) {
  console.error('HTML VERIFICATION FAILED: dist/ does not exist; run the build first.');
  process.exit(1);
}

const htmlFiles = walk(dist).filter(file => file.endsWith('.html'));
if (!htmlFiles.length) {
  console.error('HTML VERIFICATION FAILED: no generated HTML files found.');
  process.exit(1);
}

for (const file of htmlFiles) {
  const relative = path.relative(dist, file).replaceAll(path.sep, '/');
  const html = fs.readFileSync(file, 'utf8');
  if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(html)) errors.push(`${relative}: missing html[lang]`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${relative}: missing non-empty title`);
  if (!/<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+["']/i.test(html)) errors.push(`${relative}: missing meta description`);

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt=["']/i.test(match[1])) errors.push(`${relative}: image missing alt attribute`);
  }

  const ids = new Map();
  for (const match of html.matchAll(/\bid=["']([^"']+)["']/gi)) {
    const id = match[1];
    ids.set(id, (ids.get(id) || 0) + 1);
  }
  for (const [id, count] of ids) if (count > 1) errors.push(`${relative}: duplicate id "${id}" (${count} occurrences)`);

  for (const match of html.matchAll(/<a\b([^>]*)>/gi)) {
    if (!/\bhref=["'][^"']+["']/i.test(match[1])) errors.push(`${relative}: anchor missing href`);
  }
}

for (const required of ['robots.txt', 'sitemap.xml']) {
  if (!fs.existsSync(path.join(dist, required))) errors.push(`missing generated ${required}`);
}

if (errors.length) {
  console.error('HTML VERIFICATION FAILED');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`HTML VERIFICATION PASSED: ${htmlFiles.length} HTML files checked for language, title, description, image alt text, anchor hrefs and duplicate ids.`);
