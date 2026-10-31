# GOIF Remaining Tasks — S3-1, S4-1, S4-2, S4-3, S4-4

**Updated:** 2026-10-30
**Status: ALL TASKS COMPLETE** — delivered in sprint `d5ce2b0` (2026-10-29).

This taskfile is preserved as a reference implementation record. Do not re-execute.

---

## Status

| Task | Status |
|---|---|
| S1 Schema + seed pathways | Done |
| S2 Blog posts + sitemap | Done |
| S3-1 Gap card GOIF extension | Done |
| S4-1 pSEO funded-study page | Done |
| S4-2 pSEO regional-skilled page | Done |
| S4-3 Sitemap entries for pSEO pages | Done |
| S4-4 localStorage cache for pathway data | Done |

---

## S3-1 — Gap card: surface regional_concessions + playbook CTA

**File:** `src/pages/find-mypathway.html`

Locate the `gapHtml` block (the `if (closest)` branch, around line 367). Replace the existing `gapHtml` assignment with the version below. Changes:
1. Add `GOIF_PLAYBOOK_LINKS` map above the gap block (insert once, before the `let gapHtml` line).
2. Add `renderConcessions` helper (insert once, near other render helpers).
3. Extend the gap card HTML to show capital tier label, concessions, and playbook CTA.

### Insert before `let gapHtml = ''`

```js
const GOIF_PLAYBOOK_LINKS = {
  'AU-dama-regional': '/blog/playbooks/professional/australia-dama-regional-stream-2026/',
  'IT-dsu-need-blind': '/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026/',
  'JP-tokyo-tech-accelerator': '/blog/guides/study/asian-nordic-tech-accelerators-africa-2026/',
  'PT-d3-highly-qualified': '/blog/playbooks/professional/portugal-d3-highly-qualified-2026/'
};
function renderConcessions(pathway) {
  const c = pathway.regional_concessions;
  if (!c) return '';
  const parts = [];
  if (c.age_limit_extension) parts.push(`Age cap: ${c.age_limit_extension}`);
  if (c.language_score_floor_reduction) parts.push('English floor reduced');
  if (c.salary_concession_percent) parts.push(`Salary concession: ${c.salary_concession_percent}%`);
  return parts.length ? `<p class="gap-concessions">Concessions: ${parts.join(' \xb7 ')}</p>` : '';
}
```

### Replace the `gapHtml = ...` assignment

```js
const tierLabel = closest.pathway.capital_tier === 'tier_1_funded'
  ? '<span class="funded-badge">&#10022; Funded</span>'
  : closest.pathway.capital_tier === 'tier_2_moderate'
    ? '<span class="funded-badge" style="background:var(--color-amber-100,#fef3c7);color:#92400e;">Low capital route</span>'
    : '';
const playbookUrl = GOIF_PLAYBOOK_LINKS[closest.pathway.id];
const playbookCta = playbookUrl
  ? `<a href="${esc(playbookUrl)}" class="btn btn-secondary btn-small">Read full playbook</a>`
  : '';
gapHtml = `<div class="gap-analysis">
  <p class="gap-analysis-heading">Closest pathway to your budget</p>
  <p><strong>${esc(countryName)} \u2014 ${esc(closest.pathway.name)}</strong> ${tierLabel}</p>
  ${renderConcessions(closest.pathway)}
  <p>Requires <strong>${esc(closest.tier.currency)} ${esc(String(closest.tier.value))}</strong>. You are <strong>${esc(closest.tier.currency)} ${esc(String(Math.round(closestGap)))}</strong> short.${timelineText}</p>
  <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:0.75rem;">
    <button type="button" class="btn btn-secondary btn-small" onclick="document.querySelector('[name=budget]').value='';form.dispatchEvent(new Event('submit'))">Remove budget filter</button>
    <a href="/pages/calculator.html" class="btn btn-secondary btn-small">Open budget calculator</a>
    ${playbookCta}
  </div>
</div>`;
```

---

## S4-1 — pSEO page: Funded Study Routes

**File:** `src/pages/pathways-funded-study.html`

Create this file. On load it fetches `/data/pathways.json`, filters `capital_tier === 'tier_1_funded' && type === 'study'`, renders cards. Includes `ItemList` JSON-LD.

