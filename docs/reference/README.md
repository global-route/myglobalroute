# 📚 Reference Documentation

This folder contains technical reference, architecture, and reference materials.

## 📖 Technical Reference

### Architecture & Design
- **`ARCHITECTURE.md`** - System architecture and technical design
- **`TECH_STACK.md`** - Technology stack and dependencies
- **`DEPENDENCIES.md`** - Project dependencies and versions
- **`DEPLOYMENT.md`** - Deployment architecture and strategy

### Planning Reference
- **`INDEX.md`** - Project index and navigation
- **`PAGES_REQUIRED.md`** - All required pages and site structure
- **`TASKS.md`** - Master task list and breakdown
- **`BLUEPRINT_TO_EXECUTION.md`** - From blueprint to execution pathway

### Historical Reference
- **`Global Route Blueprint.md`** - Original project blueprint

## 🏗️ Architecture Overview

### Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Static Site Generator:** 11ty (Eleventy)
- **Hosting:** Netlify
- **CMS:** Markdown-based + JSON
- **Database:** JSON files (migrating to structured format)
- **Search:** Fuse.js
- **Analytics:** Google Analytics 4
- **Monetization:** Google AdMob

### Key Technologies
| Component | Technology | Purpose |
|-----------|-----------|---------|
| Build | 11ty | Static site generation |
| Hosting | Netlify | Production deployment |
| Search | Fuse.js | Client-side search |
| Analytics | GA4 | Usage tracking |
| Images | Sharp/PIL | Optimization |
| Styling | PostCSS | CSS processing |

## 📊 System Architecture

```
Content Layer (Markdown + JSON)
│
├─ Blog Posts (content/blog/*.md)
├─ Pages (src/pages/*.html)
└─ Data (src/data/*.json)
         │
         ▼
Build Layer (11ty)
│
├─ Compile Markdown → HTML
├─ Process Templates (Nunjucks)
├─ Optimize Images
└─ Generate Static Files
         │
         ▼
Distribution Layer (Netlify)
│
├─ CDN Distribution
├─ HTTPS/Security
├─ Caching
└─ Auto-Deploy
         │
         ▼
User Layer (Browser)
│
├─ HTML/CSS/JS
├─ Search (Fuse.js)
├─ Analytics (GA4)
└─ AdMob Ads
```

## 📝 Document Index

### Architecture
- **`ARCHITECTURE.md`** - Complete system design and structure

### Technical Stack
- **`TECH_STACK.md`** - Technologies used and rationale
- **`DEPENDENCIES.md`** - npm packages and versions

### Deployment
- **`DEPLOYMENT.md`** - How to deploy and production setup

### Planning
- **`BLUEPRINT_TO_EXECUTION.md`** - Project roadmap from concept to execution

## 🎯 Project Blueprint

### Original Vision
- Global Route: Radical transparency for African mobility
- Mission: Real visa approval rates and strategies
- Target: African students and professionals
- Approach: Data-driven, transparent content

### Site Structure
**Pages Required:**
1. Home (index.html)
2. Blog (blog.html)
3. Countries (countries.html)
4. Calculator (calculator.html)
5. About (about.html)
6. Contact (contact.html)

**Blog Structure:**
- 12 cornerstone posts
- 7 categories
- Search functionality
- Social sharing

**Database:**
- 26 countries
- Visa pathways
- Cost estimates
- Timeline data

## 🔗 Related Documentation

- **Sprint Details:** `../sprints/`
- **Project Overview:** `../project/`
- **Phase 3 Details:** `../phase-3/`
- **Implementation Guides:** `../guides/`

## 📋 Reference Quick Links

### For Developers
- Start with: `ARCHITECTURE.md`
- Then: `TECH_STACK.md`
- Deploy with: `DEPLOYMENT.md`

### For Project Managers
- Overview: `../project/PROJECT_ASSESSMENT.md`
- Roadmap: `../project/EXECUTION_ROADMAP.md`
- Current: `../sprints/CURRENT_SPRINT_STATUS.md`

### For Content Teams
- Strategy: `../guides/CONTENT_STRATEGY.md`
- Structure: `PAGES_REQUIRED.md`
- Guides: `../guides/`

---

**Last Updated:** August 18, 2026  
**Purpose:** Technical reference and architecture documentation
