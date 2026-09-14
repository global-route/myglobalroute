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
- New Zealand SMC has exact evidence for all three child routes plus a dedicated 2026 promotion matrix. Points-based is at final promotion validation; Skilled Work Experience now has an authoritative Red/Amber matrix; Trades & Technician now has an authoritative occupation/qualification/work-experience matrix. Machine-testable regression and final promotion validation remain open.
- Austria Other Key Workers has a dedicated application/evidence matrix; points regression and final authority/process validation remain open.
- Italy 2026 Flussi has a dedicated promotion matrix; employer/nulla-osta, sector/country, compensation and applicant evidence remain open.
- No umbrella route has been promoted from narrower evidence.
- CI status must be freshly verified for the current head; no unreported green status is assumed.
- Production remains blocked until the authoritative Netlify origin is independently verified.

## P0 delivery sprint map

The remaining work is now organized into bounded delivery sprints. Independent work can proceed concurrently inside each sprint; a sprint closes only when its exit gate is verified.

### P0-S1 — Exact Pathway Closure — ACTIVE

- [x] NZ Skilled Work Experience Red/Amber route matrix documented from current INZ instructions.
- [x] NZ Trades & Technician occupation/qualification/work-experience matrix documented from current INZ instructions.
- [ ] Australia 189 visa-specific financial/material verification.
- [ ] NZ Points-based final promotion validation.
- [ ] NZ Skilled Work Experience executable Red/Amber + wage effective-date regression.
- [ ] NZ Trades & Technician machine-testable occupation/qualification regression.
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
- [x] Made candidate material gaps explicit and strengthened regression coverage so missing fields cannot silently masquerade as complete evidence.
- [x] Preserved conservative recommendation behavior: research-required subroutes remain non-recommendable until promoted.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.
