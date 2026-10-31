# UI Design Blueprint — Global Route
## Source: schengenvisainfo.com live CSS crawl (2026-10-25)
## Purpose: Authoritative reference for rebuilding all pages to the correct classic-editorial standard

> **Implementation status (2026-10-30):** All sections executed as of Phase 6 (2026-10-25) and classic style sprint (2026-10-30). Two deviations from this document are now in effect:
> - **Fonts (section 14):** Titillium Web + Roboto replaced with system font stack for performance. No Google Fonts loaded.
> - **H2 amber underline (section 16):** Removed in classic style sprint. Current style is white background, flat editorial, no H2 pseudo-element.
> All other values (colours, spacing, buttons, tables, callouts, footer) remain as specified below.

---

## 1. Why this document exists

The previous UI overhaul produced a dark-mode SaaS aesthetic — gradient heroes, glowing cards, pill buttons, emoji icons — none of which appear on the reference site. This document is extracted directly from the live rendered CSS of schengenvisainfo.com and serves as the single source of truth for every design decision going forward. Nothing in this document is interpreted from screenshots. Every value is from the crawled source.

---

## 2. Colour system — exact values from `:root`

```css
--ns-color-1: #0b409c   /* Primary navy — buttons, links, H2 colour, active states */
--ns-color-2: #ffc947   /* Amber/gold — H2 underline rule, accent borders, CTA hover bg */
--ns-color-3: #10316b   /* Dark navy — H1, H3, footer bg, header bg */
--ns-color-4: #0a1931   /* Near-black — body text, nav links */
--ns-color-5: #f2f7ff   /* Page background — the light blue-grey base */
--ns-color-6: #e8630a   /* Orange — secondary accent, rarely used */
```

### How each colour is actually used

| Colour | Used on |
|---|---|
| `#0b409c` | All `<a>` links, H2 text, button backgrounds, focus borders, active nav |
| `#ffc947` | H2 underline rule (40px wide, 1px tall), button hover background, amber accent only |
| `#10316b` | H1 text, H3 text, header/nav background, footer background |
| `#0a1931` | Body text (`color: #333` in body rule, `--ns-color-4` in headings) |
| `#f2f7ff` | Page background (`background-color: var(--ns-color-5)`) |
| `#e8630a` | Rarely — secondary CTA only |

### What does NOT exist on the reference
- No `#ea580c` orange accent as a dominant colour
- No dark gradient backgrounds on content sections
- No `rgba` glow effects
- No `#071e4a` deep navy hero
- No dark mode colour overrides

---

## 3. Typography — exact values from crawled CSS

### Font loading
```html
<link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,600|Roboto:300,400,500&display=swap" rel="stylesheet">
```

### Body
```css
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  background-color: #f2f7ff;
  -webkit-font-smoothing: antialiased;
}
```

### `<strong>` and `<b>`
```css
strong, strong a, b {
  font-weight: 400 !important;  /* NOT 700, NOT 600 — they override to 400 */
}
```

### Headings — H1
```css
/* Entry title / page title */
.entry-title, .page-title {
  font-family: "Titillium Web";
  font-weight: 400;
  color: #10316b;           /* --ns-color-3 dark navy */
  letter-spacing: -0.005em;
  margin-bottom: 2rem;
  font-size: 2.9rem;
}
```

### Headings — H2 (THE SIGNATURE PATTERN)
```css
#primary h2 {
  font-family: "Titillium Web";
  color: #0b409c;           /* --ns-color-1 primary navy */
  font-weight: 400;
  font-size: 2.05rem;
  letter-spacing: -0.005em;
  position: relative;
  padding-bottom: 6px;
}

#primary h2::before {
  content: "";
  left: 0;
  height: 1px;
  background-color: #ffc947;  /* amber underline rule */
  position: absolute;
  bottom: 0;
  width: 40px;                /* exactly 40px — not full width */
}
```

### Headings — H3
```css
#primary h3 {
  font-family: "Titillium Web";
  color: #10316b;           /* --ns-color-3 dark navy */
}
```

### Links
```css
a {
  color: #0b409c;           /* --ns-color-1 */
  font-weight: 300;
  text-decoration: none;
}

a:hover, a:focus {
  color: #ffc947;           /* amber on hover */
}
```

### Paragraphs
```css
p {
  margin-bottom: 1.75em;
}

.entry-content p {
  margin-bottom: 1.5em;
}
```

---

## 4. Layout and spacing

### Container
```css
/* Max width */
.ast-container { max-width: 1240px; }  /* desktop */

/* Content area padding */
.ast-separate-container .ast-article-post,
.ast-separate-container .ast-article-single {
  padding: 40px 35px;
}
```

