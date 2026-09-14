# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are now publishable; 24 remain research-required.**
- Exact-route candidate architecture is now staged separately from the canonical registry.
- Australia subclass 189, New Zealand SMC child routes, Austria Other Key Workers and Italy 2026 Flussi are represented as research-stage candidates rather than being incorrectly promoted through broad umbrellas.
- New Zealand SMC has an explicit route-model design for Points-based, Skilled Work Experience and Trades and Technician.
- Evidence remains field-level and primary-source driven; parent-pathway evidence is not sufficient proof for a child route.
- Latest commits still require fresh CI verification; no unreported green status is assumed.
- Production remains blocked because the authoritative Netlify origin has not been independently verified.

## Latest completed wave

- [x] Japan Student exact-route evidence + promotion.
- [x] Japan Engineer / Specialist in Humanities / International Services exact-route evidence + promotion.
- [x] Canada Federal Skilled Worker Program evidence + exact-route promotion.
- [x] Australia subclass 189 exact-route evidence staged without umbrella promotion.
- [x] New Zealand SMC exact-route evidence and child-route architecture staged without umbrella promotion.
- [x] Austria Other Key Workers exact-route evidence staged without broad RWR promotion.
- [x] Italy 2026 non-seasonal subordinate-work evidence staged without broad work-route promotion.
- [x] Added `src/data/pathway-candidates.json` as a dedicated research-stage exact-route register.
- [x] Added regression coverage preventing candidate/parent evidence from masquerading as canonical child-route proof.
- [x] Reconciled P0 legal-subroute, sprint and release documentation.

## P0 remaining

### Evidence / pathway architecture
- [ ] Canonicalize New Zealand child pathway IDs and attach child-scoped evidence; evaluate Points-based, Skilled Work Experience and Trades & Technician independently.
- [ ] Complete missing material evidence for Australia subclass 189 before deciding promotion; current candidate is still missing financial-requirement coverage.
- [ ] Complete material evidence for Austria Other Key Workers before deciding promotion.
- [ ] Complete employer/nulla-osta and applicant-side evidence for Italy 2026 non-seasonal subordinate work.
- [ ] Continue remaining-country evidence batches using the same exact-route gate.

### Quality / production
- [ ] Run `npm run data:validate` against the current tree.
- [ ] Run the evidence/unit test suite including the new candidate-route tests.
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
