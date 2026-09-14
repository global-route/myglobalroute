# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are now publishable; 24 remain research-required.**
- Canada Express Entry was narrowed to the exact **Federal Skilled Worker Program** route and promoted only after matching primary-source evidence was staged.
- Evidence records remain field-level and route-scoped.
- Latest commits still require fresh CI verification; no unreported green status is assumed.
- Production remains blocked because the authoritative Netlify origin has not been independently verified.

## Latest completed wave

- [x] Japan Student exact-route evidence + promotion.
- [x] Japan Engineer / Specialist in Humanities / International Services exact-route evidence + promotion.
- [x] Canada Federal Skilled Worker Program evidence added from current IRCC primary sources.
- [x] Replaced the broad `CA-express-entry` pathway with the exact `CA-federal-skilled-worker` pathway.
- [x] Promoted Canada FSWP only after pathway/evidence scope alignment.
- [x] Reconciled P0 legal-subroute review with the 28-pathway publishable state.
- [x] Regression coverage rejects cross-pathway evidence and requires material evidence for publishable routes.

## P0 remaining

### Evidence / pathway architecture
- [ ] Australia Skilled — select an exact skilled visa class; the official program is explicitly a family of temporary, provisional and permanent skilled visas, so the umbrella cannot be promoted safely. citeturn0search10turn0search11
- [ ] New Zealand Skilled — narrow to an exact SMC or work-to-residence route and model the August 24, 2026 rule changes. citeturn0search5turn0search7
- [ ] Austria Red-White-Red — select an exact sub-route.
- [ ] Italy Work — select an exact work authorization class.
- [ ] Continue remaining country evidence batches.

### Quality / production
- [ ] Re-run Quality Gate after the latest promotion.
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
