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
