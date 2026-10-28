# Changelog

Dates reflect repository commits; a changelog entry is not release approval.

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
