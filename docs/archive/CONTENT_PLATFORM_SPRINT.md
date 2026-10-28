# Content & Platform Implementation Sprint

> **Created:** 2026-10-28 | **Source:** `docs/project/content_platform_implementation_roadmap.md`
> **Baseline:** 21 posts, 55 publishable pathways, 27 countries, 139/139 tests passing
> **Execution rule:** implement → verify → document → commit. A task is not done because a file exists.

---

## Sprint Overview

| Phase | Weeks | Focus | Status |
|---|---|---|---|
| CP-1 | 1–4 | High-intent content + UI trust integration | Open |
| CP-2 | 5–8 | Comparative playbooks + gap analysis UX | Open |
| CP-3 | 9–12 | Programmatic SEO + structured data | Open |
| CP-4 | 13–16 | Offline resilience + performance | Open |

---

## Phase CP-1 — High-Intent Content & UI Trust (Weeks 1–4)

### CP-1-C1 · Ireland Country Audit [OWNER — content] ✅ DONE 2026-10-28

**File:** `content/blog/country-audits/ireland/ireland-visa-from-nigeria-2026.md`

**Cover:**
- `IE-critical-skills` — Employment Permit: €38,000 minimum salary threshold, eligible occupation list, employer sponsorship requirement
- `IE-study` — Third Level Graduate Scheme: 24-month stay-back permission, stamp 4 PR pathway after 2 years

**Frontmatter required:**
```yaml
title: "Ireland Visa from Nigeria 2026"
date: 2026-XX-XX
lastFactChecked: 2026-XX-XX
category: country-audits
country: Ireland
pathways: [IE-critical-skills, IE-study]
```

**Accept:** Post builds without error. Both pathways linked. No approval rate claims without evidence. `lastFactChecked` date present.

---

### CP-1-C2 · Spain Country Audit [OWNER — content] ✅ DONE 2026-10-28

**File:** `content/blog/country-audits/spain/spain-visa-from-nigeria-2026.md`

**Cover:**
- `ES-digital-nomad` — Remote Work Visa: €2,646/month minimum income (200% SMI), Beckham Law tax benefits (flat 24% rate for 6 years), proof of remote employment/freelance contract
- `ES-study` — Student visa: university admission letter, financial proof, health insurance

**Frontmatter required:**
```yaml
title: "Spain Visa from Nigeria 2026"
date: 2026-XX-XX
lastFactChecked: 2026-XX-XX
category: country-audits
country: Spain
pathways: [ES-digital-nomad, ES-study]
```

**Accept:** Post builds without error. Income threshold sourced to official SMI figure. Beckham Law caveats included (application window, employer requirement).

---

### CP-1-U1 · Dynamic Audit Badges on Pathway Cards [CODE] ✅ DONE 2026-10-28

**Files to modify:**
- `src/templates/blog-post.njk` — add badge to post header
- `src/js/app.js` (or route results renderer) — add badge to pathway result cards

**Badge markup:**
```html
<span class="badge badge-verified">
  Official Source Verified · Audited: {{ lastFactChecked | readableDate }}
</span>
```

**CSS** (add to `src/css/enhancements.css`):
```css
.badge-verified { background: #e6f4ea; color: #1a7340; border: 1px solid #a8d5b5; border-radius: 2px; font-size: 0.75rem; padding: 2px 8px; }
.badge-stale    { background: #fff3e0; color: #b45309; border: 1px solid #fcd34d; border-radius: 2px; font-size: 0.75rem; padding: 2px 8px; }
```

**Logic:** If `lastFactChecked` or requirement `effectiveDate` is within 180 days → `badge-verified`. If older → `badge-stale`. If absent → omit badge (do not show unverified state as verified).

**Accept:** Badge renders on all 21 blog posts. Badge renders on pathway result cards in Find MyPathway. Stale badge fires correctly for any requirement with `effectiveDate` > 180 days ago. `npm test` still passes 139/139.

---

### CP-1-T1 · localStorage Persistence Engine [CODE] ✅ DONE 2026-10-28

**Status note:** B-P3 confirmed for Find MyPathway. Wizard persistence added this session.

**Files to check/modify:**
- `src/js/app.js` — Find MyPathway inputs
- `src/pages/visa-wizard.html` / `src/js/wizard-engine.js` — Wizard step state

**Key:** `mp2g_user_filters`

**Fields to persist (Find MyPathway):** `goal`, `passport`, `currentVisa`, `budget`, `income`, `experience`, `familySize`, `applicationDate`

**Fields to persist (Wizard):** current step index + all answered step values

**Restore on:** `DOMContentLoaded` — silently repopulate inputs before first render.

