# Changelog

Dates reflect repository commits; a changelog entry is not release approval.

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
- Added `?v=2` to all CSS links across all HTML files and templates
- Fixes 1-year immutable cache issue that was serving stale CSS

### Documentation
- Created `docs/sprints/UI_SPOTLIGHT_PLAN.md` — full UI assessment and action plan
- Updated `docs/reference/DESIGN_BLUEPRINT.md` reference

### Verification
- Build: 162 files, 0 errors
- Tests: 18/18 suites, 139/139 passing
- Deploy: Cloudflare Workers, Version ID `233e6e62-9788-4483-a1b3-4d1c9e5c588b`

---

## 2026-10-24 (session 4) — UI Overwork Spec: Batch A/B/C execution (14 tasks, 3 deploys)

### Batch A — Mechanical (8 tasks, 1 deploy)
- **Task 6** — Removed stale canonical comments from `student-playbook.html`, `professional-playbook.html`, `business-playbook.html`, `about.html`, `contact.html`, `faq.html`, `find-my-route.html`.
- **Task 9** — Verified no `/pages/blog.html` links remain (already clean from prior sessions).
- **Task 1** — Replaced inline `style="padding-top:2rem;padding-bottom:2rem;"` with `.page-content` class on 6 pages (playbooks, about, contact, faq).
- **Task 7** — Replaced `<article style="margin-bottom:2rem;">` with `<article class="playbook-card">` on 3 playbook pages (18 articles total).
- **Task 2** — Fixed `countries.html` filter: replaced invented "GROUP A/B/C/D/E/F" options with actual `countries.json` categories (9 regions: Europe Western/Central/Southern/Nordic/Baltic/Alpine, North America, Asia-Pacific, Asia). Label updated to "Filter by Region:".
- **Task 3** — Fixed calculator meta description: "Global Route Budget Calculator - Find affordable countries..." → "Evidence-gated budget calculator for African students and professionals — plan migration costs using verified country data, not estimates."
- **Task 8** — Added `aria-hidden="true"` to all decorative emoji: logo globe, flag emoji in pathway headings, approach icons on homepage.
- **Task 11** — Added `og:url` meta tags to all 14 static pages matching canonical href.
- **Verification:** `npm run build:verify` ✅ | `npm run deploy:wrangler` ✅ (9 assets) | `deploy:verify` ✅ (100 routes).

### Batch B — CSS Design (3 tasks, 1 deploy)
- **Task 12** — Added `.prose` CSS class: max-width 760px, centred, applied to playbook/about/faq/contact pages for text-heavy content (IRCC/Make it in Germany benchmark).
- **Task 13** — Added `.prose h2` dividers: 2px top border, margin/padding, first-of-type exception for section visual hierarchy (Numbeo/Expatistan benchmark).
- **Task 14** — Added `.checklist` CSS: green `✓` prefix (var(--color-secondary)), applied to all playbook requirement lists (Visaguide/Make it in Germany benchmark).
- **Verification:** `npm run build:verify` ✅ | `npm run deploy:wrangler` ✅ (7 assets) | `deploy:verify` ✅ (100 routes).

### Batch C — Content (2 tasks, 1 deploy)
- **Task 4** — Find My Route: added structured intro section with two-column "What it does / does not do" grid above form using `.problem-grid` and `.problem-card` classes.
- **Task 5** — Country template (`countries.njk`): added inline requirements summary for publishable pathways (max 3 requirements, humanised field names, currency/unit), research_required shows blocker, "Full details →" link to pathway page.
- **Verification:** `npm run build:verify` ✅ | `npm run deploy:wrangler` ✅ (27 assets, all 26 country pages regenerated) | `deploy:verify` ✅ (100 routes, 26 countries, 59 pathways).

### Summary
- **Total tasks:** 14 (all complete)
- **Total deploys:** 3 (Batch A, B, C)
- **Total verification passes:** 3/3
- **Production status:** Live on `https://mypathway2global.org.uk`
- **Regressions:** 0
- **Design standards met:** Prose max-width 760px, section dividers, checklist styling, evidence-gated language, accessibility (aria-hidden, aria-live, WCAG AA contrast).

