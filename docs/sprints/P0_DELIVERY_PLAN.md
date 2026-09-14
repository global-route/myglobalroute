# P0 Delivery Sprint Plan — Production Integrity & Migration Intelligence

**Status:** Active delivery plan  
**Baseline:** 14 September 2026  
**Scope:** Remaining P0 work through Phase 0/1/2 exit  

This plan decomposes the remaining P0 work into delivery sprints. A sprint is not considered complete because implementation exists; its exit gate requires implementation, documentation, and verification. Work may proceed concurrently inside a sprint, but promotion and release gates remain evidence-driven.

## Delivery sequence

| Sprint | Delivery objective | Exit condition |
|---|---|---|
| P0-S1 | Exact pathway closure | All currently active exact-route gates resolved or explicitly blocked by authoritative evidence; no unsupported promotion |
| P0-S2 | Remaining-country evidence closure | Highest-value remaining research-required pathways receive exact material evidence or remain explicitly research-required with documented gaps |
| P0-S3 | Data/recommendation quality gate | Current tree passes data validation, evidence boundary tests, route-safety tests, build and generated-output checks |
| P0-S4 | Release/SEO/browser gate | Browser/E2E, accessibility/SEO smoke and generated route verification complete; production-origin prerequisites documented |
| P0-S5 | Deployment verification & P0 exit | Authoritative Netlify origin verified, production smoke passes, deployed data/deep links/assets/calculator verified, canonical/OG/sitemap restored only against verified origin, CSP audited |

## P0-S1 — Exact Pathway Closure

### Workstreams

- **AU-189:** resolve visa-specific financial/material evidence; preserve explicit null where no universal proof-of-funds requirement is established.
- **NZ Points-based:** complete final promotion validation after existing points-composition, qualification/IQA, registration and effective-date gates.
- **NZ Skilled Work Experience:** complete red/amber matrix, wage threshold/effective-date evidence, direct-relevance and regression coverage.
- **NZ Trades & Technician:** complete occupation/qualification matrix, overseas-vs-NZ qualification-credit distinction and regression coverage.
- **Austria Other Key Workers:** complete applicant-document matrix, points calculation tests and promotion validation.
- **Italy 2026 Flussi:** complete employer/nulla-osta, sector/country quota, compensation/documentary and applicant evidence matrices.

### Definition of done

- Every promoted exact route has exact-scope evidence IDs for eligibility, financial/material requirement and process.
- Parent-pathway evidence cannot satisfy child-route gates.
- Research-required candidates remain non-recommendable until promotion gates pass.
- Regression tests cover the material boundary conditions.
- Documentation and active sprint status are reconciled after each delivery.

## P0-S2 — Remaining-Country Evidence Closure

### Workstreams

- Audit all 24 currently research-required canonical pathways.
- Prioritize by user value, legal stability, evidence availability and recommendation impact.
- Add authoritative primary-source evidence in dated, field-level records.
- Separate umbrella routes from exact legal subroutes.
- Promote only when minimum material-field coverage and evidence IDs are complete.

### Definition of done

- Every remaining research-required pathway has either a completed promotion package or a documented material evidence gap.
- No pathway is promoted solely because a parent route or adjacent subroute has evidence.
- Evidence freshness/review dates are recorded.

## P0-S3 — Data / Recommendation Quality Gate

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

### Workstreams

- Identify the authoritative Netlify site/project and production hostname; never infer or guess it.
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