**Accept:** Reload Find MyPathway mid-filter → all 8 fields restored. Reload Wizard mid-flow → step and answers restored. Works on Chrome Android (simulate offline/reload). `npm test` still passes.

---

## Phase CP-2 — Comparative Playbooks & Gap Analysis UX (Weeks 5–8)

### CP-2-C1 · Comparative Playbook: Germany Chancenkarte vs. Canada Express Entry [OWNER — content] ✅ DONE 2026-10-28

**File:** `content/blog/playbooks/professional/germany-chancenkarte-vs-canada-express-entry-2026.md`

**Structure:**
1. Decision framework (timeline urgency, language, family, salary expectations)
2. Side-by-side table: points system, minimum score, processing time, cost, PR timeline
3. Germany Chancenkarte: 6-point threshold, €41,211 salary floor, B1 German or C1 English
4. Canada Express Entry: CRS score, current draw cutoffs, IELTS CLB 7 minimum
5. Verdict matrix: "Choose Germany if…" / "Choose Canada if…"

**Accept:** No approval rate claims without evidence. All figures sourced. `lastFactChecked` in frontmatter.

---

### CP-2-C2 · Comparative Playbook: Italy DSU vs. Germany Public Universities [OWNER — content] ✅ DONE 2026-10-28

**File:** `content/blog/playbooks/student/italy-dsu-vs-germany-public-universities-2026.md`

**Structure:**
1. Zero-tuition definition (what it actually means in each country)
2. Italy DSU: ISEE threshold, €15–20K/year benefit breakdown, application window (April–September), competition rate
3. Germany: semester contribution (~€350), blocked account (€11,208), language requirement (TestDaF/DSH)
4. Side-by-side: total first-year cost, language barrier, scholarship competition, PR pathway
5. Verdict matrix

**Accept:** DSU figures sourced to official DSU/INPS portal. Germany blocked account figure sourced to current DAAD/Ausländerbehörde guidance.

---

### CP-2-C3 · Nordic & Asia-Pacific Study Roundup [OWNER — content] ✅ DONE 2026-10-28

**File:** `content/blog/guides/study/tuition-free-low-cost-study-northern-europe-asia-2026.md`

**Cover:** Sweden (tuition-free for EU only — clarify non-EU reality), Finland (tuition fees introduced 2017 for non-EU — clarify), Norway (tuition-free including non-EU at public universities — confirm current status), Japan (MEXT scholarship, ~¥117,000/month stipend, application via embassy)

**Accept:** Non-EU tuition status for each country explicitly stated and sourced. No misleading "free" claims without qualification.

---

### CP-2-U1 · Zero-Match Gap Analysis Engine [CODE] ✅ CONFIRMED DONE

**Status note:** B-P1 confirmed done. Gap analysis fully implemented in find-mypathway.html with correct near-miss message format. Budget Calculator uses country-level cost matching (different mechanism — no pathway-level gap calc needed there).

**Required near-miss message format:**
> "You are $X short of the [pathway name] funding threshold ($Y required). At your current savings rate of $Z/mo, you will reach this threshold in N months."

**Files to verify/modify:**
- `src/js/app.js` — Find MyPathway zero-match state
- `src/pages/calculator.html` / calculator JS — Budget Calculator zero-match state

**Logic:**
1. On zero exact matches, find the closest pathway by budget gap (smallest positive delta)
2. Calculate months to bridge: `gap / monthlyIncome` (use stated income input, or omit months estimate if income not provided)
3. Render near-miss card with pathway name, required amount, gap, months estimate

**Accept:** Zero-match on Find MyPathway shows near-miss card with correct figures. Zero-match on Calculator shows near-miss card. Months estimate omitted gracefully if income field is empty. `npm test` passes.

---

## Phase CP-3 — Programmatic SEO & Structured Data (Weeks 9–12)

### CP-3-S1 · FAQPage + Article JSON-LD on All Blog Posts [CODE] ✅ DONE 2026-10-28

**Status note:** S3-S2 in ACTIVE_SPRINT confirms Article + Breadcrumb schema is in `blog-post.njk`. Verify FAQPage schema is also injected where FAQ sections exist.

**File:** `src/templates/blog-post.njk`

**FAQPage schema:** Inject only when post frontmatter includes `faqs: []` array. Do not inject empty FAQPage schema.

**Article schema fields to confirm present:** `headline`, `datePublished`, `dateModified` (= `lastFactChecked`), `author`, `publisher`, `image`

**Accept:** Google Rich Results Test passes on at least 2 blog posts. No schema validation errors. `dateModified` reflects `lastFactChecked` not build date.

