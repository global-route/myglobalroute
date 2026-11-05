# MyPathway2Global — Deep Website & Product Assessment, Research Findings and Implementation Walkthrough

**Assessment date:** 5 November 2026  
**Repository:** global-route/myglobalroute  
**Branch reviewed:** main  
**Document type:** Product assessment, evidence-led correction register, implementation walkthrough and improvement blueprint  
**Status:** Findings and recommendations; implementation not yet performed by this assessment

> **Related document:** For the condensed implementation checklist, see [Product Improvement & Implementation Blueprint](product/MYPATHWAY2GLOBAL_PRODUCT_IMPROVEMENT_IMPLEMENTATION_BLUEPRINT.md). This assessment provides the full research narrative and rationale; the Blueprint extracts actionable tasks.

> **Source and scope note:** This document preserves the full assessment content supplied in the project discussion, including its findings, weaknesses, benchmark conclusions, recommended corrections and implementation sequence. The original ChatGPT shared-conversation URL could not be independently retrieved during this documentation pass. Accordingly, this is a faithful consolidation of the assessment text provided in the conversation, not a claim that the inaccessible share page was independently exported. Any live-state or official-rule claim must be revalidated against the current production site and primary authority before implementation or publication.

---

## Initial finding: the product has evolved beyond the earlier assessment

The live website is now branded **MyPathway2Global**, and its product scope is broader than the repository snapshot discussed previously.

The live homepage presents two distinct ways to begin:

- **Find MyPathway:** for people who already know they are exploring work, study or business pathways.
- **Visa Wizard:** for people who are less certain and need help exploring tourist, nomad, remote-work and visa-transition routes.

It currently advertises **30 countries and 69 pathways**. The About page also identifies agencies, regulated practitioners and organisations as part of its intended partner ecosystem.

That distinction matters for the redesign: this should be assessed as a **multi-service mobility intelligence platform**, not simply a travel blog or a visa-information website.

The product should be evaluated against three different standards:

1. Official migration portals for pathway guidance.
2. Study-abroad platforms for programme discovery.
3. Travel and research publishers for destination content.

A feature or layout that is already doing its job should not be added to the correction list merely to make the redesign bigger.

# MyPathway2Global — Deep Website & Product Assessment

## 1. Overall verdict

MyPathway2Global has a credible product concept and a good amount of work behind it. Its strongest positioning is **African-focused global mobility intelligence**: helping people understand which migration opportunities exist, what those opportunities require, how much capital may be needed, and which official sources support the information.

However, the biggest weaknesses are not currently the colours, typography, logo or general page design.

They are the gaps between:

- What the website promises.
- What the underlying pathway data actually covers.
- What the route-matching software actually evaluates.
- What the published articles claim.
- What the planning documents say has been completed.

These gaps matter because this is a high-trust product. A misleading result or incorrect nationality-specific visa claim can cause somebody to lose money, miss an opportunity or make an immigration decision on the wrong information.

The assessment covered the current live homepage, route finder, Visa Wizard, countries, calculator, playbooks, blog, partner and privacy pages. It also examined the repository's planning documents, product mission, monetization plans, archived architecture and UX specifications, data standards, JavaScript engines, templates and Markdown content.

**Assessment limitation:** No repository changes or test runs were performed as part of the original assessment. The findings were based on the source, planning documents, accessible live pages and official/industry reference research. The live interactive browser, accessibility, mobile and screen-reader reviews remain separate verification work.

## 2. What MyPathway2Global actually is — and what it should not try to become

The product currently combines several services.

### Study mobility

Student pathways, scholarships, funds requirements, tuition information and study playbooks.

### Professional mobility

Skilled employment, employer sponsorship, points-based migration, salary thresholds and remote work.

### Visitor and short-stay intelligence

Visa requirements, visitor entry, permitted activities, transit and short-term travel.

### Digital nomad and remote-work mobility

Remote-work visas, income thresholds, duration, residency conditions and tax considerations.

### Business and investment mobility

Founder, investor, entrepreneur and business-residency opportunities, alongside separate information about company formation.

### Research and education

Country audits, professional guides, scholarship guides, policy updates, case studies and source-backed articles.

This is a sensible combination, but these services should not all use the same matching logic or the same article layout.

A tourist deciding whether a passport needs a visa is not making the same decision as a graduate evaluating a scholarship, a professional assessing a sponsored work permit or a remote worker comparing residence permits.

That distinction is the foundation for the recommendations below.

## 3. The most important weaknesses

### A. Nationality-specific eligibility and editorial verification are failing

**This is the most urgent finding.**

Three live articles published on 30 October 2026 claim that Nigerian nationals can apply for working-holiday programmes in New Zealand, Ireland and Australia.

All three also display:

**Official Source Verified · Audited: October 30, 2026**

The official government eligibility information does not support these claims.

| Published article | Problem found | Official-source finding |
|---|---|---|
| New Zealand Working Holiday | Claims Nigerians are eligible and describes a Nigerian quota | Immigration New Zealand requires citizenship of a country with a working-holiday agreement and explicitly says it cannot give this visa to applicants whose country is not on the list. Nigeria is not listed. |
| Ireland Working Holiday Authorisation | Claims Nigerian eligibility and an annual quota of 100 places | Ireland's official eligible-country list includes Andorra, Argentina, Australia, Canada, Chile, Hong Kong, Japan, New Zealand, Korea and the United States, plus a separate Taiwan arrangement. Nigeria is not on the list. |
| Australia Subclass 462 | Claims Nigerians are eligible and gives an 18–35 age range | The current official passport list excludes Nigeria; the standard first subclass 462 age range is 18–30, subject to the nationality-specific rules. |

**Required correction**

1. Temporarily remove or de-index the three affected articles until corrected.
2. Review all other articles from the same 30 October publishing batch.
3. Check every claim of nationality eligibility against the official passport or participating-country list.
4. Do not display an official verification badge simply because a lastFactChecked date exists in article frontmatter.
5. Link the verification status to the actual reviewed evidence and scope.

A source URL is not proof that every claim made in an article is supported by that source.

For a Nigerian applicant, a generic immigration page is insufficient when the actual rule depends on the passport held.

**Underlying process failure:** The Content Pipeline had already listed Ireland Working Holiday Authorisation for Nigerian applicants as a high-confidence topic. The problem therefore reached beyond the article writer. The source-review and editorial approval process failed to test the actual nationality restriction.

### B. The route-matching engine is not using most of the requirements it displays

The repository contains a meaningful structured requirement dataset.

| Data measurement | Current result |
|---|---:|
| Countries | 30 |
| Pathways | 69 |
| Publishable | 63 |
| Research-required | 6 |
| Structured requirement declarations | 99 |
| Publishable pathways with requirements | 63/63 |

