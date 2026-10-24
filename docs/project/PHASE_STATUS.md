# Phase Status — Global Route

> **Reconciled:** 2026-10-24 | **Release:** GO — production live | **SHA:** `e43fcad`
> **Production:** `https://mypathway2global.org.uk` | **Tests:** 18/18 suites, 139/139 passing

---

## Phase summary

| Phase | Status | Open gates |
|---|---|---|
| 0 — Production integrity | **Complete** | Live-browser ARIA audit (UI-3) |
| 1 — Migration intelligence | **Code complete** | Human source sign-off (26 countries), `dataset.asOf` update |
| 2 — Canonical product core | **Complete** | — |
| 3 — Content & acquisition | **Complete** | Editorial freshness ongoing |
| 4 — Trust/compliance/accessibility | **Code complete** | Legal review, live ARIA audit, consent validation |
| 5 — Growth/monetization | **Infrastructure complete** | AdSense publisher ID, live placement |
| 6 — Scale | **Not started** | Gated on Phases 0–5 |

---

## Phase 0 — Production integrity ✅

- Cloudflare Workers deployment live and verified
- 100 routes, 26 countries, 59 pathways, registries match source
- 18/18 test suites, 139/139 tests passing
- Build integrity, SEO/A11Y (183 files), lint all passing
- CSP headers in `public/_headers` and `netlify.toml` (kept identical)

**Open:** live-browser ARIA audit on 4 core pages (requires browser — owner action)

---

## Phase 1 — Migration intelligence ✅ code / ⏳ owner

- 26-country registry, 59 pathways (55 publishable / 4 research_required)
- 55/55 publishable pathways have `requirements[]`
- 4 research_required all have `permanentBlocker`
- 193+ evidence records across primary-source-verified.json + 28 addenda
- Route engine: `{ matches, alternatives, missingInput, zeroFitExplanations }`
- 180-day staleness detection on requirement `effectiveDate`
- Country source manifest generated for all 26 countries

**Open (owner):**
- Set `humanSignOff: true` on all 26 manifest entries → `docs/data/country-source-review-manifest.json`
- Update `dataset.asOf` after sign-off

---

## Phase 2 — Canonical product core ✅

- Route matching, zero-fit suppression, source trails, stale warnings
- Alternatives surfacing (up to 5 ineligible goal-type routes with blocker)
- Conditional eligibility: `selectFundsTier()` by `familySize` + `applicationDate`
- Zero-fit explanations: per-pathway blocker reasons in collapsible `<details>`
- Country comparison: checkboxes (max 3), sticky bar, side-by-side panel
- Find My Route: `familySize` + `applicationDate` inputs

**Open (Sprint 3):** budget, income, experience inputs → `task engine:add-profile-inputs`

---

## Phase 3 — Content & acquisition ✅

- 17 blog posts across 7 categories
- All fabricated approval rate claims removed
- OG/Twitter tags on all pages
- Canonical tags on all 183 generated HTML files
- Sabilytics analytics on all pages

**Open (Sprint 3):** 3 new country audits, email capture

---

## Phase 4 — Trust/compliance/accessibility ✅ code / ⏳ owner

- Privacy/terms/disclaimer rebuilt with canonical nav/footer
- Newsletter mock replaced with honest "not yet available"
- PII console log removed
- Heading hierarchy verified h1→h2→h3 on all pages
- Consent UI: analytics and advertising consent separated, no dark patterns

**Open (owner):**
- Legal review of privacy/disclaimer/terms → `task trust:legal-review-checklist`
- Live-browser ARIA audit → `task trust:a11y-audit`
- Colour contrast check (WCAG AA)

---

## Phase 5 — Growth/monetization ✅ infrastructure / ⏳ owner

- Ad slot registry complete
- Slot markup on blog.html and all 3 playbook pages
- `public/ads.txt` placeholder created
- Duplicate analytics.js load removed
- Sabilytics live on all pages

**Open (owner → then code):**
- Apply for AdSense → `task revenue:status`
- Populate ads.txt → `task revenue:ads-txt PUBLISHER_ID=...`
- Activate script + unhide slots → `task revenue:activate-adsense`

---

## Phase 6 — Scale 🔒 not started

Gated on: production integrity proven, data trust signed off, privacy reviewed, monetization live.

---

## Task-status rules

- Mark complete only when implementation, docs and verification all exist
- Publishable = evidence-backed for a defined pathway scope, not an approval guarantee
- Missing structured requirements = unknown, not zero or unrestricted
- Source-tree CI does not prove live deployment behaviour
- Do not bypass evidence gates to scale content or revenue
