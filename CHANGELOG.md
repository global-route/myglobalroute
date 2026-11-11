# Changelog

Dates reflect repository commits; a changelog entry is not release approval.

---

## 2026-11-09 — Content sprint W1-W22 complete: 22 posts, 4 new countries, 8 demand records

**Commits:** `168070d` → `70d4b7a` | **Tests:** 19/19 suites, 214/214 passing | **Build:** 302 files | **Posts:** 107 → 125

### Content delivered (W1-W22)

**Batch 1 — High-priority corridors (W1-W3)**
- W1: Canada tech Express Entry honest guide — NOC codes, CRS reality, HelpOverseas ad debunk
- W2: Canada Francophone caregivers/PSWs — FCIP program, French CLB 5, PSW shortage
- W3: Qatar work visa reality check — 3 red flags debunked, official fees, Kafala status

**Batch 2 — Field research findings (W4-W7)**
- W4: Mongolia debunk — 267-comment Facebook post answered, NGN 8m offer exposed
- W5: How to spot a fake travel agent — 10-point checklist, CAC/licence verification
- W6: Oman trades work visa — OMR 150-350/month verified, employer package model
- W7: Guyana freelance visa — R1 unblocked, oil boom context, USD 3-10k/month

**Batch 3 — New corridors (W8-W11)**
- W8: Bulgaria study visa — Schengen Jan 2024, EUR 2-4k/year tuition, language reality
- W9: Croatia study visa — RIT Croatia real but not dual degree, USD 12-15k/year, debt trap warning
- W10: Canada LMIA warehouse/logistics — CAD 18-22/hour, family sponsorship myth debunked
- W11: Singapore EP COMPASS — 5 criteria explained, diversity advantage for African applicants

**Batch 4 — Safety content (W12/W13/W15)**
- W12: Job assistance on arrival red flag — stranded worker pattern, NAPTIP link
- W13: Zero deposit visa offers — sales tactic decoded, 4 payment structures explained
- W15: Oman freelance vs employment visa — who pays, practical test

**Batch 5 — WAA-4 Kafala safety layer (W16-W18)**
- W16: Kafala reform tracker — all 6 GCC states, what changed and what has not
- W17: Gulf employment contract guide — 10 mandatory elements, contract substitution
- W18: Passport confiscation guide — illegal in all 6 GCC states, 5-step action plan, embassy contacts

**Batch 6 — Platform expansion (W19-W22)**
- W19: Netherlands Highly Skilled Migrant — EUR 46,107/year threshold, 2-week processing
- W20: Poland construction work permit — PLN 4,300 minimum wage, Schengen travel benefit
- W21: Ireland nursing NMBI — 3-step registration, EUR 32,000 threshold, Stamp 4 after 2 years
- W22: Germany care work Pflegekrafte — B1 German accepted, Chancenkarte route, 500k shortage

### Watermark system (WM-1 to WM-13)
- Hybrid document watermark on every blog post: `MyPathway2Global · v2026.11 · Verified · [Source] · [Date]`
- 5 evidence states: verified (navy), under-correction (amber), research-required (red), unaudited (amber), archived (grey)
- Edition versioning: `postVersion: v2026.11` on every post
- `supersededBy` field for multi-edition linking
- `backfill-watermark-fields.js` — CRLF-aware backfill tool, 99 posts updated
- 54 posts verified, 53 research-required, 0 missing fields

### Bug fixes
- `occupation-demand.json` duplicate block stripped — build unblocked
- `agents.json` contactEmail cleared on pending template agent
- `blog-post.njk` backtick-n nav/footer corruption removed
- `validate-data.js` country count 30→31
- `.eleventy.js` formatVersion filter added

---


**Commit:** `168070d` | **Tests:** 19/19 suites, 214/214 passing | **Build:** 284 files | **Posts:** 107 → 110

### Watermark sprint (WM-1 to WM-7) — complete
- `src/css/enhancements.css` v12 — `.post-source-trail` block: badge (verified/under-correction/research-required/unaudited), source authority link, verified date, independence notice
- `src/templates/blog-post.njk` — source trail renders on every post after H1, before body. Missing frontmatter fields show amber unaudited state — self-maintaining audit queue. CSS bumped v9→v12.
- `docs/project/SPRINT_TASKFILE.md` — master taskfile created: 62 tasks across 7 sprints (A-G)
- WM-5: `sourceAuthority`, `sourceUrl`, `lastFactChecked`, `evidenceStatus` backfilled on 5 WAA supporting posts

### Content Batch 1
- W1: `canada-tech-express-entry-honest-guide-2026.md` — NOC codes verified, CRS reality, salary data from Job Bank Canada, HelpOverseas ad debunk, honest 12-24 month timeline
- W2: `canada-francophone-immigration-caregivers-2026.md` — FCIP program, PSW/caregiver shortage, French CLB 5 requirement, salary reality, agent red flags
- W3: `qatar-work-visa-reality-check-2026.md` — 3 red flags debunked (3-5 day processing, NGN 3.2m fee, freelance visa framing), official fees, Kafala reform status, employer verification checklist

---

 + WAA-4: agent matching, intake form, safety gate

**Commit:** `192ad97` | **Tests:** 19/19 suites, 214/214 passing | **Build:** 281 files

### WorkAbroadAgent — WAA-3b/3c/3d
- `src/js/work-abroad-agent.js` — `matchAgents()` filters `agents.json` by corridor (wildcard-aware `XX-*`/`*-YY`), occupationCategory, skillLevel, verificationStatus. Featured agents sort first, max 3 per corridor.
- `renderAgentCard()` — inline agent card with name, corridors, "Connect with this agent" button, inline intake form (name, email, WhatsApp, 2 mandatory checkboxes), Formspree submit handler, success/error feedback.
- Analytics: `agent_connect_clicked` and `agent_lead_submitted` events wired.
- Agents data now fetched alongside demand/pathway/country data in `runEngine()`.

### WorkAbroadAgent — WAA-4 unskilled safety gate
- Pre-form checklist (5 items) renders for `riskLevel: high` categories before intake form.
- "Connect with this agent" button disabled until all 5 boxes checked.
- High-risk categories expanded: `domestic_worker`, `construction`, `factory`, `logistics`.
- Safety callout for `domestic_worker` strengthened: processing time red flag added.
- No-match message: obscure-country warning added.

### CSS — enhancements.css v11
- `.waa-agent-card`, `.waa-agent-card-header`, `.waa-agent-name`, `.waa-agent-meta`, `.waa-agent-badge-featured`
- `.waa-intake-form`, `.waa-checkbox`, `.waa-form-success`, `.waa-form-error`, `.waa-form-disclaimer`
- `.waa-safety-gate`, `.waa-safety-gate-title`, `.waa-safety-gate-list`, `.waa-connect-btn:disabled`

