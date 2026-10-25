# Production Readiness Task File — 2026-10-25

## Overview
23 identified flaws from production readiness scan, prioritized by severity.

---

## CRITICAL (Must fix before launch)

### Task C1: Tests failing — update country count to 27
**Status:** DONE
**Issue:** 3 test suites fail because USA was added (27 countries, tests expect 26)
**Files:**
- `tests/country-source-manifest.test.js`
- `tests/data-contract.test.js`
- `tests/evidence-registry.test.js`
**Fix:** Update all `26` references to `27`

---

### Task C2: Homepage stats outdated
**Status:** DONE
**Issue:** Shows "26 countries" but now 27
**Files:** `src/index.html`
**Fix:** Change `<strong>26</strong> countries` to `<strong>27</strong> countries`

---

### Task C3: Old email domain
**Status:** DONE (already fixed)
**Issue:** Contact shows `hello@global-route.app` (old brand)
**Files:**
- `src/pages/contact.html`
- `src/pages/privacy.html`
- `src/pages/faq.html`
**Fix:** Update to `hello@mypathway2global.org.uk` or correct email

---

### Task C4: Blog category pages have emojis
**Status:** DONE (already fixed)
**Issue:** Headers like "🌍 Country Audits" violate no-emoji design rule
**Files:**
- `src/pages/blog-category-country-audits.html`
- `src/pages/blog-category-student-playbooks.html`
- `src/pages/blog-category-professional-playbooks.html`
- `src/pages/blog-category-business-playbooks.html`
- `src/pages/blog-category-case-studies.html`
- `src/pages/blog-category-policy-updates.html`
- `src/pages/blog-category-guides.html`
**Fix:** Remove all emojis from H1 and sidebar links

---

### Task C5: Blog category pages have old footer
**Status:** DONE (already fixed)
**Issue:** Different footer structure than main pages (missing sections, wrong links)
**Files:** All 7 `blog-category-*.html` files
**Fix:** Replace footer with standard 4-column footer matching other pages

---

### Task C6: Blog category pages missing disclaimer bar
**Status:** DONE (already fixed)
**Issue:** No disclaimer bar before footer — legal risk
**Files:** All 7 `blog-category-*.html` files
**Fix:** Add `<div class="disclaimer-bar">...</div>` before footer

---

## HIGH (Should fix soon)

### Task H1: CSS version mismatch
**Status:** OPEN
**Issue:** Some files use `?v=2`, blog-post.njk uses `?v=3`
**Files:** All HTML files
**Fix:** Standardize all CSS links to `?v=3`

---

### Task H2: No USA pathways in pathways.json
**Status:** DONE
**Issue:** USA country exists but no pathways defined — empty country page
**Files:** `src/data/pathways.json`
**Fix:** Add at least US-student and US-work pathways with evidence_required status

---

### Task H3: Business playbook missing related articles
**Status:** DONE
**Issue:** Student/Professional playbooks have related articles section, Business doesn't
**Files:** `src/pages/business-playbook.html`
**Fix:** Add related articles section linking to US LLC blog post

---

### Task H4: Instagram handle typo
**Status:** OPEN
**Issue:** `mymypathway2global` (double "my") in footer
**Files:** All 7 `blog-category-*.html` files
**Fix:** Change to `mypathway2global`

---

### Task H5: Social links unverified note
**Status:** OPEN
**Issue:** Contact page says "Social profiles are not yet verified"
**Files:** `src/pages/contact.html`
**Fix:** Either verify profiles or remove the note and unverified links

---

## MEDIUM (Polish items)

### Task M1: No OG image
**Status:** OPEN
**Issue:** Missing `og:image` meta tag on most pages — poor social sharing
**Files:** All HTML pages without og:image
**Fix:** Add default OG image `/assets/og-default.png` to all pages

---

### Task M2: No sitemap.xml with lastmod
**Status:** OPEN
**Issue:** Sitemap exists but no lastmod dates — hurts SEO
**Files:** Build process / `scripts/`
**Fix:** Generate sitemap with lastmod dates from file modification times

---

### Task M3: No robots.txt
**Status:** OPEN
**Issue:** Missing robots.txt file
**Files:** `public/robots.txt` or `dist/robots.txt`
**Fix:** Create robots.txt allowing all crawlers, pointing to sitemap

---

### Task M4: Calculator shows empty results
**Status:** OPEN
**Issue:** All `trueCost` values are null — calculator appears broken
**Files:** `src/data/countries.json`
**Fix:** Either populate trueCost for top 5 countries OR add explanatory UI when no results

---

### Task M5: Newsletter forms non-functional
**Status:** OPEN
**Issue:** Shows "Coming soon" but no actual email capture
**Files:** `src/pages/blog.html`, blog category pages
**Fix:** Either integrate Mailchimp/ConvertKit OR remove forms entirely

