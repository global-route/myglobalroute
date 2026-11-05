# P0 Critical Fixes Taskfile

**Created:** 2026-11-05  
**Source:** [Product Assessment](../MYPATHWAY2GLOBAL_DEEP_WEBSITE_PRODUCT_ASSESSMENT_AND_IMPLEMENTATION_WALKTHROUGH.md) | [Implementation Blueprint](../product/MYPATHWAY2GLOBAL_PRODUCT_IMPROVEMENT_IMPLEMENTATION_BLUEPRINT.md)  
**Priority:** P0 — Trust, eligibility and matching integrity  
**Status:** Not started

---

## Overview

These are the highest-priority corrections identified in the 5 November 2026 product assessment. They address product-trust issues, not cosmetic defects.

**Core principle:** A pathway must never be presented as a suitable or available match merely because the system has not checked a requirement. Unknown is not eligible, verified or satisfied.

---

## P0.1 — Nationality-Specific Content Audit

**Risk:** Three working-holiday articles (NZ, IE, AU) reportedly claim Nigerian eligibility without official source support.

| Task | Status |
|------|--------|
| Locate the 3 named working-holiday articles | ⬜ |
| Retrieve official participating-country/passport lists for each programme | ⬜ |
| Verify Nigerian eligibility claim against official rules | ⬜ |
| Temporarily unpublish or add correction notice if claim unsupported | ⬜ |
| Audit entire 30 October publishing batch for similar issues | ⬜ |
| Search wider content for unsupported nationality claims | ⬜ |
| Document review outcome for each article | ⬜ |

**Exit criteria:** No unsupported passport-eligibility claim remains published.

---

## P0.2 — Passport-Aware Matching Logic

**Risk:** Passport country is collected but not applied to eligibility matching.

| Task | Status |
|------|--------|
| Add nationality eligibility fields to pathway schema | ⬜ |
| Pass passportCountry through Find MyPathway matching | ⬜ |
| Pass passportCountry through Visa Wizard matching | ⬜ |
| Implement eligibility statuses: available / not available / conditional / unknown | ⬜ |
| Add regression tests for Nigerian passport + various routes | ⬜ |
| Ensure unknown nationality ≠ eligible | ⬜ |

**Exit criteria:** Passport-specific decisions are tested and explainable.

---

## P0.3 — Structured Requirement Evaluation

**Risk:** 99 requirement declarations exist but engine only evaluates minimum_funds.

| Task | Status |
|------|--------|
| Inventory all 99 requirement types and their evaluation rules | ⬜ |
| Implement evaluators for: job_offer, admission_offer, sponsorship | ⬜ |
| Implement evaluators for: salary, points, qualification, age, experience | ⬜ |
| Define mandatory vs conditional vs advisory semantics | ⬜ |
| Ensure unknown mandatory requirements cannot pass | ⬜ |
| Update result cards to show blockers and unknowns | ⬜ |
| Add unit tests for each requirement type | ⬜ |

**Exit criteria:** Unknown and failed mandatory requirements cannot produce a positive match.

---

## P0.4 — Currency Normalization

**Risk:** USD budget compared directly to EUR/GBP requirements without conversion.

| Task | Status |
|------|--------|
| Select and document exchange-rate source | ⬜ |
| Implement currency conversion in route-engine | ⬜ |
| Preserve original amount + currency alongside normalized value | ⬜ |
| Define stale-rate and missing-rate fallback behaviour | ⬜ |
| Add tests for currency pairs, stale rates, missing rates | ⬜ |

**Exit criteria:** No cross-currency raw numeric comparisons.

---

## P0.5 — Savings Gap Calculation

**Risk:** Gap projection uses gross income instead of disposable savings.

| Task | Status |
|------|--------|
| Change gap calculation to use: net income - expenses = savings capacity | ⬜ |
| Handle zero/negative savings capacity gracefully | ⬜ |
| Update UI copy to reflect actual calculation | ⬜ |
| Add tests for various income/expense scenarios | ⬜ |

**Exit criteria:** Savings projections use disposable savings, not gross income.

---

## P0 Exit Gate

Before proceeding to P1:

- [ ] No known false passport-eligibility claim remains unaddressed
- [ ] Hard requirements cannot be bypassed by scoring
- [ ] Currency comparisons are safe
- [ ] Unknowns remain visible in results
- [ ] All P0 tests pass

---

## Notes

- Revalidate each finding against current `main` branch before implementation
- Do not mark tasks complete without verification evidence
- Link commits to specific task IDs
- Update ACTIVE_SPRINT.md when P0 work begins
