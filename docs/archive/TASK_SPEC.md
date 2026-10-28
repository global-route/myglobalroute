# Global Route — Full Task Spec

**Generated:** 2026-10-17 | **Source:** ACTIVE_SPRINT, PHASE_STATUS, EXECUTION_ROADMAP, PROJECT_ASSESSMENT  
**Release:** NO-GO until P0-S5 closes  
**Execution rule:** implement → verify → document → commit. A task is not done because a file exists.

## Current next task

**P0-S5-1 — Resolve production hostname ownership / Cloudflare custom-domain routing**  
This is the immediate task because the live deployment is blocked by a Cloudflare API error: `Hostname 'vrenum.app' already has externally managed DNS records`. Until that ownership or hostname issue is resolved, the project cannot complete a live deployment or close Phase 0.

---

## PHASE 0 — Production Integrity

### P0-S5-1 · Fix Cloudflare Pages build command [OWNER ACTION]
**What:** CF Dashboard → Pages → `myglobalroute` → Settings → Builds & deployments  
**Set:** Build command = `npm run build` | Output directory = `dist` | Save → trigger deploy  
**Accept:** Build log ends with Eleventy writing 147 files, no wrangler error, deployment marked live

### P0-S5-2 · Confirm deployed SHA matches main
**What:** In CF dashboard, find the deployed commit SHA and compare to `git rev-parse origin/main`  
**Accept:** SHA matches. If not, trigger a new deploy from latest `main`.

### P0-S5-3 · Run production smoke
**What:** `PRODUCTION_URL=https://vrenum.app node scripts/verify-deployed-site.js`  
**Accept:** Script exits 0 — all country routes (26), pathway routes (55 publishable), data endpoints and static assets return 200 with correct content-type

### P0-S5-4 · Audit live security headers
**What:** `curl -sI https://vrenum.app/` — check for CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy  
**Accept:** All 5 headers present. CSP matches actual third-party inventory (GA, AdSense). No missing or misconfigured header.

### P0-S5-5 · Restore canonical / OG / sitemap URLs
**What:** Find all hardcoded placeholder origins in templates and sitemap; replace with `https://vrenum.app`  
**Accept:** `grep -r "localhost\|myglobalroute.com\|netlify.app" dist/` returns nothing. Sitemap URLs resolve.

### P0-S5-6 · Configure main branch protection [OWNER ACTION]
**What:** GitHub → repo → Settings → Branches → add rule for `main`: require PR, require CI pass (Quality Gate + Lint + Browser Smoke), no direct push  
**Accept:** `main.protected=true` confirmed via GitHub API or dashboard screenshot

### P0-S5-7 · Write P0 exit record and close Phase 0
**What:** Create `docs/project/RELEASE_VERIFICATION_<date>.md` with all gate results. Update ACTIVE_SPRINT, PHASE_STATUS, EXECUTION_ROADMAP to mark P0 complete.  
**Accept:** All 7 P0-S5 tasks have evidence. Phase 0 marked complete in PHASE_STATUS.

---

## PRE-SPRINT REQUIRED TASKS

All pre-sprint required tasks are complete. See `CHANGELOG.md` 2026-10-18 entries for detail.

### Research-required pathway resolution
- **REQ-DATA-1:** Close NZ-skilled umbrella — add `permanentBlocker` field (trivial)
- **REQ-DATA-2:** Close RU-study + RU-work — add `permanentBlocker` with dated geopolitical rationale
- **REQ-DATA-3:** AU-skilled — research subclasses 189/190/491, create 3 pathway records or formal blockers

### Publishable pathways with zero requirements (18 pathways, 4 batches)
- **REQ-DATA-4–6:** Batch A — CA-federal-skilled-worker, AU-student, IE-study
- **REQ-DATA-7:** Batch B — NZ-smc-points-based, NZ-smc-skilled-work-experience, NZ-smc-trades-technician
- **REQ-DATA-8:** Batch C — IT-study, IT-work, FI-work, AT-study, AT-rwr-other-key-workers, CH-study, CH-work
- **REQ-DATA-9:** Batch D — KR-study, KR-work, CN-study, CN-work
- **REQ-DATA-10:** Dedup AT-red-white-red vs AT-rwr-other-key-workers

### Blog fact corrections (urgent — before any public traffic)
- **REQ-BLOG-1:** Germany post — remove unsupported "62-68% African reality" approval rate claim
- **REQ-BLOG-2:** Canada Express Entry post — remove unsupported "78-85% Nigerian reality" approval rate claim

### Empty blog directories (13 empty, 10 priority tasks)
- **REQ-BLOG-3–7:** Country audits — Canada, Italy, Portugal, UK, USA
- **REQ-BLOG-8–10:** Rejection analysis (1 post), application guide (1 post), financial guide (1 post)

---

## PHASE 1 — Migration Intelligence