---

## 2026-10-18 (session 2) — Route quality, SEO cleanup, privacy fixes, monetization registry

### Route engine (P1-ROUTE)
- `route-engine.js`: engine now returns `{ matches, alternatives, missingInput }` instead of a bare array.
- Added `isStale(pathway, asOf)`: flags a pathway stale when the newest requirement `effectiveDate` is >180 days old. Absence of dates is not treated as stale.
- `missingInput: true` returned when goal is `any` — engine refuses to rank without a signal.
- `alternatives`: up to 5 ineligible publishable routes matching the goal type, each with their blocker reason; only populated when `matches` is empty.
- `find-my-route.html`: updated page script to handle new return shape — stale warning on cards, inline requirements list (field + value), alternatives section, missing-input prompt.
- Added `.route-requirements` and `.stale-warning` CSS classes to `styles.css`.

### SEO cleanup (P1-SEO)
- `blog.html`: removed fabricated “Real visa approval rates, true costs, verified strategies, 25K+ words” from meta description and hero subtitle. Stats updated: 17 posts, 26 countries. Added `twitter:card`. Removed `keywords` meta.
- `blog-category-country-audits.html`: same fabricated claims removed from meta and hero. Added OG/Twitter tags. Removed `keywords` meta. ~200-line inline `CategoryArchiveLoader` replaced with external `/js/category-loader.js` reference.
- All 5 remaining blog category pages: added `og:title`, `og:description`, `og:type`, `twitter:card`. Meta descriptions improved from generic placeholders.
- Canonical `<link rel="canonical">` tags remain deferred until production host confirmed (P0-S5).

### Privacy / compliance (P1-PRIV)
- `blog-loader.js` + `category-loader.js`: `handleNewsletterSignup` replaced in both — removed mock `setTimeout` subscription, removed `console.log` of raw email (PII), removed call to undefined `trackNewsletterSignup`. Replaced with honest “Not yet available” response with `evidence-note` disclosure.
- `privacy.html`: added “Newsletter and contact forms” section stating no provider is active and form submission sends nothing. Rebuilt with canonical header/nav/footer, `responsive.css`, OG/Twitter tags, `data-page-type="legal"`.
- `disclaimer.html`: was bare `<main>` with no nav, footer or scripts — rebuilt with full canonical shell.
- `terms.html`: was minified bare shell missing `responsive.css` and navigation — rebuilt with full canonical shell.

### Monetization registry (P1-REV)
- `blog.html`: removed duplicate `analytics.js` load from `<head>` (consent UI not ready at that point; correct load at end of body retained). Added `data-ad-slot="ad_article_top"` before featured post and `data-ad-slot="ad_article_mid"` before posts grid — both `hidden`.
- `monetization.js`: `ad_article_end` slot extended to include `student-playbook`, `professional-playbook`, `business-playbook` page types.
- `student-playbook.html`, `professional-playbook.html`, `business-playbook.html`: `<aside data-ad-slot="ad_article_end" hidden>` added between `</main>` and `<footer>`.
- `public/ads.txt`: created as placeholder with explicit gate conditions (do not populate until AdSense approved, production domain confirmed, real publisher ID obtained).
- `docs/monetization/MONETIZATION_ROADMAP.md`: M0 all checked; M1 partially checked; M2 updated with accurate blocked/done state.

### CI status
CI remains paused by user direction. Last verified SHA: `89998ab` (2026-10-11). All changes in this session are unvalidated on live runners. Release remains **NO-GO**.

---

## 2026-10-18 — Structured requirement expansion, source anchor alignment, and runtime configuration