The weakness is what happens after this data reaches the matching engine.

There are 99 requirement declarations, including:

| Requirement category | Number of declarations |
|---|---:|
| Job offer | 29 |
| Admission offer | 22 |
| Minimum funds | 21 |
| Points score | 9 |
| Sponsorship | 6 |
| Qualification | 4 |
| Minimum annual salary | 2 |
| Minimum monthly salary | 2 |
| Minimum experience | 2 |
| Minimum age | 1 |
| Maintenance funds | 1 |

The current route-engine.js uses the structured minimum_funds requirement for budget matching, as well as legacy top-level threshold fields.

However, the repository's 69 pathways currently have no populated top-level minFunds, minMonthlyIncome or minExperienceYears fields.

The engine does not evaluate the other structured requirement categories as matching conditions.

For example, it does not currently enforce the pathway's:

- Job-offer requirement.
- Admission-offer requirement.
- Sponsorship condition.
- Minimum salary.
- Minimum points score.
- Qualification condition.
- Minimum age.
- Other maintenance-funds field.

This creates an important distinction: a pathway can be shown as a match even though the engine has not checked several mandatory conditions attached to that pathway.

The disclaimer correctly says that a result is not a personal eligibility decision. Nevertheless, the interface promises budget, income and experience matching, and the underlying engine needs to substantiate those claims.

**Relevant code areas:** route engine; Find MyPathway implementation; pathway requirements.

**Required correction:** Make the engine interpret the structured requirements, including their conditions, or explicitly limit the product to pathway discovery and filtering until those checks exist.

Unknown requirements must never be silently interpreted as satisfied.

### C. Passport information is being requested without being properly used in matching

This is particularly important for an African mobility platform.

The Find MyPathway page requests a passport country. The Visa Wizard says nationality determines the research opportunities and blockers that apply.

But the current route-engine scoring function does not use passportCountry when deciding whether a route matches.

The Visa Wizard's result profile is also assembled without passing the selected passport into its route-scoring profile.

This is a major gap.

Passport nationality can determine:

- Whether the route is available at all.
- Whether there is a nationality-specific quota.
- Whether a government support letter is required.
- Whether an additional application process applies.
- Whether a consulate in the applicant's country or current location has jurisdiction.
- Whether a special bilateral agreement exists.
- Whether an otherwise valid pathway is closed to that passport.

The three working-holiday articles demonstrate exactly why this matters.

**Required correction:** Make nationality-specific eligibility a mandatory part of the route data and result logic. Passport restrictions must be assessed before a pathway is presented as an applicable match.

The interface should distinguish between:

- Available to this passport.
- Not available to this passport.
- Available subject to an additional condition.
- Nationality eligibility not yet verified.

Do not use a green verified badge to imply nationality eligibility when only the underlying pathway has passed an evidence check.

### D. Budget matching is comparing amounts in different currencies

The Find MyPathway interface asks for an available budget in USD equivalent.

The route engine then compares that numeric budget directly against minimum_funds values that may be denominated in EUR, GBP, SEK, NOK and other currencies.

There is no currency conversion in the route-engine matching step.

For example, a user may enter a USD-equivalent budget of 10,000, while the pathway's minimum funds requirement is EUR 9,600. A direct numeric comparison does not establish whether those two figures are financially compatible.

The same issue affects the Visa Wizard's budget bands.

The budget-gap calculation also needs improvement: Find MyPathway estimates how many months a user needs to bridge a funds gap using their stated monthly income. That calculation does not take account of their monthly expenses or actual disposable savings.

A gross monthly income is not the same as monthly savings.

**Required correction**

- Establish a dated, auditable exchange-rate source.
- Normalize financial comparisons into a common currency.
- Preserve the original official amount and currency alongside the normalized comparison.
- Distinguish gross income, net income and monthly savings.
- Preserve the requirement's period, family-size condition and effective date.
- Do not calculate a savings timeline from gross income alone.

The platform already has a currency conversion helper in the calculator module. The weakness is that the route-matching engine does not apply an equivalent conversion process.

### E. The current service categories do not match the structured pathway registry

The registry currently has:

| Pathway type | Count |
|---|---:|
| Work | 41 |
| Study | 28 |
| Business | 0 |
| Visitor / tourist | 0 |

The website nevertheless promotes:

- Work, study and business under Find MyPathway.
- Tourist and nomad services under Visa Wizard.
- Business mobility in the Business Playbook.

The implementation handles a business selection by presenting a research-in-progress state. There is no structured business route type in the pathway registry.

The Visa Wizard maps nomad to work. It also does not provide a distinct visitor/tourist purpose option.

This creates three separate problems:

**Business:** The business category is currently largely editorial, not a full structured business-migration matching service.

**Tourist:** The platform does not currently have a complete visitor-entry matching system.

**Nomad:** Remote-work routes are folded into the work category rather than operating as a separate, fully structured comparison category.

**Required correction:** Divide the service taxonomy into:

1. Study and scholarship pathways.
2. Skilled employment and work permits.
3. Visitor, short-stay and transit information.
4. Digital nomad and remote-work residence routes.
5. Founder, investor and business immigration.
6. Company formation and cross-border business information.

The last two should not be confused: forming a US LLC, for example, does not grant a person a US visa or right to reside there. The current Business Playbook correctly makes this distinction in its US LLC section; preserve it.

## 4. Page-by-page assessment: weaknesses only

### Homepage

**Keep the overall page composition and primary navigation.**

The homepage communicates the product's evidence-first position well. It also provides two understandable routes into the main tools.

**Weak spots**

- The pathway count is inconsistent. The homepage advertises 69 pathways but twice says Find MyPathway filters 59.
- The tourist claim is broader than the actual feature. The homepage promotes Visa Wizard as Tourist & Nomad, but the wizard does not contain a visitor purpose category.
- The homepage does not clearly distinguish information from service transactions. The product helps people research and compare opportunities. It should not imply it handles visa applications, university admissions or travel bookings unless those services actually exist.

The headline and general explanation do not require a wholesale redesign. The improvement is to correct the product descriptions and counts and clarify exactly what each tool delivers.

### Find MyPathway

**Keep the route discovery concept, result cards and evidence presentation.**

**Weak spots**

- Passport data is not applied to eligibility matching.
- Income and experience filters are advertised even though their corresponding top-level matching thresholds are unpopulated.
- Budget comparison does not normalize currencies.
- The form presents many fields together, making the initial experience more demanding than necessary.
- The business option currently leads to a research-in-progress outcome.
- The budget-gap estimate uses income rather than disposable savings.
- The evidence freshness indicator is based on requirement effectiveDate, rather than the source retrieval or review date.

