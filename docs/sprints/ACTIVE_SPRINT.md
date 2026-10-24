# Active Sprint — Production Integrity & Migration Intelligence

> **Updated:** 2026-10-24 — Production is live. DNS resolved. All code tasks complete. Remaining items are owner-action only.

**Reconciled:** 2026-10-24 | **Branch:** `main`
**Release:** **GO — production live**
**Production host:** `https://mypathway2global.org.uk` (Cloudflare Workers, worker name `globalroute`)
**Deployed:** 2026-10-24 | Latest SHA: `17c8b98` | Verification: PASSED — 100 routes, 26 countries, 59 pathways
**CI status:** Paused by user direction. All UI, SEO, data and styling work is deployed and verified on production.

## Current decision

All code work is complete. Production is live and verified. Remaining open items are owner-side actions (country source sign-off, AdSense publisher ID, legal review) and Phase 2 depth features (conditional eligibility, country comparison).

## Pre-sprint REQUIRED tasks

Before next sprint phases are defined, the following must be completed. All tasks below are now **Done**. See `CHANGELOG.md` 2026-10-18 entries for detail.

| ID | Task | Status |
|---|---|---|
| REQ-DATA-1 | Close NZ-skilled umbrella with permanentBlocker | **Done** |
| REQ-DATA-2 | Add permanentBlocker to RU-study + RU-work with dated rationale | **Done** |
| REQ-DATA-3 | Research AU-skilled subclasses 189/190/491 — create pathway records or formal blockers | **Done** |
| REQ-DATA-4–6 | Fill requirements[] for CA-federal-skilled-worker, AU-student, IE-study (Batch A) | **Done** |
| REQ-DATA-7 | Fill requirements[] for NZ-smc three routes (Batch B) | **Done** |
| REQ-DATA-8–9 | Fill requirements[] for IT, FI, AT, CH, KR, CN pathways (Batch C+D) | **Done** |
| REQ-DATA-10 | Dedup AT-red-white-red vs AT-rwr-other-key-workers | **Done** |
| REQ-BLOG-1 | Correct Germany post — remove unsupported 62-68% approval rate claim | **Done** |
| REQ-BLOG-2 | Correct Canada Express Entry post — remove unsupported 78-85% approval rate claim | **Done** |
| REQ-BLOG-3–7 | Write country audits for Canada, Italy, Portugal, UK, USA (empty directories) | **Done** |
| REQ-BLOG-8–10 | Write rejection analysis, application guide, financial guide (empty directories) | **Done** |

---

## Current task board

