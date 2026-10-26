# Phase Status — MyPathway2Global

> **Updated:** 2026-10-25 | **Release:** GO — production live
> **Production:** `https://mypathway2global.org.uk` | **Tests:** 18/18 suites, 139/139 passing
> **Commit:** `756196f`

---

## Phase summary

| Phase | Status | Open gates |
|---|---|---|
| 0 — Production integrity | **Complete** | Live-browser ARIA audit (owner) |
| 1 — Migration intelligence | **Code complete** | Human source sign-off (27 countries), `dataset.asOf` update |
| 2 — Canonical product core | **Complete** | — |
| 3 — Content & acquisition | **Complete** | Editorial freshness ongoing |
| 4 — Trust/compliance/accessibility | **Code complete** | Legal review, live ARIA audit, consent validation |
| 5 — Growth/monetization | **Infrastructure complete** | AdSense publisher ID, live placement |
| 6 — UI/UX transformation | **Complete** | — |
| 7 — Rebrand | **Complete** | — |
| 8 — Production readiness | **Complete** | Two image assets (owner action) |
| 9 — Scale | **Not started** | Gated on Phases 0–5 |

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

- 17 blog posts across 7 categories:
  - 6 Country Audits (Germany, Canada, UK, Italy, Portugal, USA)
  - 2 Student Playbooks (Italy DSU, UK Masters)
  - 2 Professional Playbooks (Canada Express Entry, Germany Chancenkarte)
  - 1 Business Playbook (US LLC Setup)
  - 2 Case Studies (Chisom success story, Rejection patterns)
  - 3 Guides (Motivation letter, Document auth, Blocked account funding)
  - 1 Policy Update (Canada SDS cancellation)
- All fabricated approval rate claims removed
- OG/Twitter tags on all pages
- Canonical tags on all generated HTML files
- Sabilytics analytics on all pages
- All 17 blog posts in sitemap.xml

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

## Phase 5 — Growth/monetization ✅ infrastructure / ⏳ owner

- Ad slot registry complete
- Slot markup on blog.html and all 3 playbook pages (all `hidden`)
- `public/ads.txt` placeholder created
- Sabilytics live on all pages

**Open (owner → then code):**
- Apply for AdSense
- Populate ads.txt with publisher ID
- Activate script + unhide slots

---

## Phase 9 — Scale 🔒 not started

Gated on: production integrity proven, data trust signed off, privacy reviewed, monetization live.

---

## Task-status rules

- Mark complete only when implementation, docs and verification all exist
- Publishable = evidence-backed for a defined pathway scope, not an approval guarantee
- Missing structured requirements = unknown, not zero or unrestricted
- Source-tree CI does not prove live deployment behaviour
- Do not bypass evidence gates to scale content or revenue
