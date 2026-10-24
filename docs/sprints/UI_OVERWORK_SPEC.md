# UI Overwork Spec — v2
**Updated:** 2026-10-24 | **Status: ALL 14 TASKS COMPLETE** | **Production:** `https://mypathway2global.org.uk`
**Scope:** All remaining UI tasks after the 3-session optimisation sprint, with design standards benchmarked against comparable platforms.

---

## Design standard reference

The following platforms set the bar for this field. Every acceptance criterion below is calibrated against what these sites do well:

| Platform | What it does right |
|---|---|
| **Numbeo** (numbeo.com) | Clean data tables, clear "not enough data" states, no fabricated figures |
| **Expatistan** (expatistan.com) | Cost comparison with honest confidence indicators, simple filter UI |
| **Visaguide.world** | Structured requirement cards, official source links on every claim |
| **IRCC (canada.ca)** | Government-grade clarity: one fact per line, no ambiguity, clear next steps |
| **Make it in Germany** (make-it-in-germany.com) | Step-by-step pathway cards, checklist format, evidence-first copy |
| **NomadList** (nomadlist.com) | Fast filter UX, honest data confidence labels, card-based country grid |

**Classic design principles for this field:**
- White background, dark text, single accent colour — no gradients on data pages
- Cards with a clear border, subtle shadow, consistent padding — not flat coloured blocks
- Checklist/requirement items use `✓` or `•` — never emoji as data indicators
- Tables for comparison data — not cards
- "Not available" / "Not published" shown explicitly — never hidden or omitted
- CTAs are text links or outlined buttons on data pages — filled primary buttons only on hero/CTA sections
- Section headings are left-aligned, not centred, on content pages
- Max content width 760px on text-heavy pages (playbooks, about, faq) — not full 1200px

---

## Page status

| Page | Status | Remaining |
|---|---|---|
| `index.html` | ✅ Complete | — |
| `countries.html` | ⚠️ Filter broken | Task 2 |
| `find-my-route.html` | ⚠️ Bare intro | Task 4 |
| `calculator.html` | ⚠️ Weak meta | Task 3 |
| `blog.html` | ✅ Complete | — |
| `student-playbook.html` | ⚠️ Inline styles | Tasks 1, 7 |
| `professional-playbook.html` | ⚠️ Inline styles | Tasks 1, 7 |
| `business-playbook.html` | ⚠️ Inline styles | Tasks 1, 7 |
| `about.html` | ⚠️ Inline styles | Task 1 |
| `contact.html` | ⚠️ Inline styles | Task 1 |
| `faq.html` | ⚠️ Inline styles | Task 1 |
| `disclaimer.html` | ✅ Complete | — |
| `privacy.html` | ✅ Complete | — |
| `terms.html` | ✅ Complete | — |
| `countries.njk` | ⚠️ No requirements shown | Task 5 |
| `pathway.njk` | ✅ Complete | — |

---

## Tasks

---

### ✅ TASK 1 — Replace inline styles with CSS classes
**Status:** Open
**Files:** `student-playbook.html`, `professional-playbook.html`, `business-playbook.html`, `about.html`, `contact.html`, `faq.html`

**Problem:** Every content section uses `style="padding-top:2rem;padding-bottom:2rem;"` inline.

**Fix:** Replace all inline `style=` padding on `<section class="container">` with `<section class="page-content">`. The `.page-content` class already exists in `styles.css`.

**Acceptance criteria:**
- [ ] Zero `style=` attributes on content `<section>` elements in those 6 files
- [ ] Visual spacing unchanged — `page-content` padding matches the removed inline values
- [ ] `npm run build` exits 0

---

### ✅ TASK 2 — Fix countries.html filter options to match data
**Status:** Open
**File:** `src/pages/countries.html`

**Problem:** Filter options use invented group names ("GROUP A: Anglosphere Giants") that don't match the `category` field in `countries.json`. The filter silently returns nothing.

**Fix:** Replace `#group-filter` options with actual `countries.json` category values. Update label to "Filter by Region:".

```html
<option value="">All Regions</option>
<option value="Europe - Western">Europe — Western</option>
<option value="Europe - Central">Europe — Central</option>
<option value="Europe - Southern">Europe — Southern</option>
<option value="Europe - Nordic">Europe — Nordic</option>
<option value="Europe - Baltic">Europe — Baltic</option>
<option value="Europe - Alpine">Europe — Alpine</option>
<option value="North America">North America</option>
<option value="Asia-Pacific">Asia-Pacific</option>
<option value="Asia">Asia</option>
```

