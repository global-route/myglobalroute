# Global Route: Active Tasks & Execution Plan

**Created:** July 27, 2026  
**Status:** Phase 3 - Blog Integration & Content Expansion  
**Current Progress:** Foundation 100% | Blog Content 20% | Integration 0%

---

## 🎯 CURRENT PHASE: Phase 3 - Blog Integration (Weeks 2-6)

**Objective:** Make 5 blog posts viewable, expand to 12 posts, launch features

---

## 🔥 WEEK 2: BLOG INTEGRATION (CRITICAL - IN PROGRESS)

### Priority 1: Install & Configure Static Site Generator ⚠️ CRITICAL
**Status:** 🔴 Not Started  
**Blocker:** Posts cannot be viewed without this

**Tasks:**
- [ ] Install 11ty: `npm install --save-dev @11ty/eleventy`
- [ ] Create `.eleventy.js` configuration file
- [ ] Configure input/output directories
- [ ] Test build process
- [ ] Update package.json scripts

**Estimated time:** 2-3 hours  
**Assigned to:** Developer

---

### Priority 2: Create Blog Post HTML Template ⚠️ CRITICAL
**Status:** 🔴 Not Started  
**File:** `/src/templates/blog-post.html`

**Requirements:**
- [ ] Article header (title, category, meta)
- [ ] Table of contents (sticky sidebar)
- [ ] Post content area (typography styling)
- [ ] Social share buttons (Twitter, LinkedIn, Facebook)
- [ ] Related articles section (3 posts)
- [ ] Newsletter signup CTA
- [ ] Responsive design (mobile-first)

**Estimated time:** 4-6 hours  
**Assigned to:** Developer

---

### Priority 3: Update Blog Listing Page ⚠️ CRITICAL
**Status:** 🟡 In Progress (placeholder content exists)  
**File:** `/src/pages/blog.html`

**Current state:** Has 3 dummy articles  
**Target:** Display all 5 blog posts properly

**Tasks:**
- [ ] Remove placeholder content
- [ ] Add featured post hero (latest post)
- [ ] Create blog card grid (4 posts)
- [ ] Add category badge to each card
- [ ] Add read time & date meta
- [ ] Add featured images (when ready)
- [ ] Style with CSS
- [ ] Make responsive

**Estimated time:** 3-4 hours  
**Assigned to:** Developer

---

### Priority 4: Create Blog Images 🎨 HIGH PRIORITY
**Status:** 🔴 Not Started  
**Location:** `/public/blog/images/`

**Images needed (1200x630px each):**
- [ ] `germany-visa-2026.jpg` - German flag + Nigerian passport
- [ ] `italy-dsu-scholarship.jpg` - Italian university campus
- [ ] `us-llc-setup.jpg` - US flag + laptop/business
- [ ] `chisom-canada-success.jpg` - Canadian skyline/success
- [ ] `canada-sds-cancelled.jpg` - Policy document/Canada flag

**Tools:** Canva, Figma, or Unsplash + editing  
**Specs:** <200KB each, optimized for web  
**Alt text:** Write descriptive alt text for accessibility

**Estimated time:** 3-4 hours  
**Assigned to:** Designer/Content Creator

---

### Priority 5: Build Blog Post Pages ⚠️ CRITICAL
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Configure 11ty to convert markdown → HTML
- [ ] Apply blog-post.html template to all 5 posts
- [ ] Test all 5 generated pages
- [ ] Verify links work
- [ ] Check mobile responsiveness
- [ ] Validate HTML

**Posts to build:**
1. Germany Visa from Nigeria
2. Italy DSU Scholarship
3. US LLC Setup
4. Chisom Canada Success Story
5. Canada SDS Cancellation

**Estimated time:** 2-3 hours  
**Assigned to:** Developer

---

### Priority 6: Create Blog Navigation & Linking
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Add "Blog" to main site navigation
- [ ] Update homepage to feature latest 3 posts
- [ ] Create breadcrumb navigation
- [ ] Link related articles at bottom of posts
- [ ] Add category links
- [ ] Test all internal links

**Estimated time:** 2 hours  
**Assigned to:** Developer

---

**WEEK 2 TOTAL ESTIMATED TIME:** 18-24 hours  
**WEEK 2 DEADLINE:** August 3, 2026

