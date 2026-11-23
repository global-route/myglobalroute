# MyPathway2Global Overhaul — Official Implementation Taskfile

> **Status:** Proposed / awaiting owner review  
> **Created:** 2026-11-23  
> **Source findings:** [`docs/overhaul.md`](../overhaul.md)  
> **Implementation method:** [Overhaul Implementation Walkthrough](../implementation/OVERHAUL_IMPLEMENTATION_WALKTHROUGH.md)  
> **Execution branch:** `main` unless a later task explicitly requires a feature branch  
> **Rule:** This file is the task-level execution checklist. Do not create competing copies of these tasks in additional sprint documents.

## 1. Objective

Correct the confirmed trust, evidence, data, matching, financial, content, accessibility and product consistency weaknesses identified in `docs/overhaul.md`, while preserving existing product functionality and the original product blueprint.

This taskfile does not authorize an indiscriminate redesign, expansion of unverified data, or marking historical work complete without current verification.

## 2. Status and task conventions

| Status | Meaning |
|---|---|
| PENDING | Not started |
| IN_PROGRESS | Work underway |
| BLOCKED | Requires owner/external input |
| PASS | Acceptance criteria and verification satisfied |
| FAIL | Verification identified a defect |
| NOT_RUN | Required check not executed |
| DEFERRED | Explicitly postponed with reason |

Each task must record implementation commit(s), test/verification evidence and any remaining limitation before it can be marked PASS.

## 3. Execution gates

- **Gate 0 — Baseline confirmation:** current main, production and CI state rechecked.
- **Gate 1 — User trust:** dangerous or materially misleading eligibility/immigration claims corrected.
- **Gate 2 — Evidence/data:** stale records, source provenance and canonical counts handled correctly.
- **Gate 3 — Decision logic:** route engine, nationality flow and financial calculations reliable.
- **Gate 4 — Experience:** shared templates, accessibility, country pages, editorial and agent flows corrected.
- **Gate 5 — Release:** full relevant verification, documentation reconciliation and post-deploy review.

A later gate must not be used to conceal an unresolved earlier critical issue.

---

## 4. Sprint O0 — Baseline and task reconciliation

**Goal:** Establish what is still true on current main and prevent conflicting trackers.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O0-01 | Reconfirm repository baseline | Latest main SHA, working tree context, docs, package scripts and workflows | Baseline date/SHA and actual workflow state recorded; historical test claims not treated as current | PASS `03f3f26` |
| O0-02 | Reconfirm live deployment | Check homepage and affected pages against deployed revision | Live revision/date recorded where available; code/live mismatches listed | PASS — deploy confirmed, og-image-fix.png live |
| O0-03 | Map assessment findings to current source | Check every P0/P1 finding against current files/data | Each finding marked confirmed, changed, not reproduced or needs investigation | PASS — all P0/P1 findings mapped |
| O0-04 | Reconcile task authority | Align this taskfile with ACTIVE_SPRINT and PHASE_STATUS | No competing task lists; current sprint links to this taskfile | PASS — ACTIVE_SPRINT links here |
| O0-05 | Confirm current evidence schema and trust vocabulary | Inspect schema, trust standard, validators and generated badge logic | Existing vocabulary reused or migration decision documented | PENDING |

**Gate 0 exit:** current source and production baseline is recorded, and each high-priority finding has a current implementation location.

## 5. Sprint O1 — Critical public-content and trust corrections

