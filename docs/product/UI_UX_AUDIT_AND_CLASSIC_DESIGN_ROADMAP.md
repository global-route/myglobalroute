# UI/UX Audit & Classic Design Roadmap

**Created:** 2026-10-18
**Status:** Active — pre-production
**Release gate:** NO-GO until P0-S5 DNS/deployment is resolved
**Scope:** Every page from current raw HTML state to browser-ready, visually consistent, accessible product

---

## Current state audit

### What exists right now

| Page | File | State | Verdict |
|---|---|---|---|
| Homepage | `src/index.html` | Full header, nav, hero, sections, footer. CSS wired. | Functional skeleton — needs visual polish and nav consistency |
| Countries | `src/pages/countries.html` | Full structure, filter controls, JS-driven grid | Functional — nav inconsistent with homepage |
| Find My Route | `src/pages/find-my-route.html` | Bare — no header, no footer, no nav, no CSS beyond skip-link | Broken shell |
| Calculator | `src/pages/calculator.html` | Full form + results structure, header + footer present | Functional — old duplicate form still in file (bare version) |
| Blog | `src/pages/blog.html` | Full hero, sidebar, search, category filters | Most complete page — blog.css wired |
| Student Playbook | `src/pages/student-playbook.html` | Header + hero present, content partial | Incomplete |
| Professional Playbook | `src/pages/professional-playbook.html` | Header present, content partial, no footer | Incomplete |
| Business Playbook | `src/pages/business-playbook.html` | Corrupt HTML — truncated mid-tag, no footer, no nav | Broken |
| About | `src/pages/about.html` | No header, no footer, no nav — just `<main>` | Bare shell |
| Contact | `src/pages/contact.html` | No header, no footer — just `<main>` | Bare shell |
| FAQ | `src/pages/faq.html` | No header, no footer — corrupt `<details>` content | Broken shell |
| Disclaimer | `src/pages/disclaimer.html` | Unknown — not audited | Needs check |
| Privacy | `src/pages/privacy.html` | Unknown — not audited | Needs check |
| Terms | `src/pages/terms.html` | Unknown — not audited | Needs check |
| Generated country pages | `dist/pages/countries/*/index.html` | Eleventy-generated from `content/countries.njk` | Template-driven — needs template audit |
| Generated pathway pages | `dist/pages/pathways/*/index.html` | Eleventy-generated from `content/pathways/pathway.njk` | Template-driven — needs template audit |

### CSS state

| File | Coverage |
|---|---|
| `src/css/styles.css` | Full design system — tokens, reset, header, nav, hero, buttons, cards, footer, consent UI. Well-structured. |
| `src/css/responsive.css` | Tablet (768px) and desktop (1024px) breakpoints. Nav, grids, hero. Partial — some page-specific layouts missing. |
| `src/css/blog.css` | Blog-specific styles — hero, search, sidebar, cards. Complete for blog. |
| `src/css/blog-post.css` | Blog post typography. Exists but not audited. |

### Navigation inconsistency

The nav items differ across pages. No single canonical nav exists:

- Homepage: Countries, Find My Route, Student Guide, Professional, Business, Calculator, Research, About
- Countries: Countries, Find My Route, Calculator, Research, About
- Calculator: Countries, Calculator, Blog
- Blog: Home, Blog, Calculator, Countries, Contact
- Student Playbook: Countries, Student, Professional, Business, Calculator
- Professional Playbook: Countries, Professional, Calculator
- Business Playbook: No nav (broken)
- Find My Route: No nav (missing)

**Every page must use the same nav.**

---

## Acceptance criteria (what "done" looks like)

A page passes when:
1. Header with canonical nav renders on every page
2. Footer with trust links renders on every page
3. Page loads without console errors
4. All internal links resolve (no 404s)
5. Responsive at 320px, 768px, 1024px
6. Skip-link present and functional
7. Page title and meta description set
8. No broken or truncated HTML
9. Content matches the evidence-gated product (no fabricated rates/costs)
10. `npm run build` produces the page in `dist/` without errors

---

## Phase / Sprint / Task breakdown

---

## PHASE UI-0 — Foundation (unblocks everything else)

**Goal:** One canonical header/footer/nav component that every page uses. Without this, fixing individual pages is wasted effort.

**Exit gate:** Every static page in `src/pages/` and `src/index.html` shares identical header and footer HTML. Nav is consistent. Build passes.

---