The last issue is important: a requirement's effective date tells us when the rule takes effect. It does not tell us when someone last checked the official source.

The current Find MyPathway page already has a reasonable starting structure. Improve its field logic and result explanation rather than replacing the entire screen.

### Visa Wizard

**Keep the five-step progressive flow.**

This is a good interface choice for users who do not know which pathway to explore.

**Weak spots**

- No explicit Visitor or Tourist purpose.
- Passport selection is not used as a proper eligibility constraint in the matching profile.
- Nomad is mapped into Work.
- Destination filtering is not a substitute for passport-specific eligibility.
- The result explanation should show exactly which inputs affected the result and which information remains unverified.

The Australian Government's Visa Finder distinguishes categories such as visit, study, work, permanent residence, family and staying longer. The UK checker also makes nationality and purpose central. Make it in Germany's Quick-Check includes work, study, vocational training, business and research.

MyPathway2Global should follow that principle while adding its African-passport-specific evidence layer.

### Country Directory

**Keep search, region filters and side-by-side comparison.**

This is one of the site's most useful page concepts.

However, the current comparison table is not presenting useful comparisons.

It shows:

- Official Rate.
- African Rate.
- Planning Cost.
- Sweet Spot.

Yet all 30 country records currently have null values for officialRate, africanRate, trueCost.total and timeline.

The empty-data policy itself is correct: the site should not invent these numbers. But the comparison design should not be built around fields that are unavailable for every country.

**Replace those columns with information that the registry can actually support:**

| Better comparison field | Why it is useful |
|---|---|
| Publishable pathways | Shows how many usable pathways exist |
| Study / Work / Nomad availability | Helps users understand the destination's coverage |
| Evidence coverage | Shows how much is actually verified |
| Source review date | Helps users assess freshness |
| Known funds requirements | Shows amounts where they exist |
| Research-required pathways | Makes gaps explicit |

There is also a metadata inconsistency: the page title says 30 countries, but its meta description still says 27-country directory.

### Budget Calculator

**High priority.**

The calculator asks for savings, income, expenses and a migration goal. Its financial-position calculations are useful.

The problem is the promised affordability comparison.

The current country dataset contains no verified aggregate trueCost.total values for all 30 countries. Therefore, it cannot reliably determine which countries a visitor can afford based on verified country-cost records.

The page still presents an "Affordable Countries (sorted by cost)" result section and advertises a personalized migration roadmap.

There are two reasonable approaches:

**Option A — preserve it as a budget-readiness calculator.**

Calculate liquid savings, monthly savings potential and the time required to reach a target. Be explicit that it does not currently rank destinations by verified total migration cost.

**Option B — make it a pathway financial planner.**

Use the actual funds, tuition, fees and maintenance requirements associated with a selected study or work pathway. Display each figure in its original currency and distinguish required funds from actual expenses.

**Recommendation:** Option B is the long-term product direction, while retaining the monthly-savings projection.

Do not populate missing cost data with arbitrary estimates just to make the results page look busy.

## 5. The student, professional and business services

These pages do not all need the same treatment.

### Student Playbook

**Mostly retain the existing format.**

The current page has destination filters, budget filters, structured pathway cards and official source references. That is a useful format.

The main limitation is that it is a migration/study-planning guide, not a university programme finder.

Studyportals illustrates the difference: its student discovery product supports searching and comparing actual bachelor's, master's, PhD and short-course programmes across institutions. ApplyBoard goes further into institution and programme search and application support.

**Recommendation:** Do not imitate those companies' entire businesses.

Instead, make the boundary explicit:

- MyPathway2Global explains study routes, financial conditions and scholarships.
- University and course catalogues are separate information sources.
- Where appropriate, link to official course, scholarship and application portals.
- Add structured programme discovery only when the platform has reliable programme data.

The weak spot is the gap between a user reading about a study pathway and finding the actual programme or scholarship to which they can apply.

### Professional Playbook

**Retain its current category and country-based presentation.**

It already makes useful distinctions between employer-sponsored work, points-based routes, job-search routes and remote work.

The improvement is to show more of the practical professional decision sequence:

- Is the occupation eligible?
- Does the applicant's qualification require recognition?
- Is a job offer or employer sponsor required?
- Is professional registration or licensing necessary?
- What salary threshold applies, and from which effective date?
- What are the family and longer-term residency conditions?

For regulated professions, a generic work-visa guide is not sufficient. A nurse, doctor, teacher, engineer and software developer can face very different recognition and licensing conditions.

Add occupation-specific guidance selectively, beginning with sectors where the platform has reliable source evidence. Do not build a job marketplace simply to imitate recruitment websites.

### Business Playbook

**Needs separation of categories.**

The current page combines:

- US company formation.
- Portugal D8 remote-work residency.
- Portugal D7 passive-income residency.
- Spain international teleworker residency.
- Other business and financial planning subjects.

The existing US LLC disclaimer is correct: company formation is not immigration permission.

However, the broader page still places different services under one Business Playbook.

**Divide it into three distinct areas:**

**1. Business formation and international structures**

Company registration, non-resident company ownership, banking, tax obligations and business compliance.

**2. Founder and investor immigration**

Entrepreneur, startup, investor and business-residency programmes that actually provide an immigration or residence route.

**3. Remote business and freelance residence**

Digital nomad, self-employment and remote-work residence permits.

This prevents users from confusing an offshore company structure with a legal right to live or work in that country.

## 6. Blog and article assessment

The blog's basic structure is good enough to keep. The current research hub has category filters, goal filters, a country selector and search. It also displays a useful range of 96 articles.

The weaknesses are in data management and editorial rendering.

### A. The content counts do not agree

| Location | Count shown |
|---|---:|
| Live Research hub | 96 |
| About page | 84 |
| README feature list | 31 |
| Current content/blog/**/*.md repository collection | 93 |

The current Eleventy blog collection is based on Markdown files under content/blog/. The visible page count and the About-page count should be generated from one source instead of being manually maintained.

**References to reconcile:** Content index, About page, README.

### B. Country filtering is incomplete

The research page's country dropdown currently lists 15 destinations even though the country registry contains 30.

This makes the country filter incomplete for readers trying to find all research on one destination.

It should be populated from article metadata or the country registry, rather than manually maintaining another list.

### C. Goal filtering is heuristic

The research index infers some article goals from the category and title.

This is fragile.

For example, a general guide may not contain the words "study", "student", "nomad" or "LLC". An article with no goal value is currently allowed through every goal filter.

That makes the filter less precise than it appears.

