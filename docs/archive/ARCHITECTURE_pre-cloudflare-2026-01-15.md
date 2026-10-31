# Global Route: Technical Architecture

---

## 🏗️ System Overview

Global Route is a **static content platform with client-side interactivity**, optimized for speed and accessibility on 3G/4G networks in Africa.

**Tech Stack:**
- **Frontend:** Vanilla JavaScript (no heavy frameworks)
- **Styling:** CSS3 with PostCSS
- **Hosting:** Netlify (CDN + serverless functions optional)
- **Content:** Markdown files + JSON data
- **Monetization:** Google AdMob + Direct sponsorships

---

## 📋 Architecture Components

### **1. Content Layer**
```
/content
  ├── blog/             # Markdown articles (SEO content)
  ├── pages/            # Static pages (guides, playbooks)
  └── faq.md            # FAQ content
```
- All content is version-controlled in Git
- Markdown preprocessor converts to HTML
- JSON data files for country database

### **2. Frontend Layer**
```
/src
  ├── index.html        # Entry point
  ├── pages/            # Page templates
  ├── components/       # Reusable HTML components
  ├── css/              # Styles (responsive, mobile-first)
  └── js/               # JavaScript functionality
```
- **No JavaScript frameworks** (Vue, React) for fast load times
- Vanilla JS with modular structure
- Progressive enhancement (works without JS)

### **3. Data Layer**
```
/src/data
  ├── countries.json    # Master country database
  ├── playbooks.json    # Sector-specific strategies
  └── keywords.json     # SEO target keywords
```
- Client-side data (no backend database needed)
- JSON Schema validation
- Easy to maintain and update

### **4. Build Layer**
```
/scripts
  ├── build-css.js      # CSS bundler
  ├── build-js.js       # JS bundler
  └── validate-data.js  # Data validation
```
- Simple build process (PostCSS + basic bundling)
- Pre-renders critical content
- Minifies assets for production

---

## 🎨 Frontend Architecture

### **Page Structure (Template-Based)**

All pages follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | Global Route</title>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="stylesheet" href="/css/responsive.css">
</head>
<body>
  <!-- Header (navigation) -->
  <header id="header"></header>
  
  <!-- Main content -->
  <main id="app"></main>
  
  <!-- Footer -->
  <footer id="footer"></footer>
  
  <!-- AdMob ads container -->
  <div id="admob-container"></div>
  
  <!-- Scripts -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script src="/js/app.js"></script>
  <script src="/js/admob-loader.js"></script>
</body>
</html>
```

### **JavaScript Modules**

```
/src/js
  ├── app.js              # Core app initialization
  ├── search.js           # Semantic search with Fuse.js
  ├── calculator.js       # Budget calculator logic
  ├── admob-loader.js     # AdMob integration
  ├── components/
  │   ├── header.js       # Navigation logic
  │   ├── footer.js       # Footer logic
  │   └── country-card.js # Country card rendering
  └── utils/
      ├── data-loader.js  # JSON data loading
      └── helpers.js      # Utility functions
```

**Module Pattern:**
```javascript
// Example: search.js
const SearchModule = (() => {
  const init = () => {
    // Initialize search functionality
  };
  
  const search = (query) => {
    // Search logic using Fuse.js
  };
  
  return { init, search };
})();
```

### **CSS Architecture (Mobile-First)**

```
/src/css
  ├── styles.css          # Base styles + desktop
  └── responsive.css      # Mobile breakpoints