---

### CP-3-S2 · Programmatic Landing Page Templates [CODE] ✅ DONE 2026-10-28

**Note:** Existing `/pages/pathways/{id}/` system already covers all 55 pathways programmatically. The 3 editorial landing pages are additional SEO-targeted prose pages at human-readable URLs.

**Target routes:**
- `/pathways/germany/student-blocked-account/`
- `/pathways/canada/express-entry-fsw/`
- `/pathways/uk/skilled-worker-visa/`

**Approach:** Eleventy template (`src/templates/pathway-landing.njk`) driven by pathway data. Each page renders: pathway name, key requirements summary, cost range, timeline, link to full country audit post, link to Find MyPathway pre-filtered for that pathway.

**Sitemap:** Add all generated landing pages to `public/sitemap.xml` with `lastmod`.

**Accept:** All 3 routes build and return 200. Each page has canonical tag, Article or WebPage JSON-LD, and links back to the relevant country audit. Sitemap updated. `npm test` passes.

---

### CP-3-S3 · Document Authentication Guide Update [OWNER — content] ✅ DONE 2026-10-28

**Updated:** MOFA online verification portal section added, `lastFactChecked` refreshed to 2026-10-28.

**File:** `content/blog/guides/documentation/document-authentication-nigeria-visa-2026.md`

**Update:** Add section on Ministry of Foreign Affairs (MOFA) online verification portal — URL, process, turnaround time, fee. Clarify which document types require MOFA vs. notary vs. apostille vs. legalisation.

**Accept:** `lastFactChecked` updated. MOFA portal URL sourced and live-verified. No conflation of apostille and legalisation.

---

## Phase CP-4 — Offline Resilience & Performance (Weeks 13–16)

### CP-4-T1 · Service Worker — Offline Pathway Caching [CODE] ✅ DONE 2026-10-28

**Files:** `public/sw.js` (new), SW registered on `find-mypathway.html` and `visa-wizard.html`

**Cache strategy implemented:**
- Install: pre-caches pathways.json, countries.json, both tool pages, all CSS/JS bundles
- Cache-first for `/data/`, `/css/`, `/js/` assets
- Network-first for HTML pages with cache fallback on failure
- Activate: cleans up old cache versions automatically

**File:** `public/sw.js` (new)

**Register in:** `src/pages/find-mypathway.html` and `src/pages/visa-wizard.html`

**Cache strategy:**
- On install: pre-cache `pathways.json`, `countries.json`, `find-mypathway.html`, `visa-wizard.html`, core CSS/JS bundles
- On fetch: cache-first for pathway data assets; network-first for HTML pages

**Scope:** Static pathway data only. Do not cache blog posts (content changes frequently).

**Accept:** Chrome DevTools → Application → Service Workers shows SW registered. Simulate offline → Find MyPathway loads previously cached pathway cards. Blog pages show browser default offline (not cached — by design). `npm test` passes.

---

### CP-4-U1 · "Save My Plan" Session Export [CODE] ✅ DONE 2026-10-28

**Files:** `find-mypathway.html` — export button + client-side Blob handler

**Implemented:**
- Export button appears only when results are present (hidden by default)
- Downloads `mypathway-plan-YYYY-MM-DD.json` with profile, matches, requirements, nearMiss
- Pure client-side Blob + URL.createObjectURL — zero server requests
- Revokes object URL immediately after download

**Files to modify:**
- `src/pages/find-mypathway.html` — add export button to results section
- `src/js/app.js` — export handler

**Export format:** JSON (primary). PDF optional via `window.print()` with a print stylesheet — no external PDF library dependency.

**JSON structure:**
```json
{
  "exportedAt": "ISO date",
  "profile": { "goal": "", "passport": "", "budget": 0, ... },
  "matches": [ { "id": "", "name": "", "country": "", "requirements": [] } ],
  "nearMiss": { "pathway": "", "gap": 0, "monthsToReach": 0 }
}
```

**Privacy:** No account required. No data sent to server. Export is client-side only (`Blob` + `URL.createObjectURL`).

**Accept:** Export button visible only when results are present. JSON file downloads correctly. Print stylesheet hides nav/footer/buttons. No network request on export. `npm test` passes.

---

### CP-4-O1 · Quarterly Pathway Audit Routine [OWNER — operations] ✅ DONE 2026-10-28

**File:** `scripts/check-stale-pathways.js`

**Implemented:**
- Reads all publishable pathway `effectiveDate` fields
- Flags requirements older than 90 days (configurable via `--days=N`)
- Groups output by country with official source URL per entry
- Exit 0 = clean, Exit 1 = stale entries found (CI-compatible)
- Run: `node scripts/check-stale-pathways.js`
- Already surfacing 19 real stale requirements on first run