Every article should have explicit content metadata such as:

- primaryGoal
- secondaryGoals
- country
- audience
- contentType
- publishedDate
- lastReviewed
- sourceReviewStatus

A general-purpose article can explicitly be tagged general, rather than having an empty field.

### D. Article header formatting defects

The live Germany article renders its title twice: once in the template header and again as the first Markdown H1.

The same article also displays "14 min min read". The three new working-holiday articles display "10 min min read" or "12 min min read" for the same reason.

The underlying issue is the difference between storing a value such as "10 min" and the template appending another "min read".

These are small defects, but they are visible and repeated.

### E. The verification badge is not sufficiently governed

The article template displays the official-source badge whenever lastFactChecked exists in the Markdown frontmatter.

The badge does not establish that:

- The official source was actually reviewed.
- The article's claims match that source.
- The relevant nationality is eligible.
- A relevant exception or quota was checked.
- The evidence is current.
- A second reviewer approved the claim where needed.

The working-holiday articles demonstrate why a manually supplied date is not enough.

Keep the badge concept. Change what qualifies an article to receive it.

### F. Author and review attribution

The current article template has an author metadata field, but the visible article header does not clearly show the author or reviewer.

For a publication claiming primary-source verification, readers should be able to distinguish:

- Author.
- Editorial reviewer.
- Technical or immigration subject-matter reviewer, where applicable.
- Date published.
- Date materially updated.
- Last evidence review.

Do not invent reviewer identities. Show an editorial team where there is no named individual reviewer.

## 7. Recommended standard article formats

Do not make every article look identical. The publication should have a shared design language but different information layouts for different content types.

| Content format | Recommended layout |
|---|---|
| Country audit | Country overview, route availability, passport restrictions, costs, key requirements, evidence status, risks and official links |
| Student guide | Education route, programme/admission requirements, tuition, scholarships, living funds, deadlines and official applications |
| Professional guide | Occupation, qualification recognition, job offer, sponsorship, salary, experience, licensing and residency progression |
| Business/investor guide | Business model, eligibility, capital, ownership, investment conditions, residence rights, tax caveats and official regulators |
| Visitor/short-stay guide | Passport, destination, purpose, visa/ETA/visa-free status, allowed stay, fee and entry conditions |
| Digital nomad guide | Remote income, employer/client location, minimum income, duration, renewal, tax and family provisions |
| Policy update | What changed, effective date, affected routes and passports, transitional rules and old-versus-new comparison |
| Case study | Applicant context, actual pathway, documented cost breakdown, timeline, outcome, lessons and consent/disclosure |

### Example: what a country audit should look like

**Germany — Country Audit**

Illustrative layout:

**Germany**

Country profile · Nigerian applicants · Evidence review date shown per pathway

**Study pathways**

Higher Education Student Residence Permit

- Admission.
- Living funds.
- Tuition.
- Family conditions.

Evidence status: Official sources.

For each evidence item show official source, effective date, last retrieved and review due.

**Work pathways**

Skilled Employment

- Qualification recognition.
- Eligible job.
- Salary.
- Employer conditions.

Evidence status: Nationality-specific conditions.

**Planning considerations**

- Known financial requirements — show by pathway.
- Permanent residence options — show with conditions.
- Unknown / unverified figures — explicitly withheld.

The point is to make a country page a gateway into its actual routes, rather than a table of country-wide approval rates that the authorities do not publish.

## 8. Benchmark comparison: what established platforms do well

These are not all direct competitors. They are reference points for the particular functions MyPathway2Global offers.

| Reference website | What it does well | What MyPathway2Global should learn |
|---|---|---|
| GOV.UK visa checker | Starts with nationality and travel purpose | Make passport-specific access and purpose central to entry-route discovery |
| Australian Visa Finder | Separates visit, work, study, family, permanent residence and staying longer | Use distinct journey types rather than merging tourists, nomads and work visas |
| Make it in Germany | Work, study, vocational training, business and research Quick-Check | Improve goal taxonomy and give users a clear next action |
| Studyportals | Structured course search, degree levels and programme comparison | Keep study guides but make the boundary between visa guidance and actual programme discovery explicit |
| GoAbroad | Programme search, destination discovery, reviews and comparisons | Use structured content metadata; avoid becoming a generic travel booking site |
| LoopholeDB | Standardized nomad visa comparisons with original income units, stay length, fees, tax treatment and checked dates | Give remote-work routes their own comparison structure |

### The most useful lesson from government visa checkers

The Australian Government's visitor Visa Finder starts with the purpose of the visit, including holidays, visiting family, transit, working holidays, events and business visitor activities. Its disclaimer is also explicit that its results are introductory information, not a visa guarantee or complete eligibility decision.

This is the right model for the visitor side of the platform.

### The most useful lesson from digital nomad directories

LoopholeDB compares 52 open programmes across 51 countries, including original income thresholds, duration, government fees, decision times, tax treatment and the date each entry was checked. Another specialist directory explicitly leaves a figure blank when the government does not publish a corresponding annual or monthly threshold.

That is particularly relevant to MyPathway2Global's evidence philosophy: do not convert an official figure into a misleading comparison just because a table looks better with every cell filled.

## 9. Monetization, privacy and partner model

### Monetization: the business principle is good; implementation documentation is inconsistent

The repository's monetization model has sensible restrictions:

- Ads should not appear inside the core route-discovery workflow.
- Commercial payments must not influence route ranking.
- Partner offers should be contextual.
- Sponsored content and referrals should be disclosed.
- Evidence and eligibility must remain independent from revenue.

This is the right approach and should be preserved.

The weakness is that the documents and code disagree about the current state.

The Monetization Registry says there is no publisher ID and that live rendering remains disabled. But src/js/admob-loader.js already contains a publisher ID and loads AdSense when advertising consent is granted. There are also static third-party script references on some pages.

The repository needs one definitive account of:

- Which advertising provider is currently approved.
- Which pages load advertising code.
- Which loader controls that code.
- What happens when a user declines advertising consent.
- Whether ads.txt contains the correct publisher relationship.
- Whether the actual production site matches the source configuration.

For personalized ads served to users in the EEA, UK and Switzerland, Google requires a Google-certified CMP integrated with IAB TCF. A custom consent banner by itself should not be assumed to meet that requirement. Non-personalized or limited advertising may be treated differently where supported.

### Privacy: the notice needs to catch up with the actual browser behaviour

The route finder and wizard store information locally in the browser, including fields such as passport country, current visa, family size, budget, income, experience, destination and purpose.

That is preferable to transmitting unnecessary applicant data to a server, but the privacy inventory and published notice should describe these local-storage flows accurately.

