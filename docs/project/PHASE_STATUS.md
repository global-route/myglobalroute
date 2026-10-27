# Phase Status — MyPathway2Global

> **Updated:** 2026-10-28 | **Release:** GO — production live
> **Production:** `https://mypathway2global.org.uk` | **Tests:** 18/18 suites, 137/137 passing
> **Commit:** `1ba24a8`

---

## Phase summary

| Phase | Status | Open gates |
|---|---|---|
| 0 — Production integrity | **Complete** | Live-browser ARIA audit (owner) |
| 1 — Migration intelligence | **Code complete** | Human source sign-off (27 countries), `dataset.asOf` update |
| 2 — Canonical product core | **Complete** | — |
| 3 — Content & acquisition | **Complete** | Editorial freshness ongoing |
| 4 — Trust/compliance/accessibility | **Code complete** | Legal review, live ARIA audit, consent validation |
| 5 — Growth/monetization | **Complete** | Google policy review pending (1-14 days) |
| 6 — UI/UX transformation | **Complete** | — |
| 7 — Rebrand | **Complete** | — |
| 8 — Production readiness | **Complete** | Two image assets (owner action) |
| 9 — Scale & Wizard | **Complete** | W2-5 wizard test suite (deferred); W3-3 FMP extension routes (deferred) |
| B — Backlog improvements | **Complete** | B-P1 gap analysis, B-P2 freshness badges, B-P3 localStorage, B-P4 country depth |

---

## Phase 8 — Production Readiness ✅ (2026-10-25)

All 23 production readiness tasks complete. See `docs/sprints/PRODUCTION_READINESS_TASKS.md`.

### Completed
- 27-country registry — tests, manifest, all UI copy updated
- USA pathways added (US-student F-1, US-work H-1B) — 61 total pathways
- `og:image`, `twitter:image`, `twitter:site` on all 21 pages + blog template
- Favicon PNG fallback + `apple-touch-icon` + PWA manifest link on all pages
- Organization + WebSite JSON-LD on homepage
- `author` meta on blog post template
- `sitemap.xml` — stale URL fixed, USA added, all 17 blog posts added
- `robots.txt` — `Sitemap:` directive added
- `public/manifest.json` created
- `src/pages/404.html` created
- Calculator null-cost explanatory state wired
- Fake newsletter form replaced with honest callout
- Contact page: unverified social block removed
- `about-section` → `prose` consolidated across disclaimer/terms/privacy
- Business playbook: related articles section added
- Student playbook: emoji removed from badge

### Owner actions remaining
- `public/assets/og-default.png` — 1200×630px, navy `#10316b` bg, white wordmark
- `public/assets/icons/favicon.png` — 32×32px + 180×180px export from existing SVG

---

## Phase 7 — Rebrand ✅ (2026-10-25)

- **Global Route → MyPathway2Global** across all files
- **Find My Route → Find MyPathway** everywhere
- File renamed: `find-my-route.html` → `find-mypathway.html`
- All 22 HTML files, 17 blog posts, all templates updated

---

## Phase 6 — UI/UX Transformation ✅ (2026-10-25)

### Design System
- **Fonts:** Titillium Web 400/600 + Roboto 300/400/500
- **Colors:** `#0b409c` primary, `#ffc947` amber, `#10316b` dark navy, `#f2f7ff` page bg
- **H2 underline:** 40px amber rule on all H2 elements
- **Buttons:** `border-radius: 2px`, amber hover
- **No dark mode:** All `prefers-color-scheme: dark` removed
- **No emojis:** All emoji icons removed

### Pages
- White page headers (no dark gradients) on all pages
- Content-first editorial layout on homepage
- `.prose` class on all text-heavy pages (max-width 760px)
- `.checklist` class on all requirement lists

---

## Phase 0 — Production integrity ✅

- Cloudflare Workers deployment live and verified
- 27 countries, 61 pathways, registries match source
- 18/18 test suites, 139/139 tests passing
- CSP headers in `public/_headers`

**Open:** live-browser ARIA audit on 4 core pages (owner action)

---

## Phase 1 — Migration intelligence ✅ code / ⏳ owner

- 27-country registry, 61 pathways (55 publishable / 6 research_required)
- 55/55 publishable pathways have `requirements[]`
- 6 research_required all have `permanentBlocker` or `scopeNote`
- 193+ evidence records across primary-source-verified.json + addenda
- Route engine: `{ matches, alternatives, missingInput, zeroFitExplanations }`
- 180-day staleness detection on requirement `effectiveDate`
- Country source manifest generated for all 27 countries