| ID | Task | Status | Remaining exit condition |
|---|---|---|---|
| P0-S1 | Exact-subroute closure | **Complete with explicit blocked candidates** | AU subclass 189 and Italy Flussi remain research-required until exact-scope evidence closes their gaps |
| P0-S2 | Audit pathway evidence gaps | **Audit complete; source work ongoing** | Maintain evidence freshness; do not promote based on record count |
| P0-S3 | Data/recommendation quality gate | **Historically verified** | Keep validation and tests green as data changes; do not claim new validation without a fresh run |
| P0-S4 | Browser/source-tree gate | **Historically verified** | CI/browser smoke is not proof of production behavior |
| P0-S5 | Deployment verification / Phase 0 exit | **Complete** | Deployed to `mypathway2global.org.uk` via Cloudflare Workers (`globalroute`). Verification PASSED: 100 routes, 26 countries, 59 pathways, registries match source. 2026-10-23. |
| P1-S1.1 | Machine-readable country manifest | **Complete** | Manifest and evidence outcomes are committed; source review still requires human sign-off |
| P1-S1.2 | Country source-anchor review | **Human sign-off recorded for LU/RU** | Luxembourg updated to direct immigration portal; Russia national authority and consular scope confirmed |
| P1-S1.3 | Dataset metadata reconciliation | **Open** | Update `dataset.asOf` after full manifest sign-off sync |
| P1-REQ | Structured requirements | **Complete** | 59 total pathways (3 AU subclasses added): 55 publishable all have requirements[], 4 research_required all have permanentBlocker. P1-REQ-6 and REQ-DATA-3 closed 2026-10-18. |
| P1-ROUTE | Recommendation quality | **Complete** | Stale evidence warnings (180-day threshold on requirement effectiveDate), alternatives surfacing (up to 5 ineligible goal-type routes with blocker), missingInput flag and prompt, inline requirements on result cards. Engine returns `{ matches, alternatives, missingInput }`. |
| P1-SEO | Editorial/technical SEO | **Complete** | Fabricated "real visa approval rates / true costs" claims removed from `blog.html` meta+hero and `blog-category-country-audits.html` meta+hero. Stale stats updated (17 posts, 26 countries). OG title/description/type and twitter:card added to all 8 blog pages. `keywords` meta removed. Inline CategoryArchiveLoader (~200 lines) in `blog-category-country-audits.html` replaced with external `/js/category-loader.js` reference. Canonical tags remain deferred until production host is confirmed. |
| P1-PRIV | Privacy/compliance/accessibility | **Complete** | Newsletter mock subscription replaced with honest "not yet available" response in `blog-loader.js` and `category-loader.js` — PII console log removed, no fake API call. `privacy.html` updated with newsletter-not-active disclosure. All three legal pages (`privacy.html`, `disclaimer.html`, `terms.html`) rebuilt with canonical header/nav/footer, `responsive.css`, OG/Twitter tags, and `data-page-type="legal"`. Legal review and live-browser ARIA/contrast checks remain owner-side actions. |
| P1-REV | Monetization readiness | **Complete** | Duplicate `analytics.js` load removed from `blog.html` head. `ad_article_top` and `ad_article_mid` slot markup added to `blog.html`. Playbook page types (`student-playbook`, `professional-playbook`, `business-playbook`) added to `ad_article_end` in registry and slot markup added to all three pages. `public/ads.txt` placeholder created with explicit gate conditions. `MONETIZATION_ROADMAP.md` updated to reflect M0 complete, M1 partial, M2 blocked on DNS/publisher ID. Provider approval, live ad configuration and revenue reconciliation remain owner-side actions. |
| UI-0 | Page foundation — nav, layout, broken pages | **Complete** | All 5 broken/corrupt pages fixed 2026-10-18: `find-my-route.html` header/footer added; `about.html` and `contact.html` rebuilt with full content; `business-playbook.html` rebuilt from corrupt state; `faq.html` rebuilt with clean details elements. Nav standardised across all fixed pages. |
| UI-1 | Page completion — content | **Complete** | `student-playbook.html` and `professional-playbook.html` rebuilt with evidence-gated content, canonical nav, 4-col footer. All 14 static pages have complete content. |
| UI-2 | Visual design — CSS completion | **Complete** | Added `.playbook-section`, `.playbook-card`, `.budget-sections`, `.faq-section` (details/summary accordion), `.about-section`, `.contact-section`, `.route-results article`, `.cta-buttons`, table styles, nav active state by `data-page-type`, evidence-note component. Responsive breakpoints added for all new classes at 480px, 768px, 1024px. |
| UI-3 | Accessibility + pre-launch | **Heading hierarchy verified** | h1→h2→h3 correct on all rebuilt pages. Footer h4s are landmark headings — acceptable. ARIA audit, colour contrast check and full browser smoke remain open (require live browser). |
## Production

- **Live URL:** `https://mypathway2global.org.uk`
- **Worker:** `globalroute` (Cloudflare Workers)
- **Verified:** 2026-10-23 — 100 routes PASSED, registries match source
- **workers.dev fallback:** `https://globalroute.cfproject.workers.dev`

## Next task

**P1-S1.2 — Country source sign-off [OWNER ACTION]**
- Review `docs/data/country-source-review-manifest.json` for all 26 entries.
- Confirm Russia mission/jurisdiction source for Nigerian applicants.
- Set `humanSignOff: true` with reviewer name and date on all 26 entries.
- Then update `dataset.asOf` (P1-S1.3).

**UI-3 — Live browser checks [requires live browser]**
- ARIA audit (axe or equivalent) on homepage, country page, Find My Route, Calculator.
- Colour contrast check (WCAG AA).
- Keyboard navigation test.
- 0 critical/serious violations required before release.

**P5 — AdSense / provider activation [OWNER ACTION — gated on P0-S5]**
- Apply for AdSense account after production domain is confirmed.
- Obtain real publisher ID — then and only then populate `public/ads.txt`.
- Activate first ad placement only after consent validation passes.

**Sprint status: production live at `https://mypathway2global.org.uk`. All code tasks complete. Remaining items are owner-action only.**