The Privacy Data Inventory predates some current functionality. The privacy page does not fully describe the specific profile-storage keys and retention behaviour.

Additionally, the source contains a Sabilytics tracking script on multiple pages. Its behaviour should be checked against the consent promises; the assessment cannot conclude from the source alone whether that particular provider captures data before consent.

**Improvements**

- Disclose local persistence.
- Provide a clear way to clear saved answers.
- Define sensible expiry periods.
- Verify third-party analytics loading.
- Reconcile the inventory with the deployed site.

### Partner model: preserve the concept

The partner framework and public Work With Us page are among the stronger strategic areas.

The evidence layer / service layer distinction is sensible. The rules against paid pathway rankings, suppressed adverse evidence and misleading professional status are especially valuable.

The weakness is operational proof:

- Which practitioners are genuinely verified?
- Which regulator or professional register confirms their status?
- Who reviewed each route?
- When was the partner last checked?
- What conflicts of interest have been disclosed?
- Which partners are actually active?

Do not create a directory that implies verified practitioners exist unless the credentials have been checked.

## 10. Planning-document assessment: what the internal plans reveal

The assessment examined the active and archived planning material, rather than relying only on the live website.

The most important documents included:

- Mission, Vision & Trust Firewall.
- Active Sprint.
- Phase Status.
- Content Pipeline.
- Data Trust Standard.
- Original Blueprint.
- Archived System Architecture Blueprint.
- Archived Find MyPathway UX specification.
- Archived Find MyPathway schema/API specification.
- Archived Global Opportunity Integration Framework.
- Monetization Roadmap.
- Privacy and Security Standard.

### Good strategic decisions to retain

The original architecture has a strong four-filter idea:

1. Proof-of-funds realism.
2. Selection and quota asymmetry.
3. Permanent residence / residency conversion potential.
4. Primary-source provenance.

This is a useful differentiator for African applicants because it goes beyond simply listing popular destination countries.

The mission and trust firewall are also good. They explicitly prevent commercial considerations from influencing pathway ranking or evidence status.

### Weaknesses in planning and delivery alignment

**The archived blueprint promises more than the current engine delivers.**

The planning material describes matching based on passport, qualifications, family size and liquidity. The present route engine does not evaluate all of those dimensions.

**The old data-trust standard is behind the current dataset.**

It still describes the country data as an incomplete 26-country blueprint. The current registry has 30 countries and 69 pathways.

**The privacy inventory is behind the implementation.**

It does not fully reflect the current local-storage behaviour, publisher configuration and third-party scripts.

**The monetization plan is behind the code.**

The publisher-ID and ad-loading state is inconsistent across code and documentation.

**The content documents disagree on coverage.**

The README, About page, blog badge, blog inventory, polish taskfile and current content tree do not report a consistent number of posts or categories.

**The old UI tasks should not all be reopened.**

The current phase tracker says the rebrand and UI/UX transformation are complete, and the recent sprint documents record shared template and CSS improvements. Several older UI and blog task documents still contain outdated counts, paths and defects. They should be reconciled instead of being used as a second active task board.

This is a documentation-governance issue: it makes it too easy to mark a feature complete because the planned document says it is complete, even when the live behaviour has not caught up.

## 11. What I would leave alone

The assessment specifically avoids disturbing areas that are already up to standard.

| Existing area | Recommendation |
|---|---|
| Overall brand direction and shared navigation | Keep |
| Search modal and site-wide search access | Keep |
| Current homepage product entry points | Keep the structure; correct the claims and counts |
| Five-step Visa Wizard interaction pattern | Keep the progressive flow; correct its purpose and matching logic |
| Country search and regional filter | Keep |
| Side-by-side country comparison capability | Keep; change the comparison fields |
| Student Playbook structure | Keep; improve programme and application next steps |
| Professional Playbook structure | Keep; add occupation-specific detail selectively |
| Research hub categories and search | Keep; fix metadata and filtering |
| Article quick summaries and table-of-contents structure | Keep |
| Official-source links and evidence badges | Keep the concept; strengthen the verification rules |
| Clear legal disclaimers | Keep |
| Partner trust firewall | Keep |
| Fail-closed treatment of missing metrics | Keep; do not fabricate rates or costs |

Do not recommend another broad visual redesign at this stage.

The current project documents report completion of the classic UI/UX transformation, and the current live site has a shared identity, reusable navigation, product entry points and established page formats. The bigger weaknesses are in the information and logic those pages present.

The outstanding live-browser accessibility and mobile interaction review should still be completed. The source and text-rendered pages are not a substitute for checking the actual site on a phone, keyboard and screen reader.

## 12. Recommended correction sequence

| Priority | Workstream | Required outcome |
|---|---|---|
| P0 | Nationality-specific content correction | Resolve the three false working-holiday claims and audit the rest of the October 30 batch |
| P0 | Route-engine integrity | Apply passport restrictions, required conditions and correct currency comparisons |
| P0 | Service scope | Decide and implement the distinction between visitor, nomad, business and work pathways |
| P1 | Calculator | Rebuild around pathway-specific funds or clearly limit it to budget readiness |
| P1 | Evidence freshness | Use actual source retrieval/review dates rather than effective dates |
| P1 | Country comparison | Replace unavailable metrics with meaningful pathway/evidence comparisons |
| P1 | Privacy and advertising | Reconcile storage, analytics, publisher ID, ad loading and consent requirements |
| P1 | Editorial system | Fix article header defects, review badges, authorship and source validation |
| P1 | Content inventory | Reconcile 93/96/84/31 post counts and filter metadata |
| P2 | Student programme discovery | Add structured programme links or listings if the product intends to support course discovery |
| P2 | Professional occupation coverage | Expand recognition and licensing guidance for priority occupations |
| P2 | Nomad comparison | Introduce a standardized remote-work comparison table |
| P2 | Partner directory | Publish verified partner profiles only after actual credential checks |

### The most important product decision

Before adding more content or new visual features, resolve this:

**Is MyPathway2Global primarily an evidence-backed pathway discovery platform, or is it intended to become a complete passport-based visa and mobility checker?**

**Recommendation:** Make it the latter in stages, without pretending that every category is already supported.

The first complete journey should be:

1. User selects their passport.
2. User selects a destination and purpose.
3. The system checks whether the relevant category is available to that passport.
4. The system identifies any nationality-specific restrictions.
5. The system presents the pathway and its official requirements.
6. It compares the user's known financial position with the correct currency and conditions.
7. It explains missing information, blockers and the next legitimate action.
8. It links to the authority responsible for the application.

