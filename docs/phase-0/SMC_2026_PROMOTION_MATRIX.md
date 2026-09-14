# SMC 2026 Promotion Matrix

## Purpose

Define the material gates required before any New Zealand Skilled Migrant Category child route can be promoted from `research_required` to publishable. The canonical `NZ-skilled` umbrella remains unchanged.

## Points-based

Authoritative current INZ guidance requires 6 total points. Points may come from exactly one primary skill category — qualification, occupational registration, or income — plus qualifying New Zealand skilled-work points where needed. Qualification claims require the relevant qualification evidence and, for overseas qualifications generally, an IQA unless exempt. Level 8/9 claims have supporting-bachelor rules. Income points use the applicable SMC wage threshold and cannot be combined with qualification or registration points as the primary category. citeturn0search1turn0search2

### Promotion gates
- [x] Current 6-point architecture evidenced.
- [x] Qualification / income / registration are mutually exclusive primary categories.
- [x] NZ skilled-work points are the only top-up category.
- [x] Deterministic point-composition regression tests.
- [x] Qualification/IQA/LQEA exception evidence attached to the exact candidate.
- [x] Eligible occupational-registration evidence attached to the exact candidate.
- [ ] Validate effective-date wage calculations.
- [ ] Complete final promotion validation against data/build gates.

## Skilled Work Experience

Current INZ guidance requires a skilled role/job offer, the applicable wage multiple, directly relevant work experience and qualifying New Zealand skilled work. Amber-list and red-list occupations impose distinct treatment; self-employment cannot count as relevant work experience. citeturn0search0turn0search5

### Promotion gates
- [x] Core eligibility/process/financial evidence.
- [x] Red/amber occupation matrix attached to the exact candidate.
- [x] Standard vs amber threshold evidence attached to the exact candidate.
- [x] Effective-date wage regression evidence attached to the exact candidate.
- [x] Machine-testable wage/effective-date fixture regression.
- [x] Machine-testable red/amber occupation-rule fixture.
- [ ] Validate direct-relevance and employment evidence rules.
- [ ] Complete final promotion validation.

## Trades and Technician

Current INZ guidance requires an eligible trades/technician occupation, relevant qualification and qualifying post-qualification experience including New Zealand skilled work. The current official route requires at least 2.5 years of relevant post-qualification experience plus an additional 1.5 years of post-qualification skilled work experience in New Zealand. Overseas and New Zealand qualification-credit treatment differs after the 24 August 2026 changes. citeturn0search1turn0search2turn0search6

### Promotion gates
- [x] Core eligibility/process/financial evidence.
- [x] Authoritative eligible-occupation/qualification matrix attached to the exact candidate.
- [x] NZ 120-credit rule and overseas exception distinction documented.
- [x] Machine-testable occupation/qualification rule fixtures.
- [ ] Complete final promotion validation.

## Current regression fixtures

For Skilled Work Experience, the official wage table gives a 9 March 2026 SMC threshold of NZD 35.00/hour, producing NZD 38.50/hour at 1.1× for standard roles and NZD 42.00/hour at 1.2× for Amber roles. The threshold is determined by the date qualifying New Zealand skilled work starts, subject to the official eligible-timeframe and grace-period rules. citeturn0search1

The current official Red/Amber page identifies Red occupations as ineligible for Skilled Work Experience and imposes the higher 1.2× / experience requirements on Amber occupations. citeturn0search10

## Critical implementation distinction

The product must distinguish **policy eligibility**, **evidence sufficiency**, and **promotion readiness**. A route can have authoritative core evidence while still remaining `research_required` because regression coverage, direct-relevance validation, or final promotion gates are incomplete.

## Important distinction

These three routes share the SMC residence product but do **not** share one eligibility algorithm. Recommendation logic must select the route first, then evaluate route-specific evidence. Parent `NZ-skilled` evidence must never satisfy a child-route promotion gate.

## Sources

- Immigration New Zealand — Skilled Migrant Category Resident Visa.
- Immigration New Zealand — SMC wage threshold.
- Immigration New Zealand — Red and Amber List occupations.
- Immigration New Zealand — Eligible occupations for the Trades and Technician pathway.
- Immigration New Zealand — Further SMC changes effective 24 August 2026.
- Immigration New Zealand — Final details on SMC changes.