### Page structure — what exists and what does NOT

**What exists:**
- Dark navy header bar (compact, ~72px)
- White content area immediately below header — NO hero section
- H1 as first element in content area
- Credibility callout box directly below H1
- H2 sections with amber underline rules
- Right sidebar on article pages
- Footer (dark navy, same colour as header)

**What does NOT exist:**
- Full-width dark gradient hero section
- Stat tiles / frosted glass panels
- Alternating dark/light content sections
- Card grids with hover animations
- Emoji icons anywhere

---

## 5. Header / Navigation — exact CSS

```css
/* Header background */
.site-header {
  background-color: #10316b;  /* --ns-color-3 dark navy */
}

.ast-primary-header-bar {
  background-color: transparent;  /* sits on top of #10316b header */
  padding: 17px 0;
}

/* Below-header nav bar (white, with shadow) */
.site-header .site-below-header-wrap > div {
  background-color: #fff;
  box-shadow: 0px 3px 3px 0px rgba(7, 31, 87, 0.08);
}

/* Nav links in below-header bar */
.ast-below-header-bar .main-navigation > ul > li > .menu-link {
  font-family: "Titillium Web";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  color: #0a1931;             /* --ns-color-4 near-black */
  padding: 0 0.75em;
}

.ast-below-header-bar .main-navigation > ul > li > .menu-link:hover {
  color: #0b409c;             /* --ns-color-1 on hover */
}

/* Sub-menu border */
.ast-builder-menu-1 .sub-menu {
  border-top: 2px solid #0b409c;
}
```

### Header structure (two-row pattern)
- Row 1: Dark navy (`#10316b`) — logo left, secondary nav + social icons right
- Row 2: White bar with shadow — primary navigation, uppercase Titillium Web 600

---

## 6. Buttons — exact CSS

```css
/* Primary button */
button,
input[type="submit"],
.btn-primary {
  background-color: #0b409c;
  color: #fff;
  border-radius: 2px;         /* NOT pill-shaped — 2px only */
  padding: 15px 30px;
  border: 0;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1em;
}

/* Button hover */
button:hover,
input[type="submit"]:hover,
.btn-primary:hover {
  color: #000;
  background-color: #ffc947;  /* amber on hover */
  border-color: #ffc947;
}

/* Outline button */
.btn-secondary {
  background-color: transparent;
  color: #0b409c;
  border: 2px solid #0b409c;
  border-radius: 0;
  padding: 0.75rem 1.5rem;
}

.btn-secondary:hover {
  color: #ffc947;
  border-color: #ffc947;
  background-color: transparent;
}
```

**Key point:** `border-radius: 2px` — not `999px`. Not pill-shaped. Rectangular with a barely-there radius.

---

## 7. Callout / info boxes — exact CSS

### Primary callout (left-border box — the credibility statement pattern)
```css
.ns_callout {
  padding: 1rem 1.25rem 1rem 1.5rem;
  margin: 0 0 2rem;
  border: none;
  line-height: 1.5;
  border-left: 3px solid rgba(11, 64, 156, 0.70);   /* navy left border */
  background-color: rgba(242, 247, 255, 0.70);       /* very light blue-grey */
}

/* Filled variant (used for the homepage credibility box) */
.ns_callout-filled.ns_c-type-sky {
  border-left: 3px solid rgba(59, 130, 246, 0.50);
  background-color: rgba(240, 248, 255, 0.70);
}
```

### Alert / info box (with icon)
```css
.ns_alert {
  position: relative;
  padding: 1rem 1rem 0.75rem 3.5rem;
  margin: 0 0 2rem;
  border: 1px solid rgba(11, 64, 156, 0.10);
  background-color: rgba(11, 64, 156, 0.05);
  /* Left column is a navy icon strip */
}
```

### Evidence note (used in Global Route already)
The reference equivalent is `.ns_callout.ns_c-type-info`:
```css
border-left: 3px solid rgba(11, 64, 156, 0.70);
background-color: rgba(242, 247, 255, 0.70);
```

---

## 8. Tables — exact CSS

```css
/* Table wrapper */
table.responsive-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.7;
  color: #333;
  border: 1px solid #e5e7eb;
}

/* Header row */
table.responsive-table thead {
  background: #f2f7ff;        /* --ns-color-5 light bg */
  color: #0a1931;             /* --ns-color-4 near-black */
  border-bottom: 2px solid #0b409c;  /* navy bottom border */
}

table.responsive-table th {
  padding: 16px 20px;
  text-align: left;
  font-weight: 400;
  font-size: 18px;
  border-right: 1px solid #e5e7eb;
}

/* Body rows */
table.responsive-table tbody tr {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}

table.responsive-table tbody tr:hover {
  background: #f2f7ff;        /* --ns-color-5 on hover */
}

table.responsive-table tbody tr:nth-child(even) {
  background: #fafafa;
}

table.responsive-table td {
  padding: 16px 20px;
  border-right: 1px solid #f3f4f6;
}
```