For visitor visas, this should be a separate passport–destination entry checker. For work and study it should be a pathway eligibility-support flow. For nomad and business it should use their own structured requirement fields.

## 13. Final assessment

MyPathway2Global has a good foundation and a meaningful differentiator. The original idea of providing African applicants with more useful, source-backed migration intelligence is still sound.

The greatest opportunity is to turn the existing 69-pathway data model and the new discovery tools into a genuinely reliable product.

Do not spend the next cycle replacing the visual identity, rebuilding the navigation or converting every article into a new design.

Spend it making sure that:

- The passport a user enters actually matters.
- Mandatory pathway requirements are actually checked.
- Financial comparisons are correct.
- Visitor and nomad features do what their labels promise.
- Published facts are genuinely supported by the cited authorities.
- An official verification badge means something enforceable.
- Content filters, counts and article formats agree with the underlying repository.
- Privacy and advertising disclosures accurately describe what the site does.

The three highest-priority areas are **content eligibility accuracy, nationality-aware route matching and the currency/requirement logic**. Until these are corrected, new features and additional articles risk making the website look more complete without making its core decisions more reliable.

The repository's active sprint reports 19 test suites and 180 passing tests as of its 31 October checkpoint, but this assessment did not rerun them or perform live interactive browser testing. The findings above are based on the current source, planning documents, accessible live pages and official/industry reference research.

---

# Implementation walkthrough and improvement blueprint

This section translates the findings into an execution approach. It is an implementation guide and correction register, not a claim that the work has already been completed.

## 14. Delivery principles

1. **Correctness before expansion.** Resolve dangerous nationality and eligibility errors before publishing more routes or adding new matching categories.
2. **Evidence before badges.** Verification status must be derived from traceable evidence records and review scope, not a manually entered date alone.
3. **Unknown is not eligible.** Missing or unreviewed conditions must remain unknown and must not improve a match score.
4. **One source of truth.** Counts, country options, content categories and status labels should be generated from canonical registries.
5. **Keep working foundations.** Retain the current brand, shared navigation, progressive wizard, research hub structure and useful playbook formats.
6. **Separate service logic.** Visitor entry, study, skilled work, nomad residence, business immigration and company formation need distinct taxonomies and rules.
7. **Financial integrity.** Store original currency, amount, period, conditions, effective date and normalized comparison values.
8. **Commercial independence.** Ads, referrals and paid partners must never change eligibility, evidence status or ranking.
9. **Privacy by design.** Collect only what a journey needs, explain local persistence and provide a clear reset/retention mechanism.
10. **No false completion.** A task is complete only when implementation, evidence, verification and documentation agree.

## 15. P0 implementation walkthrough

### P0.1 — Nationality-specific content correction

**Objective:** Remove or correct the three identified working-holiday articles and prevent recurrence.

**Implementation steps**

1. Identify the three New Zealand, Ireland and Australia working-holiday articles and their frontmatter, templates and index entries.
2. Temporarily unpublish, noindex or clearly mark each affected article as under correction while the claim is reviewed.
3. Review every article in the 30 October 2026 publishing batch for passport-specific eligibility, quotas, age bands and nationality-specific requirements.
4. For every material eligibility claim, record the exact official source page, relevant passage or rule, affected passport(s), date retrieved, reviewer and review outcome.
5. Correct the content only after the official eligibility rule has been checked.
6. Add a publication gate that blocks unsupported nationality claims and prevents a verification badge from appearing without an approved evidence record.
7. Review internal links, sitemap inclusion, canonical URLs and search-indexing consequences for temporarily unpublished pages.
8. Record the correction and the reason for it in the editorial change log.

**Acceptance criteria**

- No unsupported Nigerian working-holiday eligibility claim remains published.
- Every affected article has an explicit review outcome.
- A generic official source link cannot independently trigger a verified badge.
- Nationality-specific exceptions, quotas and age rules are recorded where relevant.
- The publishing workflow blocks unsupported eligibility claims.

### P0.2 — Route-engine requirement integrity

**Objective:** Make structured pathway requirements affect the result, or stop presenting unchecked routes as matches.

**Implementation steps**

1. Inventory the schema for all 99 requirement declarations and map each requirement type to an evaluation rule.
2. Define normalized requirement semantics: mandatory, conditional, optional, informational, unknown and not applicable.
3. Implement evaluators for job offer, admission offer, sponsorship, salary, points, qualification, age, experience, minimum funds and maintenance funds.
4. Define how user inputs map to each requirement, including explicit unknown and unanswered states.
5. Ensure conditional requirements are evaluated only when their condition applies.
6. Return an explainable result for each requirement: satisfied, not satisfied, unknown, not applicable or requires evidence.
7. Prevent unknown mandatory requirements from being treated as satisfied.
8. Add tests for each requirement type, condition branch, missing input and conflicting data case.
9. Update UI copy so it does not promise checks that the engine does not yet perform.

**Acceptance criteria**

- Every publishable pathway's mandatory structured requirements are evaluated or explicitly identified as unsupported.
- Unknown requirements never silently pass.
- Result cards show material blockers and unknowns.
- The score cannot hide a failed mandatory condition.
- The user can understand which answers affected the result.

### P0.3 — Passport-aware eligibility

**Objective:** Use the selected passport as a first-class eligibility input throughout Find MyPathway and Visa Wizard.

**Implementation steps**

1. Define a nationality eligibility data structure at the pathway and, where needed, sub-route level.
2. Support allowed passports, excluded passports, additional nationality conditions, quota/ballot conditions and unverified status.
3. Pass passportCountry through the complete Find MyPathway and Visa Wizard data flow.
4. Evaluate nationality restrictions before presenting a route as an applicable match.
5. Distinguish passport nationality from current residence and application location.
6. Record consular jurisdiction or location-specific process requirements separately from nationality eligibility.
7. Display the exact reason for a restriction or uncertainty and link to its official source.
8. Add regression tests for Nigerian applicants and a representative set of other passports, including routes with different nationality rules.

**Acceptance criteria**

- Passport input affects matching in both tools.
- A passport-excluded route is not presented as available.
- Unverified nationality eligibility is visibly marked unknown.
- Residence location does not accidentally substitute for passport nationality.
- Each nationality decision is traceable to a source and review date.

### P0.4 — Currency and financial comparison integrity

**Objective:** Make funds comparisons financially meaningful and auditable.

**Implementation steps**

