import { test, expect } from '@playwright/test'

test('simple basic test', async ( { page }) => {
  // here goes the test code
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})