---

## 📝 WEEK 3: NEW CONTENT (HIGH PRIORITY)

### Priority 7: Write 3 New Blog Posts
**Status:** 🔴 Not Started  
**Target:** Reach 8 total posts

**Posts to write:**

#### Post 6: Canada Express Entry Complete Guide 2026
**Category:** Country Audit  
**Target keyword:** "Canada Express Entry from Nigeria"  
**Word count:** 5,000-6,000 words

**Outline:**
- [ ] Research CRS score calculation
- [ ] Document Provincial Nominee Programs
- [ ] Ontario HCP strategy
- [ ] Processing times & costs
- [ ] Success strategies for Africans
- [ ] Write draft
- [ ] Add cost tables
- [ ] Write FAQ (10 questions)
- [ ] SEO optimization

**Estimated time:** 6-8 hours

---

#### Post 7: UK Masters True Cost Breakdown
**Category:** Country Audit  
**Target keyword:** "UK Masters cost for Africans"  
**Word count:** 4,000-5,000 words

**Outline:**
- [ ] Research tuition fees by university tier
- [ ] Calculate living costs (London vs non-London)
- [ ] Document visa requirements
- [ ] NHS surcharge breakdown
- [ ] Work restrictions (20hrs/week)
- [ ] Write draft
- [ ] Add comparison tables
- [ ] Write FAQ
- [ ] SEO optimization

**Estimated time:** 5-7 hours

---

#### Post 8: Germany Chancenkarte Visa Guide
**Category:** Professional Playbook  
**Target keyword:** "Germany Chancenkarte visa"  
**Word count:** 4,000-5,000 words

**Outline:**
- [ ] Research Opportunity Card points system
- [ ] Job search requirements
- [ ] Application process
- [ ] Timeline expectations
- [ ] Pros vs. cons vs. student visa
- [ ] Write draft
- [ ] Add points calculator
- [ ] Write FAQ
- [ ] SEO optimization

**Estimated time:** 5-7 hours

---

**WEEK 3 TOTAL ESTIMATED TIME:** 16-22 hours  
**WEEK 3 DEADLINE:** August 10, 2026

---

## 🔧 WEEK 4: FEATURES (MEDIUM PRIORITY)

### Priority 8: Implement Blog Search Functionality
**Status:** 🔴 Not Started  
**File:** `/src/js/blog-search.js`

**Tasks:**
- [ ] Create search index from all posts
- [ ] Build search UI component
- [ ] Add search bar to blog.html
- [ ] Style search results dropdown
- [ ] Add keyboard navigation
- [ ] Test search accuracy
- [ ] Optimize performance

**Note:** Fuse.js already in dependencies ✅

**Estimated time:** 4-5 hours  
**Assigned to:** Developer

---

### Priority 9: Build Category Archive Pages
**Status:** 🔴 Not Started  
**Location:** `/src/pages/blog/category/`

**Pages to create:**
- [ ] `country-audits.html` (will have 3 posts)
- [ ] `student-playbooks.html` (will have 1 post)
- [ ] `professional-playbooks.html` (will have 1 post)
- [ ] `business-playbooks.html` (will have 1 post)
- [ ] `case-studies.html` (will have 1 post)
- [ ] `policy-updates.html` (will have 1 post)
- [ ] `guides.html` (will have 0 posts - placeholder)

**Tasks per page:**
- [ ] Create template
- [ ] Add category description
- [ ] List posts in category
- [ ] Add pagination (future-proof)
- [ ] Style consistently
- [ ] Make responsive

**Estimated time:** 3-4 hours  
**Assigned to:** Developer

---

### Priority 10: Add Blog RSS Feed
**Status:** 🔴 Not Started  
**File:** `/public/blog/feed.xml`

**Tasks:**
- [ ] Generate RSS feed from posts
- [ ] Include title, description, link, date
- [ ] Validate RSS format
- [ ] Add RSS link to site header
- [ ] Test in feed readers

**Estimated time:** 1-2 hours  
**Assigned to:** Developer

---

**WEEK 4 TOTAL ESTIMATED TIME:** 8-11 hours  
**WEEK 4 DEADLINE:** August 17, 2026

---

