# Deployment & DevOps Guide

---

## 🚀 Deployment Strategy

Global Route deploys to **Netlify** with automatic deployments from Git.

**Deployment Flow:**
```
Push to main branch → GitHub webhook → Netlify build → Live
```

---

## 🔧 Prerequisites

- Node.js 18+ installed
- npm 9+ installed
- Git installed
- Netlify account (free tier sufficient)
- GitHub account with repository

---

## 📋 Initial Setup

### **Step 1: Set Up Netlify Account**

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub account
3. Authorize Netlify to access your repositories
4. Create new site from Git

### **Step 2: Connect GitHub Repository**

1. In Netlify: **Add new site → Import an existing project**
2. Select GitHub repository: `global-route`
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Environment variables:** (see below)

### **Step 3: Configure Environment Variables**

In Netlify Dashboard → **Site settings → Environment variables:**

```
ADMOB_PUBLISHER_ID = ca-pub-XXXXXXXXXXXXXXXX
ANALYTICS_ID = G-XXXXXXXXXX
```

### **Step 4: Deploy**

```bash
# Push to main branch triggers automatic deployment
git push origin main

# Or manual deployment
npm run deploy
```

---

## 📁 Build Configuration

### **Netlify Configuration File**

**File:** `/netlify.toml`

```toml
# Build settings
[build]
  command = "npm run build"
  publish = "dist"

# Environment variables
[build.environment]
  NODE_ENV = "production"
  NODE_VERSION = "18.16.0"

# Redirects (SPA routing)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers for security & performance
[[headers]]
  for = "/*"
  [headers.values]
    # Security headers
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Content-Security-Policy = "default-src 'self'; script-src 'self' https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline'"
    Referrer-Policy = "strict-origin-when-cross-origin"

    # Performance headers
    Cache-Control = "public, max-age=0, must-revalidate"

# Asset caching rules
[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/data/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"

# Serverless functions (if needed)
[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

# Split preview deploys for testing
[build.preview]
  command = "npm run build"
```

---

## 🏗️ Build Process

### **Development Build**

```bash
npm run dev
# Runs Netlify dev server with live reload
# http://localhost:8888
```

### **Production Build**

```bash
npm run build
# Compiles CSS, JS, and optimizes assets
# Output: /dist folder
```

### **Build Steps Breakdown**

1. **Install dependencies:** `npm install`
2. **Validate data:** `node scripts/validate-data.js`
3. **Compile CSS:** `npm run build:css`
4. **Minify JS:** `npm run build:js`
5. **Generate sitemap:** `node scripts/generate-sitemap.js`
6. **Copy assets:** `cp -r public/* dist/`

---

## 📊 Monitoring & Analytics

### **Google Analytics Setup**

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add measurement ID to site
3. Track key events:
   - Page views
   - Search queries
   - Calculator uses
   - External link clicks (AdMob, sponsorships)

**Implementation:**

```html
<!-- Add to head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **Monitoring Checklist**

**Daily:**
- [ ] Check site is live and loading
- [ ] Verify mobile responsiveness
- [ ] Test search functionality
- [ ] Check ads are displaying

**Weekly:**
- [ ] Review Google Analytics traffic
- [ ] Check bounce rate trends
- [ ] Monitor page load times
- [ ] Check for 404 errors
- [ ] Review error logs

**Monthly:**
- [ ] Full performance audit
- [ ] SEO ranking check
- [ ] Security audit
- [ ] Backup database/content
- [ ] Review revenue metrics

---

## 🔒 Security & Compliance

### **HTTPS & SSL**

✅ Netlify automatically provisions SSL certificates (Let's Encrypt)
✅ All traffic redirected to HTTPS
✅ Certificate auto-renews

### **Privacy & GDPR**

Add privacy policy covering:
- Google AdMob data collection
- Google Analytics tracking
- No personal data collection
- User data retention policies
- CCPA/GDPR compliance

**Privacy Policy Template:**

```markdown
# Privacy Policy

## Information Collection
We collect anonymous data through:
- Google Analytics (page views, traffic sources)
- Google AdMob (anonymous ad performance)
- No personally identifiable information

## Data Usage
Your data is used to:
- Improve site performance
- Serve relevant ads
- Track anonymized traffic patterns

