# MyPathway2Global — Product Improvement & Implementation Blueprint

> **Document type:** Product assessment translation, implementation walkthrough and improvement blueprint  
> **Assessment reference date:** 5 November 2026  
> **Repository:** `global-route/myglobalroute`  
> **Target branch:** `main`  
> **Status:** Proposed implementation blueprint — findings require code/data/live revalidation before being treated as current verified defects  
> **Scope:** Product integrity, mobility intelligence, pathway matching, content/evidence governance, financial planning, privacy/monetization and staged product expansion

---

## 1. Executive direction

MyPathway2Global should be developed as an **African-focused, evidence-backed global mobility intelligence platform**. It is broader than a travel blog or a conventional visa-information website. It helps users understand and compare legitimate study, work, visitor, remote-work, business and investment mobility options, the requirements attached to those options, the financial implications and the official next steps.

The next improvement cycle should not begin with another wholesale visual redesign. The priority is to make the product promises, underlying data, matching logic, published claims and operational governance agree with one another.

The assessment supplied for this blueprint reports three particularly important risk areas:

1. Nationality-specific eligibility claims in recently published working-holiday articles may be incorrect.
2. The route-matching engine may display matches without evaluating all mandatory structured requirements or passport restrictions.
3. Financial matching may compare values denominated in different currencies and may overstate a user's ability to bridge a funds gap.

These are product-trust issues, not cosmetic defects. They should be investigated and corrected before the platform expands its claims or traffic.

### Product principle

**A pathway must never be presented as a suitable or available match merely because the system has not checked a requirement. Unknown is not eligible, verified or satisfied.**

### Important status note

This document translates the findings and research narrative supplied for the 5 November 2026 assessment into an implementation-ready plan. The repository and production behaviour must be rechecked before implementation. Counts, file references, article claims, source rules, current provider configuration and test results below are assessment-reported snapshots, not a declaration that this commit independently reproduced every finding.

---

## 2. Product definition and service boundaries

The platform combines multiple mobility journeys. They share a common evidence and trust layer, but they must not share one undifferentiated eligibility model.

| Product service | User question | Appropriate product behaviour |
|---|---|---|
| Study and scholarships | Where can I study, and what route/funding conditions apply? | Explain study permits, admission, tuition/funds, scholarships and official application steps |
| Skilled employment | Which work routes could fit my passport, occupation and circumstances? | Evaluate nationality, occupation, qualifications, job offer, sponsor, salary and licensing conditions |
| Visitor, short-stay and transit | Can I visit or transit through this destination for this purpose? | Separate passport–destination–purpose entry checker with stay and activity restrictions |
| Digital nomad and remote work | Can I reside in this country while working remotely? | Compare remote-income rules, client/employer location, funds, duration, renewal, tax and family provisions |
| Founder, investor and business immigration | Is there a genuine residence route linked to a business or investment? | Evaluate programme-specific business, capital, ownership and residence requirements |
| Company formation and cross-border business | Can I establish or own a company abroad? | Explain formation, ownership, banking, tax and compliance separately from immigration permission |

**Do not conflate company formation with immigration permission.** A person may be able to own a foreign company without having the right to reside or work in that country.

### Distinct user journeys

- **Find MyPathway:** for users who already know the broad goal they want to explore.
- **Visa Wizard:** for users who need guided discovery. Preserve its progressive, five-step interaction pattern while correcting the purpose taxonomy and eligibility logic.
- **Visitor checker:** a distinct journey, not a label attached to a work/nomad wizard.
- **Future JobAgent:** a proposed employment-discovery and recruitment/agent coordination product. It is discussed in Section 13 as a separate expansion concept and is not part of the correction scope or approved for implementation by this document.

---

## 3. Product and technical findings to validate

The assessment reports the following repository snapshot:

| Measurement | Assessment-reported value |
|---|---:|
| Countries in registry | 30 |
| Pathways in registry | 69 |
| Publishable pathways | 63 |
| Research-required pathways | 6 |
| Structured requirement declarations | 99 |
| Publishable pathways with requirements | 63 / 63 |
| Work pathway type | 41 |
| Study pathway type | 28 |
| Business pathway type | 0 |
| Visitor/tourist pathway type | 0 |

These numbers should be checked against the current registry and build output before being repeated in public-facing copy.

### Main integrity gaps reported

