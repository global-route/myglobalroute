# UI/UX Audit & Classic Design Roadmap

**Status:** Active — audit baseline documented; initial blog source fixes implemented but not tested; screen-by-screen implementation and visual verification remain open  
**Reconciled:** 2026-10-19  
**Branch:** `main`  
**Release impact:** This work does not change production release status. Global Route remains **NO-GO** until the existing production integrity gates are satisfied.  
**Testing policy:** Per user direction, do not run tests or CI as part of this work. Any implementation completed under that instruction must be marked **Not Tested**; visual inspection and automated checks remain outstanding.

## 1. Purpose and product intent

Replace the current “basic vibe-code UI” impression with a coherent, classic, production-grade interface that could plausibly be handed to an experienced product designer as a Figma-ready specification. The design should communicate trust, editorial clarity, and practical migration intelligence—not a generic landing-page template.

Preserve the original Global Route product blueprint: help people explore countries and migration pathways, understand requirements and evidence, compare realistic options, and choose a useful next action. Visual redesign must not imply legal advice, guaranteed eligibility, complete country coverage, or functionality that the data and route engine do not support.

**Design direction:** premium editorial + migration-intelligence product. Use restrained typography, deliberate hierarchy, consistent spacing, clear information density, purposeful iconography, strong contrast, and transparent evidence/status labels.

## 2. Confidence labels

This document is a comprehensive audit plan, not a claim that every listed defect has been reproduced on the current deployment.

- **Confirmed from project records:** documented constraints, known route/data integrity requirements, and previously reported visual issues.
- **Reported — recheck:** issues reported from supplied screenshots or earlier inspection; verify against the current source and viewport before implementation.
- **Audit required:** areas that must be inspected before declaring the interface complete.
- **Not tested:** no test/CI/browser automation is to be run under the current user instruction.

Do not turn an audit target into a defect claim without inspecting the current page, template, stylesheet, script, or generated output.

## 3. Reported visual problems to recheck

| Finding | Priority | Audit / design response |
|---|---|---|
| Weak text contrast and low visual hierarchy | P1 | Define semantic text/surface tokens; validate contrast and disabled-state legibility |
| Hero and primary actions feel oversized | P1 | Use a constrained content width, editorial headline scale, one primary CTA, and proportionate secondary actions |
| Metric cards feel cramped | P1 | Normalize card padding, alignment, labels, numeric hierarchy, and mobile stacking |
| Footer headings are hard to see | P1 | Fix semantic contrast, type weight, spacing, and link grouping |
| Excessive or inconsistent whitespace | P1 | Introduce a spacing scale and page-specific layout rules rather than arbitrary margins |
| Privacy Settings control overlaps content | P0/P1 | Audit fixed-position controls, safe areas, stacking contexts, keyboard access, and small viewport behavior |
| Icons and controls lack consistency | P1 | Adopt one icon family and shared component rules; remove decorative icons that do not improve meaning |
| UI looks generic rather than designed | P1 | Create a Figma-ready visual system, page templates, content hierarchy, and reusable components |

Priority is provisional until each issue is reproduced and scoped. P0 means it blocks access, obscures content, or risks user action; P1 means materially degrades trust or task completion.

## 4. Complete screen and route inventory

Inspect every route emitted by the current site generator, including direct URL loads, internal navigation, and generated detail pages. Use the repository route inventory/build output as the source of truth; do not assume the list below is exhaustive.

### Core product
- [ ] Homepage: value proposition, primary action, evidence/trust cues, featured destinations, next steps, footer.
- [ ] Country directory/discovery: search, filters, sort, result counts, cards, empty state, no-results state, mobile filter behavior.
- [ ] Country detail pages: summary, source status, costs/timelines where supported, pathways, evidence links, uncertainty labels, related actions.
- [ ] Find My Route/profile input: field relevance, validation, optional/required semantics, unsupported or unavailable goals, consent/privacy clarity.
- [ ] Route results: match rationale, missing information, alternatives, limitations, evidence links, next action, zero-match and partial-match states.
- [ ] Calculator(s): input units, currency/date assumptions, range handling, validation, calculation explanation, unsupported values, output disclaimers.
- [ ] Comparison experiences: comparable fields, missing-value handling, mobile comparison, source dates, avoid false precision.
- [ ] Search: keyboard behavior, result quality, no-results state, clear/reset, destination links, fallback behavior.
- [ ] Privacy settings and consent controls: visible state, persistence claims, focus management, overlay collisions, narrow-screen placement.

