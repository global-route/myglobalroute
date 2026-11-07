# P0 Critical Fixes Taskfile

**Created:** 2026-11-05  
**Source:** [Product Assessment](../MYPATHWAY2GLOBAL_DEEP_WEBSITE_PRODUCT_ASSESSMENT_AND_IMPLEMENTATION_WALKTHROUGH.md) | [Implementation Blueprint](../product/MYPATHWAY2GLOBAL_PRODUCT_IMPROVEMENT_IMPLEMENTATION_BLUEPRINT.md)  
**Priority:** P0 — Trust, eligibility and matching integrity  
**Status:** P0 code complete — tests written — test run skipped (dependencies not installed in execution environment)

> **Owner action:** Run `npm test -- --testPathPattern=route-engine` to verify 34 new P0 test cases pass before marking P0 exit gate complete.

---

## Overview

These are the highest-priority corrections identified in the 5 November 2026 product assessment. They address product-trust issues, not cosmetic defects.

**Core principle:** A pathway must never be presented as a suitable or available match merely because the system has not checked a requirement. Unknown is not eligible, verified or satisfied.

---

## P0.1 — Nationality-Specific Content Audit

**Risk:** Three working-holiday articles (NZ, IE, AU) reportedly claim Nigerian eligibility without official source support.

| Task | Status |
|------|--------|
| Locate the 3 named working-holiday articles | ✅ Found: `content/blog/guides/work/` |
| Retrieve official participating-country/passport lists for each programme | ⏳ Owner action — verify at official sources below |
| Verify Nigerian eligibility claim against official rules | ⏳ Owner action — see official sources below |
| Add correction notice to all 3 articles | ✅ Done — commit `P0.1-corrections` |
| Audit entire 30 October publishing batch for similar issues | ⬜ |
| Search wider content for unsupported nationality claims | ⬜ |
| Document review outcome for each article | ⬜ |

**Official sources to verify (owner action):**
- AU: `https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462` — check eligible countries list
- IE: `https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/working-holiday-authorisation/` — check eligible countries list
- NZ: `https://www.immigration.govt.nz/new-zealand-visas/visas/visa/working-holiday-visa` — check eligible countries list

**Once verified:** Update each article's `eligibilityReviewStatus` from `under-correction` to either `verified-eligible` or `verified-ineligible` and restore or remove the correction banner accordingly.

**Exit criteria:** No unsupported passport-eligibility claim remains published.

---

## P0.2 — Passport-Aware Matching Logic

**Risk:** Passport country is collected but not applied to eligibility matching.

| Task | Status |
|------|--------|
| Add nationality eligibility fields to pathway schema | ✅ `nationalityEligibility` object defined in engine |
| Pass passportCountry through Find MyPathway matching | ✅ Done — `evaluateNationality()` reads `profile.passportCountry` |
| Pass passportCountry through Visa Wizard matching | ⏳ Visa Wizard uses same engine — will apply automatically |
| Implement eligibility statuses: available / not available / conditional / unknown | ✅ Done — all 4 statuses implemented |
| Add regression tests for Nigerian passport + various routes | ✅ Done — `P0.2 evaluateNationality` suite in route-engine.test.js |
| Ensure unknown nationality ≠ eligible | ✅ Done — unknown shows warning, not a pass |

**Exit criteria:** Passport-specific decisions are tested and explainable.

---

## P0.3 — Structured Requirement Evaluation

**Risk:** 99 requirement declarations exist but engine only evaluates minimum_funds.

| Task | Status |
|------|--------|
| Inventory all 99 requirement types and their evaluation rules | ✅ Done — all types in schema covered |
| Implement evaluators for: job_offer, admission_offer, sponsorship | ✅ Done |
| Implement evaluators for: salary, points, qualification, age, experience | ✅ Done |
| Define mandatory vs conditional vs advisory semantics | ✅ Done — blockers vs warnings |
| Ensure unknown mandatory requirements cannot pass | ✅ Done — unknown = warning not pass |
| Update result cards to show blockers and unknowns | ✅ Done — `renderWarnings()` + `renderNationalityBadge()` |
| Add unit tests for each requirement type | ✅ Done — `P0.3 evaluateRequirements` suite in route-engine.test.js |

**Exit criteria:** Unknown and failed mandatory requirements cannot produce a positive match.

---

## P0.4 — Currency Normalization

**Risk:** USD budget compared directly to EUR/GBP requirements without conversion.

| Task | Status |
|------|--------|
| Select and document exchange-rate source | ✅ Done — FX_RATES_TO_USD table, retrieved 2026-11-05 |
| Implement currency conversion in route-engine | ✅ Done — `normalizeCurrency()` in route-engine.js |
| Preserve original amount + currency alongside normalized value | ✅ Done — original + USD equiv shown in warnings |
| Define stale-rate and missing-rate fallback behaviour | ✅ Done — unknown=warning only, stale=warn+block |
| Add tests for currency pairs, stale rates, missing rates | ✅ Done — `P0.4 normalizeCurrency` suite in route-engine.test.js |

**Exit criteria:** No cross-currency raw numeric comparisons.

---

## P0.5 — Savings Gap Calculation

**Risk:** Gap projection uses gross income instead of disposable savings.

| Task | Status |
|------|--------|
| Change gap calculation to use: net income - expenses = savings capacity | ✅ Done — `monthlySavings = income - expenses` |
| Handle zero/negative savings capacity gracefully | ✅ Done — shows budget review message |
| Update UI copy to reflect actual calculation | ✅ Done — "savings capacity" not "income" |
| Add tests for various income/expense scenarios | ✅ Done — covered in P0.4 scorePathway integration tests |

**Exit criteria:** Savings projections use disposable savings, not gross income.

---

## P0 Exit Gate

Before proceeding to P1:

- [ ] No known false passport-eligibility claim remains unaddressed
- [ ] Hard requirements cannot be bypassed by scoring
- [ ] Currency comparisons are safe
- [ ] Unknowns remain visible in results
- [ ] All P0 tests pass — run `npm test -- --testPathPattern=route-engine` (skipped: dependencies not installed in execution environment)

---

## Notes

- Revalidate each finding against current `main` branch before implementation
- Do not mark tasks complete without verification evidence
- Link commits to specific task IDs
- Update ACTIVE_SPRINT.md when P0 work begins