**Key pattern:** Table header has `border-bottom: 2px solid #0b409c` — navy bottom border, NOT a navy background. The header background is `#f2f7ff` (same as page bg), not dark navy.

---

## 9. Forms and inputs — exact CSS

```css
input[type="text"],
input[type="email"],
input[type="search"],
input[type="number"],
select,
textarea {
  color: #666;
  padding: 0.75em;
  height: auto;
  border-width: 1px;
  border-style: solid;
  border-color: #ddd;
  border-radius: 2px;
  background: #fafafa;
  box-shadow: none;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #0b409c;      /* navy focus border */
  background-color: #fff;
  box-shadow: none;           /* NO glow ring */
  outline: none;
}
```

### Wizard-style form (the Find My Route equivalent)
```css
.ns_form-wizard input,
.ns_form-wizard select {
  display: block;
  width: 100%;
  height: 44px;
  font-size: 1.117rem;
  color: #333;
  padding: 8px 40px 8px 20px;
  border-radius: 40px;        /* pill-shaped ONLY inside wizard cards */
  border: 1px solid #d9dbe9;
  background-color: #fff;
}

.ns_form-wizard input:focus,
.ns_form-wizard select:focus {
  border: 1px solid #0b409c;
  outline: none;
}
```

**Note:** Pill-shaped inputs exist ONLY inside the wizard card component. Regular page inputs use `border-radius: 2px`.

---

## 10. Footer — exact CSS

```css
.site-footer {
  color: #fff;
  padding: 40px 20px 30px;
  background-color: #10316b;  /* --ns-color-3 dark navy — same as header */
  box-shadow: 0px -3px 3px 0px rgba(7, 31, 87, 0.08);
}

/* Footer links */
.site-footer .menu-item a {
  color: #fff;
  font-size: 14px;
}

.site-footer .menu-item a:hover {
  color: #ffc947;             /* amber on hover */
}

/* Footer copyright */
.ast-footer-copyright {
  color: #fff;
  font-size: 14px;
}

/* Footer primary bar (copyright strip) */
.site-primary-footer-wrap {
  background-color: #f9f9f9;
  border-top: 1px solid #e6e6e6;
  padding: 45px 0;
}
```

**Key pattern:** Footer background is `#10316b` — the same dark navy as the header. This creates a bookend effect: dark top, white middle, dark bottom.

---

## 11. Blockquote — exact CSS

```css
blockquote {
  border-color: #ffc947;      /* amber left border */
  border-style: solid;
  border-width: 0 0 0 0.5rem; /* left border only, 0.5rem wide */
  position: relative;
  margin: 0 0 1.5rem;
  padding: 3px 1rem 0;
}

blockquote p {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0;
}
```

---

## 12. What to remove from Global Route entirely

These patterns exist in the current Global Route CSS but do NOT exist on the reference. They must be removed or replaced:

| Current Global Route pattern | Replace with |
|---|---|
| Dark gradient hero (`#071e4a → #0f172a`) | White page, H1 directly below nav, credibility callout box |
| Dot texture `::before` overlay | Nothing — white background only |
| Orange glow `::after` | Nothing |
| Frosted stat tiles | Plain white stat row or remove entirely |
| `prefers-color-scheme: dark` overrides | Remove entirely — reference has no dark mode |
| Pill buttons (`border-radius: 999px`) | `border-radius: 2px` rectangular |
| Card grids with coloured top borders | Editorial content sections, no card containers |
| Emoji icons (🌍 🧭 💰 🔍) | Remove — no icons in content sections |
| Approach section dark gradient cards | Plain white content with H3 headings |
| Section alternating dark backgrounds | All sections white, separated by `1px solid #ddd` dividers |
| `color: var(--color-primary)` on card H3 | `color: #10316b` dark navy |
| `enhancements.css` hero/glow/texture rules | Delete those blocks |

---

## 13. What to keep from current Global Route CSS

| Current pattern | Keep? | Notes |
|---|---|---|
| `--color-primary: #0b409c` | ✅ | Exact match |
| `--color-page-bg: #f2f7ff` | ✅ | Exact match |
| `font-size: 18px / line-height: 1.7` | ✅ | Exact match |
| `-webkit-font-smoothing: antialiased` | ✅ | Present on reference |
| `scroll-behavior: smooth` | ✅ | Fine to keep |
| `prefers-reduced-motion` blocks | ✅ | Keep for a11y |
| Skeleton shimmer CSS | ✅ | Not visible to users, functional only |
| `data-reveal` scroll-reveal CSS | ✅ | Fine to keep |
| Nav sticky `position: sticky; top: 0` | ✅ | Reference uses fixed header on mobile |
| `.evidence-note` left-border callout | ✅ | Matches `.ns_callout` pattern exactly |
| Table structure | ✅ | Update colours to match section 8 above |

