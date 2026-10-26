# Changelog

Dates reflect repository commits; a changelog entry is not release approval.

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
