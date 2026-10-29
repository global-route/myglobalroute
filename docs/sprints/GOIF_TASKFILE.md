# GOIF Implementation Taskfile
**Global Opportunity Integration Framework**
**Source doc:** `global_opportunity_integration_framework_platform_roadmap.md`
**Baseline:** 61 pathways · 27 countries · 19/19 suites · 168/168 tests · Cloudflare Workers

---

## How this fits the existing codebase

| Framework concept | Maps to |
|---|---|
| `asymmetry_category` | New optional field on pathway objects in `src/data/pathways.json` |
| `capital_tier` | New optional field on pathway objects in `src/data/pathways.json` |
| `regional_concessions` | New optional object on pathway objects (display-only, not eligibility-gated) |
| `proof_of_funds.amount_usd` | Informational companion to existing `minimum_funds` requirement |
| Filter toggle "High Asymmetry" | New `<select>` or button group in `src/pages/find-mypathway.html` inline script |
| Tier 1 Funded badge | New badge variant alongside existing `freshness-badge` in `renderCard()` |
| Near-Miss gap engine | Extension of existing gap-card logic in `find-mypathway.html` |
| pSEO landing pages | New static HTML pages in `src/pages/` served by Cloudflare Workers |
| New playbooks | New markdown files in `content/blog/playbooks/` |
| Validator | Extension of `scripts/validate-data.js` — new allowed fields |

---

## Sprint 1 — Schema & Engine (Weeks 1–2)

### S1-1 · Extend pathway schema — add optional GOIF fields

**File:** `src/data/pathways.json`

Add three optional top-level fields to any pathway object that passes the 4-Filter System. Existing pathways without these fields remain valid.

```json
"asymmetry_category": "regional_skilled_gap",
"capital_tier": "tier_2_moderate",
"regional_concessions": {
  "age_limit_extension": 55,
  "language_score_floor_reduction": true,
  "salary_concession_percent": 10
}
```

Allowed `asymmetry_category` values: `tech_engineering` · `academic_research` · `regional_skilled_gap` · `remote_freelance`
Allowed `capital_tier` values: `tier_1_funded` · `tier_2_moderate` · `tier_3_standard`

**Seed the 4 researched pathways** from the roadmap doc as new pathway objects (status `"publishable"`, type `"work"` or `"study"`, with full `requirements[]` and `evidenceIds[]` following existing schema). Country codes must use existing 2-letter IDs (`AU`, `IT`, `JP`, `PT`).

> ⚠️ `country_code` in the roadmap uses 3-letter ISO — map to existing 2-letter IDs used in `pathways.json`.

---

### S1-2 · Update validator to allow new fields

**File:** `scripts/validate-data.js`

Add `asymmetry_category`, `capital_tier`, `regional_concessions` to the list of allowed pathway-level fields so the validator does not reject them. Add enum checks for the two string fields.

---

### S1-3 · Add "High Asymmetry" filter to Find MyPathway

**File:** `src/pages/find-mypathway.html`

Add a `<select name="asymmetry">` (or button group) to the existing filter form with options:
- `""` → All routes (default)
- `"tier_1_funded"` → Funded / Stipend-backed
- `"tier_2_moderate"` → Moderate capital
- `"regional_skilled_gap"` → Regional skilled gap
- `"tech_engineering"` → Tech & engineering

In the inline `<script>`, extend the profile object to read `asymmetry` from the form. In `RouteEngine.findMatches()` (or the post-filter step in the page script), filter out pathways that don't match when a non-empty asymmetry value is selected. Pathways without `asymmetry_category` or `capital_tier` are excluded when a filter is active.

---

### S1-4 · Render Tier 1 Funded badge in pathway cards

**File:** `src/pages/find-mypathway.html` — `renderCard()` function

After the existing `freshness-badge`, conditionally render a second badge:

```js
const fundedBadge = pathway.capital_tier === 'tier_1_funded'
  ? '<span class="funded-badge">✦ Funded</span>'
  : '';
```

