# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are now publishable; 24 remain research-required.**
- The evidence tree now contains **100 field-level records** across the primary registry and dated addenda.
- Canada Express Entry was narrowed to the exact **Federal Skilled Worker Program** route and promoted only after matching primary-source evidence was staged and its evidence records were corrected to the canonical pathway id.
- New Zealand SMC scope has been refreshed: the current authority distinguishes three pathways (Points-based, Skilled Work Experience, Trades and Technician), so the generic `NZ-skilled` record remains research-required.
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
- [x] Reconciled release verification, sprint checkpoint and P0 legal-subroute docs to the 28/24 state.
- [x] Regression coverage rejects cross-pathway evidence and requires material evidence for publishable routes.

## P0 remaining

### Evidence / pathway architecture
- [ ] New Zealand Skilled — split the umbrella into exact SMC pathway records, starting with Skilled Work Experience and/or Trades and Technician; model the August 24, 2026 rules without collapsing distinct routes. 
- [ ] Australia Skilled — select an exact skilled visa class; the official program is explicitly a family of temporary, provisional and permanent skilled visas, so the umbrella cannot be promoted safely.
- [ ] Austria Red-White-Red — select an exact sub-route.
- [ ] Italy Work — select an exact work authorization class.
- [ ] Continue remaining country evidence batches.

### Quality / production
- [ ] Re-run Quality Gate after the latest evidence correction/addendum.
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
