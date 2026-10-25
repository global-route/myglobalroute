# Enhancement Task File — 2026-10-25

## Overview
12 identified weaknesses, prioritized and executed.

---

## Task 1: Nav Inconsistency (HIGH) ✅ COMPLETE
**Issue:** Nav order differs across pages
**Fix:** Standardized to: Home → Countries → Calculator → Blog → About → Find MyPathway (CTA)
**Files updated:** All 15 HTML files in src/pages/ and src/index.html

---

## Task 2: Blog Template Connection (HIGH) ✅ COMPLETE
**Issue:** Eleventy uses blog-post.njk, needed sync with new design
**Fix:** Updated src/templates/blog-post.njk with:
- Classic editorial layout
- Consistent nav
- Breadcrumb schema
- Article schema
- Proper footer

---

## Task 3: USA in countries.json (HIGH) ✅ COMPLETE
**Issue:** USA missing from countries.json but blog post exists
**Fix:** Added USA entry with USCIS source
**Result:** Now 27 countries (was 26)

---

## Task 4: Compare Bar Styling (MEDIUM) ✅ COMPLETE
**Issue:** border-radius:999px on compare bar
**Fix:** Changed to border-radius:2px in countries.html

---

## Task 5: Schema Markup — FAQ (MEDIUM) ✅ ALREADY DONE
**Issue:** No FAQPage schema on faq.html
**Status:** Already had FAQPage schema — no action needed

---

## Task 6: Schema Markup — Breadcrumbs (MEDIUM) ✅ COMPLETE
**Issue:** No BreadcrumbList on key pages
**Fix:** Added BreadcrumbList schema to:
- countries.html
- blog.html
- blog-post.njk (for all blog posts)

---

## Task 7: Newsletter Form Placeholder (MEDIUM) ✅ COMPLETE
**Issue:** Forms submit to nowhere
**Fix:** Added onsubmit handler showing "Coming soon" feedback

---

## Task 8: Content Gaps Documentation (MEDIUM) ✅ COMPLETE
**Issue:** Missing country audits for major destinations
**Fix:** Added content backlog to ACTIVE_SPRINT.md:
- Australia, France, Netherlands, Ireland, New Zealand audits
- More case studies
- Additional guides

---

## Task 9: Data Staleness Note (LOW) ✅ COMPLETE
**Issue:** asOf date was 2026-09-05
**Fix:** Updated to 2026-10-25 in countries.json

---

## Task 10: Mobile Nav Verification (LOW) ✅ VERIFIED
**Issue:** Mobile nav needs JS verification
**Status:** app.js has proper toggle handler with:
- Backdrop overlay
- Body scroll lock
- ARIA attributes
- Hamburger animation

---

## Task 11: Playbook Pages Enhancement (LOW) ✅ COMPLETE
**Issue:** Playbook pages could link to blog posts
**Fix:** Added "Related articles" section to:
- student-playbook.html (4 links)
- professional-playbook.html (4 links)

---

## Task 12: Calculator Data Note (LOW) ⏳ DEFERRED
**Issue:** Calculator results empty due to null trueCost
**Status:** Deferred — requires data population effort
**Note:** Calculator already shows explanatory text when no results

---

## Execution Summary

| Task | Priority | Status |
|------|----------|--------|
| 1. Nav consistency | HIGH | ✅ Complete |
| 2. Blog template | HIGH | ✅ Complete |
| 3. USA country | HIGH | ✅ Complete |
| 4. Compare bar | MEDIUM | ✅ Complete |
| 5. FAQ schema | MEDIUM | ✅ Already done |
| 6. Breadcrumbs | MEDIUM | ✅ Complete |
| 7. Newsletter | MEDIUM | ✅ Complete |
| 8. Content backlog | MEDIUM | ✅ Documented |
| 9. Data date | LOW | ✅ Complete |
| 10. Mobile nav | LOW | ✅ Verified |
| 11. Playbook links | LOW | ✅ Complete |
| 12. Calculator note | LOW | ⏳ Deferred |

**Result:** 11/12 tasks complete, 1 deferred (requires data work)

---

## Deployment

- Build: 163 files (was 162 — USA country page added)
- Deploy: 39 files uploaded
- Version: c2f008aa-44e5-4273-a362-ca5679767b61
- Live: https://mypathway2global.org.uk

---

*Completed: 2026-10-25*