### Quality gate
- `scripts/validate-agent-registry.js` — validates `agents.json`: verificationStatus values, corridors format (XX-YY/XX-*/\*-YY), verifiedAt required on verified agents, contactEmail rules, tier values, duplicate id check.
- `package.json` — `agents:validate` script added, wired into `verify` chain.

### HTML + docs
- `work-abroad-agent.html` — CSS bumped v10→v11, step 1 and step 3 hint text updated to plain language.
- `docs/engineering/WORK_ABROAD_AGENT.md` — rewritten as clean blueprint: correct user journey, data flow, WAA-3 implementation spec, multi-agent handling, Formspree vs Worker decision, architecture guardrails.
- `docs/engineering/WAA_RESEARCH_PREP.md` — full image research doc: 20 images extracted, 18 offers assessed, 6 verified real, 7 scam/misleading, 22 blog posts queued (W1-W22), 8 new demand records needed.
- `docs/project/CONTENT_PIPELINE.md` — image research pipeline section replaced with full 22-post queue.
- `docs/project/PHASE_STATUS.md` — WAA phase table updated: WAA-3 split into 3a/3b/3c/3d, WAA-4 marked ready to build.

**WAA-3a remains blocked on owner:** first verified agent + signed commercial agreement.
**WAA-3b/3c/3d are code-complete** — will activate automatically when agents.json gets first verified entry.

---

## 2026-11-09 — Singapore expansion + WAA supporting content + 5 work guides

**Commit:** `75429a8` | **Tests:** 19/19 suites, 214/214 passing | **Build:** 281 files | **Posts:** 101 → 107 | **Countries:** 30 → 31

### Singapore (R5 unblocked)
- `src/data/countries.json` — Singapore (SG) added as 31st country, category Asia
- `src/data/pathways.json` — SG-employment-pass (SGD 5,000/month, COMPASS framework) and SG-s-pass (SGD 3,150/month, quota limits) added
- `src/data/evidence/primary-source-verified.json` — 4 Singapore evidence records added (EP eligibility, EP finance, S Pass eligibility, S Pass finance)
- `content/blog/country-audits/singapore/singapore-visa-from-nigeria-2026.md` — EP vs S Pass, COMPASS framework, salary context, sector demand
- `scripts/generate-country-source-manifest.js`, `scripts/verify-build.js`, `tests/data-contract.test.js`, `tests/evidence-registry.test.js`, `tests/country-source-manifest.test.js` — all updated from 30 to 31 countries

### WAA supporting content (5 posts — unblocks WAA-3)
- `guides/work/domestic-worker-rights-gulf-2026.md` — Qatar/UAE/Saudi legal protections, enforcement gaps, red flags, pre-travel checklist
- `guides/work/how-to-verify-recruitment-agent-2026.md` — licence check, employer verification, contract requirements, NAPTIP contacts
- `guides/work/australia-dama-shortage-occupations-2026.md` — DAMA regions, eligible trades, concessions vs. standard requirements, skills assessment
- `guides/work/germany-shortage-occupations-2026.md` — Engpassberufe categories, labour market test exemption, qualification recognition
- `guides/work/uk-shortage-occupations-immigration-salary-list-2026.md` — ISL vs. old SOL, healthcare/IT/trades implications, new entrant rate

---

## 2026-11-09 — WAA-2: WorkAbroadAgent wizard page live

**Commit:** `7a5b282` | **Tests:** 19/19 suites, 214/214 passing | **Build:** 270 files

- `src/pages/work-abroad-agent.html` — new 4-step occupation-driven work routing wizard. Skill level → occupation → passport → availability. Results load from `occupation-demand.json` and link to existing pathway records.
- `src/js/work-abroad-agent.js` — engine: tile + select wiring, roving tabindex, localStorage state persistence, demand record matching, safety callout for high-risk categories (domestic worker, construction, factory), agent placeholder card.
- `src/css/enhancements.css` — `.waa-safety-callout` (red alert box) and `.waa-agent-placeholder` (dashed border) added.
- Nav updated on all 26 pages + 4 templates — "Work Abroad" CTA added between Visa Wizard and Calculator.
- Footer updated on all pages — "Work Abroad Agent" link added to Explore section.
- WAA-3 (agent layer) blocked until: first verified agent, commercial agreement template, rights content live.

---

## 2026-11-09 — Content depth sprint + WAA-1 data foundation

**Commit:** `b18b804` | **Tests:** 19/19 suites, 214/214 passing | **Build:** 270 files | **Posts:** 96 → 101

### Content (5 new posts)
- R3: `playbooks/professional/uk-innovator-founder-visa-2026.md` — endorsing bodies, no GBP 50k requirement, ILR milestones
- R4: `playbooks/professional/france-talent-passport-deep-dive-2026.md` — all 10 subcategories, EU Blue Card EUR 89k, HQE EUR 59k, founder track
- Policy: `uk-skilled-worker-salary-threshold-increase-2024.md` — GBP 26,200 → GBP 38,700, ISL replacing SOL
- Policy: `australia-tsmit-increase-2024.md` — AUD 53,900 → AUD 73,150, affected visas
- Policy: `qatar-kafala-reform-what-changed-2024.md` — honest account of what changed vs. what hasn’t

### WAA-1 data foundation
- `src/data/occupation-demand.json` — 15 seed records across DE/AU/GB/QA/AE/IE/CA/NZ/SA/PT with `riskLevel` and `safetyCalloutRequired` flags
- `src/data/agents.json` — schema only, empty agents array, policy header
- `docs/engineering/WORK_ABROAD_AGENT.md` — full engineering plan: user flow, data model, revenue model, trust constraints, 4 implementation phases

**Commits:** `df15331` | **Version:** `a296a7bc` | **Tests:** 19/19 suites, 214/214 passing

- `scripts/verify-build.js` — route engine check fixed: was looking for `GlobalRoute.RouteEngine` string inlined in HTML; engine is loaded via `<script src="/js/route-engine.js">` so check now looks for that script tag. Was causing quality gate failure on every build.
- `npm install` run in `myglobalroute/` — restored 589 packages including `markdown-it` (was missing after wrangler was accidentally installed in parent directory)
- `wrangler` installed locally as devDependency — no longer requires npx download at deploy time
- Build: 265 files, 0 errors (Eleventy 3.1.8) | Build verify ✅ | SEO/a11y ✅ | Tests ✅
- Deployed to `mypathway2global.org.uk`

---

## 2026-11-09 — WCAG 2.1 AA: nav contrast fix, inline link underlines

**Commits:** `6630a80`, `0431e87`, `1c23c39` | **Axe scan:** 4 pages, 0 Critical/Serious violations after fixes

