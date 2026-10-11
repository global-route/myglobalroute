# Release Verification — 2026-10-08

> **Current-head verification update:** 2026-10-11. This record retains its original filename for continuity; use the latest dated verification section below for current CI status.

## Current result

**Production release remains NO-GO.** Implementation/data SHA `95f960c081367305dea0144034d48a4ab7892426` and CI workflow follow-up SHA `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5` both passed Quality Gate, Lint and Browser Smoke on their respective same SHA. These are source-tree checks only; authoritative hosting project/origin, deployed commit and live security headers remain unverified.

## Latest implementation same-SHA CI verification — 2026-10-11

Implementation SHA: `9ed09f07e9e7b73b62884da02fc406ccdb40f10a`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394933
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394817
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394822

The route engine fails closed on malformed declared numeric thresholds; tests now cover below/equal/above funds boundaries, malformed thresholds, no-match recommendations and result limits. This source-tree checkpoint does not resolve the external production gate. Host/deployed SHA/live CSP and security headers/production smoke/owner-level branch rules remain unverified. Release remains NO-GO.

## Previous same-SHA CI verification — 2026-10-11

**Implementation/data SHA:** `95f960c081367305dea0144034d48a4ab7892426`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112572
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112454
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112490

**CI workflow follow-up SHA:** `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`
- Quality Gate PASS (includes country-manifest synchronization): https://github.com/global-route/myglobalroute/actions/runs/38144183966
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183952
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183936

Quality Gate output: 26 countries, 56 pathways, 193 evidence records; 0 dependency vulnerabilities; manifest synchronized; 18 suites / 122 tests passed; build integrity passed; SEO/accessibility checks passed across 168 generated HTML files. These are source-tree checks, not production verification.

Country-source review: outcomes recorded for all 26 anchors; 25 relevant official pages/alternatives inspected. Russia requires mission-jurisdiction confirmation and human sign-off remains open. `dataset.asOf=2026-09-05` remains unchanged. Structured requirement coverage is 12 declarations across 5/56 pathways; 51 remain unstructured. Release remains **NO-GO** until P0-S5 and source-review sign-off gates are closed.

## Historical implementation details from earlier checkpoints

## Implemented since the earlier checkpoint

- Strict ISO calendar-date validation for dataset/evidence dates and corresponding unit tests.
- Route recommendations now fail closed when a publishable pathway lacks non-empty evidence IDs or an HTTPS source URL; positive `minFunds` thresholds require a valid supplied budget.
- Deployed-site smoke now compares served country/pathway registries with the checked-out source and checks application identity, critical assets, and direct 2xx responses.
- Explicit Eleventy passthrough mapping for CSS and JavaScript paths referenced by pages.
- Fail-closed legacy advertising loader when a real approved publisher ID is absent.
- Correct publisher-ID validation and CSS rules that keep unconfigured ad/partner placements hidden.
- Active sprint and handover documentation updated to record the fixes and remaining release blockers.

## Production origin — unresolved

Historical documents refer to Cloudflare Pages and `https://vrenum.app`; `myglobalroute.com` has also appeared in project context and has presented a different visa-consultancy/services site in an earlier public check. These references do not establish the authoritative host, ownership, or deployed commit. Do not guess the origin.

Required evidence:
1. Hosting account/project and custom-domain mapping.
2. Current deployment record and deployed commit SHA.
3. Reachable origin serving the expected application and data.

## Remaining P0-S5 release gates

- [ ] Confirm authoritative hosting project, production hostname and deployment owner.
- [ ] Verify the deployed commit matches intended `main` head.
- [ ] Run `npm run deploy:verify` against the confirmed origin.
- [ ] Verify representative country/pathway deep links, assets, JSON registries, calculator and route recommendations.
- [ ] Restore canonical/OG/sitemap absolute URLs only against the verified origin.
- [ ] Audit CSP and third-party inventory against the deployed environment.
- [ ] Resolve repository hardening issue #2: suitable branch protection/check policy and an explicit visibility decision.
- [ ] Record P0 exit only after all production gates pass.

## Monetization state

- Measurement, consent, placement registry and fail-closed advertising foundations are implemented; source-tree CI is green on the SHA above.
- Live advertising is not active; publisher, origin, privacy/CMP and provider gates remain.
- No live affiliate partner or provider-verified revenue is established.
- Qualified-lead collection remains blocked until consent, data minimization, secure delivery and reconciliation are designed and verified.
- Monetization must never influence pathway eligibility, evidence status or recommendation ranking.

## Route-matching schema audit — 2026-10-11

