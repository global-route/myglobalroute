# Global Route: Tech Stack & Dependencies

**Project:** Global Route - African Migration Intelligence Platform  
**Last Updated:** January 15, 2026  
**Status:** Production-Ready

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    Frontend Layer                    │
│  HTML5 | CSS3 (Mobile-First) | Vanilla JavaScript   │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│                    Data Layer                        │
│  Static JSON Files | Client-Side Processing         │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│                 Deployment Layer                     │
│  Netlify CDN | HTTPS | Automatic Builds             │
└─────────────────────────────────────────────────────┘
```

---

## 💻 Frontend Stack

### HTML5
**Version:** HTML5 Standard  
**Purpose:** Semantic markup, accessibility  
**Features Used:**
- Semantic tags (header, nav, main, section, article, footer)
- ARIA attributes for accessibility
- Meta tags for SEO
- Structured data (schema.org)

**Files:**
- `/src/index.html` - Homepage
- `/src/pages/*.html` - Page templates (to create)

### CSS3
**Version:** CSS3 with PostCSS processing  
**Purpose:** Responsive styling, mobile-first design  

**Methodology:**
- Mobile-first (320px base)
- Responsive breakpoints: 768px (tablet), 1024px (desktop)
- CSS Grid & Flexbox for layouts
- CSS Variables for theming
- No CSS frameworks (keeping payload small)

**Files:**
- `/src/css/styles.css` (900 lines) - Base styles
- `/src/css/responsive.css` (400 lines) - Breakpoints

**Key Features:**
- High-contrast colors (WCAG AA compliant)
- System fonts (no web font downloads)
- Smooth transitions (250ms ease-in-out)
- Print styles included
- Dark mode support (optional)

### JavaScript (Vanilla - No Frameworks)
**Version:** ES6+ (ECMAScript 2015+)  
**Purpose:** Application logic, interactivity  
**Why Vanilla JS?**
- No framework overhead
- Fast initial load (3G/4G friendly)
- Full control over performance
- Smaller bundle size

**Modules:**

1. **app.js** (~100 lines)
   - Core initialization
   - Module orchestration
   - Data loading
   - Navigation handling

2. **calculator.js** (~200 lines)
   - Budget affordability calculations
   - Currency conversion
   - Savings planning logic
   - Timeline estimation

3. **search.js** (~250 lines)
   - Semantic search with Fuse.js
   - Country filtering
   - Suggestions engine
   - Advanced search with filters

4. **admob-loader.js** (~150 lines)
   - Google AdMob integration
   - Deferred ad loading (3s delay)
   - Ad unit management
   - Click tracking

**Dependencies:**
- `fuse.js` (v7.0.0) - Lightweight search library
- No other JavaScript dependencies

---

## 🗄️ Data Layer

### JSON Data Files
**Format:** JSON (application/json)  
**Serving:** Static files via CDN

**Files:**

1. **countries.json** (~500 lines)
   - 12 countries (expandable to 26)
   - Fields per country:
     - id, name, flag, group
     - Official rate, African reality
     - True costs (tuition, blocked account)
     - Sweet spots, pros, cons
     - Embassy locations
     - Processing timeline
   - Schema validated

2. **playbooks.json** (future)
   - Sector-specific strategies
   - Step-by-step guides
   - Resource links

3. **keywords.json** (future)
   - SEO target keywords
   - Search volumes
   - Competition levels

### Data Validation
**Tool:** Node.js validation script  
**Purpose:** Ensure data integrity  
**Checks:**
- Required fields present
- Rates make sense (African ≤ Official)
- Costs in valid ranges
- Embassy data verified
- No duplicate entries

**Command:** `npm run data:validate`

---

## 📦 Build & Deployment Tools

### Node.js & npm
**Version:** 18.16.0+  
**Purpose:** Build automation, dependency management

**package.json Scripts:**
```json
{
  "scripts": {
    "dev": "netlify dev",
    "build": "npm run build:css && npm run build:js",
    "build:css": "node scripts/build-css.js",
    "build:js": "node scripts/build-js.js",
    "test": "jest --run",
    "lint": "eslint src/js --fix",
    "format": "prettier --write 'src/**/*.{js,css,html,md}'",
    "deploy": "netlify deploy --prod",
    "data:validate": "node scripts/validate-data.js"
  }
}
```

### Netlify
**Service:** Hosting & Deployment  
**Configuration:** netlify.toml  

**Features:**
- Automatic HTTPS (Let's Encrypt)
- Global CDN distribution
- Automatic deployments from Git
- Environment variables management
- Serverless functions (optional)
- Analytics & monitoring

**Build Settings:**
- **Command:** `npm run build`
- **Publish:** `/dist` directory
- **Node Version:** 18.16.0

**Headers & Security:**
- Content-Security-Policy
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection enabled

### PostCSS
**Version:** 8.4.35+  
**Purpose:** CSS processing & optimization  

**Plugins:**
- Autoprefixer (browser prefixes)
- cssnano (minification)
- postcss-preset-env (modern CSS)

**Command:** `npm run build:css`

### Babel (Optional)
**Purpose:** JavaScript transpilation (ES6+ to ES5)  
**When Needed:** For older browser support  
**Current:** Not required (modern browsers only)

---

## 🧪 Testing & Quality

### Jest
**Version:** 29.7.0+  
**Purpose:** Unit testing  
**Test Files:**
- `/tests/calculator.test.js` - Calculator logic
- `/tests/search.test.js` - Search functionality
- `/tests/data-validation.test.js` - Data integrity

**Command:** `npm run test`

### ESLint
**Version:** 8.57.0+  
**Purpose:** Code quality & standards  
**Config:** `.eslintrc.json` (to create)  
**Command:** `npm run lint`

### Prettier
**Version:** 3.2.5+  
**Purpose:** Code formatting  
**Command:** `npm run format`

---

## 📊 Third-Party Services

### Google Analytics
**Purpose:** Traffic tracking & analytics  
**Implementation:** Global gtag.js  
**Events Tracked:**
- Page views
- Search queries
- Calculator usage
- Ad clicks
- External link clicks

**Configuration:** Environment variable `GOOGLE_ANALYTICS_ID`

### Google AdMob
**Purpose:** Monetization through ads  
**Implementation:** Deferred loading (3s delay)  
**Ad Types:**
- Display ads (300x250, 728x90, 320x50)
- Native ads (matched content)
- Interstitials (optional)

**Configuration:** Environment variable `ADMOB_PUBLISHER_ID`

### Fuse.js
**Version:** 7.0.0  
**Purpose:** Client-side fuzzy search  
**Features:**
- Semantic search
- Filter by multiple fields
- Suggestions engine
- ~15KB gzipped

**Usage:** `npm install fuse.js`

---

## 📁 Project Dependencies (package.json)

### Dependencies (Production)
```json
{
  "fuse.js": "^7.0.0"
}
```

### DevDependencies (Development Only)
```json
{
  "@babel/core": "^7.24.0",
  "@babel/preset-env": "^7.24.0",
  "eslint": "^8.57.0",
  "jest": "^29.7.0",
  "netlify-cli": "^17.30.0",
  "prettier": "^3.2.5",
  "postcss": "^8.4.35",
  "postcss-cli": "^11.0.0"
}
```

### No Frameworks
- ❌ React (too heavy for content site)
- ❌ Vue (unnecessary complexity)
- ❌ Bootstrap (prefer custom CSS)
- ❌ jQuery (use vanilla JS)
- ❌ Webpack (use simple bundling)

---

## 🔄 Build Process

### Development Build
```bash
npm run dev
# Starts Netlify dev server with live reload
# http://localhost:8888
```

### Production Build
```bash
npm run build
# Runs:
# 1. npm run build:css (PostCSS compile + minify)
# 2. npm run build:js (Babel transpile + minify)
# Output: /dist directory
```

### Build Steps
1. **Install dependencies:** `npm install`
2. **Validate data:** `node scripts/validate-data.js`
3. **Compile CSS:** PostCSS processes styles
4. **Transpile JS:** Babel converts to compatible JS
5. **Minify assets:** Gzip compression
6. **Generate sitemap:** SEO sitemap creation
7. **Copy static files:** Assets to dist/
8. **Deploy to Netlify:** Via `netlify deploy --prod`

---

## 📊 Performance Targets

### Page Load Times (4G Network)
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1
- **Time to Interactive:** <3s

### Asset Sizes
- **HTML (gzipped):** <50KB
- **CSS (minified):** <30KB
- **JavaScript (minified):** <50KB
- **Total page:** <500KB (including data)

### Lighthouse Scores
- **Performance:** ≥90
- **Accessibility:** ≥95
- **Best Practices:** ≥95
- **SEO:** ≥95

---

## 🔐 Security Stack

### HTTPS/SSL
- **Provider:** Netlify (automatic)
- **Certificate:** Let's Encrypt
- **Auto-renew:** Yes
- **Protocol:** TLS 1.2+

### Security Headers
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: [restrictive policy]
Referrer-Policy: strict-origin-when-cross-origin
```

