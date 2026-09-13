# Release Verification — 2026-09-13

## Current result
**Release remains blocked, but repository quality is green and the evidence-gated product core has advanced.** The current `main` tree passes the Quality Gate and browser smoke. Deployment identity, final production verification and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- Nineteen pathways are now promoted to `publishable` with explicit `evidenceIds` after route-level evidence review.
- The current evidence tree contains 80 records; the latest wave enabled exact-route promotion for Sweden Study, Finland employed-person (TTOL) Work and Luxembourg Salaried Worker.
- The pathway policy now explicitly requires the pathway record scope to match the evidence scope.
- A manual production-smoke workflow requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Playwright browser-smoke run `34734636297` passed all four core page tests against `main`.
- Quality Gate run `34734742638` passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification after the latest docs/data/test wave.
- Lint run `34734742628` passed.
- Repository hardening issue #2 tracks the currently unprotected `main` branch and GitHub's current `private: false` repository state; visibility has not been changed automatically.
- P0 issue #3 tracks legal sub-route semantics so route-specific evidence cannot be used to overstate a broad pathway.

## Current verification state
- **Repository Quality Gate:** PASS.
- **Browser smoke:** PASS — 4/4 core page tests.
- **Lint:** PASS.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 19 publishable pathways, 33 still research-required.

## Remaining release blockers
1. Refine broad pathway records where evidence covers a narrower legal sub-route, especially Austria Red-White-Red and New Zealand Skilled.
2. Continue the next primary-source evidence batches for the remaining research-required pathways.
3. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
4. Run deployed-site verification against that verified origin.
5. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
6. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.

## Important distinction
Green repository CI and browser smoke prove the source tree and generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