### Sprint UI-0-S1 — Canonical nav and shared layout

#### UI-0-S1-1 · Define the canonical nav items

**What:** Agree the single nav that goes on every page.

**Proposed canonical nav:**
```
Home | Countries | Find My Route | Calculator | Research | About
```
Student/Professional/Business playbooks move to a "Guides" dropdown or a secondary nav — they are not top-level enough to crowd the primary bar.

**Accept:** Nav items listed in a single source-of-truth comment at the top of `src/css/styles.css` or in a shared include. Every page matches it exactly.

---

#### UI-0-S1-2 · Fix `find-my-route.html` — add header, nav, footer

**What:** The page currently has no header, no nav, no footer. Add the canonical header/footer from `countries.html` as the template.

**Files:** `src/pages/find-my-route.html`

**Accept:** Page renders with header + nav + footer. Existing form and route-results section unchanged. No JS broken.

---

#### UI-0-S1-3 · Fix `about.html` and `contact.html` — add header, nav, footer

**What:** Both are bare `<main>` shells with no surrounding layout.

**Files:** `src/pages/about.html`, `src/pages/contact.html`

**Accept:** Both pages render with canonical header + footer. Existing content preserved.

---

#### UI-0-S1-4 · Rebuild `business-playbook.html` — fix corrupt HTML

**What:** The file has truncated mid-tag HTML (`<h2>P investmeCTYPE html>` visible in source). The entire file needs to be rewritten cleanly.

**Files:** `src/pages/business-playbook.html`

**Content to include:**
- US LLC from Africa (Wyoming/Delaware, cost, banking)
- Portugal D8 Digital Nomad (€3,200+/month, Schengen access)
- Portugal D7 Passive Income (€820+/month, residency path)
- Spain Digital Nomad Visa
- Evidence disclaimer: costs are evidence-gated, not guaranteed

**Accept:** Valid HTML. No truncation. Canonical header + footer. `npm run build` passes.

---

#### UI-0-S1-5 · Fix `faq.html` — rebuild corrupt details elements

**What:** The `<details>` elements have duplicated/truncated content. Rebuild with clean, accurate Q&A.

**Files:** `src/pages/faq.html`

**Accept:** Valid HTML. All `<details>/<summary>` pairs well-formed. Canonical header + footer.

---

#### UI-0-S1-6 · Audit `disclaimer.html`, `privacy.html`, `terms.html`

**What:** Read each file, confirm header/footer present, confirm no broken HTML, confirm content matches current product state (evidence-gated, no fabricated claims).

**Accept:** All three pages have canonical header + footer. No broken HTML. Content consistent with `PHASE_STATUS.md` and `PRIVACY_DATA_INVENTORY.md`.

---

#### UI-0-S1-7 · Standardise nav across all static pages

**What:** After S1-2 through S1-6, do a final pass — open every file in `src/pages/` and confirm the nav `<ul>` is byte-for-byte identical to the canonical version.

**Accept:** `grep -r "nav-menu" src/pages/ src/index.html` shows identical nav items on every page. No page has a different set of links.

---

## PHASE UI-1 — Page completion (content + structure)

**Goal:** Every page has its full intended content, not just a skeleton. Pages are readable and useful without any CSS.

**Exit gate:** All 14 pages render complete content. No placeholder text. No "TODO" sections. Build passes with 0 errors.

---

### Sprint UI-1-S1 — Core product pages

#### UI-1-S1-1 · Complete `student-playbook.html`

**What:** Page has a hero and partial content. Complete it with:
- Budget range sections (Under $5K, $5K–$10K, $10K–$15K, $15K+)
- Germany blocked account route (step-by-step, evidence-gated cost)
- Italy DSU scholarship (application process, evidence-gated)
- Canada study pathways (link to generated pathway pages)
- Japan/Korea/China alternatives
- Link to calculator and Find My Route
- Evidence disclaimer on all cost figures

**Accept:** Page is complete. All cost/rate figures link to evidence or are marked "not yet evidenced." No fabricated numbers.

---

#### UI-1-S1-2 · Complete `professional-playbook.html`

**What:** Page has a hero and partial content (Germany Chancenkarte section exists). Complete with:
- UK Skilled Worker (salary threshold, sponsor requirement — evidence-linked)
- Canada Express Entry (CRS, PNP — evidence-linked)
- Australia Skilled (points, EOI — evidence-linked, research_required caveat)
- Germany Chancenkarte (already partially written — verify against evidence)
- Sector-specific paths (Tech, Healthcare, Finance)
- Link to Find My Route and country pages
- Footer with evidence disclaimer

