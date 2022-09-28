import { test, expect } from '@playwright/test'

test('simple basic test', async ({ page }) => {
  // here goes the test code
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})

test('clicking on elemenets', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.click('text=Sign in')

  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

// test('Selectors',async ({ page }) => {
//   // text
//   await page.click("text=some text")

//   // CSS selectors
//   await page.click('button')
//   await page.click('#id')
//   await page.click('.class')

//   //Only visible CSS selector
//   await page.click('.submit-button:visible')

//   // Combinations
//   await page.click('#username .first')

//   // XPath
//   await page.click('//button')
// })

test('Working with Inputs', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')

  await page.type('#user_login', 'some username')
  await page.type('#user_password', 'some password')
  await page.click('text=Sign in')

  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test('Assertions', async ({ page }) => {
  await page.goto('https://www.example.com')
  await expect(page).toHaveURL('https://www.example.com')
  await expect(page).toHaveTitle('Example Domain')

  const element = await page.locator('h1')
  await expect(element).toBeVisible()
  await expect(element).toHaveText('Example Domain')
  await expect(element).toHaveCount(1)

  const nonExistingElement = await page.locator('h5')
  await expect(nonExistingElement).not.toBeVisible()
})