1. **Nationality is collected but not applied consistently.** Passport country must influence eligibility, restrictions, quotas, additional procedures and result status.
2. **Structured requirements are not fully enforced.** The engine reportedly evaluates minimum funds but not all job-offer, admission, sponsorship, salary, points, qualification, age, experience and maintenance-funds requirements.
3. **Currency normalization is missing from route matching.** USD-equivalent user budgets must not be compared directly with EUR, GBP or other original-currency requirements.
4. **Service taxonomy is incomplete.** Business and visitor routes are not represented as complete structured pathway types; nomad routes are reportedly folded into work.
5. **Evidence freshness is misrepresented.** An effective date is not the same as a source retrieval date or human review date.
6. **Content governance is too permissive.** A manually supplied `lastFactChecked` value reportedly triggers an official-source badge without sufficient evidence of claim-level review.
7. **Counts and metadata disagree.** The assessment reports differences among the live blog, About page, README and Markdown content collection.
8. **Privacy and advertising documentation may lag runtime behaviour.** Local storage, analytics, ad provider configuration, consent handling and publisher relationships need one reconciled inventory.

---

## 4. P0 — Trust, eligibility and matching integrity

### 4.1 Immediate nationality-specific editorial audit

The assessment identifies three articles published on 30 October 2026 that reportedly claim Nigerian eligibility for working-holiday programmes in New Zealand, Ireland and Australia (subclass 462). The assessment states that the official participating-country/passport rules do not support those claims.

**Implementation walkthrough**

1. Locate the three articles and confirm their current publication/indexing status.
2. Retrieve the exact official government eligibility pages and passport/participating-country lists for each programme.
3. Check the current rule, effective date, eligible passports, age range, quotas, ballot/letter requirements and transitional rules.
4. Temporarily unpublish, de-index or add a clear correction notice to any article whose central claim cannot be substantiated. Choose the least disruptive safe action supported by the publication workflow.
5. Audit every article from the same publishing batch, not only the three named articles.
6. Search the wider content collection for similar nationality-specific claims and unsupported quotas.
7. Record the claim, passport scope, official evidence, reviewer, review date, decision and next review date.
8. Correct sitemap, internal links, structured data and canonical/indexing state where an article is materially changed or withdrawn.

**Acceptance criteria**

- No article claims a nationality is eligible unless the official programme rules support that exact passport.
- Country-level or generic programme pages are not accepted as proof of passport eligibility when a participating-country list exists.
- Quotas, age limits, ballots and additional procedures are independently evidenced.
- Corrections are traceable and visible where appropriate.
- The audit outcome is documented; do not mark the batch complete based only on editing the three known articles.

### 4.2 Nationality-aware pathway data and result logic

Add a normalized nationality eligibility model to each pathway where nationality is relevant. Do not bury passport rules in free-text descriptions.

Suggested logical fields (adapt to the existing schema rather than creating duplicate competing structures):

- `nationality_scope`: all eligible passports, allowlist, blocklist or country-agreement model.
- `eligible_passports` / `excluded_passports`: controlled country identifiers where applicable.
- `nationality_conditions`: quotas, ballots, support letters, consular jurisdiction or additional steps.
- `nationality_evidence_refs`: claim-level links to authoritative sources.
- `nationality_reviewed_at`, `source_retrieved_at`, `review_due_at`.
- `eligibility_status`: verified eligible, verified ineligible, conditional, unknown or research required.

**Result statuses must be explicit:**

- Available to this passport.
- Not available to this passport.
- Available subject to an additional nationality-specific condition.
- Nationality eligibility not yet verified.

Unknown must not be silently treated as available. A route with a verified nationality blocker should not appear as a positive match. Where the user has not provided a passport, show discovery results only and explain that nationality eligibility remains unchecked.

### 4.3 Requirement-aware matching engine

Create a requirement interpreter that reads the structured requirement declarations already in the registry. Avoid maintaining one set of requirements for display and a separate incomplete set for matching.

Requirement types to support include:

- Job offer.
- Admission offer.
- Employer sponsorship.
- Minimum funds / maintenance funds.
- Minimum annual or monthly salary.
- Points score.
- Qualification and recognition.
- Minimum experience.
- Minimum age.
- Family-size or dependent conditions.
- Additional programme-specific mandatory conditions.

For each requirement, the engine should know:

- Whether it is mandatory, conditional or advisory.
- Its value, unit, currency and period where relevant.
- The condition under which it applies.
- Whether user input is available.
- Whether the requirement is verified, unknown or not applicable.
- The official evidence supporting it.

