# Active Sprint — Production Integrity & Intelligence Core

> Canonical cross-handover reconciliation: [`docs/project/HANDOVER_RECONCILIATION_2026-10-09.md`](../project/HANDOVER_RECONCILIATION_2026-10-09.md). Use live repository state and completed workflow results, not historical claims, to update status.

**Started:** September 5, 2026  
**Status:** P0-S5 active; monetization foundations proceeding concurrently  
**Priority:** P0 production integrity  
**Delivery plan:** `docs/sprints/P0_DELIVERY_PLAN.md`  
**Current handover:** `docs/sprints/HANDOVER.md`  
**Latest release record:** `docs/project/RELEASE_VERIFICATION_2026-10-08.md` (filename retained; authoritative current-head update appended 2026-10-11).

## Current product checkpoint

- Canonical migration registry: 26 countries / 56 pathways (recounted directly from the current `src/data/pathways.json` contents during this handover review).
- Current source-file status counts: 52 `publishable`, 4 `research_required`. The four research-required canonical pathways intentionally remain blocked without promotion evidence; their missing evidence IDs must not be filled with placeholders.
- Evidence registry independently recounted from all 29 JSON files: **193 records** (18 in the primary registry and 175 across 28 addenda files).
- Quality Gate, Lint and Browser Smoke all passed on current source head `5a823021e18b6c8fcfa56cd2ad13b0c7bb597820`; this supersedes earlier checkpoint references for source-tree verification.
- Production release remains blocked until the authoritative deployment project/origin and deployed commit are independently verified.

## P0 delivery sprint map

### P0-S1 — Exact Pathway Closure — DOCUMENTED COMPLETE
Exact-route gates were closed or explicitly blocked. Do not promote research-required routes without current, exact-scope primary evidence and passing promotion gates.

### P0-S2 — Remaining-Country Evidence Closure — DOCUMENTED COMPLETE
All previously research-required canonical pathways were audited; four remain explicitly blocked. Continue targeted evidence refresh where policy or source freshness warrants it.

### P0-S3 — Data / Recommendation Quality Gate — VERIFIED AT CURRENT HEAD
Quality Gate passed at `5a823021e18b6c8fcfa56cd2ad13b0c7bb597820`: 17 suites / 108 tests passed, dependency audit found 0 vulnerabilities, 26-country/56-pathway validation passed, build integrity passed, and SEO/accessibility verification checked 168 generated HTML files.

### P0-S4 — Browser / Release Gate — SOURCE-TREE VERIFIED AT CURRENT HEAD
Browser Smoke passed at `5a823021e18b6c8fcfa56cd2ad13b0c7bb597820`; see the current release record. This does not replace production-origin/deployed-SHA verification.

### P0-S5 — Deployment Verification & P0 Exit — ACTIVE / BLOCKED

**Origin conflict requiring resolution:** historical sprint notes identify Cloudflare Pages and `https://vrenum.app`; a public check on 2026-10-08 found that `myglobalroute.com` presents a visa-consultancy/services site rather than this repository's application, while `vrenum.app` could not be retrieved through the available public check. This does not prove hosting ownership or that `vrenum.app` is down. Verify the actual hosting account/project, custom-domain mapping and deployed commit before choosing an origin.

- [ ] Identify authoritative hosting project, production hostname and deployment owner from account/configuration evidence.
- [ ] Verify the deployed commit matches the intended `main` head.
- [ ] Resolve origin/service availability before running `npm run deploy:verify`.
- [ ] Run production smoke for deep links, assets, country/pathway data, calculator and route recommendations.
- [ ] Restore canonical/Open Graph/sitemap absolute URLs only against the verified origin.
- [ ] Audit CSP and third-party inventory against the actual deployed environment.
- [ ] Resolve repository hardening issue #2, including a suitable `main` branch protection/check policy and an explicit visibility decision.
- [ ] Reconcile roadmap, active sprint and release verification; explicitly record P0 exit only after all gates pass.

## P1 Revenue Readiness Lane — CONCURRENT, NOT A RELEASE BYPASS

