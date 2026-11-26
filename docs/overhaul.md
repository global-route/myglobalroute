# MyPathway2Global — Product, Website and Repository Overhaul Assessment

> **Status:** Assessment and correction register — not an implementation specification yet  
> **Assessment date:** 23 November 2026  
> **Repository:** [global-route/myglobalroute](https://github.com/global-route/myglobalroute)  
> **Branch reviewed:** `main`  
> **Reviewed revision:** `6e2de7adf840b3f5a55b876e1562dc4ce71332a7` (source snapshot observed during this assessment)  
> **Live product:** [mypathway2global.org.uk](https://mypathway2global.org.uk/)

This document consolidates the repository, product, data-quality, trust, page-level, editorial, SEO/accessibility and technical findings from the 23 November 2026 assessment. It is a working baseline for subsequent discussion. Findings should be confirmed against the latest main-branch code and live deployment before implementation, especially where live content and repository snapshots differ.

## 1. Executive assessment

MyPathway2Global has grown beyond a conventional immigration information website. Its strongest product direction is an **African-focused global mobility intelligence platform**: helping people explore work, study, business, visitor and other mobility pathways using structured requirements, country intelligence, official-source evidence and transparent uncertainty.

The underlying product direction is promising. The strongest differentiators are:

- Evidence-aware pathway data and official-source provenance.
- A distinction between publishable information and research-required/unknown information.
- Structured discovery through Find MyPathway and the Visa Wizard.
- A country directory, planning calculator, editorial library and Work Abroad Agent that can become connected parts of one product.
- A trust-oriented approach that should avoid fabricated approval rates, unsupported costs and guaranteed outcomes.

The main weakness is not a lack of features or pages. It is the gap between the platform's trust promise and the consistency, freshness, accuracy and presentation of the information users currently encounter. The immediate priority should be **trust and correctness before expanding the catalogue or undertaking a broad visual redesign**.

The product should compete on the quality of its mobility intelligence, not simply the number of countries, pathways or articles it lists. A smaller, explainable and verified catalogue is more valuable than a larger catalogue that overstates eligibility or source verification.

## 2. Product positioning and information architecture

### 2.1 Recommended product category

Position the product as global mobility intelligence and pathway discovery for African applicants, with Nigeria and other African markets as an important audience segment. Avoid presenting it as only:

- A travel blog.
- A visa application website.
- A generic immigration consultancy directory.
- A job board.
- A destination comparison website based on unverified cost and approval statistics.

The platform can support several connected user journeys:

1. **Study and scholarships** — admissions, scholarships, student permission, dependants and post-study options.
2. **Skilled employment** — occupation demand, qualification recognition, licensing, sponsorship and work permission.
3. **Visitor and transit** — tourism, family visits, short stays, transit and permitted activities.
4. **Digital nomad and remote work** — remote-work permission, income thresholds, tax/residence considerations and restrictions.
5. **Founder, investor and business mobility** — founder routes, investment routes, company formation and business residence.
6. **Other temporary and transitional routes** — working holidays where nationality agreements exist, seasonal work and route transitions.

These categories must remain distinct in the data model and user experience. Do not map digital nomad routes into ordinary employment routes merely to fit the current taxonomy. Do not imply that a country has a visitor or business route in the catalogue where that route has not been researched.

### 2.2 Connected product architecture

The major pages should act as connected entry points into one coherent intelligence system:

- **Homepage:** explains the platform, its audiences and the next useful action.
- **Find MyPathway:** structured discovery for work/study and other supported pathways; it is not a final legal eligibility decision.
- **Visa Wizard:** guided exploration for travel, nomad, uncertain purpose and other supported temporary purposes. Passport/nationality must persist through the complete flow.
- **Country Directory:** the country-level gateway into route categories, evidence, requirements and research gaps.
- **Country profiles:** the detailed source of truth for each destination.
- **Budget Calculator:** transparent planning estimates, not an eligibility or affordability guarantee.
- **Work Abroad Agent:** occupation and route intelligence, not a promise of a job offer.
- **Blog/editorial:** accessible explanations connected to the underlying country and pathway records.
- **About/trust pages:** explain methodology, evidence states, limitations and how corrections are handled.

## 3. Repository and project-health observations

### 3.1 Documentation and status alignment

The repository's project documentation and live product do not consistently report the same baseline. During this assessment:

- README baseline information was dated 11 November 2026.
- Active sprint and phase material had later updates, including 22 November.
- The active sprint recorded **15 stale evidence records** and **8 outstanding SEO/accessibility issues**.
- The latest project notes recorded CI/data-validation and quality/browser-smoke workflow failures. Earlier passing test totals are historical and should not be represented as proof that the latest revision is green.
- The README, About page, homepage, directory and blog display different product totals.

The project needs one canonical source for current counts and operational status. README and marketing-page numbers should be generated from, or checked against, the same validated data rather than manually maintained in multiple places.

### 3.2 Evidence freshness

The active sprint identifies stale evidence records, including records associated with Germany, France, Norway, Luxembourg, Portugal and Spain. The exact list should be rechecked against current main before implementation.

A review date must not be extended merely to make a record appear fresh. The correct process is:

1. Open the official source.
2. Confirm that the source still supports the recorded requirement.
3. Record what was checked and the date of verification.
4. Preserve the prior evidence/history rather than silently overwriting it.
5. Set the next review date based on the source and risk.
6. Revalidate every pathway or article that depends on the changed fact.

Keep these concepts distinct: source publication/effective date, last checked date, next review date and the period during which a requirement is legally effective.

### 3.3 Documentation hygiene

The current documentation is useful but should be reconciled so that:

- README describes the current product and points to the authoritative project documents.
- Active sprint, phase status, task records and changelog agree.
- Historical completion is not confused with current operational health.
- Blocked or untested work is explicitly labelled.
- A finding is not marked fixed merely because a task was written or a review date changed.

This assessment document is a consolidated correction register. It does not replace the original product blueprint, architecture or source-of-truth data documentation.

## 4. Cross-site issues and inconsistencies

### 4.1 Conflicting product counts

The inspected snapshots displayed materially different totals:

| Surface | Displayed figures observed |
|---|---|
| Repository baseline | 35 countries, 75 pathways, 147 posts |
| Homepage | 30 countries, 69 pathways |
| Find MyPathway | 69 pathways, 63 publishable |
| Homepage pathway filter | 59 |
| Country Directory | 30 countries |
| About page | 34 countries, 71 pathways, 65 publishable, 6 research-required, 218+ evidence records, 125 posts, 22 occupation-demand records |
| Blog index | 96 posts |

These figures may reflect different snapshots or inclusion rules, but the user-facing product does not explain that. Establish canonical definitions for each metric (for example, total records versus currently published records) and render consistent counts from a single validated source. Do not simply choose one number and hardcode it everywhere.

### 4.2 Shared navigation/footer rendering artefact

The live crawler-rendered pages showed stray literal ` characters between some navigation/footer links. The calculator source also contained a suspicious literal sequence around navigation markup (for example, a backtick followed by ` and whitespace). This appears consistent with an escaped-newline or template-generation defect.

**Correction:** inspect the shared header/footer source and all generated pages. Fix the source of the malformed markup, not only the individual visible instances. Add an HTML/template validation check so the defect does not return.

### 4.3 Shared components

Navigation, footer, breadcrumbs, page metadata, trust labels and article components should be centralized where the current architecture allows. Duplicated shared markup makes site-wide defects and inconsistent copy more likely.

## 5. High-priority trust and factual accuracy issues

### 5.1 New Zealand working-holiday article — critical

The live New Zealand working-holiday article for 2026 states that Nigerian nationals are eligible and displays an “Official Source Verified” badge with an audit date of 30 October 2026.

Immigration New Zealand's official working-holiday scheme country list does not include Nigeria. Its guidance says applicants can apply only if their country has a working-holiday agreement/scheme; if their country is not on the list, they cannot obtain a working-holiday visa through that scheme.

Official source: [Immigration New Zealand — Working holiday visas](https://www.immigration.govt.nz/new-zealand-visas/visas/visa/working-holiday-visa).

**Required correction:** remove or correct the Nigerian eligibility claim immediately. Recheck every country-specific condition, age range, quota, fee and application link against the current official scheme page. Do not retain an “Official Source Verified” label unless the claim and its scope have actually been checked. Review any related article, route record, internal link, social preview and structured data that repeats the claim.

This is a high-risk user-harm issue because readers could spend money or make plans based on an unavailable route.

### 5.2 Ireland and Australia working-holiday articles — urgent review

The Ireland working-holiday article also claims Nigerian eligibility and displays an official-verification badge. The previous project phase notes already identify the Australia, Ireland and New Zealand working-holiday articles as requiring owner/source verification.

The Ireland and Australia claims must be checked against the current official immigration/government eligibility lists for the relevant nationality. Do not assume they are false solely because the New Zealand claim is false; verify each independently.

Until reviewed, remove or downgrade any badge that communicates completed official verification. Clearly distinguish “research in progress” from “verified”.

### 5.3 Saskatchewan PNP and CRS wording — high priority

The Saskatchewan PNP article describes a provincial nomination as effectively guaranteeing an Invitation to Apply because a nomination can add 600 Comprehensive Ranking System points.

The 600-point effect is grounded in Canada's Express Entry CRS rules for an accepted provincial nomination, but the article's “guarantee” language is too categorical. A person must still qualify for the relevant program and nomination stream, satisfy applicable conditions, receive and accept a nomination, and remain subject to the applicable Express Entry process and rules.

Official sources:
- [IRCC — Comprehensive Ranking System criteria](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html)
- [IRCC — Provincial Nominee Program](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/works.html)

**Required correction:** explain the 600-point effect accurately and remove “guarantee” or equivalent wording. Explain the conditions and distinguish nomination eligibility from Express Entry selection.

### 5.4 Verification labels need an evidence contract

A badge such as “Official Source Verified” is a factual trust claim. It must not be triggered solely by the presence of a `lastFactChecked` date or a non-empty source URL.

A verification record should define at least:

- The exact claim or requirement verified.
- The relevant country, pathway, applicant nationality and scope.
- The official source URL and responsible authority.
- The date checked and, where available, the source's effective/publication date.
- The verifier/review process.
- The next review date or expiry rule.
- The verification state and any known limitations.

Suggested states: `verified`, eeds_review`, `research_required`, `conflicting_sources`, `superseded` and `unverified`. Use labels that users can understand. A source existing is not proof that every claim in an article has been verified.

## 6. Find MyPathway and pathway-matching engine

### 6.1 What is promising

The route engine has meaningful foundations: nationality allowlists/blocklists, unknown-status warnings, requirement evaluation, evidence/publishability filters and a distinction between discovery and final eligibility. These are good foundations for an evidence-first product.

The page itself says it does not make a final personal eligibility determination. Preserve and strengthen that distinction.

### 6.2 Findings in `src/js/route-engine.js`

The code paths inspected raised the following issues:

1. **Missing age input:** the minimum-age evaluator can fail to produce a warning when the user's age is absent. Missing data should be represented as unknown/incomplete, not silently treated as satisfied.
2. **Qualification matching:** the evaluator warns when qualification data is missing, but does not robustly match the user's qualification to the actual requirement. A generic “qualification present” check is not equivalence assessment.
3. **Salary comparison and currency:** salary evaluation compares the user's raw monthly income with requirement values that may be annual or monthly and denominated in different currencies. Currency normalization is not consistently applied before comparison. This can produce false positive/negative matches.
4. **Annual salary handling:** multiplying monthly income by 12 handles period conversion only; it does not solve currency mismatch or gross/net ambiguity.
5. **Staleness logic:** `isStale()` uses a requirement's `effectiveDate` and a 180-day threshold. A legal effective date is not the same thing as a source verification date or review date. Model these separately.
6. **FX fallback:** the engine contains a hardcoded FX table dated 5 November 2026 and fails closed after a 90-day age threshold. Failing closed is safer than silently trusting old rates, but the rate source/date and user-facing explanation need to be explicit.
7. **Unknown nationality status:** a route can be returned as discoverable with an unknown nationality status and a warning. That can be appropriate for exploration, but the UI must not make the result look like confirmed eligibility.
8. **Recommendation filtering:** recommendation results depend on goal selection and publishable/evidence filtering. Confirm that every goal/category has a deliberate behaviour and that unsupported categories do not silently disappear or get mapped to an unrelated category.

### 6.3 Required matching behaviour

- Treat missing user inputs as unknown, not as passing.
- Normalize requirement units and currency before numeric comparisons.
- Record whether salary is gross or net and whether the threshold is monthly or annual.
- Match qualifications against explicit equivalency/recognition rules; otherwise state that the match needs manual assessment.
- Distinguish nationality eligibility, route requirements, personal profile fit and final government decision.
- Explain why a route was included, excluded or marked uncertain.
- Show evidence freshness and the relevant official source at the point of decision.
- Keep the result a discovery aid, not a legal decision or promise of approval.

## 7. Visa Wizard

The Visa Wizard should remain a distinct guided journey rather than a duplicate Find MyPathway form.

It is useful for users who are exploring visitor, nomad, temporary or uncertain-purpose journeys. The main technical risk previously identified is that passport country is collected but may not be passed consistently through all matching operations and into the result profile.

**Required checks:**

- Trace passport/nationality from the first form input through state, validation, matching, result rendering and any saved/shareable profile.
- Confirm that nationality restrictions are applied to the actual selected purpose and route.
- Make “not researched” distinct from “not eligible”.
- Do not imply that a visitor permission allows work or remote work unless the official rules explicitly permit it.
- Explain the purpose and limits of the wizard before presenting a recommendation.

## 8. Country Directory and country profiles

### 8.1 What is working

The directory's evidence-status approach is a sound design choice. Avoid filling empty metrics with invented approval rates, costs or processing times just to make the table look complete.

### 8.2 Weaknesses and improvements

The directory should become the gateway into useful country intelligence, not remain a thin list of destinations.

A country profile should progressively provide:

- Country and immigration-system overview.
- Available pathway categories and route status.
- Work and skilled-employment routes.
- Study, admission and scholarship routes.
- Visitor, transit and temporary residence routes.
- Digital nomad/remote-work routes where officially available.
- Business, founder and investment routes where researched.
- Nationality-specific restrictions and bilateral agreements.
- Qualification recognition and regulated-profession licensing.
- Financial requirements, with currency and period clearly stated.
- Official government sources and the date each was checked.
- Research gaps, conflicts and unavailable data.
- Related pathways, articles and planning tools.

The inspected live directory snapshot presented a JavaScript-dependent placeholder rather than a fully populated server-visible country list. This may be a crawler snapshot limitation rather than proof that every user's browser sees a broken page. Nevertheless, provide meaningful server-rendered/static HTML or a fallback so search engines, assistive technology and users with script failures can access core country links and descriptions.

## 9. Budget Calculator and financial data

### 9.1 What is working

The calculator appropriately positions itself as a planning tool rather than an eligibility verdict. The product should retain that boundary.

### 9.2 Findings in `src/js/calculator.js`

- The calculator has a separate hardcoded FX fallback table from the route engine. Different rates can lead to inconsistent results across the same product.
- The inspected UI uses USD for savings, income and expenses, while destination requirements can be in EUR, GBP, SEK, NOK and other currencies.
- The live page indicates that verified total-cost data is unavailable for many destinations, but still presents an “Affordable Countries (sorted by cost)” concept and default/zero-valued figures. This risks implying a reliable ranking where comparable verified totals do not exist.
- A zero or missing cost must not be interpreted as free or affordable.

### 9.3 Recommended cost model

Keep distinct financial concepts separate:

1. Visa/application fees.
2. Tuition and education deposits.
3. Proof-of-funds or maintenance-funds thresholds.
4. Accommodation and initial rent/deposit.
5. Travel and relocation.
6. Insurance and healthcare.
7. Document preparation, translation and authentication.
8. Licensing, examination and qualification-recognition costs.
9. Initial settlement costs.
10. Emergency reserve and ongoing living costs.

Proof-of-funds is not necessarily money spent. Do not add it to actual fees as though it were a non-refundable expense. Distinguish required balance, expected expense, optional buffer and recurring cost.

**Required correction:** centralize FX handling, show source/date and conversion assumptions, distinguish missing from zero, and suppress cost rankings until the inputs are sufficiently complete and comparable.

## 10. Work Abroad Agent

### 10.1 Product opportunity

The Work Abroad Agent could become a valuable occupation-to-country intelligence feature. It should be built around realistic route feasibility, not generic country recommendations or promises of employment.

### 10.2 Gaps to address

The inspected page asks about skill level, occupation category, passport and availability. A more reliable match may also need:

- Specific occupation and job family.
- Qualification and recognition status.
- Years and type of experience.
- Professional licence/registration requirements.
- Language ability.
- Sponsorship requirements and availability.
- Applicant nationality and residence.
- Salary expectations and relevant thresholds.
- Whether the person is already eligible to work in the destination.

A labour-demand signal is not the same as a job vacancy, sponsorship offer or immigration eligibility. A profile in a directory is not automatically a verified employer or recruiter.

### 10.3 Trust requirements

- Define what “verified” means for an employer, recruiter, vacancy and route.
- Keep employer verification separate from vacancy verification.
- Display evidence scope and last checked date.
- Expire or recheck stale vacancies and demand signals.
- Provide a way to report misleading listings.
- Never guarantee a job, sponsorship or visa outcome.
- Explain whether a result is a possible immigration route, labour-market signal or actual open vacancy.

## 11. Blog and editorial system

### 11.1 Strengths

The live blog has useful reader-experience features, including social sharing, copy-link behaviour, related articles, reading progress, back-to-top navigation, a table of contents and key-number callouts. Preserve these where they work correctly.

### 11.2 Data and editorial weaknesses

- The live blog index, About page and repository baseline display different article counts.
- The live article pages inspected showed a duplicated reading-time unit such as “10 min min read”, despite project notes indicating that a prior duplicate-read-time issue had been fixed.
- Some articles carry official-verification badges despite unresolved or incorrect nationality eligibility claims.
- Articles are not consistently exposed as structured records linked to country/pathway data.

### 11.3 Recommended article metadata

Adopt a consistent article metadata model, as appropriate to the content:

- `primaryGoal`
- `secondaryGoals`
- `country`
- `pathwayId` or related pathway identifiers
- `audience` / relevant applicant nationality
- `contentType`
- `publishedDate`
- `lastReviewed`
- `sourceReviewStatus`
- `officialSources`
- `reviewDueDate`

Use the metadata to connect articles to country profiles and pathways, and to generate related content. Do not display verification badges merely because a field exists. Editorial content should distinguish general guidance, official requirements, commentary and unverified research.

### 11.4 Article layout and SEO

Standardize article templates around:

- One clear H1.
- A concise answer/summary near the top.
- Clear audience and nationality scope.
- Last-reviewed date and meaningful source status.
- Table of contents for longer articles.
- Requirements and exceptions in structured sections.
- Official sources near the claims they support.
- Related country and pathway links.
- Clear update history for material policy changes.
- Correct reading-time grammar and accessible heading hierarchy.

Do not make all articles identical if the content type requires a different structure. A country guide, policy update, route explainer and comparison article can share components while retaining suitable layouts.

## 12. About and trust experience

The About page communicates a useful mission and the platform's broader scope. The trust concept should be made operational, not left as marketing language.

Explain in plain language:

- What counts as an official source.
- How a requirement is checked.
- How frequently different kinds of facts are reviewed.
- What “verified”, “research required” and “unknown” mean.
- How conflicting government sources are handled.
- How users can report an error.
- What the platform does not do (for example, it does not issue visas or guarantee employment/approval).
- Whether the platform provides information, matching, referrals or regulated professional services.

Any claims about agencies, regulated practitioners, partners or organizations should accurately describe the relationship and the verification performed.

## 13. SEO, accessibility and performance

The active sprint records 8 outstanding SEO/accessibility issues. Recheck the exact issue list on current main before implementation.

Priority checks:

- One descriptive H1 per page and a logical heading hierarchy.
- Unique page titles and meta descriptions that match the page content.
- Canonical URLs and consistent indexability.
- Correct sitemap inclusion/exclusion for published, draft, research-required and superseded content.
- Valid structured data only where the visible content supports it.
- Crawlable country/pathway/article links and server-visible fallback content.
- Accessible labels, keyboard navigation, focus visibility and form error messages.
- Useful alt text for informative images; decorative images should not add noise.
- Adequate contrast and responsive layout.
- No malformed literal escape characters in rendered navigation/content.
- Avoid duplicate or thin pages created only to target keywords.
- Track real performance and Core Web Vitals before asserting that a page is fast.

SEO work should improve useful discovery and trust, not encourage publishing more low-confidence pages.

## 14. Monetization and growth considerations

The assessment did not establish that advertising or monetization is the immediate blocker. Monetization should follow a stable, useful product experience.

Potential future areas to evaluate:

- Carefully placed display advertising, without disrupting route discovery or trust.
- Relevant partner referrals, with clear disclosure and no implication of government endorsement.
- Paid professional assistance or verified partner services, with appropriate regulatory and consumer-protection review.
- Employer/recruiter tools, subject to strong verification and anti-scam controls.
- Premium planning/workspace features only where they add genuine user value.

SEO, content distribution and advertising must not create incentives to overstate eligibility, invent metrics or publish unverified route claims. Any AdSense or other advertising implementation should be assessed separately for policy compliance, consent/privacy, placement, page quality and user experience.

## 15. Prioritized correction register

Priority labels indicate sequencing recommendations, not proof that work has been scheduled or completed.

### P0 — Trust, safety and correctness

1. Correct the New Zealand working-holiday article's Nigerian eligibility claim against Immigration New Zealand's official country list.
2. Recheck Australia and Ireland working-holiday claims independently against their current official nationality eligibility rules.
3. Remove or downgrade “Official Source Verified” badges wherever the underlying claims have not been fully checked.
4. Review the 15 stale evidence records using the official-source verification process; do not merely extend review dates.
5. Fix salary threshold comparison: period, currency, gross/net and missing-input handling.
6. Fix the shared navigation/footer stray-` rendering artefact at its source.
7. Recheck and close the 8 recorded SEO/accessibility issues with evidence.
8. Correct over-categorical Saskatchewan PNP/CRS “guarantee” language.

### P1 — Canonical data and core product integrity

1. Establish a canonical source for country, pathway, evidence, article and occupation-demand counts.
2. Synchronize homepage, About, Find MyPathway, directory, blog, README, sitemap and metadata.
3. Separate effective dates, source publication dates, verification dates and review-due dates.
4. Implement a consistent evidence-status model and badge rules.
5. Trace and correct passport/nationality propagation throughout the Visa Wizard.
6. Improve age, qualification and unknown-input evaluation in the route engine.
7. Centralize FX rates and conversion logic used by the route engine and calculator.
8. Correct calculator missing/zero cost handling and suppress unsupported affordability rankings.
9. Standardize article metadata, reading-time display and source review state.

### P2 — Page quality and connected journeys

1. Expand country profiles into structured country-intelligence gateways.
2. Improve Find MyPathway explanations for included, excluded and uncertain routes.
3. Make Visa Wizard purpose boundaries and result limitations clearer.
4. Improve Work Abroad Agent inputs, employer/vacancy verification and result explanations.
5. Connect editorial articles to canonical country and pathway records.
6. Add server-rendered or static fallback content to the directory and other critical JS-dependent pages.
7. Centralize shared site components and add regression checks for common markup.

### P3 — Strategic product expansion

1. Build scholarship intelligence as a distinct category.
2. Expand international employment intelligence and verified employer infrastructure.
3. Develop business/founder/investor mobility intelligence.
4. Consider a personal mobility workspace for saved profiles, routes, evidence changes and planning.
5. Evaluate partner/referral infrastructure and monetization after trust controls are stable.
6. Expand destination coverage only when the evidence and review capacity can support it.

## 16. Suggested implementation sequence

A sensible sequence for the next planning discussion is:

**Stage A — Immediate corrections**
- Resolve the New Zealand article and verification badge.
- Independently verify Ireland and Australia claims.
- Correct Saskatchewan PNP wording.
- Fix the shared navigation artefact.
- Record the current state of the 15 stale evidence items and 8 SEO/accessibility issues.

**Stage B — Data and engine reliability**
- Define canonical counts and evidence-state rules.
- Fix route requirement evaluation and currency/period normalization.
- Fix nationality propagation through Visa Wizard.
- Unify calculator and route-engine FX behaviour.
- Correct missing-versus-zero financial data handling.

**Stage C — Product page consistency**
- Align homepage, About, directory and Find MyPathway.
- Improve country profiles.
- Standardize blog/article metadata and templates.
- Improve Work Abroad Agent scope and verification.
- Add server-visible fallback content where needed.

**Stage D — Strategic expansion**
- Plan scholarship, business mobility, verified employment and personal workspace features.
- Reassess monetization and growth opportunities after core trust and data integrity work.

Implementation should be broken into reviewable tasks with clear acceptance criteria. A task should not be marked complete until its code/data change and relevant verification evidence exist. If CI or external test capacity is unavailable, record the limitation as untested/blocked rather than implying a pass.

## 17. Verification boundaries and cautions

This was a repository/documentation and live-page assessment, with targeted inspection of relevant JavaScript and official source pages. It was not a complete end-to-end browser test of every user journey.

The following were **not independently verified in this assessment**:

- Every form submission and interactive state across all pages.
- Every possible route-engine input combination.
- Every pathway and evidence record in the complete dataset.
- Full performance/Core Web Vitals measurements.
- Every current GitHub Actions run and all test logs.
- Every legal requirement for every country.
- The correctness of every article in the editorial library.

Live-page counts and repository counts are snapshots and may have changed. Recheck current main and production before turning any finding into a code change. Where a claim is uncertain, retain that uncertainty rather than presenting an inference as a confirmed defect.

## 18. Reference pages and sources

### Repository/project documents

- [Active Sprint](https://github.com/global-route/myglobalroute/blob/main/docs/project/ACTIVE_SPRINT.md)
- [Phase Status](https://github.com/global-route/myglobalroute/blob/main/docs/project/PHASE_STATUS.md)
- [Product Improvement Blueprint](https://github.com/global-route/myglobalroute/blob/main/docs/product/MYPATHWAY2GLOBAL_PRODUCT_IMPROVEMENT_IMPLEMENTATION_BLUEPRINT.md)
- [Deep Website/Product Assessment and Implementation Walkthrough](https://github.com/global-route/myglobalroute/blob/main/docs/MYPATHWAY2GLOBAL_DEEP_WEBSITE_PRODUCT_ASSESSMENT_AND_IMPLEMENTATION_WALKTHROUGH.md)
- [Changelog](https://github.com/global-route/myglobalroute/blob/main/CHANGELOG.md)

### Live product pages inspected

- [Homepage](https://mypathway2global.org.uk/)
- [Find MyPathway](https://mypathway2global.org.uk/pages/find-mypathway.html)
- [Country Directory](https://mypathway2global.org.uk/pages/countries.html)
- [Work Abroad Agent](https://mypathway2global.org.uk/pages/work-abroad-agent.html)
- [Budget Calculator](https://mypathway2global.org.uk/pages/calculator.html)
- [About](https://mypathway2global.org.uk/pages/about.html)
- [Blog](https://mypathway2global.org.uk/blog/)
- [New Zealand working-holiday article](https://mypathway2global.org.uk/blog/guides/work/new-zealand-working-holiday-visa-2026/)
- [Ireland working-holiday article](https://mypathway2global.org.uk/blog/guides/work/ireland-working-holiday-visa-2026/)
- [Saskatchewan PNP article](https://mypathway2global.org.uk/blog/guides/work/saskatchewan-immigrant-nominee-program-2026/)

### Official sources used for targeted factual checks

- [Immigration New Zealand — Working holiday visas and eligible countries](https://www.immigration.govt.nz/new-zealand-visas/visas/visa/working-holiday-visa)
- [Immigration, Refugees and Citizenship Canada — Comprehensive Ranking System criteria](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html)
- [Immigration, Refugees and Citizenship Canada — Provincial Nominee Program](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees/works.html)

---

## 19. Working agreement for the next revision

This file is the consolidated assessment baseline, not the final approved implementation plan.

In the next discussion, review the findings and decide which corrections to accept, amend, defer or reject. Update this same `docs/overhaul.md` file as those decisions are made, preserving a clear distinction between:

- Observed finding.
- Confirmed root cause.
- Agreed correction.
- Implementation task.
- Verification evidence.
- Completion status.

Do not silently remove unresolved findings. Record decisions and reasons so the document remains a useful audit trail for subsequent sprints and phases.