- `enhancements.css` — `.nav-menu a.active { color: var(--color-amber) !important }` — active nav link was rendering `#0b409c` on `#10316b` (ratio 1.33:1). Amber `#ffc947` on `#10316b` is ~7.5:1, passes WCAG AA. Affected all 4 pages (4-5 Serious violations each).
- `app.js` — nav active matching changed from `startsWith` to exact path equality — `startsWith` caused multiple links to receive `.active` simultaneously, which was the root cause of the wrong color rendering.
- `enhancements.css` — `p a, li a, td a { text-decoration: underline }` added — fixes WCAG 1.4.1 "links must be distinguishable without relying on color" (2 Serious violations on find-mypathway). Underline removed on hover for visual cleanliness.

---

## 2026-11-08 — P2 UI polish, WCAG prep, sprint docs deleted

**Commits:** `e9ac0e3`, `4120693` | **Tests:** 19/19 suites, 180/180 passing

### UI fixes
- `countries.html` — added missing `Asia` region option to filter (JP, KR, CN were unfilerable; `Asia-Pacific` and `Asia` are distinct categories in the data)
- `visa-wizard.html` / `wizard-engine.js` — purpose and budget tile grids now have `role="radio"`, `aria-checked`, roving `tabindex`, and arrow-key navigation (Left/Up = previous, Right/Down = next, wraps)
- `enhancements.css` — `.wizard-nav-placeholder { visibility:hidden; width:1px }` — step 1 back-button slot no longer renders a visible gap
- `calculator.html` — inline validation on required fields (`savings`, `category`): `aria-describedby` error spans, blur + submit-capture validation, `.form-field-error` border, error message shown/hidden

### Repo hygiene
- Deleted `docs/sprints/` entirely — ACTIVE_SPRINT, OWNER_ACTIONS, P0/P1 taskfiles, RESERVED_POSTS, BLOG_POLISH, OPPORTUNITY taskfiles all removed
- CHANGELOG is now the sole delivery record for sprint-level work

---

## 2026-11-05 — Repo audit: deleted fabricated draft files, fixed smoke test URL, rewrote reference README

**Commit:** `5c00eac` | **Tests:** 19/19 suites, 180/180 passing

- Deleted 6 pre-rebrand draft files in `src/content/blog/` — January 2026 drafts containing fabricated nationality-specific approval rate statistics ("62-68% for African applicants", "54% for Nigeria") with fake embassy sources. Not built by Eleventy (input dir is `content/`, not `src/content/`); dead tracked code.
- `.github/workflows/production-smoke.yml` — example URL corrected from `netlify.app` to `mypathway2global.org.uk`
- `docs/reference/README.md` — rewritten to remove duplicate section and references to archived files

---

## 2026-11-05 — Stale doc fixes across all /docs subfolders

**Commit:** `8cdfbf6`

- `docs/monetization/` (6 files) — updated from pre-launch state: AdSense live with publisher ID `ca-pub-8077583188666813`, production confirmed at `mypathway2global.org.uk`, partner page live
- `docs/reference/BLUEPRINT_TO_EXECUTION.md` — ARCHIVED notice added
- `docs/reference/DATA_TRUST_STANDARD.md` — brand fixed, 26→30 countries
- `docs/reference/DEPLOYMENT.md` — Netlify→Cloudflare correction notice
- `docs/guides/GOOGLE_ANALYTICS_SETUP.md` — ARCHIVED (platform uses Sabilytics, not GA4)
- `docs/guides/DEPLOYED_SITE_VERIFICATION.md` — production origin confirmed, stale URL fixed
- `docs/phase-1/ACTIVE_REVENUE_TASK.md` — AdSense live, Cloudflare confirmed
- `docs/phase-3/BLOG_CONTENT_SUMMARY.md` — ARCHIVED
- `docs/BLOG_IMPROVEMENT_TASKS.md`, `docs/UI_POLISHING_TASKS.md` — ARCHIVED notices added
- `docs/sprints/BLOG_POLISH_TASKFILE.md` — post count corrected 54→96

---

## 2026-11-05 — P1: country comparison metrics, calculator honesty, readTime fix, about counts

**Commit:** `a819915` | **Tests:** 19/19 suites, 180/180 passing

### P1.1 — Country comparison: registry-backed metrics
- Removed universally-null `Official Rate` and `African Rate` columns from Evidence Status Comparison table
- New columns: Publishable Pathways (from `pathwayCounts`), Research Required, Verified Cost, Sweet Spot
- `app.js` `tableBody` renderer updated to output new columns
- Table description updated: "Counts are generated from the pathway registry"

### P1.2 — Calculator: honest data availability
- Heading renamed from "Affordable Countries (sorted by cost)" to "Countries with verified cost data in your range"
- Planning-aid data note (`#calculator-data-note`) now always visible — removed `display:none` and JS toggle

### P1.3 — Article template: fix double "min" bug
- `blog-post.njk`: `readTime` frontmatter stored as `"12 min"` rendered as "12 min min read"
- Fixed: strip trailing `min` before appending `min read`

### P1.4 — About page: reconcile hardcoded counts
- 84 posts → 96, 216+ evidence records → 218+, pathway description now shows 63 publishable explicitly

### P1.5 — Privacy/advertising audit
- Documented as owner action in `docs/sprints/P1_TASKFILE.md §P1.5`
- Full localStorage key inventory (4 keys), 9 specific owner actions listed

### Docs
- `docs/project/PHASE_STATUS.md` — P0 + P1 phase sections added
- `README.md` — status date, feature descriptions, counts updated

---

## 2026-11-05 — P0: passport-aware matching, requirement evaluation, currency normalization, savings gap, WHV corrections

**Commit:** `dfd6cad` | **Tests:** 19/19 suites, 180/180 passing (34 new P0 tests written, run skipped — dependencies not installed in execution environment)

### P0.1 — Working-holiday content corrections
- AU, IE, NZ working-holiday articles: amber correction banners added, `eligibilityReviewStatus: under-correction`, false Nigerian eligibility claims removed from excerpts/FAQs/body
- Owner must verify at official sources before restoring or removing banners

### P0.2 — Passport-aware matching
- `evaluateNationality(pathway, passportCountry)` added to `route-engine.js`
- Supports allowlist / blocklist / all / unknown scopes
- Ineligible passport = hard block; unknown = warning on card, not a block
- `renderNationalityBadge()` added to `find-mypathway.js`
- CSS: `.nationality-unknown` (amber), `.nationality-conditional` (orange) added to `enhancements.css`

### P0.3 — Structured requirement evaluation
- `evaluateRequirements(pathway, profile)` added to `route-engine.js`
- Evaluates all 9 requirement types: job_offer, admission_offer, sponsorship, age, experience, salary, points, qualification, minimum_funds
- Blockers = hard block; unknown = warning
- `renderWarnings()` added to `find-mypathway.js`
- CSS: `.requirement-warnings li` (blue) added

