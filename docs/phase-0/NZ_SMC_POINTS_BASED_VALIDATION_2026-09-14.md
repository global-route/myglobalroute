# New Zealand SMC Points-based — Exact Route Validation

## Scope
This document validates the Points-based child route separately from the `NZ-skilled` umbrella and from the Skilled Work Experience and Trades and Technician child routes.

## Current rule set
- Requires **6 skilled resident points**.
- Points come from one skill category: qualification, income/pay, or eligible occupational registration.
- If the selected skill category does not supply all 6 points, New Zealand skilled work experience can supply the balance.
- Common SMC requirements still apply, including skilled employment/job offer, applicable pay, health, character and English requirements.
- Qualification claims require documentary evidence; overseas qualifications may require an IQA unless exempt.
- Level 8/9 qualification claims have the additional supporting-bachelor requirement described by the 2026 rules, with the specified New Zealand master's exception.
- Income points use the effective SMC wage threshold and route-specific multiples.

## Evidence boundary
The route now has exact child-route records for:
1. eligibility;
2. financial/wage settings; and
3. process/evidence.

These records are attached to `NZ-smc-points-based`, not to `NZ-skilled`.

## Remaining promotion gate
The route is **not promoted yet**. Before canonicalization, the implementation still needs:
- current occupation/registration eligibility matrix where registration is used as a points source;
- qualification-level matrix including IQA/LQEA and Level 8/9 supporting-degree exceptions;
- point-calculation test cases covering 3–6 skill points plus 0–3 NZ work-experience points;
- effective-date wage regression tests;
- recommendation-engine route mapping so the exact child route can be selected without treating the umbrella as equivalent;
- final data/build/SEO verification.

## Important distinction
The Points-based route is a points-composition architecture, not a generic “skilled worker” route. A candidate can qualify through different evidence combinations, so the recommendation engine must retain the reason the 6-point threshold was reached rather than reducing the route to a single static eligibility flag.

## Source basis
Immigration New Zealand current SMC Resident Visa guidance and SMC application evidence guidance, reviewed 2026-09-14.