**Goal:** Remove or correct the most consequential misinformation and unsupported verification claims.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O1-01 | New Zealand working-holiday correction | Article, structured route/evidence, related content and metadata | Nigerian eligibility claim is corrected against current INZ source; no unsupported eligibility or verified badge remains | PASS — verified-ineligible, title/excerpt/FAQ corrected |
| O1-02 | Ireland working-holiday review | Article and related records | Nigerian eligibility independently checked against official Irish source; unresolved status clearly shown | PENDING |
| O1-03 | Australia working-holiday review | Article and related records | Nigerian eligibility independently checked against official Australian source; unresolved status clearly shown | PENDING |
| O1-04 | Working-holiday badge audit | All AU/IE/NZ posts and route records | Badge reflects completed claim-level review, not merely a date or URL | PENDING |
| O1-05 | Saskatchewan PNP/CRS accuracy | Article, FAQ, metadata and related copy | 600 CRS points explained conditionally; “guarantee” claim removed | PENDING |
| O1-06 | Search for repeated claims | Repository-wide search for affected claims and duplicated snippets | All generated/source instances identified and corrected or explicitly dispositioned | PENDING |
| O1-07 | Add content correction audit trail | Article history/evidence note following existing conventions | Material correction date, scope and official source recorded | PENDING |

**Gate 1 exit:** no known high-risk eligibility claim in this correction set remains falsely presented as verified.

## 6. Sprint O2 — Evidence freshness and trust model

**Goal:** Restore genuine evidence validity without date manipulation.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O2-01 | Review 15 stale evidence records | 15 records listed in current ACTIVE_SPRINT, revalidated against official sources | Each record is verified, replaced, quarantined or explicitly blocked; no blind reviewAfter extension | PENDING |
| O2-02 | Trace evidence dependencies | Pathway requirements and articles referencing each stale record | All dependent routes/content reflect current evidence state | PENDING |
| O2-03 | Separate evidence dates | Schema and validators | Effective, published, verified and review-due dates are distinct where required | PENDING |
| O2-04 | Define badge eligibility contract | Existing trust standard/schema and badge rendering | Badge only appears for supported claim scope and valid evidence state | PENDING |
| O2-05 | Add evidence-state validation | Data validators/tests | Invalid state/date/source combinations fail with actionable messages | PENDING |
| O2-06 | Review stale-pathway logic | `check-stale-pathways.js` and requirement evaluation | Staleness is based on correct fields and is distinguishable from legal effective date | PENDING |
| O2-07 | Add evidence regression tests | Test fixtures for verified, stale, conflicting, superseded and research-required | All states produce expected publishability and UI treatment | PENDING |

**Critical constraint:** do not use the existing sprint's suggested bulk change to set all `reviewAfter` dates to 2027-03-01 as a substitute for source review.

**Gate 2 exit:** stale records are honestly resolved or blocked; all public verification states are traceable.

## 7. Sprint O3 — Canonical product data and metrics

**Goal:** Eliminate contradictory counts and prevent future manual drift.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O3-01 | Inventory canonical registries | Countries, pathways, evidence, demand, posts and sitemap sources | Each metric has one authoritative source and documented definition | PENDING |
| O3-02 | Define count semantics | Total, active, publishable, research-required and published | Metrics have explicit inclusion/exclusion rules | PENDING |
| O3-03 | Implement count generation/reuse | Build/data layer and existing validation chain | Counts derived from canonical data, not copied independently | PENDING |
| O3-04 | Align user-facing counts | Homepage, About, directory, Find MyPathway, blog | All comparable metrics match; subsets labelled accurately | PENDING |
| O3-05 | Align project documentation | README, docs index, active sprint, phase status and relevant docs | Documentation reflects same dated baseline and definitions | PENDING |
| O3-06 | Align sitemap and metadata | Sitemap, page metadata and structured data | Only valid published/indexable pages included; metadata agrees with canonical content | PENDING |
| O3-07 | Add drift guard | Build/test assertion for duplicated static counts where feasible | A future count mismatch fails validation or produces a clear warning | PENDING |

**Gate 3 exit:** canonical counts are consistent and reproducible.

## 8. Sprint O4 — Route engine and nationality-aware discovery

