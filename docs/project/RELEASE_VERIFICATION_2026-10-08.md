# Release Verification — 2026-10-08

> **Current-head verification update:** 2026-10-11. This record retains its original filename for continuity; use the latest dated verification section below for current CI status.

## Current result

**Production release remains NO-GO.** The last fully tested code checkpoint is `12cca13f8ddfe3c6976e29b3965435fe1bd25657`; subsequent commits reconcile documentation and the documentation-only head `12cca13f8ddfe3c6976e29b3965435fe1bd25657` also passed all three workflows. The authoritative hosting project/origin and deployed commit have not been independently confirmed. Live monetization remains gated.

## Current-head CI verification — 2026-10-11

All three required source-tree workflows completed successfully on the same tested code SHA, `12cca13f8ddfe3c6976e29b3965435fe1bd25657` (the latest fully tested implementation checkpoint):

- **Quality Gate — PASS:** [run 38103141925](https://github.com/global-route/myglobalroute/actions/runs/38103141925). Includes dependency audit, migration-data validation, unit tests, build, generated-artifact verification and SEO/accessibility checks.
- **Lint — PASS:** [run 38103141947](https://github.com/global-route/myglobalroute/actions/runs/38103141947).
- **Browser Smoke — PASS:** [run 38103141902](https://github.com/global-route/myglobalroute/actions/runs/38103141902). Browser smoke completed successfully after fixing root-relative asset output paths, disabling unconfigured advertising code and preserving the hidden state of inactive ad/partner slots.

These are current source-tree results, not production-host verification. The same three gates also passed on documentation head `12cca13f8ddfe3c6976e29b3965435fe1bd25657`: [Quality Gate](https://github.com/global-route/myglobalroute/actions/runs/38103141925), [Lint](https://github.com/global-route/myglobalroute/actions/runs/38103141947), and [Browser Smoke](https://github.com/global-route/myglobalroute/actions/runs/38103141902); Quality Gate reports 75/75 unit tests. The code SHA includes runtime evidence/provenance guards in the route engine, required-budget enforcement for known funds thresholds, and a hardened deployed-site verifier that compares served registries with checked-out source. Recheck CI if `main` advances.

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
