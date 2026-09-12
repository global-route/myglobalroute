# Deployment & DevOps Guide

**Reconciled:** September 12, 2026

## Production pipeline

Global Route is a static Eleventy site intended for Git-based Netlify deployment.

`source → npm install → npm run verify → Netlify build → production smoke test`

### Commands

```bash
npm install
npm run data:validate
npm run build
npm run build:verify
npm run seo:a11y:verify
npm run verify
```

The repository intentionally does **not** bundle the Netlify CLI. The CLI's large deployment dependency tree was causing high/critical `npm audit` findings, while the application itself is a static build that can be deployed by the Netlify Git integration using `netlify.toml`.

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
- Netlify should use the repository's `netlify.toml` build command and `dist` publish directory.

## Release checklist

### Pre-release
- [ ] `npm run data:validate`
- [ ] `npm run test -- --runInBand`
- [ ] `npm run build`
- [ ] `npm run build:verify`
- [ ] `npm run seo:a11y:verify`
- [ ] Generated routes exist.
- [ ] `/data/countries.json` is reachable from the built site.
- [ ] Calculator works with representative budgets/currencies.
- [ ] Search works and safely renders results.

### Production smoke test

Check at minimum:

1. `/`
2. `/pages/countries.html`
3. `/pages/calculator.html`
4. `/pages/find-my-route.html`
5. `/data/countries.json`
6. One representative country detail route
7. One representative pathway detail route

Verify status, HTML content, JavaScript loading, mobile layout, source/evidence links and console errors.

## CI failure policy

If GitHub Actions/CI is unavailable, do not claim a test passed. Record **Not Tested — CI unavailable** and continue with every independent implementation that can be safely verified locally. If CI runs and fails, record the actual failure and remediate it before calling the gate passed.
