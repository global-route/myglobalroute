# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0  
**Delivery plan:** `docs/sprints/P0_DELIVERY_PLAN.md`  
**Handover:** `docs/sprints/HANDOVER.md`

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then release/deployment and acquisition.

## Current checkpoint

- 26 countries / 56 pathways (canonical registry expanded with NZ SMC + Austria exact-route child routes).
- **32 pathways are publishable; 24 remain research-required.**
- Current `main` head: `f9f36f3` (feat: promote Austria Other Key Workers to canonical pathway).
- Data validation passes: 26 countries, 56 pathways, 129 evidence records.
- All unit tests pass (31/31); build integrity verified.
- NZ SMC routes promoted: NZ-smc-points-based, NZ-smc-skilled-work-experience, NZ-smc-trades-technician.
- Austria Other Key Workers promoted: AT-rwr-other-key-workers (all 10 promotion gates passed).
- Italy 2026 Flussi promotion blocked: financial-requirement evidence is medium confidence — no universal applicant proof-of-funds amount established. Explicit gap documented in missingMaterialFields.
- Australia subclass 189 promotion blocked: visa-specific financial/material verification unresolved. Explicit gap documented in missingMaterialFields.
- The current GitHub branch metadata shows `main` is unprotected; retain repository hardening as a P0-S5 task.
- Production remains blocked until the authoritative Netlify origin is independently verified.

## P0 delivery sprint map

Independent work may proceed concurrently inside each sprint. A sprint closes only when its exit gate is verified; documentation must be reconciled after each delivery wave.

### P0-S1 — Exact Pathway Closure — COMPLETE (17/18 items; 1 explicitly blocked)

- [x] NZ Skilled Work Experience Red/Amber route matrix documented from current INZ instructions.
- [x] NZ Trades & Technician occupation/qualification/work-experience matrix documented from current INZ instructions.
- [x] NZ Skilled Work Experience occupation and effective-date wage evidence attached to the exact candidate.
- [x] NZ Skilled Work Experience direct-relevance/self-employment evidence attached to the exact candidate.
- [x] NZ Trades & Technician occupation/qualification evidence attached to the exact candidate.
- [x] NZ regression guards added for exact-route evidence and date-bounded wage fixtures.
- [x] NZ Skilled Work Experience executable Red/Amber + wage effective-date regression.
- [x] NZ Skilled Work Experience direct-relevance regression guard.
- [x] NZ Trades & Technician machine-testable occupation/qualification regression.
- [x] Data validator now recognizes exact subroute evidence scopes.
- [x] Superseded duplicate evidence batches removed from the active evidence registry.
- [x] Missing CA-study eligibility evidence restored with current Government of Canada source scope.
- [x] NZ Points-based occupation/registration and qualification/IQA exception evidence added; candidate material-gap list reconciled.
- [x] NZ Points-based final promotion validation — PROMOTED.
- [x] NZ Skilled Work Experience final promotion validation — PROMOTED.
- [x] NZ Trades & Technician final promotion validation — PROMOTED.
- [x] Austria Other Key Workers promotion validation — PROMOTED (all 10 gates passed).
- [x] Italy 2026 Flussi promotion validation — BLOCKED (financial-requirement medium confidence; explicit gap documented).
- [x] Australia 189 visa-specific financial/material verification — BLOCKED (explicit gap in missingMaterialFields).

**Exit gate met:** all current exact-route promotion gates are resolved or explicitly blocked by authoritative evidence; tests/docs are reconciled. ✅

**P0-S1 is COMPLETE — proceed to P0-S2.**

### P0-S2 — Remaining-Country Evidence Closure — ACTIVE

- [ ] Audit all 24 research-required canonical pathways.
- [ ] Prioritize remaining evidence batches by user value, legal stability, evidence availability and recommendation impact.
- [ ] Add exact primary-source material evidence and review dates.
- [ ] Promote only routes meeting the exact material-field gate.
- [ ] Document unresolved material gaps rather than filling them with estimates.

**Exit:** each remaining research-required route has either a complete promotion package or an explicit material evidence gap.

### P0-S3 — Data / Recommendation Quality Gate — QUEUED

- [ ] `npm run data:validate`.
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

## Latest completed wave

- [x] Promoted NZ-smc-points-based, NZ-smc-skilled-work-experience, NZ-smc-trades-technician to canonical pathways.
- [x] Promoted AT-rwr-other-key-workers to canonical pathway (all 10 promotion gates passed).
- [x] Italy 2026 Flussi promotion gate run — blocked on financial-requirement medium confidence; explicit gap documented.
- [x] Australia 189 promotion gate — blocked on visa-specific financial verification; explicit gap documented.
- [x] All tests passing (31/31); data validation passing; build integrity verified.
- [x] P0-S1 exit gate met — all routes promoted or explicitly blocked.

## Handover rule

The next operator should start from the exact `main` head above. P0-S1 is complete. Begin P0-S2 by auditing the 24 research-required canonical pathways and prioritizing by user value, legal stability, evidence availability and recommendation impact. Do not promote routes without current authoritative evidence.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.
