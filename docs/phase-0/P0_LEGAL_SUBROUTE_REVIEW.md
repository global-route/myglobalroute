# P0 — Pathway Legal-Subroute Review

**Status:** Active  
**Priority:** P0  
**Owner:** Global Route engineering/editorial workflow  
**Last reconciled:** 2026-09-14

## Purpose

Prevent a generic pathway record from implying that every applicant follows the same legal route when the authority distinguishes sub-routes, occupations, applicant classes, nationality rules, salary bands, or in-country/out-of-country procedures.

## Current publishable set

Twenty pathways currently meet the minimum material evidence gate and have explicit `evidenceIds`:

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
- CA Study Permit
- AU Student visa (Subclass 500)
- NZ Fee Paying Student Visa
- AT Student residence permit
- PT Study residence visa
- PT Remote Work / Digital Nomad
- CH Work permits
- FI Residence permit for an employed person (TTOL)
- SE Residence permit for higher-education studies
- LU Salaried worker

Publishability means the repository has evidence for the minimum material fields. It does **not** mean approval is guaranteed, legal advice is provided, or every sub-route has been exhaustively covered.

## Latest exact-route evidence wave

The 2026-09-13/14 evidence wave added exact material-field coverage for:

- Finland employed-person (TTOL) work
- Sweden higher-education study
- Luxembourg salaried-worker work
- Norway higher-education study — evidence added; promotion pending pathway-record update and CI confirmation

These records are handled separately from broader route families. Evidence completeness and legal-route completeness remain separate gates.

## High-risk distinctions to preserve

### United Kingdom
- Student finance differs by London vs outside London and has exemptions/differential-evidence rules.
- Skilled Worker salary depends on occupation going rate and can have lower-salary/transitional routes.
- Therefore the product must display the usual threshold as a baseline, not as a universal salary guarantee.

### Canada
- Express Entry is an umbrella system covering CEC, FSWP and FSTP; it must not be represented as one undifferentiated legal route.
- Study permits have federal requirements plus Quebec-specific financial/attestation considerations.
- The current CA Study Permit evidence is sufficient for the minimum fields, but product copy must preserve the federal/Quebec distinction.

### Australia
- Subclass 500 has genuine-student, document-checklist and financial-capacity conditions that can vary by applicant.
- Skilled migration includes multiple subclasses and invitation/nominations; `AU-skilled` remains intentionally unpromoted until the exact visa class is narrowed.

### New Zealand
- Fee Paying Student Visa has clear eligibility and funds requirements and is now promoted at exact-route scope.
- Skilled residence has multiple pathways and route-specific wage/work-experience rules; the generic `NZ-skilled` label requires narrowing before promotion.

### Austria
- The Red-White-Red Card is an umbrella family. Current evidence concerns the Other Key Workers sub-route, so the broader `AT-red-white-red` record remains unpromoted until its scope is narrowed.

### Finland
- The current evidence is specifically for the employed-person (TTOL) residence permit. The pathway record has therefore been narrowed to that exact route before publication.

### Norway
- The current new evidence is specifically for higher-education study permits and documents the 2026 maintenance requirement. `NO-study` should be narrowed/updated to higher-education scope before promotion rather than implying every study-permit category.

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
6. Data validation passes on the corrected evidence tree.
7. CI passes after the promotion.

## Next review queue

Prioritize pathways with the highest product value and highest legal ambiguity:

1. NO Study — narrow/update the record to higher-education study before promotion.
2. CA Express Entry — split/qualify CEC, FSWP and FSTP rather than presenting one undifferentiated route.
3. AU Skilled — identify exact skilled-visa class before promotion.
4. NZ Skilled — narrow the generic label to a specific SMC/work-to-residence class before promotion.
5. AT Red-White-Red — narrow to Other Key Workers or add evidence covering the other intended sub-routes.
6. SE Work — complete exact-route material coverage.
7. FI Study — complete material coverage.
8. NO Work — complete financial/eligibility coverage and distinguish employer/job-offer requirements.
9. IT Study/Work and JP Student/Engineer — continue primary-source batches with exact route semantics.

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