```html
<!doctype html>
<html lang="en">
<head>
  <script async src="https://www.sabilytics.com/script.js" data-site="atsngkb78nmt" data-domain="org.uk"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Funded Study Routes for African Students 2026 | MyPathway2Global</title>
  <meta name="description" content="Evidence-gated study pathways with zero or near-zero upfront cost — scholarships, stipends and funded programmes verified from official sources.">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="https://mypathway2global.org.uk/pages/pathways-funded-study.html">
  <link rel="stylesheet" href="/css/styles.css?v=3">
  <link rel="stylesheet" href="/css/responsive.css?v=3">
  <link rel="stylesheet" href="/css/enhancements.css?v=4">
  <script type="application/ld+json" id="itemlist-ld"></script>
</head>
<body data-page-type="pseo-funded-study">
  <a href="#main" class="skip-link">Skip to main content</a>
  <header id="header" class="header">
    <div class="header-container">
      <div class="logo"><a href="/" class="logo-link"><span class="logo-text">MyPathway2Global</span></a></div>
      <nav class="navigation" aria-label="Primary">
        <button class="nav-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
        <ul class="nav-menu"><li><a href="/">Home</a></li><li><a href="/pages/countries.html">Countries</a></li><li><a href="/pages/find-mypathway.html">Find MyPathway</a></li><li><a href="/pages/visa-wizard.html" class="nav-cta">Visa Wizard</a></li><li><a href="/pages/calculator.html">Calculator</a></li><li><a href="/blog/">Blog</a></li></ul>
      </nav>
    </div>
  </header>
  <main id="main" class="main">
    <div class="page-header">
      <div class="container">
        <span class="page-header-badge">Funded Routes</span>
        <h1>Funded Study Routes for African Students 2026</h1>
        <p class="page-header-subtitle">Evidence-gated study pathways with zero or near-zero upfront cost — scholarships, stipends and funded programmes verified from official sources.</p>
      </div>
    </div>
    <section class="container" style="padding-top:var(--spacing-2xl);padding-bottom:var(--spacing-3xl);">
      <div id="funded-cards" aria-live="polite"><p>Loading pathways...</p></div>
      <div style="margin-top:var(--spacing-2xl);">
        <h2>Related guides</h2>
        <ul class="link-list">
          <li><a href="/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026/">Italy DSU Need-Blind Scholarship 2026</a></li>
          <li><a href="/blog/playbooks/student/italy-dsu-scholarship-complete-guide/">Italy DSU Scholarship: Complete Guide</a></li>
          <li><a href="/blog/playbooks/student/italy-dsu-vs-germany-public-universities-2026/">Italy DSU vs Germany Public Universities 2026</a></li>
          <li><a href="/blog/guides/study/tuition-free-low-cost-study-northern-europe-asia-2026/">Tuition-Free Study in Northern Europe and Asia 2026</a></li>
        </ul>
      </div>
    </section>
  </main>
  <div class="disclaimer-bar"><p>General information only — not legal or immigration advice. Always verify current requirements with the relevant authority before paying fees or submitting an application. <a href="/pages/disclaimer.html">Full disclaimer &rarr;</a></p></div>
  <footer id="footer" class="footer">
    <div class="footer-content">
      <div class="footer-section"><h4>MyPathway2Global</h4><p>Evidence-gated global mobility intelligence.</p></div>
      <div class="footer-section"><h4>Explore</h4><ul><li><a href="/pages/find-mypathway.html">Find MyPathway</a></li><li><a href="/pages/countries.html">Countries</a></li><li><a href="/blog/">Blog</a></li></ul></div>
    </div>
    <div class="footer-bottom"><p>&copy; 2026 MyPathway2Global. All rights reserved.</p></div>
  </footer>
  <script src="/js/analytics.js"></script>
  <script>
    const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    async function loadPathways() {
      const KEY = 'goif_pathways_v1', TTL = 86400000;
      try {
        const cached = JSON.parse(localStorage.getItem(KEY) || 'null');
        if (cached && Date.now() - cached.ts < TTL) return cached.data;
      } catch (_) {}
      const r = await fetch('/data/pathways.json');
      if (!r.ok) throw new Error('Unable to load pathways');
      const data = await r.json();
      try { localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), data })); } catch (_) {}
      return data;
    }
    async function init() {
      const container = document.getElementById('funded-cards');
      try {
        const data = await loadPathways();
        const pathways = (data.pathways || []).filter(p => p.capital_tier === 'tier_1_funded' && p.type === 'study' && p.status === 'publishable');
        if (!pathways.length) {
          container.innerHTML = '<p>No funded study pathways are currently published. Check back as more are verified.</p>';
          return;
        }
        container.innerHTML = pathways.map((p, i) => `<article style="margin-bottom:var(--spacing-xl);padding:var(--spacing-lg);border:1px solid var(--color-border);border-radius:var(--radius-md);">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem;">
            <h2 style="margin:0;font-size:1.1rem;">${esc(p.country_name || p.countryId)} \u2014 ${esc(p.name)}</h2>
            <span class="funded-badge">&#10022; Funded</span>
          </div>
          <p style="color:var(--color-neutral-500);font-size:0.875rem;margin-bottom:0.75rem;">${esc(p.sourceAuthority || '')}</p>
          <a href="${esc(p.sourceUrl)}" rel="noopener noreferrer" class="btn btn-secondary btn-small">Official source &rarr;</a>
        </article>`).join('');
        // ItemList JSON-LD
        document.getElementById('itemlist-ld').textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Funded Study Routes for African Students 2026',
          itemListElement: pathways.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `${p.country_name || p.countryId} \u2014 ${p.name}`,
            url: p.sourceUrl
          }))
        });
      } catch (e) {
        container.innerHTML = `<p>Unable to load pathways: ${esc(e.message)}</p>`;
      }
    }
    init();
  </script>
</body>
</html>
```

