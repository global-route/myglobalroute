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
  await expect(page).toHaveTitle(/Countries/i);
  await expect(page.locator('h1')).toHaveCount(1);
});
