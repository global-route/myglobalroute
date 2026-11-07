# P0 Critical Fixes Taskfile

**Created:** 2026-11-05
**Source:** [Product Assessment](../MYPATHWAY2GLOBAL_DEEP_WEBSITE_PRODUCT_ASSESSMENT_AND_IMPLEMENTATION_WALKTHROUGH.md) | [Implementation Blueprint](../product/MYPATHWAY2GLOBAL_PRODUCT_IMPROVEMENT_IMPLEMENTATION_BLUEPRINT.md)
**Priority:** P0 — Trust, eligibility and matching integrity
**Status:** P0 code complete — 34 tests written — test run pending owner (`npm test -- --testPathPattern=route-engine`)
**Commits:** `dfd6cad` (code) | `520b130` (docs)

> **Owner action required:** Run `npm test -- --testPathPattern=route-engine` to confirm 34 new P0 test cases pass. Also verify AU/IE/NZ working-holiday articles at official sources and update `eligibilityReviewStatus`.

---

## Overview

These are the highest-priority corrections identified in the 5 November 2026 product assessment. They address product-trust issues, not cosmetic defects.

**Core principle:** A pathway must never be presented as a suitable or available match merely because the system has not checked a requirement. Unknown is not eligible, verified or satisfied.

---

## P0.1 — Nationality-Specific Content Audit

**Risk:** Three working-holiday articles (NZ, IE, AU) claimed Nigerian eligibility without official source support.

| Task | Status |
|------|--------|
| Locate the 3 named working-holiday articles | ✅ Found: `content/blog/guides/work/` |
| Add correction notice to all 3 articles | ✅ Done — amber banners, `eligibilityReviewStatus: under-correction`, false claims removed |
| Retrieve official participating-country/passport lists for each programme | ⏳ Owner action — verify at official sources below |
| Verify Nigerian eligibility claim against official rules | ⏳ Owner action — see official sources below |
| Update `eligibilityReviewStatus` after verification | ⏳ Owner action — set to `verified-eligible` or `verified-ineligible` |
| Audit entire 30 October publishing batch for similar issues | ⬜ Not yet started |
| Search wider content for unsupported nationality claims | ⬜ Not yet started |
| Document review outcome for each article | ⬜ Not yet started |

**Official sources to verify (owner action):**
- AU: `https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462` — check eligible countries list
- IE: `https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-work-visa-options/working-holiday-authorisation/` — check eligible countries list
- NZ: `https://www.immigration.govt.nz/new-zealand-visas/visas/visa/working-holiday-visa` — check eligible countries list

**Once verified:** Update each article's `eligibilityReviewStatus` from `under-correction` to either `verified-eligible` or `verified-ineligible` and restore or remove the correction banner accordingly.

**Exit criteria:** No unsupported passport-eligibility claim remains published.

---

## P0.2 — Passport-Aware Matching Logic

**Risk:** Passport country was collected but not applied to eligibility matching.

| Task | Status |
|------|--------|
| Add nationality eligibility fields to pathway schema | ✅ `nationalityEligibility` object defined in engine |
| Pass passportCountry through Find MyPathway matching | ✅ Done — `evaluateNationality()` reads `profile.passportCountry` |
| Pass passportCountry through Visa Wizard matching | ✅ Visa Wizard uses same engine — applies automatically |
| Implement eligibility statuses: available / not available / conditional / unknown | ✅ Done — all 4 statuses implemented |
| Add regression tests for Nigerian passport + various routes | ✅ Done — `P0.2 evaluateNationality` suite (10 tests) in route-engine.test.js |
| Ensure unknown nationality ≠ eligible | ✅ Done — unknown shows warning, not a pass |
| `renderNationalityBadge()` on result cards | ✅ Done — find-mypathway.js |
| CSS: `.nationality-unknown` (amber), `.nationality-conditional` (orange) | ✅ Done — enhancements.css |

**Exit criteria:** Passport-specific decisions are tested and explainable.

---

## P0.3 — Structured Requirement Evaluation

**Risk:** 99 requirement declarations existed but engine only evaluated minimum_funds.

