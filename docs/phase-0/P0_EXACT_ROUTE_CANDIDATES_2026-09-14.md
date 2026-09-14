# P0 — Exact Route Candidate Register — 2026-09-14

**Status:** Active working register  
**Purpose:** Convert broad research umbrellas into exact legal-route candidates without falsely promoting incomplete evidence.

## Candidate matrix

| Country | Existing umbrella | Exact candidate | Current state | Evidence staged |
|---|---|---|---|---|
| Australia | `AU-skilled` | Skilled Independent visa (subclass 189), Points-tested stream | Research-required; promotion blocked by missing material financial/route evidence | Eligibility + process |
| New Zealand | `NZ-skilled` | SMC Skilled Work Experience pathway | Research-required; umbrella split still needed in application model | Eligibility + process |
| New Zealand | `NZ-skilled` | SMC Trades and Technician pathway | Research-required; umbrella split still needed in application model | Eligibility + process |
| Austria | `AT-red-white-red` | Red-White-Red Card — Other Key Workers | Research-required; material evidence gate not yet complete | Eligibility + process |
| Italy | `IT-work` | 2026 non-seasonal subordinate work / Flussi | Research-required; annual quota route needs complete route fields | Eligibility + process |

## Non-negotiable route boundaries

- **Australia:** subclass 189 evidence must not be used for subclasses 190, 491, 482, 186 or other skilled classes.
- **New Zealand:** the SMC Points-based, Skilled Work Experience, and Trades and Technician pathways are legally distinct. Evidence for one must not be treated as universal SMC evidence.
- **Austria:** Other Key Workers is one Red-White-Red Card category, not the whole RWR family.
- **Italy:** 2026 Flussi is an annual quota/programming scope. Its dates and quotas must never be presented as timeless Italy work-visa rules.

## Promotion gate for candidates

A candidate may be promoted only after:

1. The product record name matches the legal scope.
2. Eligibility, process, and every other material field required by the application schema have current primary evidence.
3. Evidence records reference the exact pathway identifier rather than the former umbrella, or the application model explicitly supports a sub-route identifier.
4. Annual/temporary thresholds carry effective and review dates.
5. No unsupported approval-rate, generalized-cost, or generalized-processing-time claim is introduced.
6. Repository validation passes.
7. CI is actually reported green; an absent/blocked CI result remains **Not Verified**, not PASS.

## Important distinction

The candidate register is intentionally more granular than the current 52-record canonical pathway registry. It is a staging layer for exact-route research. A candidate is not a new public pathway until the canonical data model can represent its legal scope without duplicating or collapsing existing records.

## Next execution order

1. Complete missing material fields for Australia subclass 189 and determine whether promotion is justified.
2. Introduce explicit SMC sub-route representation for New Zealand before promotion.
3. Complete Other Key Workers material evidence for Austria.
4. Complete 2026 non-seasonal subordinate-work material evidence for Italy, including the employer/nulla-osta and applicant-side requirements required by the application model.
5. Apply the same exact-route audit to Luxembourg Study and the remaining research-required countries.