---

### Task M6: No 404 page
**Status:** OPEN
**Issue:** Missing custom 404 page — poor UX on broken links
**Files:** `src/pages/404.html` (create)
**Fix:** Create branded 404 page with navigation back to main content

---

### Task M7: Blog category hero section
**Status:** OPEN
**Issue:** `blog-category-*.html` has gradient hero (`blog-hero` class) — should be white page-header
**Files:** All 7 `blog-category-*.html` files
**Fix:** Replace `<section class="blog-hero">` with `<div class="page-header">`

---

## LOW (Nice to have)

### Task L1: No favicon fallback
**Status:** OPEN
**Issue:** Only SVG favicon, no PNG/ICO fallback for old browsers
**Files:** `<head>` in all HTML files
**Fix:** Add `<link rel="icon" type="image/png" href="/assets/icons/favicon.png">`

---

### Task L2: No manifest.json
**Status:** OPEN
**Issue:** PWA manifest missing — can't install as mobile app
**Files:** `public/manifest.json` (create)
**Fix:** Create basic PWA manifest with app name, icons, theme color

---

### Task L3: No structured data on homepage
**Status:** OPEN
**Issue:** Missing Organization schema on homepage
**Files:** `src/index.html`
**Fix:** Add JSON-LD Organization schema

---

### Task L4: Playbook page badges have emojis
**Status:** DONE
**Issue:** `&#x1F393;` (🎓) in student-playbook badge
**Files:**
- `src/pages/student-playbook.html`
**Fix:** Remove emoji from page-header-badge, use text only

---

### Task L5: Mixed prose styling
**Status:** OPEN
**Issue:** Some pages use `.prose`, others use `.about-section` — CSS bloat
**Files:** Various
**Fix:** Consolidate to single prose class pattern

---

## Execution Priority

### Phase 1: CRITICAL (Do now)
```
C1 ✅ → C2 ✅ → C3 ✅ → C4 ✅ → C5 ✅ → C6 ✅
```
**Status:** COMPLETE
**Outcome:** Tests pass, data accurate, brand consistent, legal covered

### Phase 2: HIGH (Do next)
```
H1 → H2 ✅ → H3 ✅ → H4 → H5
```
**Status:** 2/5 COMPLETE
**Remaining:** H1 (CSS version), H4 (Instagram typo), H5 (Social links note)

### Phase 3: MEDIUM (Polish)
```
M1 → M2 → M3 → M4 → M5 → M6 → M7
```
**Status:** 0/7 COMPLETE
**Outcome:** SEO improved, tools functional, UX polished

### Phase 4: LOW (Nice to have)
```
L1 → L2 → L3 → L4 ✅ → L5
```
**Status:** 1/5 COMPLETE
**Remaining:** L1 (favicon), L2 (manifest), L3 (schema), L5 (CSS consolidation)

---

## Quick Reference

| ID | Task | Priority | Est. Time |
|----|------|----------|-----------|
| C1 | Fix tests (27 countries) | CRITICAL | ✅ DONE |
| C2 | Homepage stats | CRITICAL | ✅ DONE |
| C3 | Email domain | CRITICAL | ✅ DONE |
| C4 | Remove emojis from category pages | CRITICAL | ✅ DONE |
| C5 | Fix category page footers | CRITICAL | ✅ DONE |
| C6 | Add disclaimer to category pages | CRITICAL | ✅ DONE |
| H1 | CSS version standardize | HIGH | OPEN |
| H2 | Add USA pathways | HIGH | ✅ DONE |
| H3 | Business playbook related articles | HIGH | ✅ DONE |
| H4 | Fix Instagram typo | HIGH | OPEN |
| H5 | Social links note | HIGH | OPEN |
| M1 | OG images | MEDIUM | 20 min |
| M2 | Sitemap lastmod | MEDIUM | 30 min |
| M3 | robots.txt | MEDIUM | 5 min |
| M4 | Calculator empty state | MEDIUM | 15 min |
| M5 | Newsletter integration | MEDIUM | 30 min |
| M6 | 404 page | MEDIUM | 15 min |
| M7 | Category page headers | MEDIUM | 15 min |
| L1 | Favicon fallback | LOW | 10 min |
| L2 | PWA manifest | LOW | 15 min |
| L3 | Homepage Organization schema | LOW | 10 min |
| L4 | Playbook emoji removal | LOW | ✅ DONE |
| L5 | Consolidate prose CSS | LOW | 20 min |

**Completed:** 10/23 tasks
**Remaining:** 13 tasks (~3.5 hours)

---

*Created: 2026-10-25*
*Last updated: 2026-10-25*
*Status: In progress*