**Matching outcomes**

| Outcome | Meaning |
|---|---|
| Meets known requirements | Every evaluated mandatory requirement is supported by user data and passes |
| Potential match — conditions remain | No known blocker, but one or more mandatory conditions are unknown or conditional |
| Does not meet a known requirement | At least one verified mandatory condition fails |
| Discovery only — insufficient evidence | Pathway or user information is not complete enough to assess |

Do not use a weighted score to override a hard eligibility blocker. A high score must never compensate for a missing job offer when the programme requires one.

### 4.4 Explain the result

Every result should show:

- Which user inputs were used.
- Which mandatory conditions were checked.
- Which conditions passed, failed or remain unknown.
- Which passport-specific rules were applied.
- The evidence and last review date for material conditions.
- What information the user should provide next.
- The official authority or application portal for the next step.

A disclaimer is useful but cannot compensate for incorrect matching logic.

---

## 5. P0 — Financial matching and affordability

### 5.1 Currency-safe comparisons

The user-facing budget may be entered in USD equivalent, while the pathway requirement may be published in EUR, GBP or another currency. Raw numeric comparison is invalid across currencies.

**Implementation walkthrough**

1. Preserve the official amount and original currency exactly as published.
2. Add a dated exchange-rate service with a documented provider, retrieval timestamp, base/quote currency, rate and fallback behaviour.
3. Convert both values to a common comparison currency at calculation time.
4. Keep the original official figure visible beside the normalized figure.
5. Record the conversion date and source in the result.
6. Define behaviour when a rate is unavailable or stale: fail closed for affordability claims and show the original amount without a definitive pass/fail.
7. Add tests for rounding, missing rates, stale rates, currency direction and multiple currencies.

### 5.2 Model the financial requirement correctly

A funds requirement may be a bank balance, maintenance amount, tuition deposit, monthly income, annual salary or family-adjusted amount. These are not interchangeable.

Represent:

- Amount and currency.
- Period (one-time, monthly, annual or total).
- Applicant/dependent scope.
- Whether funds must be liquid, held for a period or evidenced in a specified way.
- Whether tuition, fees, travel or insurance are separate.
- Effective date and evidence review date.

### 5.3 Savings-gap projection

The assessment reports that the current gap estimate uses stated monthly income without deducting expenses. Gross income is not disposable savings.

Use:

`monthlySavingsCapacity = verifiedNetMonthlyIncome - essentialMonthlyExpenses - committedMonthlyOutgoings`

If net income or expenses are unknown, do not invent a timeline. Ask for the missing inputs or label the result as an illustrative estimate. Account for the possibility of negative or zero savings capacity.

**Acceptance criteria**

- No cross-currency raw comparisons.
- Original and normalized amounts are both traceable.
- Gross income is not treated as monthly savings.
- Unknown exchange rates or financial inputs do not produce a confident affordability badge.
- Family size, payment period and effective dates are retained in calculations.

---

## 6. P0/P1 — Complete and separate the service taxonomy

The product navigation and the registry must describe the same capabilities.

### Work

Separate employer-sponsored, points-based, job-search, seasonal and other work routes where their requirements differ. Remote-work residence should not be hidden inside ordinary employment matching.

### Study

Support study permits, admission, scholarship and funds requirements. Clearly distinguish migration guidance from a live university/programme catalogue.

### Visitor, short-stay and transit

Build a dedicated passport–destination–purpose checker. Include visit purpose (tourism, family, business visitor, event, transit and other supported purposes), visa/ETA/visa-free status, permitted activities, maximum stay, entry conditions and official source.

Do not infer permission to work from a visitor permission. Do not treat business visitor activities as permission to take local employment.

### Digital nomad and remote work

Use a separate comparison schema for remote income, employer/client location, minimum income, alternative savings, duration, renewal, tax considerations, dependants and fees. Preserve original thresholds and periods.

### Founder, investor and business immigration

Model only routes that actually confer or support an immigration/residence permission. Capture business plan, investment/capital, ownership, job creation, endorsement, operating requirements and renewal conditions where applicable.

### Company formation

Keep company incorporation and cross-border structures as a separate information service. Clearly state that incorporation does not itself grant a visa, work authorization or residence right.

**Acceptance criteria**

- Each advertised tool category has a corresponding supported data model and user journey.
- Unsupported categories are labelled research-in-progress or removed from claims until data and matching exist.
- Nomad is not silently mapped to ordinary work.
- Visitor is not implied to be supported until the visitor checker has passport-purpose logic.

