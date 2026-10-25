> **ARCHIVED 2026-10-18 (session 2).** All REQ-DATA and REQ-BLOG tasks in this document are complete. See `CHANGELOG.md` 2026-10-18 entries and `docs/project/PHASE_STATUS.md` for current state. This file is a historical planning record only.

# Development Required Tasks — Global Route

**Created:** 2026-10-18  
**Status:** Pre-sprint planning — these tasks MUST be completed before next sprint phases are defined  
**Scope:** Research-required pathway resolution, empty blog content, blog fact corrections, and industry standard UI/UX benchmarking

---

## HOW TO READ THIS DOCUMENT

This document has three parts:

1. **REQUIRED DATA TASKS** — pathway research and blog content that must exist before the product is credible
2. **REQUIRED BLOG FACT CORRECTIONS** — two live posts contain unsupported claims that contradict the evidence model
3. **INDUSTRY STANDARD BRIEF** — what migration/mobility platforms at industry standard look like, and what Global Route needs to match

Sprint and phase planning for Phase 2 onward should not begin until the REQUIRED tasks are categorized and scheduled.

---

## PART 1 — REQUIRED DATA TASKS

### 1A. The 4 Research-Required Pathways

These 4 pathways are currently `research_required` and blocked from publication. Each has a different reason and a different resolution path.

---

#### RR-1 · AU-skilled — Australian Skilled Visas

**Current block reason:**  
`scopeNote`: "Promotion blocked: financial-requirement evidence is medium confidence — no universal proof-of-funds threshold applies across all skilled subclasses. Promote individual subclasses (189, 190, 491) via exact subroute candidates with subclass-specific financial evidence."

**What this actually means:**  
The umbrella record `AU-skilled` covers three distinct visa subclasses — Subclass 189 (Skilled Independent), Subclass 190 (Skilled Nominated), and Subclass 491 (Skilled Work Regional). Each has different financial requirements, different occupation lists, and different state nomination rules. There is no single proof-of-funds threshold that applies to all three.

**Research required:**
- Subclass 189: No employer or state sponsor needed. Points-tested (65+ points). No universal funds threshold — applicants must demonstrate they can support themselves but no fixed amount is published by Home Affairs. Occupation must be on the Medium and Long-term Strategic Skills List (MLTSSL).
- Subclass 190: State/territory nomination required. Each state has its own occupation list and nomination criteria. Points-tested (65+ points minimum, states typically require higher).
- Subclass 491: Regional nomination (state/territory or eligible family member in regional area). Points-tested (65+ points). 3-year regional work requirement before PR eligibility.

**Resolution path:**  
Create three separate pathway records: `AU-skilled-189`, `AU-skilled-190`, `AU-skilled-491`. Each needs:
- Primary source: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/
- Eligibility evidence record (points, occupation list, age cap 45)
- Financial evidence record (no fixed threshold — document this explicitly as "no universal threshold; applicant must demonstrate capacity")
- Scope note confirming the exact subclass covered

**Outcome options:**
- Promote all three as `publishable` with explicit "no universal funds threshold" notes
- Keep as `research_required` with a `permanentBlocker` field if evidence cannot be confirmed to high confidence

**Priority:** Medium — AU is a high-demand destination for African professionals. The three subclasses are the most searched Australian work pathways.

---

#### RR-2 · NZ-skilled — New Zealand Skilled Residence Pathways (umbrella)

**Current block reason:**  
`scopeNote`: "Promotion blocked: scope record NZ-skilled-scope-2026-09-14 explicitly states this is a research umbrella for three distinct child routes (Points-based, Skilled Work Experience, Trades and Technician). All three child routes are already promoted as canonical pathways. Do not promote the umbrella."

**What this actually means:**  
This is NOT a real research gap. The three child routes (`NZ-smc-points-based`, `NZ-smc-skilled-work-experience`, `NZ-smc-trades-technician`) are already `publishable`. The umbrella record exists only as a research artifact and should be formally closed, not promoted.

**Resolution path:**  
Add a `permanentBlocker` field to `NZ-skilled`:
```json
"permanentBlocker": "Umbrella record superseded by three canonical child pathways: NZ-smc-points-based, NZ-smc-skilled-work-experience, NZ-smc-trades-technician. Do not promote. Closed 2026-10-18."
```