The code review found that all 26 country-level records remain evidence_required while 52 canonical pathways are marked publishable with evidence IDs and HTTPS source URLs. The route engine previously coupled pathway eligibility to country aggregate status, causing all routes to be suppressed. The engine now separates pathway-level evidence from aggregate country-level cost/timeline/rate fields and never infers the latter from the former.

A second mismatch was that the UI collected budget, monthly income and experience although none of the 56 pathway records had machine-readable minFunds, minMonthlyIncome, or minExperienceYears fields; no pathway has a structured language field either. The UI no longer collects these ignored values, marks business coverage as unavailable (0 business pathways), and labels outputs as goal matches rather than eligibility predictions. An E2E regression test was added.

**Verification of this latest code change is pending** until Quality Gate, Lint and Browser Smoke complete successfully on the same new SHA. The earlier green checkpoint does not verify code committed after it.

## Release decision

**NO-GO for production release and live monetization until the production and provider gates above are evidenced.**


## Requirement-schema implementation update — 2026-10-11

A machine-readable requirement schema and validator have been added. Declared pathway requirements must have explicit types/units, jurisdiction, valid effective dates, HTTPS source URLs and evidence IDs whose records match the exact pathway and expected evidence field. Money values require ISO-like three-letter currency codes and explicit periods; minimum monthly income specifically requires a monthly period. Unknowns are not interpreted as zero or as a pass, and country aggregate data cannot substitute for exact-pathway evidence.

No numeric thresholds have been populated from narrative claims. This avoids false precision while the exact requirement values are reviewed. New regression tests have been added; **current-head verification remains pending** until all required workflows pass on the same SHA.


### Requirement schema guardrails — 2026-10-11

The structured pathway-requirements validator now reads its allowed fields/types from `src/data/pathway-requirement-schema.json` and is applied to both canonical pathways and exact subroutes. It requires exact-route evidence (no inheritance), expected evidence field, matching HTTPS source and jurisdiction, real effective dates, explicit money currency/period, correct units, and rejects evidence past its `reviewAfter` date from backing a structured match. The schema covers money, monthly income, experience, language tests, qualifications, job offers, admission offers and sponsorship.

No thresholds were guessed or bulk-converted from narrative evidence. Current source-tree verification for the newest implementation is pending; the latest Quality Gate, Lint and Browser Smoke must pass on one SHA before this lane can be called verified.


## Latest source-tree verification — 2026-10-11 — `c224696bdc4487dd17a7b9b28304f4ad25012f34`

All three required workflows completed successfully on this exact `main` head:

