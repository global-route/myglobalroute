# Global Route: Quick Start Guide

**Welcome to Global Route!** This guide gets you up and running in 5 minutes.

---

## ⚡ 5-Minute Setup

### 1. Clone & Install (2 min)
```bash
git clone https://github.com/yourusername/global-route.git
cd global-route
npm install
```

### 2. Start Development (1 min)
```bash
npm run dev
# Opens http://localhost:8888
```

### 3. Make a Change (1 min)
Edit `/src/index.html` or `/src/css/styles.css` → changes auto-reload

### 4. Build for Production (1 min)
```bash
npm run build
npm run deploy
```

---

## 📁 File Locations

### 🎯 I want to...

**Build the homepage**
→ `/src/index.html`

**Style the site**
→ `/src/css/styles.css` (desktop) + `/src/css/responsive.css` (mobile)

**Add JavaScript logic**
→ `/src/js/app.js` (core) or create new module

**Create a new page**
→ Create file in `/src/pages/` (e.g., `about.html`)

**Write a blog post**
→ Create `.md` file in `/content/blog/`

**Add country data**
→ Edit `/src/data/countries.json`

**Understand the system**
→ Read `/docs/ARCHITECTURE.md`

**Learn contribution rules**
→ Read `/docs/CONTRIBUTING.md`

**Deploy changes**
→ `git push` → automatic Netlify deployment

---

## 🚀 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint

# Format code
npm run format

# Deploy to Netlify
npm run deploy

# Validate country data
npm run data:validate
```

---

## 📊 Project Structure (Simplified)

```
Global Route/
├── docs/               # 📖 Public documentation
├── internal/           # 🔒 Internal planning (confidential)
├── src/                # 💻 Source code
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── pages/
│   ├── components/
│   └── data/
├── content/            # 📝 Blog posts & guides
├── public/             # 🎨 Images & assets
├── scripts/            # 🛠️ Build tools
└── tests/              # 🧪 Test files
```

---

## 🎯 Your First Task

### Task 1: Add a Blog Post
1. Create file: `/content/blog/05-my-article.md`
2. Write content (2,000+ words)
3. Add frontmatter:
```markdown
---
title: "Article Title"
date: 2026-01-15
author: "Your Name"
keywords: "visa, country, topic"
---
```
4. Commit & push
5. Article appears on site automatically

### Task 2: Update Country Data
1. Open `/src/data/countries.json`
2. Add new country or update existing
3. Follow the schema structure
4. Run `npm run data:validate`
5. Commit & deploy

### Task 3: Create a New Page
1. Create `/src/pages/my-page.html`
2. Copy structure from `index.html`
3. Update content
4. Link from navigation in header
5. Commit & deploy

---

## 🔗 Important Files

| File | Purpose | Audience |
|------|---------|----------|
| README.md | Project overview | Everyone |
| PROJECT_STRUCTURE.md | Full file guide | Developers |
| /docs/MISSION_STATEMENT.md | Vision & values | Team, stakeholders |
| /docs/ARCHITECTURE.md | Tech stack | Developers |
| /docs/CONTRIBUTING.md | How to help | Contributors |
| /docs/DEPLOYMENT.md | Deploy guide | Tech lead |
| /docs/ADMOB_INTEGRATION.md | Monetization | Business lead |
| /internal/ | Business plans | Leadership only |

---

## 🆘 Troubleshooting

### Site won't start
```bash
npm install                    # Reinstall dependencies
npm run dev                    # Try again
```

### Build fails
```bash
npm run lint                   # Check for errors
npm run data:validate          # Validate JSON data
npm run build                  # Try build again
```

### Deployment stuck
```bash
git status                     # Check pending changes
git add .
git commit -m "Fix: description"
git push origin main           # Push to main branch
```

### Changes not showing
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+Shift+R)
- Check browser console for errors (F12)

---

## 💡 Pro Tips

### 1. Mobile-First Development
Test on mobile first, then larger screens. Use Chrome DevTools device emulation.

### 2. Git Workflow
```bash
git checkout -b feature/my-feature    # Create branch
git add .
git commit -m "Add: feature"
git push origin feature/my-feature    # Push branch
# Create pull request on GitHub
```

### 3. Before Deploying
```bash
npm run test          # Run tests
npm run lint          # Check code
npm run build         # Test build
npm run data:validate # Validate data
git push              # Deploy
```

### 4. Performance
- Keep assets small (images <100KB)
- Lazy-load AdMob scripts
- Use CSS instead of JavaScript
- Minify production builds

---

## 📚 Learning Resources

**New to web dev?**
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)

**Need Netlify help?**
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify CLI Reference](https://cli.netlify.com)

**SEO optimization?**
- [Google Search Console](https://search.google.com/search-console)
- [Moz SEO Guide](https://moz.com/beginners-guide-to-seo)

**Analytics tracking?**
- [Google Analytics Guide](https://support.google.com/analytics)

---

## 👥 Getting Help

**Technical questions?** → Check `/docs/ARCHITECTURE.md`
**Content questions?** → Check `/docs/CONTRIBUTING.md`
**Deployment stuck?** → Check `/docs/DEPLOYMENT.md`
**SEO help?** → Check `/docs/CONTENT_STRATEGY.md`
**Still stuck?** → Open GitHub issue or contact team lead

---

## 🎉 You're Ready!

Start with:
1. `npm install`
2. `npm run dev`
3. Edit `/src/index.html`
4. See changes live

Then:
- Explore `/docs/` for detailed guides
- Check `/src/` for code structure
- Add content in `/content/`
- Deploy with `npm run deploy`

**Happy building! 🚀**

---

**Questions?** See README.md
**Full guide?** See PROJECT_STRUCTURE.md
**Documentation?** Check `/docs/` folder
