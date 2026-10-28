# Visa Wizard & Find MyPathway Upgrade — Planning Document

**Created:** 2026-10-25 | **Updated:** 2026-10-25  
**Status:** Planning — approved, not started  
**Scope:** Two-tool split, wizard engine, data model extensions, nav integration

---

## 1. The Two-Tool Split (confirmed)

### Tool A — Find MyPathway (upgraded in place)
**URL:** `/pages/find-mypathway.html`  
**Audience:** Career movers, professionals, students with a clear goal  
**Mode:** Self-directed filter — user knows what they want  
**Upgrades:** Passport country field, current visa field, business goal unlocked, extension routes section

### Tool B — Visa Wizard (new)
**URL:** `/pages/visa-wizard.html`  
**Audience:** Tourists, casual nomads, undecided movers, first-timers  
**Mode:** Guided 5-step sequence — system asks, user answers  
**Nav:** Added to main navigation + dedicated homepage section

---

## 2. Navigation & Homepage Integration

### Main nav (all pages)
```
Home | Countries | Find MyPathway | Visa Wizard | Calculator | Blog | About
```
Wizard sits between Find MyPathway and Calculator — same nav level, not a sub-item.

### Homepage section
New section below the hero, above the country grid:

```
[Find MyPathway]          [Visa Wizard]
Career / Study / Business  Tourist / Nomad / Undecided
Self-directed filter       Guided 5-step questions
→ Browse pathways          → Start the wizard
```

Two-column card layout using existing `.problem-card` pattern. No new CSS components needed.

---

## 3. The 5 Wizard Questions

| Step | Question | Field | Notes |
|------|----------|-------|-------|
| 1 | What passport do you hold? | `passportCountry` | All 54 African countries. Nigeria listed first, then alphabetical. Drives research opportunity flags per country. |
| 2 | Where do you want to go? | `destinationCountry` | Our 27 countries + "Not sure yet". "Not sure" triggers top-3 recommendation by purpose. |
| 3 | What is your purpose? | `purpose` | Study / Work / Remote work / Explore & Nomad / Not sure |
| 4 | What visa do you currently hold? | `currentVisa` | None / Tourist / Student / Work / Residence / Other. Drives extension route surfacing. |
| 5 | What is your budget range? | `budgetRange` | Under $5K / $5K–$15K / $15K–$30K / $30K+. Maps to budget number for `recommend()`. |

**On "flying from":** Not a question. Passport country is the determinant for visa requirements — departure city does not change what visa is needed. If current residence affects funding (e.g. blocked account from Nigeria vs. UK), it surfaces as a contextual note in results only.

---

## 4. Purpose Mapping

| Purpose selected | Engine behaviour |
|-----------------|-----------------|
| Study | Maps to `type: "study"` pathways |
| Work | Maps to `type: "work"` pathways |
| Remote work | Filters `wizardTags` includes `"nomad"` — surfaces PT digital nomad, ES teleworker, DE Opportunity Card |
| Explore & Nomad | Maps to countries where nomad/remote routes are **welcomed** (PT, ES, DE, EE when added). Shows "areas where this is structured and documented" — not a generic list. Labelled: "These countries have published remote-work or job-search visa routes." |
| Not sure | Shows top 3 countries by publishable pathway count for the user's passport region, with a prompt to use Find MyPathway for deeper filtering |

"Welcomed" = country has a published, evidence-gated nomad/remote pathway in `pathways.json`. Not a subjective ranking.

---

## 5. Passport Country → Research Opportunities

When a passport country is selected, the wizard checks for known research signals:

- **Visa-on-arrival access** — advisory note only (no lookup table yet; flagged as Phase W4+ data work)
- **Research-required pathways** — if destination has `status: "research_required"` pathways, show a "Research required" card with official source URL and plain-language blocker note
- **Known blockers** — e.g. RU pathways have `permanentBlocker` citing SWIFT/embassy access issues for West African applicants. Wizard surfaces this honestly: "Evidence gaps exist for this passport + destination combination."

All 54 African countries are in the passport dropdown. Research opportunity flags are driven by existing `permanentBlocker` and `scopeNote` fields in `pathways.json` — no new data fabricated.

---

## 6. Extension / Transition Routes

When `currentVisa` is not "None", the wizard checks `wizardTags` and `extensionOf` on pathways:

| Current visa | Extension signals shown |
|-------------|------------------------|
| Student | Post-study work routes tagged `"post-study"` (e.g. DE Opportunity Card after graduation) |
| Tourist | Pathways tagged `"tourist-switch"` — shown with caveat: "In-country switching rules vary. Verify with the official authority before acting." |
| Work | PR/residence pathways tagged `"pr-route"` for the selected destination |
| Residence | Long-term/permanent routes if available |