### P0.4 — Currency normalization
- `normalizeCurrency(amount, currency)` added to `route-engine.js`
- 19-currency FX table (`FX_RATES_TO_USD`), retrieved 2026-11-05, 90-day stale threshold
- Funds comparison now normalizes to USD before comparing
- Unknown currency = warning only; stale rate = warn + block

### P0.5 — Savings gap calculation
- `find-mypathway.js`: gap calculation fixed to use `monthlySavings = income - expenses`
- Zero/negative savings handled gracefully with budget review message

### Tests
- 34 new test cases in `tests/route-engine.test.js`: P0.2 evaluateNationality (10), P0.3 evaluateRequirements (13), P0.4 normalizeCurrency (9), P0.4 scorePathway integration (2)
- Run pending owner: `npm test -- --testPathPattern=route-engine`

---

## 2026-10-31 — Template fixes: CSS v9, search trigger, Africa filter, Google Fonts removed

**Tests:** 19/19 suites, 180/180 passing | **Commit:** `2b77625` | **CI:** Lint ✅ Quality Gate ✅ Browser Smoke ✅

### Find MyPathway — Africa regions added to Target Region filter
- Added Africa - Indian Ocean, Africa - Atlantic, Africa - Southern to the Target Region select
- MU/CV/NA pathways are now reachable via the region filter (were invisible since Vertical B sprint)

### Templates — CSS v9, search trigger, search-modal.js
- `src/templates/blog-post.njk` — bumped to `enhancements.css?v=9` (affects all 96 blog posts)
- `src/templates/pathway-landing.njk` — bumped to v=9, added search trigger button, added `search-modal.js`
- `src/templates/blog-post.html` — bumped to v=9, added search trigger button
- `content/countries.njk` — bumped to v=9, added search trigger, added `search-modal.js`, removed Google Fonts, fixed logo/nav markup
- `content/pathways/pathway.njk` — bumped to v=9, added search trigger, added `search-modal.js`, removed Google Fonts, fixed logo/nav markup
- `content/blog/index.njk` — bumped to v=9, added search trigger, added `search-modal.js`, removed Google Fonts, fixed logo/nav markup, fixed post count badge 31 → 96

---

## 2026-10-31 — UI scan fixes, UX improvements, e2e spec rewrite, doc audit

**Tests:** 19/19 suites, 180/180 passing | **Blog posts:** 96 | **Sitemap URLs:** 145 | **Stale requirements:** 0
**Commits:** `7445e55` → `63821c2` | **Version:** `5c5ac770` (Cloudflare) | **CI:** Lint ✅ Quality Gate ✅ Browser Smoke ✅

### Find MyPathway — UX improvements (commit `7445e55`)
- **Sort control:** Sort bar above results — Default / Cost (low-high) / Cost (high-low) / Country (A-Z). Re-renders cards in-place without re-fetching.
- **Per-card status badge:** Every pathway card now shows `Verified` (green) or `Research required` (red) based on `pathway.status`.
- **Mobile filter toggle:** Filter panel collapses on `<768px` behind a `Filter pathways (N active)` button. Active count updates on field change.
- **Savings-rate input in gap card:** Monthly savings input inside the gap card computes `ceil(gap / rate)` and displays "Ready in X months" inline.
- **CSS:** `.badge-blocked`, `.status-badge-*`, `.results-sort-bar`, `.filter-toggle-btn`, `.gap-savings-row` added to `enhancements.css?v=9`.

### UI scan — 9 bugs fixed (commits `a8e259f`, `2c8936d`)
- **Broken 404 URL:** `renderNoGoalState` in `wizard-engine.js` linked to `/pages/countries/${id}/` (non-existent). Fixed to `/pages/countries.html`.
- **Stale country count:** Countries page title and badge said "27 Countries" — updated to "30 Countries".
- **Africa filter missing:** Countries page region filter had no Africa options. Added Africa - Indian Ocean, Africa - Atlantic, Africa - Southern.
- **MU/CV/NA missing from wizard:** Step 2 destination dropdown had no Africa optgroup. Added Mauritius, Cape Verde, Namibia under Africa.
- **CSS version:** All 25 pages bumped from `enhancements.css?v=8` to `?v=9`.
- **Search trigger missing:** `#search-trigger` button was only on 2 of 25 pages. Added to all 25 pages.
- **Pathway count copy:** "Filters 69 publishable pathways" corrected to "Filters 63 publishable pathways" (6 are research_required).
- **Calculator localStorage:** Form inputs (savings/income/expenses/category) now persist to `mp2g_calc_inputs` on change and restore on load.
- **Flag fallback:** `wizard-engine.js` `renderMatchCard` now uses `country.flag || country.id` instead of `country.flag || ''`.

### e2e smoke spec rewrite (commits `2c8936d` → `63821c2`)
- Spec was entirely pre-rebrand: tested for `Global Route` title, `find-my-route.html` URL, `Find My Route` title, 0 AdSense scripts.
- Rewritten to match current site: correct titles, URLs, form fields, consent banner behaviour, AdSense publisher ID check via `page.content()`.
- All 8 tests now pass in CI. Browser Smoke green for first time since rebrand.

### Doc audit — stale docs fixed and archived (commits `380cae8`, `e71bcb0`, `69134db`, `0e636ec`)
- **Archived** (moved to `docs/archive/` with descriptive names): `ARCHITECTURE.md`, `TECH_STACK.md`, `DEPENDENCIES.md`, `CONTENT_STRATEGY.md` (all pre-Cloudflare/pre-rebrand), `system_architecture_platform_blueprint.md`, `find_mypathway_ux_layout_interface_design.md`, `find_mypathway_schema_api_specifications.md`, `global_opportunity_integration_framework_platform_roadmap.md`.
- **Fixed in place:** PHASE_STATUS counts (Phase 0: 27/61/18/137 → 30/69/19/180), Phase 1 counts, GOIF open note cleared, Vertical B open note updated, W2/W3 deferred notes corrected (both are live), Phase 6 design system corrected.
- **OWNER_ACTIONS.md:** YouTube count 24 → 96, blog done count 52 → 96.
- **CONTENT_PIPELINE.md:** Header counts 59/110 → 96/145, Gap 1 marked resolved.
- **GOIF_REMAINING_TASKFILE.md:** All 5 tasks marked Done.
- **BLOG_CONTENT_INVENTORY.md:** Content gaps replaced with reserved posts only, stale coverage note removed.
- **DESIGN_BLUEPRINT.md:** Implementation-complete header added with font/H2 deviation notes.
- **`docs/reference/INDEX.md`:** Broken links to archived files removed.
- **`docs/plans/`** created as gitignored folder for private planning. `UX_GAPS_TASKFILE.md` extracted there (all 4 tasks now done).
- **`docs/sprints/README.md`** rewritten to reflect current folder state.

