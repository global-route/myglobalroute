# New Zealand SMC — Trades & Technician Promotion Matrix

**Scope:** Exact child route `NZ-smc-trades-technician`. This matrix does not promote `NZ-skilled` or substitute parent-route evidence.

## Authoritative eligibility gates

| Gate | Current rule | State |
|---|---|---|
| Occupation | Current employment/job offer must be in an occupation listed in Appendix 23 / the official Trades and Technician list | Source identified; executable matrix required |
| Skill level | Listed occupation is ANZSCO skill level 1–3 | Evidenced |
| Qualification | Relevant Level 4 or higher qualification recognised under the applicable NZQCF rules | Evidenced |
| NZ qualification credits | NZ qualification route requires at least 120 credits, subject to the prerequisite-qualification rule | Evidenced |
| Overseas qualification | Overseas qualification is not subject to the former 120-credit rule; qualification certificate + IQA are required under the applicable rules | Evidenced |
| Relevant experience | At least 2.5 years of relevant post-qualification work experience | Evidenced |
| NZ skilled experience | Additional 1.5 years / 18 months of post-qualification skilled work in New Zealand at the SMC wage threshold | Evidenced |
| Timing | Relevant work experience must fall within the applicable 10-year window; NZ skilled work within the applicable 3-year window | Evidenced |
| Direct relevance | Experience must be directly relevant to the skilled employment/job offer | Evidenced |
| Self-employment | Work experience cannot be self-employment | Evidenced |

## Eligible occupation matrix

The authoritative occupation list is **Appendix 23 — Eligible Occupations for the Trades and Technician pathway**. It is an immigration-instruction list and must be treated as the source of truth rather than a manually inferred occupation taxonomy.

Implementation must store/validate, for each listed occupation:

- ANZSCO 6-digit code;
- official occupation name;
- ANZSCO skill level;
- effective date;
- source authority/version;
- whether the occupation was listed when the applicant began accruing NZ skilled work.

Current official Appendix 23 source: https://www.immigration.govt.nz/opsmanual/90268.htm

The official public list is also available at: https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/skilled-migrant-category-pathway-to-residence/eligible-roles-for-the-smc-trades-and-technician-pathway/

## Qualification exception matrix

| Qualification case | Treatment |
|---|---|
| NZ Level 4+ relevant qualification, 120+ NZQCF credits | Eligible if all other route gates pass |
| NZ Level 4+ qualification under 120 credits + qualifying NZ prerequisite qualification(s) bringing total to 120+ credits | Eligible where the prerequisite structure satisfies current instruction |
| NZ qualification relying on recognition of prior learning credits for the 120-credit minimum | Do not count RPL credits toward the 120-credit minimum |
| Overseas Level 4+ relevant/comparable qualification | Former 120-credit overseas rule removed; verify recognition/comparability and obtain IQA where required |
| Qualification not relevant to current eligible occupation | Block route until relevance is established |
| Qualification completed after claimed work experience | Earlier work cannot count; route work-experience clock begins after receipt of relevant qualification |

## Work-experience matrix

| Requirement | Pass condition |
|---|---|
| Total post-qualification experience | ≥ 4 years total |
| Relevant experience component | ≥ 2.5 years, directly relevant, ANZSCO 1–3 |
| NZ skilled component | Additional ≥ 18 months in NZ, ANZSCO 1–3, directly relevant, at SMC threshold |
| Double counting | Same period cannot satisfy both components |
| Full-time test | At least 30 guaranteed hours/week for each week counted |
| NZ timing | Skilled NZ work within 3 years before residence application |
| Relevant timing | Relevant experience within 10 years before residence application |
| Occupation continuity | Occupation must be on Appendix 23 when the NZ skilled-work accumulation began |

## Regression cases required before promotion

1. Listed Appendix 23 occupation + relevant Level 4 NZ qualification + 120 credits + 2.5 years relevant + 18 months NZ → pass.
2. Listed occupation + NZ qualification below 120 credits with qualifying NZ prerequisite credits reaching 120 → pass.
3. NZ qualification below 120 credits without qualifying prerequisite credits → fail.
4. Overseas relevant qualification below 120 credits but otherwise recognised/IQA-supported → do not fail solely for the removed overseas 120-credit rule.
5. Qualification received after a claimed experience period → that earlier period does not count.
6. NZ work below the applicable SMC threshold → affected period does not count.
7. Same NZ period reused for both 2.5-year relevant and 18-month NZ components → fail.
8. Self-employment substituted for required work experience → fail.
9. Occupation absent from Appendix 23 at the start of NZ skilled-work accumulation → fail for the route.
10. Occupation later removed from Appendix 23 after qualifying NZ work began → preserve the instruction's historical-list treatment where otherwise eligible.

## Promotion gate

- [x] Exact child-scoped eligibility, financial and process evidence.
- [x] Current qualification distinction documented.
- [x] 120-credit NZ-vs-overseas distinction documented.
- [x] Work-experience timing and double-counting rules documented.
- [ ] Import/encode the complete Appendix 23 occupation matrix into machine-testable data.
- [ ] Add qualification and occupation regression tests.
- [ ] Complete final candidate-to-canonical promotion validation.
- [ ] Run data/build verification.

## Important distinction

The occupation list is **effective-date sensitive**. Do not treat today's Appendix 23 membership as proof that an occupation was eligible when an applicant's qualifying NZ work began.

## Primary sources

- Immigration New Zealand — SR3.40 Trades and Technician Pathway: https://www.immigration.govt.nz/opsmanual/90261.htm
- Immigration New Zealand — Appendix 23: https://www.immigration.govt.nz/opsmanual/90268.htm
- Immigration New Zealand — Eligible Trades and Technician occupations: https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/skilled-migrant-category-pathway-to-residence/eligible-roles-for-the-smc-trades-and-technician-pathway/
- Immigration New Zealand — final SMC changes: https://www.immigration.govt.nz/about-us/news-centre/final-details-about-changes-to-the-skilled-migrant-category-resident-visa-and-work-to-residence-visa/

**Effective policy baseline:** 24 August 2026 changes; review before promotion because the occupation list and immigration instructions are policy-sensitive.
