# GOIF Implementation Taskfile
**Global Opportunity Integration Framework**
**Updated:** 2026-10-29 | **Baseline:** 65 pathways · 59 publishable · 19/19 suites · 177/177 tests

---

## Status summary

| Task | Status |
|---|---|
| S1-1 Schema + 4 seed pathways | ✅ Done |
| S1-2 Validator enum checks | ✅ Done |
| S1-3 Route Type filter in Find MyPathway | ✅ Done |
| S1-4 Funded badge on cards | ✅ Done |
| S1-5 Tests (route-engine + data-contract) | ✅ Done |
| S2-1 Australia DAMA playbook | ❌ Missing |
| S2-2 Italy DSU need-blind playbook | ❌ Missing |
| S2-3 Asian & Nordic tech accelerators guide | ❌ Missing |
| S2-4 Portugal D3 playbook | ❌ Missing |
| S2-5 blog-posts.json + sitemap for new posts | ❌ Pending S2-1–4 |
| S3-1 Near-miss gap card (regional_concessions) | ⚠️ Partial — gap card exists but ignores GOIF fields |
| S3-2 Asymmetry results header note | ✅ Done |
| S3-3 Funded badge CSS | ✅ Done |
| S4-1 pSEO page: funded study routes | ❌ Missing |
| S4-2 pSEO page: regional skilled gap routes | ❌ Missing |
| S4-3 Sitemap + routes for pSEO pages | ❌ Pending S4-1–2 |
| S4-4 localStorage cache for pathway data | ❌ Missing |

---

## Sprint 2 — Content & Playbooks

### S2-1 · Australia DAMA Deep-Dive Playbook

**File:** `content/blog/playbooks/professional/australia-dama-regional-stream-2026.md`

```yaml
layout: blog-post.njk
title: "Australia DAMA Regional Stream 2026: The Employer-Sponsored Route with Age and English Concessions"
date: 2026-10-29
lastFactChecked: 2026-10-29
author: "MyPathway2Global Editorial"
category: "Professional Playbooks"
country: "Australia"
goal: "work"
readTime: "13 min"
featured: true
excerpt: "Australia's Designated Area Migration Agreements let regional employers sponsor workers outside the standard skilled occupation list — with age caps extended to 55, English score floors reduced, and salary concessions of up to 10%. Here is what the process actually requires."
keywords: "australia dama visa nigeria, designated area migration agreement africa, regional employer sponsored visa australia 2026"
faqs:
  - q: "What is a DAMA and how is it different from a standard skilled visa?"
    a: "A DAMA is a formal agreement between the Australian Government and a regional authority that allows employers in that region to sponsor workers for occupations and at concession levels not available under standard skilled migration. The key differences are: age cap extended to 55 (standard is 45), English score floors reduced, and expanded occupation lists."
  - q: "Do I need a job offer for a DAMA visa?"
    a: "Yes. DAMA pathways are employer-sponsored — you cannot self-sponsor. The employer must be an approved DAMA sponsor operating in a designated regional area."
  - q: "Does the DAMA lead to permanent residency?"
    a: "Yes. DAMA workers typically enter on a Temporary Skill Shortage (TSS) visa or similar, and can transition to permanent residence after meeting regional work requirements — typically 3 years in the region."
```

Content sections:
- What is a DAMA — structure, regional authorities, how agreements work
- The concessions — age 55, English floor reduction, salary concession up to 10%, expanded occupation lists
- How to find a DAMA employer — regional authority websites, job boards
- Application process — TSS visa, Labour Agreement stream, nomination, visa application
- PR vector — 3 years regional work → subclass 191 permanent residence
- Proof of funds — AUD 5,300 indicative setup cost
- Evidence note — all figures from `https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements`

---

### S2-2 · Italy DSU Need-Blind Scholarship Playbook

**File:** `content/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026.md`

```yaml
layout: blog-post.njk
title: "Italy DSU Need-Blind Scholarship 2026: ISEE, Zero Tuition and the EUR 7,000 Stipend"
date: 2026-10-29
lastFactChecked: 2026-10-29
author: "MyPathway2Global Editorial"
category: "Student Playbooks"
country: "Italy"
goal: "study"
readTime: "12 min"
featured: true
excerpt: "Italy's DSU scholarship is means-tested, not merit-tested. If your household income qualifies under the ISEE system, you can receive zero tuition, free accommodation, free meals and up to EUR 7,000/year in cash. Here is how the ISEE calculation works for African applicants."
keywords: "italy dsu scholarship isee nigeria, need blind scholarship italy africa 2026, free university italy african students"
faqs:
  - q: "What is the ISEE and how is it calculated for international students?"
    a: "ISEE (Indicatore della Situazione Economica Equivalente) is Italy's means-test for household income and assets. For international students, it is calculated using income and assets in your home country, converted to EUR. You obtain the ISEE certification from the Italian consulate in your country or from a CAF office in Italy."
  - q: "What does the DSU scholarship actually cover?"
    a: "Zero tuition fees, free on-campus accommodation (where available), free meal vouchers at university canteens, and a cash grant of EUR 5,400 to EUR 7,000 per academic year depending on your ISEE score and the regional DSU authority."
  - q: "Is the DSU scholarship competitive?"
    a: "Yes. Not all eligible applicants receive the full benefit package — places for accommodation are limited. You must apply early in the academic year. The scholarship is separate from university admission."
```