### Content and supporting routes
- [ ] Blog/research landing pages, category/archive pages, article details, related articles, pagination/load-more, search and empty states.
- [ ] Case studies and success stories: consent, provenance, dates, outcome claims, clear non-guarantee wording.
- [ ] Country audit/evidence/reference pages and any publicly linked source/methodology pages.
- [ ] About, mission, contact, FAQ, guides, and legal/policy pages if present in the generated route inventory.
- [ ] 404/not-found, redirects, malformed/unknown route, unavailable content, and asset-failure behavior.
- [ ] Sitemap, robots, canonical URLs, metadata, social previews, breadcrumbs, and internal-link destinations.

### Shared layout and global states
- [ ] Header/navigation: active item, menu open/closed, small-screen menu, focus, scroll behavior, logo sizing.
- [ ] Footer: heading contrast, link group hierarchy, legal links, responsive wrapping, no clipped content.
- [ ] Global banner/notice, cookie/privacy control, dialogs, toast/feedback, floating controls, and sticky elements.
- [ ] Loading, skeleton, empty, error, offline/unavailable, disabled, success, and retry states wherever relevant.
- [ ] Direct load, refresh, back/forward navigation, long titles, long country names, missing optional data, and external links.

## 5. Responsive and accessibility coverage

Review at minimum these viewport classes (record exact dimensions during the audit): small mobile, large mobile, tablet, laptop, and wide desktop. Check portrait and landscape where the layout changes materially. Do not treat responsive as “desktop shrunk down.”

- [ ] No horizontal overflow, clipped headings, overlapping controls, or hidden primary actions.
- [ ] Navigation and forms usable by touch and keyboard; visible focus state is never removed.
- [ ] Semantic heading order, landmarks, labels, field instructions, and useful link names.
- [ ] Color is not the only signal for status; status text and icons have accessible names where needed.
- [ ] Text/background contrast and focus indicators meet the project's applicable accessibility target.
- [ ] Dialogs/popovers manage focus and dismissal correctly; fixed controls do not cover content.
- [ ] Respect reduced-motion preferences; avoid unnecessary animation and motion-triggered content loss.
- [ ] Zoom/text enlargement does not break core task completion.
- [ ] Images have meaningful alt text or empty alt when decorative; decorative icons are hidden from assistive technology.
- [ ] Errors identify the field and explain recovery; don't rely on color alone.

Accessibility review is planned only while testing is paused; no compliance claim may be made until evidence is collected.

## 6. Design system specification (Figma-first)

Before broad page-by-page CSS changes, define and document a compact system that can be implemented in the existing stack.

### Foundations
- Color tokens for page/background, surface, elevated surface, primary text, muted text, borders, focus, primary action, success, warning, error, and evidence/source status.
- Typography scale for display, page title, section title, body, supporting text, labels, metadata, and numeric metrics; define line-height and maximum reading width.
- Spacing scale, content max-widths, grid/gutters, breakpoints, radii, border weights, shadows, and elevation rules.
- Icon size/stroke rules and a single consistent icon family.
- Motion/focus/hover/active/disabled rules and reduced-motion behavior.

### Reusable components
- Header, mobile navigation, footer, breadcrumbs, page intro/hero, CTA group.
- Buttons (primary, secondary, tertiary, destructive where needed), links, icon buttons.
- Text inputs, selects, checkboxes/radios, validation/help text, search field, filters.
- Country/pathway cards, evidence/source cards, status badges, metrics, comparison rows/tables.
- Alert/notice, disclosure/accordion, tabs only when they improve information scent, pagination, empty/error/loading states.
- Dialog/popover, privacy settings control, feedback message, source attribution block.
- Article card, article metadata, table of contents, related content, author/source note.

