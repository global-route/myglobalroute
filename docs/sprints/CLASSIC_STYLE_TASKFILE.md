# Classic Immigration Style Taskfile
**Reference:** GOV.UK · IRCC Canada · irishimmigration.ie · Make it in Germany
**Principle:** Authority site, not product site. White, plain, functional.
**Updated:** 2026-10-29

---

## Status

| Task | Status |
|---|---|
| T1 Page background: `#f2f7ff` -> `#ffffff` | ✅ Done |
| T2 H2 amber underline: remove | ✅ Done |
| T3 Nav: sentence case, remove letter-spacing | ✅ Done |
| T4 Content sections: remove alternating blue backgrounds | ✅ Done |
| T5 Cards: remove hover shadows, border-only | ✅ Done |
| T6 Amber: restrict to CTA button only | ✅ Done |
| T7 Body font: consolidate to single stack | ✅ Done |
| T8 Credibility box: plain text, no styled box | ✅ Done |

---

## Requirements & acceptance criteria

### T1 — Page background
**Requirement:** `--color-page-bg: #f2f7ff` changed to `#ffffff`. Body background white.
**Acceptance:** No page has a blue-tinted background. `background-color: var(--color-page-bg)` resolves to white everywhere.

### T2 — H2 amber underline
**Requirement:** Remove `h2::before` pseudo-element that draws the 40px amber rule. H2 is plain — colour, size, spacing only.
**Acceptance:** No amber line appears under any H2 on any page. H2 headings are visually clean.

### T3 — Nav sentence case
**Requirement:** Remove `text-transform: uppercase` and `letter-spacing: 0.04em` from `.nav-menu a`. Nav items read as normal sentence-case text.
**Acceptance:** Nav reads "Countries Find MyPathway Visa Wizard Calculator Blog About" — not "COUNTRIES FIND MYPATHWAY".

### T4 — Section backgrounds
**Requirement:** `.content-section` background removed (was `var(--color-page-bg)`). Homepage alternating sections all white. `.approach`, `.tools`, `.problem` backgrounds removed.
**Acceptance:** Scrolling any page shows a single white background. Sections are separated by spacing and headings only.

### T5 — Card shadows
**Requirement:** All card hover `box-shadow` transitions removed. Cards use `border: 1px solid var(--color-neutral-200)` only. No depth on hover.
**Acceptance:** Hovering any card produces no shadow. Cards are flat bordered boxes.

### T6 — Amber restriction
**Requirement:** Amber (`#ffc947`) used only on `.btn-primary` background and `.nav-cta` background. Removed from: H2 underline (T2), section backgrounds, badge backgrounds, hover states on non-button elements.
**Acceptance:** The only amber visible on any page is the primary CTA button and the Visa Wizard nav button. Logo wordmark `2Global` amber accent kept — it is part of the brand mark, not decoration.

### T7 — Font consolidation
**Requirement:** Remove Titillium Web heading / Roboto body split. Use a single system font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`. Clean, fast, no external font load.
**Acceptance:** No Google Fonts request in the network tab. All text renders in the system sans-serif.

### T8 — Credibility box
**Requirement:** The `.credibility-box` styled container on the homepage replaced with a plain `<p>` line. No border, no background, no padding box.
**Acceptance:** Stats line reads as plain body text under the H1. No box visible.