---

## 7. P1 — Page-by-page improvements

This section records weaknesses only. Existing working page structure should be retained.

### Homepage

**Preserve:** brand direction, shared navigation, the two main entry points and current page composition.

**Correct:**
- Reconcile the advertised pathway count with the actual publishable count.
- Remove conflicting counts such as the reported 69 versus 59 discrepancy until a single generated source is used.
- Describe the Visa Wizard only in terms of purposes it genuinely supports.
- Distinguish research/discovery from application processing, bookings, admissions and regulated professional services.
- Generate product metrics from the canonical registry, not manually maintained text.

### Find MyPathway

**Preserve:** route discovery concept, result cards and evidence presentation.

**Correct:**
- Apply passport restrictions before positive match status.
- Evaluate all mandatory structured requirements.
- Normalize currencies.
- Do not advertise income or experience filtering unless the data and engine genuinely support it.
- Replace business selection's dead-end/research-only experience with an honest status and useful next step.
- Use net disposable savings, not gross income, for savings projections.
- Separate effective date from source retrieval and review dates.
- Reduce initial form burden with progressive disclosure where it improves completion without hiding essential eligibility questions.

### Visa Wizard

**Preserve:** five-step progressive flow.

**Correct:**
- Add explicit visitor/tourist purpose only when the visitor data model and checker are ready.
- Make passport nationality a real matching input.
- Separate nomad/remote-work from conventional work.
- Explain which inputs affected each result.
- Display blockers, unknowns and conditional requirements in plain language.

### Country Directory

**Preserve:** search, region filters and side-by-side comparison.

**Correct:** replace empty or universally null comparison fields with metrics supported by the registry, such as publishable pathways, service availability, evidence coverage, research-required routes, source review date and known funds requirements. Do not fabricate country approval rates or aggregate costs. Reconcile page title and meta-description counts.

### Budget Calculator

Choose and communicate one of two honest product modes:

- **Budget-readiness calculator:** liquid savings, net monthly savings capacity and time to reach a user-defined target. Do not claim verified destination affordability.
- **Pathway financial planner:** pathway-specific tuition, maintenance funds, fees and other documented financial requirements, retaining original currency and conditions.

Recommended direction: evolve toward pathway financial planning while retaining a general savings-readiness calculation.

### Student Playbook

**Preserve:** destination filters, budget filters, structured pathway cards and official references.

Improve the next step from reading a visa guide to finding the relevant official university/programme, scholarship and application portal. Do not imply that the platform is a university programme marketplace unless reliable programme data is actually integrated.

### Professional Playbook

**Preserve:** category- and country-based presentation.

Add selective occupation-specific decision guidance: qualification recognition, regulated-profession licensing, employer sponsorship, eligible occupation, salary thresholds and family/residency progression. Prioritize occupations for which official evidence can be maintained.

### Business Playbook

Separate:
1. Business formation and international structures.
2. Founder and investor immigration.
3. Remote business, freelance and nomad residence.

Retain the correct distinction that company formation alone does not confer immigration permission.

---

## 8. P1 — Editorial system and research publication

### 8.1 Canonical content inventory

The assessment reports differing article counts across the live research hub, About page, README and Markdown collection. Generate counts and category summaries from one canonical content collection.

- Remove manually maintained post totals where a generated value is available.
- Reconcile actual published, draft, archived and excluded content.
- Ensure sitemap and research index use the same publishability rules.

### 8.2 Explicit article metadata

Every article should carry explicit metadata, adapted to the existing Eleventy frontmatter conventions:

- `primaryGoal`
- `secondaryGoals`
- `country` (stable country identifier)
- `audience`
- `contentType`
- `publishedDate`
- `updatedDate`
- `lastReviewed`
- `sourceReviewStatus`
- `reviewScope` (including passport/nationality where relevant)

Avoid heuristic goal inference from titles and categories. General articles should be explicitly tagged as general rather than leaking into every filter because a field is absent.

Populate country filters from the canonical registry or article metadata rather than maintaining a partial hard-coded list.

### 8.3 Verification badge governance

A date in frontmatter is not sufficient evidence for an official-source badge.

Require:
- One or more authoritative source records.
- The exact claim or requirement supported by each source.
- Source retrieval timestamp.
- Effective date, where applicable.
- Reviewer identity or accountable editorial team.
- Review scope, including nationality where relevant.
- Review outcome and due date.
- A defined status for stale, inaccessible or conflicting evidence.