**Priority:** Low — this is a documentation close-out, not a research task. Takes 5 minutes.

---

#### RR-3 · RU-study — Russia Study Visa

**Current block reason:**  
`scopeNote`: "Promotion blocked: eligibility and financial-requirement evidence is medium confidence due to geopolitical context and potential access restrictions for African passport holders. Promote only after high-confidence evidence is available."

**What this actually means:**  
Russia's visa process for African students is technically available but practically complex post-2022. The Russian Ministry of Foreign Affairs (MFA) website (mid.ru) is the official source but English-language guidance is limited. The key concerns are:
- Banking access: SWIFT restrictions mean blocked-account-style fund transfers are difficult
- Embassy access: Russian embassies in some African countries have reduced capacity
- Scholarship route: Russia offers government scholarships (Rossotrudnichestvo) which is a separate pathway with different requirements
- Geopolitical risk: Sanctions environment creates real uncertainty for African applicants

**Research required:**
- Confirm whether the Russian MFA publishes a specific financial threshold for student visa applicants from Nigeria/Africa
- Confirm whether Russian embassies in Lagos/Abuja are currently processing student visas
- Confirm whether the Rossotrudnichestvo scholarship route is a viable separate pathway
- Assess whether the geopolitical/banking context makes this pathway genuinely inaccessible vs. just harder

**Resolution path options:**
- Option A: Find high-confidence primary source evidence → promote as `publishable` with explicit caveats about banking/access complexity
- Option B: Cannot find high-confidence evidence → add `permanentBlocker` with dated rationale: "Geopolitical context and banking access restrictions create unresolvable evidence gaps for African applicants as of [date]. Revisit if context changes."
- Option C: Promote the Rossotrudnichestvo scholarship as a separate pathway if evidence supports it

**Priority:** Low — Russia is not a primary destination for the target audience. Formal close-out (Option B) is the most honest resolution given current context.

---

#### RR-4 · RU-work — Russia Work Visa Routes

**Current block reason:**  
Same as RU-study: medium confidence evidence, geopolitical context, access restrictions.

**What this actually means:**  
Russian work visas for African nationals face the same structural problems as study visas, compounded by:
- Highly Qualified Specialist (HQS) visa requires salary ≥ 167,000 RUB/month — but RUB/NGN conversion and banking access are problematic
- General work permit requires employer sponsorship and quota allocation — quota system is opaque
- No reliable English-language primary source for African-specific guidance

**Resolution path:**  
Same as RR-3. Most likely outcome is Option B (permanent blocker with dated rationale). If the Rossotrudnichestvo or HQS route has verifiable evidence, it could be split into a separate pathway.

**Priority:** Low — same reasoning as RU-study.

---

### 1B. The 18 Publishable Pathways With Zero Structured Requirements

These pathways are `publishable` (have evidence records) but have empty `requirements[]` arrays. This means the route engine cannot match users against them with any precision. They show up in results but cannot explain what a user needs.

**Full list:**

| Pathway ID | Country | Type | Gap |
|---|---|---|---|
| CA-federal-skilled-worker | Canada | work | No requirements — FSW has points, language, education, funds thresholds |
| AU-student | Australia | study | No requirements — has funds threshold (AUD 21,041/year) and admission offer |
| NZ-smc-points-based | New Zealand | work | No requirements — has points threshold, funds, age cap |
| NZ-smc-skilled-work-experience | New Zealand | work | No requirements — has salary threshold, occupation list, funds |
| NZ-smc-trades-technician | New Zealand | work | No requirements — has qualification + occupation requirements |
| IE-study | Ireland | study | No requirements — has funds threshold (€7,000+) and admission offer |
| IT-study | Italy | study | No requirements — has funds threshold and admission offer |
| IT-work | Italy | work | No requirements — has Nulla Osta (work authorization) requirement |
| FI-work | Finland | work | No requirements — has job offer and salary threshold |
| AT-study | Austria | study | No requirements — has funds threshold and admission offer |
| AT-rwr-other-key-workers | Austria | work | No requirements — has points threshold (55+), salary, job offer |
| AT-red-white-red | Austria | work | Duplicate of AT-rwr-other-key-workers — needs deduplication review |
| KR-study | South Korea | study | No requirements — has funds and admission offer |
| KR-work | South Korea | work | No requirements — has job offer (E-series visa) |
| CN-study | China | study | No requirements — has admission offer and funds |
| CN-work | China | work | No requirements — has work permit (Z visa) requirements |
| CH-study | Switzerland | study | No requirements — has funds and admission offer |
| CH-work | Switzerland | work | No requirements — has job offer, quota, priority check |