1. Define a financial requirement object that stores amount, original currency, period, applicant/family condition, source, effective date and retrieval/review date.
2. Select and document a dated exchange-rate source and conversion policy.
3. Normalize values for comparison without overwriting the official original amount.
4. Display the official amount and currency alongside the converted planning equivalent.
5. Define rounding, rate timestamp, fallback and stale-rate behaviour.
6. Separate gross income, net income, expenses and monthly savings.
7. Rework budget-gap projections to use disposable monthly savings, not gross income.
8. Ensure family-size and dependent conditions are not lost during normalization.
9. Add tests for currency pairs, stale rates, missing rates, period mismatches, family conditions and zero/negative disposable savings.

**Acceptance criteria**

- No cross-currency comparison uses raw numeric amounts.
- The official amount and currency remain visible.
- Every normalized amount has a rate source and timestamp.
- Savings projections use disposable savings.
- Missing or stale exchange rates produce an explicit unknown state, not a fabricated result.

## 16. P0/P1 service taxonomy and tool-scope corrections

### P0.5 — Separate visitor, nomad, work, study and business services

**Objective:** Align the public service promises with the actual structured capabilities.

**Implementation steps**

1. Define canonical service categories and route subtypes.
2. Separate visitor/short-stay/transit entry checks from residence and work pathways.
3. Separate digital nomad and remote-work residence routes from ordinary employer-sponsored work routes.
4. Separate founder/investor immigration from company formation and cross-border business information.
5. Define which categories are supported, partially supported, research-only or not yet available.
6. Update homepage claims, tool descriptions, navigation labels and result states to reflect actual capability.
7. Do not allow a business selection to appear as a successful match while the registry has no structured business pathways.
8. Add an explicit visitor purpose to Visa Wizard only when the passport–destination entry data and logic are sufficiently complete.
9. Keep research-in-progress states honest and useful, with a clear explanation of what is missing.

**Acceptance criteria**

- Public claims and actual tool coverage agree.
- Nomad is not silently treated as ordinary work.
- Visitor purpose is distinct from residence pathways.
- Company formation is not represented as immigration permission.
- Unsupported categories are not presented as complete tools.

## 17. P1 implementation walkthrough

### P1.1 — Budget Calculator

**Objective:** Move from unsupported country affordability rankings toward a pathway-aware financial planner.

**Preferred direction:** Option B — pathway financial planner, while retaining the monthly-savings projection.

**Implementation steps**

1. Keep the existing savings, income, expenses and migration-goal inputs where useful.
2. Calculate liquid savings and monthly savings capacity separately.
3. Connect calculations to verified pathway-specific tuition, maintenance, funds, application fees and other known financial requirements.
4. Preserve each official amount in its original currency and show normalized planning equivalents separately.
5. Distinguish required proof of funds from actual expected spending.
6. Remove or disable country affordability rankings while verified aggregate country cost data is unavailable.
7. Show unknown costs as unknown; do not fill gaps with invented averages.
8. Present a transparent gap and savings timeline based on disposable monthly savings.
9. Explain assumptions and exclusions.

**Acceptance criteria**

- No destination is ranked by unverified aggregate costs.
- Pathway-specific figures show source, currency and applicable conditions.
- Monthly projections use savings capacity rather than gross income.
- The user can distinguish proof of funds from expected expenses.

### P1.2 — Evidence freshness and review governance

**Objective:** Separate rule effective dates from source retrieval and editorial review dates.

**Implementation steps**

1. Define separate fields for effectiveDate, sourceRetrievedAt, lastReviewedAt, nextReviewDueAt and reviewer.
2. Store source URL, issuing authority, source type, claim scope and reviewed passage or evidence note.
3. Define review intervals by volatility and consequence, not one universal date.
4. Require review when a source changes, a route closes, a quota is exhausted or a policy update is announced.
5. Make article and pathway verification badges derive from evidence status.
6. Display scope: a route can be source-verified while nationality eligibility remains unverified.
7. Add an expired/stale state that removes or downgrades the verified badge.
8. Provide an auditable history of changes and review decisions.

**Acceptance criteria**

- Effective date is never used as a proxy for last checked.
- Verification status is evidence-derived.
- Review expiry is visible and enforceable.
- Scope of verification is clear.

### P1.3 — Country Directory comparison

**Objective:** Replace unsupported empty metrics with available and meaningful registry data.

**Implementation steps**

1. Remove or relabel Official Rate, African Rate, Planning Cost and Sweet Spot while their underlying values are unavailable.
2. Add publishable pathway counts and category coverage.
3. Add evidence coverage and source review status.
4. Show known funds requirements only when supported by verified pathway records.
5. Show research-required pathways as explicit gaps.
6. Generate the country list and metadata from the canonical registry.
7. Correct the 30-versus-27 title and meta-description mismatch.
8. Preserve country search, region filters and side-by-side comparison.

**Acceptance criteria**

- No empty metric is presented as a meaningful comparison.
- The comparison uses registry-backed data.
- Country counts and metadata agree across page title, description and page body.

### P1.4 — Privacy and advertising

**Objective:** Reconcile actual browser behaviour, third-party scripts, advertising consent and published disclosures.

**Implementation steps**

1. Inventory every local-storage key used by Find MyPathway, Visa Wizard and related tools.
2. Document the data stored, purpose, retention period and clear/reset mechanism.
3. Update the privacy notice and Privacy Data Inventory.
4. Inspect every analytics and advertising script, including Sabilytics and the AdSense loader.
5. Verify whether scripts load before or after the relevant consent choice.
6. Reconcile the publisher ID, ads.txt, loader, Monetization Registry and actual production pages.
7. Confirm which advertising provider is approved and which pages may load advertising.
8. Validate Google CMP requirements for applicable regions and distinguish personalized, non-personalized and limited ads where supported.
9. Preserve the rule that advertising and partner payments do not influence route ranking or evidence status.
10. Record production verification evidence.

**Acceptance criteria**

- The privacy notice accurately describes local persistence and third-party processing.
- Users can clear stored answers.
- Advertising behaviour matches consent choices.
- Publisher configuration and ads.txt agree.
- The commercial firewall remains enforceable.

### P1.5 — Editorial system and article rendering

**Objective:** Correct visible article defects and make author, reviewer and verification information meaningful.

**Implementation steps**

1. Fix duplicated H1 rendering between Markdown content and the article template.
2. Normalize reading-time data so the template does not duplicate "min".
3. Add author and reviewer attribution where known.
4. Show published date, material update date and evidence review date as distinct values.
5. Derive source-verification badges from the evidence review record.
6. Add article content-type templates or layout variants based on the recommended article formats.
7. Keep quick summaries and table-of-contents functionality.
8. Add editorial checks for missing metadata and unsupported claims.

**Acceptance criteria**

- Titles render once.
- Reading time renders correctly.
- Author/reviewer attribution is honest.
- Verification status is tied to evidence.
- Content layout is appropriate to its type.

