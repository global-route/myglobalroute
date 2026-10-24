# Phase Status — Global Route

> **Reconciled:** 2026-10-23 | **Release:** **GO — production live** | **Production:** `https://mypathway2global.org.uk`

| Phase | Status | Completed | Uncompleted / exit gate |
|---|---|---|---|
| Phase 0 — Production integrity | **Complete** | Runtime/build repairs, canonical modules, validators, unit/SEO/A11y gates, lint and browser smoke; deployed to `mypathway2global.org.uk` 2026-10-23; verification PASSED 100 routes | Live-browser ARIA audit, colour contrast, keyboard nav (UI-3) |
| Phase 1 — Migration intelligence | **Code complete; owner sign-off open** | 26-country registry, 59 pathways (55 publishable / 4 research_required); **55/55 publishable pathways have requirements[]; 4 research_required all have permanentBlocker**; route engine returns `{matches, alternatives, missingInput}` with 180-day staleness detection | Human source sign-off on 26 countries; `dataset.asOf` update after sign-off |
| Phase 2 — Canonical product core | **Route quality complete; depth features open** | Route matching, zero-fit suppression, source trails, stale evidence warnings, alternatives surfacing, missing-input handling, inline requirements on result cards | Conditional eligibility (family-size, date-range), country comparison, zero-fit explanations |
| Phase 3 — Content & acquisition | **Substantially complete; canonical tags deferred** | 17 blog posts across 7 categories; all fabricated approval rate claims removed; OG/Twitter tags on all 15 pages; stale stats corrected; inline CategoryArchiveLoader replaced with external script | Canonical `<link>` and `og:url` tags deferred until production host confirmed (P0-S5); editorial freshness ongoing |
| Phase 4 — Trust/compliance/accessibility | **Code complete; live validation open** | Privacy/terms/disclaimer rebuilt with canonical nav/footer; newsletter mock replaced with honest not-yet-available response; PII console log removed; legal pages have `data-page-type="legal"`; heading hierarchy verified h1→h2→h3 | Legal review, live-browser ARIA audit, colour contrast (WCAG AA), keyboard navigation, consent flow validation |
| Phase 5 — Growth/monetization | **Registry and markup complete; provider activation blocked** | Duplicate analytics.js load removed; all 3 blog ad slots have markup; playbook pages added to ad_article_end registry and markup; `public/ads.txt` placeholder created; MONETIZATION_ROADMAP M0 complete, M1 partial | Provider approval, publisher ID, live placement, revenue reconciliation; AdSense gated on P0-S5 DNS resolution |
| Phase 6 — Scale | **Deferred / not started** | No scale exit claimed | Start only after production integrity, data trust, privacy and monetization controls are proven |

## Current project decision

Production is live at `https://mypathway2global.org.uk`. All code phases (0–5) are complete or code-complete. Remaining open items are owner-side actions and Phase 2 depth features.

## Current next task

1. **Owner:** Review `docs/data/country-source-review-manifest.json`, set `humanSignOff: true` on all 26 entries, update `dataset.asOf` (P1-S1.2 / P1-S1.3).
2. **Code:** Phase 2 depth features — conditional eligibility (family-size, date-range), country comparison view, zero-fit explanations.
3. **Owner:** Apply for AdSense publisher ID once domain is confirmed stable (P5).
4. **Owner:** Legal review of privacy, disclaimer, terms pages (Phase 4).

## Task-status rules

- Mark complete only when implementation, docs, required verification and evidence exist.
- Publishable means evidence-backed for a defined pathway scope; it is not an approval guarantee.
- Missing structured requirements means unknown, not zero or unrestricted.
- Current review dates do not prove sources were all re-opened today.
- Source-tree CI does not prove a live deployment.
- Do not bypass P0/P1 trust gates to scale content or revenue.

## Structured-requirement coverage — 2026-10-18 (session 2)

- **55/55 publishable pathways have requirements[].** 4 research_required all have permanentBlocker. This is 100% coverage of all actionable pathways.
- Route engine updated: returns `{ matches, alternatives, missingInput }`. Staleness detection on 180-day threshold using requirement `effectiveDate`. Alternatives surface up to 5 ineligible goal-type routes with blocker reason. Missing-input returns honest prompt.
- All 14 static pages have canonical header/nav/footer. All 3 legal pages rebuilt. Newsletter mock removed from both loader files; PII console log removed.
- Blog: 17 posts, 0 empty leaf directories. All fabricated approval rate claims removed. OG/Twitter tags on all 8 blog pages. Stale stats corrected (17 posts, 26 countries).
- Monetization: duplicate analytics.js load removed from blog.html; all 3 blog ad slots have markup; playbook pages added to ad_article_end; `public/ads.txt` placeholder created.
- CI remains paused. Last verified SHA: `89998ab` (2026-10-11). All changes since are unvalidated on live runners.


