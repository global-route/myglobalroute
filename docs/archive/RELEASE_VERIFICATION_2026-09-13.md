# Release Verification — 2026-09-13 / continued 2026-09-14

## Current result
**Release remains blocked, but the evidence-gated product core has advanced materially.** The latest wave adds exact New Zealand Points-based evidence, promotion matrices for New Zealand/Austria/Italy, explicit candidate material gaps and stronger regression coverage. Deployment identity, final production verification, remaining research-required routes and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- **28 pathways are publishable; 24 remain research-required.**
- A dedicated exact-subroute registry models narrower legal routes without corrupting the canonical 52-pathway count.
- Candidate evidence resolves to exact subroute IDs rather than inheriting parent-pathway evidence.
- Australia subclass 189 has exact eligibility/process evidence and an explicit financial-verification gap; it remains research_required.
- New Zealand SMC now has exact eligibility, wage/financial and process evidence for Points-based, Skilled Work Experience and Trades & Technician; route-specific occupation/qualification/exception validation and promotion tests remain open.
- New Zealand Points-based validation now records the 6-point composition model, qualification/IQA evidence, registration evidence and income-point behavior without promoting the umbrella route.
- Austria Other Key Workers has exact eligibility, remuneration and process evidence plus a final promotion matrix; points/document validation remains open.
- Italy 2026 non-seasonal subordinate work has exact annual quota/process evidence plus a final employer/nulla-osta, sector/country, compensation and applicant-evidence matrix; it remains a temporal quota candidate.
- No broad canonical pathway has been promoted using narrower child-route evidence.
- Regression coverage validates the canonical registry, candidate registry, exact-subroute boundaries and explicit candidate material gaps.
- Netlify configuration already contains baseline security headers and static-site cache controls; production origin verification remains separate from source configuration verification.
- A manual production-smoke workflow requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Previous Playwright browser smoke passed all four core page tests.
- Previous Quality Gate passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification.
- Previous lint run passed.
- Repository hardening issue #2 tracks the currently unprotected `main` branch and GitHub's current public repository state; visibility has not been changed automatically.

## Current verification state
- **Prior Repository Quality Gate:** PASS.
- **Prior Browser smoke:** PASS — 4/4 core page tests.
- **Prior Lint:** PASS.
- **Latest commit CI:** NOT YET VERIFIED — latest evidence/test/documentation commits require fresh workflow status.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 28 publishable pathways, 24 still research-required.

## Remaining release blockers
1. Complete Australia subclass 189 visa-specific financial/material verification; do not invent a universal proof-of-funds rule.
2. Complete New Zealand Points-based point-composition tests plus occupation/registration and qualification exception matrices; complete final validation for all three SMC child routes.
3. Complete Austria Other Key Workers applicant-document and points validation.
4. Complete Italy employer/nulla-osta, eligible sector/country treatment, compensation/documentary and applicant-side evidence; preserve annual quota scope.
5. Continue exact-route evidence batches for the remaining research-required pathways, prioritizing legal scope over breadth.
6. Run `npm run data:validate`, unit/evidence tests, build/generated-output checks, SEO/accessibility and lint against the latest tree; record **Not Tested — CI unavailable** where infrastructure prevents execution.
7. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
8. Run deployed-site verification against that verified origin.
9. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.
10. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.

## Important distinction
Green repository CI and browser smoke prove the source tree and generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
