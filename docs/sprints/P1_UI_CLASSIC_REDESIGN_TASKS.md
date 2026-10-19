# P1-UI — Classic UI Redesign Task Register

**Updated:** 2026-10-19  
**Status:** Active; implementation is partially advanced and not tested  
**Canonical plan:** `docs/product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md`  
**Sprint board:** `docs/sprints/ACTIVE_SPRINT.md`  
**Release status:** **NO-GO** — independent production and data-trust gates remain open.

## Status semantics

- **Complete:** the documented task's exit evidence exists. Do not use this for work that needs browser/build/test evidence that has not been collected.
- **Implemented — Not Tested:** source changes are committed, but no build, browser, automated test, accessibility audit, or CI verification has been run.
- **In progress:** evidence-backed inspection or implementation has started but the full exit criteria are not met.
- **Planned:** not yet executed.
- **Blocked:** depends on external ownership, a user decision, or verification currently disallowed by user instruction.

## Current task board

| ID | Task | Status | Evidence / output | Remaining exit criteria |
|---|---|---|---|---|
| UI-A1 | Create redesign scope, design direction, route/state coverage, and phased roadmap | **Complete (documentation)** | `docs/product/UI_UX_AUDIT_AND_CLASSIC_DESIGN_ROADMAP.md` | Keep this as the single canonical specification |
| UI-A2 | Link UI workstream into index, active sprint, phase status, assessment, roadmap, and changelog | **Complete (documentation)** | Repository docs cross-linked on `main` | Reconcile links if canonical docs move |
| UI-A3 | Enumerate static page source inventory and record initial source-backed findings | **In progress** | Seven initial findings recorded in the roadmap | Generate the actual built-route manifest and inspect all dynamic country/pathway/article routes and states |
| UI-A4 | Inspect every route/template, global shell, viewport, and interaction state | **In progress** | Source-only pass started; not a full visual audit | Route-by-route evidence register with viewport, steps, file/route, severity, confidence, impact, recommendation, acceptance criteria |
| UI-B1 | Specify classic visual foundations: colors, typography, spacing, widths, breakpoints, radii, elevation, focus | **Specification drafted** | Roadmap contains Figma-first design-system requirements | Approve actual token values and map them to implementation; create visual/design artifacts |
| UI-B2 | Specify shared components and states | **Specification drafted** | Header, navigation, footer, buttons, forms, cards, alerts, source blocks, overlays and status states listed | Create component/state matrix and implementation mapping |
| UI-B3 | Fix global shell, contrast, footer headings, oversized hero/actions, cramped metrics and privacy-control overlap | **Planned / audit required** | Issues remain screenshot-reported until reproduced against current source/output | Reproduce each issue, implement scoped fix, collect visual evidence; privacy overlap is a high-priority check |
| UI-C1 | Homepage, country directory/detail, route finder/results, calculator and comparison UI | **Planned** | Core journey acceptance scope documented | Inspect and implement every relevant state without changing matching semantics or fabricating unknown requirements |
| UI-C2 | Search, filters, validation, empty/error/loading/no-match states | **Planned** | State coverage requirements documented | Verify each control's advertised behavior and define keyboard/responsive handling |
| UI-D1 | Align legacy blog loader with current post data fields | **Implemented — Not Tested** | `src/js/blog-loader.js` uses `date`, `featuredImage`, `readTime`, and derives article URL from Markdown source path | Inspect generated output and confirm field/path contract; no build/test run yet |
| UI-D2 | Fix category archive links and image rendering | **Implemented — Not Tested** | `src/js/category-loader.js` derives article URLs, normalizes public image paths, and renders featured images | Inspect generated route URLs, image existence and both initial/load-more rendering paths |
| UI-D3 | Choose canonical blog/research landing and article template | **Open** | Static `/pages/blog.html` and generated `/blog/` surfaces; two divergent templates found in source | Trace incoming links, collection output, SEO/canonical/redirect impact; retain content and avoid destructive consolidation |
| UI-D4 | Reconcile article metadata/schema and support pages | **Planned** | Template field contracts diverge | Establish canonical front matter, metadata, social cards, structured data, source notes and page links |
| UI-E1 | Responsive audit at mobile/tablet/laptop/wide desktop | **Blocked on verification pause** | Viewport matrix specified | Record exact viewport evidence; test touch, zoom, overflow, sticky/fixed controls and orientation |
| UI-E2 | Accessibility/keyboard/focus/contrast audit | **Blocked on verification pause** | Accessibility requirements specified | Collect keyboard and assistive-state evidence; do not claim conformance without review |
| UI-E3 | Final implementation verification and release handoff | **Blocked** | User instruction says skip tests/CI; production blocker remains | Await permission to test; record final SHA/evidence, resolve/defer findings, and close independent production gates |

## Source-backed findings already recorded

1. Blog loader expects stale `url`, `published_date`, and `emoji` fields while visible JSON uses `slug`, `date`, and `featuredImage`.
2. Category archive cards previously linked to the blog landing page rather than the corresponding article.
3. Static and generated blog landing surfaces coexist.
4. Two article templates have different markup classes and metadata contracts.
5. Featured-image paths use the `/public/` source prefix and require correct published-URL normalization.
6. Multiple global/page-specific stylesheets require a token and override consistency audit.
7. Static page list is not the same as a complete generated-route manifest.

## Execution sequence and exit gates

### Stage A — Complete inventory and source audit
- [ ] Enumerate actual output routes from the build configuration/output manifest when build verification is authorized.
- [ ] Trace all source templates, shared components, scripts, data contracts and links.
- [ ] Record route-level issues with evidence and confidence labels.
- [ ] Separate confirmed source behavior from browser-only hypotheses.

### Stage B — Design foundations and shell
- [ ] Convert the design specification into concrete tokens and component/state matrix.
- [ ] Create responsive design frames for core and content-heavy routes.
- [ ] Fix high-priority global contrast, hierarchy, spacing, navigation/footer, and privacy overlay issues.
- [ ] Map every Figma component to its code counterpart.

### Stage C — Core product journeys
- [ ] Review and implement homepage, countries, route finder/results, calculator and comparisons.
- [ ] Make missing/unknown/evidence status visible without false certainty.
- [ ] Verify each control against the actual data and matching contract.

### Stage D — Editorial and supporting routes
- [ ] Inspect generated article URLs and images after build output is available.
- [ ] Decide canonical blog landing/template based on route and SEO evidence.
- [ ] Align schema, dates, image metadata, internal links, categories, and fallback states.
- [ ] Review support/legal/reference pages, 404 and malformed routes.

### Stage E — Handover
- [ ] Record responsive, keyboard, contrast, and visual evidence.
- [ ] Resolve or explicitly defer all P0/P1 findings.
- [ ] Resume tests/CI only when user direction changes.
- [ ] Record exact final SHA and honest verification status.
- [ ] Keep production **NO-GO** until host/DNS/deployed-SHA/security/smoke evidence and remaining human source sign-offs are resolved.

## Current handoff

The source-backed blog fixes are **implemented but not tested**. The redesign is not complete: no full generated-route manifest, Figma artifact, full visual review, or accessibility verification is claimed. Continue with source inspection and implementation work that can be done safely without tests; leave verification-dependent tasks open rather than inventing completion.
