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

test('analytics consent is explicit', async ({ page }) => {
  await page.goto('/');
  const banner = page.locator('#analytics-consent');
  await expect(banner).toBeVisible();
  await expect(banner.getByRole('button', { name: /allow analytics/i })).toBeVisible();
  await expect(banner.getByRole('button', { name: /decline/i })).toBeVisible();
  await banner.getByRole('button', { name: /decline/i }).click();
  await expect(banner).toHaveCount(0);
});

test('calculator does not ship a guessed AdSense publisher id', async ({ page }) => {
  await page.goto('/pages/calculator.html');
  await expect(page.locator('script[src*="pagead2.googlesyndication.com"]')).toHaveCount(0);
});