Badge states should be honest and understandable, for example: Official sources reviewed, Review due, Evidence incomplete, or Research in progress. Do not imply that a route is personally approved or guaranteed.

### 8.4 Article template corrections

The assessment reports duplicate H1 rendering and duplicated reading-time units (for example, “14 min min read”).

- Ensure the template owns the single visible article H1, or deliberately suppresses a duplicate Markdown H1.
- Normalize reading-time data to a numeric value or one canonical display string.
- Show author, editorial reviewer/team, publication date, material update date and evidence review date distinctly.
- Never invent reviewer identities or professional credentials.

### 8.5 Content-type-specific article layouts

Use one shared visual system but tailor the information hierarchy to the article's purpose.

| Content type | Required information architecture |
|---|---|
| Country audit | Country overview, route availability, passport restrictions, known costs, requirements, evidence status, risks and official links |
| Student guide | Study route, admission, tuition, scholarships, living funds, deadlines and official applications |
| Professional guide | Occupation, recognition, job offer, sponsor, salary, experience, licensing and residency progression |
| Business/investor guide | Business model, eligibility, capital, ownership, investment conditions, residence rights, tax caveats and regulators |
| Visitor guide | Passport, destination, purpose, visa/ETA/visa-free status, permitted stay/activity, fee and entry conditions |
| Digital nomad guide | Remote income, employer/client location, minimum income, savings alternative, duration, renewal, tax and family provisions |
| Policy update | What changed, effective date, affected routes/passports, transitional rules and before/after comparison |
| Case study | Context, pathway, documented costs, timeline, outcome, lessons and consent/disclosure |

---

## 9. P1 — Privacy, analytics, advertising and partner governance

### Privacy and browser storage

Reconcile the privacy notice and data inventory with actual runtime behaviour.

- Inventory every local-storage/session-storage key and the data it contains.
- Document purpose, retention/expiry, user control and whether data leaves the browser.
- Provide a clear way to clear saved pathway/wizard answers.
- Minimize sensitive applicant data and avoid collecting information not required for the journey.
- Verify analytics and third-party scripts against consent state and the published notice.
- Test consent withdrawal and deletion behaviour, not only initial acceptance.

### Advertising and monetization

Preserve the commercial trust firewall:

- Advertising must not influence route ranking, eligibility status or evidence quality.
- Ads should not interrupt core route discovery.
- Partner and affiliate relationships must be disclosed.
- Sponsored content must be visibly labelled.
- The user must be able to distinguish editorial guidance from paid placement.

The assessment reports an inconsistency between the monetization registry and ad-loading code. Reconcile:
- Approved advertising provider and publisher relationship.
- All script injection points and page coverage.
- Consent-gated and non-consent behaviour.
- ads.txt contents and production publisher configuration.
- Analytics and measurement providers.
- Production behaviour versus repository configuration.

For relevant EEA, UK and Swiss traffic, validate current Google requirements for certified CMP and IAB TCF integration before enabling personalized advertising. Do not assume a custom banner is sufficient. Recheck provider documentation at implementation time.

### Partner governance

Preserve the partner trust firewall and public partner proposition. Do not label a practitioner verified unless their identity, credentials and applicable regulator/register status have actually been checked.

For each published partner profile, define:
- Identity and organization checks.
- Professional credential and regulator evidence where applicable.
- Jurisdiction and services offered.
- Last verification date and review due date.
- Conflicts of interest and referral compensation disclosure.
- Complaint/escalation and removal process.

---

## 10. P1/P2 — Evidence and data architecture

Adopt one evidence lifecycle across pathway records, country records and editorial content:

1. **Discovered:** a source or claim has been identified.
2. **Retrieved:** source content and retrieval time are recorded.
3. **Reviewed:** a reviewer checks the relevant claims and scope.
4. **Approved for use:** evidence supports the exact field/claim.
5. **Due for review:** freshness window has elapsed.
6. **Superseded / conflicting / inaccessible:** evidence cannot support a current positive claim.

Separate these dates:
- `effectiveDate`: when the rule applies.
- `sourceRetrievedAt`: when the source was retrieved.
- `reviewedAt`: when a human reviewed the relevant claim.
- `reviewDueAt`: when revalidation is due.

A source URL alone does not prove every statement in an article. Evidence should be attached to the exact rule or claim it supports.

