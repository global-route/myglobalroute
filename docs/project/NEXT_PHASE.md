# Global Route: Phase 3 Tasks & Roadmap

**Current Status:** Phase 2 Blog Foundation Complete (20%)  
**Next Phase:** Phase 3 - Content Expansion & Integration  
**Timeline:** Weeks 2-6 (Aug 2026)  
**Updated:** July 21, 2026

---

## 🎯 Phase 3 Objectives

1. **Integrate blog posts** into live website
2. **Write 7 more articles** (reach 12 total cornerstone posts)
3. **Complete dynamic features** (search, categories, calculator)
4. **Expand country database** to all 26 countries
5. **Launch social media** presence

**Success Metrics:**
- 12 cornerstone blog posts live
- Blog fully functional with search
- 5,000+ monthly visitors
- 500+ newsletter subscribers

---

## 📋 WEEK 2 TASKS (Blog Integration)

### Priority 1: Update Blog Listing Page

**Task:** Enhance `/src/pages/blog.html` to display 5 posts

**Sub-tasks:**
- [ ] Create featured post hero section (latest post)
- [ ] Build card grid for 4 other posts
- [ ] Add category filters (Country Audits, Playbooks, etc.)
- [ ] Implement "Load More" or pagination
- [ ] Add search bar (frontend ready, backend TBD)
- [ ] Style with responsive CSS

**Files to edit:**
- `/src/pages/blog.html`
- `/src/css/styles.css` (add blog card styles)
- `/src/js/app.js` (add blog loading logic)

**Estimated time:** 4-6 hours

---

### Priority 2: Create Blog Post Template

**Task:** Build HTML template for individual blog posts

**Template structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>[Post Title] | Global Route</title>
  <meta name="description" content="[Excerpt]">
  <meta name="keywords" content="[Keywords]">
  <!-- Open Graph meta tags -->
</head>
<body>
  <header>[Navigation]</header>
  
  <article class="blog-post">
    <header class="post-header">
      <span class="category">[Category]</span>
      <h1>[Title]</h1>
      <div class="post-meta">
        <span>[Author]</span> • 
        <span>[Date]</span> • 
        <span>[Read Time]</span>
      </div>
    </header>
    
    <div class="post-content">
      [Markdown content rendered as HTML]
    </div>
    
    <footer class="post-footer">
      <div class="share-buttons">[Social sharing]</div>
      <div class="related-posts">[3 related articles]</div>
    </footer>
  </article>
  
  <aside class="sidebar">
    [Newsletter signup]
    [Popular posts]
    [Categories]
  </aside>
  
  <footer>[Site footer]</footer>