## 📊 WEEK 5: DATA & CALCULATOR (MEDIUM PRIORITY)

### Priority 11: Complete 26-Country Database
**Status:** 🟡 In Progress (12/26 complete)  
**File:** `/src/data/countries.json`

**Current:** 12 sample countries  
**Target:** All 26 countries

**Countries to add (14 remaining):**

**Group A (Anglosphere):**
- [ ] USA (research visa rates, costs, pathways)
- [ ] Australia (research visa rates, costs, pathways)
- [ ] New Zealand (research visa rates, costs, pathways)
- [ ] Ireland (research visa rates, costs, pathways)

**Group B (No-Tuition):**
- [ ] Norway (research visa rates, costs, pathways)
- [ ] Finland (research visa rates, costs, pathways)
- [ ] Austria (research visa rates, costs, pathways)

**Group D (EU Sleepers):**
- [ ] Spain (research visa rates, costs, pathways)
- [ ] Netherlands (research visa rates, costs, pathways)
- [ ] France (research visa rates, costs, pathways)
- [ ] Belgium (research visa rates, costs, pathways)

**Group E (Budget Champions):**
- [ ] Czech Republic (research visa rates, costs, pathways)
- [ ] Hungary (research visa rates, costs, pathways)
- [ ] Estonia (research visa rates, costs, pathways)

**Data needed per country:**
- Visa approval rate (global + African)
- True cost breakdown (tuition, living, visa fees)
- Sweet spots (best pathways)
- Processing time
- Language requirements
- Post-study work visa
- Pros & cons

**Estimated time:** 10-12 hours  
**Assigned to:** Researcher/Content Creator

---

### Priority 12: Make Calculator Functional
**Status:** 🟡 In Progress (HTML exists, no logic)  
**Files:** `/src/pages/calculator.html`, `/src/js/calculator.js`

**Tasks:**
- [ ] Complete calculator.js logic
- [ ] Connect form inputs to JavaScript
- [ ] Implement affordability calculation
- [ ] Display results dynamically
- [ ] Add savings timeline calculator
- [ ] Show affordable countries sorted by cost
- [ ] Add visualization (simple charts)
- [ ] Style results section
- [ ] Test with real scenarios
- [ ] Make responsive

**Estimated time:** 6-8 hours  
**Assigned to:** Developer

---

**WEEK 5 TOTAL ESTIMATED TIME:** 16-20 hours  
**WEEK 5 DEADLINE:** August 24, 2026

---

## 🚀 WEEK 6: LAUNCH & EXPANSION (FINAL PUSH)

### Priority 13: Write 4 More Blog Posts
**Status:** 🔴 Not Started  
**Target:** Reach 12 total cornerstone posts

**Posts to write:**

#### Post 9: Portugal D7 Visa Complete Guide
**Category:** Business Playbook  
**Word count:** 4,500-5,500 words  
**Estimated time:** 6-7 hours

#### Post 10: Amara's Ghana → Italy Success Story
**Category:** Case Study  
**Word count:** 3,500-4,500 words  
**Estimated time:** 4-5 hours

#### Post 11: Student Budget Under $5,000 Guide
**Category:** Student Playbook  
**Word count:** 4,000-5,000 words  
**Estimated time:** 5-6 hours

#### Post 12: Why UK Visas Get Rejected
**Category:** Guide  
**Word count:** 3,500-4,500 words  
**Estimated time:** 4-5 hours

**Total estimated time:** 19-23 hours

---

### Priority 14: Launch Social Media Presence
**Status:** 🔴 Not Started

**Platforms:**

**1. Twitter/X (@globalrouteapp)**
- [ ] Create account
- [ ] Design profile image
- [ ] Design banner
- [ ] Write bio
- [ ] Schedule first 10 tweets
- [ ] Add link to website footer

**2. LinkedIn (Company: Global Route)**
- [ ] Create company page
- [ ] Design logo + banner
- [ ] Write about section
- [ ] Schedule first 5 posts
- [ ] Add link to website

**3. Instagram (@myglobalroute)**
- [ ] Create account
- [ ] Design profile image
- [ ] Create 5 infographics
- [ ] Write bio
- [ ] Schedule first 5 posts
- [ ] Add link to website

**Estimated time:** 4-6 hours  
**Assigned to:** Marketing/Social Media Manager

