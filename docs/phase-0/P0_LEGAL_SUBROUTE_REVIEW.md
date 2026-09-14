# P0 — Pathway Legal-Subroute Review

**Status:** Active  
**Priority:** P0  
**Owner:** Global Route engineering/editorial workflow  
**Last reconciled:** 2026-09-14

## Purpose

Prevent a generic pathway record from implying that every applicant follows the same legal route when the authority distinguishes sub-routes, occupations, applicant classes, nationality rules, salary bands, or in-country/out-of-country procedures.

## Current publishable set

**Twenty-seven pathways** currently meet the minimum material evidence gate and have explicit `evidenceIds`:

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
- FI Residence permit for studies
- SE Residence permit for higher-education studies
- SE Standard work permit
- NO Study permit — university/university college
- NO Skilled worker with an employer in Norway
- LU Salaried worker
- IT Higher-education study visa
- JP Student status of residence
- JP Engineer / Specialist in Humanities / International Services

Publishability means the repository has evidence for the minimum material fields. It does **not** mean approval is guaranteed, legal advice is provided, or every sub-route has been exhaustively covered.

## Latest exact-route evidence wave

The 2026-09-14 continuation wave added exact material-field coverage for Japan Student and Japan Engineer / Specialist in Humanities / International Services. Student financial evidence is documentary ability-to-pay evidence; Engineer financial evidence is the official remuneration-pay-parity rule. Neither route receives an invented universal salary or funds threshold.

The preceding waves promoted Finland Study, Sweden Standard Work Permit, Norway Skilled Worker with an Employer in Norway and Italy Higher-Education Study after route-scope review.

## High-risk distinctions to preserve

### Canada
- Express Entry is an umbrella system covering CEC, FSWP and FSTP; it must not be represented as one undifferentiated legal route.
- `CA-express-entry` remains unpromoted until a narrower scope is selected and evidenced.

### Australia
- Skilled migration includes multiple subclasses and invitation/nominations; `AU-skilled` remains intentionally unpromoted until the exact visa class is narrowed.

### New Zealand
- Skilled residence has multiple pathways and route-specific wage/work-experience rules; `NZ-skilled` requires narrowing before promotion.

### Austria
- The Red-White-Red Card is an umbrella family. Current evidence concerns a narrower sub-route, so `AT-red-white-red` remains unpromoted until its scope is narrowed.

### Finland / Sweden / Norway / Italy
- Promoted records remain exact-route records. TTOL is not all Finnish work; Sweden Standard Work Permit is not all Swedish work; Norway Skilled Worker is scoped to an employer in Norway; Italy Study is scoped to higher-education study.

### Japan
- Student is represented as the Student status of residence for qualifying education, not every education-related residence category.
- Student financial evidence records official documentary ability-to-pay requirements without inventing a universal yen threshold.
- Engineer / Specialist in Humanities / International Services is represented as the specific status of residence, not all Japanese work-residence routes.
- Its remuneration evidence is a pay-parity rule against comparable Japanese work, not a fabricated universal salary floor.

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

1. CA Express Entry — split/qualify CEC, FSWP and FSTP.
2. AU Skilled — identify an exact skilled-visa class.
3. NZ Skilled — narrow to a specific SMC/work-to-residence class.
4. AT Red-White-Red — narrow to a specific sub-route.
5. IT Work — identify a specific work-authorization class.
6. LU Study and remaining country routes — continue only where evidence supports a clearly scoped route.

## Critical distinction

**Evidence coverage is not legal completeness.** A route can have strong primary-source facts and still be unsafe to present as a universal pathway if the authority has multiple legal sub-routes. The product should prefer a narrower, accurately named route over a broader route with misleading simplicity.

## Definition of Done

- Legal scope is explicit.
- Material evidence is complete and current.
- Exceptions are represented or disclosed.
- `evidenceIds` are validated.
- Data validation passes.
- Generated pages expose the evidence trail.
- CI passes after the promotion.
