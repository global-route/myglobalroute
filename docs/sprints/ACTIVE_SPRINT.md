# Active Sprint — Production Integrity & Intelligence Core

**Started:** September 5, 2026  
**Status:** Active — P0 execution  
**Priority:** P0

The original blueprint remains intact. Execution order is trust-first: authoritative evidence, pathway architecture, recommendation safety, automated quality gates, then acquisition and scale.

## Current checkpoint

- 26 countries / 52 pathways remain canonical.
- **28 pathways are publishable; 24 remain research-required.**
- Exact legal subroutes have a dedicated `src/data/pathway-subroutes.json` registry and remain outside the canonical 52 until promotion.
- Candidate evidence is bound to exact subroute IDs; parent-pathway evidence cannot satisfy a child-route promotion gate.
- Australia subclass 189 has exact eligibility/process evidence plus an explicit, still-open visa-specific financial verification gap.
- New Zealand SMC now has exact child-route evidence for Points-based, Skilled Work Experience and Trades & Technician; a dedicated Points-based validation matrix is now in place, while occupation/qualification/exception tests and final promotion gates remain open.
- Austria Other Key Workers has exact eligibility, remuneration and process evidence plus a final promotion matrix; applicant-document and points validation remain open.
- Italy 2026 non-seasonal subordinate work has exact quota/process evidence plus a final employer/nulla-osta, sector/country, compensation and applicant-evidence matrix; it remains a temporal quota candidate.
- No umbrella route has been promoted from narrower evidence.
- Latest commits still require fresh CI verification; no unreported green status is assumed.
- Production remains blocked because the authoritative Netlify origin has not been independently verified.

## Latest completed wave

- [x] Added exact child-scoped evidence for Australia 189, all three New Zealand SMC child routes, Austria Other Key Workers and Italy 2026 Flussi.
- [x] Added exact New Zealand Points-based eligibility, financial/wage and process evidence.
- [x] Added route-specific validation matrices for NZ Points-based, Austria Other Key Workers and Italy Flussi 2026.
- [x] Made candidate material gaps explicit and strengthened regression coverage so missing fields cannot silently masquerade as complete evidence.
- [x] Kept Australia 189's unresolved financial-verification issue explicit instead of inventing a proof-of-funds rule.
- [x] Preserved conservative recommendation behavior: research-required subroutes remain non-recommendable until promoted.
- [x] Reconciled sprint/release tracking with the latest exact-route wave.

## P0 remaining

### Evidence / pathway architecture
- [ ] Complete Australia subclass 189 visa-specific financial/material verification; decide promotion only after the complete material field set is authoritative.
- [ ] Complete New Zealand Points-based point-composition tests, occupation/registration matrix and qualification/IQA exception matrix; finish promotion validation for all three SMC child routes.
- [ ] Complete Austria Other Key Workers applicant-document matrix, points calculation tests and promotion validation.
- [ ] Complete Italy employer-side nulla-osta, eligible sector/country treatment, compensation/documentary validation and applicant-side evidence; keep 2026 quota scope separate from generic Italy work authorization.
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
