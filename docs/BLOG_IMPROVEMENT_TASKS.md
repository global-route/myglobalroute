# Blog Posts Improvement Task Document

**Generated:** January 2026  
**Scope:** All 7 blog posts in `/src/content/blog/`  
**Focus:** Text formatting, page layout, responsive design, and content issues

---

## Executive Summary

| Category | Critical | High | Medium | Low |
|----------|----------|------|--------|-----|
| **Responsive/Layout** | 3 | 5 | 4 | 2 |
| **Typography** | 1 | 3 | 4 | 2 |
| **Content Issues** | 2 | 5 | 6 | 3 |
| **Image/Media** | 7 | 0 | 0 | 0 |
| **Accessibility** | 1 | 2 | 3 | 1 |
| **TOTAL** | **14** | **15** | **17** | **8** |

---

## SECTION 1: RESPONSIVE & LAYOUT ISSUES

### 1.1 CRITICAL: Tables Overflow on Mobile (All Posts)

**Affected Posts:** 01, 02, 03, 04, 05, 06, 07  
**Breakpoint:** < 480px  
**Issue:** Tables with 4+ columns overflow viewport, no horizontal scroll indicator

**Current CSS (blog-post.css:137-150):**
```css
.article-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.9rem;
}
```

**Problem:** No `overflow-x: auto` wrapper, table cells don't stack on mobile

**Fix Required:**
```css
.article-body .table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 1.5rem 0;
}

@media (max-width: 480px) {
  .article-body table {
    font-size: 0.75rem;
    min-width: 500px;
  }
  .article-body th,
  .article-body td {
    padding: 0.4rem 0.5rem;
  }
}
```

**Files to Modify:**
- `src/css/blog-post.css` - Add table wrapper styles
- `src/js/blog-post.js` - Auto-wrap tables in `.table-wrapper` div

---

### 1.2 CRITICAL: Code Blocks Overflow on Mobile

**Affected Posts:** 04, 06, 07  
**Breakpoint:** < 640px  
**Issue:** Pre-formatted code blocks extend beyond viewport

**Current CSS (blog-post.css:175-185):**
```css
.article-body pre {
  margin: 1.5rem 0;
  padding: 1.25rem;
  background: #1e293b;
  border-radius: 2px;
  overflow-x: auto;
}
```

**Problem:** `overflow-x: auto` exists but no max-width constraint, scrollbar not visible on iOS

**Fix Required:**
```css
.article-body pre {
  max-width: 100%;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 640px) {
  .article-body pre {
    padding: 1rem;
    font-size: 0.8rem;
    margin-left: -1rem;
    margin-right: -1rem;
    border-radius: 0;
  }
}
```

---

### 1.3 CRITICAL: Article Max-Width Too Narrow on Tablets

**Breakpoint:** 768px - 1024px  
**Issue:** Article container fixed at 680px, wastes space on tablets

**Current CSS (blog-post.css:8-12):**
```css
.article {
  max-width: 680px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}
```

**Fix Required:**
```css
@media (min-width: 768px) and (max-width: 1024px) {
  .article {
    max-width: 720px;
    padding: 3rem 2rem 4rem;
  }
}
```

---

### 1.4 HIGH: Checklist Items Don't Wrap Properly

**Affected Posts:** 01, 02, 03, 04, 05  
**Issue:** Checkbox list items (`- [ ]`) render as plain text, no visual checkbox

**Current Rendering:** `- [ ] Get university transcripts` displays as bullet with `[ ]` text

**Fix Required:** Add CSS for task list styling or use JS to convert to actual checkboxes

```css
.article-body ul li input[type="checkbox"] {
  margin-right: 0.5rem;
  accent-color: var(--color-primary);
}

.article-body .task-list-item {
  list-style: none;
  margin-left: -1.5rem;
}
```

---

### 1.5 HIGH: Blockquotes Too Wide on Mobile