---

## S4-2 — pSEO page: Regional Skilled Gap Routes

**File:** `src/pages/pathways-regional-skilled.html`

Same pattern as S4-1. Filters `asymmetry_category === 'regional_skilled_gap'`.

```html
<!doctype html>
<html lang="en">
<head>
  <script async src="https://www.sabilytics.com/script.js" data-site="atsngkb78nmt" data-domain="org.uk"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Regional Skilled Gap Routes for African Professionals 2026 | MyPathway2Global</title>
  <meta name="description" content="Employer-sponsored pathways in regional areas with concessions on age, English and occupation lists — verified from official government sources.">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="https://mypathway2global.org.uk/pages/pathways-regional-skilled.html">
  <link rel="stylesheet" href="/css/styles.css?v=3">
  <link rel="stylesheet" href="/css/responsive.css?v=3">
  <link rel="stylesheet" href="/css/enhancements.css?v=4">
  <script type="application/ld+json" id="itemlist-ld"></script>
</head>
<body data-page-type="pseo-regional-skilled">
  <a href="#main" class="skip-link">Skip to main content</a>
  <header id="header" class="header">
    <div class="header-container">
      <div class="logo"><a href="/" class="logo-link"><span class="logo-text">MyPathway2Global</span></a></div>
      <nav class="navigation" aria-label="Primary">
        <button class="nav-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
        <ul class="nav-menu"><li><a href="/">Home</a></li><li><a href="/pages/countries.html">Countries</a></li><li><a href="/pages/find-mypathway.html">Find MyPathway</a></li><li><a href="/pages/visa-wizard.html" class="nav-cta">Visa Wizard</a></li><li><a href="/pages/calculator.html">Calculator</a></li><li><a href="/blog/">Blog</a></li></ul>
      </nav>
    </div>
  </header>
  <main id="main" class="main">
    <div class="page-header">
      <div class="container">
        <span class="page-header-badge">Regional Gap Routes</span>
        <h1>Regional Skilled Gap Routes for African Professionals 2026</h1>
        <p class="page-header-subtitle">Employer-sponsored pathways in regional areas with concessions on age, English and occupation lists — verified from official government sources.</p>
      </div>
    </div>
    <section class="container" style="padding-top:var(--spacing-2xl);padding-bottom:var(--spacing-3xl);">
      <div id="regional-cards" aria-live="polite"><p>Loading pathways...</p></div>
      <div style="margin-top:var(--spacing-2xl);">
        <h2>Related guides</h2>
        <ul class="link-list">
          <li><a href="/blog/playbooks/professional/australia-dama-regional-stream-2026/">Australia DAMA Regional Stream 2026</a></li>
          <li><a href="/blog/country-audits/australia/australia-visa-from-nigeria-2026/">Australia Visa from Nigeria 2026</a></li>
        </ul>
      </div>
    </section>
  </main>
  <div class="disclaimer-bar"><p>General information only — not legal or immigration advice. Always verify current requirements with the relevant authority before paying fees or submitting an application. <a href="/pages/disclaimer.html">Full disclaimer &rarr;</a></p></div>
  <footer id="footer" class="footer">
    <div class="footer-content">
      <div class="footer-section"><h4>MyPathway2Global</h4><p>Evidence-gated global mobility intelligence.</p></div>
      <div class="footer-section"><h4>Explore</h4><ul><li><a href="/pages/find-mypathway.html">Find MyPathway</a></li><li><a href="/pages/countries.html">Countries</a></li><li><a href="/blog/">Blog</a></li></ul></div>
    </div>
    <div class="footer-bottom"><p>&copy; 2026 MyPathway2Global. All rights reserved.</p></div>
  </footer>
  <script src="/js/analytics.js"></script>
  <script>
    const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    async function loadPathways() {
      const KEY = 'goif_pathways_v1', TTL = 86400000;
      try {
        const cached = JSON.parse(localStorage.getItem(KEY) || 'null');
        if (cached && Date.now() - cached.ts < TTL) return cached.data;
      } catch (_) {}
      const r = await fetch('/data/pathways.json');
      if (!r.ok) throw new Error('Unable to load pathways');
      const data = await r.json();
      try { localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), data })); } catch (_) {}
      return data;
    }
    function renderConcessions(p) {
      const c = p.regional_concessions;
      if (!c) return '';
      const parts = [];
      if (c.age_limit_extension) parts.push(`Age cap: ${c.age_limit_extension}`);
      if (c.language_score_floor_reduction) parts.push('English floor reduced');
      if (c.salary_concession_percent) parts.push(`Salary concession: ${c.salary_concession_percent}%`);
      return parts.length ? `<p style="font-size:0.875rem;color:var(--color-neutral-500);margin:0.25rem 0 0.75rem;">Concessions: ${parts.map(esc).join(' \xb7 ')}</p>` : '';
    }
    async function init() {
      const container = document.getElementById('regional-cards');
      try {
        const data = await loadPathways();
        const pathways = (data.pathways || []).filter(p => p.asymmetry_category === 'regional_skilled_gap' && p.status === 'publishable');
        if (!pathways.length) {
          container.innerHTML = '<p>No regional skilled gap pathways are currently published. More are being verified — check back soon.</p>';
          return;
        }
        container.innerHTML = pathways.map((p, i) => `<article style="margin-bottom:var(--spacing-xl);padding:var(--spacing-lg);border:1px solid var(--color-border);border-radius:var(--radius-md);">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem;">
            <h2 style="margin:0;font-size:1.1rem;">${esc(p.country_name || p.countryId)} \u2014 ${esc(p.name)}</h2>
          </div>
          ${renderConcessions(p)}
          <p style="color:var(--color-neutral-500);font-size:0.875rem;margin-bottom:0.75rem;">${esc(p.sourceAuthority || '')}</p>
          <a href="${esc(p.sourceUrl)}" rel="noopener noreferrer" class="btn btn-secondary btn-small">Official source &rarr;</a>
        </article>`).join('');
        document.getElementById('itemlist-ld').textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Regional Skilled Gap Routes for African Professionals 2026',
          itemListElement: pathways.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `${p.country_name || p.countryId} \u2014 ${p.name}`,
            url: p.sourceUrl
          }))
        });
      } catch (e) {
        container.innerHTML = `<p>Unable to load pathways: ${esc(e.message)}</p>`;
      }
    }
    init();
  </script>
</body>
</html>
```