Content sections:
- DSU vs merit scholarships — why need-blind matters for African applicants
- ISEE for international students — step-by-step: what documents, where to get certified, ISEE thresholds (2025-26: income < EUR 26,306, patrimony < EUR 52,083 for Toscana)
- What the benefit package covers — tuition waiver, accommodation, meals, cash grant breakdown
- Regional DSU operators — Toscana, Lombardia, Lazio, how to find your university's operator
- Application timeline — when bando opens, deadlines, provisional vs final award
- Study visa process — how DSU interacts with the standard Italian study visa
- Cross-link to existing `italy-dsu-scholarship-complete-guide` for application walkthrough
- Evidence note — all figures from `https://www.dsu.toscana.it/`

---

### S2-3 · Asian & Nordic Tech Accelerators Guide

**File:** `content/blog/guides/study/asian-nordic-tech-accelerators-africa-2026.md`

```yaml
layout: blog-post.njk
title: "Asian and Nordic Tech Accelerators for African Founders 2026: Zero-Equity Programs with Visa Pathways"
date: 2026-10-29
lastFactChecked: 2026-10-29
author: "MyPathway2Global Editorial"
category: "Guides"
goal: ""
readTime: "11 min"
featured: false
excerpt: "Tokyo, Helsinki, Stockholm and Oslo run zero-equity accelerator programs that include startup visa endorsement. For African tech founders, these are lower-friction entry points than standard work visas. Here is what each program actually requires."
keywords: "tokyo startup visa africa, nordic accelerator african founders, japan tech accelerator nigeria 2026, helsinki startup permit africa"
faqs:
  - q: "What is the Tokyo Startup Visa?"
    a: "A 6-month status of residence issued to founders endorsed by a Tokyo Metropolitan Government-designated support organisation. It allows you to establish a business in Japan. After 6 months, you can convert to a standard Business Manager visa if your business meets the criteria (JPY 5,000,000 capital or 2 full-time employees)."
  - q: "Do Nordic accelerators provide visa support?"
    a: "Sweden, Finland and Norway all have startup visa or entrepreneur residence permit routes. Acceptance into a recognised accelerator program strengthens the application. Finland's startup permit requires endorsement from Business Finland."
  - q: "What does zero-equity mean in practice?"
    a: "The accelerator takes no ownership stake in your company in exchange for the program. You receive funding, lab access, mentorship and corporate introductions without diluting your cap table."
```

Content sections:
- Why accelerators beat standard work visas for founders — no salary threshold, no employer sponsor
- Tokyo — Tokyo Metropolitan Government startup support, Tokyo Startup Visa mechanics, 6-month → Business Manager conversion, JPY 5M capital requirement
- Helsinki — Business Finland startup permit, what qualifies as a startup, processing time
- Stockholm — Sweden startup visa (Tillstånd för att starta företag), requirements
- Oslo — Norway self-employed residence permit, what counts as viable business
- Comparison table — visa type, duration, capital requirement, PR vector for each
- Evidence note — primary sources for each country

---

### S2-4 · Portugal D3 Highly Qualified Visa Playbook

**File:** `content/blog/playbooks/professional/portugal-d3-highly-qualified-2026.md`

```yaml
layout: blog-post.njk
title: "Portugal D3 Highly Qualified Visa 2026: Fast-Track Residence for Tech Specialists and Researchers"
date: 2026-10-29
lastFactChecked: 2026-10-29
author: "MyPathway2Global Editorial"
category: "Professional Playbooks"
country: "Portugal"
goal: "work"
readTime: "12 min"
featured: true
excerpt: "Portugal's D3 visa is for highly qualified workers with a job contract or service agreement with a Portuguese entity. It leads to permanent residence in 5 years and citizenship in 5 years. The minimum income threshold is above the Portuguese minimum wage — here is what AIMA actually requires."
keywords: "portugal d3 visa nigeria, highly qualified visa portugal africa 2026, portugal tech visa african professionals"
faqs:
  - q: "What qualifies as a highly qualified activity for the D3 visa?"
    a: "Senior management roles, specialist technical roles requiring a degree or equivalent professional qualification, and research or teaching roles at accredited institutions. The activity must be performed for a Portuguese entity under a qualifying employment contract or service agreement."
  - q: "How long does the D3 visa take to process?"
    a: "AIMA processing times vary. The initial D3 long-stay visa is issued by the Portuguese consulate in your country (typically 2-4 months). The residence permit is then issued by AIMA after arrival (typically 1-2 months)."
  - q: "Does the D3 visa lead to permanent residence?"
    a: "Yes. After 5 years of legal residence in Portugal, you can apply for permanent residence. After 5 years you can also apply for Portuguese citizenship, which gives EU freedom of movement."
```

