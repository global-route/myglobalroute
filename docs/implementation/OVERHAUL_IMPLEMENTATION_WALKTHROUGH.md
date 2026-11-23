# MyPathway2Global Overhaul — Implementation Walkthrough

> **Status:** Proposed execution method; findings originate from `docs/overhaul.md`  
> **Created:** 2026-11-23  
> **Execution authority:** [Overhaul Taskfile](../project/OVERHAUL_TASKFILE.md)  
> **Repository:** `global-route/myglobalroute` — `main`

## 1. Purpose and governing rules

This walkthrough converts the assessment in `docs/overhaul.md` into a controlled engineering and product-correction programme. It explains how to investigate, implement, verify and release each class of correction without duplicating the existing product blueprint or creating competing task trackers.

The taskfile is the execution checklist. This walkthrough is the method and technical sequence. The existing architecture, data trust standard, evidence schema, product blueprint and phase tracker remain authoritative for their respective subjects unless an explicit, reviewed decision updates them.

### Non-negotiable rules

1. **Inspect before editing.** Re-fetch current `main`, the live deployment and relevant source records before implementing a finding. The assessment is a snapshot, not proof that every issue remains unchanged.
2. **No false verification.** A URL, date field, successful build or passing unit test does not independently prove an immigration claim.
3. **Never age evidence forward without checking it.** Do not bulk-bump `reviewAfter` to silence stale-evidence validation. Re-open the official source and verify the claim first.
4. **Unknown is not eligible.** Missing nationality, age, qualification, salary, funds or source information must not silently pass a requirement.
5. **No invented data.** Missing costs, approval rates, processing times, occupation demand and eligibility must remain explicitly unavailable.
6. **No guarantee language.** A route match, job-demand record, nomination or partner listing is not a guaranteed visa, job, nomination or approval.
7. **Preserve history.** Evidence corrections, article changes and policy updates should retain an audit trail.
8. **Small, reviewable implementation batches.** Keep each change focused, testable and reversible.
9. **Honest verification status.** Mark checks PASS, FAIL, BLOCKED or NOT RUN. Never infer success from a previous commit or a different workflow.
10. **No broad redesign by default.** Preserve pages and components that already meet the product standard. Correct weak spots and improve consistency.

## 2. Before implementation — establish the real baseline

### Step 2.1 — Synchronize repository state

- Confirm the current default branch and latest commit.
- Read `docs/overhaul.md`, this walkthrough, the taskfile, active sprint, phase status, changelog, README and documentation index.
- Inspect current `package.json` scripts and CI workflows before selecting commands.
- Identify whether the files and claims from the assessment still exist on `main`.
- Check current production deployment revision where deployment metadata is available.
- Capture current test, data-validation, SEO/accessibility, build and deploy workflow results.

**Output:** a dated baseline note in the taskfile or the relevant execution record. Do not overwrite old evidence with new assumptions.

### Step 2.2 — Map findings to implementation surfaces

For every task, record:

- Finding ID from the taskfile.
- Current source file/data record/page.
- User-visible consequence.
- Confirmed root cause (or mark it unconfirmed).
- Proposed correction.
- Dependencies and owner actions.
- Acceptance criteria.
- Verification command/manual test.
- Deployment and post-deployment check.

A page symptom may originate in a template, data model, shared component or generated output. Fix the source of the defect rather than patching only one rendered page.

## 3. Workstream A — Critical content and trust corrections

**Why first:** inaccurate immigration eligibility claims can cause users to waste money, disclose personal data to unsuitable intermediaries or make consequential plans.

### A1. Working-holiday eligibility review

Review the Australia, Ireland and New Zealand articles and all corresponding structured data, route records, related posts, internal links and badges.

For each destination:

1. Open the current official government eligibility page.
2. Confirm the exact applicant nationality, scheme, age band, quota and any country-specific conditions.
3. Capture the official URL, checked date, source title/authority and the precise claim supported.
4. If Nigeria is not eligible, state that clearly and distinguish the working-holiday scheme from other lawful work routes.
5. If the official source is ambiguous or contradictory, label the result as unresolved and do not publish an eligibility assertion.
6. Update the article and structured route data together.
7. Remove or downgrade verification badges until the full relevant scope is verified.
8. Check generated page, sitemap, metadata, JSON-LD, social preview and internal links.