Add `.funded-badge` styles to `src/css/enhancements.css` (green pill, consistent with existing badge styles).

---

### S1-5 · Update tests

**File:** `tests/route-engine.test.js`

Add test cases:
- Pathway with `capital_tier: "tier_1_funded"` is returned when asymmetry filter is `"tier_1_funded"`.
- Pathway without `asymmetry_category` is excluded when filter is active.
- Pathway without GOIF fields still passes existing eligibility scoring.

**File:** `tests/data-contract.test.js`

Add assertions that `asymmetry_category` and `capital_tier`, when present, are within their allowed enum sets.

---

## Sprint 2 — Content & Playbooks (Weeks 3–4)

### S2-1 · Australia DAMA Deep-Dive Guide

**File:** `content/blog/playbooks/professional/australia-dama-regional-stream-2026.md`

Frontmatter: `category: "Professional Playbooks"`, `goal: "work"`, `country: "Australia"`.
Cover: DAMA structure, occupation list access, age/English concessions, employer sponsorship process, 491→191 PR vector, proof-of-funds AUD 5,300.
Primary source: `https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/site-agreements/designated-area-migration-agreements`

---

### S2-2 · Italy DSU Need-Blind Scholarship Playbook

**File:** `content/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026.md`

Frontmatter: `category: "Student Playbooks"`, `goal: "study"`, `country: "Italy"`.
Cover: ISEE calculation for foreign applicants, DSU regional operators, zero-tuition + accommodation + meal voucher + €5,400–7,000 stipend, application timeline, study permit process.
Primary source: `https://www.dsu.toscana.it/`

> Note: A DSU playbook already exists (`italy-dsu-scholarship-complete-guide`). This new post should be scoped specifically to the need-blind / ISEE angle and cross-link to the existing guide to avoid duplication.

---

### S2-3 · Asian & Nordic Tech Accelerators Summary

**File:** `content/blog/guides/study/asian-nordic-tech-accelerators-africa-2026.md`

Frontmatter: `category: "Guides"`, `goal: ""`.
Cover: Tokyo Forge / Tokyo Metropolitan startup visa, Nordic accelerator programs (Sweden, Finland, Norway), zero-equity models, grant funding, startup visa endorsement paths.
Primary source: `https://www.metro.tokyo.lg.jp/english/`

---

### S2-4 · Portugal D3 Highly Qualified Visa Playbook

**File:** `content/blog/playbooks/professional/portugal-d3-highly-qualified-2026.md`

Frontmatter: `category: "Professional Playbooks"`, `goal: "work"`, `country: "Portugal"`.
Cover: qualifying occupations, salary threshold, AIMA application process, 5-year PR/citizenship vector, Beckham Law interaction.
Primary source: `https://aima.gov.pt/pt`

---

### S2-5 · Update blog-posts.json & sitemap

**File:** `src/data/blog-posts.json` — add entries for all 4 new posts.
**File:** `public/sitemap.xml` — add 4 new `<url>` entries.

---

## Sprint 3 — UI Trust & Near-Miss Gap Engine (Weeks 5–6)

### S3-1 · Near-Miss gap card for high-capital users

**File:** `src/pages/find-mypathway.html` — gap card section

When a user's budget falls below a pathway's `minimum_funds` requirement but the pathway has `capital_tier: "tier_1_funded"` or `"tier_2_moderate"`, surface a "Near-Miss" card showing:
- How far short they are in USD
- The `regional_concessions` if present (e.g. "Age cap extended to 55")
- A CTA to the relevant playbook

This extends the existing gap-card HTML block already present in the no-results branch.

---

### S3-2 · Capital tier filter label in results header

**File:** `src/pages/find-mypathway.html`

When `asymmetry` filter is active, prepend a contextual note to the results `<h2>`:
> "Showing funded & low-capital routes only — not eligibility assessments."

---

### S3-3 · Funded badge CSS

**File:** `src/css/enhancements.css`

