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
- Current `main` head: pending commit (P0-S2 complete).
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

### P0-S3 — Data / Recommendation Quality Gate — ACTIVE

- [ ] `npm run data:validate` — verify current head.
- [ ] Evidence registry, pathway-boundary and recommendation-safety tests.
- [ ] Canonical registry/evidence-ID reconciliation.
- [ ] Build + generated-output integrity verification.
- [ ] Lint/static checks.
- [ ] Record CI availability accurately.

**Exit:** validated current tree with reproducible verification evidence and no unsafe recommendation regression.

### P0-S4 — Browser / Release Gate — QUEUED

- [ ] Browser/E2E verification of generated routes.
- [ ] Deep-link, asset, calculator and recommendation-flow verification.
- [ ] Generated SEO metadata, accessibility smoke and sitemap/robots verification.
- [ ] Resolve or explicitly block on release-critical browser/runtime defects.

**Exit:** representative production flows are verified against generated output.

### P0-S5 — Deployment Verification & P0 Exit — QUEUED

- [ ] Identify authoritative Netlify project/site and production hostname; never guess.
- [ ] Verify deployed commit/version against `main`.
- [ ] Production smoke: deep links, assets, data, calculator, recommendations.
- [ ] Restore canonical/Open Graph/sitemap absolute URLs only after origin verification.
- [ ] Audit CSP against actual deployed third-party inventory.
- [ ] Resolve repository hardening issue #2 and establish appropriate `main` protection/check policy.
- [ ] Reconcile roadmap, active sprint and release verification and close P0.

**Exit:** authoritative production origin verified, production smoke passes, security/SEO release gates are reconciled, and Phase 0 P0 exit is explicitly recorded.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.