Content sections:
- What the D3 is and who it is for — tech specialists, researchers, executives, senior managers
- Qualifying activities — what counts, what does not
- Qualification requirements — degree or 3+ years relevant experience for non-degree holders
- Income threshold — above Portuguese minimum wage (EUR 1,020/month in 2026), what AIMA assesses
- Application process — consulate D3 visa → arrival → AIMA residence permit
- PR and citizenship vector — 5-year timeline, NHR tax regime interaction
- Comparison with Digital Nomad (D8) — D3 requires Portuguese employer, D8 requires foreign employer
- Proof of funds — EUR 2,580 indicative setup cost
- Evidence note — all figures from `https://aima.gov.pt/pt`

---

### S2-5 · Register new posts + sitemap

**File:** `src/data/blog-posts.json` — append 4 entries after the last existing entry, before the closing `]`:

```json
{
  "id": "australia-dama-regional-stream-2026",
  "title": "Australia DAMA Regional Stream 2026: The Employer-Sponsored Route with Age and English Concessions",
  "slug": "australia-dama-regional-stream-2026",
  "excerpt": "Australia's Designated Area Migration Agreements let regional employers sponsor workers outside the standard skilled occupation list — with age caps extended to 55, English score floors reduced, and salary concessions of up to 10%.",
  "category": "professional-playbooks",
  "date": "2026-10-29",
  "updated": "2026-10-29",
  "author": "MyPathway2Global Editorial",
  "readTime": "13 min",
  "content": "content/blog/playbooks/professional/australia-dama-regional-stream-2026.md",
  "featured": true,
  "keywords": ["Australia DAMA visa Nigeria", "designated area migration agreement Africa", "regional employer sponsored visa Australia 2026"]
},
{
  "id": "italy-dsu-need-blind-scholarship-2026",
  "title": "Italy DSU Need-Blind Scholarship 2026: ISEE, Zero Tuition and the EUR 7,000 Stipend",
  "slug": "italy-dsu-need-blind-scholarship-2026",
  "excerpt": "Italy's DSU scholarship is means-tested, not merit-tested. If your household income qualifies under the ISEE system, you can receive zero tuition, free accommodation, free meals and up to EUR 7,000/year in cash.",
  "category": "student-playbooks",
  "date": "2026-10-29",
  "updated": "2026-10-29",
  "author": "MyPathway2Global Editorial",
  "readTime": "12 min",
  "content": "content/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026.md",
  "featured": true,
  "keywords": ["Italy DSU scholarship ISEE Nigeria", "need blind scholarship Italy Africa 2026", "free university Italy African students"]
},
{
  "id": "asian-nordic-tech-accelerators-africa-2026",
  "title": "Asian and Nordic Tech Accelerators for African Founders 2026: Zero-Equity Programs with Visa Pathways",
  "slug": "asian-nordic-tech-accelerators-africa-2026",
  "excerpt": "Tokyo, Helsinki, Stockholm and Oslo run zero-equity accelerator programs that include startup visa endorsement. For African tech founders, these are lower-friction entry points than standard work visas.",
  "category": "guides",
  "date": "2026-10-29",
  "updated": "2026-10-29",
  "author": "MyPathway2Global Editorial",
  "readTime": "11 min",
  "content": "content/blog/guides/study/asian-nordic-tech-accelerators-africa-2026.md",
  "featured": false,
  "keywords": ["Tokyo startup visa Africa", "Nordic accelerator African founders", "Japan tech accelerator Nigeria 2026"]
},
{
  "id": "portugal-d3-highly-qualified-2026",
  "title": "Portugal D3 Highly Qualified Visa 2026: Fast-Track Residence for Tech Specialists and Researchers",
  "slug": "portugal-d3-highly-qualified-2026",
  "excerpt": "Portugal's D3 visa is for highly qualified workers with a job contract or service agreement with a Portuguese entity. It leads to permanent residence in 5 years and citizenship in 5 years.",
  "category": "professional-playbooks",
  "date": "2026-10-29",
  "updated": "2026-10-29",
  "author": "MyPathway2Global Editorial",
  "readTime": "12 min",
  "content": "content/blog/playbooks/professional/portugal-d3-highly-qualified-2026.md",
  "featured": true,
  "keywords": ["Portugal D3 visa Nigeria", "highly qualified visa Portugal Africa 2026", "Portugal tech visa African professionals"]
}
```

