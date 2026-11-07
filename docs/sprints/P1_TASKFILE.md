# P1 Taskfile — Service Experience & Governance Alignment

**Created:** 2026-11-05
**Source:** [Product Assessment](../MYPATHWAY2GLOBAL_DEEP_WEBSITE_PRODUCT_ASSESSMENT_AND_IMPLEMENTATION_WALKTHROUGH.md) | [Implementation Blueprint](../product/MYPATHWAY2GLOBAL_PRODUCT_IMPROVEMENT_IMPLEMENTATION_BLUEPRINT.md) §7–9
**Priority:** P1 — Align service experience and supporting governance
**Status:** In progress

> **P1 exit gate:** Every advertised service has a truthful scope, working data model and documented limitations; article and evidence status is generated from auditable records; privacy and monetization documentation matches runtime behaviour.

---

## P1.1 — Country Comparison: Replace Null Fields with Registry-Backed Metrics

**Problem:** The Evidence Status Comparison table showed `officialRate`, `africanRate` and `trueCost` columns. All 30 countries return null for `officialRate` and `africanRate` — every row displayed "Not published / not verified". This is noise, not intelligence.

**Fix:** Replace with registry-backed columns: Publishable Pathways, Research Required, Verified Cost, Sweet Spot. Counts are derived from `appState.pathwayCounts` (already pre-computed in `loadCountriesData`).

| Task | Status |
|------|--------|
| Replace null comparison columns in `countries.html` table header | ✅ Done |
| Update `tableBody` renderer in `app.js` to output new columns | ✅ Done |
| Update table description text | ✅ Done |

**Exit criteria:** No comparison table column is universally null for all 30 countries.

---

## P1.2 — Calculator: Honest Data Availability Communication

**Problem:** The "Affordable Countries (sorted by cost)" heading implied a reliable affordability ranking. The planning-aid data note was hidden (`display:none`) until results rendered, and only shown when *all* results had null costs — but most countries have no verified cost data, so the note should always be visible.

**Fix:**
- Rename heading to "Countries with verified cost data in your range"
- Remove `display:none` from the data note — always visible when results are shown
- Remove the JS toggle that conditionally showed/hid the note

| Task | Status |
|------|--------|
| Rename "Affordable Countries" heading in `calculator.html` | ✅ Done |
| Make planning-aid data note always visible | ✅ Done |
| Remove conditional `dataNote.style.display` toggle from `app.js` | ✅ Done |

**Exit criteria:** Calculator never implies a verified affordability ranking when most countries have no verified cost data.

---

## P1.3 — Article Template: Fix "14 min min read" Bug

**Problem:** `readTime` frontmatter is stored as `"12 min"` (string including the unit). The template rendered `{{ readTime }} min read` → "12 min min read". The `readingTime` filter returns a plain integer, so the fallback path was correct; only the frontmatter path was broken.

**Fix:** Strip any trailing `min` from `readTime` before appending `min read`:
```
{{ readTime | replace(" min", "") | replace("min", "") | trim or (content | readingTime) }} min read
```

| Task | Status |
|------|--------|
| Fix double "min" in `blog-post.njk` meta line | ✅ Done |
| Verify no H1 in Markdown body conflicts with template H1 | ✅ Confirmed — corrected articles use `##` not `#` |

**Owner action:** Audit existing posts for `# Title` H1 in body — if any exist, either remove the body H1 or suppress it in the template. The template owns the single visible `<h1>`.

**Exit criteria:** No article renders "N min min read". No article has two visible H1 elements.

---

## P1.4 — Content Inventory: Reconcile Hardcoded Counts

**Problem:** `about.html` contained hardcoded counts (84 posts, 216+ evidence records) that disagreed with the actual registry state (96 posts per ACTIVE_SPRINT, 218+ evidence records).

**Fix:** Updated `about.html` to reflect current counts. Long-term fix is to generate these from the canonical collection.

| Task | Status |
|------|--------|
| Update post count 84 → 96 in `about.html` | ✅ Done |
| Update evidence records 216+ → 218+ in `about.html` | ✅ Done |
| Update pathway description to show 63 publishable explicitly | ✅ Done |
| Generate counts from canonical collection (Eleventy global data) | ⬜ Owner action — prevents future drift |

**Owner action:** Add an Eleventy global data function that counts `content/blog/**/*.md` and injects the count into templates, replacing the hardcoded number in `about.html`.

**Exit criteria:** No manually maintained count in `about.html` disagrees with the actual content collection by more than the last publish cycle.

---

## P1.5 — Privacy / Advertising: Reconcile localStorage, Analytics, Consent, Publisher ID

**Problem:** The privacy notice, localStorage usage, analytics providers, AdSense publisher ID and consent handling have not been reconciled into one auditable inventory.

**Scope of audit required:**

### localStorage keys in use
| Key | Set in | Purpose | Expiry | User control |
|-----|--------|---------|--------|--------------|
| `mp2g_fmp_inputs` | `find-mypathway.js` | Persist route-finder form inputs | None (manual clear) | Reset form button clears it |
| `mp2g_calc_inputs` | `calculator.html` inline script | Persist calculator form inputs | None (manual clear) | Recalculate button does not clear it |
| `goif_pathways_v1` | `find-mypathway.js` | Cache pathways.json (24h TTL) | 24h TTL | Not exposed to user |
| `mp2g_consent` | `analytics.js` (assumed) | Analytics consent state | Unknown | Consent UI |

**Owner actions required:**

| # | Item | Effort |
|---|------|--------|
| 1 | Audit `analytics.js` and `monetization.js` for all localStorage/sessionStorage writes | 30 min |
| 2 | Confirm `mp2g_consent` key name, expiry and withdrawal behaviour | 30 min |
| 3 | Verify AdSense publisher ID `ca-pub-8077583188666813` matches approved account | 10 min |
| 4 | Confirm `ads.txt` entry matches publisher ID | 10 min |
| 5 | Verify Sabilytics (`atsngkb78nmt`) is documented in privacy notice | 15 min |
| 6 | Confirm consent gate covers Sabilytics and AdSense before activation | 30 min |
| 7 | Update privacy notice to list all localStorage keys, purposes and expiry | 1 hr |
| 8 | Add a "Clear saved answers" button to the privacy page or settings | 1 hr |
| 9 | For EEA/UK/CH traffic: verify Google CMP/IAB TCF requirements before enabling personalised ads | Solicitor/legal |

**Exit criteria:** Privacy notice accurately describes every localStorage key, analytics provider and ad provider in use. Consent withdrawal stops all non-essential data collection. Publisher ID is verified.

---

## P1 Exit Gate Checklist

- [x] Comparison table shows registry-backed data, not universally-null fields
- [x] Calculator heading and data note are honest about data availability
- [x] Article template no longer produces "N min min read"
- [x] About page counts match current registry state
- [ ] localStorage inventory complete and documented in privacy notice
- [ ] Analytics and ad provider consent behaviour verified
- [ ] Owner: generate post counts from canonical collection (prevents future drift)
- [ ] Owner: audit posts for body H1 conflicts with template H1
