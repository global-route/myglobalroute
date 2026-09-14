# P0 Handover — Production Integrity & Migration Intelligence

**Handover baseline:** 14 September 2026  
**Branch:** `main`  
**Baseline commit:** `41d3c1337fa26c0a13512b5d65d1a20f9cb57b71`  
**Active sprint:** P0-S1 — Exact Pathway Closure  
**Canonical registry:** 26 countries / 52 pathways  
**Current publishability:** 28 publishable / 24 research-required

## Purpose

This is the execution handover for the current P0 sprint. It preserves the original product blueprint and records the exact state from which the next operator should continue. Do not treat documentation completion as implementation or verification completion.

## Start here

1. Work from `main` and verify the current head before making changes.
2. Run/check the data and test quality gates against the current tree.
3. Finish P0-S1 open exact-route gates before broadening the evidence audit, while allowing independent P0-S2/S3 work to proceed concurrently where safe.
4. Update `docs/sprints/ACTIVE_SPRINT.md` after meaningful delivery waves.
5. Never promote a route without exact, current, authoritative evidence and passing promotion tests.
6. Never infer a financial requirement when the authoritative source does not establish one; record an explicit evidence gap instead.
7. Production remains blocked until the authoritative Netlify project/site and hostname are independently identified and verified.

## P0-S1 — Exact Pathway Closure

### Completed

- NZ Skilled Work Experience Red/Amber matrix.
- NZ Trades & Technician occupation/qualification/work-experience matrix.
- NZ Skilled Work Experience occupation, effective-date wage and direct-relevance evidence.
- NZ Trades & Technician occupation/qualification evidence.
- NZ exact-route regression guards and evidence-boundary tests.
- Exact-subroute validator support.
- Removal of superseded duplicate evidence batches.
- Restoration of canonical CA Study eligibility evidence.
- NZ Points-based eligibility, financial/process evidence.
- NZ Points-based occupation/registration and qualification/IQA exception evidence.
- NZ points-composition regression coverage.

### Open — execute next

1. **Australia 189:** resolve visa-specific financial/material verification. Keep the requirement explicitly null if no universal visa-specific proof-of-funds rule can be established from authoritative sources.
2. **NZ Points-based:** perform final promotion validation; do not canonicalize merely because material evidence is now complete.
3. **NZ Skilled Work Experience:** perform final promotion validation against exact candidate evidence and current effective-date rules.
4. **NZ Trades & Technician:** perform final promotion validation, including occupation and qualification-credit distinctions.
5. **Austria Other Key Workers:** complete applicant-document matrix, points regression, and final authority/process validation.
6. **Italy 2026 Flussi:** complete employer/nulla-osta, sector/country quota, compensation/documentary and applicant evidence matrices, then run deterministic promotion validation.

### S1 exit gate

All six open workstreams must either pass their promotion gate or have an explicit authoritative-data blocker recorded. Research-required candidates remain non-recommendable until promoted.

## P0-S2 — Remaining-Country Evidence Closure

After or alongside S1, audit all **24 research-required canonical pathways**. Prioritize by:

- user value;
- legal stability;
- primary-source availability;
- recommendation impact;
- evidence freshness and reviewability.

For each route, produce one of two outcomes:

- complete exact promotion package; or
- explicit material evidence gap with the authoritative evidence needed to close it.

Do not use parent-pathway or adjacent-subroute evidence to satisfy a narrower route.

## P0-S3 — Data / Recommendation Quality Gate

Required checks:

- `npm run data:validate`;
- evidence-registry and exact pathway-boundary tests;
- recommendation-safety tests;
- canonical registry/evidence-ID reconciliation;
- build and generated-output verification;
- lint/static checks;
- CI status recording.

If CI is unavailable, record **Not Tested — CI unavailable** rather than implying a pass.

## P0-S4 — Browser / Release Gate

Verify representative generated flows:

- country and pathway deep links;
- assets and generated route output;
- calculator;
- recommendation flow and research-required safety behavior;
- SEO metadata;
- accessibility smoke;
- sitemap and robots output.

Resolve release-critical runtime defects or document the exact blocker and dependency.

## P0-S5 — Deployment Verification & P0 Exit

Still open:

- identify the authoritative Netlify site/project and production hostname — never guess;
- verify deployed commit against `main`;
- run production smoke for deep links, assets, data, calculator and recommendations;
- restore canonical/OG/sitemap absolute URLs only after origin verification;
- audit CSP against actual deployed third-party inventory;
- resolve repository hardening issue #2 and establish an appropriate `main` protection/check policy;
- reconcile roadmap, active sprint and release verification before closing P0.

## Critical distinctions

### Canonical pathway vs legal subroute

The registry remains 26 countries / 52 canonical pathways. Exact legal subroutes are evidence candidates until explicitly promoted. Do not expand the canonical registry simply because a child route has been researched.

### Parent evidence vs child evidence

Evidence must be scoped to the exact route it proves. Shared law or shared program family does not make parent evidence valid for a narrower child route.

### Material completeness vs promotion

A candidate can have complete material evidence and still remain `research_required` until the final promotion validation, registry reconciliation, tests and documentation gates pass.

### Data validation vs production verification

A passing local validator/test suite does not establish that Netlify deployed the verified commit or that production routes behave correctly. Production verification is a separate P0-S5 gate.

### CI status vs implementation status

If Actions is unavailable, continue independent implementation and mark affected verification as **Not Tested — CI unavailable**. Never convert unavailable verification into a pass.

## Recommended execution order

**Concurrent:** S1 evidence closure + S2 audit preparation + S3 test/validator work.  
**Then:** S4 browser/release verification once generated output is stable.  
**Finally:** S5 authoritative deployment verification and P0 exit reconciliation.

## Handover completion rule

A handover is complete only when the active sprint document, delivery plan, roadmap and release-verification record agree on the same current head and task status. The next operator should update the documents immediately after each meaningful commit wave rather than allowing task status to drift.