## Your Rights (GDPR/CCPA)
- You can request data deletion
- You can opt out of analytics tracking
- Contact: [privacy@global-route.app]
```

### **Content Security**

- ✅ No inline JavaScript
- ✅ No eval() or Function() constructors
- ✅ External scripts from trusted domains only
- ✅ Content Security Policy headers enabled

---

## 🐛 Debugging & Troubleshooting

### **Check Deployment Status**

```bash
# View recent deployments
netlify sites:list
netlify deploys:list --site=your-site-name

# Check build logs
netlify logs
```

### **Common Issues**

**Issue:** Build fails
**Solution:**
```bash
npm install      # Reinstall dependencies
npm run build    # Test build locally
npm run test     # Run tests
npm run lint     # Check for errors
```

**Issue:** Pages not loading after deployment
**Solution:**
- Check Netlify redirects in netlify.toml
- Verify public directory is `dist`
- Clear Netlify cache: Deploys → Clear cache & redeploy

**Issue:** Ads not loading
**Solution:**
- Check AdMob Publisher ID in environment variables
- Verify ad unit codes match config
- Check browser console for errors

**Issue:** Slow page loads**
**Solution:**
- Check Netlify analytics for bottlenecks
- Run Lighthouse audit
- Optimize images/CSS/JS size
- Enable Netlify edge caching

---

## 🔄 CI/CD Pipeline

### **GitHub Actions (Optional)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### **Environment Variables for CI/CD**

Set in GitHub Secrets:
- `NETLIFY_AUTH_TOKEN` (Netlify personal access token)
- `NETLIFY_SITE_ID` (Site ID from Netlify)
- `ADMOB_PUBLISHER_ID` (AdMob Publisher ID)

---

## 📈 Performance Optimization

### **Pre-Deployment Checklist**

```bash
# Test build locally
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Check for console errors
npm run test:e2e

# Validate data
npm run data:validate

# Lighthouse audit
npx lighthouse https://your-site.com
```

### **Performance Targets**

| Metric | Target | Tools |
|--------|--------|-------|
| First Contentful Paint | <1.5s | Lighthouse |
| Largest Contentful Paint | <2.5s | Lighthouse |
| Cumulative Layout Shift | <0.1 | Lighthouse |
| Time to Interactive | <3s | Lighthouse |
| Page Size | <500KB | WebPageTest |

### **Optimization Tips**

- ✅ Lazy-load AdMob scripts (3-second delay)
- ✅ Defer JavaScript loading
- ✅ Minify CSS and JS
- ✅ Compress images (use SVG for flags)
- ✅ Enable Netlify CDN caching
- ✅ Use system fonts (no custom fonts)

---

## 🔄 Rollback & Disaster Recovery

### **Quick Rollback**

```bash
# View deployment history
netlify deploys:list

# Rollback to previous deployment
netlify deploy --prod --input=../previous-deployment-folder
```

### **Backup Strategy**

**Daily automated backups:**
- GitHub automatically backs up repository
- Netlify maintains deployment history
- Manual backup command:

```bash
# Backup content and configuration
git clone [repo] global-route-backup-$(date +%Y%m%d)
```

---

## 📞 Post-Deployment Checklist

After each deployment:

- [ ] Site loads without errors
- [ ] Navigation works
- [ ] Search functionality works
- [ ] Calculator loads properly
- [ ] Ads display correctly
- [ ] Mobile responsive
- [ ] Analytics tracking working
- [ ] No console errors
- [ ] Links are valid (no 404s)
- [ ] Performance acceptable (<3s load)

---

## 🚨 Emergency Procedures

### **Site Down?**

1. Check Netlify status page
2. Review recent deployments for failures
3. Check GitHub Actions for build errors
4. Rollback to previous deployment
5. Check server logs for errors

### **Performance Degradation?**

1. Check Netlify analytics for traffic spikes
2. Review page load times
3. Check for AdMob loading delays
4. Monitor server resource usage
5. Consider enabling Netlify Pro for priority support

### **Security Incident?**

1. Disable site immediately
2. Review access logs
3. Check for unauthorized changes
4. Update security headers
5. Force redeployment from clean code

---

## 📚 Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify CLI Reference](https://cli.netlify.com/)
- [GitHub Actions Guide](https://docs.github.com/en/actions)
- [Lighthouse Performance Audits](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org)