```css
.funded-badge {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  background: #dcfce7;
  color: #15803d;
  margin-left: 0.4rem;
}
```

---

## Sprint 4 — Programmatic SEO (Weeks 7–8)

### S4-1 · pSEO landing page: Funded Study Routes

**File:** `src/pages/pathways-funded-study.html`

Static page at `/pages/pathways-funded-study.html` (or configure Cloudflare Worker route to `/pathways/asymmetry/funded-study/`).
Lists all pathways where `capital_tier === "tier_1_funded"` and `type === "study"`.
Structured data: `ItemList` schema.
Links to Italy DSU and Germany public university blog posts.

---

### S4-2 · pSEO landing page: Regional Skilled Gap Routes

**File:** `src/pages/pathways-regional-skilled.html`

Static page listing all pathways where `asymmetry_category === "regional_skilled_gap"`.
Structured data: `ItemList` schema.
Links to Australia DAMA playbook.

---

### S4-3 · Add pSEO pages to sitemap & Cloudflare routes

**File:** `public/sitemap.xml` — add 2 new `<url>` entries.
**File:** `wrangler.jsonc` — confirm static asset routing covers new pages (no change needed if serving from `dist/`).

---

### S4-4 · localStorage caching for pathway data

**File:** `src/pages/find-mypathway.html` — `fetch('/data/pathways.json')` call

Wrap the fetch with a 24-hour `localStorage` cache keyed on `goif_pathways_v1`:

```js
const CACHE_KEY = 'goif_pathways_v1';
const CACHE_TTL = 86400000; // 24h
const cached = localStorage.getItem(CACHE_KEY);
if (cached) {
  const { ts, data } = JSON.parse(cached);
  if (Date.now() - ts < CACHE_TTL) return data;
}
// ...fetch, then:
localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
```

---

## Acceptance criteria (all sprints)

- [ ] `npm test` passes 19/19 suites with no regressions
- [ ] `npm run build` succeeds
- [ ] New pathways pass `scripts/validate-data.js` and `scripts/pathway-requirements.js`
- [ ] `asymmetry_category` and `capital_tier` enums validated in `data-contract.test.js`
- [ ] Funded badge renders on Tier 1 pathway cards in Find MyPathway
- [ ] Near-Miss gap card surfaces for under-budget users on Tier 1/2 routes
- [ ] 4 new blog posts appear in `/blog/` with correct category filter
- [ ] 2 pSEO pages indexed in sitemap
- [ ] No new CSP violations (inline scripts already covered by `'unsafe-inline'`)
- [ ] `npx wrangler deploy` succeeds

---

## Files touched summary

| File | Sprint | Change |
|---|---|---|
| `src/data/pathways.json` | S1-1 | Add 4 new pathways + GOIF fields |
| `scripts/validate-data.js` | S1-2 | Allow new fields, add enum checks |
| `src/pages/find-mypathway.html` | S1-3, S1-4, S3-1, S3-2, S4-4 | Filter UI, badge render, gap card, cache |
| `src/css/enhancements.css` | S3-3 | `.funded-badge` styles |
| `tests/route-engine.test.js` | S1-5 | GOIF filter test cases |
| `tests/data-contract.test.js` | S1-5 | Enum assertions |
| `content/blog/playbooks/professional/australia-dama-regional-stream-2026.md` | S2-1 | New post |
| `content/blog/playbooks/student/italy-dsu-need-blind-scholarship-2026.md` | S2-2 | New post |
| `content/blog/guides/study/asian-nordic-tech-accelerators-africa-2026.md` | S2-3 | New post |
| `content/blog/playbooks/professional/portugal-d3-highly-qualified-2026.md` | S2-4 | New post |
| `src/data/blog-posts.json` | S2-5 | 4 new entries |
| `public/sitemap.xml` | S2-5, S4-3 | 6 new URLs |
| `src/pages/pathways-funded-study.html` | S4-1 | New pSEO page |
| `src/pages/pathways-regional-skilled.html` | S4-2 | New pSEO page |