**File:** `public/sitemap.xml` — add 4 `<url>` blocks:
```xml
<url><loc>https://mypathway2global.org.uk/blog/playbooks/professional/australia-dama-regional-stream-2026/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://mypathway2global.org.uk/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://mypathway2global.org.uk/blog/guides/study/asian-nordic-tech-accelerators-africa-2026/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://mypathway2global.org.uk/blog/playbooks/professional/portugal-d3-highly-qualified-2026/</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
```

---

## Sprint 3 — UI Trust (remaining)

### S3-1 · Near-miss gap card — surface GOIF fields

**File:** `src/pages/find-mypathway.html` — `gapHtml` block (line ~367)

Current gap card shows pathway name, funds shortfall, and timeline. Extend it to also show:
1. `capital_tier` label — "Tier 1 Funded" or "Low capital route"
2. `regional_concessions` if present — render as a small list: "Age cap: 55 · English floor reduced · Salary concession: 10%"
3. CTA link to the relevant playbook — map pathway ID to blog slug:

```js
const GOIF_PLAYBOOK_LINKS = {
  'AU-dama-regional': '/blog/playbooks/professional/australia-dama-regional-stream-2026/',
  'IT-dsu-need-blind': '/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026/',
  'JP-tokyo-tech-accelerator': '/blog/guides/study/asian-nordic-tech-accelerators-africa-2026/',
  'PT-d3-highly-qualified': '/blog/playbooks/professional/portugal-d3-highly-qualified-2026/'
};
```

Render concessions:
```js
function renderConcessions(pathway) {
  const c = pathway.regional_concessions;
  if (!c) return '';
  const parts = [];
  if (c.age_limit_extension) parts.push(`Age cap: ${c.age_limit_extension}`);
  if (c.language_score_floor_reduction) parts.push('English floor reduced');
  if (c.salary_concession_percent) parts.push(`Salary concession: ${c.salary_concession_percent}%`);
  return parts.length ? `<p class="gap-concessions">Concessions: ${parts.join(' · ')}</p>` : '';
}
```

---

## Sprint 4 — Programmatic SEO

### S4-1 · pSEO page: Funded Study Routes

**File:** `src/pages/pathways-funded-study.html`

Static HTML page. On load, fetches `/data/pathways.json`, filters `capital_tier === 'tier_1_funded' && type === 'study'`, renders a card list. Structured data: `ItemList` JSON-LD.

Page title: "Funded Study Routes for African Students 2026 | MyPathway2Global"
Meta description: "Evidence-gated study pathways with zero or near-zero upfront cost — scholarships, stipends and funded programmes verified from official sources."

Card per pathway: country name, pathway name, capital tier badge, source authority, link to official source.

Related links section: Italy DSU playbooks, Germany public universities post.

---

### S4-2 · pSEO page: Regional Skilled Gap Routes

**File:** `src/pages/pathways-regional-skilled.html`

Same pattern. Filters `asymmetry_category === 'regional_skilled_gap'`. Currently only AU-dama-regional qualifies — page should note this and invite users to check back as more are added.

Page title: "Regional Skilled Gap Routes for African Professionals 2026 | MyPathway2Global"
Meta description: "Employer-sponsored pathways in regional areas with concessions on age, English and occupation lists — verified from official government sources."

Related links: Australia DAMA playbook.

---

### S4-3 · Sitemap entries for pSEO pages

**File:** `public/sitemap.xml`
```xml
<url><loc>https://mypathway2global.org.uk/pages/pathways-funded-study.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://mypathway2global.org.uk/pages/pathways-regional-skilled.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
```

---

### S4-4 · localStorage cache for pathway data

**File:** `src/pages/find-mypathway.html` — replace `loadJson('/data/pathways.json')` call

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

Replace `loadJson('/data/pathways.json')` in the `Promise.all` call with `loadPathways()`.

---

## Acceptance criteria

- [ ] 19/19 suites, all tests pass after each sprint
- [ ] 4 new blog posts render at their URLs and appear in `/blog/` category filters
- [ ] blog-posts.json has 34 entries
- [ ] Gap card shows `regional_concessions` when present on closest pathway
- [ ] Gap card shows playbook CTA link for GOIF pathways
- [ ] pSEO pages load and render pathway cards from live JSON
- [ ] pSEO pages have `ItemList` JSON-LD
- [ ] Both pSEO pages in sitemap
- [ ] localStorage cache: second page load does not fire a network request for pathways.json
- [ ] `npx wrangler deploy` succeeds

## Execution order

S2-1 → S2-2 → S2-3 → S2-4 → S2-5 (all content first, register together)
S3-1 (gap card GOIF extension — small, do after S2 so playbook links exist)
S4-1 → S4-2 → S4-3 → S4-4 (pSEO + cache last)