### P1-S1-1 · Human sign-off on 26 country source anchors [OWNER ACTION]
**What:** Review `docs/data/country-source-review-manifest.json`. For each of 26 entries, a human must confirm the registered official URL is the correct authoritative source for that country's visa/immigration information.  
**Blockers to resolve:**
- Russia: confirm which embassy/mission is the correct source for Nigerian applicants (current candidate is Nigeria-specific MFA material)
- Luxembourg: decide whether to replace the generic redirecting homepage with the direct third-country immigration page
**Accept:** All 26 entries have `humanSignOff: true`, reviewer name and date. Exceptions formally recorded. `dataset.asOf` updated to sign-off date.

### P1-S1-2 · Reconcile dataset.asOf
**What:** After P1-S1-1 sign-off, update `dataset.asOf` in `src/data/countries.json` to the sign-off date. Update `retrievedAt` only for sources actually re-checked.  
**Accept:** `dataset.asOf` ≠ `2026-09-05`. No unsupported aggregate costs/rates/timelines introduced. `npm run data:validate` passes.

### P1-S1-3 · Close or document the 4 research-required pathways
**What:** For each of AU-skilled, NZ-skilled, RU-study, RU-work — either find high-confidence primary-source evidence that closes the gap, or write a formal exception record explaining why the pathway stays research_required indefinitely.  
**Accept:** Each pathway has either been promoted (with evidence) or has a `permanentBlocker` field with a dated rationale. No pathway stays research_required by default.

### P1-REQ-1 through P1-REQ-6 · Structured requirements — all pathways [COMPLETE]
55/55 publishable pathways have requirements[]. 4 research_required all have permanentBlocker. 3 AU subclass pathways added (189/190/491). Total: 59 pathways.

### P1-ROUTE-1/2/3 · Route engine quality [COMPLETE]
Engine returns `{ matches, alternatives, missingInput }`. Staleness detection (180-day threshold on requirement `effectiveDate`). Alternatives: up to 5 ineligible goal-type routes with blocker. Missing-input: honest prompt, no false matches. Inline requirements on result cards. Stale warning on cards where `stale: true`.

---

## UI/UX & DESIGN — Page completion and visual consistency

### UI-0 · Foundation — canonical nav + fix broken pages [COMPLETE]
All 5 broken/corrupt pages fixed. Nav standardised across all 14 static pages.

### UI-1 · Page completion — content [COMPLETE]
All 14 static pages have complete evidence-gated content. Student and professional playbooks rebuilt.

### UI-2 · Visual design — CSS completion [COMPLETE]
All page-specific layout classes added. Responsive breakpoints at 480px/768px/1024px for all new classes.

### UI-3 · Accessibility + pre-launch [HEADING HIERARCHY VERIFIED; LIVE CHECKS OPEN]
h1→h2→h3 correct on all rebuilt pages. ARIA audit, colour contrast (WCAG AA) and keyboard navigation require a live browser session.

---

## PHASE 2 — Canonical Product Core

### P2-1 · Conditional eligibility in route matching
**What:** Route engine must evaluate conditional declarations (application date, family size, region) correctly. A Canada study match for a family of 4 must use the family-4 living-funds threshold, not the family-1 threshold.  
**Accept:** Tests cover family-size conditions, date-range conditions and region conditions. Wrong threshold = test failure.

### P2-2 · Route explanations — pathway-specific evidence and next action
**What:** Each matched route in Find My Route must display: the specific evidence record it matched against (source, date), the exact threshold used, and a concrete next action (e.g. "Apply via DAAD portal — opens March 2027").  
**Accept:** Generated pathway pages include evidence source + date. Find My Route results link to the specific evidence. No generic "check the website" next actions.

### P2-3 · Country comparison
**What:** Allow users to compare 2–3 countries side by side on: pathway count, cost range, timeline range, language requirements, evidence freshness.  
**Accept:** Comparison page renders correctly for any 2–3 country combination. Only evidence-backed values shown; null values displayed as "Not yet evidenced" not zero.

### P2-4 · Zero-fit and uncertainty surfacing
**What:** When no pathway matches a user profile, the engine must explain why (e.g. "No pathways match your budget of €5,000 — minimum evidenced cost is €8,000 for DE-study"). When requirements are unknown (no structured declarations), the engine must say so explicitly.  
**Accept:** Tests cover: zero-fit with reason, unknown-requirements disclosure, research-required pathway suppression.

---

## PHASE 3 — Content & Acquisition

### P3-1 · Legacy blog/category link cleanup
**What:** Audit all internal links in blog posts and category pages. Remove or redirect broken links. Remove references to pages that no longer exist.  
**Accept:** `npm run build:verify` passes with 0 broken internal links. No 404s in the generated blog section.

### P3-2 · Editorial fact-audit — 5 cornerstone posts
**What:** Each of the 5 cornerstone blog posts must be checked against the current evidence registry. Any claim that contradicts or exceeds the evidence must be corrected or flagged as unverified.  
**Accept:** Each post has a `lastFactChecked` date in its frontmatter. No post claims an approval rate or cost that isn't in the evidence registry.

