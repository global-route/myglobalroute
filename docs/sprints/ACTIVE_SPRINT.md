# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are now publishable; 24 remain research-required.**
- New exact-route evidence is now staged for Australia subclass 189, New Zealand SMC Skilled Work Experience and Trades and Technician, Austria Other Key Workers, and Italy 2026 non-seasonal subordinate work.
- Those candidates remain research-required until the canonical pathway model can represent the legal scope and all material fields are complete.
- Canada remains promoted as exact **Federal Skilled Worker Program**; both evidence records use the canonical pathway id.
- Latest commits still require fresh CI verification; no unreported green status is assumed.
- Production remains blocked because the authoritative Netlify origin has not been independently verified.

## Latest completed wave

- [x] Japan Student exact-route evidence + promotion.
- [x] Japan Engineer / Specialist in Humanities / International Services exact-route evidence + promotion.
- [x] Canada Federal Skilled Worker Program evidence added from current IRCC primary sources.
- [x] Replaced the broad `CA-express-entry` pathway with the exact `CA-federal-skilled-worker` pathway.
- [x] Corrected both Canada FSWP evidence records to reference the canonical `CA-federal-skilled-worker` pathway id.
- [x] Promoted Canada FSWP only after pathway/evidence scope alignment.
- [x] Added current New Zealand SMC scope/policy evidence without promoting the umbrella route.
- [x] Added Australia subclass 189 eligibility/process evidence without promoting `AU-skilled`.
- [x] Added New Zealand exact SMC pathway evidence for Skilled Work Experience and Trades and Technician without promoting `NZ-skilled`.
- [x] Added Austria Other Key Workers evidence without promoting the full RWR family.
- [x] Added Italy 2026 non-seasonal subordinate-work/Flussi evidence without promoting the broad Italy work umbrella.
- [x] Added an exact-route candidate register to make legal sub-route boundaries explicit.
- [x] Reconciled P0 legal-subroute review documentation to the new candidate wave.
- [x] Regression coverage rejects cross-pathway evidence and requires material evidence for publishable routes.

## P0 remaining — execution order

### 1. Australia subclass 189
- [ ] Add the remaining material route fields required by the application schema, especially financial/material application evidence where applicable.
- [ ] Validate occupation-list and route-specific evidence against the current source set.
- [ ] Promote only if every material field is covered and the route label is exact.

### 2. New Zealand SMC route architecture
- [ ] Add explicit sub-route identifiers for Points-based, Skilled Work Experience, and Trades and Technician without increasing the canonical country/pathway count incorrectly.
- [ ] Move the new route-specific evidence from umbrella semantics to the explicit sub-route model.
- [ ] Keep red/amber occupation rules and 24 August 2026 transitional treatment explicit.
- [ ] Promote each sub-route independently only after its own material evidence gate passes.

### 3. Austria Other Key Workers
- [ ] Complete missing material fields for the exact RWR sub-route.
- [ ] Keep 2026 remuneration thresholds dated and reviewable.
- [ ] Promote only the Other Key Workers route, never the full RWR umbrella.

### 4. Italy 2026 non-seasonal subordinate work
- [ ] Add employer-side/nulla-osta and applicant-side material requirements from authoritative sources.
- [ ] Keep 2026 quota and click-day dates explicitly temporal.
- [ ] Do not generalize Flussi into all Italian work authorization.

### 5. Remaining research-required countries
- [ ] Apply the same exact-route audit to LU Study first, then remaining country work/study umbrellas.
- [ ] Preserve unsupported fields as null rather than inventing values.

### Quality / production
- [ ] Re-run Quality Gate after the latest evidence/addenda wave.
- [ ] Re-run lint, build and browser smoke.
- [ ] Identify authoritative Netlify site/project and hostname; do not guess.
- [ ] Run deployed-site verification against the verified origin.
- [ ] Restore canonical/Open Graph/sitemap absolute URLs only after origin verification.
- [ ] Resolve repository hardening issue #2 and establish appropriate `main` protection/check policy.

## P1 after P0

- Programmatic SEO hardening after production origin verification.
- Comparison UX and recommendation polish.
- Editorial-page SEO audit.
- Privacy-aware analytics/consent controls.
- CSP refinement.
- Newsletter, affiliate and partnership infrastructure.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**.
