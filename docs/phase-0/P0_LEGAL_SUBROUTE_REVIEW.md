# P0 — Pathway Legal-Subroute Review

**Status:** Active  
**Priority:** P0  
**Last reconciled:** 2026-09-14

## Purpose

Prevent a generic pathway record from implying that every applicant follows the same legal route when the authority distinguishes sub-routes, occupations, applicant classes, nationality rules, salary bands, or in-country/out-of-country procedures.

## Current publishable set

**28 pathways** now meet the minimum material evidence gate and have explicit `evidenceIds`.

The newest promotion is **Canada — Federal Skilled Worker Program (FSWP)**. The former generic `CA-express-entry` record has been replaced by the narrower `CA-federal-skilled-worker` route.

The evidence tree now contains **100 field-level records** after the current New Zealand SMC scope/policy addendum. Those two new records are deliberately attached to the still-unpromoted `NZ-skilled` research umbrella; they document why the umbrella must be split before promotion rather than pretending to prove one route.

The other promoted routes remain unchanged from the previous checkpoint: GB Student/Skilled Worker; IE Study/Critical Skills; DE Study/Opportunity Card; FR Study/Talent Passport; ES Study/International Teleworker; CA Study Permit; AU Student; NZ Fee Paying Student; AT Student; PT Study/Digital Nomad; CH Work; FI Study/TTOL; SE Study/Standard Work Permit; NO Study/Skilled Worker with employer in Norway; LU Salaried Worker; IT Higher-Education Study; and JP Student/Engineer-Specialist in Humanities-International Services.

Publishability means the repository has evidence for the minimum material fields. It does **not** mean approval is guaranteed, legal advice is provided, or every sub-route has been exhaustively covered.

## Canada — exact-route promotion

Express Entry remains an umbrella system containing the Canadian Experience Class, Federal Skilled Worker Program and Federal Skilled Trades Program. Therefore the product must not use FSWP evidence as if it proves eligibility for all Express Entry programs.

The promoted route is now explicitly **Federal Skilled Worker Program**. Current IRCC guidance identifies qualifying skilled work in TEER 0–3, language testing, education/ECA requirements for foreign education, the 67-point selection-factor threshold, admissibility and settlement-funds rules as material considerations. It also states that applicants must plan to live outside Quebec.

The product deliberately does not hard-code a timeless proof-of-funds amount. The live IRCC table remains the authority for the amount applicable to family size and circumstances.

**Important temporal caveat:** Canadian government materials currently indicate planned regulatory work around a future federal high-skilled class, including proposed changes to the existing federal skilled-worker framework. This is a reason to retain short evidence review dates rather than treating the current FSWP record as timeless.

## High-risk distinctions to preserve

### Australia
- Skilled migration includes multiple temporary, provisional and permanent visas, including employer-sponsored, state/territory-nominated and independent routes. `AU-skilled` therefore remains intentionally unpromoted until one exact visa class is selected.

### New Zealand
- The current Skilled Migrant Category Resident Visa page explicitly contains **three distinct pathways**: Points-based, Skilled Work Experience, and Trades and Technician. `NZ-skilled` therefore remains a research umbrella, not a publishable route.
- The 24 August 2026 changes include clarified wage-threshold application, updated qualification evidence, removal of the overseas Trade and Technician 120-credit requirement, and strengthened genuine-skilled-employment settings.
- The current evidence addendum records this scope and policy change, but **does not promote** `NZ-skilled`; the next implementation step is to create separate exact pathway records/evidence for the applicable SMC route(s). 

### Austria
- The Red-White-Red Card is an umbrella family. `AT-red-white-red` remains unpromoted until a specific sub-route is selected and evidenced.

### Finland / Sweden / Norway / Italy
- Promoted records remain exact-route records. TTOL is not all Finnish work; Sweden Standard Work Permit is not all Swedish work; Norway Skilled Worker is scoped to an employer in Norway; Italy Study is scoped to higher-education study.

### Japan
- Student is represented as the Student status of residence for qualifying education, not every education-related residence category.
- Engineer / Specialist in Humanities / International Services is represented as the specific status of residence, not all Japanese work-residence routes.

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

1. **NZ Skilled** — split the umbrella into exact SMC pathway records, starting with Skilled Work Experience and/or Trades and Technician where the product has sufficient user value.
2. **AU Skilled** — choose one exact skilled-visa class.
3. **AT Red-White-Red** — narrow to a specific sub-route.
4. **IT Work** — identify a specific work-authorization class.
5. **LU Study / remaining countries** — promote only when exact-route evidence is complete.

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
