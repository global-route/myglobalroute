const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/MyPathway2Global/i);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('find mypathway page loads', async ({ page }) => {
  await page.goto('/pages/find-mypathway.html');
  await expect(page).toHaveTitle(/Find MyPathway/i);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('calculator page loads', async ({ page }) => {
  await page.goto('/pages/calculator.html');
  await expect(page).toHaveTitle(/Calculator/i);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('countries page loads', async ({ page }) => {
  await page.goto('/pages/countries.html');
  await expect(page).toHaveTitle(/Country Directory|Countries/i);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('route finder returns goal matches after submit', async ({ page }) => {
  await page.goto('/pages/find-mypathway.html');
  await page.selectOption('select[name="goal"]', 'study');
  await page.getByRole('button', { name: 'Find routes' }).click();
  // wait for JS to finish updating the DOM after fetch
  await page.waitForFunction(
    () => document.querySelector('#route-results h2')?.textContent?.includes('Pathways matching'),
    { timeout: 15000 }
  );
  await expect(page.locator('#route-results article').first()).toBeVisible();
});

test('calculator AdSense script uses verified publisher id', async ({ page }) => {
  await page.goto('/pages/calculator.html');
  const scripts = page.locator('script[src*="pagead2.googlesyndication.com"]');
  const count = await scripts.count();
  if (count > 0) {
    const src = await scripts.first().getAttribute('src');
    expect(src).toMatch(/ca-pub-8077583188666813/);
  }
});

test('analytics consent banner hides after reject', async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('/pages/calculator.html');
  const banner = page.locator('#analytics-consent');
  await expect(banner).toBeVisible();
  await banner.getByRole('button', { name: /reject/i }).click();
  await expect(banner).toBeHidden();
  expect(await page.evaluate(() => localStorage.getItem('globalroute.analyticsConsent'))).toBe('denied');
});

test('Find MyPathway is excluded from display advertising', async ({ page }) => {
  await page.goto('/pages/find-mypathway.html');
  await expect(page.locator('[data-ad-slot]')).toHaveCount(0);
});

test('consent grant does not render a fake ad without a provider', async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('/pages/blog.html');
  const banner = page.locator('#analytics-consent');
  await expect(banner).toBeVisible();
  await page.locator('input[data-consent-option="advertising"]').check();
  await banner.getByRole('button', { name: /save/i }).click();
  await expect(banner).toBeHidden();
  const slot = page.locator('[data-ad-slot="ad_article_end"]');
  await expect(slot).toBeHidden();
  await expect(slot).toBeEmpty();
});
