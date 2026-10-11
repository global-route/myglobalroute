# Active Sprint — Production Integrity & Migration Intelligence

> **Execution adjustment — 2026-10-11:** Test-writing, test-running and CI execution are paused by user direction. Continue non-test implementation, data/schema and documentation work; do not claim new changes are validated. The last fully verified source-tree SHA remains `89998ab5410aceb6dede8e997dae0b836d3b4d92`.

**Reconciled:** 2026-10-11 | **Branch:** `main`
**Release:** **NO-GO**
**Latest verified implementation SHA:** `9ed09f07e9e7b73b62884da02fc406ccdb40f10a`
**Latest verified source-tree SHA:** `89998ab5410aceb6dede8e997dae0b836d3b4d92`
**Earlier CI workflow follow-up SHA:** `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`

## Non-test delivery update — 2026-10-11

- Added evidence-linked structured declarations for the UK Skilled Worker maintenance balance and approved sponsor, the UK Student route minimum age, and Australia's 65-point Skilled EOI threshold.
- Extended the schema for maintenance balances, minimum age and points-based thresholds. Australia remains `research_required`; 65 points does not guarantee an invitation and does not close subclass-specific financial evidence gaps.
- Structured requirement inventory: 16 declarations across 6 pathways; 50/56 pathways have no structured declarations. Missing declarations remain unknown.
- Implemented separate analytics and advertising consent choices, a persistent Privacy settings control, local preference persistence where available, and an ad-placement gate tied to advertising consent. Updated privacy copy to explain limits and remaining review needs.
- Corrected homepage/About copy that overstated approval-rate coverage and universal evidence gating; unsupported rates and costs are now described as unpublished or unverified.
- Per user direction, testing and CI execution are paused; these changes are **not validated** and do not change the release NO-GO decision.

## Current decision

Continue source-trust and route-quality work, but do not release. Quality Gate, Lint and Browser Smoke pass on the latest implementation SHA `9ed09f07e9e7b73b62884da02fc406ccdb40f10a`; earlier data and CI-workflow checkpoints are retained below as history. Production identity/security and human source-review sign-off remain unresolved.

## Latest full source-tree checkpoint — 2026-10-11

Source-tree SHA: `89998ab5410aceb6dede8e997dae0b836d3b4d92`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703290
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703239
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703394

Quality Gate verified the source-review manifest synchronization on this exact tree. Russia's Nigeria-mission document is a source candidate only; direct PDF retrieval returned 502, which is not evidence the source is down. Human sign-off and target-market jurisdiction confirmation remain open. Release remains NO-GO.

## Latest implementation checkpoint — 2026-10-11

**Implementation SHA:** `9ed09f07e9e7b73b62884da02fc406ccdb40f10a`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394933
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394817
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394822

Route-engine hardening rejects malformed declared numeric thresholds rather than coercing them to zero. Regression tests cover funds threshold below/equal/above boundaries, malformed thresholds, no-match recommendations and caller result limits. Missing requirements remain unknown. This is source-tree verification only; P0-S5 remains open and release remains NO-GO.

## Previous verified checkpoint — 2026-10-11

**Implementation/data SHA:** `95f960c081367305dea0144034d48a4ab7892426`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112572
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112454
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112490

**CI workflow follow-up SHA:** `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`
- Quality Gate PASS (includes manifest synchronization): https://github.com/global-route/myglobalroute/actions/runs/38144183966
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183952
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183936

Quality Gate output on the verified implementation/data SHA:
- 26 countries, 56 pathways, 193 evidence records.
- 0 dependency vulnerabilities.
- Country-source manifest synchronized: 26 unique registry entries.
- 18 test suites / 122 tests passed.
- Build integrity passed; SEO/accessibility checks passed across 168 generated HTML files.