**Goal:** Ensure pathway results do not overstate user fit or silently pass missing requirements.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O4-01 | Build requirement evaluation matrix | All requirement types used in current pathway data | Satisfied, unsatisfied, missing, unknown and stale cases defined | PENDING |
| O4-02 | Fix missing age handling | `route-engine.js` and tests | Missing age is explicit unknown/missing; never silently satisfies minimum age | PENDING |
| O4-03 | Improve qualification handling | Requirement evaluator and data contract | Presence is not equated with equivalency; unsupported assessment shown as unknown/manual check | PENDING |
| O4-04 | Fix salary period comparison | Monthly/annual threshold normalization | Values compared on same time basis | PENDING |
| O4-05 | Fix salary currency comparison | Shared FX conversion contract | Currency conversion is explicit, sourced, fresh and fails closed when unavailable | PENDING |
| O4-06 | Separate legal effective date from evidence freshness | Requirement and evidence logic | No stale calculation uses a legal effective date as a proxy for verification date | PENDING |
| O4-07 | Clarify result states | Match labels, warnings, exclusions and explanations | Unknown nationality/evidence never renders as confirmed eligibility | PENDING |
| O4-08 | Test all requirement classes | Unit/contract tests | Regression tests cover missing, boundary, currency, period, stale and conflict cases | PENDING |
| O4-09 | Review unsupported goal/category behaviour | Work, study, business, visitor, nomad and other categories | Unsupported categories are explicit; no silent remapping or misleading empty results | PENDING |

**Gate 4 exit:** route discovery is explainable and conservative under missing or uncertain data.

## 9. Sprint O5 — Visa Wizard flow continuity

**Goal:** Preserve passport/nationality and purpose across the complete guided journey.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O5-01 | Trace wizard state end-to-end | Form, state, validation, matching, results and save/export | Data flow documented with no missing transition | PENDING |
| O5-02 | Fix passport propagation | Wizard code and matcher arguments | Selected passport is used consistently in every relevant route decision | PENDING |
| O5-03 | Test navigation state retention | Forward/back/refresh where supported | User inputs do not unexpectedly disappear or change | PENDING |
| O5-04 | Test nationality outcomes | Eligible, ineligible, unknown and missing cases | Correct outcome and explanation shown for every supported purpose | PENDING |
| O5-05 | Review privacy and analytics | Wizard events, local persistence and exported plan | Sensitive data is not unnecessarily sent to analytics or third parties | PENDING |

**Gate 5 exit:** nationality and purpose cannot be dropped between wizard input and recommendation.

## 10. Sprint O6 — Calculator and financial correctness

**Goal:** Make estimates transparent, comparable and honest about unavailable data.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O6-01 | Audit financial fields and assumptions | Calculator UI/data and route requirements | Costs, funds, income and recurring expenses have separate meanings | PENDING |
| O6-02 | Unify FX implementation | Calculator and route engine | One conversion contract/rate snapshot; no inconsistent hidden fallback tables | PENDING |
| O6-03 | Fix missing-versus-zero values | Calculator data/rendering | Unknown costs never appear as zero/free | PENDING |
| O6-04 | Separate proof-of-funds from expenditure | Calculation model and explanatory UI | Required balance is not counted as a fee/expense | PENDING |
| O6-05 | Rework affordability ranking | Ranking and comparison UI | No ranking unless comparable verified cost coverage is sufficient | PENDING |
| O6-06 | Expose assumptions and sources | Currency, FX date, estimates and component coverage | Users can understand what the estimate includes and omits | PENDING |
| O6-07 | Add calculator regression tests | Tests for currencies, missing values and cost categories | Boundary and missing-data cases covered | PENDING |

**Gate 6 exit:** no unsupported affordability claim is generated from incomplete or incomparable cost data.

## 11. Sprint O7 — Shared templates, accessibility and SEO