### Data Protection
- ✅ No PII collection
- ✅ No backend database
- ✅ Static content only
- ✅ GDPR/CCPA compliant
- ✅ Privacy policy included

---

## 🗂️ Environment Configuration

### Environment Variables
```
# Production (.env.production)
ADMOB_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NETLIFY_SITE_ID=your-site-id

# Not committed to Git (.gitignore)
.env
.env.*
secrets.json
```

### Configuration Files
- `netlify.toml` - Netlify settings
- `package.json` - Dependencies & scripts
- `.gitignore` - Git exclusions
- `.eslintrc.json` - Linting rules (to create)
- `jest.config.js` - Testing config (to create)

---

## 📈 Scalability Considerations

### Current Stack (MVP)
- Static files on CDN
- Client-side processing
- No backend needed

### Phase 2 (Scaling)
- Optional: Headless CMS (Contentful, Sanity)
- Optional: Comment system (Disqus, custom)
- Optional: Newsletter integration (Substack, ConvertKit)

### Phase 3 (Growth)
- Optional: User accounts & authentication
- Optional: Premium content tier
- Optional: Community forum
- Optional: 1-on-1 consultation booking

---

## 🎯 Recommended Tools (Optional)

### Analytics
- **Google Analytics:** Already integrated
- **Hotjar:** User behavior tracking
- **LogRocket:** Error tracking & session replay