**Open (owner):**
- Set `humanSignOff: true` on all 27 manifest entries → `docs/data/country-source-review-manifest.json`
- Update `dataset.asOf` after sign-off

---

## Phase 2 — Canonical product core ✅

- Route matching, zero-fit suppression, source trails, stale warnings
- Alternatives surfacing (up to 5 ineligible goal-type routes with blocker)
- Conditional eligibility: `selectFundsTier()` by `familySize` + `applicationDate`
- Zero-fit explanations: per-pathway blocker reasons in collapsible `<details>`
- Country comparison: checkboxes (max 3), sticky bar, side-by-side panel
- Find MyPathway: `familySize` + `applicationDate` inputs

---

## Phase 3 — Content & acquisition ✅

- 21 blog posts across 7 categories:
  - 9 Country Audits (Germany, Canada, UK, Italy, Portugal, USA, Australia, France, Netherlands)
  - 2 Student Playbooks (Italy DSU, UK Masters)
  - 2 Professional Playbooks (Canada Express Entry, Germany Chancenkarte)
  - 1 Business Playbook (US LLC Setup)
  - 2 Case Studies (Chisom success story, Rejection patterns)
  - 4 Guides (Motivation letter, Document auth, Blocked account funding, Passport tiers)
  - 1 Policy Update (Canada SDS cancellation)
- All em dashes replaced with hyphens across all posts (AI-signal reduction)
- 1 YouTube embed per post, all 21 posts (verified video IDs)
- All fabricated approval rate claims removed
- OG/Twitter tags on all pages
- Canonical tags on all generated HTML files
- Sabilytics analytics on all pages
- All 21 blog posts in sitemap.xml (64 URLs total)

---

## Phase 4 — Trust/compliance/accessibility ✅ code / ⏳ owner

- Privacy/terms/disclaimer rebuilt with canonical nav/footer
- Newsletter fake form replaced with honest callout
- PII console log removed
- Heading hierarchy verified h1→h2→h3 on all pages
- Consent UI: analytics and advertising consent separated
- `about-section` → `prose` consolidated

**Open (owner):**
- Legal review of privacy/disclaimer/terms
- Live-browser ARIA audit
- Colour contrast check (WCAG AA)

---

## Phase 5 — Growth/monetization ✅ Complete

- Ad slot registry complete
- Slot markup on blog.html and all 3 playbook pages
- `public/ads.txt` live: `google.com, pub-8077583188666813, DIRECT, f08c47fec0942fa0`
- Static AdSense `<script>` tag in `<head>` on all 6 ad pages (crawler-visible)
- Consent-gated `admob-loader.js` adapter on all 6 ad pages
- Site ownership verified in AdSense dashboard
- Sabilytics live on all pages

**Pending (external):** Google policy review — 1-14 days. No code action required.

---

## Phase 9 — Scale & Wizard 🔄 in planning

See `docs/sprints/WIZARD_PLAN.md` for full architecture.

### Confirmed scope
- **Visa Wizard** — new `/pages/visa-wizard.html`, guided 5-step tool for tourists/nomads/undecided
- **Find MyPathway upgrades** — passport country field, current visa field, business goal unlocked, extension routes
- **Nav integration** — Wizard added to main nav on all pages
- **Homepage section** — two-column card: Find MyPathway (career/study) vs Visa Wizard (tourist/nomad)
- **Data tagging** — `wizardTags` + `extensionOf` on key pathways (additive, no breaking change)
- **54 African countries** in passport dropdown, research opportunity flags per country
- **Nomad/remote routes** — "Explore & Nomad" purpose maps to countries with published evidence-gated nomad routes (PT, ES, DE)

### Phases
| Phase | Scope | Status |
|---|---|---|
| W1 | Wizard UI scaffold + nav + homepage section | **Done** |
| W2 | Wizard engine + results + extension routes + test suite | **Done** (test suite deferred) |
| W3 | Find MyPathway upgrades (passport, current visa, business) | **Done** (extension routes section deferred) |
| W4 | Data: `wizardTags` + `extensionOf` on pathways.json | **Done** |
| W5 | Sitemap + WebPage schema + cross-links | **Done** |

---

## Task-status rules

- Mark complete only when implementation, docs and verification all exist
- Publishable = evidence-backed for a defined pathway scope, not an approval guarantee
- Missing structured requirements = unknown, not zero or unrestricted
- Source-tree CI does not prove live deployment behaviour
- Do not bypass evidence gates to scale content or revenue