---

## S4-3 — Sitemap entries for pSEO pages

**File:** `public/sitemap.xml` — add before `</urlset>`:

```xml
<url><loc>https://mypathway2global.org.uk/pages/pathways-funded-study.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://mypathway2global.org.uk/pages/pathways-regional-skilled.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
```

---

## S4-4 — localStorage cache for pathway data in Find MyPathway

**File:** `src/pages/find-mypathway.html`

Replace the `loadJson('/data/pathways.json')` call inside the `Promise.all` with a `loadPathways()` call that caches with a 24-hour TTL.

### Insert this function before the `form.addEventListener('submit', ...)` block:

```js
async function loadPathways() {
  const KEY = 'goif_pathways_v1', TTL = 86400000;
  try {
    const cached = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (cached && Date.now() - cached.ts < TTL) return cached.data;
  } catch (_) {}
  const data = await loadJson('/data/pathways.json');
  try { localStorage.setItem(KEY, JSON.stringify({ ts: Date.now(), data })); } catch (_) {}
  return data;
}
```

### Replace inside the submit handler:

```js
// Before:
const [countries, pathways] = await Promise.all([loadJson('/data/countries.json'), loadJson('/data/pathways.json')]);

// After:
const [countries, pathways] = await Promise.all([loadJson('/data/countries.json'), loadPathways()]);
```

---

## Tests to add

**File:** `tests/route-engine.test.js` — append a new describe block:

```js
describe('GOIF gap card fields', () => {
  test('regional_concessions is preserved on GOIF pathway objects', () => {
    const p = {
      id: 'AU-dama-regional', countryId: 'AU', type: 'work', status: 'publishable',
      evidenceIds: ['AU-dama-regional-eligibility-2026-10-29'],
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements',
      asymmetry_category: 'regional_skilled_gap',
      capital_tier: 'tier_2_moderate',
      regional_concessions: { age_limit_extension: 55, language_score_floor_reduction: true, salary_concession_percent: 10 }
    };
    expect(p.regional_concessions.age_limit_extension).toBe(55);
    expect(p.regional_concessions.language_score_floor_reduction).toBe(true);
    expect(p.regional_concessions.salary_concession_percent).toBe(10);
  });

  test('tier_1_funded pathway has no regional_concessions', () => {
    const p = {
      id: 'IT-dsu-need-blind', countryId: 'IT', type: 'study', status: 'publishable',
      evidenceIds: ['IT-dsu-need-blind-eligibility-2026-10-29'],
      sourceUrl: 'https://www.dsu.toscana.it/',
      asymmetry_category: 'academic_research',
      capital_tier: 'tier_1_funded'
    };
    expect(p.capital_tier).toBe('tier_1_funded');
    expect(p.regional_concessions).toBeUndefined();
  });

  test('scorePathway handles GOIF pathway with regional_concessions without error', () => {
    const { scorePathway } = require('../src/js/route-engine');
    const p = {
      id: 'AU-dama-regional', countryId: 'AU', type: 'work', status: 'publishable',
      evidenceIds: ['AU-dama-regional-eligibility-2026-10-29'],
      sourceUrl: 'https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements',
      asymmetry_category: 'regional_skilled_gap',
      capital_tier: 'tier_2_moderate',
      regional_concessions: { age_limit_extension: 55, language_score_floor_reduction: true, salary_concession_percent: 10 }
    };
    const result = scorePathway(p, { id: 'AU', dataStatus: 'publishable' }, { goal: 'work' });
    expect(result.eligible).toBe(true);
    expect(result.score).toBeGreaterThan(0);
  });
});
```

**File:** `tests/data-contract.test.js` — add assertions that GOIF pathways carry required fields:

```js
describe('GOIF pathway schema contract', () => {
  const pathwaysData = require('../src/data/pathways.json');
  const goifIds = ['AU-dama-regional', 'IT-dsu-need-blind', 'JP-tokyo-tech-accelerator', 'PT-d3-highly-qualified'];
  const goifPathways = pathwaysData.pathways.filter(p => goifIds.includes(p.id));

  test('all 4 GOIF seed pathways are present', () => {
    expect(goifPathways).toHaveLength(4);
  });

  test.each(goifIds)('%s has asymmetry_category and capital_tier', id => {
    const p = pathwaysData.pathways.find(p => p.id === id);
    expect(p).toBeDefined();
    expect(['tech_engineering','academic_research','regional_skilled_gap','remote_freelance']).toContain(p.asymmetry_category);
    expect(['tier_1_funded','tier_2_moderate','tier_3_standard']).toContain(p.capital_tier);
  });

  test('AU-dama-regional has regional_concessions with age_limit_extension', () => {
    const p = pathwaysData.pathways.find(p => p.id === 'AU-dama-regional');
    expect(p.regional_concessions).toBeDefined();
    expect(p.regional_concessions.age_limit_extension).toBe(55);
  });
});
```

---

## Acceptance criteria

- [ ] Gap card shows `regional_concessions` when present (age cap, English floor, salary concession)
- [ ] Gap card shows capital tier badge (Funded / Low capital route)
- [ ] Gap card shows playbook CTA link for the 4 GOIF pathway IDs
- [ ] `src/pages/pathways-funded-study.html` exists and renders IT-dsu-need-blind card
- [ ] `src/pages/pathways-regional-skilled.html` exists and renders AU-dama-regional card with concessions
- [ ] Both pSEO pages have `ItemList` JSON-LD
- [ ] Both pSEO pages in `public/sitemap.xml`
- [ ] `loadPathways()` in find-mypathway.html — second call within 24h reads from localStorage, no network request
- [ ] `loadPathways()` in both pSEO pages — same cache key `goif_pathways_v1`, shared TTL
- [ ] All existing 19/19 test suites still pass
- [ ] New GOIF gap card tests pass (3 tests in route-engine.test.js)
- [ ] New GOIF data contract tests pass (4 tests in data-contract.test.js)
- [ ] `npx wrangler deploy` succeeds

## Execution order

S3-1 (gap card) → S4-4 (localStorage in FMP) → S4-1 (funded-study page) → S4-2 (regional-skilled page) → S4-3 (sitemap) → run tests