- **Quality Gate — PASS:** [run 38105471129](https://github.com/global-route/myglobalroute/actions/runs/38105471129)
- **Lint — PASS:** [run 38105471109](https://github.com/global-route/myglobalroute/actions/runs/38105471109)
- **Browser Smoke — PASS:** [run 38105471079](https://github.com/global-route/myglobalroute/actions/runs/38105471079)

The E2E test now asserts the browser's native disabled property for the uncovered Business option. These checks establish source-tree integrity only. Production remains **NO-GO** until the authoritative hosting project/origin and deployed SHA are verified, production smoke and CSP review pass, and issue #2's branch/visibility decisions are resolved with the project owner. The structured requirement schema and evidence gates are implemented, but pathway-level numeric thresholds remain unpopulated where exact authoritative evidence has not been captured.


## Authoritative current-head verification — 2026-10-11

Current `main`: `f35291921b780b387a36e16f3be0bc52cd000c97`.

- **Quality Gate PASS:** [run 38105758475](https://github.com/global-route/myglobalroute/actions/runs/38105758475). Job log: migration data validation passed (26 countries, 56 pathways, 193 evidence records); **14/14 test suites and 97/97 tests passed**; dependency audit, build, generated-output verification and SEO/accessibility smoke steps completed.
- **Lint PASS:** [run 38105758492](https://github.com/global-route/myglobalroute/actions/runs/38105758492).
- **Browser Smoke PASS:** [run 38105758360](https://github.com/global-route/myglobalroute/actions/runs/38105758360).
- `npm run verify` now includes `requirements:readiness`. This report measures declared structured requirements; it does not create authoritative eligibility data or imply complete pathway coverage.
- Data validation emitted warnings that the country dataset is 36 days old and multiple evidence records are due for review. These are not CI failures, but they are material freshness risks. Revalidate source claims before using them for current recommendations; do not merely move review dates forward.
- Four subroutes are flagged because their status is not `research_required`. Review them against canonical pathway promotion rules; do not treat the warning as independent proof of publishability.

**Release decision remains NO-GO.** Passing source-tree checks does not establish the deployed origin/SHA, authoritative migration facts, full structured requirements coverage, privacy/compliance readiness or live-provider approvals. The hosting project/domain mapping and deployed commit remain unverified.


### Readiness report freshness visibility — 2026-10-11

The requirement-readiness report now emits status-level structured-requirement coverage and a sorted list/count of evidence records past `reviewAfter`, using the same strict-before-date boundary as data validation. It is a reporting change only; no evidence was refreshed and no requirement values were inferred. Regression coverage was added for overdue, due-today and future review dates. Current-head workflow verification is pending.


## Authoritative latest verification — 2026-10-11 — `5a823021e18b6c8fcfa56cd2ad13b0c7bb597820`

The following workflow runs all completed successfully on the exact current `main` SHA:

- **Quality Gate — PASS:** [run 38112189841](https://github.com/global-route/myglobalroute/actions/runs/38112189841). 17/17 suites and 108/108 tests passed; dependency audit found 0 vulnerabilities; data validation passed; build integrity passed; SEO/A11y verification checked 168 generated HTML files.
- **Lint — PASS:** [run 38112189847](https://github.com/global-route/myglobalroute/actions/runs/38112189847).
- **Browser Smoke — PASS:** [run 38112189856](https://github.com/global-route/myglobalroute/actions/runs/38112189856).

Evidence freshness output: 193 records / 26 countries; 193 current, 0 overdue, 0 missing review dates, 0 invalid review dates. The previously overdue Norway and Portugal process records were refreshed in commit `5a823021e18b6c8fcfa56cd2ad13b0c7bb597820`; the Portugal index claim is deliberately narrow because direct retrieval of the AIMA index timed out, and its route-specific requirements remain separately sourced.

Current source registry: 56 pathways, 52 publishable and 4 research_required; all 26 country aggregate records remain `evidence_required` for aggregate cost/timeline/rate claims. Requirement schema coverage is not equivalent to complete structured eligibility coverage.

**Release decision remains NO-GO.** These results verify repository source and build output, not the public production deployment. The canonical hostname, deployed SHA/content equality, live CSP/security headers, and owner-level branch protection/ruleset are still not independently verified. Do not infer a production hostname from the worker name or historical docs.


## Latest source-tree verification — 2026-10-11 — `6aebb9b0feddecbcf5b8c635e5648d934eb34453`

All three required workflows passed on the exact same current `main` head:

- **Quality Gate — PASS:** [run 38112873368](https://github.com/global-route/myglobalroute/actions/runs/38112873368). 17/17 test suites and 110/110 tests passed; dependency audit reported 0 vulnerabilities; data validation, generated build integrity and SEO/A11y verification passed (168 generated HTML files).
- **Lint — PASS:** [run 38112873379](https://github.com/global-route/myglobalroute/actions/runs/38112873379).
- **Browser Smoke — PASS:** [run 38112873378](https://github.com/global-route/myglobalroute/actions/runs/38112873378).

The validator now checks that a `promoted` exact subroute maps to a matching publishable canonical pathway and has the required exact-scope evidence fields. Regression coverage was added. Registry counts remain 26 countries, 56 pathways (52 publishable / 4 research_required), and 193 evidence records. Evidence freshness is 193 current / 0 overdue / 0 missing / 0 invalid review dates. However, `src/data/countries.json` still has `dataset.asOf=2026-09-05` and CI warns that the aggregate dataset metadata is 36 days old. Do not bump `asOf` without reviewing the 26 source records; all aggregate approval-rate, cost and timeline fields remain null.

Structured requirements remain limited: 2 of 56 canonical pathways have structured requirements (2 UK Skilled Worker fields plus 7 Canada study family-size-specific thresholds); 54 have none. Do not infer absence of legal requirements from absence of structured records, and do not populate thresholds without exact-scope official evidence and conditional-rule modelling.

**Production remains NO-GO.** The public hostname, deployed content SHA equality, live CSP/security headers and owner-level main-branch rules remain unverified. Configuration identity needs owner confirmation because `wrangler.jsonc` names Worker `myglobalroute`, while the observed Cloudflare Workers Builds service was labelled `globalroute`; `netlify.toml` is also present but does not prove Netlify is the active host.


## Latest source-tree verification — 2026-10-11 — `6569cfd5dba4e519d34461ec47ba14ed7d10e5ca`

All three required workflows passed on the exact same current `main` head:

- **Quality Gate — PASS:** [run 38113089851](https://github.com/global-route/myglobalroute/actions/runs/38113089851). 17/17 suites and 113/113 tests passed; dependency audit reported 0 vulnerabilities; data validation, build integrity and SEO/A11y verification passed (168 generated HTML files).
- **Lint — PASS:** [run 38113089859](https://github.com/global-route/myglobalroute/actions/runs/38113089859).
- **Browser Smoke — PASS:** [run 38113089864](https://github.com/global-route/myglobalroute/actions/runs/38113089864).

The structured-requirement model now validates condition metadata and includes seven Canada study living-expense thresholds for family sizes 1–7 outside Quebec for applications on/after 2026-09-01. The amounts are CAD 23,448; 29,192; 35,888; 43,572; 49,419; 55,736; 62,054 per year. They exclude tuition and transportation; Quebec has separate rules and the incremental amount for family sizes above seven is not modelled as a fixed threshold. Official source: [IRCC proof of financial support](https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html).

Structured coverage is 12 declarations across 5/56 pathways; 51 pathways remain without structured requirements. This is a limited first tranche, not complete eligibility modelling. The 193-record evidence inventory has 0 overdue/missing/invalid review dates, but CI still warns that country dataset `asOf=2026-09-05` is 36 days old; do not bump it without a 26-source review. Production remains NO-GO for the hostname/deployed SHA, live CSP and branch-protection reasons already recorded.


## P1-S1 and P0-S5 update — 2026-10-11
- Manifest committed and synchronized from registry. 26/26 outcomes recorded; 25 relevant official pages/alternatives inspected; Luxembourg has an official alternative recorded; Russia remains blocked pending jurisdiction confirmation. Human sign-off required.
- Austria and Czechia registry URLs updated; their source retrieval dates reflect the review date. `dataset.asOf` remains `2026-09-05`.
- Public GitHub branch metadata reports `main` unprotected and no repository rulesets. Detailed protection endpoint returned 403 to this integration.
- No authoritative production host/deployment record provided. Do not infer host, deployed SHA, live CSP or smoke results from repository config alone.
- Final SHA must pass Quality Gate, Lint and Browser Smoke. Release remains **NO-GO**.


## Public-origin check — 2026-10-11

- Public origin check on 2026-10-11: `https://myglobalroute.com/` serves a visa-consultancy site branded “Global Routes,” with service charges and consultation pages, not the Global Route migration-intelligence application described by this repository. Do **not** assume it is this repo's production origin or set canonicals to it without owner confirmation.
- `https://vrenum.app/` was not accessible through the public-page inspection tool; that is inconclusive and does not prove the host is down.


## Structured requirement coverage update — 2026-10-11
Three exact-pathway declarations were added and regression-tested for UK Student, New Zealand Fee Paying Student and Ireland Critical Skills. Current coverage: 12 declarations across 5 of 56 pathways; 51 remain unstructured. This does not close P1-REQ or change the NO-GO release decision.



## Same-SHA verification evidence — 2026-10-11

**Implementation/data SHA tested:** `95f960c081367305dea0144034d48a4ab7892426`
- Quality Gate — PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112572
- Lint — PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112454
- Browser Smoke — PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112490

Quality Gate output: 26 countries, 56 pathways, 193 evidence records; 0 dependency vulnerabilities; country-source manifest synchronized; 18 test suites and 122 tests passed; build integrity passed; SEO/accessibility checks passed across 168 generated HTML files.

**CI configuration follow-up SHA:** `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`
- Quality Gate — PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183966 (includes the explicit country-manifest synchronization step).
- Lint — PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183952
- Browser Smoke — PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183936

The application/data implementation is verified on one SHA. The later commit only added the explicit manifest check to the Quality Gate workflow and changelog; all three workflows are now green on that later SHA. Do not mark P1-S1, P0-S5, or any phase complete based on these CI results alone.


## Verification reconciliation — 2026-10-11
- Current verified implementation/data SHA: `95f960c081367305dea0144034d48a4ab7892426`; Quality Gate, Lint and Browser Smoke passed on this exact SHA.
- CI workflow follow-up SHA: `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`; Quality Gate, Lint and Browser Smoke also passed on this exact SHA. Run links are recorded in `docs/sprints/ACTIVE_SPRINT.md` and this release record.
- Structured requirements now total 12 declarations across 5/56 pathways; 51 remain unstructured. P1-REQ remains open.
- Country-source review outcomes are recorded for all 26 anchors; relevant official pages/alternatives inspected for 25. Russia requires mission-jurisdiction confirmation for the target applicant market, and human sign-off remains required.
- Release remains **NO-GO** until P0-S5 external production evidence and human source-review sign-off are complete.