**Acceptance:** no article or route tells a nationality that it qualifies unless a current official source supports that exact claim. A non-eligible finding is explained accurately, without implying that all other visa routes are unavailable.

### A2. Saskatchewan PNP / CRS wording

- Check current IRCC CRS rules and the relevant provincial nomination stream.
- Explain the 600-point effect only in its correct context.
- Explain that eligibility, nomination, acceptance and the Express Entry process still apply.
- Remove “guaranteed ITA” or equivalent absolute language.
- Review headline, summary, FAQ, metadata and related posts for repeated overstatement.

**Acceptance:** article describes the points effect accurately and does not promise an invitation or permanent residence.

### A3. Verification badge contract

Define the badge from explicit evidence metadata, not a date or source URL alone.

Minimum evidence attributes should identify:

- Claim/requirement ID and scope.
- Country, route and applicable nationality where relevant.
- Official authority and source URL.
- Source publication/effective date where available.
- Actual verification date.
- Review due date.
- Verification status and reviewer/process.
- Known exceptions, caveats or unresolved conflicts.

Keep effective date, publication date, last verified date and next review date separate. Reuse the existing evidence schema if it can represent these concepts; extend it additively only after checking compatibility with existing validators and data.

Suggested states are `verified`, `needs_review`, `research_required`, `conflicting_sources`, `superseded` and `unverified`. Map them to the repository's established vocabulary rather than creating a parallel status system.

**Acceptance:** every displayed trust badge is derived from a defined state and has a traceable supporting source; unresolved records cannot render as verified.

## 4. Workstream B — Evidence and data integrity

### B1. Resolve stale evidence correctly

The current sprint contains 15 evidence records marked stale and suggests extending their `reviewAfter` dates. That shortcut must not be used as the correction.

For each record:

1. Inspect the evidence record and every pathway requirement that references it.
2. Open the official authority source.
3. Confirm whether the requirement is still current and whether its scope matches the pathway.
4. Create a new evidence version/record where the facts or source review have changed, following the existing evidence schema.
5. Preserve historical source and verification information.
6. Update dependent requirements only when the source supports the change.
7. Set the next review date based on policy and risk.
8. Run data validation and pathway/evidence contract tests.

If the source cannot be checked, mark the record as needing research and keep dependent requirements blocked or non-publishable as appropriate.

**Acceptance:** stale warnings disappear because the evidence has been genuinely reverified or explicitly quarantined, not because dates were manipulated. All referenced evidence remains traceable.

### B2. Canonical counts

- Determine the authoritative data sources for countries, pathways, evidence, demand records and published posts.
- Define the meaning of total, active, publishable, research-required and published.
- Add or reuse a build-time count-generation step.
- Update homepage, About, directory, Find MyPathway, blog, README, sitemap metadata and relevant documentation.
- Avoid hardcoding multiple independent count values.
- Add a validation check to fail when static copy drifts from canonical values, where practical.

**Acceptance:** every surface reports the same metric under the same definition, or explicitly labels a different subset.

### B3. Evidence lifecycle and data contract

Audit current fields before adding new ones. Ensure that legal effective dates, source publication dates, verification dates, review deadlines and record supersession are distinct. Validators should reject impossible or contradictory combinations and explain the affected record.

**Acceptance:** a reviewer can identify what was verified, against which source, for what scope, when, and when it must be reviewed again.

## 5. Workstream C — Route engine and eligibility discovery

### C1. Requirement evaluation matrix

Create test cases for each requirement type present in the dataset, including:

- Nationality allowlist/blocklist and unknown nationality.
- Minimum age.
- Job offer/admission offer.
- Qualification and regulated profession.
- Experience.
- Points score.
- Sponsorship.
- Minimum funds and family-size/application-date variations.
- Monthly and annual salary.
- Currency conversion and missing/expired FX.
- Effective dates and stale evidence.
- Conflicting, missing and research-required evidence.