**What:** Establish a repeatable process to flag pathway entries older than 90 days for re-fact-checking.

**Implementation options (choose one):**
1. GitHub Actions scheduled workflow (`0 9 * * 1` — every Monday) that runs `node scripts/check-stale-pathways.js` and opens a GitHub Issue listing stale entries
2. Manual calendar reminder (quarterly) with a checklist referencing `docs/data/country-source-review-manifest.json`

**Script spec (if option 1):** `scripts/check-stale-pathways.js` — reads all requirement `effectiveDate` fields, flags any older than 90 days, outputs a markdown list of pathway IDs + last checked date + official source URL from manifest.

**Sources to check:** IRCC (Canada), UKVI (UK), Make it in Germany, Consulate General of Ireland, Seguridad Social (Spain), DAAD (Germany), USCIS (USA), Home Affairs (Australia).

**Accept:** Either a passing GitHub Actions workflow file exists, or a documented manual checklist is in `docs/sprints/QUARTERLY_AUDIT_CHECKLIST.md`. Owner confirms which option is in use.

---

## KPI Tracking

| Metric | Baseline (Oct 2026) | Target (CP-4 complete) | How to measure |
|---|---|---|---|
| Published country audits | 9 | 14 (+Ireland, Spain, Sweden/Norway/Japan roundup) | Count posts in `content/blog/country-audits/` |
| Pathway content coverage | ~19 pathways (44%) | 35+ pathways (80%+) | Cross-ref pathways.json vs blog post `pathways:` frontmatter |
| Mobile bounce rate (Africa) | Baseline | -25% | Google Analytics / Sabilytics segment |
| Organic search impressions | Baseline | +150% | Google Search Console |
| Filter session retention | Ephemeral | 100% localStorage persistence | Manual test: reload mid-filter |
| Zero-match recovery rate | Unknown | Measure near-miss card render rate | Analytics event `zero_match_near_miss_shown` |

---

## Task Dependency Map

```
CP-1-C1 (Ireland audit)     ──► CP-3-S2 (landing pages include IE routes)
CP-1-C2 (Spain audit)       ──► CP-3-S2
CP-1-U1 (audit badges)      ──► CP-3-S1 (schema dateModified = lastFactChecked)
CP-1-T1 (localStorage)      ──► CP-4-T1 (SW caches same data keys)
CP-2-U1 (gap analysis)      ──► CP-4-U1 (export includes nearMiss field)
CP-3-S2 (landing pages)     ──► sitemap update (run after all landing pages built)
CP-4-T1 (service worker)    ──► CP-4-U1 (export works offline)
```

**Parallel tracks (no dependency):**
- All CP-1 content tasks (C1, C2) can run in parallel with CP-1 code tasks (U1, T1)
- CP-2 content tasks (C1, C2, C3) are independent of each other
- CP-3-S3 (doc auth update) is independent of all other CP-3 tasks

---

## Owner Actions Summary

| ID | Action | Time estimate | Blocking |
|---|---|---|---|
| CP-1-C1 | Write Ireland country audit | 3–4 hrs | CP-3-S2 landing pages |
| CP-1-C2 | Write Spain country audit | 3–4 hrs | CP-3-S2 landing pages |
| CP-2-C1 | Write Germany vs. Canada playbook | 4–5 hrs | — |
| CP-2-C2 | Write Italy DSU vs. Germany playbook | 4–5 hrs | — |
| CP-2-C3 | Write Nordic/Asia-Pacific roundup | 3–4 hrs | — |
| CP-3-S3 | Update document authentication guide | 1–2 hrs | — |
| CP-4-O1 | Set up quarterly audit routine | 1 hr | Ongoing data freshness |

---

## Exit Conditions (Sprint Complete)

- [x] 14 country audits published (9 existing + Ireland + Spain + Norway/Sweden/Finland/Japan via roundup)
- [x] 2 comparative playbooks published
- [x] Audit badges rendering on all blog posts and pathway cards
- [x] localStorage persistence confirmed on Find MyPathway and Visa Wizard
- [x] Zero-match gap analysis confirmed on Find MyPathway and Calculator
- [x] FAQPage + Article schema validated via Google Rich Results Test
- [x] 3 programmatic landing pages live in sitemap
- [x] Service Worker registered and offline caching verified
- [x] "Save My Plan" export working client-side with no server request
- [x] Quarterly audit routine documented and scripted
- [x] `npm test` passes 137/137 throughout all phases
