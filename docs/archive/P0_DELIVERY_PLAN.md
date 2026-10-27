# P0 Delivery Sprint Plan — Production Integrity & Migration Intelligence

> **Handover reconciliation (2026-10-09):** use [`docs/project/HANDOVER_RECONCILIATION_2026-10-09.md`](../project/HANDOVER_RECONCILIATION_2026-10-09.md) for ordered next actions and status rules. Historical SHAs/counts are not current verification.

**Status:** Active delivery plan  
**Baseline:** 14 September 2026  
**Scope:** Remaining P0 work through Phase 0/1/2 exit  
**Handover:** `docs/sprints/HANDOVER.md`  
**Current execution head:** check the live `main` head before each execution wave; historical SHAs in older handovers are not authoritative.

This plan decomposes the remaining P0 work into delivery sprints. A sprint is not considered complete because implementation exists; its exit gate requires implementation, documentation, and verification. Work may proceed concurrently inside a sprint, but promotion and release gates remain evidence-driven.

## Delivery sequence

| Sprint | Delivery objective | Exit condition |
|---|---|---|
| P0-S1 | Exact pathway closure | All currently active exact-route gates resolved or explicitly blocked by authoritative evidence; no unsupported promotion |
| P0-S2 | Remaining-country evidence closure | Highest-value remaining research-required pathways receive exact material evidence or remain explicitly research-required with documented gaps |
| P0-S3 | Data/recommendation quality gate | Current tree passes data validation, evidence boundary tests, route-safety tests, build and generated-output checks |
| P0-S4 | Release/SEO/browser gate | Browser/E2E, accessibility/SEO smoke and generated route verification complete; production-origin prerequisites documented |
| P0-S5 | Deployment verification & P0 exit | Authoritative hosting origin verified, production smoke passes, deployed data/deep links/assets/calculator verified, canonical/OG/sitemap restored only against verified origin, CSP audited |

## P0-S1 — Exact Pathway Closure

### Workstreams

- **AU-189:** resolve visa-specific financial/material evidence; preserve explicit null where no universal proof-of-funds requirement is established.
- **NZ Points-based:** complete final promotion validation after existing points-composition, qualification/IQA, registration and effective-date gates.
- **NZ Skilled Work Experience:** complete final promotion validation after the existing red/amber matrix, wage threshold/effective-date evidence, direct-relevance and regression coverage.
- **NZ Trades & Technician:** complete final promotion validation after the existing occupation/qualification matrix, overseas-vs-NZ qualification-credit distinction and regression coverage.
- **Austria Other Key Workers:** complete applicant-document matrix, points calculation tests and promotion validation.
- **Italy 2026 Flussi:** complete employer/nulla-osta, sector/country quota, compensation/documentary and applicant evidence matrices, then run deterministic promotion validation.

### Definition of done

- Every promoted exact route has exact-scope evidence IDs for eligibility, financial/material requirement and process.
- Parent-pathway evidence cannot satisfy child-route gates.
- Research-required candidates remain non-recommendable until promotion gates pass.
- Regression tests cover the material boundary conditions.
- Documentation and active sprint status are reconciled after each delivery.

## P0-S2 — Remaining-Country Evidence Closure

### Workstreams

- Recompute the canonical registry's pathway statuses on current `main` before defining the research backlog. Current CI-verified registry contains 4 research-required pathways; regenerate the count from current validation before acting.
- Build the remaining worklist from actual current `research_required` records and material evidence gaps, not a copied historical count.
- Prioritize by user value, legal stability, evidence availability, source freshness and recommendation impact.
- Add authoritative primary-source evidence in dated, field-level records.
- Separate umbrella routes from exact legal subroutes.
- Promote only when minimum material-field coverage and evidence IDs are complete.

### Definition of done

- The current research-required count is reconciled from the validated registry and reflected consistently in sprint/handover docs.
- Every remaining research-required pathway has either a completed promotion package or a documented material evidence gap.
- No pathway is promoted solely because a parent route or adjacent subroute has evidence.
- Evidence freshness/review dates are recorded.

## P0-S3 — Data / Recommendation Quality Gate

**Current execution rule:** same-head gates passed at 1284684c18a7fa311cd62c52875b38d62a354a0b (17 suites / 113 tests; Lint and Browser Smoke passed). Re-run after each code change; this is not production verification.

### Workstreams

- Run `npm run data:validate`.
- Run evidence registry, pathway boundary and route recommendation tests.
- Verify canonical registry counts and evidence IDs.
- Run build and generated-output integrity verification.
- Run lint and relevant static checks.
- Reconcile recommendation behavior so research-required and unsupported routes cannot become viable recommendations.

### Definition of done

- Current `main` tree has reproducible validation results recorded in the release verification document.
- Any unavailable CI is recorded as **Not Tested — CI unavailable**.
- No production/data-trust claim is marked passed without verification evidence.

## P0-S4 — Browser / Release Gate

### Workstreams

