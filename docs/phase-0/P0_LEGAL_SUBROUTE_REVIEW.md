# P0 — Pathway Legal-Subroute Review

**Status:** Active  
**Priority:** P0  
**Owner:** Global Route engineering/editorial workflow  
**Last reconciled:** 2026-09-12

## Purpose

Prevent a generic pathway record from implying that every applicant follows the same legal route when the authority distinguishes sub-routes, occupations, applicant classes, nationality rules, salary bands, or in-country/out-of-country procedures.

## Current publishable set

Ten pathways currently meet the minimum material evidence gate:

- GB Student visa
- GB Skilled Worker
- IE Study visa
- IE Critical Skills Employment Permit
- DE Study visa
- DE Opportunity Card
- FR Long-stay study visa
- FR Talent Passport
- ES Study visa
- ES International Teleworker

Publishability means the repository has evidence for the minimum material fields. It does **not** mean approval is guaranteed, legal advice is provided, or every sub-route has been exhaustively covered.

## High-risk distinctions to preserve

### United Kingdom
- Student finance differs by London vs outside London and has exemptions/differential-evidence rules.
- Skilled Worker salary depends on occupation going rate and can have lower-salary/transitional routes.
- Therefore the product must display the usual threshold as a baseline, not as a universal salary guarantee.

### Ireland
- Study finance differs by course duration and visa-required vs non-visa-required applicant process.
- Critical Skills eligibility depends on the occupation list and remuneration category; the salary threshold alone is insufficient.
- The product must keep occupation and applicant-class qualification ahead of a simple salary filter.

### Germany / France / Spain
- Existing promoted records have explicit evidence IDs, but further expansion must continue to distinguish visa/sub-route conditions rather than treating country-level pathway labels as universal legal categories.

## Promotion rule

A pathway may move from `research_required` to `publishable` only when:

1. The pathway's legal scope is clear enough for the label used in the product.
2. Required material fields have current primary-source evidence.
3. Evidence IDs point to records belonging to that exact pathway.
4. Exceptions and major sub-route distinctions are either evidenced and represented or explicitly disclosed as out of scope.
5. Unsupported approval rates, generalized costs and generalized timelines remain null.

## Next review queue

Prioritize pathways with the highest product value and highest legal ambiguity:

1. CA Express Entry — split/qualify CEC, FSWP and FSTP rather than presenting one undifferentiated route.
2. CA Study Permit — complete eligibility + financial evidence before promotion.
3. AU Skilled — identify exact skilled-visa class before promotion.
4. AU Student — complete current financial/eligibility evidence.
5. NZ Skilled — distinguish work-to-residence/residence classes before promotion.
6. SE Work/Study — verify current salary/maintenance and applicant-specific conditions.
7. FI Work/Study — convert existing evidence into complete material coverage.
8. NO Work/Study — complete financial/eligibility coverage and distinguish employer/job-offer requirements.

## Critical distinction

**Evidence coverage is not legal completeness.** A route can have two strong primary-source facts and still be unsafe to present as a universal pathway if the authority has multiple legal sub-routes. The product should prefer a narrower, accurately named route over a broader route with misleading simplicity.

## Definition of Done

- Legal scope is explicit.
- Material evidence is complete and current.
- Exceptions are represented or disclosed.
- `evidenceIds` are validated.
- Data validation passes.
- Generated pages expose the evidence trail.
- CI passes after the promotion.
