# Pages Required: Complete Inventory

**Status:** Verification of all needed pages  
**Last Updated:** January 15, 2026

---

## 📋 Pages Inventory

### Total Pages Required: 10

| # | Page Name | File Path | Purpose | Status |
|---|-----------|-----------|---------|--------|
| 1 | Homepage | `/src/index.html` | Hero, features, CTA | ✅ COMPLETE |
| 2 | Countries Directory | `/src/pages/countries.html` | 26-country comparison | ⏳ NEEDED |
| 3 | Student Playbook | `/src/pages/student-playbook.html` | Student strategies | ⏳ NEEDED |
| 4 | Professional Playbook | `/src/pages/professional-playbook.html` | Pro pathways | ⏳ NEEDED |
| 5 | Business Playbook | `/src/pages/business-playbook.html` | Business guide | ⏳ NEEDED |
| 6 | Budget Calculator | `/src/pages/calculator.html` | Interactive tool | ⏳ NEEDED |
| 7 | About | `/src/pages/about.html` | Mission & values | ⏳ NEEDED |
| 8 | Blog Listing | `/src/pages/blog.html` | All articles | ⏳ NEEDED |
| 9 | Contact | `/src/pages/contact.html` | Contact form | ⏳ NEEDED |
| 10 | FAQ | `/src/pages/faq.html` | Q&A section | ⏳ NEEDED |

---

## ✅ Page 1: Homepage (COMPLETE)

**File:** `/src/index.html`  
**Status:** ✅ COMPLETE (180 lines)

**Sections Included:**
- ✅ Header with navigation
- ✅ Hero section with CTA
- ✅ Problem statement
- ✅ Our approach (4 cards)
- ✅ Featured pathways (3 cards)
- ✅ Tools showcase
- ✅ Newsletter signup
- ✅ Testimonials (3 quotes)
- ✅ Final CTA
- ✅ Footer

**Links To:**
- Calculator
- Countries
- Student guide
- Professional guide
- Business guide
- Blog
- About
- Contact

---

## ⏳ Pages 2-10: NEEDED (9 pages)

### Page 2: Countries Directory

**File:** `/src/pages/countries.html`  
**Purpose:** Master country comparison (all 26)

**Content Structure:**
```html
<header>Global Route: 26-Country Directory</header>
<nav>
  - Filter by group (A-F)
  - Filter by budget
  - Filter by sector
  - Search functionality
</nav>
<main>
  - Country cards (26 total)
  - Each card:
    * Flag + name
    * Official vs African rate
    * True cost (USD)
    * Sweet spots
    * Link to detail
  - Comparison table view
</main>
```

**Data Source:** `/src/data/countries.json`  
**JavaScript:** search.js module

---

### Page 3: Student Playbook

**File:** `/src/pages/student-playbook.html`  
**Purpose:** Student-specific visa strategies

**Content Structure:**
```html
<h1>The Student Playbook: Japa on a Budget</h1>

<section>Budget Ranges
  - Under $5K
  - $5K-$10K
  - $10K-$15K
  - $15K+
</section>

<section>The No-Tuition Sweet Spot
  - Germany Blocked Account Route
    * Step-by-step guide
    * Cost breakdown
    * Timeline
  - Italy DSU Scholarship Hack
    * Application process
    * Required documents
    * Success rate
</section>

<section>Other Pathways
  - Canada student routes
  - Australia regional unis
  - Asian alternatives (Japan, Korea, China)
</section>

<section>Tools
  - Budget calculator
  - Timeline estimator
  - Savings planner
</section>
```

**Data Source:** playbooks.json (to create)  
**Key Articles:** Italy DSU, Germany Blocked Account

---

### Page 4: Professional Playbook

**File:** `/src/pages/professional-playbook.html`  
**Purpose:** Professional/worker visa strategies