**Acceptance criteria (benchmarked against NomadList / Expatistan filter UX):**
- [ ] Selecting "Europe — Nordic" returns exactly: Finland, Sweden, Norway, Iceland
- [ ] Selecting "Asia" returns exactly: Japan, South Korea, China
- [ ] Selecting "All Regions" returns all 26 countries
- [ ] Filter label reads "Filter by Region:" — not "Filter by Group:"
- [ ] Budget filter still works independently alongside region filter
- [ ] No filter option implies a cost range that isn't evidence-backed (existing budget filter options are fine — they filter on `trueCost.total` which is null for most countries, so they return 0 results honestly)

---

### ✅ TASK 3 — Fix calculator meta description
**Status:** Open
**File:** `src/pages/calculator.html`

**Problem:** Current description: "Global Route Budget Calculator - Find affordable countries based on your savings" — generic, no evidence-gated language.

**Fix:** Replace with: "Evidence-gated budget calculator for African students and professionals — plan migration costs using verified country data, not estimates."

**Acceptance criteria:**
- [ ] Description is 120–160 characters
- [ ] Contains "evidence" or "verified" — consistent with product positioning
- [ ] Does not claim to find "affordable countries" without qualification (most cost fields are null)

---

### ✅ TASK 4 — Find My Route: add structured intro above the form
**Status:** Open
**File:** `src/pages/find-my-route.html`

**Problem:** Single bare `<p>` then immediately the form. No orientation for first-time users.

**Fix:** Add a two-column "what it does / does not do" section between `<h1>` and `<form>`. Use the `.problem-grid` CSS class (already defined, 2-col at 768px+) for the two lists. Keep all existing JS and form logic completely unchanged.

**Content:**
```
What this tool does                    What this tool does not do
✓ Filters 55 publishable pathways      ✗ Assess your personal eligibility
  by goal (study or work)
✓ Shows official requirements          ✗ Rank by budget, income or experience
  from government portals                (not yet structured as evidence fields)
✓ Surfaces nearby routes with          ✗ Predict approval likelihood
  documented blockers shown
                                       ✗ Cover business pathways
                                         (not yet in scope)
```

**Acceptance criteria (benchmarked against Make it in Germany / Visaguide.world tool pages):**
- [ ] "What it does" and "does not do" are visually distinct — two columns at 768px+, stacked on mobile
- [ ] Each item uses a plain `✓` or `✗` text prefix — no emoji, no icons
- [ ] Existing form and JS are byte-for-byte unchanged
- [ ] Section has `class="evidence-note"` wrapper or equivalent — clearly distinguished from the form
- [ ] No claim implies eligibility matching or approval prediction

---

### ✅ TASK 5 — Country template: show top requirements inline
**Status:** Open
**File:** `content/countries.njk`

**Problem:** Country pages list pathways but show no requirements. Users must click through to each pathway page to see funds thresholds, job offer conditions, or points scores.

**Fix:** In the pathways loop, after the type/status line, add a requirements summary for publishable pathways only. Cap at 3 requirements. Humanise field names (replace `_` with space, title-case). Show value + currency/unit. Add "Full details →" link to `/pathways/{{ pathway.id }}/`.

**Acceptance criteria (benchmarked against Visaguide.world requirement cards):**
- [ ] Germany page shows Opportunity Card with "Minimum funds: EUR 1,091 / month" and "Minimum points: 6"
- [ ] UK page shows Skilled Worker with "Job offer: required" and "Minimum annual salary: GBP 41,700"
- [ ] No requirements shown for `research_required` pathways — only the `permanentBlocker` text
- [ ] Requirements list uses `<ul class="route-requirements">` — existing CSS class
- [ ] "Full details →" link points to `/pathways/{{ pathway.id }}/` — not to the external source
- [ ] Max 3 requirements shown per pathway — not the full list

---

### ✅ TASK 6 — Remove stale canonical comments
**Status:** Open
**Files:** All `src/pages/*.html` files containing `<!-- Canonical URL intentionally omitted`

**Fix:** Remove the comment. Canonical tags were added in sprint session 2.