Every component needs states and responsive rules, not just a single happy-path mockup. Do not add a component solely for visual variety.

### Figma deliverables
- [ ] Foundations page with tokens and type/color/spacing examples.
- [ ] Component library with variants and state matrix.
- [ ] Responsive frames for core journeys: homepage → country/pathway → route finder → results → next action.
- [ ] Content-heavy frames: country detail, comparison, article/research detail, evidence/source view.
- [ ] Error, empty, loading, disabled, privacy overlay, and narrow-screen frames.
- [ ] Annotations for real data fields, source attribution, unsupported/unknown values, and functional behavior.
- [ ] Mapping from Figma component names to existing templates/CSS/JS implementation.

## 7. Content, data, and interaction integrity

Visual polish must not hide missing or uncertain data.

- [ ] Keep pathway-level evidence distinct from country-level aggregate claims.
- [ ] Never display unknown costs, timelines, language requirements, or approval rates as zero or as verified estimates.
- [ ] Label route outputs as goal matches, not eligibility decisions, unless a separately reviewed basis supports stronger wording.
- [ ] Do not expose a filter/input if the underlying matching logic does not consume it.
- [ ] Mark unavailable coverage honestly; do not imply a business route is available where it is not represented.
- [ ] Ensure each source link, CTA, navigation item, card, calculator action, filter, and privacy control performs its advertised action.
- [ ] Audit duplicate blog/research experiences and choose a canonical experience without deleting useful content or changing the product strategy without review.
- [ ] Verify blog data/schema/template/loader agreement, including slug/URL, date, image, category, and CSS class naming. Treat prior mismatch reports as hypotheses until checked in current files.
- [ ] Check missing images, fallback imagery, alt text, broken links, and data-controlled HTML output.
- [ ] Keep source date, review status, uncertainty, and disclaimer close to the claims they qualify.
- [ ] Preserve search indexing, canonical URLs, internal linking, and existing useful content during visual refactors.

## 7A. Initial source-backed findings register — 2026-10-19

This is a static source inspection of the current repository files, not a browser reproduction or test run. These findings are stronger than screenshot-only hypotheses but still need runtime/visual confirmation. Testing/CI were not run.

| ID | Finding | Evidence in current source | Priority | Confidence / impact | Next action |
|---|---|---|---|---|---|
| UI-001 | Blog loader expects fields that do not match the visible blog JSON schema | `src/js/blog-loader.js` renders `post.url`, `post.published_date`, and `post.emoji`; `src/data/blog-posts.json` records visibly use `slug`, `date`, and `featuredImage` | P1 | **Source mismatch confirmed**; actual broken display/link behavior not runtime-tested | Define one canonical post contract; map slug to generated article URL and date/image fields; add fallback only where semantically correct |
| UI-002 | Category archive cards all link back to the blog landing page instead of the specific article | `src/js/category-loader.js` renders `href="/pages/blog.html"` for each card, in both initial render and load-more render paths | P1 | **Source behavior confirmed**; category cards cannot navigate directly to their own article from this handler | Generate a canonical article URL per record and use it in both render paths; check category archive route convention |
| UI-003 | Two blog landing experiences are present | Static `src/pages/blog.html` loads `/js/blog-loader.js`; `content/blog/index.njk` defines permalink `/blog/index.html` and renders content-driven posts | P1 | **Duplicate surfaces confirmed in source**; which one is canonical requires route/link and build-output review | Select a canonical landing experience, map internal links/redirects/canonical metadata, and preserve article content/SEO equity |
| UI-004 | Two article templates exist with different markup contracts | `src/templates/blog-post.njk` uses `.post-header`, `.post-content`, `.sidebar`; `src/templates/blog-post.html` uses `.article-hero`, `.article-content`, `.article-sidebar` | P1 | **Template divergence confirmed**; actual generation usage and CSS mismatch require generator/route tracing | Trace each template's consumers and generated routes; converge on one supported article template or document a justified separation |
| UI-005 | Article template contract and metadata naming are inconsistent | Nunjucks template uses `date`, `image`, `content`; HTML template uses `published_date`, `featured_image`, `page_url`, and related fields | P1 | **Contract divergence confirmed**; downstream metadata defects need generated-output inspection | Define canonical front-matter/data fields and explicitly map them to SEO/schema/social metadata |
| UI-006 | Article data includes image paths under `/public/blog/images/` | Visible `featuredImage` values in `src/data/blog-posts.json` use that prefix | P1 | **Path values confirmed**, asset existence and deployed URL correctness not yet verified | Compare the image paths to actual public asset locations and generated URLs; avoid broken image fallbacks |
| UI-007 | Design system uses a small set of global tokens but needs an inventory for consistency | `src/css/styles.css` defines root color/spacing/type tokens; `src/css/blog.css` and `src/css/blog-post.css` contain page-specific visual systems | P2 | **Multiple styling layers confirmed**; visual inconsistency is not automatically a defect | Audit token reuse, duplicate overrides, contrast, responsive rules and component states before broad CSS changes |

