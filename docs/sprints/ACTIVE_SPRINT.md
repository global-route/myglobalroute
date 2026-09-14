# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0  
**Delivery plan:** `docs/sprints/P0_DELIVERY_PLAN.md`

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then release/deployment and acquisition.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are publishable; 24 remain research-required.**
- Exact legal subroutes remain outside the canonical 52 until promotion.
- Candidate evidence is bound to exact subroute IDs; parent-pathway evidence cannot satisfy a child-route promotion gate.
- Australia subclass 189 remains research_required because visa-specific financial/material verification is unresolved.
- New Zealand SMC has exact evidence for all three child routes plus a dedicated 2026 promotion matrix. Points-based is at final promotion validation; Skilled Work Experience now has route-scoped occupation, direct-relevance and wage-regression evidence plus executable fixture guards; Trades & Technician now has route-scoped occupation/qualification evidence plus executable fixture guards. Final promotion validation remains open.
- Austria Other Key Workers has a dedicated application/evidence matrix; points regression and final authority/process validation remain open.
- Italy 2026 Flussi has a dedicated promotion matrix; employer/nulla-osta, sector/country, compensation and applicant evidence remain open.
- No umbrella route has been promoted from narrower evidence.
- Current `main` head is now the latest sprint reconciliation commit; GitHub Actions are running/queued for the recent push and are not yet green.
- Production remains blocked until the authoritative Netlify origin is independently verified.

## P0 delivery sprint map

The remaining work is now organized into bounded delivery sprints. Independent work can proceed concurrently inside each sprint; a sprint closes only when its exit gate is verified.

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
- [x] Made candidate material gaps explicit and strengthened regression coverage so missing fields cannot silently masquerade as complete evidence.
- [x] Preserved conservative recommendation behavior: research-required subroutes remain non-recommendable until promoted.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.