**Batching recommendation for sprint work:**

- Batch A (high demand, straightforward): CA-federal-skilled-worker, AU-student, IE-study — these three serve the highest-traffic destinations
- Batch B (NZ SMC three routes): NZ-smc-points-based, NZ-smc-skilled-work-experience, NZ-smc-trades-technician — these were promoted in August/September but requirements were never filled
- Batch C (European): IT-study, IT-work, FI-work, AT-study, AT-rwr-other-key-workers, CH-study, CH-work
- Batch D (Asia): KR-study, KR-work, CN-study, CN-work
- Dedup: AT-red-white-red vs AT-rwr-other-key-workers — confirm whether these are the same pathway or different scopes

---

## PART 2 — REQUIRED BLOG FACT CORRECTIONS

Two live blog posts contain approval rate claims that directly contradict the evidence model. These must be corrected before any public launch.

---

### BC-1 · Germany Visa from Nigeria 2026 — Unsupported Approval Rates

**File:** `content/blog/country-audits/germany/germany-visa-from-nigeria-2026.md`

**Unsupported claims:**
- Excerpt: "Official approval rate 85%, African reality 62-68%"
- Table in post: "Student Visa | 85% | 62-68%", "Language Course | 78% | 55-60%", "Au Pair | 82% | 50-55%"
- Source cited: "data from the Lagos and Abuja embassies (obtained through community reporting and FOIA requests)"

**Why this is a problem:**  
The evidence model explicitly states: "It does not claim true acceptance rates or total costs where reliable field-level evidence and a defensible methodology are unavailable." The German Federal Foreign Office does not publish approval rates by nationality. "Community reporting and FOIA requests" is not a primary source. The 62-68% figure is fabricated or unverifiable.

**Required correction:**
- Remove the approval rate table entirely
- Replace excerpt with: "Germany's zero-tuition public universities and 18-month job search visa make it one of the strongest pathways for African students — here's what the process actually requires."
- Replace the "African Reality" section with an honest framing: what the official process requires, what the documented barriers are (blocked account, document authentication, APS), and what applicants can control
- Add `lastFactChecked` frontmatter field with correction date
- Do NOT fabricate replacement figures

---

### BC-2 · Canada Express Entry 2026 — Unsupported Approval Rates

**File:** `content/blog/playbooks/professional/canada-express-entry-2026.md`

**Unsupported claims:**
- Excerpt: "Official approval rate 92%, Nigerian reality 78-85%"
- Quick Summary: "Official approval rate: 92% (global average for Express Entry)" and "Nigerian reality: 78-85% for qualified candidates"

**Why this is a problem:**  
IRCC publishes Express Entry processing statistics but not approval rates by nationality. The 78-85% "Nigerian reality" figure has no primary source. Express Entry is an invitation-based system — once you receive an ITA and submit a complete application, the approval rate for complete applications is very high, but that is not the same as the rate for all Nigerian applicants who enter the pool.

**Required correction:**
- Remove the approval rate claims from excerpt and Quick Summary
- Replace with accurate framing: Express Entry is invitation-based — the key metric is CRS score cut-offs (which IRCC does publish per draw), not approval rates
- Keep the CRS score guidance (480-520 range) as that is verifiable from IRCC draw history
- Add `lastFactChecked` frontmatter field with correction date

---

## PART 3 — INDUSTRY STANDARD BRIEF

### What the migration/mobility industry looks like at standard

Research across the leading migration platforms, immigration law firm sites, and mobility intelligence products reveals consistent patterns. Global Route needs to match or exceed these in the areas below.

---

### 3A. Comparable platforms and what they do well

**Fragomen / Envoy Global / Newland Chase** (enterprise immigration)
- Audience: corporations, HR teams
- Strength: deep country-by-country compliance data, processing time trackers, policy alert feeds
- Weakness: not consumer-facing, paywalled, not Africa-specific
- Lesson for Global Route: processing time data and policy change alerts are high-value features even at consumer level