### Current static page inventory (source tree)

The current `src/pages/` directory contains: `about.html`, `blog-category-business-playbooks.html`, `blog-category-case-studies.html`, `blog-category-country-audits.html`, `blog-category-guides.html`, `blog-category-policy-updates.html`, `blog-category-professional-playbooks.html`, `blog-category-student-playbooks.html`, `blog.html`, `business-playbook.html`, `calculator.html`, `contact.html`, `countries.html`, `disclaimer.html`, `faq.html`, `find-my-route.html`, `privacy.html`, `professional-playbook.html`, `student-playbook.html`, and `terms.html`.

Additional route families are generated from `content/countries.njk`, `content/pathways.njk`, `content/pathways/pathway.njk`, `content/blog/index.njk`, and the Markdown content tree. This list is therefore a **source-file inventory, not a complete generated-route manifest**. The actual built route list still needs to be captured before declaring route coverage complete.

## 8. Technical inspection map

Review these source areas and expand the inventory based on the current recursive repository tree and generated routes:

- `src/index.html` and shared layouts/includes.
- `src/css/styles.css` plus page-specific stylesheets and responsive overrides.
- `src/pages/`, `src/templates/`, `content/blog/`, and generator configuration.
- `src/js/` for navigation, route finder, calculator, search, privacy, and blog interactions.
- `src/data/` and data schemas for country/pathway/evidence/blog contracts.
- Build and route-generation configuration, metadata, redirects, sitemap, robots, and deployment headers.
- Existing documentation on architecture, data trust, content strategy, release status, and active sprint.

For every finding record: page/route, viewport, reproduction steps, evidence/source file, severity, user impact, recommendation, dependencies, acceptance criteria, and status. If the current implementation cannot be inspected, mark it **Audit required**, not confirmed.

## 9. Prioritized execution plan

### UI Sprint A — Inventory and visual audit
- [ ] Enumerate actual generated routes and shared templates.
- [ ] Reproduce screenshot findings against the current source/build when a safe visual review is possible.
- [ ] Record page-by-page defects with severity and evidence.
- [ ] Map duplicate routes/templates and interaction/data contracts.
- **Exit:** every generated route is inventoried; every finding has confidence and priority; no unsupported defect claims.

### UI Sprint B — Foundations and core shell
- [ ] Approve Figma tokens, typography, spacing, iconography, and component states.
- [ ] Standardize header, navigation, footer, page width, button hierarchy, and focus styles.
- [ ] Resolve the privacy control overlap and global responsive shell issues.
- **Exit:** design tokens and core shell are consistent across core page families; responsive frames exist.

### UI Sprint C — Core migration journeys
- [ ] Rework homepage, country discovery/detail, route finder/results, calculator, and comparison experiences.
- [ ] Make uncertainty, source status, and missing values clear at the point of decision.
- [ ] Verify controls against the actual product/data contracts without changing matching semantics by implication.
- **Exit:** each core journey has documented interaction states, data mappings, and acceptance criteria.