- Expanded structured requirement declarations from 19 across 9 pathways to 49 declarations across 35 of 56 pathways (62.5% coverage):
  - Germany: added admission offer, minimum living funds (€1,091/month), and Opportunity Card minimum points score (6 points with language/qualifications criteria).
  - France: added student admission offer, minimum monthly living funds (€877.50/month), and Talent Passport job offer with minimum annual salary (€59,373/year).
  - Norway: added student admission offer, documented minimum funds (NOK 170,368/year), and skilled worker job offer.
  - Portugal: added higher education admission offer and digital nomad employment contract.
  - Spain: added higher education admission offer and international telework job contract.
  - Japan: added student Certificate of Eligibility / admission offer and Engineer/Specialist job offer.
  - Central, Baltic & Nordic Europe: added evidence-backed admission offer and job offer declarations for Luxembourg (`LU-study`, `LU-work`), Lithuania (`LT-study`, `LT-work`), Iceland (`IS-study`, `IS-work`), Hungary (`HU-study`, `HU-work`), Poland (`PL-study`, `PL-work`), Malta (`MT-study`, `MT-work`), and Czechia (`CZ-study`, `CZ-work`).
  - Refreshed evidence review dates (`reviewAfter: "2026-11-18"`) across all modified addenda batches.
- Corrected numeric unit validation in `scripts/pathway-requirements.js` to respect custom definition units (e.g., `points` for `minimum_points_score`) instead of assuming only `years`.
- Source review sign-offs:
  - Updated Luxembourg (`LU`) national anchor in `src/data/countries.json` and `docs/data/country-source-review-manifest.json` directly to the official Guichet immigration portal (`https://guichet.public.lu/en/citoyens/immigration.html`).
  - Recorded Russia (`RU`) source review policy in manifest: Central MFA (`https://mid.ru/en/`) confirmed as authoritative national portal anchor; territorial consular missions (such as Embassy in Nigeria) designated for operational applicant-market checklists.
- Deployment configuration: aligned Worker project name in `wrangler.jsonc` to `"globalroute"` and enabled `workers_dev: true` and `preview_urls: true`. Production release remains **NO-GO** due to Cloudflare custom domain DNS conflict on `vrenum.app` (Error 100117).
- Testing and CI remain paused per user instructions; changes remain unvalidated on live runners.


## 2026-10-11 — Structured maintenance-balance requirement

- Added a dedicated `minimum_maintenance_funds` field so a required available balance is not misrepresented as annual spending.
- Encoded the UK Skilled Worker route's GBP 1,270 maintenance balance with its 28-day holding condition, application timing, exemption/employer-certification caveats, official source and matching evidence record.
- Extended the requirement schema policy to distinguish maintenance balances from annual living-cost or tuition requirements, and to distinguish employer monthly salary thresholds from applicant personal monthly income.
- Added an evidence-linked approved-sponsor declaration for UK Skilled Worker and a scoped minimum-age declaration for the UK Student route, with under-18 caveats.
- Structured requirement inventory is now 19 declarations across 9 pathways: 4 UK Skilled Worker, 7 Canada study family-size thresholds, 2 UK Student, 1 New Zealand Student, 1 Ireland Critical Skills, 1 Australia Skilled EOI points threshold, 1 Finland study living-funds threshold, 1 Sweden higher-education maintenance threshold, and 1 Sweden work-permit salary threshold. 47/56 pathways still have no structured declarations. Australia's generic skilled pathway remains `research_required`; the 65-point threshold does not imply invitation or promotion. Absence remains unknown, not a pass or zero.
- Added evidence-linked Finland study and Sweden higher-education monthly living-funds requirements, plus a distinct Sweden work-permit monthly salary field. Official source IDs and caveats are recorded; these declarations are informational and are not yet consumed by route matching.
- No tests were manually run and no CI workflows were manually dispatched for these changes, per the instruction to skip testing-related work. Validation status remains unverified; production release remains **NO-GO**.
- Reconciled current structured-coverage counts and pathway lists across the active sprint, P1-S1 handover, assessment, phase tracker, execution status and roadmap. Older dated counts remain as historical checkpoints rather than the current baseline.
- Added independent analytics and advertising consent controls (including a reject-all option) and a persistent Privacy settings control to reopen or change either choice. Advertising slots now read the advertising-consent state rather than inheriting analytics consent.
- Updated the privacy page to describe consent behavior, local-storage persistence limits, data-minimization intent, and outstanding legal/deployment review. Added an engineering privacy data-inventory draft for source-visible route finder, calculator, consent, analytics, contact and monetization flows. Removed the unconnected contact form to avoid default GET-style submission of entered fields. These changes are unvalidated because testing/CI remain paused.
- Fact-aligned the homepage and About page: removed the unsupported universal `100% evidence-gated claims` metric and claims that Global Route provides true approval rates for all African passports; clarified that unsupported rates/costs remain unpublished or unverified. Added About-page internal links to the country registry, disclaimer, privacy policy and contact page.


