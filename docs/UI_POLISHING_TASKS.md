# UI/UX Polishing Tasks - Pages & Content

**Generated:** January 2026  
**Scope:** All pages, content, and UI components beyond blog posts

---

## Executive Summary

| Area | Critical | High | Medium | Low |
|------|----------|------|--------|-----|
| **Homepage** | 0 | 2 | 3 | 2 |
| **Countries Page** | 1 | 3 | 2 | 1 |
| **Find MyPathway** | 1 | 2 | 3 | 2 |
| **Visa Wizard** | 0 | 2 | 3 | 1 |
| **Calculator** | 0 | 2 | 2 | 1 |
| **Content (40+ posts)** | 2 | 5 | 4 | 3 |
| **Global UI** | 1 | 3 | 4 | 2 |
| **TOTAL** | **5** | **19** | **21** | **12** |

---

## SECTION 1: HOMEPAGE (index.html)

### 1.1 HIGH: Stats Line Inconsistency
**Issue:** Header says "30 countries" but stats line says "30 countries · 69 pathways"
**Location:** `src/index.html` line ~70
**Fix:** Verify actual counts from data files and update consistently

### 1.2 HIGH: Featured Guides Links May Be Broken
**Issue:** Links point to `/blog/country-audits/germany/...` but actual files are in `/content/blog/country-audits/`
**Fix:** Verify all featured guide links resolve correctly after build

### 1.3 MEDIUM: Tools Split Section Mobile Layout
**Issue:** Two-column grid doesn't stack well on narrow tablets (768-900px)
**Fix:** Add intermediate breakpoint
```css
@media (min-width: 768px) and (max-width: 900px) {
  .tools-split-grid { grid-template-columns: 1fr; }
}
```

### 1.4 MEDIUM: Missing Loading State for Dynamic Content
**Issue:** No skeleton loaders if JS fails to load
**Fix:** Add `<noscript>` fallback content

### 1.5 MEDIUM: CTA Final Section Contrast
**Issue:** White text on dark navy may not meet AAA contrast in all conditions
**Fix:** Verify contrast ratio, consider slightly lighter background

### 1.6 LOW: No Testimonials/Social Proof
**Issue:** Homepage lacks user testimonials or success metrics
**Recommendation:** Add testimonial section or trust badges

### 1.7 LOW: Missing Breadcrumb Schema
**Issue:** Homepage lacks BreadcrumbList schema (only has Organization/WebSite)
**Fix:** Add breadcrumb schema for SEO

---

## SECTION 2: COUNTRIES PAGE (countries.html)

### 2.1 CRITICAL: Title Mismatch
**Issue:** `<title>` says "30-Country Directory" but page header says "Country Directory"
**Location:** `src/pages/countries.html` line 9
**Fix:** Standardize to actual count from data (currently 30 countries in JSON)

### 2.2 HIGH: Compare Bar Inline Styles
**Issue:** Compare bar uses extensive inline styles instead of CSS classes
**Location:** Line ~55-60
**Fix:** Move to `enhancements.css` for maintainability

### 2.3 HIGH: Filter Controls Accessibility
**Issue:** Filter dropdowns lack `aria-describedby` for helper text
**Fix:** Add aria attributes to filter controls

### 2.4 HIGH: Empty State Not Styled
**Issue:** "Loading country intelligence..." has no visual treatment
**Fix:** Add skeleton loader or spinner

### 2.5 MEDIUM: Region Filter Has Duplicate Categories
**Issue:** Both "Asia-Pacific" and "Asia" exist as separate options
**Fix:** Consolidate or clarify distinction

### 2.6 MEDIUM: Budget Filter Currency Assumption
**Issue:** Filter says "USD" but some countries use EUR/GBP
**Fix:** Add note about currency conversion or use "USD equivalent"

### 2.7 LOW: No Pagination for Large Results
**Issue:** All 30 countries load at once
**Recommendation:** Consider lazy loading for performance

---

## SECTION 3: FIND MYPATHWAY (find-mypathway.html)

### 3.1 CRITICAL: Inline JavaScript Too Large
**Issue:** ~400 lines of inline JS in HTML file
**Location:** Lines 100-500+
**Fix:** Extract to separate `find-mypathway.js` file

### 3.2 HIGH: Form Validation UX
**Issue:** No inline validation feedback, errors only shown on submit
**Fix:** Add real-time validation with aria-live regions

### 3.3 HIGH: Gap Analysis Hardcoded Value
**Issue:** Line ~380 has template literal with hardcoded gap amount in event listener
```javascript
const months = Math.ceil(${gapAmount} / rate);
```
**Fix:** Use closure variable properly