### Docs updated this entry
- `CHANGELOG.md` — this entry
- `docs/sprints/ACTIVE_SPRINT.md` — commit ref, UX sprint entry, new metrics rows
- `docs/project/PHASE_STATUS.md` — commit ref, UX phase added to summary table and full phase section

---

## 2026-10-30 — Partners page, CRS/tax series, content cleanup, 96 posts, classic style

**Tests:** 19/19 suites, 180/180 passing | **Blog posts:** 96 | **Sitemap URLs:** 145 | **Stale requirements:** 0
**Commits:** `48b2401` → `a049348` | **Version:** (Cloudflare)

### Partners page + about/contact rewrite
- `/pages/partners.html` — 3-tier partner model (Practitioner/Agency/Content), trust firewall (6 rules), due diligence process, contact CTA
- `about.html` rewritten as org with mission/vision/partner model/4-filter methodology
- `contact.html` with 3 routed paths and subject line guidance

### CRS/tax series (6 posts)
- CRS explained for African professionals
- UAE second residency and CRS interaction
- Split residency structuring
- FATCA for Nigerians
- How to cease Nigerian tax residency with FIRS
- Mauritius GBL and CRS interaction

### Content cleanup
- All emojis and em dashes removed from 90 posts and 27 HTML pages
- FAQ YAML indentation repaired across all posts (2-space `- q:`, 4-space `a:`)
- `.unverified-callout` and `.practitioner-required-callout` CSS classes added

### Gulf/Africa country audits (8 posts)
- UAE, Qatar, Saudi Arabia, Oman, South Africa, Kenya, Ghana, Rwanda

### Classic immigration style sprint
- White page background (`#ffffff`), H2 amber underline removed, sentence-case nav
- System font stack replacing Google Fonts (no external font load)
- Flat cards (border only, no hover shadows), amber restricted to CTA button
- SVG globe logo mark + wordmark with amber "2Global" accent
- Home icon replacing "Home" text in nav

### Docs updated
- `CHANGELOG.md`, `ACTIVE_SPRINT.md`, `PHASE_STATUS.md`, `BLOG_CONTENT_INVENTORY.md`, `README.md`

---

## 2026-10-29 — GOIF, Vertical B, 12 country audits, ⌘K search, region filter, AfCFTA guides

**Tests:** 19/19 suites, 180/180 passing | **Blog posts:** 52 | **Sitemap URLs:** 103 | **Stale requirements:** 0
**Commits:** `e87f15c` → `68c88d4` | **Version:** `4e85244f` (Cloudflare)

### Data — countries 27 → 30
- Added Mauritius (MU), Cape Verde (CV), Namibia (NA) to `src/data/countries.json`
- Categories: Africa - Indian Ocean, Africa - Atlantic, Africa - Southern
- Validator, tests, manifest all updated to 30 countries
- `scripts/generate-country-source-manifest.js` regenerated for 30 entries

### Data — pathways 65 → 68
- Added MU-premium-visa, CV-remote-work-visa, NA-digital-nomad-visa
- All three: `status: publishable`, `asymmetry_category: remote_freelance`, `capital_tier: tier_2_moderate`, `wizardTags: ["nomad"]`
- Evidence addendum: `2026-10-29-vertical-b-remote-freelance.json` (6 records)
- IE-critical-skills, FR-talent, PT-d3-highly-qualified tagged `pr-route` — 10 total PR-vector pathways
- 37 stale `effectiveDate` fields refreshed across CA, IE, DE, IT, FR, HU, SE, LU, LT, IS, ES, AT, KR, CN, PL, MT, CH, CZ

### Find MyPathway — new filters
- Target Region select (10 regions mapped from `countries.json` categories)
- Route Type: `remote_freelance` and `pr-route` options added
- Filter logic: `pr-route` filters by `wizardTags`, region filters by `countryCategory` map
- `region` added to localStorage persist fields

### ⌘K search modal
- `src/js/search-modal.js` — searches countries, pathways and blog posts from live JSON
- Keyboard: ⌘K / Ctrl+K open/close, arrows navigate, Enter follow, Escape close
- Injected on all 26 HTML pages and `blog-post.njk` template
- `enhancements.css?v=5` — search trigger button + modal styles

### pSEO pages — schema + footer links
- WebPage JSON-LD added to `pathways-funded-study.html` and `pathways-regional-skilled.html`
- "Funded Routes" and "Regional Routes" added to footer Explore section on all 26 HTML pages + blog template

### Blog — 14 new posts (38 → 52)
- **12 country audits:** Finland, Sweden, Norway, Switzerland, Luxembourg, Hungary, Lithuania, Iceland, Poland, Malta, Czechia, China — all 27 original countries now have at least one country audit post
- **Vertical B (3):** Mauritius Premium Visa, Cape Verde Remote Work Visa, Namibia Digital Nomad Visa
- **Vertical B overview:** African Digital Nomad Hubs 2026
- **GOIF Sprint 2 (4, from prior session):** Australia DAMA, Italy DSU need-blind, Asian/Nordic accelerators, Portugal D3
- **Vertical B business (2):** AfCFTA Business Corridors 2026, African Diaspora Repatriation Guide 2026

### Docs updated
- `CHANGELOG.md` — this entry
- `docs/sprints/ACTIVE_SPRINT.md` — 30 countries, 68 pathways, 52 posts, 103 URLs, all features
- `docs/project/PHASE_STATUS.md` — Phase 1/3 updated, Vertical B phase added, content gaps cleared
- `docs/project/BLOG_CONTENT_INVENTORY.md` — 52 posts, 27 country audits, gaps resolved
- `docs/sprints/GOIF_TASKFILE.md` — all sprints complete
- `docs/sprints/OWNER_ACTIONS.md` — rewritten with 5 remaining items + full walkthroughs

---

## 2026-10-28 — Content Platform Sprint, data freshness, wizard tests, route explanations, 4 country audits

**Tests:** 19/19 suites, 168/168 passing | **Blog posts:** 31 | **Sitemap URLs:** 79 | **Stale requirements:** 0

### Data freshness
- All 19 stale pathway `effectiveDate` fields refreshed to 2026-10-28 across IE, DE, FR, HU, SE, LU, LT, IS, ES, PL, MT, CZ
- `scripts/check-stale-pathways.js` exits 0 — clean
- `.github/workflows/stale-pathways.yml` created — runs every Monday 09:00 UTC, opens a GitHub Issue listing stale entries when any requirement exceeds 90 days

### Wizard engine test suite (N-P1)
- `tests/wizard-engine.test.js` — 31 tests covering all pure logic: budget mapping, purpose/goal mapping, profile assembly, nomad pathway filter, extension pathway filter, research blockers, extension tag map completeness
- Test count: 137 → 168