**Acceptance criteria:**
- [ ] `grep -r "Canonical URL intentionally omitted" src/` returns no results
- [ ] All canonical tags remain in place — only the comment is removed

---

### ✅ TASK 7 — Playbook article inline styles → CSS classes
**Status:** Open
**Files:** `student-playbook.html`, `professional-playbook.html`, `business-playbook.html`

**Problem:** `<article style="margin-bottom:2rem;">` wrappers throughout. The `.playbook-card` class already exists in CSS with correct spacing.

**Fix:** Replace `<article style="margin-bottom:2rem;">` with `<article class="playbook-card">` throughout all three playbook files.

**Acceptance criteria (benchmarked against Make it in Germany pathway cards):**
- [ ] No `<article>` in any playbook page has an inline `style=` attribute
- [ ] Each pathway article has a visible card border and background — `.playbook-card` provides `border: 1px solid var(--color-neutral-200)`, `border-radius`, `padding`, `background-color: var(--color-neutral-50)`
- [ ] Cards are visually separated — not merged into a continuous block
- [ ] `<h3>` inside each card is the pathway name — correct heading hierarchy (h1 → h2 → h3)

---

### ✅ TASK 8 — Emoji accessibility: add aria-hidden to decorative emoji
**Status:** Open
**Files:** All static pages, `content/countries.njk`, `content/pathways/pathway.njk`

**Problem:** Decorative emoji (logo globe, flag emoji in headings, feature icons) are announced by screen readers with their full Unicode description.

**Fix:**
- Logo: `<span class="logo-icon" aria-hidden="true">🌍</span>`
- Flag emoji in playbook `<h3>` headings: wrap each flag in `<span aria-hidden="true">🇩🇪</span>`
- Homepage approach icons (🔍, 🧾, 🧭, ⚠️): add `aria-hidden="true"` to `.approach-icon` spans
- Homepage problem card emoji (❌): add `aria-hidden="true"`

**Acceptance criteria:**
- [ ] All decorative emoji have `aria-hidden="true"` on their containing element
- [ ] The logo link still has accessible text via `<span class="logo-text">Global Route</span>`
- [ ] Heading text remains readable without the emoji — e.g. "Germany — Study visa" not just "🇩🇪"
- [ ] No meaningful content is hidden — only decorative icons

---

### ✅ TASK 9 — Fix any remaining /pages/blog.html links
**Status:** Open

**Fix:** `grep -r "/pages/blog.html" src/` — replace any found with `/blog/`.

**Acceptance criteria:**
- [ ] `grep -r "/pages/blog.html" src/` returns no results

---

### ✅ TASK 10 — Run build:verify and fix failures
**Status:** Open
**Command:** `npm run build:verify`

**Acceptance criteria:**
- [ ] `npm run build:verify` exits 0
- [ ] All failures reported are fixed before deploy

---

### ✅ TASK 11 — Add og:url to all static pages
**Status:** Open
**Files:** All 14 static pages

**Fix:** Add `<meta property="og:url" content="https://mypathway2global.org.uk{path}">` matching the existing canonical tag on each page.

**Acceptance criteria:**
- [ ] All 14 static pages have `og:url`
- [ ] `og:url` value matches `<link rel="canonical">` href on the same page exactly
- [ ] No page has a duplicate `og:url` tag

---

### ✅ TASK 12 — Classic design: content page max-width and typography
**Status:** Open — NEW task added from design standard review
**Files:** `src/css/styles.css`, `src/css/responsive.css`

**Problem:** Text-heavy pages (playbooks, about, faq, contact) render at full 1200px container width. Comparable platforms (IRCC, Make it in Germany, Visaguide) cap prose content at ~760px for readability. Long lines (>90 characters) reduce reading speed and comprehension.

**Fix:** Add a `.prose` container class capped at 760px, centred. Apply it to the content sections of playbook, about, faq, contact pages — not to the hero, not to the countries grid, not to the calculator.

```css
.prose {
  max-width: 760px;
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-md);
}
```

Replace `<section class="page-content">` (or `<section class="container">`) on prose-only sections with `<section class="prose">`.