### 3.4 MEDIUM: Two Info Cards Grid Breaks on Mobile
**Issue:** "What this tool does" cards use `grid-template-columns: 1fr 1fr` without responsive fallback
**Fix:** Add mobile breakpoint to stack cards

### 3.5 MEDIUM: Export JSON Button Hidden by Default
**Issue:** Export functionality exists but not discoverable
**Fix:** Show export option more prominently after results

### 3.6 MEDIUM: No Results Empty State
**Issue:** "No pathway matches" message could be more helpful
**Fix:** Add suggestions for broadening search

### 3.7 LOW: Form Labels Not Properly Associated
**Issue:** Some labels wrap inputs instead of using `for` attribute
**Fix:** Use explicit label-input association

### 3.8 LOW: Missing Form Reset Button
**Issue:** No easy way to clear all filters
**Fix:** Add "Clear all" button

---

## SECTION 4: VISA WIZARD (visa-wizard.html)

### 4.1 HIGH: Progress Bar Not Keyboard Accessible
**Issue:** Progress indicator is visual only
**Fix:** Add `aria-valuenow`, `aria-valuemin`, `aria-valuemax` (partially done)

### 4.2 HIGH: Purpose/Budget Buttons Not Keyboard Navigable
**Issue:** Custom button grid lacks proper focus management
**Fix:** Add `role="radiogroup"` and arrow key navigation

### 4.3 MEDIUM: Step Transitions Not Animated
**Issue:** Steps appear/disappear abruptly
**Fix:** Add CSS transitions for smoother UX

### 4.4 MEDIUM: No Back Button on Step 1
**Issue:** First step shows empty `<span>` where back button would be
**Fix:** Hide nav row or show disabled state

### 4.5 MEDIUM: Destination Dropdown Very Long
**Issue:** 30+ options in single dropdown, hard to scan
**Fix:** Consider searchable dropdown or grouped display

### 4.6 LOW: Missing "Skip" Option
**Issue:** Users must complete all 5 steps even if some don't apply
**Recommendation:** Add "Skip this step" for optional fields

---

## SECTION 5: CALCULATOR (calculator.html)

### 5.1 HIGH: Results Container Display Logic
**Issue:** Results hidden with `style="display:none"` instead of `hidden` attribute
**Fix:** Use semantic `hidden` attribute for accessibility

### 5.2 HIGH: No Input Validation Feedback
**Issue:** Required fields don't show validation errors
**Fix:** Add inline error messages

### 5.3 MEDIUM: Calculator Layout on Tablet
**Issue:** Side-by-side layout may be cramped on smaller tablets
**Fix:** Adjust breakpoint for calculator-layout grid

### 5.4 MEDIUM: "How it works" Section Redundant
**Issue:** Four cards explaining calculator seem excessive
**Fix:** Condense to 2 cards or inline text

### 5.5 LOW: No Currency Selector
**Issue:** Assumes USD for all inputs
**Recommendation:** Add currency toggle for local currencies

---

## SECTION 6: CONTENT DIRECTORY (40+ Posts in /content/blog/)

### 6.1 CRITICAL: Country Audits Missing Images
**Issue:** 38 country audit posts likely have same image path issues as main blog
**Location:** `/content/blog/country-audits/*/`
**Fix:** Audit all frontmatter image paths

### 6.2 CRITICAL: Playbooks Missing Disclaimers
**Issue:** Professional/student/business playbooks in `/content/blog/playbooks/` need legal disclaimers
**Fix:** Add disclaimer footer to all playbook posts

### 6.3 HIGH: Guides Section Incomplete
**Issue:** Many guide posts may have placeholder content
**Location:** `/content/blog/guides/`
**Fix:** Audit content completeness

### 6.4 HIGH: Policy Updates Section
**Issue:** Only one policy update exists (Canada SDS cancellation)
**Location:** `/content/blog/policy-updates/2026/`
**Recommendation:** Add more policy updates or remove section

### 6.5 HIGH: Case Studies Section Sparse
**Issue:** Only 2 case studies exist
**Location:** `/content/blog/case-studies/`
**Recommendation:** Add more case studies or merge with main blog

### 6.6 HIGH: Duplicate Content Risk
**Issue:** Chisom case study exists in both:
  - `/src/content/blog/07-case-study-chisom-canada.md`
  - `/content/blog/case-studies/success-stories/chisom-nigeria-to-canada-software-engineer.md`
**Fix:** Consolidate to single source of truth

### 6.7 MEDIUM: Inconsistent Frontmatter Schema
**Issue:** Different post types may use different frontmatter fields
**Fix:** Standardize frontmatter across all content types

### 6.8 MEDIUM: Missing Category Pages
**Issue:** Blog category pages exist but may not link to all content
**Fix:** Verify category page generation includes all posts