All extension signals are advisory. Label: `"Possible next step — verify current rules with the official authority."`

---

## 7. Architecture

### Client-side (confirmed)
All data is in `/data/pathways.json` and `/data/countries.json`. Wizard calls the same `GlobalRoute.RouteEngine.recommend()` function as Find MyPathway. No backend, no API, no extra cost.

**When to reconsider:** If passport × destination visa-on-arrival lookup tables are added (Phase W4+ data work), a Cloudflare Worker KV store can be added without rebuilding the wizard.

### New file: `/src/js/wizard-engine.js`
Responsibilities:
- Step state machine (current step, answers, back/forward, progress)
- Profile assembly: wizard answers → profile shape that `recommend()` accepts
- Extension route lookup: `currentVisa` × `wizardTags` × `destinationCountry`
- Research flag injection from `permanentBlocker` / `scopeNote`
- Nomad/remote pathway filter by `wizardTags`

`route-engine.js` is not modified. Wizard is a consumer of it.

### Data model additions (additive, no breaking change)

Two optional fields added to `pathways.json` entries:

```json
"wizardTags": ["nomad", "post-study", "tourist-switch", "pr-route"],
"extensionOf": ["GB-student"]
```

Existing pathways without these fields continue to work. Tests are unaffected.

### Budget range → number mapping
```
Under $5K   → budget: 4999
$5K–$15K    → budget: 15000
$15K–$30K   → budget: 30000
$30K+       → budget: 50000
```

---

## 8. Find MyPathway Upgrades (Tool A)

Three additions to the existing form — no structural rebuild:

1. **Passport country** — `<select name="passportCountry">` — 54 African countries. Advisory only until passport-specific blocker data exists. Passed to engine for future use.

2. **Current visa** — `<select name="currentVisa">` — surfaces extension routes in a "What's next from here" section below primary matches.

3. **Business goal unlocked** — Remove `disabled` from the business `<option>`. Until `type: "business"` pathways exist in `pathways.json`, show a research-required state: "Business pathways are in research. Check back or read the Business Playbook." Links to `/pages/business-playbook.html`.

---

## 9. Phase Structure

### Phase W1 — Wizard UI scaffold
**Effort:** 1–2 days  
**Files:** `src/pages/visa-wizard.html`, nav on all pages, homepage section  
**Deliverable:** 5-step wizard UI, step navigation (next/back), progress bar, answer state in JS. Placeholder results on step 5. Nav updated. Homepage section added.

### Phase W2 — Wizard engine + results
**Effort:** 2–3 days  
**Files:** `src/js/wizard-engine.js`, wired to `route-engine.js`  
**Deliverable:** Profile assembly, `recommend()` called, results rendered. Extension route section. Research flag cards. Nomad/remote pathway filter. New test suite for wizard engine.

### Phase W3 — Find MyPathway upgrades
**Effort:** 1 day  
**Files:** `src/pages/find-mypathway.html`, `src/js/app.js`  
**Deliverable:** Passport + current visa fields. Extension routes section. Business goal unlocked with research-required state.

### Phase W4 — Data: wizardTags + extensionOf
**Effort:** 1–2 days (data work)  
**Files:** `src/data/pathways.json`  
**Deliverable:** Nomad pathways tagged `"nomad"` (PT, ES, DE). Post-study routes tagged `"post-study"`. Key pathways get `extensionOf` links. All 54 African countries confirmed in passport list.

### Phase W5 — Sitemap, schema, cross-links
**Effort:** half day  
**Files:** `public/sitemap.xml`, `src/pages/visa-wizard.html` (JSON-LD), all nav menus  
**Deliverable:** Wizard URL in sitemap. WebPage schema on wizard. Cross-links between wizard and Find MyPathway. Tests stay green.

---

## 10. Fit Assessment

| Concern | Assessment |
|---------|------------|
| Evidence gate | Wizard reuses same gate — no fabricated data risk |
| Test suite | `route-engine.js` tests unaffected. Wizard engine needs its own suite (W2). |
| CSS | Wizard uses existing `.page-header`, `.problem-card`, `.btn` — no new design system |
| Data integrity | `wizardTags` / `extensionOf` are additive optional fields — no existing tests break |
| Cloudflare deploy | Static HTML page — no config change |
| Business pathways | Unlocked in W3, gated behind research-required state until data exists |
| Passport-specific rules | Advisory only in W1–W5. Visa-on-arrival lookup table is Phase W4+ data work |
| "Welcomed" nomad areas | Strictly = countries with published evidence-gated nomad routes. Not subjective. |

---

## 11. What This Does Not Cover (post-W5)

- Saved wizard sessions / user accounts
- Passport × destination visa-on-arrival lookup table
- Real-time embassy appointment availability
- Acceptance rate predictions (evidence policy prohibits)
- Mobile app
