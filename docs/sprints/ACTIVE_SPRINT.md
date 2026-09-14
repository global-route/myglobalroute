# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0  
**Delivery plan:** `docs/sprints/P0_DELIVERY_PLAN.md`  
**Handover:** `docs/sprints/HANDOVER.md`

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then release/deployment and acquisition.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are publishable; 24 remain research-required.**
- Exact legal subroutes remain outside the canonical 52 until promotion.
- Candidate evidence is bound to exact subroute IDs; parent-pathway evidence cannot satisfy a child-route promotion gate.
- Current `main` head: `41d3c1337fa26c0a13512b5d65d1a20f9cb57b71` (`fix: complete NZ points-route evidence matrices`).
- The latest exact-route correction completed the missing NZ Points-based occupation/registration and qualification/IQA exception evidence required by the validator. Fresh verification remains required before treating the quality gate as green.
- Australia subclass 189 remains research_required because visa-specific financial/material verification is unresolved.
- New Zealand SMC has exact evidence for all three child routes plus a dedicated 2026 promotion matrix. Points-based, Skilled Work Experience and Trades & Technician remain research_required until their final promotion validations are completed; no umbrella route is promoted from narrower evidence.
- Austria Other Key Workers remains research_required pending applicant-document/points validation and final authority/process validation.
- Italy 2026 Flussi remains research_required pending deterministic employer/nulla-osta, sector/country, compensation/documentary and applicant evidence validation.
- The current GitHub branch metadata shows `main` is unprotected; do not change protection automatically during handover, but retain repository hardening as a P0-S5 task.
- Production remains blocked until the authoritative Netlify origin is independently verified.

## P0 delivery sprint map

Independent work may proceed concurrently inside each sprint. A sprint closes only when its exit gate is verified; documentation must be reconciled after each delivery wave.

### P0-S1 — Exact Pathway Closure — ACTIVE

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
- [ ] Australia 189 visa-specific financial/material verification.
- [ ] NZ Points-based final promotion validation.
- [ ] NZ Skilled Work Experience final promotion validation.
- [ ] NZ Trades & Technician final promotion validation.
- [ ] Austria Other Key Workers applicant-document matrix + points tests + promotion validation.
- [ ] Italy 2026 Flussi employer/nulla-osta + sector/country + compensation/documentary + applicant evidence matrices.

**Exit:** all current exact-route promotion gates are resolved or explicitly blocked by authoritative evidence; tests/docs are reconciled.

### P0-S2 — Remaining-Country Evidence Closure — QUEUED

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
- [ ] Record CI availability accurately; latest head still requires fresh verification evidence.

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

- [x] Added exact child-scoped evidence for Australia 189, all three New Zealand SMC child routes, Austria Other Key Workers and Italy 2026 Flussi.
- [x] Added exact New Zealand Points-based eligibility, financial/wage and process evidence.
- [x] Added New Zealand occupation/registration and qualification/IQA exception evidence based on current official guidance.
- [x] Added deterministic New Zealand SMC points-composition regression coverage and removed that item from the candidate's missing-material gate.
- [x] Reconciled SMC documentation with current 2026 rules, including the NZ-vs-overseas Trades/Technician qualification-credit distinction.
- [x] Added exact-route Skilled Work Experience and Trades & Technician promotion matrices with effective-date, occupation, qualification and evidence gates.
- [x] Added route-scoped NZ SMC regression evidence and machine-testable evidence-registry guards.
- [x] Added explicit wage/qualification fixture assertions to reject stale or generalized SMC rules.
- [x] Closed the Trades & Technician occupation/qualification regression items from the candidate's material-gap list while retaining final promotion validation as a separate gate.
- [x] Added authoritative Skilled Work Experience direct-relevance/self-employment evidence and regression coverage; removed direct-relevance from that candidate's missing-material gate.
- [x] Diagnosed and fixed the quality-gate data-validation failure caused by superseded duplicate evidence batches and unsupported exact-subroute scopes.
- [x] Restored missing CA-study eligibility evidence rather than weakening the publishable-pathway gate.
- [x] Made candidate material gaps explicit and strengthened regression coverage so missing fields cannot silently masquerade as complete evidence.
- [x] Preserved conservative recommendation behavior: research-required subroutes remain non-recommendable until promoted.
- [x] Completed the latest NZ Points-based evidence-matrix correction at `41d3c1337fa26c0a13512b5d65d1a20f9cb57b71`.

## Handover rule

The next operator should start from the exact `main` head above, inspect verification status, then continue P0-S1 open gates before broadening P0-S2. Do not promote routes, infer financial requirements, or mark production tasks complete without current authoritative evidence.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.