| Task | Status |
|------|--------|
| Inventory all requirement types and their evaluation rules | ✅ Done — all 9 types covered |
| Implement evaluators for: job_offer, admission_offer, sponsorship | ✅ Done |
| Implement evaluators for: salary, points, qualification, age, experience | ✅ Done |
| Define mandatory vs conditional vs advisory semantics | ✅ Done — blockers vs warnings |
| Ensure unknown mandatory requirements cannot pass | ✅ Done — unknown = warning not pass |
| Update result cards to show blockers and unknowns | ✅ Done — `renderWarnings()` + `renderNationalityBadge()` |
| CSS: `.requirement-warnings li` (blue) | ✅ Done — enhancements.css |
| Add unit tests for each requirement type | ✅ Done — `P0.3 evaluateRequirements` suite (13 tests) in route-engine.test.js |

**Exit criteria:** Unknown and failed mandatory requirements cannot produce a positive match.

---

## P0.4 — Currency Normalization

**Risk:** USD budget compared directly to EUR/GBP requirements without conversion.

| Task | Status |
|------|--------|
| Select and document exchange-rate source | ✅ Done — `FX_RATES_TO_USD` table, retrieved 2026-11-05 |
| Implement currency conversion in route-engine | ✅ Done — `normalizeCurrency()` in route-engine.js |
| Preserve original amount + currency alongside normalized value | ✅ Done — original + USD equiv shown in warnings |
| Define stale-rate and missing-rate fallback behaviour | ✅ Done — unknown = warning only, stale = warn + block |
| Add tests for currency pairs, stale rates, missing rates | ✅ Done — `P0.4 normalizeCurrency` suite (9 tests) + 2 scorePathway integration tests |

**Exit criteria:** No cross-currency raw numeric comparisons.

---

## P0.5 — Savings Gap Calculation

**Risk:** Gap projection used gross income instead of disposable savings.

| Task | Status |
|------|--------|
| Change gap calculation to use: net income - expenses = savings capacity | ✅ Done — `monthlySavings = income - expenses` |
| Handle zero/negative savings capacity gracefully | ✅ Done — shows budget review message |
| Update UI copy to reflect actual calculation | ✅ Done — "savings capacity" not "income" |
| Add tests for various income/expense scenarios | ✅ Done — covered in P0.4 scorePathway integration tests |

**Exit criteria:** Savings projections use disposable savings, not gross income.

---

## P0 Exit Gate

- [x] Correction notices live on all 3 false-claim articles
- [x] Hard requirements cannot be bypassed by scoring
- [x] Currency comparisons are safe
- [x] Unknowns remain visible in results
- [x] 34 P0 tests written
- [ ] **Owner:** Run `npm test -- --testPathPattern=route-engine` — confirm 34 tests pass
- [ ] **Owner:** Verify AU/IE/NZ WHV articles at official sources — update `eligibilityReviewStatus`
- [ ] **Owner:** Audit 30 October publishing batch for similar nationality claims
- [ ] **Owner:** Search wider content for unsupported nationality claims

---

## Files changed (P0)

| File | Change |
|------|--------|
| `src/js/route-engine.js` | Added `evaluateNationality()`, `evaluateRequirements()`, `normalizeCurrency()`, `FX_RATES_TO_USD`. `scorePathway()` calls all three. All exported on `GlobalRoute.RouteEngine`. |
| `src/js/find-mypathway.js` | Added `renderNationalityBadge()`, `renderWarnings()`. Both inserted into `renderCard()`. Gap calculation fixed. |
| `src/css/enhancements.css` | Added `.nationality-unknown`, `.nationality-conditional`, `.requirement-warnings li` |
| `tests/route-engine.test.js` | Appended 3 new describe blocks: P0.2 (10 tests), P0.3 (13 tests), P0.4 (9 tests + 2 integration) |
| `content/blog/guides/work/australia-working-holiday-visa-2026.md` | Correction banner, `eligibilityReviewStatus: under-correction`, false claims removed |
| `content/blog/guides/work/ireland-working-holiday-authorisation-2026.md` | Same correction pattern |
| `content/blog/guides/work/new-zealand-working-holiday-visa-2026.md` | Same correction pattern |
