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
**Status:** DONE (already resolved — no ?v=2 found in scan)

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
**Status:** DONE (already resolved — no mymypathway found in scan)

---

### Task H5: Social links unverified note
**Status:** DONE
**Issue:** Contact page says "Social profiles are not yet verified"
**Files:** `src/pages/contact.html`
**Fix:** Removed unverified social block; email is now the only listed channel

---

## MEDIUM (Polish items)

### Task M1: No OG image
**Status:** DONE
**Issue:** Missing `og:image` meta tag on most pages — poor social sharing
**Files:** All 21 HTML pages + blog-post.njk template
**Fix:** Added og:image, og:image:width/height, twitter:image, twitter:site to all pages

---

### Task M2: No sitemap.xml with lastmod
**Status:** DONE
**Issue:** Sitemap had stale find-my-route URL, missing USA, missing all 17 blog posts
**Files:** `public/sitemap.xml`
**Fix:** Fixed stale URL, added USA country page, added all 17 blog posts

---

### Task M3: No robots.txt
**Status:** DONE
**Issue:** robots.txt existed but had no Sitemap: directive
**Files:** `public/robots.txt`
**Fix:** Added `Sitemap: https://mypathway2global.org.uk/sitemap.xml`

---

### Task M4: Calculator shows empty results
**Status:** DONE
**Issue:** All `trueCost` values are null — calculator appeared broken
**Files:** `src/pages/calculator.html`, `src/js/app.js`
**Fix:** Added `.ns_callout` explanatory note inside results; wired JS to show it when all costs are null

---

### Task M5: Newsletter forms non-functional
**Status:** DONE
**Issue:** Fake `onsubmit` handler — no real capture
**Files:** `src/pages/blog.html`
**Fix:** Replaced fake form with honest `.ns_callout` CTA linking to contact page

---

### Task M6: No 404 page
**Status:** DONE
**Issue:** Missing custom 404 page — poor UX on broken links
**Files:** `src/pages/404.html`
**Fix:** Created branded 404 page with page-header, link-list to key pages, standard footer

---

### Task M7: Blog category hero section
**Status:** DONE (already resolved — all category pages already use page-header)

---

## LOW (Nice to have)

### Task L1: No favicon fallback
**Status:** DONE
**Issue:** Only SVG favicon, no PNG/ICO fallback
**Files:** All 21 HTML pages + 404.html
**Fix:** Added `<link rel="icon" type="image/png">` and `<link rel="apple-touch-icon">` to all pages
**Note:** Requires `public/assets/icons/favicon.png` image file (owner action)

---

### Task L2: No manifest.json
**Status:** DONE
**Issue:** PWA manifest missing
**Files:** `public/manifest.json`
**Fix:** Created manifest with name, short_name, theme_color, background_color, icons
**Note:** Requires `public/assets/icons/favicon.png` image file (owner action)

---

### Task L3: No structured data on homepage
**Status:** DONE
**Issue:** Missing Organization schema on homepage
**Files:** `src/index.html`
**Fix:** Added Organization JSON-LD + WebSite JSON-LD with SearchAction

---

### Task L4: Playbook page badges have emojis
**Status:** DONE
**Issue:** `&#x1F393;` (🎓) in student-playbook badge
**Files:**
- `src/pages/student-playbook.html`
**Fix:** Remove emoji from page-header-badge, use text only

---

### Task L5: Mixed prose styling
**Status:** DONE
**Issue:** `disclaimer.html`, `terms.html`, `privacy.html` used `.about-section`
**Files:** 3 pages updated
**Fix:** Changed `class="about-section"` to `class="prose"` in all 3 files

---

## Execution Priority

### Phase 1: CRITICAL
```
C1 ✅ → C2 ✅ → C3 ✅ → C4 ✅ → C5 ✅ → C6 ✅
```
**Status:** COMPLETE

### Phase 2: HIGH
```
H1 ✅ → H2 ✅ → H3 ✅ → H4 ✅ → H5 ✅
```
**Status:** COMPLETE

### Phase 3: MEDIUM
```
M1 ✅ → M2 ✅ → M3 ✅ → M4 ✅ → M5 ✅ → M6 ✅ → M7 ✅
```
**Status:** COMPLETE

### Phase 4: LOW
```
L1 ✅ → L2 ✅ → L3 ✅ → L4 ✅ → L5 ✅
```
**Status:** COMPLETE

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
| H1 | CSS version standardize | HIGH | ✅ DONE (already resolved) |
| H2 | Add USA pathways | HIGH | ✅ DONE |
| H3 | Business playbook related articles | HIGH | ✅ DONE |
| H4 | Fix Instagram typo | HIGH | ✅ DONE (already resolved) |
| H5 | Social links note | HIGH | ✅ DONE |
| M1 | OG images | MEDIUM | ✅ DONE |
| M2 | Sitemap fix + blog posts | MEDIUM | ✅ DONE |
| M3 | robots.txt Sitemap directive | MEDIUM | ✅ DONE |
| M4 | Calculator empty state | MEDIUM | ✅ DONE |
| M5 | Newsletter fake form removed | MEDIUM | ✅ DONE |
| M6 | 404 page | MEDIUM | ✅ DONE |
| M7 | Category page headers | MEDIUM | ✅ DONE (already resolved) |
| L1 | Favicon PNG fallback | LOW | ✅ DONE (needs image asset) |
| L2 | PWA manifest | LOW | ✅ DONE (needs image asset) |
| L3 | Homepage Organization schema | LOW | ✅ DONE |
| L4 | Playbook emoji removal | LOW | ✅ DONE |
| L5 | Consolidate prose CSS | LOW | ✅ DONE |

**Completed:** 23/23 tasks
**Remaining owner actions:**
- Create `public/assets/og-default.png` (1200×630px, navy bg, white wordmark)
- Create `public/assets/icons/favicon.png` (32×32px + 180×180px export from SVG)

---

*Created: 2026-10-25*
*Last updated: 2026-10-25*
*Status: ALL CODE TASKS COMPLETE*
