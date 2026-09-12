const fs = require('node:fs');
const path = require('node:path');

const dist = path.join(__dirname, '..', 'dist');
const errors = [];

const walkHtml = directory => {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkHtml(target);
    return entry.isFile() && entry.name.endsWith('.html') ? [target] : [];
  });
};

const htmlFiles = walkHtml(dist);
if (!htmlFiles.length) errors.push('no generated HTML files found; run the build before SEO/accessibility verification');

for (const file of htmlFiles) {
  const relative = path.relative(dist, file);
  const html = fs.readFileSync(file, 'utf8');
  if (!/<html[^>]*\blang=["'][^"']+["']/i.test(html)) errors.push(`${relative}: missing html lang attribute`);
  if (!/<title>[^<]{3,}<\/title>/i.test(html)) errors.push(`${relative}: missing meaningful title`);
  if (!/<meta\s+[^>]*name=["']description["'][^>]*content=["'][^"']{20,}["']/i.test(html) && !/<meta\s+[^>]*content=["'][^"']{20,}["'][^>]*name=["']description["']/i.test(html)) errors.push(`${relative}: missing meaningful meta description`);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) errors.push(`${relative}: expected exactly one h1, found ${h1Count}`);
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map(match => match[0]);
  for (const image of images) if (!/\balt=["'][^"']*["']/i.test(image)) errors.push(`${relative}: image missing alt attribute`);
  const links = [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)].map(match => ({ tag: match[0], text: match[1].replace(/<[^>]+>/g, '').trim() }));
  for (const link of links) if (!link.text && !/\baria-label=["'][^"']+["']/i.test(link.tag)) errors.push(`${relative}: link has no accessible text or aria-label`);

  const ids = new Map();
  for (const match of html.matchAll(/\bid=["']([^"']+)["']/gi)) ids.set(match[1], (ids.get(match[1]) || 0) + 1);
  for (const [id, count] of ids) if (count > 1) errors.push(`${relative}: duplicate id "${id}" (${count} occurrences)`);
}

for (const required of ['robots.txt', 'sitemap.xml']) {
  if (!fs.existsSync(path.join(dist, required))) errors.push(`missing generated ${required}`);
}

if (errors.length) {
  console.error('SEO/A11Y VERIFICATION FAILED');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`SEO/A11Y VERIFICATION PASSED: ${htmlFiles.length} generated HTML files checked`);