### Fail-closed rules

- Missing nationality data must not become passport eligibility.
- Missing requirement values must not become a pass.
- Missing exchange rates must not become an affordability match.
- Missing cost records must not become invented country costs.
- Missing reviewer details must not become a verified badge.
- Unverified partners must not be presented as verified practitioners.

---

## 11. P2 — Benchmark lessons and product positioning

The assessment uses the following reference categories. They are functional benchmarks, not instructions to copy entire businesses.

| Reference | Useful lesson |
|---|---|
| GOV.UK visa checker | Start with nationality and travel purpose; explain the scope and limits of results |
| Australian Visa Finder | Separate visit, work, study, family, permanent residence and other purposes |
| Make it in Germany Quick-Check | Present distinct work, study, vocational training, business and research routes |
| Studyportals / ApplyBoard | Distinguish migration guidance from actual institution and programme discovery |
| GoAbroad | Use structured destination/programme metadata and discovery filters |
| LoopholeDB and specialist nomad directories | Compare remote-work thresholds with original units, duration, fees, tax notes and checked dates |

The strategic lesson is to build a trustworthy mobility intelligence layer, not to become a generic travel-booking website, job board, university marketplace or immigration law firm by accident.

---

## 12. Implementation sequence and delivery gates

### P0 — Protect users and repair core decision integrity

1. Audit and correct the named working-holiday claims and the wider publishing batch.
2. Audit nationality-specific claims across published content.
3. Add passport eligibility to the pathway model and matching logic.
4. Implement mandatory structured requirement evaluation.
5. Correct currency normalization and financial-gap calculations.
6. Add result states that distinguish blockers, conditional matches and unknown requirements.

**P0 exit gate:** No known false passport-eligibility claim remains unaddressed; hard requirements cannot be bypassed by scoring; currency comparisons are safe; unknowns remain visible.

### P1 — Align the service experience and supporting governance

1. Align homepage claims and counts with actual supported features.
2. Separate visitor, nomad, work, study and business service models.
3. Correct country comparisons and budget calculator claims.
4. Reconcile editorial metadata, badge rules, article templates and content counts.
5. Reconcile privacy, storage, analytics, advertising and consent implementation.
6. Formalize partner verification and disclosures.

**P1 exit gate:** Every advertised service has a truthful scope, working data model and documented limitations; article and evidence status is generated from auditable records; privacy and monetization documentation matches runtime behaviour.

### P2 — Expand depth without weakening evidence standards

1. Add structured programme discovery links/data where maintainable.
2. Expand priority occupation recognition/licensing guidance.
3. Add standardized digital nomad comparison.
4. Publish country audits using verified pathway-level information.
5. Publish partner profiles only after operational verification.
6. Explore future JobAgent as a separately governed product initiative.

**P2 exit gate:** New coverage is evidence-backed, maintainable and does not create unsupported eligibility or service claims.

### Required engineering verification

For each workstream:
- Add unit tests for requirement interpretation and status outcomes.
- Add fixtures for eligible, ineligible, conditional and unknown passports.
- Add currency conversion and stale-rate tests.
- Add regression tests for family size, periods, salary, funds and mandatory requirements.
- Add content validation for metadata, source evidence and badge qualification.
- Add accessibility and mobile interaction review for the affected journeys.
- Run relevant test suites and record exact command, result, commit SHA and any blocked checks.
- If CI is unavailable, mark the affected verification explicitly as **Not tested / blocked**; do not imply success.
- Verify production deployment separately from source-level tests.

Do not mark a phase complete merely because a document says it is complete. Completion requires implementation evidence and a recorded verification result.

---

## 13. Future product expansion concept — JobAgent

> **Discussion concept only. Not included in the P0–P2 implementation commitment.** This section records the proposed direction so it can be evaluated as a distinct product initiative after the core trust and matching corrections.

The proposed **JobAgent** would be a new primary tool and navigation destination for African job seekers who want to discover legitimate overseas employment opportunities and connect with appropriately vetted recruitment agents or employment partners who can support applications across countries and regions, including Gulf states.

This is more than adding a jobs search page. It potentially creates a multi-sided employment marketplace connecting:

1. African job seekers.
2. Verified overseas employers and their authorized recruiters.
3. Vetted local or destination-country recruitment agents.
4. MyPathway2Global's mobility intelligence and pathway eligibility layer.

### Proposed user journey