- Browser/E2E verification of generated country/pathway routes.
- Verify deep links, assets, calculator and route recommendation flows.
- Verify generated SEO metadata, accessibility smoke and sitemap/robots behavior.
- Audit deployed-facing security assumptions before origin-specific changes.

### Definition of done

- Browser verification covers representative country, pathway, calculator and recommendation flows.
- Generated output matches the validated source data.
- Any known browser/runtime defect is resolved or explicitly release-blocking.

## P0-S5 — Deployment Verification & Phase 0 Exit

**Current state:** ACTIVE / BLOCKED until hosting project, authoritative origin and deployed SHA are independently evidenced. No provider should be inferred from historical docs or from the existence of provider-specific function code.

### Workstreams

- Identify the authoritative hosting platform, site/project and production hostname (Netlify, Cloudflare Pages or another provider); never infer or guess.
- Verify deployed commit/version against `main`.
- Run production smoke checks for deep links, assets, data, calculator and recommendation flows.
- Restore canonical, Open Graph and sitemap absolute URLs only after origin verification.
- Audit CSP against the actual third-party inventory.
- Resolve repository hardening issue #2 and establish appropriate `main` protection/check policy.
- Record final release evidence and close the P0 exit gate.

### Definition of done

- Production origin is authoritative and independently verified.
- Production smoke passes against that origin.
- Canonical/OG/sitemap values point to the verified origin.
- CSP reflects actual deployed dependencies.
- Repository hardening is addressed to the appropriate level.
- Phase 0 P0 exit gate is explicitly marked complete in the roadmap and release verification record.

## Carry-forward rule

If a sprint encounters an authoritative-data or external-deployment blocker, do not fabricate completion. Move only the blocked item to the next delivery sprint while completing all independent work in the current sprint. Record the blocker, evidence required, and next verification action.

## Overall P0 exit

P0 is complete only when **P0-S1 through P0-S5** have met their exit conditions and the master roadmap, active sprint and release-verification documents agree. P1 work begins only after this reconciliation.

## P1 Revenue Preparation — allowed concurrently with P0-S5

A dedicated P1 revenue phase is now established at `docs/phase-1/` with the implementation plan and active revenue task. This is preparation, not a P0 release shortcut.

The first implementation task is **REV-01 Measurement Foundation**. It establishes privacy-aware event contracts and revenue attribution before any advertising or partner monetization is activated.

P0-S5 remains authoritative for production release. Advertising activation requires the verified production origin, consent/privacy readiness and actual publisher configuration. Do not assume the Netlify Functions adapter is deployed if the actual host is Cloudflare Pages or another platform.


## Current handoff — 2026-10-11

P0-S3 and source-tree P0-S4 are verified at 1284684c18a7fa311cd62c52875b38d62a354a0b. P0-S5 is active and blocked on provider/domain/deployed-SHA/live-CSP/branch-protection evidence. P1-S1 source refresh: manifest complete, human sign-off open. See ACTIVE_SPRINT.md. Structured requirements and route-quality tests can proceed in parallel. Never mark a phase complete because CI is green.


## Verified status reconciliation — 2026-10-11

Current main SHA: `933ca27d1542083078de104e2ac3550d8fde59c5`; verified implementation baseline: `e7ccd592b703d62867267ddb5573b73a2d2bc0ea`. Quality Gate [PASS](https://github.com/global-route/myglobalroute/actions/runs/38119296014) (17 suites / 113 tests, 0 dependency vulnerabilities), Lint [PASS](https://github.com/global-route/myglobalroute/actions/runs/38119295995), Browser Smoke [PASS](https://github.com/global-route/myglobalroute/actions/runs/38119295980). P0-S3 and source-tree P0-S4 are verified; P0-S5 is still ACTIVE/BLOCKED. Phase 0 is not complete. The exact-route outcome for the current candidate set is four promoted subroutes aligned to canonical pathways, with Australia subclass 189 and Italy Flussi remaining research_required; ongoing regression expansion remains in P1-REQ/P1-ROUTE. Next independent task: P1-S1.2 human source sign-off (owner action). See ACTIVE_SPRINT.md.

## P0-S5 evidence update — 2026-10-11
- GitHub branch metadata reports `main.protected=false`; repository rulesets endpoint is empty. Treat owner-level branch protection and required-check setup as an open release blocker.
- Detailed branch protection could not be read by the current integration (403); the branch response itself reports protection disabled.
- Host/provider project, authoritative production hostname, deployed SHA, live CSP/security headers and production smoke still require owner/provider evidence. Repository configuration alone is not deployment proof.
- Do not close P0-S5 or Phase 0 until all external gates are evidenced and recorded against the intended deployed SHA.


## Public-origin check — 2026-10-11

- Public origin check on 2026-10-11: `https://myglobalroute.com/` serves a visa-consultancy site branded “Global Routes,” with service charges and consultation pages, not the Global Route migration-intelligence application described by this repository. Do **not** assume it is this repo's production origin or set canonicals to it without owner confirmation.
- `https://vrenum.app/` was not accessible through the public-page inspection tool; that is inconclusive and does not prove the host is down.