</body>
</html>
```

**Sub-tasks:**
- [ ] Create `/src/templates/blog-post.html`
- [ ] Style post typography (readable, mobile-first)
- [ ] Add table of contents (sticky sidebar)
- [ ] Implement social share buttons
- [ ] Add "Updated: [Date]" badge
- [ ] Create related articles section

**Files to create:**
- `/src/templates/blog-post.html`
- `/src/css/blog-post.css`
- `/src/js/blog-post.js` (TOC, share buttons)

**Estimated time:** 6-8 hours

---

### Priority 3: Convert Markdown to HTML

**Task:** Transform 5 markdown posts into HTML pages

**Options:**

**Option A: Static Site Generator (Recommended)**
- Use **11ty (Eleventy)** or **Hugo**
- Markdown → HTML at build time
- SEO-friendly, fast
- Easy to scale

**Setup (11ty):**
```bash
npm install --save-dev @11ty/eleventy
```

**Config `.eleventy.js`:**
```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("public");
  
  return {
    dir: {
      input: "content/blog",
      output: "dist/blog"
    }
  };
};
```

**Sub-tasks:**
- [ ] Install 11ty
- [ ] Configure build pipeline
- [ ] Create markdown layout template
- [ ] Build all 5 posts to HTML
- [ ] Test links and navigation
- [ ] Deploy to Netlify

**Estimated time:** 4-6 hours

---

### Priority 4: Add Blog Images

**Task:** Create/source featured images for 5 posts

**Image specs:**
- Format: JPG or WebP
- Size: 1200x630px (Open Graph standard)
- File size: <200KB each
- Alt text: Descriptive for accessibility

**Images needed:**
1. `germany-visa-2026.jpg` - German flag + Nigerian passport
2. `italy-dsu-scholarship.jpg` - Italian university campus
3. `us-llc-setup.jpg` - US flag + laptop
4. `chisom-canada-success.jpg` - Canadian skyline
5. `canada-sds-cancelled.jpg` - Policy document graphic

**Sub-tasks:**
- [ ] Design 5 featured images (Canva/Figma)
- [ ] Optimize file sizes (<200KB each)
- [ ] Save to `/public/blog/images/`
- [ ] Update markdown frontmatter with image paths
- [ ] Add Open Graph meta tags to templates

**Estimated time:** 3-4 hours

---

## 📝 WEEK 3 TASKS (New Content)

### Priority 5: Write 3 More Blog Posts

**Posts to write:**

**1. Canada Express Entry Complete Guide 2026**
- Category: Country Audit
- Word count: 5,000-6,000
- Topics: CRS score calculation, Provincial Nominee Programs, Ontario HCP, processing times, costs
- Target keyword: "Canada Express Entry from Nigeria"

**2. UK Masters True Cost Breakdown**
- Category: Country Audit
- Word count: 4,000-5,000
- Topics: Tuition fees, living costs, visa requirements, NHS surcharge, work restrictions
- Target keyword: "UK Masters cost for Africans"

**3. Germany Chancenkarte Visa Guide**
- Category: Professional Playbook
- Word count: 4,000-5,000
- Topics: Opportunity Card, points system, job search, requirements, timeline
- Target keyword: "Germany Chancenkarte visa"

**Sub-tasks per post:**
- [ ] Keyword research
- [ ] Outline structure (TOC)
- [ ] Write draft (4-6 hours each)
- [ ] Fact-check against official sources
- [ ] Add cost tables, comparisons
- [ ] Write meta description + excerpt
- [ ] Add internal links to related posts
- [ ] Save as markdown in correct category folder

**Estimated time:** 15-20 hours (all 3 posts)

---

## 🛠️ WEEK 4 TASKS (Features)

### Priority 6: Implement Blog Search

**Task:** Add search functionality to blog

**Implementation (Fuse.js):**

1. Create search index:
```javascript
// src/js/blog-search.js
import Fuse from 'fuse.js';

const posts = [
  { title: "Germany Visa from Nigeria", 
    excerpt: "...", 
    url: "/blog/country-audits/germany-visa-2026.html",
    keywords: ["germany", "visa", "nigeria", "student"]
  },
  // ... all posts
];

const fuse = new Fuse(posts, {
  keys: ['title', 'excerpt', 'keywords'],
  threshold: 0.3
});

export function searchPosts(query) {
  return fuse.search(query);
}
```

2. Add search UI:
```html
<div class="search-container">
  <input type="text" id="blog-search" placeholder="Search articles...">
  <div id="search-results"></div>
</div>
```

**Sub-tasks:**
- [ ] Install Fuse.js (`npm install fuse.js`)
- [ ] Create search index (JSON with all posts)
- [ ] Build search UI component
- [ ] Add search to blog.html
- [ ] Style search results dropdown
- [ ] Test search functionality

**Estimated time:** 4-5 hours

---

### Priority 7: Build Category Archive Pages

**Task:** Create archive pages for each category

**Pages needed:**
- `/blog/category/country-audits.html` (2 posts currently)
- `/blog/category/student-playbooks.html` (1 post)
- `/blog/category/business-playbooks.html` (1 post)
- `/blog/category/case-studies.html` (1 post)
- `/blog/category/policy-updates.html` (1 post)

**Template structure:**
```html
<h1>Country Audits</h1>
<p>Real visa approval rates and true costs for African applicants</p>

<div class="posts-list">
  [List of posts in this category]