For every requirement type, test satisfied, unsatisfied, missing, unknown and stale states.

### C2. Correct evaluator semantics

- Missing inputs must produce an explicit missing-input/unknown result.
- Unknown nationality must not be reported as eligible.
- Qualification presence must not be treated as qualification equivalence.
- Salary must normalize both currency and period before comparison.
- Record gross/net basis where source and user inputs make this distinction relevant.
- Never compare raw USD income against a EUR/GBP/SEK/NOK threshold.
- Keep evidence freshness separate from legal effective dates.
- Keep discovery suitability separate from legal eligibility and final government decisions.

Do not weaken the engine to increase match counts. It is acceptable for the result set to shrink when unsupported routes are correctly excluded.

### C3. Currency and FX service

Inspect current route-engine and calculator implementations, existing dependencies and data standards before selecting an implementation.

Define one shared conversion contract:

- Currency code and amount.
- Source currency and target currency.
- Rate value, source/provider and timestamp.
- Maximum permitted age.
- Fallback behaviour and explicit unavailable state.
- Rounding rules and display precision.
- Test fixtures for conversion direction and edge cases.

Do not silently use inconsistent hardcoded rates in different modules. If live FX is unavailable or stale, fail closed for eligibility comparisons and explain that the comparison could not be completed.

**Acceptance:** the same input and rate snapshot produce the same normalized values across route discovery and calculator flows.

## 6. Workstream D — Visa Wizard continuity

Trace passport country and other required profile fields end-to-end:

1. Form control and default value.
2. Validation and state object.
3. Step transitions and back navigation.
4. Matching function arguments.
5. Route/category filters.
6. Result explanation.
7. Save/share/export behaviour, if present.
8. Analytics events, ensuring sensitive profile details are not sent unnecessarily.

Test nationality-eligible, nationality-ineligible, nationality-unknown and missing-nationality cases across each supported wizard purpose.

**Acceptance:** nationality cannot be dropped or replaced between input and result; the page explains unknown and unsupported cases without fabricating eligibility.

## 7. Workstream E — Calculator integrity

### E1. Financial model

Separate:

- Government/application fees.
- Tuition/deposits.
- Proof-of-funds requirement.
- Travel/relocation.
- Insurance/healthcare.
- Accommodation/deposit.
- Documentation/translation/authentication.
- Licensing/recognition.
- Initial settlement and recurring living costs.
- Emergency reserve.

Proof-of-funds is a required available balance, not automatically an expense. Do not add it to fees as if it were money paid away.

### E2. Missing data and ranking

- Represent unknown costs as unavailable, not zero.
- Suppress affordability rankings if comparable verified totals are absent.
- State which components are included/excluded.
- Show currency, conversion source/date and estimate date.
- Make assumptions editable and visible.
- Do not imply that a budget calculation confirms visa eligibility.

**Acceptance:** no route is described as free or affordable because missing data defaulted to zero; comparisons are shown only when sufficiently comparable.

## 8. Workstream F — Shared UI and content templates

### F1. Navigation/footer malformed output

- Search all source templates/pages for literal escaped newline fragments and malformed backtick substitutions.
- Identify the common generator or copy/paste origin.
- Fix the source component/template.
- Rebuild the site and inspect generated output across page families.
- Add a regression check for the literal artefact.

### F2. Template and accessibility repairs

Resolve the current sprint's 8 pages with missing `lang`/meaningful `title` and the blog index links without accessible names. Check whether all affected posts use the intended Eleventy layout/template.

Validate:

- Document language and unique title.
- One meaningful H1 and logical heading hierarchy.
- Accessible link names and button names.
- Keyboard/focus operation.
- Form labels and error messages.
- Contrast and responsive behaviour.
- Semantic landmarks and skip link.
- Image alternative text.

Run the repository's existing SEO/A11Y command and a live browser/axe audit where available. Do not claim WCAG conformance based on a single automated scan.

### F3. Article structure and metadata