**Accept:** All salary/points thresholds link to evidence records or are marked unknown. No fabricated figures.

---

#### UI-1-S1-3 · Audit and complete `countries.html` content

**What:** The page structure is good. Audit:
- Filter labels match actual country group taxonomy in `countries.json`
- Budget filter values are evidence-gated (not fabricated cost ranges)
- Comparison table disclaimer is visible and accurate
- CTA links to Find My Route and Disclaimer

**Accept:** No filter option implies a cost range that isn't evidence-backed. Disclaimer visible above the comparison table.

---

#### UI-1-S1-4 · Complete `find-my-route.html` content

**What:** After UI-0-S1-2 adds the layout, complete the content:
- Explain what the tool does and does not do (goal match, not eligibility decision)
- Explain why budget/income/experience are not yet collected (no structured evidence-backed thresholds for most pathways)
- Show the 21 remaining unstructured pathways as "requirements unknown" in results
- Link to TASK_SPEC P1-REQ-6 context in the About page (not in the UI — just ensure the product copy is honest)

**Accept:** Page copy is accurate to current product state. No false promise of eligibility matching.

---

### Sprint UI-1-S2 — Supporting pages

#### UI-1-S2-1 · Complete `about.html`

**What:** Current content is minimal. Complete with:
- Mission statement (evidence-first, radical transparency)
- What the product does and does not do
- Data trust standard summary (link to `reference/DATA_TRUST_STANDARD.md` context)
- Current coverage: 26 countries, 56 pathways, 193 evidence records, 49/56 structured
- Contact and trust links

**Accept:** No overclaiming. Coverage numbers match `PHASE_STATUS.md`. No "true approval rates" language.

---

#### UI-1-S2-2 · Complete `faq.html` content

**What:** After UI-0-S1-5 fixes the HTML, populate with accurate Q&A:
- What is Global Route / is it free
- Which country is best for me → points to Find My Route
- How accurate is the calculator → evidence-gated, planning aid only
- What does "research required" mean
- How do I report an error → contact email
- Why are approval rates missing → not published by authorities

**Accept:** No answer fabricates a rate, cost or timeline. All answers consistent with product evidence model.

---

#### UI-1-S2-3 · Audit generated country and pathway templates

**What:** Open `content/countries.njk` and `content/pathways/pathway.njk`. Audit:
- Do generated pages have a header and footer?
- Do they link back to the countries directory and Find My Route?
- Do they show evidence status (publishable vs research_required)?
- Do they show structured requirements where available (49 pathways now have them)?
- Do they show "requirements unknown" where declarations are missing?

**Accept:** Generated pages have consistent layout. Evidence status visible. No page implies eligibility where requirements are unknown.

---

## PHASE UI-2 — Visual design (CSS completion)

**Goal:** The design system in `styles.css` is applied consistently. Every page looks like it belongs to the same product. No page is visually broken at any breakpoint.

**Exit gate:** All pages pass a visual review at 320px, 768px and 1024px. No layout overflow. No unstyled content. Consistent typography, spacing and colour.

---

### Sprint UI-2-S1 — Page-specific CSS gaps

#### UI-2-S1-1 · Add missing page-specific layout classes

**What:** `styles.css` has hero, cards, grids and footer. Missing:
- `.playbook-section` — for the budget-range and pathway sections in playbook pages
- `.faq-section` — for the `<details>` accordion styling
- `.about-section` — for the mission/values layout
- `.contact-section` — for the email + channels layout
- `.route-results article` — for the Find My Route result cards (currently unstyled)

**Files:** `src/css/styles.css`

**Accept:** Each new class is used on its target page. No inline styles added to HTML.

---

#### UI-2-S1-2 · Complete `responsive.css` for all page types

**What:** Current responsive.css covers homepage sections and nav. Missing breakpoints for:
- `.playbook-section` grid at 768px+
- `.faq-section` at 768px+
- `.route-results` card grid at 768px+
- Countries filter controls at 768px+ (currently stacks vertically on mobile — needs horizontal layout at tablet)
- Calculator form + results side-by-side at 1024px+

**Files:** `src/css/responsive.css`

**Accept:** No horizontal overflow at 320px on any page. Filter controls usable on mobile. Calculator results readable on all breakpoints.

