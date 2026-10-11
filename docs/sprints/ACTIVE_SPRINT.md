# Active Sprint — Production Integrity & Intelligence Core

> Canonical cross-handover reconciliation: [`docs/project/HANDOVER_RECONCILIATION_2026-10-09.md`](../project/HANDOVER_RECONCILIATION_2026-10-09.md). Use live repository state and completed workflow results, not historical claims, to update status.

**Started:** September 5, 2026  
**Status:** P0-S5 active; monetization foundations proceeding concurrently  
**Priority:** P0 production integrity  
**Delivery plan:** `docs/sprints/P0_DELIVERY_PLAN.md`  
**Current handover:** `docs/sprints/HANDOVER.md`  
**Latest release record:** `docs/project/RELEASE_VERIFICATION_2026-10-08.md`

## Current product checkpoint

- Canonical migration registry: 26 countries / 56 pathways (recounted directly from the current `src/data/pathways.json` contents during this handover review).
- Current source-file status counts: 52 `publishable`, 4 `research_required`; four records have no evidence IDs. The Quality Gate's migration-data validation passed on the recorded current code SHA.
- Evidence registry independently recounted from all 29 JSON files: **193 records** (18 in the primary registry and 175 across 28 addenda files).
- P0-S1 through P0-S4 have prior passing source-tree evidence. Latest route-matching code changes are awaiting a completed green workflow set on the new code head; do not treat the earlier `12cca13f8ddfe3c6976e29b3965435fe1bd25657` pass as verification of subsequent code.
- Production release remains blocked until the authoritative deployment project/origin and deployed commit are independently verified.

## P0 delivery sprint map

### P0-S1 — Exact Pathway Closure — DOCUMENTED COMPLETE
Exact-route gates were closed or explicitly blocked. Do not promote research-required routes without current, exact-scope primary evidence and passing promotion gates.

### P0-S2 — Remaining-Country Evidence Closure — DOCUMENTED COMPLETE
All previously research-required canonical pathways were audited; four remain explicitly blocked. Continue targeted evidence refresh where policy or source freshness warrants it.

### P0-S3 — Data / Recommendation Quality Gate — VERIFIED AT CURRENT RECORDED SHA
Quality Gate passed at `12cca13f8ddfe3c6976e29b3965435fe1bd25657`, including data validation, 75/75 unit tests, build integrity, generated-output verification and SEO/accessibility checks. Re-run if `main` advances.

### P0-S4 — Browser / Release Gate — SOURCE-TREE VERIFIED AT CURRENT RECORDED SHA
Browser Smoke passed at `12cca13f8ddfe3c6976e29b3965435fe1bd25657`; see the linked run in the release record. This does not replace production-origin/deployed-SHA verification.

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
- [x] Re-run current quality/browser workflows and record exact results against explicit `main` SHA `12cca13f8ddfe3c6976e29b3965435fe1bd25657`; Quality Gate, Lint and Browser Smoke all passed.
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