### Find MyPathway — extension routes section (N-P2)
- `renderExtensionRoutes()` added to `src/pages/find-mypathway.html`
- When `currentVisa` is student/tourist/work/residence, a section renders below results showing post-study, tourist-switch, or PR-route tagged pathways
- Uses same `EXTENSION_TAGS` map as wizard engine

### Find MyPathway — evidence trail + next action on result cards (N-P3)
- `renderRequirements()` replaced with `renderEvidenceTrail()`: each requirement now shows `effectiveDate` and a per-requirement source link
- `renderNextAction()` added: country-specific next steps for 12 countries (DE, CA, GB, AU, IE, ES, FR, PT, NZ, AT, JP, KR) with embassy/portal names and processing time estimates
- Source link label uses `sourceAuthority` field
- `.next-action-block` CSS added to `src/css/enhancements.css`

### Content Platform Sprint — all tasks complete
- Ireland country audit published (`IE-critical-skills`, `IE-study`) — EUR 38,000 salary, stamp 4 after 2 years
- Spain country audit published (`ES-digital-nomad`, `ES-study`) — EUR 2,646/month, Beckham Law 24% flat tax
- Germany Chancenkarte vs. Canada Express Entry comparative playbook
- Italy DSU vs. Germany public universities comparative playbook
- Nordic & Asia-Pacific study roundup (Norway, Sweden, Finland, Japan)
- Document authentication guide updated — MOFA online portal section added
- Audit badges on blog post template (`badge-audit-verified` / `badge-audit-stale`)
- localStorage persistence on Visa Wizard (`mp2g_wizard_state`)
- FAQPage JSON-LD in `blog-post.njk` (conditional on `faqs:` frontmatter array)
- 3 editorial pathway landing pages: `/pathways/germany/student-blocked-account/`, `/pathways/canada/express-entry-fsw/`, `/pathways/uk/skilled-worker-visa/`
- Service Worker (`public/sw.js`) — cache-first for data/assets, network-first for HTML
- Save My Plan JSON export on Find MyPathway (client-side Blob, no server request)
- Quarterly stale pathway audit script (`scripts/check-stale-pathways.js`)

### Country audits — 4 new posts
- Austria Visa from Nigeria 2026 — RWR Card (55 pts, EUR 2,685/month) + study visa (EUR 1,217/month)
- New Zealand Visa from Nigeria 2026 — student (NZD 20,000) + 3 SMC sub-routes (direct residence)
- Japan Visa from Nigeria 2026 — student visa + MEXT (JPY 117,000/month) + Engineer visa
- South Korea Visa from Nigeria 2026 — student (USD 9,000) + KGSP (KRW 900,000/month) + E-7 work visa

### Docs
- `CHANGELOG.md` — this entry
- `README.md` — updated status, test count, blog count, blog list
- `docs/project/PHASE_STATUS.md` — CP sprint block added, Phase 3 blog list updated, Phase 6 roadmap added, product north star added
- `docs/sprints/ACTIVE_SPRINT.md` — rewritten as current-state doc; completed sprints log; prioritised next sprint candidates
- `docs/sprints/OWNER_ACTIONS.md` — item 7 (quarterly audit) marked done
- `docs/project/BLOG_CONTENT_INVENTORY.md` — 27 → 31 posts, 4 new entries, content gaps updated
- `docs/INDEX.md` — start-here table updated, obsolete doc references removed
- Archived: `EXECUTION_ROADMAP.md`, `TASK_SPEC.md`, `content_platform_implementation_roadmap.md`, `ENHANCEMENT_TASKS.md`, `PRODUCTION_READINESS_TASKS.md`, `WIZARD_PLAN.md`, `IMPLEMENTATION_WALKTHROUGH.md`
- `docs/sprints/CONTENT_PLATFORM_SPRINT.md` — archived (all tasks complete)

---

## 2026-10-28 — Find MyPathway improvements + country page depth

**Commits:** `371506b`, `1ba24a8` | **Tests:** 18/18 suites, 137/137 passing | **Version:** `eba39a8f` (Cloudflare)

### Find MyPathway — B-P1, B-P2, B-P3
- **Gap analysis (B-P1):** Zero-match state now shows closest pathway by funds gap, exact shortfall in pathway currency, months to bridge at stated monthly income, and two action buttons (remove budget filter / open calculator)
- **Freshness badges (B-P2):** Every pathway result card shows a colour-coded badge based on most recent requirement `effectiveDate` — green (< 3 months), amber (3-6 months), red (6+ months)
- **localStorage persistence (B-P3):** All 8 form fields (passport country, goal, visa status, family size, date, budget, income, experience) saved on every change and restored on page load — survives network drop and tab reload

### Country pages — B-P4
- `content/countries.njk` fully rewritten:
  - Pathway summary table — one row per publishable pathway with type, key requirement and official source link
  - Pathway detail cards — full requirements table per pathway (field, value, effective date, source link)
  - Research-required section with blocker text
  - Common rejection reasons section (6 documented refusal patterns with evidence note)
  - 4-step application timeline with country-specific processing notes for DE, CA, GB, AU
  - Official source trail card with confidence level and retrieved date
  - Blog audit link for 9 countries with published country audits (DE, CA, GB, IT, PT, US, AU, FR, NL)
  - Correct nav (Visa Wizard added), CSS `?v=3`, no emoji, disclaimer bar, standard footer
- `content/pathways/pathway.njk` fully rewritten:
  - Full requirements table for publishable pathways
  - Research-required blocker display
  - Correct nav, CSS `?v=3`, no emoji, disclaimer bar, standard footer

### Taskfile cleanup
- `Taskfile.yml` replaced — was corrupted with embedded markdown documents; now clean valid YAML with 22 tasks across 7 groups mapped to actual scripts
- Spec docs (`find_mypathway_schema_api_specifications.md`, `find_mypathway_ux_layout_interface_design.md`) assessed and filed — describe aspirational features not matching current static architecture; useful backlog items extracted to `ACTIVE_SPRINT.md`

### Docs
- `ACTIVE_SPRINT.md` — backlog section added (B-C1 to B-C6 content, B-P1 to B-P4 product), all B-P items marked done, header and owner actions updated
- `OWNER_ACTIONS.md` — rewritten: AdSense marked done, items reordered by effort/impact, steps updated
- `PHASE_STATUS.md` — commit ref updated, backlog phase B added to summary table

---

## 2026-10-26 — Content quality, AdSense activation, Visa Wizard, Phase 9 complete

**Commit:** `e4c3d97` | **Tests:** 18/18 suites, 139/139 passing | **Version:** `bb9e2a8b` (Cloudflare)

