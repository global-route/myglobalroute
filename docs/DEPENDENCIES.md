# Global Route: Dependencies & Requirements

**Document Version:** 1.0  
**Last Updated:** January 15, 2026  
**Maintained By:** Tech Lead

---

## 📦 System Requirements

### Minimum Requirements
- **Node.js:** 18.0.0 or higher
- **npm:** 9.0.0 or higher
- **Git:** 2.30.0 or higher
- **Disk Space:** 500MB minimum
- **RAM:** 2GB minimum

### Recommended Setup
- **Node.js:** 18.16.0 LTS (latest stable)
- **npm:** 10.2.0+
- **macOS/Linux:** Current generation
- **Windows:** 10/11 with WSL2
- **Editor:** VS Code with ESLint extension

### Browser Support
- **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile:** iOS Safari 14+, Chrome Android 90+
- **Fallback:** ES5 transpilation available (optional)

---

## 📋 Project Dependencies

### Production Dependencies (Used in Live Site)

#### fuse.js (^7.0.0)
```json
{
  "name": "fuse.js",
  "version": "^7.0.0",
  "purpose": "Client-side fuzzy search",
  "size": "~15KB gzipped",
  "features": [
    "Semantic search",
    "Field filtering",
    "Suggestions",
    "Weighted scoring"
  ],
  "license": "Apache 2.0",
  "repository": "https://github.com/krisk/fuse"
}
```

**Installation:**
```bash
npm install fuse.js
```

**Usage:**
```javascript
import Fuse from 'fuse.js';
const fuse = new Fuse(countries, options);
const results = fuse.search(query);
```

### Development Dependencies (Build & Testing Only)

#### @babel/core (^7.24.0)
```json
{
  "purpose": "JavaScript transpilation",
  "category": "DevDependency",
  "used_for": "Converting ES6+ to compatible JS",
  "size": "~50KB"
}
```

#### @babel/preset-env (^7.24.0)
```json
{
  "purpose": "Smart preset for target environments",
  "category": "DevDependency",
  "defines": "Browser compatibility targets"
}
```

#### ESLint (^8.57.0)
```json
{
  "purpose": "Code quality & standards",
  "category": "DevDependency",
  "checks": [
    "Syntax errors",
    "Best practices",
    "Code style"
  ]
}
```

#### Jest (^29.7.0)
```json
{
  "purpose": "Unit testing framework",
  "category": "DevDependency",
  "features": [
    "Test runner",
    "Assertions",
    "Coverage reporting"
  ]
}
```

#### Netlify CLI (^17.30.0)
```json
{
  "purpose": "Local development & deployment",
  "category": "DevDependency",
  "features": [
    "Dev server",
    "Function testing",
    "Deployment"
  ]
}
```

#### Prettier (^3.2.5)
```json
{
  "purpose": "Code formatting",
  "category": "DevDependency",
  "formats": [
    "JavaScript",
    "CSS",
    "HTML",
    "Markdown"
  ]
}
```

#### PostCSS (^8.4.35)
```json
{
  "purpose": "CSS processing",
  "category": "DevDependency",
  "plugins": [
    "Autoprefixer",
    "cssnano",
    "preset-env"
  ]
}
```

#### PostCSS CLI (^11.0.0)
```json
{
  "purpose": "Command-line CSS processing",
  "category": "DevDependency"
}
```

---

## 🔧 Installation Instructions

### Step 1: Prerequisites Check
```bash
# Check Node.js version
node --version  # Should be v18.0.0+

# Check npm version
npm --version   # Should be 9.0.0+

# Check Git
git --version
```

### Step 2: Clone Repository
```bash
git clone https://github.com/global-route/myglobalroute.git
cd myglobalroute
```

### Step 3: Install Dependencies
```bash
# Install from package.json
npm install

# Or use npm ci for exact versions (recommended for CI/CD)
npm ci
```

### Step 4: Verify Installation
```bash
# Check installed packages
npm list

# Run tests
npm run test

# Check linting
npm run lint
```

---

## 📦 package.json Reference

### Current package.json
```json
{
  "name": "global-route",
  "version": "1.0.0",
  "description": "African mobility & migration intelligence",
  "main": "src/js/app.js",
  "scripts": {
    "dev": "netlify dev",
    "build": "npm run build:css && npm run build:js",
    "build:css": "node scripts/build-css.js",
    "build:js": "node scripts/build-js.js",
    "test": "jest --run",
    "test:watch": "jest --watch",
    "lint": "eslint src/js --fix",
    "format": "prettier --write 'src/**/*.{js,css,html,md}'",
    "deploy": "netlify deploy --prod",
    "data:validate": "node scripts/validate-data.js"
  },
  "keywords": [
    "visa",
    "immigration",
    "Africa",
    "mobility"
  ],
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  },
  "dependencies": {
    "fuse.js": "^7.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.24.0",
    "@babel/preset-env": "^7.24.0",
    "eslint": "^8.57.0",
    "jest": "^29.7.0",
    "netlify-cli": "^17.30.0",
    "prettier": "^3.2.5",
    "postcss": "^8.4.35",
    "postcss-cli": "^11.0.0"
  }
}
```

---

## 🔄 Dependency Updates

### Update Strategy
- **Minor versions:** Auto-update (`npm update`)
- **Major versions:** Manual review before update
- **Lock file:** Commit `package-lock.json` to Git

### Update Command
```bash
# Check outdated packages
npm outdated

# Update all minor versions
npm update

# Update specific package
npm install fuse.js@latest

# Audit for security issues
npm audit
npm audit fix
```