### UI Sprint D — Editorial, support, and long-tail routes
- [ ] Consolidate blog/research templates where justified.
- [ ] Align article metadata, content schema, links, images, styles, and responsive behavior.
- [ ] Audit support/legal/reference routes, not-found behavior, metadata, and footer.
- **Exit:** all generated routes are mapped to an approved template and have a documented design state.

### UI Sprint E — Final audit and release handoff
- [ ] Complete visual review across target viewports and keyboard/accessibility review.
- [ ] Review route/content/link integrity and record screenshots/evidence.
- [ ] Resolve or explicitly defer all P0/P1 findings with owners and rationale.
- [ ] Resume tests/CI only when user direction permits; then rerun required checks on the final implementation SHA.
- **Exit:** all routes accounted for, outstanding issues transparent, final SHA and verification evidence recorded. This UI exit does not override the separate production release gates.

## 9A. Implementation checkpoint — 2026-10-19

- **Implemented — Not Tested:** legacy blog loader now consumes current `date`, `featuredImage`, `readTime`, and Markdown source-path fields rather than stale `published_date`, `emoji`, and `url` fields.
- **Implemented — Not Tested:** article URLs are derived from `content/blog/...` paths; public asset paths are normalized from the source `/public/` prefix.
- **Implemented — Not Tested:** category archive cards link to the corresponding article and use featured image data rather than a single landing-page destination and generic icon.
- **Partially implemented — Not Tested:** a narrow-screen CSS rule moves the persistent privacy-settings control above the visible consent panel; a restrained classic editorial pass applies shared tokens, clearer hierarchy, bordered cards, and explicit focus states to the legacy blog styles.
- **No tests/build/browser/CI run** per user direction. Generated output, image existence, route behavior, and visual states still require inspection when verification is authorized.
- The complete generated-route inventory, canonical blog landing/template decision, shared-shell redesign, core product journey implementation, responsive/a11y evidence and final handoff remain open. Track each item in `docs/sprints/P1_UI_CLASSIC_REDESIGN_TASKS.md`.

## 9B. UI styling checkpoint — 2026-10-19

A scoped CSS pass has been committed in `src/css/styles.css` to avoid the persistent privacy-settings control sharing the bottom position with a visible consent panel on narrow screens. A classic editorial pass in `src/css/blog.css` reduces the gradient-heavy hero treatment, constrains heading width, improves metric/card borders and contrast, and makes keyboard focus states more explicit. These are source-level changes only; no visual/browser verification has been performed. The reported footer, hero, metric and full-site consistency issues remain open until reviewed across the actual page families.

## 10. Definition of done

A UI redesign item is not complete merely because CSS changed. It is complete only when:
1. The affected routes and shared components are listed.
2. Before/after intent and acceptance criteria are documented.
3. Real data and interaction behavior remain truthful.
4. Responsive, keyboard, focus, contrast, and error states are specified.
5. Known unknowns remain visible rather than being fabricated.
6. Related docs and changelog are updated.
7. Verification status is honest. Under the current instruction, code changes remain **Not Tested** and no tests/CI are run.
8. Production release status remains **NO-GO** until independent production integrity gates close.

## 11. Risks and non-goals

- Do not replace the existing stack or migrate frameworks solely to achieve a visual refresh; make that a separate, evidence-backed architecture decision.
- Do not remove useful pages/content just to simplify the navigation.
- Do not redesign data semantics, route ranking, eligibility claims, or monetization behavior as a side effect of visual work.
- Do not report WCAG conformance, successful user testing, passing tests, or production readiness without corresponding evidence.
- Do not let design work obscure the current unresolved production host/domain/DNS and source-review sign-off gates.

## 12. Audit log and next handoff

**2026-10-19:** Added this repository-managed audit/roadmap after checking the current `main` tree; no pre-existing file with a recognizable UI/UX redesign filename was found. This is a planning baseline, not evidence that the pages have all been visually re-inspected or that implementation is complete.

**Next action:** enumerate actual generated routes and inspect current shared templates/styles/scripts; then fill a route-by-route findings register before implementing broad visual changes. Testing/CI remains paused by user direction.