**Affected Posts:** 07 (Case Study)  
**Breakpoint:** < 480px  
**Issue:** Blockquotes with long quotes overflow or have cramped padding

**Current CSS (blog-post.css:119-128):**
```css
.article-body blockquote {
  margin: 2rem 0;
  padding: 1rem 1.5rem;
  border-left: 3px solid #ffc947;
  background: #fafbfc;
}
```

**Fix Required:**
```css
@media (max-width: 480px) {
  .article-body blockquote {
    margin: 1.5rem -1rem;
    padding: 1rem;
    border-left-width: 2px;
  }
}
```

---

### 1.6 HIGH: Nested Lists Indentation Excessive on Mobile

**Affected Posts:** 01, 02, 03, 05  
**Issue:** Nested `ul > ul` creates 3rem+ indentation, pushes content off-screen

**Fix Required:**
```css
@media (max-width: 480px) {
  .article-body ul ul,
  .article-body ol ol {
    padding-left: 1rem;
    margin-left: 0;
  }
}
```

---

### 1.7 HIGH: H2 Border Extends Full Width

**All Posts**  
**Issue:** H2 yellow underline (`border-bottom: 2px solid #ffc947`) extends full container width, looks unbalanced

**Current CSS (blog-post.css:72-80):**
```css
.article-body h2 {
  border-bottom: 2px solid #ffc947;
}
```

**Fix Required:** Use pseudo-element for partial underline
```css
.article-body h2 {
  border-bottom: none;
  position: relative;
  padding-bottom: 0.75rem;
}

.article-body h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: #ffc947;
}
```

---

### 1.8 HIGH: Article Footer Share Buttons Stack Poorly

**Breakpoint:** < 400px  
**Issue:** Share buttons wrap awkwardly, "Share:" label orphaned

**Fix Required:**
```css
@media (max-width: 400px) {
  .article-share {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
```

---

### 1.9 MEDIUM: No Reading Progress Indicator

**All Posts**  
**Issue:** Long-form content (8-10 min reads) lacks scroll progress indicator

**Fix Required:** Add progress bar component
```css
.reading-progress {
  position: fixed;
  top: 70px;
  left: 0;
  height: 3px;
  background: var(--color-primary);
  z-index: 100;
  transition: width 0.1s;
}
```

---

### 1.10 MEDIUM: Meta Information Cramped on Mobile

**Breakpoint:** < 480px  
**Issue:** Article meta (category / date / read time) wraps poorly

**Fix Required:**
```css
@media (max-width: 480px) {
  .article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
  .meta-sep {
    display: none;
  }
  .article-meta > * {
    display: block;
  }
}
```

---

### 1.11 MEDIUM: Print Styles Incomplete

**All Posts**  
**Issue:** Print stylesheet hides useful content, doesn't optimize for paper

**Current CSS (blog-post.css:260-280):** Basic print rules exist

**Missing:**
- Page break controls for tables
- QR code for article URL
- Proper heading hierarchy for TOC

---

### 1.12 MEDIUM: Landscape Mobile Layout Suboptimal

**Breakpoint:** Landscape phones (max-height: 500px)  
**Issue:** Article header consumes too much vertical space

**Fix Required:**
```css
@media (max-height: 500px) and (orientation: landscape) {
  .article-header {
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
  }
  .article-header h1 {
    font-size: 1.5rem;
  }
}
```

---

### 1.13 LOW: No Dark Mode Support

**All Posts**  
**Issue:** No `prefers-color-scheme: dark` media query

---

### 1.14 LOW: Sidebar Ad Space Not Utilized

**Desktop Only**  
**Issue:** Blog posts don't use sidebar layout on wide screens (>1200px)

---

## SECTION 2: TYPOGRAPHY ISSUES

### 2.1 CRITICAL: Font Loading Flash (FOUT)

**All Posts**  
**Issue:** 'Titillium Web' and 'Roboto' fonts not preloaded, causes layout shift

**Fix Required:** Add to `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600;700&family=Roboto:wght@300;400;500&display=swap">
```