### P1.6 — Content inventory and metadata

**Objective:** Establish one canonical source for article counts, filters and content coverage.

**Implementation steps**

1. Reconcile the reported 93, 96, 84 and 31 content counts.
2. Define which count means published, indexed, available, legacy or feature-list coverage.
3. Generate public totals from the actual publishable content collection.
4. Generate country filter options from canonical country/article metadata rather than a manually maintained 15-country list.
5. Replace heuristic goal detection with explicit primaryGoal and secondaryGoals.
6. Add country, audience, contentType, publishedDate, lastReviewed and sourceReviewStatus metadata.
7. Use explicit general tags rather than empty goal values.
8. Add build-time validation for invalid or missing metadata.

**Acceptance criteria**

- Public counts are consistent and explain what they count.
- All 30 countries can be selected where relevant.
- Goal filters use explicit metadata.
- Articles without a goal are not silently included in every goal filter.

## 18. P2 product improvements

### P2.1 — Student programme discovery

The Student Playbook should remain a pathway and planning guide unless the product deliberately invests in reliable programme data.

Potential incremental improvement:

- Link to official institution and course catalogues.
- Link to scholarship providers and application portals.
- Distinguish programme admission from immigration eligibility.
- Add structured programme discovery only when reliable institution/programme data, update ownership and application links are available.

Do not imply that a student guide is a complete university application marketplace.

### P2.2 — Professional occupation coverage

Expand selectively, based on evidence availability and user value.

For priority occupations, document:

- Occupation eligibility.
- Qualification recognition.
- Licensing or professional registration.
- Job offer and sponsorship.
- Salary thresholds and effective dates.
- Experience and language requirements.
- Family conditions and residency progression.

Do not launch a broad occupation directory without source-backed requirements and a maintenance owner.

### P2.3 — Digital nomad comparison

Create a dedicated comparison structure for remote-work residence routes.

Recommended fields:

- Eligible passports and nationality restrictions.
- Remote-work definition and permitted client/employer location.
- Minimum income, original amount and currency.
- Savings alternatives, if officially permitted.
- Duration and renewal.
- Government fees.
- Family/dependent conditions.
- Tax considerations and limitations.
- Source, last retrieval and review status.

Do not mix visitor permissions with remote-work residence permissions.

### P2.4 — Partner directory

Publish verified partner profiles only after credential checks.

Each profile should distinguish:

- Identity and organization.
- Country and service jurisdiction.
- Professional role.
- Regulator or professional register.
- Verification evidence and date.
- Active, suspended or expired status.
- Conflicts of interest and commercial disclosures.
- Services the partner is and is not authorized to provide.

Do not imply that a practitioner is regulated or verified without evidence.

## 19. Cross-cutting acceptance and verification plan

Before marking any workstream complete:

1. Confirm the implementation matches the intended requirement.
2. Add unit tests for logic and edge cases.
3. Add integration tests for data flow from user input to result.
4. Add content validation for evidence and nationality claims.
5. Verify desktop and mobile interaction.
6. Check keyboard navigation and screen-reader labels for affected flows.
7. Confirm privacy and consent behaviour in a real browser.
8. Check SEO metadata, canonical URLs, sitemap and indexation after content changes.
9. Verify official links and source freshness.
10. Update the active sprint, phase tracker, changelog and relevant canonical documentation.
11. Record the exact commit SHA and test/verification evidence.
12. Do not mark a blocked or untested item complete.

The previous checkpoint reported 19 test suites and 180 passing tests as of 31 October 2026. Those results are historical checkpoint evidence, not proof that the changes proposed here have been implemented or tested.

## 20. Suggested implementation order and release gates

| Sequence | Work package | Gate before proceeding |
|---|---|---|
| 1 | Remove/correct the three working-holiday claims and audit the October 30 batch | No known false nationality claims remain in the affected batch |
| 2 | Add nationality eligibility data and pass passport through both matching tools | Passport-specific decisions are tested and explainable |
| 3 | Evaluate structured mandatory requirements | Unknown and failed mandatory requirements cannot pass |
| 4 | Normalize financial comparisons and savings projections | Currency and disposable-savings calculations are auditable |
| 5 | Finalize service taxonomy and truthful product claims | Each tool's scope matches implemented capability |
| 6 | Correct calculator and country comparison | No unsupported affordability or country metrics |
| 7 | Reconcile evidence freshness and verification badges | Badges are traceable to evidence and review scope |
| 8 | Reconcile privacy, analytics, advertising and consent | Production behaviour matches disclosures and consent |
| 9 | Correct article templates and content metadata | Counts, filters, headings and reading time are consistent |
| 10 | Add P2 programme, occupation, nomad and partner improvements selectively | Data ownership and evidence maintenance are defined |

## 21. Implementation tracking template

For each correction, record:

| Field | Required entry |
|---|---|
| Workstream / task ID | Stable identifier |
| Priority | P0, P1 or P2 |
| Affected product area | Tool, page, data registry, content or infrastructure |
| Finding | The exact observed weakness |
| Expected behaviour | What the corrected product must do |
| Source of truth | Code, schema, official source or canonical document |
| Dependencies | Data, owner action, external provider or legal review |
| Acceptance criteria | Testable completion conditions |
| Verification | Tests, browser checks, accessibility or evidence review |
| Status | Not started, in progress, blocked, verified or deferred |
| Commit / release evidence | Exact SHA, deployment and relevant links |
| Documentation updated | Sprint, phase, changelog and canonical docs |

## 22. Explicitly out of scope for this correction cycle

Unless separately approved, do not:

- Replace the brand identity or rebuild the shared navigation.
- Redesign every page for the sake of visual novelty.
- Invent country approval rates, African success rates, total costs or timelines.
- Treat company formation as immigration permission.
- Treat a generic source URL as proof of nationality eligibility.
- Treat unknown mandatory requirements as satisfied.
- Use gross income as disposable savings.
- Let paid partners or advertising influence pathway ranking.
- Launch a programme, occupation or partner directory without reliable data and review ownership.
- Mark work complete solely because a planning document says it is complete.

## 23. Product direction and relationship to future tools

The current findings support strengthening MyPathway2Global as an evidence-backed mobility intelligence platform first. Additional tools should build on the same trusted data and identity, not bypass it.

A future international recruitment or job-agent tool may be evaluated as a separate product workstream. It should not be conflated with the corrections in this assessment or treated as implemented by this document. Any such expansion should preserve the platform's evidence and user-protection principles: genuine vacancies, verified recruitment intermediaries, transparent fees, lawful recruitment, destination-specific work authorization and clear separation between job placement and immigration advice.

---

**End of assessment and implementation blueprint.**