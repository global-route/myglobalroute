# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0  
**Delivery plan:** `docs/sprints/P0_DELIVERY_PLAN.md`  
**Handover:** `docs/sprints/HANDOVER.md`

## Current checkpoint

- 26 countries / 56 pathways.
- **52 pathways publishable; 4 remain research-required (all explicitly blocked with documented gaps).**
- 193 evidence records across all 56 pathways — 56/56 evidenced and materially covered.
- Current `main` head: `40d13aee07514c96c009921e1260a019a9a0b691` (documentation synchronization head).
- All unit tests pass (31/31); build integrity verified.
- Production remains blocked until the authoritative Netlify origin is independently verified.

### 4 explicitly-blocked research-required pathways

| Pathway | Blocker |
|---------|---------|
| AU-skilled | financial-requirement medium confidence — no universal threshold across subclasses |
| NZ-skilled | scope record prohibits umbrella promotion — 3 child routes already canonical |
| RU-study | eligibility + financial-requirement medium confidence — geopolitical context |
| RU-work | eligibility + financial-requirement medium confidence — geopolitical context |

## P0 delivery sprint map

### P0-S1 — Exact Pathway Closure — COMPLETE ✅
All exact-route gates resolved or explicitly blocked. 4 routes promoted (NZ SMC x3, Austria Other Key Workers).

### P0-S2 — Remaining-Country Evidence Closure — COMPLETE ✅
All 24 research-required canonical pathways audited. 20 promoted; 4 explicitly blocked with documented evidence gaps.

### P0-S3 — Data / Recommendation Quality Gate — COMPLETE ✅

- [x] `npm run data:validate` — PASS (56 pathways, 193 records, 52 publishable)
- [x] Evidence registry, pathway-boundary and recommendation-safety tests — PASS (31/31)
- [x] Build + generated-output integrity verification — PASS (147 files)
- [x] Lint/static checks — PASS (0 errors, 33 non-blocking warnings)
- [x] Verification record written: `docs/project/RELEASE_VERIFICATION_2026-09-28.md`

### P0-S4 — Browser / Release Gate — COMPLETE ✅

- [x] Browser/E2E smoke — PASS (4/4, Playwright 1.44.1, Chromium 1117, 16.3s)
- [x] `@playwright/test` pinned to 1.44.1 (mac12 compatible, cached binary)
- [x] `test:e2e` script added to `package.json`

### P0-S5 — Deployment Verification & P0 Exit — ACTIVE

**Infrastructure finding:** Production host is Cloudflare Pages at `https://vrenum.app` (not Netlify). `netlify.toml` security headers do not apply on Cloudflare Pages. `public/_headers` added to carry equivalent headers into the build output.

**Origin status (2026-09-28):** HTTP 523 — Cloudflare proxy live, origin server unreachable. Production smoke blocked until origin is restored.

- [x] Identify authoritative production origin — `https://vrenum.app` (Cloudflare Pages)
- [x] Add `public/_headers` — security/cache headers for Cloudflare Pages
- [ ] Confirm Cloudflare Pages project is deployed and latest deployment matches commit `afc442c`
- [ ] Resolve 523 origin error — verify Pages project build/deployment status in Cloudflare dashboard
- [ ] Run `npm run deploy:verify` with `PRODUCTION_URL=https://vrenum.app` once origin is reachable
- [ ] Restore canonical/Open Graph/sitemap absolute URLs to `https://vrenum.app`
- [ ] Audit CSP against actual deployed third-party inventory
- [ ] Resolve repository hardening issue #2
- [ ] Reconcile roadmap, active sprint and release verification and close P0

**Exit:** authoritative production origin verified, production smoke passes, security/SEO release gates are reconciled, and Phase 0 P0 exit is explicitly recorded.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.

## P1 Revenue Readiness Lane — concurrent preparation

The monetization architecture is now documented under `docs/monetization/` and the dedicated revenue phase is `docs/phase-1/REVENUE_MONETIZATION_PHASE.md`.

This lane may proceed concurrently with P0-S5 because it does not require live advertising activation.

- [x] Revenue architecture documented.
- [x] AdSense strategy documented.
- [x] Ad placement map documented.
- [x] MRR model documented.
- [x] Revenue metrics documented.
- [x] Affiliate strategy documented.
- [x] Partner revenue model documented.
- [x] Monetization roadmap documented.
- [x] Dedicated P1 revenue phase created.
- [x] First implementation task defined: `REV-01 Measurement Foundation`.
- [ ] Implement REV-01 measurement foundation.
- [ ] Implement REV-02 configuration-driven monetization slots.
- [ ] Complete privacy/consent gate before advertising activation.
- [ ] Activate AdSense only after authoritative production verification.

**Handover:** `docs/sprints/P1_REVENUE_SPRINT.md`.
