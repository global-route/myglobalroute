# Italy 2026 Flussi — Non-seasonal Subordinate Route Validation

## Exact scope
`IT-flussi-2026-non-seasonal-subordinate` is a temporal 2026 quota route under `IT-work`. It must not be generalized into all Italian work migration routes.

## Confirmed 2026 framework
- 2026 authorizes 76,200 non-seasonal subordinate entries, alongside separate seasonal and self-employed quotas.
- The route uses the Ministry of the Interior ALI portal and the scheduled 2026 click-day/pre-compilation process.
- Employer-side nulla-osta is a central prerequisite and is distinct from the worker's later entry/residence steps.
- The employer-side labour-market availability check is part of the nulla-osta workflow where applicable.

## Promotion matrix
| Gate | Required proof | Status |
|---|---|---|
| Annual quota | 2026 non-seasonal subordinate quota treatment | Evidenced |
| Employer | Eligible employer + employment relationship | Final documentary matrix open |
| Nulla-osta | Employer application and labour-market prerequisites | Process evidenced; final document matrix open |
| Sector | Eligible ATECO/sector treatment | Official sector annex identified; implementation mapping open |
| Country/quota | Applicable nationality/territorial allocation | Final route-specific mapping open |
| Compensation | Employment remuneration satisfies applicable rules | Final documentary validation open |
| Applicant evidence | Passport/identity and route-specific supporting evidence | Final matrix open |
| Route identity | 2026 temporal subroute; no inheritance from generic IT-work | Implemented |

## Important distinction
The annual quota is a scarce allocation mechanism, not a generic eligibility statement. A user can satisfy job and employer requirements and still fail because the applicable quota treatment is unavailable or the filing window has closed.

## Recommendation-engine implication
The engine must model at least: employer readiness, quota/category, filing-window status, sector, nationality/territorial allocation and nulla-osta state. It should not recommend this route merely because a user has a job offer in Italy.

## Remaining promotion gate
- finish sector/country allocation data;
- finish employer/nulla-osta documentary evidence;
- encode compensation and applicant evidence rules;
- add temporal quota/filing-window tests;
- verify current official source set and run complete data/unit/build checks.

## Source basis
Official Italian Ministry/immigration integration guidance for Flussi 2026, including the October 2025 operational circular summary, reviewed 2026-09-14.
