# P0 — Pathway Legal-Subroute Review

**Status:** Active  
**Priority:** P0  
**Last reconciled:** 2026-09-14

## Purpose

Prevent a generic pathway record from implying that every applicant follows the same legal route when the authority distinguishes sub-routes, occupations, applicant classes, nationality rules, salary bands, or in-country/out-of-country procedures.

## Current publishable set

**28 pathways** now meet the minimum material evidence gate and have explicit `evidenceIds`.

The newest promotion is **Canada — Federal Skilled Worker Program (FSWP)**. The former generic `CA-express-entry` record has been replaced by the narrower `CA-federal-skilled-worker` route.

The evidence tree now contains new exact-route evidence for Australia subclass 189, New Zealand SMC sub-pathways, Austria Other Key Workers, and Italy 2026 non-seasonal subordinate work. These records are intentionally staged without promoting the remaining umbrella records.

The other promoted routes remain unchanged from the previous checkpoint: GB Student/Skilled Worker; IE Study/Critical Skills; DE Study/Opportunity Card; FR Study/Talent Passport; ES Study/International Teleworker; CA Study Permit; AU Student; NZ Fee Paying Student; AT Student; PT Study/Digital Nomad; CH Work; FI Study/TTOL; SE Study/Standard Work Permit; NO Study/Skilled Worker with employer in Norway; LU Salaried Worker; IT Higher-Education Study; and JP Student/Engineer-Specialist in Humanities-International Services.

Publishability means the repository has evidence for the minimum material fields. It does **not** mean approval is guaranteed, legal advice is provided, or every sub-route has been exhaustively covered.

## Canada — exact-route promotion

Express Entry remains an umbrella system containing the Canadian Experience Class, Federal Skilled Worker Program and Federal Skilled Trades Program. Therefore the product must not use FSWP evidence as if it proves eligibility for all Express Entry programs.

The promoted route is now explicitly **Federal Skilled Worker Program**. Current IRCC guidance identifies qualifying skilled work in TEER 0–3, language testing, education/ECA requirements for foreign education, the 67-point selection-factor threshold, admissibility and settlement-funds rules as material considerations. It also states that applicants must plan to live outside Quebec.

The product deliberately does not hard-code a timeless proof-of-funds amount. The live IRCC table remains the authority for the amount applicable to family size and circumstances.

**Important temporal caveat:** Canadian government materials currently indicate planned regulatory work around a future federal high-skilled class, including proposed changes to the existing federal skilled-worker framework. This is a reason to retain short evidence review dates rather than treating the current FSWP record as timeless.

## High-risk distinctions to preserve

### Australia
- Skilled migration includes multiple temporary, provisional and permanent visas. The current exact-route candidate is **Skilled Independent (subclass 189), Points-tested stream**.
- Official SkillSelect guidance requires an EOI before invitation, an eligible skilled occupation, English-test and skills-assessment information, and at least 65 points for invitation eligibility; 65 points does not guarantee an invitation.
- The new evidence is scoped to subclass 189. It must not be used to promote the broader `AU-skilled` umbrella or other subclasses.
- Promotion remains blocked until the material financial and remaining route fields required by the product schema are evidenced.

### New Zealand
- The current Skilled Migrant Category Resident Visa has **three distinct pathways**: Points-based, Skilled Work Experience, and Trades and Technician.
- New exact-route evidence now covers Skilled Work Experience and Trades and Technician eligibility plus the SMC process/transitional rule.
- The Skilled Work Experience pathway has materially different requirements by occupation-list status; the published standard case includes ANZSCO 1–3 skilled work, five years of directly relevant experience and two years in New Zealand at 1.1× the SMC median wage. Amber-list and red-list occupations require separate treatment.
- Trades and Technician requires a listed occupation, a relevant Level 4+ qualification and four years of directly relevant post-qualification experience including 1.5 years in New Zealand at at least the SMC median wage.
- These records are still attached to `NZ-skilled` because the canonical application data model has not yet been changed to represent multiple SMC sub-route IDs. **Do not promote the umbrella using them.**

### Austria
- The Red-White-Red Card is an umbrella family.
- A specific **Other Key Workers** candidate is now evidenced: 2026 minimum gross monthly pay of €3,465, labour-market test and minimum 55 points, with a 24-month card when requirements are met.
- This remains research-required until all material application fields are evidenced and the canonical record can represent the exact sub-route without implying all RWR categories.

### Italy
- `IT-work` remains an umbrella record.
- A 2026 **non-seasonal subordinate work / Flussi** candidate is now evidenced with the annual quota and official ALI/click-day process.
- The 2026 quota is explicitly temporal and subject to availability; it must not be generalized to all Italian work routes or future years.
- Promotion remains blocked until employer-side authorization/nulla-osta and applicant-side material requirements are fully evidenced.

### Finland / Sweden / Norway
- Promoted records remain exact-route records. TTOL is not all Finnish work; Sweden Standard Work Permit is not all Swedish work; Norway Skilled Worker is scoped to an employer in Norway.

### Japan
- Student is represented as the Student status of residence for qualifying education, not every education-related residence category.
- Engineer / Specialist in Humanities / International Services is represented as the specific status of residence, not all Japanese work-residence routes.

## Promotion rule

A pathway may move from `research_required` to `publishable` only when:

1. The pathway's legal scope is clear enough for the label used in the product.
2. Required material fields have current primary-source evidence.
3. Evidence IDs point to records belonging to that exact pathway/sub-route.
4. Exceptions and major sub-route distinctions are either evidenced and represented or explicitly disclosed as out of scope.
5. Unsupported approval rates, generalized costs and generalized timelines remain null.
6. Data validation passes on the corrected evidence tree.
7. CI passes after the promotion.

## Current exact-route queue

1. **Australia subclass 189** — complete missing material fields, then decide promotion.
2. **New Zealand SMC** — implement explicit sub-route representation, then evaluate Skilled Work Experience and Trades and Technician independently.
3. **Austria Other Key Workers** — complete material evidence and promote only if the exact route is representable.
4. **Italy 2026 non-seasonal subordinate work** — complete employer/nulla-osta and applicant-side evidence; keep annual scope explicit.
5. **LU Study / remaining countries** — repeat the same exact-route audit rather than promoting broad umbrellas.

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