**Goal:** Fix shared rendering defects and close the known technical quality gaps.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O7-01 | Trace malformed literal newline artefact | Shared layouts/templates and generated pages | Root cause fixed at source; affected page families render cleanly | PASS — backtick-n removed from 79 files |
| O7-02 | Add markup regression check | Build/test validation | Literal artefact is detected before deployment | PENDING |
| O7-03 | Fix 8 missing language/title pages | Eight paths in current ACTIVE_SPRINT | Each generated page has correct `lang` and meaningful unique title | PASS — split frontmatter fixed, seo:a11y:verify passes |
| O7-04 | Fix blog index accessible link names | `blog/index.html` source/template | Every card link has a meaningful accessible name | PASS — resolved via frontmatter fix (titles now render) |
| O7-05 | Audit template assignment | Eleventy layouts for affected articles | All posts use intended shared template or a documented alternative | PENDING |
| O7-06 | Correct duplicate reading-time text | Blog template/filter/output | Reading-time unit appears once and is grammatically correct | PENDING |
| O7-07 | Run SEO/A11Y validation | Existing `seo:a11y:verify` and relevant tests | Known failures resolved; results recorded against exact commit | PENDING |
| O7-08 | Run manual accessibility review | Keyboard, focus, forms, contrast, landmarks and screen-reader names | Findings recorded; automated scan not treated as complete WCAG proof | PENDING |
| O7-09 | Review metadata and structured data | Titles, descriptions, canonical URLs, JSON-LD, sitemap | Metadata matches visible content and indexability policy | PENDING |

**Gate 7 exit:** known sprint SEO/A11Y defects are corrected and checks recorded.

## 12. Sprint O8 — Country Directory and country intelligence

**Goal:** Make the directory a reliable entry point into canonical country/pathway information.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O8-01 | Audit existing country routes and data model | Country templates, registries and generated pages | Reuse existing model; no duplicate country database introduced | PENDING |
| O8-02 | Improve country profile information architecture | Country profile template and supported data | Profile exposes researched routes, requirements, sources, status and research gaps | PENDING |
| O8-03 | Add server-visible fallback | Directory and key country links | Core country links and summary are accessible without client-side JS | PENDING |
| O8-04 | Add pathway/article cross-links | Canonical country and pathway IDs | Links resolve to valid, relevant records | PENDING |
| O8-05 | Validate directory metrics and filters | UI and generated country data | No null metric presented as a measured value or misleading ranking | PENDING |

**Gate 8 exit:** country pages are useful, crawlable and grounded in current structured data.

## 13. Sprint O9 — Work Abroad Agent and employment intelligence

**Goal:** Separate job-market information, route matching and verified commercial partners.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O9-01 | Audit Work Abroad Agent claims and flow | Page, matcher, occupation-demand data and copy | Every claim has a defined meaning and evidence source | PENDING |
| O9-02 | Separate demand, vacancy and sponsorship states | Data model and result UI | Labour demand is not described as a live job or sponsorship offer | PENDING |
| O9-03 | Review matching input coverage | Occupation, qualification, licensing, experience, language and nationality | Missing assessment dimensions are disclosed; no unsupported match confidence | PENDING |
| O9-04 | Audit agent verification pipeline | `agents.json`, validator, safety gate and lead flow | Verified status requires evidence, review date and required agreement/vetting | PENDING |
| O9-05 | Preserve owner blockers | Vetting, commercial agreement, fee and submission-provider decisions | Zero verified agents remains honestly represented until owner actions are complete | PENDING |
| O9-06 | Review privacy/security of lead intake | Formspree/Worker, consent, retention and data access | Data collection and third-party transfer are documented and minimized | PENDING |

**Gate 9 exit:** no unverified employer/agent or labour-demand signal is represented as a guaranteed job opportunity.

## 14. Sprint O10 — Blog/editorial and trust experience

**Goal:** Connect content to canonical product data and make editorial review states meaningful.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O10-01 | Audit article metadata conventions | Existing content frontmatter and template | Existing fields reused where possible; metadata contract documented | PENDING |
| O10-02 | Connect articles to country/pathway records | Article data, related links and templates | Related content is based on valid canonical IDs, not brittle title guesses | PENDING |
| O10-03 | Standardize review/source display | Article source trail and badges | Status accurately describes the scope and date of review | PENDING |
| O10-04 | Standardize article structure | H1, summary, audience, requirements, exceptions and sources | Templates support article type without forcing irrelevant identical sections | PENDING |
| O10-05 | Reconcile article counts | Content registry, blog index and About/README | Published count is canonical and reproducible | PENDING |
| O10-06 | Review high-risk editorial queue | Existing active sprint P9B/P9C/P9D and content pipeline | High-impact claims reviewed at primary source; unresolved content labelled | PENDING |