### P3-3 · Canonical metadata, Open Graph, sitemap
**What:** After P0-S5-5 (origin confirmed), add canonical `<link>`, Open Graph `og:url`, and sitemap entries with `https://vrenum.app` as the base URL to all generated pages.  
**Blocked by:** P0-S5-5  
**Accept:** Every generated HTML page has a canonical tag. Sitemap resolves. OG tags present on country/pathway pages.

### P3-4 · Structured data (JSON-LD)
**What:** Add JSON-LD `WebPage` or `FAQPage` schema to country and pathway pages.  
**Accept:** Google Rich Results Test passes on at least one country page and one pathway page. No schema errors.

---

## PHASE 4 — Trust, Compliance & Accessibility

### P4-1 · Validate consent UI in real browser
**What:** After testing is resumed — open the site in Chrome and Firefox. Confirm: analytics consent toggle works, advertising consent toggle works, preferences persist on reload, ad slots are hidden when advertising consent is off.  
**Blocked by:** testing pause lifted  
**Accept:** Manual test checklist completed and signed off. No console errors related to consent.

### P4-2 · Privacy data inventory — confirm and complete
**What:** Review `docs/` engineering data-inventory draft. For each data flow (route finder, calculator, consent, analytics, contact, monetization): confirm actual provider behavior on the deployed host, define retention period, confirm deletion mechanism, confirm ownership.  
**Accept:** Data inventory document has a confirmed owner, retention period and deletion mechanism for each flow. Legal review sign-off recorded.

### P4-3 · Contact mailbox ownership
**What:** Confirm who owns and monitors the contact email address. Confirm the email address is correct and reachable.  
**Accept:** Contact page shows a verified email. Owner confirmed in writing.

### P4-4 · Full browser accessibility audit
**What:** Run axe or equivalent on: homepage, a country page, a pathway page, Find My Route, Calculator.  
**Accept:** 0 critical or serious accessibility violations. All interactive elements keyboard-navigable. Color contrast passes WCAG AA.

### P4-5 · Live CSP audit
**What:** After P0-S5-4, compare the live CSP header against the actual scripts loaded on each page type. Remove any allowlisted domain not actually used. Add any missing domain.  
**Blocked by:** P0-S5-4  
**Accept:** CSP is minimal — no wildcard domains, no unused allowlist entries. Report-only mode considered for ongoing monitoring.

---

## PHASE 5 — Growth & Monetization

### P5-1 · Provider approval and contract
**What:** Apply for and receive approval from the intended ad/affiliate provider(s). Do not activate any placement before approval is confirmed in writing.  
**Accept:** Approval confirmation document on file. Provider ID recorded in the commercial registry.

### P5-2 · Live ad placement and consent verification
**What:** After P5-1 and P4-1 — activate one ad placement. Confirm: ad only loads when advertising consent is given, ad does not load in incognito/no-consent state, placement is correctly labeled.  
**Blocked by:** P5-1, P4-1  
**Accept:** Manual test: consent off → no ad request in network tab. Consent on → ad loads. Placement labeled "Advertisement".

### P5-3 · Revenue reconciliation baseline
**What:** After first 30 days of live placement, record: impressions, clicks, RPM, total revenue. Compare against conservative model assumptions.  
**Accept:** Reconciliation document exists. No revenue claimed before this record exists.

### P5-4 · Lead governance
**What:** If any lead-generation or referral flow is activated, define: what data is collected, where it goes, consent basis, opt-out mechanism.  
**Accept:** Lead flow documented in data inventory. Consent basis confirmed with legal review.

---

## PHASE 6 — Scale (deferred — do not start until Phase 5 is proven)

### P6-1 · Personalization and saved routes
**What:** Allow logged-in users to save route searches and receive updates when pathway evidence changes.

### P6-2 · Policy-change alerts
**What:** Automated monitoring of official source pages; alert users when a pathway they've saved has a policy change.

### P6-3 · Premium migration intelligence
**What:** Paid tier with deeper pathway analysis, document checklists, and direct source links.

### P6-4 · B2B data/API products
**What:** Structured pathway data API for HR platforms, universities and immigration consultancies.

---

## Execution order

```
P0-S5 (owner actions) → P1-S1 (source sign-off) → P1-REQ (structured requirements)
→ P1-ROUTE (recommendation quality) → P2 (product core depth)
→ P3 (content/SEO) → P4 (compliance/accessibility)
→ P5 (monetization) → P6 (scale)
```

**Parallel tracks:**
- P0-S5 owner actions and P1-REQ/P1-ROUTE can run in parallel
- P4-1 and P4-2 unblock when testing pause is lifted
- P3-3 and P4-5 unblock when P0-S5 origin is confirmed

**Hard gates — nothing proceeds past these without evidence:**
- P0-S5-3 (production smoke) before any public announcement
- P1-S1-1 (human sign-off) before `dataset.asOf` changes
- P4 legal review before P5 activation
- P5-1 provider approval before any live placement