---

#### UI-2-S1-3 · Nav active state and mobile menu

**What:** The nav has `.active` class logic in `app.js` but no pages set the active link correctly. Mobile hamburger menu works on blog but not consistently elsewhere.

**What to fix:**
- Add `data-page` attribute to `<body>` on every page (already done on some: `data-page-type="calculator"`)
- Add CSS rule that highlights the active nav link based on `data-page-type`
- Confirm `app.js` nav-toggle works on all pages (it currently only runs if the header is present)

**Files:** `src/css/styles.css`, `src/js/app.js`

**Accept:** Active nav item is visually distinct on every page. Mobile menu opens and closes on all pages.

---

#### UI-2-S1-4 · Consent banner visual QA

**What:** The consent banner CSS exists in `styles.css`. Verify:
- Banner does not overlap content on mobile (320px)
- "Privacy settings" persistent button does not overlap footer
- Both analytics and advertising toggles are visually distinct
- Banner is dismissible and preference persists on reload

**Accept:** Manual check in Chrome at 320px and 1024px. No overlap. Both toggles visible and labelled.

---

### Sprint UI-2-S2 — Typography and component polish

#### UI-2-S2-1 · Heading hierarchy audit

**What:** Several pages use `<h1>` for the page title and then jump to `<h3>` for subsections, skipping `<h2>`. This breaks screen reader navigation and SEO.

**Pages to fix:** student-playbook, professional-playbook, business-playbook, faq, about, contact.

**Accept:** Every page has exactly one `<h1>`. Subsections use `<h2>`. Sub-subsections use `<h3>`. No skipped levels.

---

#### UI-2-S2-2 · Button and link consistency

**What:** Some pages use `<a class="btn btn-primary">`, others use plain `<a>` links, others use `<button>`. Audit and standardise:
- CTAs that navigate → `<a class="btn btn-primary">`
- CTAs that submit forms → `<button type="submit" class="btn btn-primary">`
- Secondary actions → `<a class="btn btn-secondary">` or `<button class="btn btn-secondary">`
- Inline text links → plain `<a>` with no btn class

**Accept:** No `<button>` used for navigation. No `<a>` used for form submission. Consistent visual weight across pages.

---

#### UI-2-S2-3 · Footer consistency

**What:** Footer content differs across pages. Some have 4 columns (homepage), some have 2, some have none. Standardise to:

```
Column 1: Global Route — tagline
Column 2: Explore — Countries, Find My Route, Calculator, Research
Column 3: Guides — Student, Professional, Business
Column 4: Trust — Privacy, Disclaimer, Terms, Contact
```

**Accept:** All pages have identical footer HTML. Footer renders correctly at all breakpoints.

---

## PHASE UI-3 — Accessibility and pre-launch checks

**Goal:** The product meets WCAG AA for the core user journey. No critical or serious violations.

**Exit gate:** axe audit passes on homepage, countries, find-my-route, calculator. 0 critical violations. All interactive elements keyboard-navigable.

---

### Sprint UI-3-S1 — Accessibility

#### UI-3-S1-1 · ARIA labels and landmark audit

**What:** Audit every page for:
- `<main id="main">` present (required for skip-link)
- `<nav aria-label="Primary">` on header nav
- `<footer>` landmark present
- Form inputs have associated `<label>` elements
- `aria-live` on dynamic result regions (Find My Route results, calculator results)

**Accept:** All landmarks present. No input without a label. Dynamic regions have `aria-live="polite"`.

---

#### UI-3-S1-2 · Colour contrast check

**What:** The design system uses `--color-primary: #2563eb` on white and `--color-neutral-700: #374151` on `--color-neutral-50: #f9fafb`. Check:
- Primary blue on white: must be ≥ 4.5:1 for normal text
- Neutral-700 on neutral-50: must be ≥ 4.5:1
- White text on primary blue (buttons): must be ≥ 4.5:1
- Placeholder text in inputs: must be ≥ 3:1

**Accept:** All text/background combinations pass WCAG AA. Any failures get a token update in `styles.css`.

---

#### UI-3-S1-3 · Keyboard navigation test

