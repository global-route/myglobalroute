# SMC 2026 Promotion Matrix

## Purpose

Define the material gates required before any New Zealand Skilled Migrant Category child route can be promoted from `research_required` to publishable. The canonical `NZ-skilled` umbrella remains unchanged.

## Points-based

Authoritative current INZ guidance requires 6 total points. Points may come from exactly one primary skill category — qualification, occupational registration, or income — plus qualifying New Zealand skilled-work points where needed. Qualification claims require the relevant qualification evidence and, for overseas qualifications generally, an IQA unless exempt. Level 8/9 claims have supporting-bachelor rules. Income points use the applicable SMC wage threshold and cannot be combined with qualification or registration points as the primary category. citeturn0search1turn0search2

### Promotion gates
- [x] Current 6-point architecture evidenced.
- [x] Qualification / income / registration are mutually exclusive primary categories.
- [x] NZ skilled-work points are the only top-up category.
- [ ] Encode deterministic point-composition regression tests.
- [ ] Encode qualification/IQA/LQEA exception matrix.
- [ ] Encode eligible occupational-registration matrix.
- [ ] Validate effective-date wage calculations.

## Skilled Work Experience

Current INZ guidance requires a skilled role/job offer, the applicable wage multiple, directly relevant work experience and qualifying New Zealand skilled work. Amber-list and red-list occupations impose distinct treatment; self-employment cannot count as relevant work experience. citeturn0search0turn0search5

### Promotion gates
- [x] Core eligibility/process/financial evidence.
- [ ] Complete red/amber occupation matrix.
- [ ] Validate standard vs amber thresholds.
- [ ] Add effective-date wage regression cases.
- [ ] Validate direct-relevance and employment evidence rules.

## Trades and Technician

Current INZ guidance requires an eligible trades/technician occupation, relevant qualification and qualifying post-qualification experience including New Zealand skilled work. Overseas qualification treatment differs from New Zealand qualification treatment after the 24 August 2026 changes. citeturn0search0turn0search2

### Promotion gates
- [x] Core eligibility/process/financial evidence.
- [ ] Complete authoritative eligible-occupation matrix.
- [ ] Complete qualification recognition/exception matrix.
- [ ] Encode NZ 120-credit rule and overseas exception distinction.
- [ ] Add occupation + qualification regression tests.

## Important distinction

These three routes share the SMC residence product but do **not** share one eligibility algorithm. Recommendation logic must select the route first, then evaluate route-specific evidence. Parent `NZ-skilled` evidence must never satisfy a child-route promotion gate.

## Sources

- Immigration New Zealand — Skilled Migrant Category Resident Visa.
- Immigration New Zealand — Further SMC changes effective 24 August 2026.
- Immigration New Zealand — Final details on SMC changes.