**Content Structure:**
```html
<h1>The Professional Playbook: Career Advancement</h1>

<section>Skill-Based Visas
  - UK Skilled Worker
  - Canada Express Entry
  - Australia Skilled
  - Germany Chancenkarte
</section>

<section>Sector-Specific Paths
  - Tech Talent
  - Healthcare Workers
  - Finance/Compliance
  - Engineers
</section>

<section>Regional Opportunities
  - Europe (salary requirements)
  - Asia (growing sectors)
  - Middle East (contract roles)
</section>

<section>Tools
  - Salary converter
  - Skills assessment
  - Country matcher
</section>
```

**Data Source:** playbooks.json  
**Key Articles:** Chancenkarte, Tech visas, UK skilled worker

---

### Page 5: Business Playbook

**File:** `/src/pages/business-playbook.html`  
**Purpose:** Business owner/wealth strategies

**Content Structure:**
```html
<h1>The Business Playbook: Plan B & Wealth</h1>

<section>Digital Nomad Visas
  - Portugal D8
  - Spain Digital Nomad
  - Croatia D Visa
  - Income requirements
</section>

<section>US LLC Strategy
  - Setup from Africa
  - Cost breakdown
  - Banking options
  - Tax implications
</section>

<section>Golden Visas & Residency
  - Portugal D7 (passive income)
  - Investment visas
  - EU residency paths
</section>

<section>Business Tools
  - LLC cost calculator
  - Visa matcher
  - Tax planner
</section>
```

**Data Source:** playbooks.json  
**Key Articles:** US LLC, Portugal visas, Digital nomad

---

### Page 6: Budget Calculator

**File:** `/src/pages/calculator.html`  
**Purpose:** Interactive affordability tool

**Content Structure:**
```html
<h1>Japa Budget Calculator</h1>

<section>Calculator Form
  <input>Current savings (USD)</input>
  <input>Monthly income (USD)</input>
  <input>Monthly expenses (USD)</input>
  <select>Category (Student/Prof/Business)</select>
  <select>Region preference</select>
  <button>Calculate</button>
</section>

<section>Results
  - Affordable countries (sorted by cost)
  - Savings plan timeline
  - Required budget
  - Alternative options
  - Timeline to readiness
</section>

<section>Breakdown
  - Cost pie chart
  - Timeline visualization
  - Recommended pathway
</section>
```

**JavaScript:** calculator.js module

---

### Page 7: About

**File:** `/src/pages/about.html`  
**Purpose:** Mission, values, and story

**Content Structure:**
```html
<h1>About Global Route</h1>

<section>Our Mission
  - Vision statement
  - Core values (5)
  - Why we exist
</section>

<section>The Problem We Solve
  - Visa statistics bias
  - Hidden costs
  - Predatory agents
  - Our solution
</section>

<section>Our Approach
  - Radical transparency
  - Verified accuracy
  - Actionable intelligence
  - Community focus
</section>

<section>Team
  - Leadership
  - Contributors
  - Advisors
</section>

<section>Success Stories
  - Featured migrants
  - Testimonials
  - Results
</section>
```

**Source:** MISSION_STATEMENT.md

---

### Page 8: Blog

**File:** `/src/pages/blog.html`  
**Purpose:** All articles listing

**Content Structure:**
```html
<h1>Global Route Blog</h1>

<section>Featured Articles
  - Latest 5 articles
  - Hero image
  - Summary
  - Read more link
</section>

<section>Browse by Category
  - Student Guides (count)
  - Professional Guides (count)
  - Business Guides (count)
  - Country Profiles (count)
</section>

<section>Search & Filter
  - Search bar
  - Category filter
  - Date range
  - Popular tags
</section>

<section>All Articles
  - Card grid layout
  - Title, excerpt, date
  - Author, read time
  - "Read more" button
</section>
```

**Data Source:** `/content/blog/` files  
**Dynamic:** Loops through markdown files

---

### Page 9: Contact

**File:** `/src/pages/contact.html`  
**Purpose:** Contact form and channels