**Immihelp / Visahq / iVisa**
- Audience: individual applicants
- Strength: step-by-step checklists, document lists, fee calculators
- Weakness: often outdated, no evidence sourcing, no Africa-specific context
- Lesson for Global Route: document checklists and fee calculators are expected by users — but Global Route's evidence-gated approach is a genuine differentiator if communicated clearly

**Boundless / Immigrate.com**
- Audience: US-focused family immigration
- Strength: guided application flows, progress tracking, attorney review
- Weakness: US-only, expensive
- Lesson for Global Route: guided flows (not just information) convert better than static pages

**Relocate.me / Nomad List**
- Audience: remote workers, digital nomads
- Strength: cost-of-living data, visa type filters, community reviews
- Weakness: shallow on actual visa requirements, no Africa-specific lens
- Lesson for Global Route: cost-of-living context alongside visa requirements is a high-value combination

**Africa-specific: Jobberman, Fuzu, Shortlist**
- Audience: African professionals
- Strength: local context, local language, local salary benchmarks
- Weakness: focused on local employment, not international mobility
- Lesson for Global Route: there is a genuine gap in Africa-specific international mobility intelligence — this is the market position

---

### 3B. Industry-standard landing page structure

Every credible migration/mobility platform at industry standard has these sections on the homepage, in roughly this order:

**1. Hero — value proposition + primary CTA**
- One clear sentence: what the product does and who it's for
- Primary CTA: "Find My Route" or "Explore Countries" — not "Learn More"
- Trust signal in hero: "26 countries · 56 pathways · evidence-backed"
- No fabricated statistics in the hero

**2. How it works — 3-step process**
- Step 1: Tell us your profile (student / professional / business)
- Step 2: We match you to evidence-backed pathways
- Step 3: You get a clear next action, not a guess
- This section reduces bounce rate by setting expectations immediately

**3. Featured destinations / pathways**
- 4–6 country cards with: flag, pathway name, key requirement (e.g. "€11,208 blocked account"), evidence status
- Filter by: Study / Work / Business
- CTA on each card: "See full pathway →"

**4. Trust / evidence model explanation**
- Short section explaining WHY Global Route doesn't publish approval rates
- This is a differentiator, not a weakness — frame it as radical transparency
- "We only show what official sources confirm. No guesses."

**5. Budget calculator preview**
- Inline or linked calculator
- "What can you afford? Find pathways within your budget."

**6. Blog / research preview**
- 3 latest posts
- Category filters: Country Audits / Playbooks / Policy Updates