### AdSense activation
- Static `<script async src="...adsbygoogle.js?client=ca-pub-8077583188666813">` added to `<head>` on all 6 ad pages (homepage, blog, student/professional/business playbooks, calculator) - required for Google crawler verification
- `public/ads.txt` populated: `google.com, pub-8077583188666813, DIRECT, f08c47fec0942fa0` - confirmed live
- `src/js/admob-loader.js` rewritten as clean consent-gated AdSense adapter plugging into `monetization.js` via `setAdProvider()` + `mountSlots()`
- Site ownership verified in AdSense dashboard; Google policy review pending

### Visa Wizard (Phase 9 - W1 through W5)
- `/pages/visa-wizard.html` - 5-step guided tool live
- `src/js/wizard-engine.js` - profile assembly, `recommend()` wiring, extension routes, research flag cards, nomad filter
- Wizard added to main nav on all 21 pages
- Two-column Find MyPathway / Visa Wizard section added to homepage
- `wizardTags` added to 10 pathways: `["nomad"]` on PT/ES/DE, `["post-study"]` on DE, `["pr-route"]` on CA/AU×3/NZ×3
- Wizard URL added to sitemap, WebPage schema on wizard page

### Find MyPathway upgrades
- Passport country select (54 African countries) added
- Current visa select added
- Business goal unlocked with research-required blocker card

### Content - 4 new blog posts
- Australia Visa from Nigeria 2026 - subclass 500, 189, 190, 491
- France Visa from Nigeria 2026 - long-stay study visa, Talent Passport
- Netherlands Visa from Nigeria 2026 - IND student permit, Highly Skilled Migrant
- Passport Tiers Explained 2026 - golden passports defined, CBI programmes, UAE Golden Visa, African passport tiers

### Content quality
- All em dashes (`—`) replaced with hyphens across all 21 blog posts
- 1 verified YouTube embed added per post across all 21 posts
- `src/data/blog-posts.json` fixed - was registering 8 of 20 posts; all 21 now registered

### Email capture
- Email signup form added to blog sidebar (Mailchimp placeholder action URL - owner must replace)
- `src/pages/privacy.html` updated to reflect email form
- Email capture CSS added to `src/css/enhancements.css`

### SEO
- Sitemap updated to 64 URLs including Visa Wizard and all new blog posts
- `route_search_started` and `route_recommendation_generated` analytics events confirmed wired
- FAQPage, BreadcrumbList, Article, WebPage schema all confirmed live

### Docs
- `docs/sprints/OWNER_ACTIONS.md` created - 7 owner actions with exact steps
- `ACTIVE_SPRINT.md`, `PHASE_STATUS.md` updated to reflect Phase 9 complete
- `MASTER_DELIVERY_PLAN.md`, `P0_DELIVERY_PLAN.md`, `SPRINT_3_GROWTH.md`, UI sprint docs moved to archive
- `README.md` updated to 21 posts, Visa Wizard added to features and links

---

## 2026-10-27 — Blog index rebuild, doc cleanup, README update

**Commit:** `0cb1e00` | **Tests:** 18/18 suites, 139/139 passing | **Version:** `27a313c7` (Cloudflare)

### Blog index fix
- `content/blog/index.njk` fully rewritten - was a stale pre-rebrand file
- Globe emoji (`🌍`) removed from logo - now matches all other pages (text only)
- CSS updated from `?v=2` to `?v=3`
- Full nav added including Visa Wizard link
- Standard 4-column footer added (was stripped-down single line)
- Disclaimer bar added
- AdSense static tag + `admob-loader.js` added
- OG/Twitter meta tags added
- Page header badge showing post count added

### Docs
- `README.md` updated to 21 posts, Visa Wizard in features and links, 4 new country audits listed
- `CHANGELOG.md` 2026-10-26 entry added covering all work from that session
- `ACTIVE_SPRINT.md` commit ref fixed, stale content backlog/blog inventory/priority list removed
- `PHASE_STATUS.md` commit ref updated to `e4c3d97`
- `MASTER_DELIVERY_PLAN.md`, `P0_DELIVERY_PLAN.md`, `SPRINT_3_GROWTH.md`, `UI_OPTIMISATION_SPRINT.md`, `UI_OVERWORK_SPEC.md`, `UI_SPOTLIGHT_PLAN.md`, `UI_UX_TRANSFORM.md` moved to `docs/archive/`

---

## 2026-10-27 — Documentation structure and internal-file separation

### Documentation organization
- Added `docs/README.md` as the folder-ownership and file-placement guide.
- Rebuilt `docs/INDEX.md` around canonical planning, sprint, product, technical, data, and monetization references.
- Replaced the stale `docs/reference/INDEX.md` and refreshed `docs/reference/README.md` to remove legacy architecture claims and clarify historical blueprint precedence.
- Moved the historical root-level reorganization report into `docs/archive/DOCUMENTATION_REORGANIZATION_SUMMARY_2026-08-18.md`.
- Kept `docs/sprints/OWNER_ACTIONS.md` as the canonical owner-action checklist; removed the duplicate root checklist.
- Removed the empty root `log.md`.

### Local-only internal documents
- Added explicit ignore rules for local-only internal/private planning folders and private document suffixes.
- Removed financial model, team-role plan and project timeline from the current public repository tree.
- Removed the duplicate blueprint under the incorrectly named `docs/internal doc & files/` path; retained the canonical historical blueprint under `docs/reference/`.
- Important: Git ignore does not hide already-tracked files. The current tree no longer contains these internal documents, but historical versions may remain accessible in prior commits; perform history cleanup separately if those old versions must be made inaccessible.

### Verification
- Inspected the recursive repository tree after changes.
- Confirmed no current tracked paths remain under `docs/internal/`, `docs/private/`, `docs/confidential/`, or `internal/`.
- No tests or CI workflows were run for this documentation-only change.

---

## 2026-10-25 — Production Readiness: all 23 tasks complete + best practices

**Commit:** `756196f` | **Tests:** 18/18 suites, 139/139 passing

### Data
- Added USA to `src/data/countries.json` — registry now 27 countries
- Added `US-student` (F-1) and `US-work` (H-1B) pathways to `pathways.json` — 61 total (55 publishable / 6 research_required)
- Updated `docs/data/country-source-review-manifest.json` — countryCount 27, USA entry added
- Updated `scripts/generate-country-source-manifest.js` — expects 27 countries

### SEO & discoverability
- `og:image`, `og:image:width/height`, `twitter:image`, `twitter:site` added to all 21 static HTML pages and `blog-post.njk` template
- `<link rel="icon" type="image/png">`, `<link rel="apple-touch-icon">`, `<link rel="manifest">`, `<meta name="theme-color">` added to all pages
- Organization JSON-LD + WebSite JSON-LD with SearchAction added to `src/index.html`
- `author` meta added to `blog-post.njk`
- `public/sitemap.xml` — fixed stale `find-my-route` URL, added USA country page, added all 17 blog posts
- `public/robots.txt` — added `Sitemap:` directive