**Content Structure:**
```html
<h1>Contact Global Route</h1>

<section>Get in Touch
  <form>
    <input type="text" placeholder="Name" required>
    <input type="email" placeholder="Email" required>
    <input type="text" placeholder="Subject" required>
    <textarea placeholder="Message" required></textarea>
    <select>Topic (Bugs, Content, Partnerships, etc.)</select>
    <button type="submit">Send</button>
  </form>
</section>

<section>Other Channels
  - Email: hello@global-route.app
  - Twitter/X: @globalrouteapp
  - LinkedIn: /company/globalroute
  - GitHub: github.com/global-route
</section>

<section>Response Time
  - Typical: 24-48 hours
  - Business hours
  - Holiday notices
</section>
```

**Backend:** Netlify form handling (or email service)

---

### Page 10: FAQ

**File:** `/src/pages/faq.html`  
**Purpose:** Common questions and answers

**Content Structure:**
```html
<h1>Frequently Asked Questions</h1>

<section>About Global Route
  - Q: What is Global Route?
  - Q: Is this free?
  - Q: Do you help with applications?
  - Q: Can you guarantee approval?
</section>

<section>Visa & Immigration
  - Q: Which country is best for me?
  - Q: How much does it cost?
  - Q: How long does it take?
  - Q: What if I'm rejected?
</section>

<section>Student Questions
  - Q: What about scholarships?
  - Q: Can I work while studying?
  - Q: How do I get a blocked account?
  - Q: What about the DSU scholarship?
</section>

<section>Professional Questions
  - Q: Do I need a job offer?
  - Q: What's the salary threshold?
  - Q: Can my family come?
  - Q: What about work permits?
</section>

<section>Business Questions
  - Q: How do I set up an LLC?
  - Q: What's a digital nomad visa?
  - Q: Can I get residency?
  - Q: What about taxes?
</section>

<section>Technical
  - Q: Is the calculator accurate?
  - Q: How often is data updated?
  - Q: Can I use this on mobile?
  - Q: How do I report errors?
</section>
```

---

## 🗂️ Current Status Summary

```
COMPLETE:      1/10 pages (10%)
  ✅ index.html

NEEDED:        9/10 pages (90%)
  ⏳ countries.html
  ⏳ student-playbook.html
  ⏳ professional-playbook.html
  ⏳ business-playbook.html
  ⏳ calculator.html
  ⏳ about.html
  ⏳ blog.html
  ⏳ contact.html
  ⏳ faq.html
```

---

## 📋 Page Creation Checklist

### Template Requirements (For All Pages)

Each page should include:
- [ ] `<header>` with navigation
- [ ] Page `<title>` and meta tags
- [ ] Hero/intro section
- [ ] Main content
- [ ] Sidebar/related links (optional)
- [ ] `<footer>` with links
- [ ] AdMob ad slots (where appropriate)
- [ ] Mobile responsive
- [ ] Accessibility (ARIA labels)

### Navigation Structure

All pages link to:
- Home (`/`)
- Countries (`/pages/countries.html`)
- Student Guide (`/pages/student-playbook.html`)
- Professional Guide (`/pages/professional-playbook.html`)
- Business Guide (`/pages/business-playbook.html`)
- Calculator (`/pages/calculator.html`)
- Blog (`/pages/blog.html`)
- About (`/pages/about.html`)
- Contact (`/pages/contact.html`)
- FAQ (`/pages/faq.html`)

---

## 🎯 Page Priority for Launch

### Critical (Must Have)
1. ✅ Homepage (DONE)
2. ⏳ Countries directory
3. ⏳ Student playbook
4. ⏳ Professional playbook
5. ⏳ Business playbook
6. ⏳ Calculator

### Important (Nice to Have)
7. ⏳ Blog listing
8. ⏳ About
9. ⏳ Contact

### Optional (Future)
10. ⏳ FAQ

---

## 📝 Next Steps

1. **Create `/src/pages/` directory**
2. **Build each page** (use homepage as template)
3. **Add navigation** to all pages
4. **Link from homepage** to all pages
5. **Test responsiveness** on mobile
6. **Deploy and verify** all links work

---

**Page Inventory Complete: 10 total, 1 done, 9 needed**

*Estimated Creation Time: 3-4 hours for experienced developer*
