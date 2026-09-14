# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are publishable; 24 remain research-required.**
- Exact legal subroutes remain outside the canonical 52 until promotion.
- Candidate evidence is bound to exact subroute IDs; parent-pathway evidence cannot satisfy a child-route promotion gate.
- Australia subclass 189 remains research_required because visa-specific financial/material verification is unresolved.
- New Zealand SMC now has exact evidence for all three child routes plus a dedicated 2026 promotion matrix; points-composition, occupation/registration and qualification/IQA evidence gates are now represented, while promotion validation and the other two child-route matrices remain open. Current INZ guidance confirms the three distinct SMC pathways and the one-primary-category points rule. citeturn0search2turn0search3
- Austria Other Key Workers now has a dedicated application/evidence matrix; points regression and final authority/process validation remain open.
- Italy 2026 Flussi now has a dedicated promotion matrix; employer/nulla-osta, sector/country, compensation and applicant evidence remain open.
- No umbrella route has been promoted from narrower evidence.
- Latest commits still require fresh CI verification; no unreported green status is assumed.
- Production remains blocked because the authoritative Netlify origin has not been independently verified.

## Latest completed wave

- [x] Added exact child-scoped evidence for Australia 189, all three New Zealand SMC child routes, Austria Other Key Workers and Italy 2026 Flussi.
- [x] Added exact New Zealand Points-based eligibility, financial/wage and process evidence.
- [x] Added New Zealand occupation/registration and qualification/IQA exception evidence based on current official guidance.
- [x] Added deterministic New Zealand SMC points-composition regression coverage and removed that item from the candidate's missing-material gate.
- [x] Made candidate material gaps explicit and strengthened regression coverage so missing fields cannot silently masquerade as complete evidence.
- [x] Preserved conservative recommendation behavior: research-required subroutes remain non-recommendable until promoted.

## P0 remaining

### Evidence / pathway architecture
- [ ] Australia subclass 189 visa-specific financial/material verification.
- [ ] NZ Points-based promotion validation.
- [ ] NZ Skilled Work Experience red/amber matrix and wage/evidence regression.
- [ ] NZ Trades & Technician occupation/qualification matrix and regression.
- [ ] Austria Other Key Workers applicant-document matrix, points calculation tests and promotion validation.
- [ ] Italy employer/nulla-osta matrix, sector/country quota matrix, compensation/documentary matrix and applicant evidence matrix.
- [ ] Continue remaining-country evidence batches using the same exact-route gate.

### Quality / production
- [ ] Run `npm run data:validate` against the current tree.
- [ ] Run the evidence/unit test suite including exact-subroute boundary and explicit-gap tests.
- [ ] Run build, generated-output verification, SEO/accessibility verification and lint.
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