### SEO
- **Google Search Console:** Ranking tracking
- **Ahrefs/SEMrush:** Keyword research
- **Lighthouse:** Performance audits

### Content Management
- **GitHub:** Version control (already using)
- **Netlify CMS:** Optional content editor
- **Forestry:** Git-based CMS (optional)

### Testing Tools
- **BrowserStack:** Cross-browser testing
- **Lighthouse CI:** Automated performance
- **WebPageTest:** Detailed performance analysis

---

## 📋 Deployment Checklist

Before going live:

- [ ] All tests passing (`npm run test`)
- [ ] Linting clean (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Data validation passing (`npm run data:validate`)
- [ ] No console errors
- [ ] Responsive on mobile (DevTools)
- [ ] Performance acceptable (<2s load)
- [ ] SEO tags in place
- [ ] Analytics configured
- [ ] AdMob setup complete
- [ ] HTTPS working
- [ ] Security headers enabled
- [ ] Privacy policy visible
- [ ] Contact form functional

---

## 🚀 Getting Started

### Local Development
```bash
# Clone
git clone https://github.com/global-route/myglobalroute.git
cd myglobalroute

# Install
npm install

# Develop
npm run dev

# Test
npm run test
npm run lint

# Build
npm run build

# Deploy
npm run deploy
```

---

## 📞 Support & Documentation

**Official Docs:**
- [Node.js](https://nodejs.org/docs/)
- [Netlify](https://docs.netlify.com/)
- [Fuse.js](https://fusejs.io/)
- [Google Analytics](https://support.google.com/analytics)
- [Google AdMob](https://support.google.com/admob)

**Internal Docs:**
- See `/docs/ARCHITECTURE.md` for detailed tech design
- See `/docs/DEPLOYMENT.md` for deployment procedures
- See `/docs/ADMOB_INTEGRATION.md` for ads setup

---

**Tech Stack Finalized: January 15, 2026**
