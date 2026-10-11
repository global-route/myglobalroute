# Changelog

Dates reflect repository commits; a changelog entry is not release approval.

## 2026-10-11 — Same-SHA verification after source-review follow-up

Source-tree SHA: `89998ab5410aceb6dede8e997dae0b836d3b4d92`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703290
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703239
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703394

- Quality Gate confirmed country-source manifest synchronization and passed the unit-test/build checks on this exact source-tree SHA.
- Documentation consistency cleanup: replaced the obsolete README directory tree with the current repository layout and explicitly labeled superseded Austria/NZ task bodies and checklists as historical, not actionable.
- Russia follow-up: official Russian Embassy-in-Nigeria visa material was located in indexed search results; direct PDF retrieval returned 502 and is not treated as proof the source is down. This candidate does not close mission coverage across the target applicant market or human sign-off.
- The route-engine code change remains at implementation SHA `9ed09f07e9e7b73b62884da02fc406ccdb40f10a`; all three required workflows passed on that SHA as well.
- P0-S5 remains externally blocked; release remains NO-GO.


## 2026-10-11 — Route threshold hardening and regression coverage

- Route recommendations now fail closed when a declared funds, monthly-income or experience threshold is malformed; an absent threshold remains unknown and is not synthesized as zero.
- Added regression cases for funds-threshold boundaries, malformed declared thresholds, no-match outcomes and recommendation limits.
- Implementation SHA: `9ed09f07e9e7b73b62884da02fc406ccdb40f10a` — [Quality Gate PASS](https://github.com/global-route/myglobalroute/actions/runs/38145394933), [Lint PASS](https://github.com/global-route/myglobalroute/actions/runs/38145394817), [Browser Smoke PASS](https://github.com/global-route/myglobalroute/actions/runs/38145394822), all on the same SHA.
- P1-ROUTE remains open for further stale/mismatched evidence, alternatives and broader requirement-boundary coverage. P1-REQ remains open; missing requirement declarations remain unknown.
- P1-S1 Russia follow-up: located official Russian Embassy-in-Nigeria tourist-visa material. It does not establish coverage for all target applicant jurisdictions or verify pathway requirements; human sign-off remains open.
- P0-S5 remains externally blocked. These CI results do not establish the production host, deployed SHA, live security headers or owner-level branch rules; release remains NO-GO.


## 2026-10-11 — Migration-data integrity and status reconciliation

- Added machine-readable 26-country source-review manifest, generator/check command and regression tests.
- Added route recommendation tests for missing country records, research-required routes, absent structured requirements and unknown thresholds.
- Expanded structured requirements with evidence-backed declarations for UK Student admission offer, New Zealand Fee Paying Student funds (with duration/funding caveats), and Ireland Critical Skills job offer; coverage is 12 declarations across 5/56 pathways.
- README no longer claims Phase 2 complete or describes approval rates and monetization as live capabilities.
- Updated Austria and Czechia source anchors to current official government entry points; their retrieval dates alone were updated.
- Added country-manifest check to standard `npm run verify`; superseded task documents now explicitly identify historical checklists.
- 26/26 country anchors have outcomes; relevant official pages/alternatives inspected for 25. Luxembourg official alternatives are recorded; Russia needs mission-jurisdiction confirmation. Human sign-off required.
- `dataset.asOf` remains `2026-09-05`. No pathway-specific claims inferred from country landing pages.
- GitHub API reports `main` unprotected and no repository rulesets. Production host, deployed SHA and live CSP remain unverified. Release **NO-GO**.


## CI evidence note — 2026-10-11
The implementation/data SHA `95f960c081367305dea0144034d48a4ab7892426` passed Quality Gate, Lint and Browser Smoke on the same SHA (run links recorded in the active sprint and release verification docs). The follow-up CI configuration SHA `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5` passed Quality Gate, Lint and Browser Smoke on the same SHA. Release remains **NO-GO** due external production and human source-review gates.


## Verification reconciliation — 2026-10-11
- Current verified implementation/data SHA: `95f960c081367305dea0144034d48a4ab7892426`; Quality Gate, Lint and Browser Smoke passed on this exact SHA.
- CI workflow follow-up SHA: `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`; Quality Gate, Lint and Browser Smoke also passed on this exact SHA. Run links are recorded in `docs/sprints/ACTIVE_SPRINT.md` and this release record.
- Structured requirements now total 12 declarations across 5/56 pathways; 51 remain unstructured. P1-REQ remains open.
- Country-source review outcomes are recorded for all 26 anchors; relevant official pages/alternatives inspected for 25. Russia requires mission-jurisdiction confirmation for the target applicant market, and human sign-off remains required.
- Release remains **NO-GO** until P0-S5 external production evidence and human source-review sign-off are complete.

## Current execution checkpoint — 2026-10-11

- P1-S1.1 is implemented: `docs/data/country-source-review-manifest.json` is generated from `src/data/countries.json`; `npm run data:country-manifest` checks synchronization and the check is included in `npm run verify`/Quality Gate.
- P1-S1.2 has recorded outcomes for all 26 country anchors. Relevant official pages or alternatives were inspected for 25; Russia remains blocked on mission/jurisdiction confirmation. The observations are AI-assisted and require human sign-off. Luxembourg's official alternative is recorded, but its registered root remains a generic redirect.
- P1-S1.3 remains open: keep `dataset.asOf=2026-09-05` unchanged until human review/sign-off and documented exception acceptance. Country landing pages do not verify pathway-specific requirements.
- Structured requirements remain 12 declarations across 5/56 pathways; 51 pathways have no structured declarations. Unknown stays unknown. Route-quality test coverage has improved, but P1-REQ and P1-ROUTE remain open.
- Same-SHA source-tree evidence remains recorded for implementation/data SHA `95f960c081367305dea0144034d48a4ab7892426` and CI workflow SHA `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`; run links are in `docs/sprints/ACTIVE_SPRINT.md`. These checks do not verify production.
- P0-S5 remains blocked on owner/provider evidence: authoritative host, deployed SHA, live CSP/security headers, production smoke, and branch-protection/required-check proof. Release remains **NO-GO**.


## Documentation checkpoint CI — 2026-10-11

The documentation-only checkpoint `27bcfd93780cf42416612c7f6486735f6c0ceae1` passed all three required source-tree workflows on that exact SHA:
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145214511
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145214551
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145214463

This is a documentation-only checkpoint, not a new implementation/data SHA and not production verification. The implementation/data SHA remains `95f960c081367305dea0144034d48a4ab7892426`; the manifest-check CI follow-up SHA remains `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`. P0-S5 and human source-review sign-off remain open; release stays **NO-GO**.