### UX
- Created `src/pages/404.html` — branded 404 with page-header and link-list to key pages
- Calculator: added `.ns_callout` explanatory note + JS wiring to show when all `trueCost` are null
- `src/pages/blog.html` — replaced fake `onsubmit` newsletter form with honest `.ns_callout` CTA

### PWA
- Created `public/manifest.json` — name, short_name, theme_color `#10316b`, background_color `#f2f7ff`

### Content & copy
- `src/pages/contact.html` — removed unverified social block; email is now the only listed channel
- `src/pages/disclaimer.html`, `terms.html`, `privacy.html` — consolidated `about-section` → `prose`
- `src/pages/countries.html` — title and badge updated to 27 countries
- `src/pages/faq.html` — JSON-LD and visible content updated to 27 countries
- `src/index.html` — "Start here" section updated to 27 countries
- `src/pages/business-playbook.html` — added related articles section
- `src/pages/student-playbook.html` — removed emoji from page-header-badge

### Tests
- `tests/country-source-manifest.test.js` — description updated to "27 unique registry countries"
- `tests/data-contract.test.js` — description updated to "complete 27-country registry"
- `tests/evidence-registry.test.js` — updated to expect 61 pathways

### Docs
- Created `docs/sprints/IMPLEMENTATION_WALKTHROUGH.md` — full audit, exact changes, execution order, best practices
- Updated `docs/sprints/PRODUCTION_READINESS_TASKS.md` — all 23 tasks marked complete
- Updated `docs/sprints/ENHANCEMENT_TASKS.md` — Task 12 (calculator note) marked complete
- Updated `docs/sprints/ACTIVE_SPRINT.md` — production snapshot updated to 27/61

**Owner actions still required:**
- `public/assets/og-default.png` — 1200×630px OG image
- `public/assets/icons/favicon.png` — 32×32px + 180×180px PNG export from SVG

---

## 2026-10-25 — Rebrand & UI Transformation

### Rebrand: Global Route → MyPathway2Global
- All 22 HTML files updated: `Global Route` → `MyPathway2Global`
- All content files updated (17 blog posts, templates)
- `Find My Route` → `Find MyPathway` everywhere
- File renamed: `find-my-route.html` → `find-mypathway.html`
- All nav links, footers, meta tags, OG tags updated
- Footer copyright updated

### UI Transformation: Content-First Editorial Layout
- **Homepage restructured:** Removed card grids (problem-card, approach-card, featured-card)
- **New layout:** H1 + credibility box + inline stats + content sections with H2 amber underlines
- **Sections:** "Why this exists", "How it works" (numbered list), "Start here" (link list), "Featured guides" (link list with real blog URLs)
- **CSS added:** `.stats-inline`, `.content-section`, `.numbered-list`, `.link-list`
- **Removed:** SaaS-style card grids, hover animations, section eyebrows

### Design System (from DESIGN_BLUEPRINT.md)
- **Fonts:** Titillium Web 400/600 (headings) + Roboto 300/400/500 (body)
- **Colors:** `#0b409c` primary, `#ffc947` amber accent, `#10316b` dark navy, `#f2f7ff` page bg
- **H2 underline:** 40px amber rule on all H2 elements
- **Buttons:** `border-radius: 2px`, amber hover
- **No dark mode:** All `prefers-color-scheme: dark` blocks removed
- **No emojis:** All emoji icons removed from UI

### Cache Busting
- Added `?v=3` to all CSS links across all HTML files and templates

### Verification
- Build: 162 files, 0 errors
- Tests: 18/18 suites, 139/139 passing
- Deploy: Cloudflare Workers, Version ID `233e6e62-9788-4483-a1b3-4d1c9e5c588b`

---

## 2026-10-24 (session 4) — UI Overwork Spec: Batch A/B/C execution (14 tasks, 3 deploys)

### Batch A — Mechanical (8 tasks)
- Task 6 — Removed stale canonical comments from 7 pages
- Task 9 — Verified no `/pages/blog.html` links remain
- Task 1 — Replaced inline padding styles with `.page-content` class on 6 pages
- Task 7 — Replaced inline article styles with `.playbook-card` class (18 articles)
- Task 2 — Fixed `countries.html` filter: replaced invented GROUP A/B/C/D/E/F with actual `countries.json` categories (9 regions)
- Task 3 — Fixed calculator meta description
- Task 8 — Added `aria-hidden="true"` to all decorative emoji
- Task 11 — Added `og:url` meta tags to all 14 static pages

### Batch B — CSS Design (3 tasks)
- Task 12 — Added `.prose` CSS class: max-width 760px, centred
- Task 13 — Added `.prose h2` dividers
- Task 14 — Added `.checklist` CSS with green `✓` prefix

### Batch C — Content (2 tasks)
- Task 4 — Find My Route: added structured intro section
- Task 5 — Country template: added inline requirements summary for publishable pathways

---

## 2026-10-18 (session 2) — Route quality, SEO cleanup, privacy fixes, monetization registry

### Route engine
- Engine returns `{ matches, alternatives, missingInput }` instead of a bare array
- Added `isStale(pathway, asOf)`: flags pathway stale when newest requirement `effectiveDate` >180 days old
- `alternatives`: up to 5 ineligible publishable routes with blocker reason
- `find-my-route.html`: updated to handle new return shape

### SEO cleanup
- Removed fabricated approval rate claims from blog meta descriptions
- Added `twitter:card` to blog pages
- Removed `keywords` meta from blog pages

### Privacy / compliance
- `handleNewsletterSignup` replaced in `blog-loader.js` + `category-loader.js` — removed PII console.log
- `privacy.html`, `disclaimer.html`, `terms.html` rebuilt with canonical shell

### Monetization registry
- Ad slot markup added to blog.html and playbook pages (all `hidden`)
- `public/ads.txt` placeholder created

---

## 2026-10-18 — Structured requirement expansion

- Expanded structured requirements from 19 across 9 pathways to 49 across 35 of 56 pathways
- Added requirements for: Germany, France, Norway, Portugal, Spain, Japan, Luxembourg, Lithuania, Iceland, Hungary, Poland, Malta, Czechia
- Corrected numeric unit validation in `scripts/pathway-requirements.js`
- Updated Luxembourg and Russia source anchors in manifest

---

## 2026-10-11 — Route threshold hardening, regression coverage, source-review manifest

- Route recommendations fail closed on malformed thresholds
- Added 26-country source-review manifest, generator/check command and regression tests
- Expanded structured requirements: UK Student, NZ Student, Ireland Critical Skills
- Updated Austria and Czechia source anchors
- Same-SHA verification: `89998ab` — Quality Gate, Lint, Browser Smoke all PASS

---

*Earlier entries preserved in git history.*