---

### 2.2 HIGH: Line Length Too Long on Wide Screens

**Breakpoint:** > 1024px  
**Issue:** Article body at 680px with 1.05rem font = ~85 characters per line (ideal: 65-75)

**Fix Required:**
```css
.article-body {
  font-size: 1.1rem; /* Increase slightly */
}

@media (min-width: 1024px) {
  .article {
    max-width: 720px;
  }
}
```

---

### 2.3 HIGH: Heading Hierarchy Inconsistent

**Affected Posts:** 01, 02, 03  
**Issue:** Posts jump from H2 to H4, skip H3 in some sections

**Example (Post 01):**
```markdown
## The African Reality        <- H2
### Real Approval Rates       <- H3
#### For your parents:        <- H4 (should be H3)
```

**Fix Required:** Audit all posts for proper heading hierarchy

---

### 2.4 HIGH: Bold Text Too Light

**All Posts**  
**Issue:** `font-weight: 500` for `<strong>` barely distinguishable from 300 body weight

**Current CSS (blog-post.css:107-110):**
```css
.article-body strong {
  font-weight: 500;
  color: #111827;
}
```

**Fix Required:**
```css
.article-body strong {
  font-weight: 600;
}
```

---

### 2.5 MEDIUM: Emoji Rendering Inconsistent

**Affected Posts:** 01, 02, 05  
**Issue:** ✅ ❌ emojis render differently across OS/browsers

**Fix Required:** Use SVG icons or Unicode with fallback font

---

### 2.6 MEDIUM: Table Header Text Wrapping

**Affected Posts:** 01, 02, 03, 05, 06  
**Issue:** Long table headers wrap mid-word on narrow screens

**Fix Required:**
```css
.article-body th {
  white-space: nowrap;
  min-width: 80px;
}
```

---

### 2.7 MEDIUM: Link Underline Offset Inconsistent

**All Posts**  
**Issue:** `text-underline-offset: 2px` too close on some fonts

**Fix Required:**
```css
.article-body a {
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}
```

---

### 2.8 MEDIUM: Inline Code Contrast Low