---

## 🛡️ Security Considerations

### Dependency Scanning
```bash
# Audit for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Force fix (may break compatibility)
npm audit fix --force
```

### Recommended Packages (Optional)
- **npm-check-updates:** Keep packages current
- **snyk:** Continuous vulnerability scanning
- **bundlesize:** Monitor bundle size

---

## 📊 Dependency Analysis

### Minimal Dependencies Philosophy
**Goal:** Keep dependency count low for security & performance

**Current Count:**
- Production: 1 (fuse.js)
- Development: 8
- Total: 9

**Why So Few?**
- No framework overhead (React, Vue, Angular)
- No CSS framework (Bootstrap, Tailwind)
- No utility library (Lodash, Underscore)
- Vanilla JavaScript throughout
- Static content deployment

### Dependency Tree
```
global-route (root)
├── fuse.js (production)
│   └── No dependencies
├── @babel/core (dev)
│   └── Dependencies for transpilation
├── ESLint (dev)
├── Jest (dev)
├── Netlify CLI (dev)
├── Prettier (dev)
└── PostCSS (dev)
```

---

## 🚀 Build Script Dependencies

### Custom Build Scripts (Require Node.js)

**scripts/build-css.js**
- Requires: `postcss`, `postcss-cli`
- Purpose: Compile CSS with autoprefixer & minification

**scripts/build-js.js**
- Requires: `@babel/core`, `@babel/preset-env`
- Purpose: Transpile and minify JavaScript

**scripts/validate-data.js**
- Requires: Node.js only (no npm packages)
- Purpose: Validate countries.json schema

---

## 📋 Third-Party Service Dependencies

### Not in package.json (CDN/External)

#### Google Analytics
- **URL:** https://www.googletagmanager.com/gtag/js
- **Purpose:** Analytics tracking
- **Size:** ~50KB
- **Impact:** Non-blocking (async)

#### Google AdMob
- **URL:** https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
- **Purpose:** Monetization ads
- **Size:** ~100KB
- **Impact:** Deferred loading (3s delay)

#### Google Fonts (Optional Future)
- **If added:** System fonts preferred instead
- **Size:** ~100KB+ per font

---

## 🔐 Dependency Security Best Practices

### Safe Dependency Management

1. **Version Pinning**
   ```json
   {
     "fuse.js": "7.0.0"      // ✅ Exact version
   }
   ```

2. **Avoid Overly Permissive Ranges**
   ```json
   {
     "bad": "*",              // ❌ Any version
     "bad": "1.x",            // ❌ Any 1.x
     "good": "^1.2.3",        // ✅ Up to 2.0.0
     "best": "1.2.3"          // ✅ Exact version
   }
   ```

3. **Regular Audits**
   ```bash
   npm audit
   npm audit fix
   ```

4. **Review Before Updating**
   ```bash
   npm outdated
   npm update --save
   ```

---

## 📦 Dependency Installation Modes

### Development Installation
```bash
npm install
# Installs all dependencies (prod + dev)
```

### Production Installation
```bash
npm ci --production
# Installs only production dependencies
# Used in deployment
```

### Specific Package
```bash
npm install package-name
npm install --save-dev package-name
```

---

## 🧪 Testing Dependency Chain

### Minimal Test Setup
```bash
npm run test
# Runs Jest with minimal config
```

### Full Development Setup
```bash
npm install    # All dependencies
npm run build  # Build CSS + JS
npm run test   # Run tests
npm run lint   # Check code quality
npm run dev    # Start dev server
```

---

## 📊 Dependency Size Impact

### Bundle Analysis

**Production Bundle:**
```
fuse.js:           15KB (gzipped)
app.js:             8KB (gzipped)
calculator.js:      6KB (gzipped)
search.js:          7KB (gzipped)
admob-loader.js:    4KB (gzipped)
styles.css:        12KB (gzipped)
responsive.css:     8KB (gzipped)
countries.json:    20KB (gzipped)
─────────────────────────────
Total:             ~80KB (gzipped)
```

**vs. Framework Alternatives:**
```
React bundle:      ~100KB+
Vue bundle:        ~80KB+
Angular bundle:    ~200KB+
Bootstrap CSS:     ~25KB+
```

**Verdict:** ✅ Minimal stack saves 50-150KB

---

## 🆘 Troubleshooting Dependencies

### Common Issues

**Issue:** `npm install` fails
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**Issue:** Module not found
```bash
# Reinstall specific module
npm install fuse.js

# Check if installed
npm list fuse.js
```

**Issue:** Version conflict
```bash
# Use npm ci for exact versions
npm ci
```

---

## 📚 Additional Resources

### Documentation
- [npm docs](https://docs.npmjs.com/)
- [Node.js docs](https://nodejs.org/docs/)
- [Netlify docs](https://docs.netlify.com/)

### Package Repos
- [fuse.js](https://github.com/krisk/fuse)
- [ESLint](https://github.com/eslint/eslint)
- [Jest](https://github.com/facebook/jest)

---

## ✅ Dependency Checklist

Before deploying:

- [ ] All dependencies in package.json
- [ ] npm audit shows no vulnerabilities
- [ ] package-lock.json committed to Git
- [ ] Node version matches requirement
- [ ] `npm install` succeeds locally
- [ ] `npm run test` passes
- [ ] `npm run build` succeeds
- [ ] No missing peer dependencies
- [ ] licenses compatible
- [ ] bundle size acceptable

---

**Dependency Documentation: COMPLETE**

*Maintained by: Tech Lead  
Last Updated: January 15, 2026*
