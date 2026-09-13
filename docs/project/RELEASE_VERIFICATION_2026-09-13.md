# Release Verification — 2026-09-13

## Current result
**Release remains blocked, but repository quality is now green.** The current `main` tree passes the Quality Gate and browser smoke. Deployment identity, exact-route evidence promotion, production verification and repository hardening still prevent release closure.

## Confirmed
- 26 countries / 52 pathway records remain the canonical migration registry.
- The evidence model requires field-level primary-source support before publication.
- Seventeen pathways are currently promoted to `publishable` with explicit `evidenceIds` after route-level evidence review.
- The current Quality Gate reports 80 evidence records, 32/52 pathways with some evidence, 23/52 materially covered, 17 publishable and 35 research-required.
- The latest evidence wave adds current primary-source material fields for Sweden study, Finland employed-person work, and Luxembourg salaried work; these are not treated as published until pathway scope and evidence IDs agree.
- A manual production-smoke workflow requires an explicitly supplied authoritative `production_url` and does not guess the hostname.
- Deployed-site verification discovers the deployed country/pathway registries and checks every generated country and pathway detail route.
- Playwright browser-smoke run `34734636297` passed all four core page tests against `main`.
- Quality Gate run `34734636320` passed dependency audit, data validation, unit tests, Eleventy build, generated-output verification and SEO/accessibility smoke verification.
- Repository hardening issue #2 tracks the currently unprotected `main` branch and GitHub's current `private: false` repository state; visibility has not been changed automatically.
- P0 issue #3 tracks legal sub-route semantics so route-specific evidence cannot be used to overstate a broad pathway.

## Current verification state
- **Repository Quality Gate:** PASS.
- **Browser smoke:** PASS — 4/4 core page tests.
- **Production deployment verification:** NOT RUN — authoritative Netlify origin is still unverified.
- **SEO absolute-origin restoration:** intentionally deferred until deployment origin is verified.
- **Data completeness:** NOT COMPLETE — 17 publishable pathways, 35 still research-required.

## Remaining release blockers
1. Promote newly fully evidenced pathways only after exact-route/material-field validation; Sweden Study and Luxembourg Salaried Worker are the clean next candidates.
2. Refine broad pathway records before promotion where evidence covers a narrower legal sub-route, including Finland Work/TTOL and Austria Red-White-Red.
3. Add regression tests preventing broad-pathway publication from narrower evidence.
4. Establish the authoritative Netlify site/project and deployed hostname; do not use historical `*.netlify.app` documentation as proof.
5. Run deployed-site verification against that verified origin.
6. Resolve repository hardening issue #2: confirm intended visibility and establish an appropriate `main` protection/check policy.
7. Restore canonical, Open Graph and sitemap absolute URLs only after the authoritative origin is independently verified.

## Important distinction
Green repository CI and browser smoke prove the source tree and local generated site pass automated checks. They are **not** evidence that a particular deployed hostname serves this repository. Production verification remains a separate release gate.