**Affected Posts:** 04, 06  
**Issue:** Inline `code` background (#f3f4f6) too similar to blockquote background

**Fix Required:**
```css
.article-body code {
  background: #e5e7eb;
  border: 1px solid #d1d5db;
}
```

---

### 2.9 LOW: No Hyphenation for Long Words

**All Posts**  
**Issue:** Long technical terms (e.g., "Studentenwerk") don't hyphenate on mobile

**Fix Required:**
```css
.article-body p {
  hyphens: auto;
  -webkit-hyphens: auto;
}
```

---

### 2.10 LOW: List Marker Color Too Light

**All Posts**  
**Issue:** `color: #9ca3af` for `li::marker` low contrast

---

## SECTION 3: CONTENT ISSUES

### 3.1 CRITICAL: All Image Paths Broken

**Affected Posts:** ALL 7 POSTS  
**Issue:** Frontmatter `image` paths don't match actual files

| Post | Current Path | Actual File |
|------|--------------|-------------|
| 01 | `/public/assets/blog/germany-flag.jpg` | Does not exist |
| 02 | `/public/assets/blog/italy-flag.jpg` | Does not exist |
| 03 | `/public/assets/blog/canada-flag.jpg` | Does not exist |
| 04 | `/public/assets/blog/playbook-icon.jpg` | Does not exist |
| 05 | `/public/assets/blog/playbook-icon.jpg` | Does not exist |
| 06 | `/public/assets/blog/playbook-icon.jpg` | Does not exist |
| 07 | `/public/assets/blog/case-study-chisom.jpg` | `/public/blog/images/chisom-canada-success.jpg` |

**Available Images in `/public/blog/images/`:**
- canada-express-entry-2026.jpg
- canada-sds-cancelled.jpg
- chisom-canada-success.jpg
- germany-chancenkarte-2026.jpg
- germany-visa-2026.jpg
- italy-dsu-scholarship.jpg
- uk-masters-cost-2026.jpg
- us-llc-setup.jpg

**Fix Required:** Update all frontmatter image paths

---

### 3.2 CRITICAL: Gender Inconsistency in Case Study

**Affected Post:** 07-case-study-chisom-canada.md  
**Issue:** Chisom referred to as "he" initially, then "she" later

**Lines with Issues:**
- Line ~15: "He's been working as a software engineer"
- Line ~180: "her background + IELTS score"
- Line ~220: "she was competitive"

**Fix Required:** Standardize to one gender throughout

---

### 3.3 HIGH: Broken Internal Links

**Affected Post:** 04-student-playbook-germany-blocked-account.md  
**Issue:** References non-existent page

```markdown
**Next step:** Go to `BLOCKED_ACCOUNT_CALCULATOR.html` on our site
```

**Fix Required:** Link to actual calculator page `/pages/calculator.html`

---

### 3.4 HIGH: Missing Cross-Links to Pathways

**Affected Posts:** 01, 03, 04, 05  
**Issue:** No links to related pathway pages

| Post | Should Link To |
|------|----------------|
| 01 (Germany) | `/pathways/germany/student-blocked-account.md` |
| 03 (Canada) | `/pathways/canada/express-entry-fsw.md` |
| 05 (UK) | `/pathways/uk/skilled-worker-visa.md` |

---

### 3.5 HIGH: Outdated Policy Information

**Affected Post:** 03-canada-visa-rejection-rates-2026.md  
**Issue:** Does not mention SDS (Student Direct Stream) cancellation in 2024

**Fix Required:** Add section about SDS program changes

---

### 3.6 HIGH: Missing Legal Disclaimers

**All Posts**  
**Issue:** Immigration advice without disclaimer

**Fix Required:** Add to each post footer:
```markdown
---
**Disclaimer:** This content is for informational purposes only and does not constitute legal or immigration advice. Requirements change frequently—always verify with official government sources before making decisions.
```

---

### 3.7 HIGH: Currency Inconsistency

**Affected Posts:** 01, 02, 04  
**Issue:** Mixes €, $, £ without clear conversion rates

**Example (Post 02):**
- "€11,000-€18,000/year"
- "$0-$2,000 USD"
- No stated exchange rate

**Fix Required:** Add conversion note at top of financial sections

---

### 3.8 MEDIUM: No Table of Contents

**Affected Posts:** 01, 02, 03, 05, 06 (all 7+ min reads)  
**Issue:** Long posts lack navigation

**Fix Required:** Auto-generate TOC from H2 headings

---

### 3.9 MEDIUM: Missing Author Bio

**All Posts**  
**Issue:** `author: "Global Route Team"` but no author section displayed

---

### 3.10 MEDIUM: No Related Posts Section

**All Posts**  
**Issue:** Template has `#related-articles` but not populated

---

### 3.11 MEDIUM: Inconsistent Date Formats

**All Posts**  
**Issue:** Frontmatter uses `2026-01-15`, display varies

---

### 3.12 MEDIUM: Missing Schema Markup for Tables

**Affected Posts:** 01, 02, 03, 05, 06  
**Issue:** Data tables lack structured data for SEO

---

### 3.13 MEDIUM: No Social Share Images

**All Posts**  
**Issue:** `og:image` falls back to default, no post-specific images

---

### 3.14 LOW: Inconsistent Emoji Usage

**Affected Posts:** 01, 02, 05  
**Issue:** Some sections use ✅/❌, others use bullet points

---

### 3.15 LOW: Missing "Last Updated" Dates

**All Posts**  
**Issue:** Posts show "Updated: January 2026" in content but frontmatter lacks `updated` field

---

### 3.16 LOW: No Reading Time Calculation

**All Posts**  
**Issue:** `readTime: "8 min"` is hardcoded, not calculated from content

---

## SECTION 4: ACCESSIBILITY ISSUES

### 4.1 CRITICAL: Tables Lack Proper Headers

**Affected Posts:** 01, 02, 03, 05, 06  
**Issue:** Tables missing `<caption>` and `scope` attributes

**Fix Required:** Add to table rendering:
```html
<table>
  <caption class="sr-only">Visa approval rates by country</caption>
  <thead>
    <tr>
      <th scope="col">Country</th>
      ...
    </tr>
  </thead>
</table>
```

---

### 4.2 HIGH: Color Contrast Issues

**Affected Elements:**
- `.article-meta` color `#6b7280` on white = 4.48:1 (fails AAA)
- `.meta-sep` color `#d1d5db` = 1.76:1 (fails AA)
- Table header background too light

**Fix Required:** Increase contrast ratios to meet WCAG AA (4.5:1)

---

### 4.3 HIGH: No Skip Link for Article Content

**All Posts**  
**Issue:** Skip link goes to `#main`, should also offer skip to `#article-content`

---

### 4.4 MEDIUM: Images Missing Alt Text

**All Posts**  
**Issue:** When images render, no alt text provided in markdown

---

### 4.5 MEDIUM: Link Text Not Descriptive

**Affected Posts:** 01, 02, 03  
**Issue:** Links like "here" or "this" without context

**Example:** "Get more info [here](link)" → "Get more info on [DAAD scholarships](link)"

---

### 4.6 MEDIUM: No Language Attribute for Foreign Terms

**Affected Posts:** 01, 02, 04  
**Issue:** German/Italian terms not marked with `lang` attribute

**Example:** "Bürgerbüro" should be `<span lang="de">Bürgerbüro</span>`

---

### 4.7 LOW: Focus Styles Inconsistent

**All Posts**  
**Issue:** Some interactive elements lack visible focus indicators

---

## SECTION 5: IMPLEMENTATION PRIORITY

### Phase 1: Critical Fixes (Week 1)
1. [ ] Fix all broken image paths
2. [ ] Fix gender inconsistency in post 07
3. [ ] Add table wrapper for mobile overflow
4. [ ] Add legal disclaimers to all posts
5. [ ] Fix table accessibility (captions, scope)

### Phase 2: High Priority (Week 2)
1. [ ] Fix code block overflow on mobile
2. [ ] Update internal links (calculator, pathways)
3. [ ] Add currency conversion notes
4. [ ] Fix heading hierarchy in posts 01, 02, 03
5. [ ] Improve color contrast for meta elements
6. [ ] Add font preloading

### Phase 3: Medium Priority (Week 3-4)
1. [ ] Add table of contents generation
2. [ ] Implement reading progress indicator
3. [ ] Add related posts functionality
4. [ ] Fix mobile blockquote styling
5. [ ] Add author bio section
6. [ ] Improve print styles

### Phase 4: Low Priority (Backlog)
1. [ ] Dark mode support
2. [ ] Sidebar layout for desktop
3. [ ] Hyphenation for long words
4. [ ] Social share images per post

---

## SECTION 6: FILES TO MODIFY

| File | Changes Required |
|------|------------------|
| `src/css/blog-post.css` | Mobile table, code, blockquote fixes; typography improvements |
| `src/css/responsive.css` | Landscape, tablet breakpoint adjustments |
| `src/templates/blog-post.njk` | Add disclaimer, TOC, author bio sections |
| `src/js/blog-post.js` | Table wrapper, TOC generation, reading progress |
| `src/content/blog/*.md` | Fix image paths, links, content issues |

---

## SECTION 7: TESTING CHECKLIST

### Device Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (393px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1280px+)
- [ ] Desktop Wide (1920px)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari iOS
- [ ] Chrome Android

### Accessibility Testing
- [ ] VoiceOver (macOS/iOS)
- [ ] NVDA (Windows)
- [ ] Keyboard navigation only
- [ ] High contrast mode
- [ ] 200% zoom

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Owner:** Development Team