**Documentation/status checkpoint SHA:** `27bcfd93780cf42416612c7f6486735f6c0ceae1` — Quality Gate [PASS](https://github.com/global-route/myglobalroute/actions/runs/38145214511), Lint [PASS](https://github.com/global-route/myglobalroute/actions/runs/38145214551), Browser Smoke [PASS](https://github.com/global-route/myglobalroute/actions/runs/38145214463), all on the same documentation-only SHA. This does not replace the implementation/data SHA above or verify production.

## Current task board

| ID | Task | Status | Remaining exit condition |
|---|---|---|---|
| P0-S1 | Exact-subroute closure | **Complete with explicit blocked candidates** | AU subclass 189 and Italy Flussi remain research-required until exact-scope evidence closes their gaps |
| P0-S2 | Audit pathway evidence gaps | **Audit complete; source work ongoing** | Maintain evidence freshness; do not promote based on record count |
| P0-S3 | Data/recommendation quality gate | **Source-tree verified** | Keep validation and tests green as data changes |
| P0-S4 | Browser/source-tree gate | **Source-tree verified** | CI browser smoke is not proof of production behavior |
| P0-S5 | Deployment verification / Phase 0 exit | **Active / blocked** | Confirm authoritative host, deployed SHA, live CSP/security headers, production smoke and owner branch rules |
| P1-S1.1 | Machine-readable country manifest | **Complete** | Generator, manifest, tests and CI synchronization check are committed |
| P1-S1.2 | Country source-anchor review | **Outcomes recorded; sign-off open** | 25/26 entries have a relevant official page or alternative inspected; Russia now has Nigeria-specific official mission material located, but target-market jurisdiction confirmation and human sign-off remain required |
| P1-S1.3 | Dataset metadata reconciliation | **Open** | Keep `dataset.asOf=2026-09-05` until review is signed off and exceptions are accepted |
| P1-S1.4 | Same-SHA verification/handover | **Implementation verified** | CI passes on the two SHAs above; do not treat this as production verification |
| P1-REQ | Structured requirements | **Open / active** | 16 declarations across 6 of 56 pathways; 50 remain unstructured |
| P1-ROUTE | Recommendation quality | **Active; threshold hardening and boundary/no-match regressions verified at `9ed09f0`** | Continue stale/mismatched evidence, alternatives, missing-input and broader requirement-boundary tests |
| P1-SEO | Editorial/technical SEO | **Open** | Canonical origins wait for confirmed production host; clean legacy metadata/links |
| P1-PRIV | Privacy/compliance/accessibility | **Implementation advanced; open** | Consent UI and separate analytics/ad choice implemented (unvalidated); complete legal review, data/retention inventory, deployed-provider review and real-browser accessibility checks |
| P1-REV | Monetization readiness | **Foundations only; not live** | Provider approval, consent, disclosures and reconciliation before activation |

## Country source-review result

> **P1-S1 checkpoint clarification (2026-10-11):** The manifest and first-pass source review are implemented; 26/26 outcomes are recorded and 25 relevant official pages/alternatives were inspected. This does not close P1-S1: human sign-off, Russia mission/jurisdiction confirmation, any accepted exception record, and safe `dataset.asOf` reconciliation remain open. Do not treat AI-assisted landing-page inspection as pathway-level evidence.


- Registry baseline: 26 countries, 56 pathways (52 publishable / 4 research-required), 193 evidence records.
- Manifest: `docs/data/country-source-review-manifest.json`; generated from `src/data/countries.json`.
- All 26 anchors have explicit outcomes. 25 relevant official pages/alternatives were inspected; all machine-assisted observations still require human sign-off.
- Luxembourg official third-country immigration alternatives are logged, although the registered root still redirects to a generic citizens page. Consider a more direct country anchor after human sign-off.
- Official Russian Embassy in Nigeria tourist-visa material was located after the initial pass. It is a candidate for Nigeria-specific source navigation, not proof for other target applicant jurisdictions or route-level claims; human sign-off remains open.
- Austria and Czechia country source URLs were updated to more relevant official government pages; their retrieval dates alone were changed.
- `dataset.asOf=2026-09-05` is intentionally unchanged. Do not infer approval rates, costs, timelines or pathway eligibility from country-level landing pages.

## P0-S5 external release gate

GitHub branch metadata reports `main.protected=false` and the repository rulesets endpoint is empty. The detailed branch-protection endpoint returned 403 to this integration. Owner-level branch protection/required-check evidence is therefore still missing.

Public-origin checks:
- `https://myglobalroute.com/` serves a visa-consultancy site branded “Global Routes,” not this repository's migration-intelligence application. Do not treat it as the production origin without owner confirmation.
- `https://vrenum.app/` could not be inspected by the public-page tool; that is inconclusive, not proof of outage.

Still required from the hosting owner/provider:
1. Authoritative provider/project/custom-domain record and production hostname.
2. Deployed commit SHA and comparison of live registries/assets against source.
3. Live CSP and security-header evidence.
4. Production route/calculator smoke results on the confirmed host.
5. Main branch protection / required-check configuration.

## Execution order

1. Resolve P0-S5 owner/provider evidence in parallel.
2. Complete human sign-off for P1-S1; confirm Russia source jurisdiction and decide whether to replace Luxembourg's generic anchor.
3. Keep `dataset.asOf` unchanged until source review is signed off and exceptions are formally accepted.
4. Expand requirements only where exact-pathway evidence supports values and scope; unknown remains unknown.
5. Continue route-quality, SEO, privacy/accessibility and monetization foundations without making unsupported production claims.

**Sprint status: NOT COMPLETE. Phase 0 and Phase 1 remain incomplete. Release remains NO-GO.**
