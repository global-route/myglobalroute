# P1-SEO-GROWTH & AdSense — Task Register

**Status:** Planned / foundations partially present; not approval-ready and not live  
**Owner:** Project owner / engineering  
**Related phases:** Phase 0 (production integrity), Phase 3 (content & acquisition), Phase 4 (trust, privacy & accessibility), Phase 5 (growth & monetization)  
**Release:** **NO-GO** remains unchanged  
**Verification:** Not tested for this documentation update; tests/build/browser/CI remain paused by user direction.

## Purpose

Create a measurable, policy-conscious acquisition and monetization workstream for Global Route. Improve qualified organic discovery and useful content first; pursue AdSense only when the production site, content, privacy controls, and Google eligibility requirements are ready. Keep user trust and the core route-finding journey ahead of ad inventory.

This workstream complements rather than replaces:
- `docs/sprints/ACTIVE_SPRINT.md`
- `docs/project/PHASE_STATUS.md`
- `docs/project/EXECUTION_ROADMAP.md`
- `docs/product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md`
- existing privacy/compliance and monetization foundations.

## Current baseline (evidence-aware)

- Technical and programmatic SEO foundations exist, and historic source-tree checks included SEO/accessibility checks. Those historical checks do not verify the current head or production behavior.
- SEO remains open: canonical origin, Open Graph/canonical metadata, sitemap/robots behavior, legacy blog cleanup, structured data, editorial quality and search-to-product conversion still require work.
- Separate analytics and advertising consent controls and ad-slot gating are present in source, but are **not a legal-compliance sign-off** and have not been freshly validated.
- Monetization remains **foundations only**: no live AdSense approval, active production placement, or measured ad revenue is claimed.
- Production host/DNS ownership for `vrenum.app` is blocked by the recorded Cloudflare custom-domain conflict (Error 100117). Do not submit a production-dependent integration or declare readiness while the authoritative host remains unresolved.
- User-directed pause on testing/CI remains in force. Code or configuration work that is not tested must be labelled **Implemented — Not Tested**.

## Task register

| ID | Priority | Task | Status | Exit evidence |
|---|---|---|---|---|
| P1-SEO-01 | P0 dependency | Confirm authoritative production hostname, DNS ownership, deployment target and deployed SHA | **Blocked — owner/provider action** | Host ownership and deployed SHA documented; production smoke and security headers verified after testing is authorized |
| P1-SEO-02 | P1 | Inventory page types, generated routes, indexability, status codes, redirects and internal links | **Open** | Route inventory distinguishes static, generated, duplicate, noindex and intentionally blocked routes |
| P1-SEO-03 | P1 | Audit titles, descriptions, heading hierarchy, canonical URLs, Open Graph/Twitter metadata and image metadata | **Open** | Page-type matrix and source-backed fixes; canonical origin must not be guessed |
| P1-SEO-04 | P1 | Restore/confirm sitemap and robots behavior only after origin and route policy are confirmed | **Blocked by P1-SEO-01** | Correct absolute URLs, intended indexable routes only, no accidental blocking or duplicate submission |
| P1-SEO-05 | P1 | Validate structured data where appropriate (for example, BreadcrumbList and Article); avoid unsupported ratings, prices, reviews or eligibility claims | **Open** | Schema matches visible page content and factual source; validation evidence recorded when testing resumes |
| P1-SEO-06 | P1 | Finish blog/category/article template and canonical-route decision; verify generated article links and images | **Open; source fixes not tested** | One documented canonical approach, working internal links, unique useful metadata and no duplicate thin pages |
| P1-SEO-07 | P1 | Build search-intent and editorial plan for country, pathway, cost/requirements, comparison and practical migration questions | **Open** | Prioritized topic map mapped to verified evidence and user intent; no mass-produced thin or unsupported pages |
| P1-SEO-08 | P1 | Fact-check existing and new editorial claims against the data-trust standard; add sources, update dates and review ownership | **Open** | Editorial review checklist and evidence links; unsupported figures remain unpublished |
| P1-SEO-09 | P1 | Improve crawl paths and internal links between guides, country pages, pathway evidence and relevant tools | **Open** | Contextual links help users reach useful next actions; no keyword-stuffed or misleading anchors |
| P1-SEO-10 | P1 | Define analytics events and privacy-conscious measurement for organic landing → route finder → results → calculator/conversion | **Foundations present; measurement plan open** | Event dictionary, consent behavior, retention/ownership notes and baseline report; no analytics before applicable consent |
| P1-SEO-11 | P1 | Set up Google Search Console after domain control is established; submit sitemap and monitor indexing, queries, clicks and impressions | **Blocked by P1-SEO-01** | Verified property, sitemap status and dated baseline/export; no claim of ranking guarantees |
| P1-ADS-01 | P1 | Review current Google AdSense eligibility, site policies, original-content quality and account requirements | **Open** | Current official requirements checklist completed; no assumption that approval is guaranteed |
| P1-ADS-02 | P1 | Review privacy/cookie disclosures and consent flow against actual geography, ad technology and provider configuration | **Open; legal/provider review required** | Qualified review and implementation evidence; consent choice is respected and advertising does not inherit analytics consent |
| P1-ADS-03 | P1 | Draft conservative ad-placement map by page template, protecting route finder, results, calculator and comparison journeys | **Open** | Placements are clearly labelled, non-deceptive, responsive and do not obscure content or controls |
| P1-ADS-04 | P1 | Integrate AdSense only after approval, production host confirmation, policy review and authorized implementation/verification | **Not started; gated** | Approved publisher/site, documented configuration, validated ad behavior and no ads shown contrary to consent or policy |
| P1-ADS-05 | P1 | Monitor policy status, page experience, viewability, revenue and user impact; maintain change/incident log | **Not started** | Monthly report and owner for policy alerts, revenue reconciliation and placement rollback |
| P1-GROWTH-01 | P2 | Establish baseline and monthly reporting for organic visits, indexed pages, query performance and product conversion | **Open** | Dated baseline and repeatable dashboard/report; distinguish organic traffic from paid/direct/referral |
| P1-GROWTH-02 | P2 | Test content improvements and placement changes against user experience and useful conversions | **Deferred until baseline and approvals** | Documented hypothesis, measured result and rollback criteria; avoid optimizing clicks at the expense of task completion |
| P1-APP-01 | P2 | Assess AdMob only when a native Android/iOS app is planned and has a separate app monetization scope | **Deferred; no app scope assumed** | Product decision and platform-specific consent/policy design; do not add AdMob SDK to the website |

