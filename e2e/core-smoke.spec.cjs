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

test('route finder form has required fields and submit button', async ({ page }) => {
  await page.goto('/pages/find-mypathway.html');
  await expect(page.locator('select[name="goal"]')).toHaveCount(1);
  await expect(page.locator('input[name="budget"]')).toHaveCount(1);
  await expect(page.locator('select[name="region"]')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Find routes' })).toBeVisible();
  await expect(page.locator('#route-results')).toBeVisible();
});

test('calculator AdSense script uses verified publisher id', async ({ page }) => {
  await page.goto('/pages/calculator.html');
  // check the raw HTML of the page contains the verified publisher id
  const content = await page.content();
  expect(content).toContain('ca-pub-8077583188666813');
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