The strategy and documentation are complete. Implementation now includes privacy-aware analytics consent, configuration-driven placement hosts, a governed empty commercial registry, registry validation and a fail-closed commercial redirect.

- [x] Revenue architecture, AdSense strategy, placement map, MRR model, metrics, affiliate/partner strategy and monetization roadmap documented.
- [x] Measurement and consent foundation implemented.
- [x] Ad/partner slot configuration and page hosts wired.
- [x] Commercial registry validation and redirect expiry/security checks implemented.
- [x] Re-run current quality/browser workflows and record exact results against the latest verified implementation SHA; exact current run links are recorded in the release verification document.
- [x] Harden evidence provenance date validation (`retrievedAt`, `reviewAfter`, optional `effectiveDate`) and add valid/invalid calendar-date tests. Code and unit coverage are implemented; Quality Gate passed at `542bba327342e699bd2800a1865a1bd4c6bb8099`.
- [ ] Verify the commercial redirect adapter is deployed and runtime-compatible with the confirmed hosting platform; the current Netlify Function implementation is not evidence that a Netlify deployment exists.
- [ ] Provider-specific click/revenue reconciliation after a real provider is selected.
- [ ] AdSense activation only after origin, CMP/privacy and publisher gates pass.
- [ ] Qualified-lead foundation only after consent, minimization, delivery and reconciliation design.

## Definition of Done

Implementation + documentation + verification. Never mark a production or data-trust task passed without evidence. If CI is unavailable, record **Not Tested — CI unavailable**. Monetization must not influence evidence status, pathway eligibility or route ranking.

## Handover reconciliation gate

Before accepting this sprint handover, refresh the current `main` SHA, inspect the latest completed Actions jobs, recompute pathway/evidence counts, and reconcile the P0-S2 backlog. The 2026-10-09 reconciliation record is authoritative for ordered actions and status vocabulary.


Current-head update (2026-10-11): Quality Gate, Lint and Browser Smoke all passed on `12cca13f8ddfe3c6976e29b3965435fe1bd25657` (75/75 unit tests). The release record contains exact workflow links and scope. Evidence registry count independently reconciled to 193 records across 29 JSON files. Route recommendations now require pathway-level publishable status, non-empty evidence IDs and an HTTPS source, while no longer treating aggregate country-level `evidence_required` status as a veto on an exact-pathway record. The Find My Route UI no longer collects budget/income/experience values that the schema cannot evaluate; business routes are marked not covered, and arbitrary `Any` rankings are suppressed. The deployed-site verifier now compares served country/pathway registries with checked-out source and checks application identity, critical assets, and direct 2xx routes. P0-S5 remains blocked on authoritative hosting-project/domain/deployment evidence, live-origin smoke, CSP review and repository hardening. Latest route-engine/UI/E2E commits need a completed green workflow set before marking current-head verification passed.


## P1-REQ — Structured pathway requirements (implementation started, verification pending)

Added `src/data/pathway-requirement-schema.json` as the machine-readable field contract and `scripts/pathway-requirements.js` as its validator. The data gate now validates declared pathway requirements against field-level evidence, exact pathway scope, source URL, jurisdiction, effective date, units and currency. Supported fields include minimum funds, monthly income, experience years, language test, qualification, job offer, admission offer and sponsorship.

**Important limitation:** no numerical requirement values were bulk-filled from the existing narrative evidence. Current pathway records remain unstructured until each exact threshold can be transcribed and checked against its cited primary-source record. Unknown values must remain absent, not zero or unrestricted. Money matching must not convert currencies without separately dated exchange-rate evidence.

Regression tests cover real versus impossible dates, exact-pathway provenance, evidence field mismatches, currency/period validation, and monthly-income unit semantics. The latest commits still require a completed green Quality Gate, Lint and Browser Smoke set on the same SHA before verification can be claimed.


### Requirement schema guardrails — 2026-10-11