**7. Social proof / community**
- Case studies (Chisom's story is already written)
- Testimonials or community size if available
- "Join X people planning their move"

**8. Footer — 4 columns**
- Column 1: Brand + tagline
- Column 2: Explore (Countries, Find My Route, Calculator)
- Column 3: Guides (Student, Professional, Business)
- Column 4: Trust (Privacy, Disclaimer, Terms, Contact)

---

### 3C. Industry-standard page types that Global Route is missing or incomplete on

| Page | Industry standard | Global Route current state | Gap |
|---|---|---|---|
| Country detail page | Flag, overview, all pathways, requirements table, cost range, processing time, official source link | Eleventy-generated — template needs audit | Template may exist but content completeness unknown |
| Pathway detail page | Full requirements list, step-by-step process, document checklist, fee breakdown, official source | Eleventy-generated — 21 pathways have no requirements | 21 pages will show empty requirements |
| Comparison page | Side-by-side 2–3 countries on cost, time, requirements | Does not exist | Phase 2 feature (P2-3) |
| Visa checklist page | Downloadable/printable document checklist per pathway | Does not exist | High-value quick win |
| Policy updates feed | Dated list of recent policy changes with source links | blog/policy-updates/2026/ exists but only 1 post | 1 post in the category |
| Success stories | Real applicant journeys with budget, timeline, outcome | 1 post (Chisom) | Need 3–5 more |
| Rejection analysis | Why applications fail, what to fix | Directory exists, zero posts | High-value, zero content |
| Application guides | Step-by-step per pathway type | Directory exists, zero posts | High-value, zero content |
| Financial guides | How to fund blocked accounts, currency transfer, scholarships | Directory exists, zero posts | High-value, zero content |

---

### 3D. Required UI buttons and CTAs — industry standard

Every migration platform at standard has these interactive elements. Global Route's current state against each:

| Element | Purpose | Current state |
|---|---|---|
| "Find My Route" primary CTA | Route matching entry point | Page exists but broken (no header/footer) |
| "Explore Countries" secondary CTA | Browse all destinations | Countries page exists and functional |
| "Calculate My Budget" CTA | Calculator entry point | Calculator page exists and functional |
| Country card "View Pathway →" | Deep-link to pathway detail | Generated pages exist — link state unknown |
| "Compare Countries" button | Side-by-side comparison | Does not exist (Phase 2) |
| "Save this pathway" / bookmark | User saves routes for later | Does not exist (Phase 6) |
| "Report an error" link | Trust signal + data quality | Contact page exists but is a bare shell |
| "Subscribe to policy updates" | Email capture for policy alerts | Does not exist |
| Consent toggle (analytics) | GDPR/privacy compliance | Implemented in CSS/JS — needs browser validation |
| Consent toggle (advertising) | Ad consent | Implemented in CSS/JS — needs browser validation |
| Mobile hamburger menu | Mobile nav | Exists but inconsistent across pages |
| "Back to countries" breadcrumb | Navigation on pathway pages | Unknown — template audit needed |

---

### 3E. Required content categories — what the blog needs to be industry-standard

The blog currently has 8 posts across 21 directories. 13 directories are empty. Industry-standard migration blogs publish in these categories consistently:

**Country Audits** (currently: 1 post — Germany)
- Needed: Canada, Italy, Portugal, UK, USA — all have empty directories
- Format: Official process + real barriers + cost breakdown + evidence-gated
- Frequency at industry standard: 1 per major destination per year, updated annually

**Student Playbooks** (currently: 2 posts — Italy DSU, UK Masters)
- Needed: Germany student (separate from country audit), Canada study, Australia student
- Format: Budget-range guide, step-by-step, scholarship options

**Professional Playbooks** (currently: 2 posts — Canada Express Entry, Germany Chancenkarte)
- Needed: UK Skilled Worker, Australia skilled, Portugal digital nomad, Spain digital nomad
- Format: Eligibility checklist, salary thresholds, sector-specific paths

**Business Playbooks** (currently: 1 post — US LLC)
- Needed: Portugal D8/D7, Spain digital nomad, UK business routes
- Format: Setup process, banking, tax implications

**Policy Updates** (currently: 1 post — Canada SDS cancellation)
- Needed: Ongoing — any pathway change triggers a policy update post
- Format: What changed, when, what it means for applicants, official source

**Case Studies — Success Stories** (currently: 1 post — Chisom)
- Needed: 3–5 more across different destinations and profiles
- Format: Real budget, real timeline, real outcome, lessons learned

**Case Studies — Rejection Analysis** (currently: 0 posts — directory empty)
- Needed: At minimum 2–3 posts covering common rejection patterns
- Format: What went wrong, what the fix was, official guidance
- This is a high-trust content type — applicants search for rejection reasons

**Guides — Applications** (currently: 0 posts — directory empty)
- Needed: "How to write a visa motivation letter", "How to get APS certificate", "How to open a blocked account from Nigeria"
- These are the highest-search-volume how-to queries in the space

**Guides — Documentation** (currently: 0 posts — directory empty)
- Needed: "Document authentication guide for Nigerian applicants", "Sworn translation guide"

**Guides — Financial** (currently: 0 posts — directory empty)
- Needed: "How to fund a German blocked account from Nigeria", "Scholarship databases for African students"

---

## PART 4 — TASK CATEGORIZATION FOR SPRINT PLANNING

### REQUIRED BEFORE ANY SPRINT PHASE IS DEFINED

These tasks are prerequisites. They are not sprint tasks — they are the foundation that sprint tasks build on.

| Task ID | Task | Type | Effort estimate |
|---|---|---|---|
| REQ-DATA-1 | Close NZ-skilled umbrella with permanentBlocker field | Data (5 min) | Trivial |
| REQ-DATA-2 | Add permanentBlocker to RU-study and RU-work with dated rationale | Data (30 min) | Low |
| REQ-DATA-3 | Research AU-skilled subclasses 189/190/491 and create 3 pathway records or formal blockers | Research + Data | Medium (2–4 hours) |
| REQ-DATA-4 | Fill requirements[] for CA-federal-skilled-worker (Batch A) | Data | Medium (1–2 hours) |
| REQ-DATA-5 | Fill requirements[] for AU-student (Batch A) | Data | Medium (1–2 hours) |
| REQ-DATA-6 | Fill requirements[] for IE-study (Batch A) | Data | Low (30–60 min) |
| REQ-DATA-7 | Fill requirements[] for NZ SMC three routes (Batch B) | Data | Medium (2–3 hours) |
| REQ-DATA-8 | Fill requirements[] for IT-study, IT-work, FI-work, AT-study, AT-rwr, CH-study, CH-work (Batch C) | Data | Medium (3–5 hours) |
| REQ-DATA-9 | Fill requirements[] for KR-study, KR-work, CN-study, CN-work (Batch D) | Data | Medium (2–3 hours) |
| REQ-DATA-10 | Dedup AT-red-white-red vs AT-rwr-other-key-workers | Data review | Low (30 min) |
| REQ-BLOG-1 | Correct Germany post — remove unsupported approval rates | Editorial | Low (1 hour) |
| REQ-BLOG-2 | Correct Canada Express Entry post — remove unsupported approval rates | Editorial | Low (1 hour) |
| REQ-BLOG-3 | Write Canada country audit (empty directory) | Editorial | High (4–6 hours) |
| REQ-BLOG-4 | Write Italy country audit (empty directory) | Editorial | High (4–6 hours) |
| REQ-BLOG-5 | Write Portugal country audit (empty directory) | Editorial | High (4–6 hours) |
| REQ-BLOG-6 | Write UK country audit (empty directory) | Editorial | High (4–6 hours) |
| REQ-BLOG-7 | Write USA country audit (empty directory) | Editorial | High (4–6 hours) |
| REQ-BLOG-8 | Write 1 rejection analysis post (empty directory) | Editorial | Medium (3–4 hours) |
| REQ-BLOG-9 | Write 1 application guide (empty directory) | Editorial | Medium (3–4 hours) |
| REQ-BLOG-10 | Write 1 financial guide — blocked account funding from Nigeria | Editorial | Medium (3–4 hours) |

### EXECUTION ORDER

```
REQ-DATA-1 (trivial close-out)
REQ-DATA-2 (trivial close-out)
  → REQ-DATA-3 (AU-skilled research — determines if 3 new pathways or 1 blocker)
  → REQ-DATA-4 + REQ-DATA-5 + REQ-DATA-6 (Batch A — highest traffic destinations)
  → REQ-DATA-7 (Batch B — NZ SMC, already publishable, just missing requirements)
  → REQ-DATA-8 + REQ-DATA-9 (Batch C + D — European and Asian)
  → REQ-DATA-10 (AT dedup — after AT requirements are filled)

REQ-BLOG-1 + REQ-BLOG-2 (fact corrections — do immediately, before any public traffic)
  → REQ-BLOG-3 through REQ-BLOG-7 (country audits — in order of destination demand)
  → REQ-BLOG-8 + REQ-BLOG-9 + REQ-BLOG-10 (guides — after country audits)
```

Data tasks and blog tasks can run in parallel. Blog fact corrections (REQ-BLOG-1, REQ-BLOG-2) should happen before any other blog work.

---

## PART 5 — NEXT ACTIVE PHASES (after REQUIRED tasks are complete)

Once the REQUIRED tasks above are done, the next active phases in order are:

**Phase P1-REQ-6 completion** — all 18 publishable pathways have structured requirements. Route engine can match users with precision.

**Phase UI-0 completion** — canonical nav, fixed broken pages, no corrupt HTML. Every page renders in a browser.

**Phase P1-ROUTE** — route engine handles stale evidence, alternatives, missing inputs. Recommendation quality is defensible.

**Phase UI-1** — all pages have complete content. No placeholder sections.

**Phase P2** — conditional eligibility, country comparison, zero-fit surfacing.

**Phase UI-2 + UI-3** — visual polish, responsive, accessible.

**Phase P3** — content/SEO, canonical URLs (blocked on DNS resolution).

**Phase P4** — compliance, consent validation, legal review.

**Phase P5** — monetization (blocked on P4).

See `docs/project/TASK_SPEC.md` for full acceptance criteria on each phase task.

---

*This document feeds into: `docs/sprints/ACTIVE_SPRINT.md`, `docs/project/TASK_SPEC.md`, `docs/project/PHASE_STATUS.md`*