---

### Priority 15: Setup Newsletter System
**Status:** 🔴 Not Started

**Tasks:**
- [ ] Choose provider (Mailchimp vs. ConvertKit)
- [ ] Create account
- [ ] Design email template
- [ ] Create signup form embed code
- [ ] Add signup to homepage
- [ ] Add signup to blog post sidebars
- [ ] Write welcome email
- [ ] Write first 4 newsletter drafts
- [ ] Schedule weekly sends
- [ ] Test signup flow

**Estimated time:** 4-5 hours  
**Assigned to:** Marketing Manager

---

**WEEK 6 TOTAL ESTIMATED TIME:** 27-34 hours  
**WEEK 6 DEADLINE:** August 31, 2026

---

## 📈 PHASE 3 SUMMARY

### Total Time Investment
- **Week 2 (Blog Integration):** 18-24 hours
- **Week 3 (New Content):** 16-22 hours
- **Week 4 (Features):** 8-11 hours
- **Week 5 (Data & Calculator):** 16-20 hours
- **Week 6 (Launch):** 27-34 hours

**TOTAL: 85-111 hours** (matches NEXT_PHASE.md estimate of 90-115h)

---

### Success Metrics (End of Phase 3)

**Content:**
- ✅ 12 cornerstone blog posts (55,000+ words)
- ✅ All 7 categories populated
- ✅ 26-country database complete

**Features:**
- ✅ Blog fully functional with search
- ✅ Category archive pages
- ✅ Working budget calculator
- ✅ RSS feed

**Marketing:**
- ✅ Social media launched (3 platforms)
- ✅ Newsletter system operational
- ✅ First 2 weeks content scheduled

**Traffic:**
- 🎯 Target: 5,000+ monthly visitors
- 🎯 Bounce rate: <25%
- 🎯 Avg. time on page: 4+ minutes
- 🎯 Newsletter subscribers: 100+

---

## 🎯 THIS WEEK'S FOCUS (Week 2)

### Immediate Actions (Next 48 Hours):

1. **Install 11ty** ⚠️ CRITICAL
   ```bash
   npm install --save-dev @11ty/eleventy
   ```

2. **Create `.eleventy.js` config** ⚠️ CRITICAL

3. **Create blog-post.html template** ⚠️ CRITICAL

4. **Update blog.html** ⚠️ CRITICAL

5. **Source/create 5 blog images** 🎨 HIGH PRIORITY

---

## 📋 TASK TRACKING

### Status Legend:
- 🔴 Not Started
- 🟡 In Progress
- ✅ Complete
- ⚠️ Critical/Blocking

### Priority Legend:
- ⚠️ CRITICAL - Blocks other work
- 🔥 HIGH - Important for launch
- 📊 MEDIUM - Nice to have
- 🚀 LOW - Can wait

---

## 🔄 WEEKLY REVIEW PROCESS

**Every Monday:**
1. Review completed tasks from previous week
2. Update task statuses
3. Adjust priorities based on progress
4. Update COMPLETION_SUMMARY.md
5. Set goals for current week

**Every Friday:**
1. Check progress against weekly goals
2. Document blockers
3. Prepare for next week
4. Update this file

---

## 📞 GETTING HELP

**Stuck on a task?**
- Technical issues → Check `/docs/ARCHITECTURE.md`
- Content guidelines → Check `/docs/CONTENT_STRATEGY.md`
- Deployment help → Check `/docs/DEPLOYMENT.md`

**Need clarification?**
- Review relevant documentation first
- Check NEXT_PHASE.md for detailed instructions
- Ask in team channel

---

## 🎉 NEXT PHASE PREVIEW (Phase 4: Weeks 7-12)

After Phase 3 completion:

- **Community building:** Comment system, user testimonials
- **Content expansion:** 25+ total posts, video content
- **Monetization:** AdMob optimization, sponsored content
- **Authority building:** Guest posts, media mentions, backlinks
- **Feature expansion:** Advanced calculators, comparison tools
- **Target:** 50,000+ monthly visitors

---

**Last Updated:** July 27, 2026  
**Next Review:** August 3, 2026  
**Current Phase:** Week 2 - Blog Integration

**Let's build! 🚀**
