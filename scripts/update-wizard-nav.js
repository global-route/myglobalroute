#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// New nav — Wizard added between Find MyPathway and Calculator
const OLD_NAV = `<ul class="nav-menu"><li><a href="/">Home</a></li><li><a href="/pages/countries.html">Countries</a></li><li><a href="/pages/calculator.html">Calculator</a></li><li><a href="/blog/">Blog</a></li><li><a href="/pages/about.html">About</a></li><li><a href="/pages/find-mypathway.html" class="nav-cta">Find MyPathway</a></li></ul>`;

const NEW_NAV = `<ul class="nav-menu"><li><a href="/">Home</a></li><li><a href="/pages/countries.html">Countries</a></li><li><a href="/pages/find-mypathway.html">Find MyPathway</a></li><li><a href="/pages/visa-wizard.html" class="nav-cta">Visa Wizard</a></li><li><a href="/pages/calculator.html">Calculator</a></li><li><a href="/blog/">Blog</a></li><li><a href="/pages/about.html">About</a></li></ul>`;

// Files to update
const htmlFiles = [
  'src/index.html',
  'src/pages/404.html',
  'src/pages/about.html',
  'src/pages/blog.html',
  'src/pages/blog-category-business-playbooks.html',
  'src/pages/blog-category-case-studies.html',
  'src/pages/blog-category-country-audits.html',
  'src/pages/blog-category-guides.html',
  'src/pages/blog-category-policy-updates.html',
  'src/pages/blog-category-professional-playbooks.html',
  'src/pages/blog-category-student-playbooks.html',
  'src/pages/business-playbook.html',
  'src/pages/calculator.html',
  'src/pages/contact.html',
  'src/pages/countries.html',
  'src/pages/disclaimer.html',
  'src/pages/faq.html',
  'src/pages/find-mypathway.html',
  'src/pages/privacy.html',
  'src/pages/professional-playbook.html',
  'src/pages/student-playbook.html',
  'src/pages/terms.html',
];

let navUpdated = 0;
for (const rel of htmlFiles) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) { console.log(`SKIP (not found): ${rel}`); continue; }
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(OLD_NAV)) {
    content = content.replace(OLD_NAV, NEW_NAV);
    fs.writeFileSync(file, content, 'utf8');
    navUpdated++;
    console.log(`NAV updated: ${rel}`);
  } else if (content.includes('visa-wizard.html')) {
    console.log(`SKIP (already has wizard): ${rel}`);
  } else {
    console.log(`WARN (nav pattern not found): ${rel}`);
  }
}

// Update blog-post template
const njkFile = path.join(ROOT, 'src/templates/blog-post.njk');
if (fs.existsSync(njkFile)) {
  let content = fs.readFileSync(njkFile, 'utf8');
  if (content.includes(OLD_NAV)) {
    content = content.replace(OLD_NAV, NEW_NAV);
    fs.writeFileSync(njkFile, content, 'utf8');
    navUpdated++;
    console.log('NAV updated: src/templates/blog-post.njk');
  }
}

// Update homepage: fix stats count (59 → 55) and add tools section
const indexFile = path.join(ROOT, 'src/index.html');
let index = fs.readFileSync(indexFile, 'utf8');

// Fix stale pathway count in stats
index = index.replace(/<strong>59<\/strong> pathways/, '<strong>55</strong> pathways');

// Add tools section after the page-intro section, before "Why this exists"
const TOOLS_SECTION = `
    <section class="content-section tools-split-section" style="background-color:white;">
      <div class="container">
        <h2>Two ways to find your path</h2>
        <div class="tools-split-grid">
          <div class="tool-split-card">
            <div class="tool-split-label">Career &amp; Study</div>
            <h3>Find MyPathway</h3>
            <p>You know what you want. Filter 55 evidence-gated pathways by goal — work, study or business. Set your budget, experience and family size.</p>
            <ul class="checklist">
              <li>Work and study pathways</li>
              <li>Budget and experience filters</li>
              <li>Official source links</li>
            </ul>
            <a href="/pages/find-mypathway.html" class="btn btn-primary" style="margin-top:var(--spacing-md);">Browse pathways &rarr;</a>
          </div>
          <div class="tool-split-card tool-split-card--accent">
            <div class="tool-split-label">Tourist &amp; Nomad</div>
            <h3>Visa Wizard</h3>
            <p>Not sure where to start? Answer 5 questions — passport, destination, purpose, current visa, budget — and get matched to the right routes.</p>
            <ul class="checklist">
              <li>All 54 African passports</li>
              <li>Nomad &amp; remote work routes</li>
              <li>Extension &amp; transition signals</li>
            </ul>
            <a href="/pages/visa-wizard.html" class="btn btn-primary" style="margin-top:var(--spacing-md);">Start the wizard &rarr;</a>
          </div>
        </div>
      </div>
    </section>
`;

const WHY_MARKER = `    <section class="content-section"><div class="container">\n      <h2>Why this exists</h2>`;
if (!index.includes('tools-split-section') && index.includes(WHY_MARKER)) {
  index = index.replace(WHY_MARKER, TOOLS_SECTION + WHY_MARKER);
  console.log('Homepage tools section added.');
} else {
  console.log('Homepage tools section already present or marker not found.');
}

// Update "Start here" list to include Visa Wizard
const OLD_START = `        <li><a href="/pages/find-mypathway.html"><strong>Find MyPathway</strong></a> — Filter 55 evidence-gated pathways by goal (study or work)</li>`;
const NEW_START = `        <li><a href="/pages/find-mypathway.html"><strong>Find MyPathway</strong></a> — Filter 55 evidence-gated pathways by goal (study or work)</li>
        <li><a href="/pages/visa-wizard.html"><strong>Visa Wizard</strong></a> — Guided 5-step matcher for tourists, nomads and first-time movers</li>`;
if (!index.includes('Visa Wizard') && index.includes(OLD_START)) {
  index = index.replace(OLD_START, NEW_START);
  console.log('Homepage Start here list updated.');
}

fs.writeFileSync(indexFile, index, 'utf8');

console.log(`\nDone. Nav updated on ${navUpdated} files.`);