```

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1024px
- Desktop: 1025px+

---

## 📊 Data Schema

### **Countries Database (countries.json)**

```json
{
  "countries": [
    {
      "id": "DE",
      "name": "Germany",
      "flag": "🇩🇪",
      "officialRate": "80-90%",
      "africanRate": "75-85%",
      "trueCost": {
        "currency": "EUR",
        "tuition": 0,
        "blockedAccount": 11208,
        "documentationFees": 300,
        "total": 11508
      },
      "sweetSpots": [
        "Chancenkarte (Opportunity Card)",
        "Tuition-free Master's degrees",
        "18-month job search visa"
      ],
      "pros": [
        "Zero tuition at public universities",
        "Strong post-graduation work rights"
      ],
      "cons": [
        "Language barrier (German B1/B2 required)",
        "Embassy bottleneck in Lagos"
      ],
      "prerequisites": {
        "language": "English B2 or German B1",
        "qualifications": "Bachelor's degree or equivalent",
        "funds": 11208
      },
      "timeline": {
        "applicationProcess": "2-4 months",
        "visaProcessing": "6-12 months",
        "total": "8-16 months"
      },
      "embassies": [
        {
          "country": "Nigeria",
          "city": "Lagos",
          "website": "https://..."
        }
      ]
    }
  ]
}
```

### **Playbooks Database (playbooks.json)**

```json
{
  "playbooks": [
    {
      "id": "student-dsu-italy",
      "title": "The Italian DSU Scholarship Hack",
      "sector": "student",
      "targetBudget": "$2000-$5000",
      "steps": [
        {
          "order": 1,
          "title": "Research low-fee Italian universities",
          "description": "...",
          "resources": ["University of Milan", "University of Pisa"]
        }
      ],
      "successRate": "65%",
      "timeRequired": "4-6 months"
    }
  ]
}
```

---

## 🚀 Performance Optimization

### **Critical Rendering Path**
1. Load minimal HTML (header + hero section)
2. Load CSS (render-blocking, optimized)
3. Load critical data (countries.json)
4. Load JavaScript (deferred)
5. Load AdMob (async)

### **Lazy Loading Strategy**
```javascript
// Load additional data only when needed
const loadCountriesData = async () => {
  const response = await fetch('/src/data/countries.json');
  return response.json();
};

// Defer AdMob loading until after main content
const loadAdMob = () => {
  const script = document.createElement('script');
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  script.async = true;
  document.head.appendChild(script);
};
```

### **Asset Optimization**
- **CSS:** Minified, tree-shaken, PostCSS processed
- **JS:** Minified, no uglification needed (small codebase)
- **Images:** SVG flags (no PNG overhead), lazy-loaded
- **Fonts:** System fonts only (no custom fonts)

### **Caching Strategy**
```
/netlify.toml
[cache]
  CACHE_CONTROL = "public, max-age=31536000"  # 1 year for versioned assets
  
[headers]
  [[headers.headers]]
    key = "Cache-Control"
    value = "no-cache"                        # HTML always fresh
```

---

## 🔄 Build Process

### **Development Workflow**
```bash
npm run dev              # Start local dev server with live reload
```

### **Production Build**
```bash
npm run build            # Compile CSS + JS
npm run test             # Run tests
npm run data:validate    # Validate country data
npm run deploy           # Deploy to Netlify
```

### **Build Output**
```
/dist
  ├── index.html
  ├── css/
  │   └── styles.min.css
  ├── js/
  │   └── app.min.js
  ├── data/
  │   ├── countries.json
  │   └── playbooks.json
  └── public/
      └── assets/
```

---

## 🧪 Testing Strategy

### **Unit Tests (Jest)**
```javascript
// tests/calculator.test.js
describe('Budget Calculator', () => {
  test('calculates true cost for Germany pathway', () => {
    const result = calculator.calculateCost('DE', 'student');
    expect(result.total).toBe(11508);
  });
});
```

### **Data Validation Tests**
```javascript
// tests/data-validation.test.js
describe('Country Data Schema', () => {
  test('all countries have required fields', () => {
    countries.forEach(country => {
      expect(country).toHaveProperty('id');
      expect(country).toHaveProperty('africanRate');
      expect(country).toHaveProperty('trueCost');
    });
  });
});
```

---

## 🌐 Deployment Architecture

### **Netlify Configuration**
```toml
# /netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[functions]
  directory = "netlify/functions"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

### **CDN & Caching**
- **HTML files:** No cache (always fresh)
- **CSS/JS assets:** Versioned, 1-year cache
- **JSON data:** 1-hour cache (policies change)
- **AdMob scripts:** Browser cache (3rd party)

---

## 🔐 Security Considerations

### **Content Security Policy**
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline'">
```

### **Data Protection**
- No user data collection (except anonymous AdMob tracking)
- No cookies by default
- Privacy policy for GDPR/CCPA compliance
- No backend database (static content only)

---

## 📈 Scalability Plan

### **Phase 1 (Current)**
- Static site on Netlify
- Client-side search with Fuse.js
- Manual content updates

### **Phase 2 (Q3 2026)**
- Headless CMS (optional: Contentful, Sanity)
- User comments/testimonials (moderated)
- Newsletter signup integration

### **Phase 3 (Q4 2026)**
- Community forum for peer support
- Appointment scheduling (1-on-1 consultations)
- Premium content tier (optional paid guides)

---

## 🛠️ Developer Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/global-route.git
cd global-route

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Deploy to production
npm run deploy
```

---

## 📞 Support & Questions

See CONTRIBUTING.md for development guidelines.