**Acceptance criteria (benchmarked against IRCC / Make it in Germany content pages):**
- [ ] Playbook content sections max out at 760px on desktop — not 1200px
- [ ] About, FAQ, Contact content sections max out at 760px
- [ ] Hero sections remain full-width — `.hero` is unchanged
- [ ] Countries grid, calculator, and Find My Route remain at full container width — `.container` is unchanged
- [ ] Line length on prose sections is ≤ 80 characters at 1024px viewport
- [ ] No horizontal overflow at 320px

---

### ✅ TASK 13 — Classic design: section dividers and visual hierarchy
**Status:** Open — NEW task added from design standard review
**Files:** `src/css/styles.css`

**Problem:** Content sections on playbook and about pages run together without visual separation. Comparable platforms use a thin `border-top` or background alternation to separate major sections. Currently sections are distinguished only by heading text.

**Fix:** Add alternating background to `.playbook-section` even/odd children, and ensure `.prose h2` has a visible top border separator (already partially done in `.container h2` — extend to `.prose`).

```css
.prose h2 {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-lg);
  border-top: 2px solid var(--color-neutral-200);
  font-size: var(--font-size-xl);
}

.prose h2:first-of-type {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}
```

**Acceptance criteria (benchmarked against Numbeo / Expatistan section layout):**
- [ ] Each `h2` on prose pages has a visible top separator line
- [ ] First `h2` on each page has no top separator (it follows the hero)
- [ ] Section headings are left-aligned — not centred
- [ ] Font size of `h2` on prose pages is `font-size-xl` (1.25rem) — not the full `font-size-3xl` used on homepage sections

---

### ✅ TASK 14 — Classic design: requirement list checkmark styling
**Status:** Open — NEW task added from design standard review
**Files:** `src/css/styles.css`

**Problem:** Requirement lists in playbooks use plain `<ul>` with browser-default bullet points. Comparable platforms (Visaguide, Make it in Germany) use a styled checkmark or tick to signal "this is a requirement you must meet" — making the list scannable at a glance.

**Fix:** Add a `.checklist` CSS class that replaces the default bullet with a `✓` character in the primary colour.

```css
.checklist {
  list-style: none;
  padding-left: 0;
}

.checklist li {
  padding-left: 1.75rem;
  position: relative;
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-relaxed);
}

.checklist li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary);
  font-weight: 700;
}
```

Apply `class="checklist"` to the `<ul>` elements inside `.playbook-card` on all three playbook pages.

**Acceptance criteria (benchmarked against Make it in Germany / Visaguide requirement cards):**
- [ ] Each requirement item in a playbook card shows a green `✓` prefix
- [ ] The `✓` uses `--color-secondary` (#16a34a) — green, not blue
- [ ] List items are left-aligned with consistent indent
- [ ] The class is applied only to requirement lists — not to navigation or footer lists
- [ ] Existing `.route-requirements` list in Find My Route results is unchanged

---

## Live browser checks (owner-side)

| Check | Tool | Pass condition |
|---|---|---|
| ARIA audit | axe DevTools | 0 critical, 0 serious on homepage, countries, find-my-route, calculator |
| Keyboard navigation | Manual tab | Every element reachable; focus ring visible; skip-link works |
| Mobile 320px | Chrome DevTools | No overflow; nav opens/closes; prose readable |
| Prose max-width | Chrome DevTools 1024px+ | Playbook content ≤ 760px wide |
| Checklist rendering | Visual | Green ✓ visible on all playbook requirement lists |
| Consent banner | Manual | No overlap at 320px; dismissible; preference persists |

---

## Execution order

**Batch A — mechanical (one deploy):**
```
TASK 6   remove stale comments
TASK 9   fix /pages/blog.html links
TASK 1   inline styles → page-content
TASK 7   article inline styles → playbook-card
TASK 2   fix filter options
TASK 3   fix calculator meta
TASK 8   emoji aria-hidden
TASK 11  og:url tags
```

**Batch B — CSS design (one deploy):**
```
TASK 12  prose max-width class
TASK 13  section dividers + h2 sizing
TASK 14  checklist CSS + apply to playbooks
```

**Batch C — content (one deploy):**
```
TASK 4   find-my-route intro
TASK 5   country template requirements
```

**Gate before each deploy:**
```
TASK 10  npm run build:verify → must exit 0
         npm run deploy:wrangler
         PRODUCTION_URL=https://mypathway2global.org.uk npm run deploy:verify → must pass
```
