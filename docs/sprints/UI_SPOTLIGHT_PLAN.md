# MyPathway2Global — UI Spotlight Plan
## Assessment Date: 2026-10-25

---

## Current State Assessment

### What's Working
1. **Content quality is excellent** — 17 blog posts with detailed cost breakdowns, step-by-step guides, FAQs, official source links
2. **Data integrity** — 26 countries, 59 pathways, evidence-gated approach
3. **Core functionality** — Find MyPathway tool, Calculator, Country directory all functional
4. **Rebrand complete** — GlobalRoute → MyPathway2Global done across all files

### What's Broken (UI)
Based on the blueprint and current CSS:

| Issue | Current State | Target State |
|-------|--------------|--------------|
| Homepage layout | Cards in grid, "SaaS feel" | Editorial flow, content-first |
| Section backgrounds | Alternating white/grey | All white, dividers only |
| Card styling | Borders, shadows, hover lifts | Minimal borders, no animations |
| Typography weight | Mixed weights | Light body (300), regular headings (400) |
| H2 underline | Not visible/inconsistent | 40px amber underline on ALL H2s |
| Stat tiles | Boxed with borders | Inline text or minimal styling |
| Page headers | White box below nav | Integrated with content flow |

---

## Competitive Analysis Summary

### What schengenvisainfo.com does right:
1. **Content-first layout** — No hero, H1 immediately visible
2. **Trust signals** — Credibility callout box right below H1
3. **Clean typography** — Light weight body, clear hierarchy
4. **Amber accent** — Signature H2 underline creates brand recognition
5. **No distractions** — No animations, no hover effects, no gradients
6. **Dense information** — Tables, lists, structured data visible immediately

### What migration info sites need:
1. **Immediate credibility** — Users need to trust the source instantly
2. **Scannable content** — Cost tables, requirement lists, timelines
3. **Official source links** — Every claim backed by government URL
4. **Mobile-first** — Most African users on mobile
5. **Fast loading** — Low bandwidth considerations

---

## Priority Fixes (Do Now)

### 1. Homepage Restructure
Current: Cards grid with "The problem" / "How it works" / "The platform" sections
Target: Content-first editorial layout

```
[Nav - dark navy]
[H1: "African Migration Intelligence"]
[Credibility box: "Evidence-gated pathways..."]
[Inline stats: 26 countries • 59 pathways • 0 invented rates]
[CTA buttons]
[H2: Latest Country Audits] — with amber underline
[3 featured blog posts as simple links, not cards]
[H2: Popular Pathways]
[List of top pathways with country flags]
[Footer]
```

### 2. Remove Card Grid Pattern
- Problem cards → H3 + paragraph flow
- Approach cards → Numbered list or simple H3 sections
- Featured cards → Link list with descriptions

### 3. Fix H2 Amber Underline
Currently in CSS but may not be rendering. Verify:
```css
h2::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 1px;
  background-color: #ffc947;
}
```

### 4. Simplify Stat Display
Current: Boxed stat tiles
Target: Inline text or minimal styling
```html
<p class="stats-inline">
  <strong>26</strong> countries • 
  <strong>59</strong> pathways • 
  <strong>0</strong> invented rates
</p>
```

---

## Blog/Content Strategy for Spotlight

### Current Blog Posts (17)
Strong content that should be promoted:

**High-value posts:**
1. Germany Visa from Nigeria 2026 — 14 min, detailed cost breakdown
2. Italy DSU Scholarship Guide — Free education pathway
3. Canada Express Entry 2026 — Points calculator
4. UK Masters True Cost 2026 — Budget reality check
5. Chisom's Success Story — Real case study

### SEO Quick Wins
1. Add structured data (FAQ schema) to all posts
2. Add breadcrumbs to blog posts
3. Internal linking between related posts
4. Add "Last updated" dates prominently
5. Add author bio section

### Content Gaps to Fill
1. **Comparison posts** — "Germany vs Italy for Nigerian Students"
2. **Budget calculators** — Interactive tools embedded in posts
3. **Visa interview guides** — High search volume
4. **Document checklists** — Downloadable PDFs
5. **Policy update alerts** — Email signup for changes

---

## Technical Fixes

### 1. CSS Cleanup
```bash
# Verify no dark mode remnants
grep -rn "prefers-color-scheme" src/css/

# Verify amber underline is in styles.css
grep -n "ffc947" src/css/styles.css
```

### 2. Performance
- Lazy load images
- Preload critical fonts
- Minimize CSS (currently 3 files)

### 3. Mobile Navigation
- Test hamburger menu
- Ensure touch targets are 44px+
- Test on slow 3G

---

## Execution Order

### Phase 1: Fix What's Broken (Today)
1. ✅ Rebrand complete
2. [ ] Verify H2 amber underline renders
3. [ ] Simplify homepage — remove card grids
4. [ ] Test on mobile

### Phase 2: Content Optimization (This Week)
1. [ ] Add FAQ schema to top 5 posts
2. [ ] Add internal links between posts
3. [ ] Create 2 comparison posts
4. [ ] Add breadcrumbs

### Phase 3: Growth (Next Week)
1. [ ] Submit sitemap to Google Search Console
2. [ ] Set up Google Analytics goals
3. [ ] Create social sharing images
4. [ ] Launch email capture for policy updates

---

## Success Metrics

| Metric | Current | Target (30 days) |
|--------|---------|------------------|
| Organic traffic | ? | +50% |
| Avg time on page | ? | 3+ minutes |
| Bounce rate | ? | <60% |
| Find MyPathway usage | ? | 100+ searches/week |
| Email signups | 0 | 50 |

---

## Next Action

**Immediate:** Verify the current live site renders correctly with:
1. Dark navy header
2. White content areas
3. Amber H2 underlines visible
4. No dark mode interference
5. Mobile nav working

Then proceed with homepage restructure to remove the card-grid SaaS pattern.