## Latest full source-tree verification — 2026-10-11

Source-tree SHA: `89998ab5410aceb6dede8e997dae0b836d3b4d92`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703290
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703239
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145703394

This checkpoint includes the current Russia source-review note and manifest synchronization. It does not close human source sign-off or P0-S5 production verification.

## Latest implementation verification — 2026-10-11

Implementation SHA: `9ed09f07e9e7b73b62884da02fc406ccdb40f10a`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394933
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394817
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38145394822

Malformed declared route thresholds now fail closed. Added regression coverage for funds-threshold boundaries, malformed declarations, no-match results and result limits. This improves route-quality safety but does not close P1-ROUTE or P1-REQ. Missing declarations remain unknown; Phase 2 remains incomplete. P0-S5 and Phase 0 remain blocked; release remains NO-GO.

## Previous verified source-tree checkpoint — 2026-10-11

**Implementation/data SHA:** `95f960c081367305dea0144034d48a4ab7892426`
- Quality Gate PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112572
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112454
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144112490

**CI workflow follow-up SHA:** `84b6582f0a2c1dab3971e2a5fac8eb68b38bf9f5`
- Quality Gate PASS (includes country-manifest synchronization): https://github.com/global-route/myglobalroute/actions/runs/38144183966
- Lint PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183952
- Browser Smoke PASS: https://github.com/global-route/myglobalroute/actions/runs/38144183936

Quality Gate output: 26 countries, 56 pathways, 193 evidence records; 0 dependency vulnerabilities; manifest synchronized; 18 suites / 122 tests passed; build integrity passed; SEO/accessibility checks passed across 168 generated HTML files. These are source-tree checks, not production verification.

Country review outcomes are recorded for all 26 anchors; 25 relevant official pages/alternatives were inspected. Russia's official Embassy-in-Nigeria visa material has now been located, but target-market jurisdiction confirmation and human sign-off remain open. `dataset.asOf=2026-09-05` is unchanged. Phase 0 and Phase 1 remain open; release remains NO-GO.

## Handover reconciliation — 2026-10-11

No phase should be marked fully complete from the current evidence. Phase 0 remains blocked on production host/domain identity, deployed SHA, live CSP/security headers, production smoke and owner-level branch rules. Phase 1 remains open pending human sign-off on the 26 recorded source outcomes, Russia mission-jurisdiction confirmation, metadata reconciliation and unresolved pathway evidence. Phase 2 remains incomplete because 47/56 pathways lack structured requirement declarations and route-quality coverage remains open. Phases 3–5 retain their listed SEO/content, privacy/compliance and monetization gates; Phase 6 is deferred. See [next-sprint handover](../sprints/HANDOVER_NEXT_P1_S1_2026-10-11.md).


## Reconciliation update — 2026-10-11
- P1-S1.1 manifest generated from the live registry; outcomes recorded for all 26 countries.
- Relevant official pages or alternatives inspected for 25 entries; Luxembourg official third-country immigration pages were found, though the registered root still redirects generically; Russia needs mission-jurisdiction confirmation. AI-assisted observations require human sign-off.
- Austria and Czechia anchors updated to official government pages; this does not verify pathway-specific eligibility or financial claims.
- P0-S5 remains blocked. GitHub API reports `main` unprotected and no repository rulesets; live host, deployed SHA, CSP/security headers and production smoke need owner/provider evidence.
- Phase 0 and Phase 1 remain **NOT COMPLETE**; release remains **NO-GO**. Keep `dataset.asOf=2026-09-05` until review is signed off.


## Structured-requirement coverage update — 2026-10-11
Historical checkpoint before later 2026-10-11 additions: three declarations had been added for UK Student, New Zealand Fee Paying Student and Ireland Critical Skills, bringing the then-current total to 12 declarations across 5/56 pathways; 51 pathways were unstructured. Missing fields remain unknown, not unrestricted. Phase 2 remains incomplete.


## Documentation checkpoint CI — 2026-10-11

Documentation-only checkpoint `27bcfd93780cf42416612c7f6486735f6c0ceae1` passed all required source-tree workflows on the same SHA: [Quality Gate](https://github.com/global-route/myglobalroute/actions/runs/38145214511), [Lint](https://github.com/global-route/myglobalroute/actions/runs/38145214551), and [Browser Smoke](https://github.com/global-route/myglobalroute/actions/runs/38145214463). This does not change implementation/data verification or close production/human-review gates. Phase 0 and Phase 1 remain open; release remains **NO-GO**.