**What:** Tab through homepage, countries, find-my-route, calculator without a mouse:
- Every interactive element reachable by Tab
- Focus ring visible on all elements (already defined in styles.css — verify it's not overridden)
- Skip-link works (jumps to `#main`)
- Mobile nav accessible by keyboard
- Calculator form submittable by keyboard
- Find My Route form submittable by keyboard

**Accept:** Full keyboard journey possible on all four core pages. No focus trap outside modals.

---

#### UI-3-S1-4 · Image and icon alt text

**What:** The logo uses `<span class="logo-icon">🌍</span>` — emoji in a span with no aria-label. Screen readers will announce "globe showing Europe-Africa" which is acceptable but should be confirmed. Check all emoji used as meaningful icons.

**Accept:** All emoji used as icons have `aria-hidden="true"` if decorative, or `aria-label` if meaningful. No image without alt text.

---

### Sprint UI-3-S2 — Pre-launch verification

#### UI-3-S2-1 · Internal link audit

**What:** Run `npm run build` then check all internal links in `dist/`:
- No link points to a page that doesn't exist in `dist/`
- No link uses an absolute URL with a placeholder origin (localhost, myglobalroute.com, netlify.app)
- Blog category pages link to real posts

**Accept:** `npm run build:verify` passes. Zero broken internal links.

---

#### UI-3-S2-2 · Page title and meta description audit

**What:** Every page needs a unique `<title>` and `<meta name="description">`. Current state:
- Homepage: ✓
- Countries: ✓
- Find My Route: ✓
- Calculator: ✓
- Blog: ✓
- Student Playbook: ✓
- Professional Playbook: ✗ (no description)
- Business Playbook: ✗ (corrupt — no meta)
- About: ✓
- Contact: ✗ (no description)
- FAQ: ✗ (no description)

**Accept:** Every page has a unique title and a 120–160 character meta description. No two pages share the same title.

---

#### UI-3-S2-3 · Build smoke — all pages render in browser

**What:** Run `npm run build && npx @11ty/eleventy --serve` (or equivalent local server). Open every page in a browser:
- No blank pages
- No console errors
- No missing CSS (404 on stylesheet)
- No missing JS (404 on script)
- Nav renders and is interactive
- Footer renders

**Accept:** All 14 static pages and a sample of generated country/pathway pages render correctly in Chrome. Zero console errors on page load.

---

## Execution order

```
UI-0-S1 (canonical nav + fix broken pages)
  → UI-1-S1 (complete core product pages)
  → UI-1-S2 (complete supporting pages + template audit)
  → UI-2-S1 (CSS gaps + responsive)
  → UI-2-S2 (typography + component polish)
  → UI-3-S1 (accessibility)
  → UI-3-S2 (pre-launch verification)
```

UI-0 must complete before UI-1. UI-1 must complete before UI-2. UI-2 and UI-3-S1 can run in parallel. UI-3-S2 is the final gate before pages are considered browser-ready.

---

## Parallel gate — P0-S5 DNS

UI work can proceed fully in parallel with the P0-S5 DNS resolution. The UI phases do not require a live domain. They require only `npm run build` and a local server.

Once P0-S5 resolves the DNS and the live origin is confirmed, add:
- Canonical `<link rel="canonical">` tags (blocked until origin confirmed — see TASK_SPEC P0-S5-5)
- Open Graph `og:url` tags
- Sitemap absolute URLs

These are the only UI tasks that depend on P0-S5.

---

## Files this roadmap governs

**Static pages (src/pages/ + src/index.html):**
`index.html`, `countries.html`, `find-my-route.html`, `calculator.html`, `blog.html`, `student-playbook.html`, `professional-playbook.html`, `business-playbook.html`, `about.html`, `contact.html`, `faq.html`, `disclaimer.html`, `privacy.html`, `terms.html`

**CSS:**
`src/css/styles.css`, `src/css/responsive.css`, `src/css/blog.css`, `src/css/blog-post.css`

**Templates (Eleventy-generated pages):**
`content/countries.njk`, `content/pathways/pathway.njk`, `content/pathways.njk`

**JS (UI-relevant):**
`src/js/app.js` (nav toggle, active state)

---

## What this roadmap does NOT cover

- Route engine logic (`route-engine.js`) — covered by TASK_SPEC P1-ROUTE
- Evidence data (`pathways.json`, `countries.json`) — covered by TASK_SPEC P1-REQ
- Analytics/consent wiring — covered by TASK_SPEC P1-PRIV
- Monetization activation — covered by TASK_SPEC P5
- Canonical URLs / sitemap — blocked on P0-S5, covered by TASK_SPEC P0-S5-5 and P3-3
