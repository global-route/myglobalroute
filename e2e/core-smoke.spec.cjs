const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Global Route/i);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('find route page loads', async ({ page }) => {
  await page.goto('/pages/find-my-route.html');
  await expect(page).toHaveTitle(/Find My Route/i);
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
test('calculator does not ship a guessed AdSense publisher id', async ({ page }) => {
  await page.goto('/pages/calculator.html');
  await expect(page.locator('script[src*="pagead2.googlesyndication.com"]')).toHaveCount(0);
});

test('analytics consent is explicit and persisted', async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('/pages/calculator.html');
  const banner = page.locator('#analytics-consent');
  await expect(banner).toBeVisible();
  await expect(banner.getByRole('button', { name: 'Allow analytics' })).toBeVisible();
  await expect(banner.getByRole('button', { name: 'Decline' })).toBeVisible();
  await banner.getByRole('button', { name: 'Decline' }).click();
  await expect(banner).toHaveCount(0);
  expect(await page.evaluate(() => localStorage.getItem('globalroute.analyticsConsent'))).toBe('denied');
});

test('Find My Route remains excluded from display advertising', async ({ page }) => {
  await page.goto('/pages/find-my-route.html');
  await page.evaluate(() => localStorage.setItem('globalroute.analyticsConsent', 'granted'));
  await page.reload();
  await expect(page.locator('[data-ad-slot]')).toHaveCount(0);
  await expect(page.locator('script[src*="pagead2.googlesyndication.com"]')).toHaveCount(0);
});

test('consent grant does not render a fake ad without a provider', async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto('/pages/blog.html');
  const banner = page.locator('#analytics-consent');
  await expect(banner).toBeVisible();
  await banner.getByRole('button', { name: 'Allow analytics' }).click();
  expect(await page.evaluate(() => localStorage.getItem('globalroute.analyticsConsent'))).toBe('granted');
  const slot = page.locator('[data-ad-slot="ad_article_end"]');
  await expect(slot).toBeHidden();
  await expect(slot).toBeEmpty();
  await expect(page.locator('script[src*="pagead2.googlesyndication.com"]')).toHaveCount(0);
});
