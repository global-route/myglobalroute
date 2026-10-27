# UI/UX Transformation — Global Route
> Status key: ✅ Done · ⬜ Owner action required · 🚫 Blocked
> Last updated: 2026-10-24 | Build: 162 files, 0 errors | Tests: 18/18, 139/139

---

## Summary

**86/89 tasks complete.** All code-executable tasks are done.
3 remaining tasks require owner decisions before code can proceed.

---

## Completed phases (all tasks ✅)

| Phase | Tasks | Shipped |
|---|---|---|
| 1 — Design System | DS-1→10 | Primary `#0b409c`, page-bg `#f2f7ff`, Inter 300–700, 18px/1.7, navy shadows, tight radii |
| 2 — Navigation | NAV-1→9 | 70px nav, slide-in underline, CTA pill, full-width mobile overlay + backdrop + Escape close |
| 3 — Hero & Page Headers | HERO-1→12 | Deep navy gradient, dot texture, orange glow, frosted stats, 2-col desktop, clamp H1 |
| 4 — Cards & Content | CARD-1→13 | 1.75rem padding, 0.5rem radius, navy shadow, hover lift, coloured top borders per card type |
| 5 — Country Directory | CTY-1→10 | Flag grid, region pill tabs (JS-rendered, a11y select hidden), pathway count + status badges |
| 6 — Find My Route | FMR-1→10 | 48px inputs, tier pill, skeleton shimmer, zero-match empty state + CTAs, button loading state |
| 7 — Footer & Disclaimer | FTR-1→6, FTR-8 | Deep navy gradient, accent top border, slide-right links, disclaimer bar, trust statement |
| 8 — Blog | BLOG-1→6 | Dark hero, frosted stats, category pill, reading time badge, card hover lift, sidebar pills |
| 9 — Responsive | RES-1→9 | Auto-fill grid, 5rem section padding, mobile submit full-width, table fade-edge scroll |
| 10 — Dark Mode | DM-1→9 | Full surface coverage, `#0a0f1a` bg, section alternation, all card/form/compare surfaces |
| 11 — Micro-interactions | MX-1→4, MX-6→8 | Scroll-reveal (IntersectionObserver + MutationObserver), skeleton shimmer, button spinner |
| 12 — Typography | TYP-1→8 | Inter 300 loaded, `.prose` weight 300, `strong` 600, `p` 1.25rem, blockquote, link underline |

---

## Remaining tasks — owner action required

### FTR-7 — Social links in footer
**Requirement:** Add Twitter/X and LinkedIn icon links to `.footer-bottom` on all 22 HTML files.
**Blocked on:** Owner must create/confirm social account handles first.
**Code work when unblocked:** One `sed` pass across all HTML files inserting two `<a>` tags with SVG icons into `.footer-bottom`. Estimated 30 min.

---

### BLOG-7 + BLOG-8 — Blog post author byline + last verified date
**Requirement:**
- BLOG-7: Add `<div class="post-byline">Global Route Research Team · {{ date }}</div>` below the H1 in `blog-post.njk` (or `blog-post.html` template). Needs editorial sign-off on the author attribution — is it "Global Route Research Team", a named author, or something else?
- BLOG-8: Surface the `lastVerified` or `date` frontmatter field as a prominent badge near the top of each post, not buried in meta. Needs confirmation of which frontmatter field holds the verified date (`date`, `lastVerified`, or `updated`).
**Blocked on:** Owner editorial decision on author name and date field to use.
**Code work when unblocked:** 2 template edits in `blog-post.njk` + CSS for `.post-byline` and `.verified-badge` in `enhancements.css`. Estimated 45 min.

---

### MX-5 — "Did you find this page helpful?" widget
**Requirement:** Yes/No widget on country detail pages. On click, fires a Sabilytics custom event (`page_helpful: true/false`). No server storage needed — analytics-only.
**Blocked on:** Owner must confirm: (a) Sabilytics custom event API is available on the current plan, (b) which pages to show it on (all country pages, or specific ones).
**Code work when unblocked:** Add `.helpful-widget` HTML to country page template, CSS in `enhancements.css`, JS event handler in `app.js`. Estimated 1 hour.

---

## Acceptance criteria — final state

| Criterion | Status |
|---|---|
| Looks like a polished migration intelligence product | ✅ |
| Typography matches schengenvisainfo editorial standard | ✅ Inter 300–700 loaded, prose weight 300, blockquote, tight letter-spacing |
| Country directory matches visaguide.world flag grid quality | ✅ Pill tabs, pathway count + status badges, auto-fill grid |
| Nav matches visadb.io clean SaaS standard | ✅ |
| Footer disclaimer strip matches schengenvisainfo | ✅ |
| Dark mode — no light-on-dark card problem | ✅ Full surface coverage |
| Mobile nav — full-width overlay, not inline dropdown | ✅ |
| Micro-interactions — scroll-reveal, skeleton shimmer, button states | ✅ |
| All 139 tests passing | ✅ |
| Build clean, 162 files, 0 errors | ✅ |