1. **Create a job-seeker profile:** country of residence, citizenship/passport, work authorization, occupation, skills, qualifications, experience, languages and preferred destinations.
2. **Discover opportunities:** search/filter by occupation, country, employer, salary range, contract type, experience, language and sponsorship/relocation availability.
3. **Understand the route:** see whether the job appears to support a legitimate work-permit route for the user's passport and destination.
4. **Choose an application route:** apply directly to the employer or request support from an appropriately verified agent where that option is genuinely authorized.
5. **Track applications:** submitted, screening, interview, offer, employer checks, work-permit process and closed/withdrawn.
6. **Prepare documents:** provide a controlled checklist and secure document workflow only after privacy, security, retention and access controls are designed.
7. **Receive transparent updates:** show who is handling the application, what action is pending, expected next step and any legitimate fee or third-party cost.

### Marketplace roles

| Role | Responsibilities |
|---|---|
| Job seeker | Maintain accurate profile, discover jobs, choose application route and track progress |
| Employer | Publish genuine vacancies, identify hiring entity, disclose requirements and confirm sponsorship/relocation position |
| Recruitment agent | Prove identity, business registration and applicable recruitment authorization; manage only permitted services |
| Platform operations | Verify listings/partners, moderate abuse, manage complaints and preserve audit records |
| Mobility intelligence | Explain destination-specific work route and flag known passport or permit constraints |

### Essential trust and safety rules

- No fake vacancies, fabricated employers or misleading salary claims.
- No guarantee of employment, visa issuance or immigration approval.
- Clearly distinguish an employer, a recruitment agency, a visa adviser and a general application-support provider.
- Verify agent identity and applicable licensing/registration in the relevant sending and receiving jurisdictions.
- Do not allow an agent to claim authorization to recruit for an employer without evidence of that relationship.
- Disclose all candidate fees, employer-paid fees, referral payments and third-party costs before the user commits.
- Do not facilitate unlawful recruitment fees, document confiscation, coercion, debt bondage or deceptive contract substitution.
- Provide a reporting, complaint, refund/escalation and agent suspension process.
- Protect passports, identity documents, CVs and contact details with strict access controls, retention limits and audit logs.
- Keep job matching separate from visa eligibility. A job offer does not automatically mean a person qualifies for a work permit.
- Apply destination-specific labour, recruitment, data-protection and immigration rules before opening each country corridor.

### Gulf-state and cross-continent coverage

Do not treat “Gulf states” or “abroad” as one regulatory market. Each destination and recruitment corridor needs a country launch checklist covering:

- Employer and recruiter authorization.
- Work-permit and visa sponsorship model.
- Occupation and qualification restrictions.
- Contract language, salary, accommodation, insurance and working conditions.
- Recruitment fee rules and who may lawfully pay them.
- Medical, attestation and document requirements.
- Worker protections, complaint channels and repatriation rules.
- Applicable privacy and cross-border data transfer rules.

Start with a limited number of corridors where employer demand, legitimate agent partners and official process information can be verified. Expand by evidence and operational readiness, not by adding every country to a dropdown.

### Product architecture recommendation

JobAgent should be a separate module with shared identity, design system and mobility intelligence services. It should not be bolted into Find MyPathway's route-scoring function.

Potential modules:
- Job discovery and search.
- Employer and vacancy verification.
- Agent onboarding and credential verification.
- Candidate profiles and consent.
- Application workflow / status tracking.
- Secure document handling.
- Messaging and notifications.
- Complaints, fraud reporting and moderation.
- Work-route and nationality eligibility cross-check.
- Transparent fee and referral disclosure.

### Business model questions for a later design discussion

Evaluate employer subscriptions, verified recruiter subscriptions, employer-paid placement/referral arrangements where lawful, and clearly disclosed premium candidate services. Do not assume candidate-paid placement fees are lawful or ethical in every corridor. Revenue must not influence job legitimacy checks, work-permit eligibility or ranking integrity.

### Decisions required before implementation

- Is JobAgent an employer-first vacancy platform, an agent-led application service, or a hybrid?
- Can employers post directly, or must every listing be approved?
- Which recruitment services will the platform itself provide, if any?
- Will agents be independent service providers or contracted partners?
- Which first destination corridors can be legally and operationally verified?
- What candidate data is essential at each stage?
- Which services are free to job seekers, and which party pays for recruitment?
- What licensing, legal review, insurance and complaint handling are required before launch?