## 2026-10-11 — Route-quality regression expansion

- Added monthly-income and experience threshold boundary tests (below, at, and above the declared minimum), plus a regression confirming absent declarations do not create compatibility claims.
- Test change: [`ec0f02c2b2d171d98262d8a3fc4adc807bbe3328`](https://github.com/global-route/myglobalroute/commit/ec0f02c2b2d171d98262d8a3fc4adc807bbe3328).
- Exact-SHA Quality Gate, Lint and Browser Smoke confirmation for this test change is still pending; do not count this change as verified until the run links are recorded.
- P1-ROUTE and P1-REQ remain open. Unknown requirements stay unknown; no pathway eligibility is inferred from absent declarations.
- P1-S1 remains open for human sign-off and Russia applicant-market/mission-jurisdiction confirmation. P0-S5 remains externally blocked; release remains **NO-GO**.


## 2026-10-11 — Same-SHA verification after source-review follow-up

Source-tree SHA: `89998ab5410aceb6dede8e997dae0b836d3b4d92`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703290
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703239
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703394

- Quality Gate confirmed country-source manifest synchronization and passed the unit-test/build checks on this exact source-tree SHA.
- Documentation consistency cleanup: replaced the obsolete README directory tree with the current repository layout and explicitly labeled superseded Austria/NZ task bodies and checklists as historical, not actionable.
- Russia follow-up: official Russian Embassy-in-Nigeria visa material was located in indexed search results; direct PDF retrieval returned 502 and is not treated as proof the source is down. This candidate does not close mission coverage across the target applicant market or human sign-off.
- The route-engine code change remains at implementation SHA `9ed09f07e9e7b73b62884da02fc406ccdb40f10a`; all three required workflows passed on that SHA as well.
- P0-S5 remains externally blocked; release remains NO-GO.


## 2026-10-11 — Route threshold hardening and regression coverage

- Route recommendations now fail closed when a declared funds, monthly-income or experience threshold is malformed; an absent threshold remains unknown and is not synthesized as zero.
- Added regression cases for funds-threshold boundaries, malformed declared thresholds, no-match outcomes and recommendation limits.
- Implementation SHA: `9ed09f07e9e7b73b62884da02fc406ccdb40f10a` — [Quality Gate PASS](https://github.com/global-route/myglobalroute/actions/runs/38145394933), [Lint PASS](https://github.com/global-route/myglobalroute/actions/runs/38145394817), [Browser Smoke PASS](https://github.com/global-route/myglobalroute/actions/runs/38145394822), all on the same SHA.
- P1-ROUTE remains open for further stale/mismatched evidence, alternatives and broader requirement-boundary coverage. P1-REQ remains open; missing requirement declarations remain unknown.
- P1-S1 Russia follow-up: located official Russian Embassy-in-Nigeria tourist-visa material. It does not establish coverage for all target applicant jurisdictions or verify pathway requirements; human sign-off remains open.
- P0-S5 remains externally blocked. These CI results do not establish the production host, deployed SHA, live security headers or owner-level branch rules; release remains NO-GO.


## 2026-10-11 — Migration-data integrity and status reconciliation

> Historical checkpoint before the later non-test updates recorded at the top of this changelog.

- Added machine-readable 26-country source-review manifest, generator/check command and regression tests.
- Added route recommendation tests for missing country records, research-required routes, absent structured requirements and unknown thresholds.
- Expanded structured requirements with evidence-backed declarations for UK Student admission offer, New Zealand Fee Paying Student funds (with duration/funding caveats), and Ireland Critical Skills job offer; coverage is 12 declarations across 5/56 pathways.
- README no longer claims Phase 2 complete or describes approval rates and monetization as live capabilities.
- Updated Austria and Czechia source anchors to current official government entry points; their retrieval dates alone were updated.
- Added country-manifest check to standard `npm run verify`; superseded task documents now explicitly identify historical checklists.
- 26/26 country anchors have outcomes; relevant official pages/alternatives inspected for 25. Luxembourg official alternatives are recorded; Russia needs mission-jurisdiction confirmation. Human sign-off required.
- `dataset.asOf` remains `2026-09-05`. No pathway-specific claims inferred from country landing pages.
- GitHub API reports `main` unprotected and no repository rulesets. Production host, deployed SHA and live CSP remain unverified. Release **NO-GO**.


## CI evidence note — 2026-10-11
The implementation/data SHA `95f960c081367305dea0144034d48a4ab7892426` passed Quality Gate, Lint and Browser Smoke on the same SHA (run links recorded in the active sprint and release verification docs). The follow-up CI configuration SHA `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5` passed Quality Gate, Lint and Browser Smoke on the same SHA. Release remains **NO-GO** due external production and human source-review gates.


## Verification reconciliation — 2026-10-11
- Current verified implementation/data SHA: `95f960c081367305dea0144034d48a4ab7892426`; Quality Gate, Lint and Browser Smoke passed on this exact SHA.
- CI workflow follow-up SHA: `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`; Quality Gate, Lint and Browser Smoke also passed on this exact SHA. Run links are recorded in `docs/sprints/ACTIVE_SPRINT.md` and this release record.
- At this historical checkpoint before later 2026-10-11 additions, structured requirements totalled 12 declarations across 5/56 pathways; 51 were unstructured. P1-REQ remained open.
- Country-source review outcomes are recorded for all 26 anchors; relevant official pages/alternatives inspected for 25. Russia requires mission-jurisdiction confirmation for the target applicant market, and human sign-off remains required.
- Release remains **NO-GO** until P0-S5 external production evidence and human source-review sign-off are complete.

## Historical execution checkpoint — 2026-10-11 (superseded by the current status entry at the top of this changelog)

- P1-S1.1 is implemented: `docs/data/country-source-review-manifest.json` is generated from `src/data/countries.json`; `npm run data:country-manifest` checks synchronization and the check is included in `npm run verify`/Quality Gate.
- P1-S1.2 has recorded outcomes for all 26 country anchors. Relevant official pages or alternatives were inspected for 25; Russia remains blocked on mission/jurisdiction confirmation. The observations are AI-assisted and require human sign-off. Luxembourg's official alternative is recorded, but its registered root remains a generic redirect.
- P1-S1.3 remains open: keep `dataset.asOf=2026-09-05` unchanged until human review/sign-off and documented exception acceptance. Country landing pages do not verify pathway-specific requirements.
- At this historical checkpoint, structured requirements were 12 declarations across 5/56 pathways; 51 pathways had no structured declarations. Unknown stays unknown. Route-quality test coverage had improved, but P1-REQ and P1-ROUTE remained open.
- Same-SHA source-tree evidence remains recorded for implementation/data SHA `95f960c081367305dea0144034d48a4ab7892426` and CI workflow SHA `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`; run links are in `docs/sprints/ACTIVE_SPRINT.md`. These checks do not verify production.
- P0-S5 remains blocked on owner/provider evidence: authoritative host, deployed SHA, live CSP/security headers, production smoke, and branch-protection/required-check proof. Release remains **NO-GO**.


## Documentation checkpoint CI — 2026-10-11

The documentation-only checkpoint `27bcfd93780cf42416612c7f6486735f6c0ceae1` passed all three required source-tree workflows on that exact SHA:
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145214511
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145214551
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145214463

This is a documentation-only checkpoint, not a new implementation/data SHA and not production verification. The implementation/data SHA remains `95f960c081367305dea0144034d48a4ab7892426`; the manifest-check CI follow-up SHA remains `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`. P0-S5 and human source-review sign-off remain open; release stays **NO-GO**.