---

## 14. Font migration plan

### Current (wrong)
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Target (correct — matches reference exactly)
```html
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
```

### CSS variable changes
```css
/* FROM */
--font-family-body: 'Inter', sans-serif;
--font-family-heading: 'DM Serif Display', Georgia, serif;

/* TO */
--font-family-body: 'Roboto', sans-serif;
--font-family-heading: 'Titillium Web', sans-serif;
```

---

## 15. Page-by-page rebuild targets

### Homepage (`index.html`)
- Remove: dark hero section entirely
- Add: white content area starting immediately below nav
- Add: H1 in Titillium Web 400, `#10316b`, `2.9rem`
- Add: credibility callout box (left-border, `#f2f7ff` bg) below H1
- Replace: dark approach cards → plain H2 + body text sections
- Replace: dark featured cards → white editorial cards with `border: 1px solid #ddd`
- Remove: all emoji icons from card headings
- Keep: stat row but style as plain white tiles, no frosted glass

### Countries (`countries.html`)
- Remove: dark page-header gradient
- Add: white page header — H1 in Titillium Web, subtitle in body text
- Keep: country card grid but restyle — white cards, `border: 1px solid #ddd`, no coloured top borders
- Keep: region pill tabs (functional, just restyle colours)
- Keep: pathway count + status badges (restyle to match reference pill style)

### Find My Route (`find-my-route.html`)
- Remove: dark page-header gradient
- Add: white page header
- Keep: form card but restyle — white bg, `border: 1px solid #ddd`, `border-radius: 4px`
- Restyle inputs: `border-radius: 40px` inside the wizard card (matches reference wizard pattern)
- Restyle submit button: `background: #0b409c`, `border-radius: 2px`, hover → `#ffc947`

### Blog (`blog.html`)
- Remove: dark blog hero
- Add: white page header with H1
- Restyle blog cards: white, `border: 1px solid #ddd`, no hover lift animation
- Keep: category pills but restyle to match reference tab style

### All inner pages (about, faq, playbooks, etc.)
- Remove: dark page-header gradient
- Add: white H1 directly below nav
- Apply H2 amber underline rule to all section headings
- Remove all emoji from content

---

## 16. The amber H2 underline — implementation

This is the single most recognisable pattern on the reference. Every H2 on every page gets it.

```css
h2 {
  font-family: 'Titillium Web', sans-serif;
  color: #0b409c;
  font-weight: 400;
  position: relative;
  padding-bottom: 6px;
  margin-bottom: 1.5rem;
}

h2::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 1px;
  background-color: #ffc947;
}
```

Centred H2 (wizard titles, section titles):
```css
h2.centered::before {
  left: 50%;
  transform: translateX(-50%);
}
```

---

## 17. Dark mode decision

The reference has no dark mode. The current Global Route dark mode is causing all the visual damage seen in the screenshots (dark cards, collapsed sections, blue headings on dark backgrounds).

**Decision: Remove all `prefers-color-scheme: dark` blocks from all three CSS files.**

Files to clean:
- `src/css/styles.css` — remove the `@media (prefers-color-scheme: dark)` block at the bottom
- `src/css/responsive.css` — remove the dark mode block
- `src/css/enhancements.css` — remove the entire dark mode section

---

## 18. Execution order

When implementing, follow this order to avoid regressions:

1. Font swap — update all 22 HTML files (Titillium Web + Roboto)
2. CSS variable reset — update `styles.css` tokens
3. Remove dark mode — strip all three CSS files
4. Remove hero — replace with white page header in `index.html`
5. Remove emoji — strip from all HTML source files
6. Apply H2 amber underline — global rule in `styles.css`
7. Restyle buttons — `border-radius: 2px`, amber hover
8. Restyle cards — white, `1px solid #ddd`, no coloured borders
9. Restyle approach section — plain editorial content, no icon cards
10. Restyle page headers — white H1 + callout box on all inner pages
11. Restyle footer — `#10316b` bg, amber link hover
12. Verify build + tests after each step

---

*Source: schengenvisainfo.com live CSS crawl — 2026-10-25*
*Crawl method: `curl` direct fetch of rendered HTML + inline `<style>` extraction*
*All values verified against screenshots provided by owner*