## Delivery sequence and gates

1. **Protect release integrity:** resolve Phase 0 hostname/deployment blockers. Keep release NO-GO until production verification is authorized and evidenced.
2. **Make search surfaces trustworthy:** finish route/template inventory, editorial fact review, blog canonical decision, metadata and internal-link cleanup.
3. **Establish measurement:** define consent-aware analytics and a Search Console baseline after verified domain control.
4. **Prepare monetization:** complete AdSense eligibility and privacy/provider review; map restrained placements without disrupting core journeys.
5. **Integrate only when eligible:** apply to AdSense and implement ads only after approval and required reviews. An application is not a promise of approval or revenue.
6. **Measure and improve:** track organic visibility, useful product conversions, ad revenue and user-experience signals; revise based on evidence.
7. **Consider AdMob separately:** only for a native mobile app, not as a substitute for AdSense on the website.

## Best-practice guardrails

- Prioritize helpful, original, evidence-backed content over publishing volume or keyword stuffing.
- Do not create thin programmatic pages solely to capture search queries.
- Do not invent traffic, ranking, RPM, CPM, click-through or revenue estimates. Build forecasts only from explicitly stated assumptions and later measured data.
- Never encourage accidental clicks, disguise ads as navigation, or let ads block primary tasks.
- Keep ad and analytics consent separate; follow the actual applicable legal/provider requirements and obtain qualified review rather than treating a code toggle as compliance.
- Do not insert provider IDs, production URLs or publisher configuration by guesswork.
- Do not mark a task complete merely because documentation or source code exists. Record verification status accurately.
- SEO does not guarantee indexing, ranking or traffic; AdSense approval and revenue are not guaranteed.

## Definition of done

This workstream is complete only when:
- the production origin is authoritative and operational;
- indexability, metadata, canonical routes, sitemap/robots, structured data and internal links have documented evidence;
- key editorial pages are fact-checked and useful;
- Search Console and analytics baselines are recorded with consent and privacy controls reviewed;
- AdSense eligibility, approval, placement and policy requirements are evidenced before live ads are enabled;
- revenue and user-experience monitoring have an owner and rollback path;
- all remaining unverified work is explicitly listed rather than represented as complete.

**Current decision:** plan and foundational work only. No live AdSense activation, no AdMob implementation, no traffic/revenue guarantee, and no change to production **NO-GO**.