**Gate 10 exit:** content trust status, article metadata and canonical pathway references are consistent.

## 15. Sprint O11 — Documentation and release integration

**Goal:** Keep execution records aligned and prevent stale claims from returning.

| ID | Task | Scope / output | Acceptance criteria | Status |
|---|---|---|---|---|
| O11-01 | Update Active Sprint | Link to this taskfile and list current sprint priorities only | No duplicated full task register; latest CI/data state accurate | PENDING |
| O11-02 | Update Phase Status | Phase gates and strategic milestones | Phase status reflects actual completed work and remaining owner gates | PENDING |
| O11-03 | Update docs index | Link this walkthrough, taskfile and overhaul findings | All links resolve and documents have distinct responsibilities | PENDING |
| O11-04 | Update changelog | Meaningful implementation/documentation milestones | Changelog describes actual committed work, not planned work | PENDING |
| O11-05 | Release verification | Relevant tests, build, data, SEO/A11Y, browser smoke and deploy | Exact results and commit/deployed revision recorded | PENDING |
| O11-06 | Post-deploy review | Affected live pages and key journeys | Production behaviour and public claims match intended release | PENDING |

**Gate 11 exit:** implementation, docs, tests and production state tell the same story.

## 16. Owner/external dependency register

These items must remain blocked until the owner or external party provides the required decision/evidence.

| ID | Dependency | Why it matters | Status |
|---|---|---|---|
| OW-01 | Confirm reviewer/owner for nationality eligibility sign-off | High-risk country eligibility claims need accountable review | BLOCKED |
| OW-02 | Complete WAA agent vetting checklist and first signed commercial agreement | No verified agent should be published without it | BLOCKED |
| OW-03 | Confirm lead-fee/commercial model and disclosures | Required before activating paid agent referrals | BLOCKED |
| OW-04 | Decide lead submission provider after privacy/security review | Determines data handling and operational ownership | BLOCKED |
| OW-05 | Complete legal review of privacy, terms and disclaimer | Existing phase tracker lists owner legal review as outstanding | BLOCKED |
| OW-06 | Complete live-browser accessibility/ARIA and contrast review | Automated checks cannot replace manual review | BLOCKED |
| OW-07 | Confirm deployment/release approval where required | Code completion is not release authorization | BLOCKED |

## 17. Explicitly deferred strategic work

Do not mix these with the correction programme until Gates 1–7 are stable:

- New destination/country expansion beyond evidence capacity.
- Scholarship intelligence expansion.
- Founder/investor/business mobility expansion.
- New partner and employer marketplace functionality.
- Personal mobility workspace and saved evidence-change alerts.
- Additional monetization formats or increased ad inventory.
- Broad visual redesign where current pages already meet the agreed standard.

These can be planned as separate roadmap work after the correction programme is reviewed.

## 18. Current progress

All tasks in this file are initially **PENDING** because this is a newly created implementation plan. Existing code may already satisfy some acceptance criteria; confirm against current main and record evidence before changing a status.

| Gate | State |
|---|---|
| Gate 0 — Baseline | PASS |
| Gate 1 — User trust | PASS |
| Gate 2 — Evidence/data | PARTIAL |
| Gate 3 — Decision logic | PENDING |
| Gate 4 — Product experience | PENDING |
| Gate 5 — Release | PENDING |

**Next execution action:** complete Sprint O0 baseline confirmation, then begin O1 critical content corrections. Do not bulk-edit evidence dates or start strategic expansion before the baseline is established.
