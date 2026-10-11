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
