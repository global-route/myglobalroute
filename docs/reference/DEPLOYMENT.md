# Deployment & DevOps Guide

**Reconciled:** September 5, 2026

## Production pipeline

Global Route is a static Eleventy site deployed to Netlify.

`source → npm run build → dist/ → Netlify deploy → production smoke test`

### Commands

```bash
npm install
npm run data:validate
npm run build
```

`npm run deploy` performs the build and invokes the Netlify CLI when local CLI deployment is required.

## Important runtime paths

- Source data: `src/data/countries.json`
- Generated data: `/data/countries.json`
- Generated assets: `/css/*`, `/js/*`, and copied public assets
- Build output: `dist/`

Application code must reference generated paths, never source-tree paths.

## Netlify rules

- Keep exactly one `[build]` block.
- Do not gzip files in-place while retaining `.html`, `.js` or `.css` extensions.
- Do not add a global SPA rewrite to a multi-page Eleventy site.
- Cache HTML conservatively; long-cache fingerprinted assets when fingerprinting is guaranteed.
- Treat CSP as an inventory of actual third-party dependencies, not a copy-paste allowlist.

## Release checklist

### Pre-release
- [ ] `npm run data:validate`
- [ ] `npm run build`
- [ ] Unit tests pass.
- [ ] Generated routes exist.
- [ ] `/data/countries.json` is reachable from the built site.
- [ ] Calculator works with representative budgets/currencies.
- [ ] Search works and safely renders results.

### Production smoke test

Check at minimum:

1. `/`
2. `/pages/countries.html`
3. `/pages/calculator.html`
4. `/pages/blog.html`
5. `/data/countries.json`
6. One representative blog/deep-link route

Verify status, HTML content, JavaScript loading, mobile layout, and console errors.

## CI failure policy

If GitHub Actions/CI is unavailable, do not claim a test passed. Record **Not Tested — CI unavailable** and continue with every independent implementation that can be safely verified locally.