The structured pathway-requirements validator now reads its allowed fields/types from `src/data/pathway-requirement-schema.json` and is applied to both canonical pathways and exact subroutes. It requires exact-route evidence (no inheritance), expected evidence field, matching HTTPS source and jurisdiction, real effective dates, explicit money currency/period, correct units, and rejects evidence past its `reviewAfter` date from backing a structured match. The schema covers money, monthly income, experience, language tests, qualifications, job offers, admission offers and sponsorship.

No thresholds were guessed or bulk-converted from narrative evidence. Current source-tree verification for the newest implementation is pending; the latest Quality Gate, Lint and Browser Smoke must pass on one SHA before this lane can be called verified.


### Verification update — 2026-10-11, commit `c224696bdc4487dd17a7b9b28304f4ad25012f34`

- Quality Gate PASS: [run 38105471129](https://github.com/global-route/myglobalroute/actions/runs/38105471129).
- Lint PASS: [run 38105471109](https://github.com/global-route/myglobalroute/actions/runs/38105471109).
- Browser Smoke PASS: [run 38105471079](https://github.com/global-route/myglobalroute/actions/runs/38105471079).
- The browser test now checks the DOM option's native `disabled` property directly; the previous Playwright matcher failed despite the rendered option carrying `disabled`. All three checks passed on the same SHA.
- This verifies source-tree checks only. P0-S5 remains blocked on the authoritative hosting project/origin, deployed SHA, production smoke, CSP, and owner decision on repository visibility/branch policy. Structured requirements are still a schema/validator foundation; real threshold data remains unknown unless sourced and entered with exact-route evidence.


## P1-REQ-READINESS — Requirement coverage reporting (implemented; current-head CI pending)

Added `scripts/report-requirement-readiness.js` and the `npm run requirements:readiness` command. The report summarizes how many canonical pathways declare structured requirement records, per-field requirement counts, and evidence-record counts by evidence field; it lists pathways without structured requirements for controlled research prioritization.

This is an inventory/reporting aid, **not** evidence that a pathway is eligible and not a substitute for manual source verification. It deliberately does not infer numeric thresholds from narrative claims, populate unknown values, promote pathways, or treat evidence-record volume as proof of coverage. Regression coverage is in `tests/requirement-readiness.test.js`.

**Next:** run the readiness report and current Quality Gate/Lint/Browser Smoke. Use the report to prioritize exact-route research and only transcribe a requirement when its exact-scope authoritative source and evidence record support the value, units, jurisdiction and effective date.


## Current-head reconciliation — 2026-10-11 (authoritative update)

- **Current `main` SHA:** `f35291921b780b387a36e16f3be0bc52cd000c97`.
- **Quality Gate PASS:** [run 38105758475](https://github.com/global-route/myglobalroute/actions/runs/38105758475). The job reports **14/14 suites and 97/97 tests passing**, data validation passing for 26 countries, 56 pathways and 193 evidence records, and the requirement-readiness report included in `npm run verify`.
- **Lint PASS:** [run 38105758492](https://github.com/global-route/myglobalroute/actions/runs/38105758492).
- **Browser Smoke PASS:** [run 38105758360](https://github.com/global-route/myglobalroute/actions/runs/38105758360).
- These runs are source-tree checks only. Production remains **NO-GO** until hosting project, origin and deployed SHA are independently established.
- **Freshness work is now a first-class task:** latest validation emits a warning that the country dataset is 36 days old and flags multiple evidence records as due for review. Revalidate each flagged source against the exact route/claim; do not automatically extend `reviewAfter`, change statuses, or infer current rules from the retrieval date.
- **Structured requirement coverage remains incomplete:** the readiness report is now part of verification, but adding a schema/validator does not mean pathway data is populated. Continue filling fields only when backed by current, route-scoped evidence. Unknown values remain unknown.
- **Subroute architecture warning:** four subroutes are not `research_required`; any canonical promotion must still use the canonical pathway architecture and full evidence gates. Do not mistake this warning alone for proof that those records are publishable.

### Next execution order

1. Refresh and triage every overdue evidence record; record source access/date and exact claim disposition, preserving stale/unknown values when source evidence cannot be revalidated.
2. Add tests that prove overdue evidence cannot support current structured requirements or route matching, and that freshness status is surfaced distinctly from missing evidence.
3. Improve readiness reporting to distinguish “no structured requirement declared,” “declared and evidenced,” “evidence overdue,” and “invalid declaration”; never label missing coverage as zero requirements or a pass.
4. Reconcile the four subroute status warnings and stale sprint/handover counts against current registry contents.
5. Continue P0-S5 hosting/deployed-SHA discovery only from account/configuration evidence; no guessed production origin.


### Requirement-readiness reporting improvement — 2026-10-11

The readiness report now breaks down pathways without structured requirements by status, reports pathway counts by status, and lists evidence records whose `reviewAfter` is earlier than the validation date. The report is diagnostic only: it does not alter review dates, bless stale evidence, or manufacture requirement values. Regression tests cover overdue/today/future boundaries and status breakdown. Validation of this change is pending until all workflows complete on the same current `main` SHA.

## Current-head update — 2026-10-11

- Latest code head before the CI-readiness change: `739b4121b2ddb3460d1ed52b171cd89fcd80f046`; Quality Gate, Lint and Browser Smoke passed on that SHA: [Quality Gate](https://github.com/global-route/myglobalroute/actions/runs/38106462155), [Lint](https://github.com/global-route/myglobalroute/actions/runs/38106462131), [Browser Smoke](https://github.com/global-route/myglobalroute/actions/runs/38106462148).
- Added `npm run requirements:readiness` as an explicit Quality Gate step in `.github/workflows/quality.yml` (commit `c4afaae4a7f695eea19d8bed8a2930194bd0e06a`). This executes the existing report for structured pathway-requirement coverage and evidence review dates in CI; it does not refresh evidence or invent requirements.
- CI for `c4afaae4a7f695eea19d8bed8a2930194bd0e06a` is pending at handover time. Do not mark this SHA green until all three workflows complete successfully.
- Data truth remains a separate blocker: the last completed validator reports 26 countries, 56 pathways, 193 evidence records, 52 publishable and 4 research-required pathways, with three subroute-status warnings. The report/validator passing means structural validation passed; it does not mean evidence freshness is current or all routes are production-ready.
- Next actions: confirm the new CI results; use the readiness report to build a route-scoped evidence refresh queue; keep routes blocked where official current evidence cannot be independently confirmed; continue P0-S5 production-host/deployed-SHA verification only with provider-account evidence.


## Structured requirement schema — first evidence-backed record (2026-10-11)

- Added `minimum_annual_salary` as a distinct money field; annual salary must not be conflated with monthly income. Validator requires an annual period and a non-empty caveat note.
- Added structured requirements to `GB-skilled-worker` only where existing exact-pathway evidence supports the claim: approved-employer job offer, plus the £41,700 annual baseline with explicit warning that the occupation going rate may be higher and exceptions/transitional rules apply.
- No thresholds were inferred for the other 55 pathways. No UI eligibility scoring is enabled from this first record; it is a data-schema increment and readiness signal, not an eligibility decision.
- The cited records have a review deadline of 2026-10-12. If not refreshed with current source evidence by then, structured-requirement validation should fail closed rather than silently continue using stale values.
- Tests added for annual-unit enforcement and mandatory caveats. Run the full Quality Gate, Lint and Browser Smoke on the resulting code SHA before marking this increment verified.


## Evidence refresh — Skilled Worker structured requirements (2026-10-11)

- Rechecked the two exact-route GOV.UK sources supporting the `GB-skilled-worker` structured job-offer and annual-salary requirements on 2026-10-11. The official salary guidance still states the usual baseline is £41,700/year **or the occupation-specific going rate, whichever is higher**, with specified lower-threshold and transitional cases.
- Updated only the two cited evidence records' `retrievedAt` / `reviewAfter` and source-review methodology; retained their effective date and threshold caveats rather than conflating retrieval date with legal effective date.
- Review deadline moved to 2026-11-10 after direct source recheck. This is a review cadence, not a guarantee that rules cannot change before then. Other evidence records remain untouched and their freshness status must be triaged separately.
- Current `main` before this refresh: e3bc6ee0b56178b3f9b4a1fb2b6616ee28edb47e. Quality Gate, Lint and Browser Smoke all passed on that SHA: [Quality Gate](https://github.com/global-route/myglobalroute/actions/runs/38109950355), [Lint](https://github.com/global-route/myglobalroute/actions/runs/38109950365), [Browser Smoke](https://github.com/global-route/myglobalroute/actions/runs/38109950372). These are source-tree checks, not production verification.


## Evidence review-date reporting hardening — 2026-10-11

The readiness report now separates evidence with a valid but overdue `reviewAfter` date from records with missing or invalid/impossible review dates. This closes a reporting blind spot where malformed calendar dates could disappear from the due queue. The report is diagnostic; the strict data validator remains the authoritative structural gate. Regression tests cover missing dates, impossible dates and a valid overdue date. CI for the evidence refresh commit is still running; this follow-on change must be verified on its own head.


## Current-head verification and evidence refresh — 2026-10-11

- Latest `main` before this increment: 4ecdbf0e0abd411b59b546251ea1569cef43a998. Quality Gate, Lint and Browser Smoke all passed on that SHA: [Quality Gate](https://github.com/global-route/myglobalroute/actions/runs/38110277073), [Lint](https://github.com/global-route/myglobalroute/actions/runs/38110277041), [Browser Smoke](https://github.com/global-route/myglobalroute/actions/runs/38110277115).
- Source-review refreshes were limited to claims actually checked against current official sources: Canada study funds (including the 2026-09-01 living-funds schedule), Australia SkillSelect EOI rules, Australia processing-priority directions effective 2026-09-19, and Sweden's current salary threshold and transition rules. No country aggregate cost/timeline/approval-rate fields were populated.
- CSP hardening adds `base-uri 'self'`, `object-src 'none'` and `upgrade-insecure-requests` to both deployment config copies. Regression test verifies the two CSP policies stay in sync and the required restrictions remain present.
- Cloudflare Workers Build check is green for 4ecdbf0e0abd411b59b546251ea1569cef43a998 ([build check](https://github.com/global-route/myglobalroute/runs/114384348240)); this is evidence that the repository is connected to a Cloudflare production build, not proof of the public origin or deployed content. The authoritative host and public deployed SHA still need direct verification.
- Repository visibility is confirmed public. GitHub's branch-protection endpoint returned `403 Resource not accessible by integration`; branch protection cannot be asserted or changed with current permissions. Keep issue #2 open until owner-level settings are inspected.


## Cross-country evidence freshness inventory — 2026-10-11

Added `npm run evidence:freshness`, a deterministic inventory over the primary evidence registry and all JSON addenda. It groups evidence by country and classifies each record as current, overdue, missing a review date, or carrying an invalid/impossible review date. The report preserves source URLs and route scope to support an auditable refresh queue. It is diagnostic only: no dates are extended, no claims are auto-approved, and no unknown country aggregates are filled. It is now included in `npm run verify` and covered by tests.

**Queue policy:** first recheck records that support structured requirements; next refresh high-impact eligibility/financial claims for pathways currently presented as publishable; then review policy-update and process claims. If an official source cannot be confirmed, keep the record stale and mark the affected claim for review rather than changing its date. Continue country by country until the 26-country evidence inventory is reconciled.


## Production verifier transport guard — 2026-10-11

The deployed-site verification script now rejects `http://` origins before attempting any fetch, aligning production verification with the HTTPS-only security baseline. The verifier still requires an independently confirmed origin and exact registry match; no hostname is guessed from repository history or deployment provider names.


## CI wiring correction — 2026-10-11

Review of the completed Quality Gate log found that the new evidence-freshness inventory was included in package.json's verify script but the GitHub Actions workflow runs individual steps and had not invoked the new command. The Quality Gate step now explicitly runs both `npm run requirements:readiness` and `npm run evidence:freshness`. This is a verification-wiring fix; the prior run's 17 suites / 108 tests passed, but did not yet execute the new freshness inventory in CI. All workflows must pass again on the new head.


## Evidence refresh batch 2 — Sweden and Norway — 2026-10-11

After the freshness inventory reported 193 records (171 current, 22 overdue, none missing or malformed), this batch refreshed only claims whose exact official pages were reviewed: Sweden higher-education maintenance, student work limits, and post-study job-seeker permit; Norway study-permit eligibility and study-finance scope. The Sweden work limit is now explicitly stated as 15 hours/week for bachelor's/master's permits granted on/after 2026-06-11, with official exceptions retained. Sweden 2026 study maintenance remains SEK 10,656/month, with reductions/family additions where applicable. No generic threshold was promoted for Norway because amounts vary by programme type and duration.


## Evidence refresh batch 3 — Austria, Finland and Portugal — 2026-10-11

Refreshed only claims checked against current official sources: Austria student work rights and graduate job-search extension; Finland study eligibility and student financial maintenance (including duplicate financial evidence alignment); and Portugal's digital-nomad residence document checklist. Finland's current guidance confirms EUR 800/month and EUR 9,600 for a study period of at least one year, with tuition and qualifying institutional-support exceptions handled separately. Portugal's document checklist was not used to infer an income threshold.


## Evidence refresh batch 4 — Japan, Luxembourg, New Zealand and Sweden — 2026-10-11

Refreshed five overdue claims after reviewing official sources: Japan's general Student and Engineer/Specialist residence-status scope, Luxembourg's salaried-worker authorisation sequence, New Zealand's SMC/work-to-residence changes effective 2026-08-24, and Sweden's 2026 work-permit rule changes including salary transitions, health insurance and employer-condition grounds. The Luxembourg student work-rights record remains overdue because the available English guidance was last updated in 2023 and the current student-work detail was not independently revalidated; it has not been silently extended.


## Evidence refresh batch 5 — Luxembourg student work/post-study rules — 2026-10-11

Closed the remaining overdue Luxembourg student work-rights record after reviewing the current official French Guichet.lu page updated 2026-10-01. The record now distinguishes the general 15-hour weekly average limit (with listed exceptions) from the narrow post-study simplified route for qualifying graduates of a five-year university cycle. The older English page's 2023 update date was not treated as evidence of current rules; the newer official French page was used instead.


## Evidence freshness queue triage — 2026-10-11

The CI inventory on the pre-Luxembourg-refresh head reported 193 records: 189 current, 4 overdue, 0 missing review dates and 0 invalid dates. Subsequent source-reviewed updates refreshed Luxembourg student work/post-study conditions and the duplicate Swedish student maintenance record. The remaining unverified overdue claims are Norway job-offer confirmation and Portugal's generic work-route process index. Direct fetch of the official UDI page returned HTTP 403 and the AIMA index timed out; therefore those review dates were deliberately not extended. Recheck them through an accessible official source or preserve them as overdue. The current head must rerun the freshness inventory to confirm the new count.


## Current-head verification — 2026-10-11 — `5a823021e18b6c8fcfa56cd2ad13b0c7bb597820`

- Quality Gate PASS: [run 38112189841](https://github.com/global-route/myglobalroute/actions/runs/38112189841). 17/17 suites and 108/108 tests passed; dependency audit reported 0 vulnerabilities; generated build-integrity check passed; SEO/A11y check covered 168 generated HTML files.
- Lint PASS: [run 38112189847](https://github.com/global-route/myglobalroute/actions/runs/38112189847).
- Browser Smoke PASS: [run 38112189856](https://github.com/global-route/myglobalroute/actions/runs/38112189856).
- Evidence freshness: 193 records across 26 countries; 193 current, 0 overdue, 0 missing review dates and 0 invalid review dates.
- Canonical pathways: 56 total; 52 publishable, 4 research_required. All 26 country-level aggregate records remain evidence-gated; this does not imply validated universal costs, timelines or approval rates.
- Structured requirement coverage remains limited; only exact-source, exact-pathway rules may be added. The UK Skilled Worker salary figure remains a baseline with documented exceptions and must not be used as a standalone eligibility verdict.
- Production release remains NO-GO: authoritative production hostname and deployed SHA/content are not confirmed; live CSP/security headers and owner-level main branch protection remain unverified.