**Recommended position:** develop JobAgent as a carefully governed employment discovery and application coordination marketplace, not as a promise that MyPathway2Global can secure overseas jobs or visas. Its differentiator should be the combination of genuine vacancies, transparent verified intermediaries and passport-aware mobility information.

---

## 14. What should be preserved

The assessment identifies these areas as sufficiently sound to retain unless validation reveals a specific defect:

- Current brand direction, shared navigation and established design system.
- Homepage's two main entry points and overall composition.
- Find MyPathway route-discovery concept and result-card pattern.
- Five-step Visa Wizard interaction pattern.
- Country search and regional filters.
- Side-by-side country comparison capability (change unsupported fields, not the concept).
- Student and Professional Playbook page structures.
- Research hub search and category concept.
- Article summaries and table-of-contents pattern.
- Official-source links and evidence badge concept (tighten qualification rules).
- Legal disclaimers and partner trust firewall.
- Fail-closed treatment of missing metrics.

Do not rebuild a working page merely to make the project look more active. Improve only demonstrated weaknesses.

---

## 15. Documentation and project governance

Before tasks are added to the active sprint:

1. Revalidate each finding against the current `main` branch and deployed site.
2. Identify the actual source file, data record, page and responsible module.
3. Check whether an existing active task already covers the issue.
4. Update the canonical active sprint and phase tracker rather than creating a parallel task board.
5. Keep this document as the descriptive product improvement blueprint.
6. Link the implementation tasks back to the relevant sections here.
7. Record decisions that defer, reject or narrow a recommendation.
8. Update changelog and release verification when implementation actually ships.
9. Move superseded execution notes to the archive; do not delete useful original product vision.
10. Keep test and deployment claims tied to the exact commit SHA.

### Suggested task record format

Each implementation task should include:

- Problem and user impact.
- Current observed behaviour.
- Expected behaviour.
- Data/schema changes.
- UI changes (if needed).
- Evidence/source requirements.
- Acceptance criteria.
- Unit/integration/accessibility tests.
- Dependencies and blockers.
- Deployment/verification evidence.
- Status and owner.

### Definition of done

A correction is complete only when:
- The defect is reproduced or the gap is demonstrated.
- The implementation addresses the underlying cause.
- Relevant tests pass or are honestly marked blocked/not tested.
- The UI communicates the actual status and limitations.
- Documentation and source-of-truth records are updated.
- Production behaviour is checked where deployment is in scope.

---

## 16. Final product recommendation

MyPathway2Global should earn trust by being more precise than a generic migration content site. The platform's long-term advantage is not the number of countries, articles or tools displayed. It is the quality of the decision support it can responsibly provide to a person considering a move.

The immediate sequence is therefore:

1. Correct nationality-specific content and passport eligibility.
2. Make mandatory requirements real matching conditions.
3. Make financial comparisons currency-safe and financially honest.
4. Separate visitor, nomad, work, study and business service models.
5. Make evidence badges, article metadata and source review auditable.
6. Reconcile privacy, analytics, advertising and partner operations.
7. Only then expand into deeper programme discovery and JobAgent.

The platform should expand its capabilities without overstating what it can verify. **Trust, evidence and honest limits are product features.**

---

## 17. Reference and revalidation register

The assessment's benchmark and primary-source research refers to the following institutions and products. During implementation, capture the exact current official page URL, retrieval timestamp, relevant passage/rule, reviewer and review outcome in the repository's evidence records. Do not rely on this list of names alone as proof of a live rule.

- Immigration New Zealand — working-holiday participating-country and passport eligibility rules.
- Ireland immigration authorities — Working Holiday Authorisation eligible-country rules.
- Australian Department of Home Affairs — subclass 462 eligible passport, age and additional requirements.
- GOV.UK — visa checker and visitor/immigration guidance.
- Australian Department of Home Affairs — Visa Finder and visitor visa purpose categories.
- Make it in Germany — Quick-Check for work, study, vocational training, business and research.
- Studyportals and ApplyBoard — programme discovery and institution comparison patterns.
- GoAbroad — structured programme and destination discovery.
- LoopholeDB and specialist digital-nomad directories — remote-work programme comparison patterns.
- Google AdSense / Google publisher documentation — current consent and CMP requirements for applicable regions.

**Research handling rule:** government sources govern legal eligibility claims. Industry products are UX/product benchmarks only. Secondary directories may help discover a topic but must not be the final evidence for an immigration requirement.