Use the existing blog frontmatter and template before introducing new fields. Standardize country, pathway, audience/nationality, content type, publication date, last review, source review state and official source references where relevant.

Correct duplicate reading-time units and ensure the generated HTML, metadata and article content agree.

## 9. Workstream G — Country intelligence and Work Abroad Agent

### G1. Country profiles

First inspect the existing country page routes and data model. Improve the current profile structure rather than creating a second country database.

A useful profile should surface supported pathway categories, route status, requirements, nationality scope, official sources, review freshness, research gaps, qualification/licensing considerations and related content. Render useful fallback HTML so core links and summary content remain discoverable without client-side JavaScript.

### G2. Work Abroad Agent

Keep distinct concepts distinct:

- Labour demand signal.
- Live vacancy.
- Employer identity/verification.
- Recruiter/agent identity/verification.
- Sponsorship availability.
- Immigration route eligibility.

Inspect existing agent registry, validation script, safety gates, lead form and privacy flow. The current taskfile reports zero verified agents and owner-side commercial/vetting blockers. Do not activate a verified-agent claim or fabricate agent inventory to make the page appear populated.

Improve occupation matching only where source-backed data supports it. Consider qualifications, licensing, experience and language requirements; explain when these are not yet assessed.

## 10. Workstream H — Documentation, SEO and release integrity

- Update this taskfile as tasks are accepted, blocked, implemented and verified.
- Keep `docs/overhaul.md` as the findings register and append decision notes when the user approves or rejects corrections.
- Keep `docs/project/ACTIVE_SPRINT.md` as the current sprint summary; do not duplicate every task in multiple sprint files.
- Keep `docs/project/PHASE_STATUS.md` as the phase-level status authority.
- Update `docs/INDEX.md` and `CHANGELOG.md` when documentation or implementation changes warrant it.
- Preserve original blueprint intent; record any deliberate scope changes.
- Check canonical URLs, sitemap, robots, metadata and structured data after page/content changes.
- Deploy only after required gates pass or the owner explicitly accepts a documented limitation.

## 11. Verification and release protocol

For each implementation batch:

1. Run focused tests for changed logic/data.
2. Run the relevant data/schema validators.
3. Run lint and build verification.
4. Run full test suite where available.
5. Run SEO/accessibility verification.
6. Inspect generated HTML and changed routes.
7. Perform browser smoke tests for affected user journeys.
8. Inspect current GitHub Actions results.
9. Record exact command, result, commit and limitations.
10. Deploy only under the project's release process.
11. Verify the live page after deployment and record deployed revision.

Use these status values consistently:

- `PENDING`: not started.
- `IN_PROGRESS`: active work.
- `BLOCKED`: requires external input or unavailable dependency.
- `PASS`: acceptance criteria and required verification satisfied.
- `FAIL`: verification found a defect.
- `NOT_RUN`: not executed; do not imply success.
- `DEFERRED`: intentionally moved out of the current scope with a reason.

A unit-test pass does not prove source accuracy. A successful deploy does not prove a user journey works. A page being live does not prove that its content is correct.

## 12. Scope boundaries and sequencing

Do not combine the following into one large redesign sprint:

- Critical eligibility corrections and evidence governance.
- Route-engine correctness.
- Financial calculations.
- Shared UI/accessibility.
- Country profile and agent expansion.
- Monetization and strategic expansion.

Complete the critical trust/data work before expanding catalogue volume, new categories, paid partnerships or additional monetization placements.

Do not begin a wholesale Figma redesign unless a specific page is demonstrably below the agreed design standard. Preserve sound classic editorial layouts and working interaction patterns.

## 13. Definition of done

A finding is done only when:

- Its root cause was confirmed.
- The correction is implemented at the correct source layer.
- Related pages/data/metadata are updated.
- Acceptance criteria are met.
- Required automated and manual checks are recorded.
- Any unresolved owner or external dependency is documented.
- The change is committed and, if approved, deployed.
- The live result is checked where the change affects production.
- The taskfile, changelog and relevant project status documents agree.

A documentation-only task is not equivalent to fixing the underlying product defect.