### 6.9 MEDIUM: No Content Freshness Indicators
**Issue:** Posts don't show "last verified" dates prominently
**Fix:** Add freshness badges to all content types

### 6.10 LOW: Missing Author Information
**Issue:** All posts use "Global Route Team" without individual attribution
**Recommendation:** Consider adding author profiles

### 6.11 LOW: No Reading Time Calculation
**Issue:** `readTime` is hardcoded in frontmatter
**Fix:** Calculate dynamically from word count

### 6.12 LOW: Missing Related Posts
**Issue:** Related posts section exists in template but not populated
**Fix:** Implement related posts algorithm

---

## SECTION 7: GLOBAL UI COMPONENTS

### 7.1 CRITICAL: Mobile Navigation Overlay Z-Index
**Issue:** Nav backdrop may conflict with other fixed elements
**Location:** `enhancements.css` line ~450
**Fix:** Audit z-index stack across all components

### 7.2 HIGH: Search Modal Empty State
**Issue:** "No results" message could be more helpful
**Fix:** Add suggestions or popular searches

### 7.3 HIGH: Footer Links Inconsistent
**Issue:** Some pages have different footer link structures
**Fix:** Standardize footer across all pages

### 7.4 HIGH: Consent Banner Positioning
**Issue:** Analytics consent banner may overlap with mobile footer
**Location:** `styles.css` consent section
**Fix:** Add bottom padding when consent visible

### 7.5 MEDIUM: Loading States Inconsistent
**Issue:** Different pages use different loading indicators
**Fix:** Standardize skeleton/spinner components

### 7.6 MEDIUM: Error States Missing
**Issue:** No global error handling UI for failed API calls
**Fix:** Add error boundary component

### 7.7 MEDIUM: Toast/Notification System Missing
**Issue:** No way to show success/error messages
**Recommendation:** Add toast notification component

### 7.8 MEDIUM: Print Styles Incomplete
**Issue:** Print styles exist but don't cover all page types
**Fix:** Extend print styles to calculator, wizard, etc.

### 7.9 LOW: No Dark Mode
**Issue:** Site doesn't respect `prefers-color-scheme: dark`
**Recommendation:** Add dark mode support

### 7.10 LOW: No Reduced Motion Support
**Issue:** Animations don't respect `prefers-reduced-motion`
**Fix:** Add media query for reduced motion (partially exists)

---

## SECTION 8: DATA FILES

### 8.1 Countries Data (countries.json)
- 30 countries defined
- All have `dataStatus: "evidence_required"` - no verified data yet
- Missing: Ghana, Rwanda, Saudi Arabia, UAE, Qatar, Oman (mentioned in content but not in data)

### 8.2 Pathways Data (pathways.json)
- Need to verify pathway count matches homepage claim (69)
- Check for orphaned pathways (country doesn't exist)

### 8.3 Blog Posts Data (blog-posts.json)
- Verify all posts are indexed
- Check for missing metadata

---

## SECTION 9: IMPLEMENTATION PRIORITY

### Phase 1: Critical (Week 1)
1. [ ] Fix countries page title mismatch
2. [ ] Extract Find MyPathway inline JS
3. [ ] Audit all content image paths
4. [ ] Add disclaimers to playbooks
5. [ ] Fix mobile nav z-index issues
6. [ ] Resolve duplicate Chisom case study

### Phase 2: High Priority (Week 2)
1. [ ] Fix compare bar inline styles
2. [ ] Add form validation feedback
3. [ ] Fix gap analysis hardcoded value
4. [ ] Improve search modal empty state
5. [ ] Standardize footer across pages
6. [ ] Audit guide content completeness

### Phase 3: Medium Priority (Week 3-4)
1. [ ] Add responsive breakpoints for grids
2. [ ] Implement step transitions in wizard
3. [ ] Standardize loading states
4. [ ] Add error handling UI
5. [ ] Extend print styles
6. [ ] Add content freshness indicators

### Phase 4: Low Priority (Backlog)
1. [ ] Dark mode support
2. [ ] Toast notification system
3. [ ] Author profiles
4. [ ] Dynamic reading time
5. [ ] Related posts algorithm
6. [ ] Currency selector

---

## SECTION 10: TESTING CHECKLIST

### Functional Testing
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Filters produce expected results
- [ ] Calculator produces accurate output
- [ ] Wizard completes successfully
- [ ] Search returns relevant results

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari iOS
- [ ] Chrome Android

### Accessibility Testing
- [ ] Keyboard navigation all pages
- [ ] Screen reader compatibility
- [ ] Color contrast verification
- [ ] Focus indicators visible
- [ ] Form labels associated
- [ ] ARIA attributes correct

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 4s
- [ ] No layout shifts (CLS < 0.1)

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Owner:** Development Team