</div>
```

**Sub-tasks:**
- [ ] Create category page template
- [ ] Generate 7 category archive pages
- [ ] Add category navigation menu
- [ ] Link from blog post categories
- [ ] Style category pages

**Estimated time:** 3-4 hours

---

## 📊 WEEK 5 TASKS (Data & Calculator)

### Priority 8: Complete 26-Country Database

**Task:** Expand `/src/data/countries.json` to all 26 countries

**Current status:** 12 countries (sample)  
**Target:** 26 countries (all Group A-F)

**Data needed per country:**
- Official name
- Visa approval rate (global + African)
- True cost breakdown (tuition, living, visa)
- Sweet spots (best pathways)
- Processing time
- Language requirements
- Post-study work visa
- Pros/cons

**Countries to add (14 remaining):**

**Group A (Anglosphere):**
- USA
- Australia
- New Zealand
- Ireland

**Group B (No-Tuition):**
- Norway
- Finland
- Austria

**Group D (EU Sleepers):**
- Spain
- Netherlands
- France
- Belgium

**Group E (Budget Champions):**
- Czech Republic
- Hungary
- Estonia

**Sub-tasks:**
- [ ] Research 14 countries (official sources)
- [ ] Fill in data template for each
- [ ] Verify approval rates
- [ ] Add cost breakdowns (USD, EUR, local currency)
- [ ] Update countries.json
- [ ] Test JSON validity

**Estimated time:** 10-12 hours

---

### Priority 9: Connect Calculator to JavaScript

**Task:** Make `/src/pages/calculator.html` functional

**Current status:** HTML form exists, no logic  
**Target:** Working budget calculator

**Features to implement:**
1. User inputs:
   - Current savings (USD)
   - Monthly income (USD)
   - Monthly expenses (USD)
   - Category (Student/Professional/Business)
   - Region preference

2. Output:
   - Affordable countries (sorted by cost)
   - Savings plan timeline
   - Required budget
   - Alternative options

**Calculator logic:**
```javascript
// src/js/calculator.js
function calculateAffordability(savings, income, expenses, category) {
  const monthlySavings = income - expenses;
  const countries = getCountriesByCategory(category);
  
  const affordable = countries.filter(c => {
    return c.totalCost <= savings;
  });
  
  const timeline = affordable.map(c => {
    const monthsNeeded = (c.totalCost - savings) / monthlySavings;
    return { country: c.name, months: Math.max(0, monthsNeeded) };
  });
  
  return { affordable, timeline };
}
```

**Sub-tasks:**
- [ ] Write calculator logic in `/src/js/calculator.js`
- [ ] Connect form to JavaScript
- [ ] Display results dynamically
- [ ] Add visualization (chart.js or simple bars)
- [ ] Style results section
- [ ] Test with real scenarios

**Estimated time:** 6-8 hours

---

## 🌐 WEEK 6 TASKS (Social & Launch)

### Priority 10: Write 4 More Blog Posts

**Posts to write:**

**4. Portugal D7 Visa Complete Guide**
- Category: Business Playbook
- Word count: 4,500-5,500
- Topics: Passive income requirements, application process, costs, tax benefits
- Target keyword: "Portugal D7 visa"

**5. Amara's Ghana → Italy Success Story**
- Category: Case Study
- Word count: 3,500-4,500
- Topics: DSU scholarship application, budget, timeline, current life
- Target keyword: "Ghana to Italy scholarship"

**6. Student Budget Under $5,000 Guide**
- Category: Student Playbook
- Word count: 4,000-5,000
- Topics: Cheapest countries, scholarship hacks, budget planning
- Target keyword: "study abroad under $5000"

**7. Why UK Visas Get Rejected**
- Category: Guide
- Word count: 3,500-4,500
- Topics: Common rejection reasons, how to fix, success strategies
- Target keyword: "UK visa rejection reasons"

**Sub-tasks:** (same as Week 3)
- [ ] Research + outline each post
- [ ] Write drafts (4-6 hours each)
- [ ] Fact-check
- [ ] Add visuals/tables
- [ ] SEO optimization
- [ ] Internal linking

**Estimated time:** 20-24 hours (all 4 posts)

---

### Priority 11: Launch Social Media

**Platforms to launch:**

1. **Twitter/X (@globalrouteapp)**
   - Bio: "Radical transparency for African global mobility. Real visa rates, true costs."
   - Content: Thread summaries of blog posts
   - Frequency: 3-5 tweets/week
   - Hashtags: #Japa #VisaGuide #StudyAbroad

2. **LinkedIn (Company: Global Route)**
   - Share: Blog posts, success stories, policy updates
   - Frequency: 2-3 posts/week
   - Target: Professionals, students

3. **Instagram (@myglobalroute)**
   - Content: Infographics (cost comparisons, timelines)
   - Stories: Quick tips, Q&A
   - Frequency: 3-4 posts/week

**Sub-tasks:**
- [ ] Create social media accounts
- [ ] Design profile images + banners
- [ ] Write bios + descriptions
- [ ] Schedule first 2 weeks of content
- [ ] Add social links to website footer
- [ ] Install social share buttons on blog posts

**Estimated time:** 4-6 hours setup + ongoing

---

### Priority 12: Newsletter Setup

**Task:** Implement email newsletter system

**Options:**

**Option A: Mailchimp (Free tier)**
- 500 subscribers free
- Automation included
- Easy Netlify form integration

**Option B: ConvertKit**
- Creator-focused
- Better segmentation
- 1,000 subscribers free

**Setup steps:**
1. Create account (Mailchimp or ConvertKit)
2. Design welcome email template
3. Create signup form embed code
4. Add to homepage newsletter section
5. Add to blog post sidebars
6. Test signup flow

**Newsletter content (weekly):**
- 1 featured blog post
- Policy update (if any)
- Quick tip
- Success story snippet

**Sub-tasks:**
- [ ] Choose email provider
- [ ] Create account + list
- [ ] Design email template
- [ ] Add signup forms to site
- [ ] Write first 4 newsletter drafts
- [ ] Schedule weekly sends

**Estimated time:** 4-5 hours

---

## 📊 Phase 3 Completion Checklist

### Blog Integration ✅
- [ ] Blog listing page updated (5 posts displayed)
- [ ] Blog post HTML template created
- [ ] 5 markdown posts converted to HTML
- [ ] Blog images added (5 images)
- [ ] Navigation links working

### New Content ✅
- [ ] 7 new blog posts written (12 total)
- [ ] All posts SEO-optimized
- [ ] All posts fact-checked
- [ ] Internal linking complete

### Features ✅
- [ ] Blog search functional
- [ ] 7 category archive pages
- [ ] 26-country database complete
- [ ] Calculator working with live data

### Launch ✅
- [ ] Social media accounts created (3 platforms)
- [ ] First 2 weeks content scheduled
- [ ] Newsletter system operational
- [ ] 100+ subscribers target

---

## 🎯 Success Metrics (End of Phase 3)

### Content Metrics
- **Blog posts:** 12 cornerstone articles
- **Word count:** 55,000+ total
- **Categories:** All 7 categories populated
- **Countries:** 26 complete profiles

### Traffic Metrics
- **Monthly visitors:** 5,000+ (organic)
- **Bounce rate:** <25%
- **Avg. time on page:** 4+ minutes
- **Pages per session:** 2.5+

### Engagement Metrics
- **Newsletter subscribers:** 100+
- **Social followers:** 500+ (combined)
- **Blog comments:** 10+ per popular post
- **Email open rate:** 30%+

---

## 📅 Timeline Summary

| Week | Focus | Key Deliverables | Hours |
|------|-------|------------------|-------|
| **Week 2** | Blog Integration | Blog.html, templates, 5 posts live | 20-25h |
| **Week 3** | Content Creation | 3 new blog posts | 15-20h |
| **Week 4** | Features | Search, categories, database | 15-20h |
| **Week 5** | Data & Calculator | 26 countries, working calculator | 16-20h |
| **Week 6** | Content & Launch | 4 posts, social media, newsletter | 25-30h |
| **Total** | **5 weeks** | **12 posts, full integration** | **90-115h** |

---

## 🚀 Phase 4 Preview (Weeks 7-12)

After Phase 3 completion:

- **Community building:** Comment system, user testimonials
- **Content expansion:** 25+ total posts, video content
- **Monetization:** AdMob optimization, sponsored content
- **Authority building:** Guest posts, media mentions, backlinks
- **Feature expansion:** Advanced calculators, comparison tools
- **Target:** 50,000+ monthly visitors

---

## 📁 Key Files to Work On

### This Phase (Phase 3)
1. `/src/pages/blog.html` - Blog listing page
2. `/src/templates/blog-post.html` - Post template (create)
3. `/src/css/blog.css` - Blog styles (create)
4. `/src/js/blog-search.js` - Search functionality (create)
5. `/src/js/calculator.js` - Calculator logic (enhance)
6. `/src/data/countries.json` - Expand to 26 countries
7. `/content/blog/` - Add 7 new markdown posts

### Documentation to Update
1. `COMPLETION_SUMMARY.md` - After each week
2. `NEXT_PHASE.md` - This file (track progress)
3. `README.md` - Add blog section
4. `PROJECT_STRUCTURE.md` - Add blog structure

---

## ✅ How to Track Progress

**Daily:**
- Check off completed tasks in this file
- Update word count in BLOG_CONTENT_SUMMARY.md

**Weekly:**
- Review metrics (traffic, engagement)
- Adjust priorities based on performance
- Update COMPLETION_SUMMARY.md with progress

**End of Phase:**
- Full progress report
- Prepare Phase 4 plan
- Celebrate milestones 🎉

---

**Phase 3 Start Date:** July 22, 2026  
**Phase 3 Target End:** August 26, 2026  
**Current Status:** Ready to begin Week 2 tasks

**Next Action:** Update blog.html to display 5 posts with card layout

