# Release Verification — 2026-09-13 / continued 2026-09-14

## Current result
**Release remains blocked, but the evidence-gated product core has advanced materially.** The repository has previously passed the Quality Gate, browser smoke and lint; the latest exact-subroute implementation requires fresh verification. Deployment identity, final production verification and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- **28 pathways are publishable; 24 remain research-required.**
- A dedicated exact-subroute registry models narrower legal routes without corrupting the canonical 52-pathway count.
- Candidate evidence resolves to exact subroute IDs rather than inheriting parent-pathway evidence.
- Australia subclass 189 has exact eligibility/process evidence and an explicit financial-verification gap; it remains research_required.
- New Zealand SMC now has exact eligibility, wage/financial and process evidence for Points-based, Skilled Work Experience and Trades & Technician; final occupation/qualification/exception validation remains open.
- Austria Other Key Workers has exact eligibility, remuneration and process evidence and remains research_required pending final material/application validation.
- Italy 2026 non-seasonal subordinate work has exact annual quota/process evidence and conservative financial evidence; employer nulla-osta, eligible sector/country treatment and compensation/documentary validation remain separate gates.
- New Zealand route modeling preserves the distinction between Points-based, Skilled Work Experience, and Trades and Technician pathways and the 24 August 2026 policy changes.
- No broad canonical pathway has been promoted using narrower child-route evidence.
- Regression coverage validates the canonical registry, candidate registry and exact-subroute evidence boundaries.
- A manual production-smoke workflow requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Previous Playwright browser smoke passed all four core page tests.
- Previous Quality Gate passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification.
- Previous lint run passed.
- Repository hardening issue #2 tracks the currently unprotected `main` branch and GitHub's current `private: false` repository state; visibility has not been changed automatically.

## Current verification state
- **Prior Repository Quality Gate:** PASS.
- **Prior Browser smoke:** PASS — 4/4 core page tests.
- **Prior Lint:** PASS.
- **Latest commit CI:** NOT YET VERIFIED — the latest exact-subroute implementation and documentation wave needs fresh workflow verification.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 28 publishable pathways, 24 still research-required.

## Remaining release blockers
1. Complete Australia subclass 189 visa-specific financial/material verification before any promotion decision.
2. Complete New Zealand occupation, qualification and exception validation across the three SMC child routes before promotion.
3. Complete Austria Other Key Workers final application/evidence matrix before promotion.
4. Complete Italy employer/nulla-osta, eligible sector/country treatment, compensation/documentary and applicant-side evidence; preserve annual quota scope.
5. Continue exact-route evidence batches for the remaining research-required pathways, prioritizing legal scope over breadth.
6. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
7. Run deployed-site verification against that verified origin.
8. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
9. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.
10. Re-run and record the complete quality/browser/lint verification against the latest commit.

## Important distinction
Green repository CI and browser smoke prove the source tree and generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
