import { test, expect } from '@playwright/test'
import { loadHomePage, assertTitle } from '../helpers'

// test.only
// test.skip

//npx playwring test --grep @myTag
//npx playwring test --grep-inver @MyTag
//npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html

//npm run test:webkit -- --headed

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

test.skip('Selectors', async ({ page }) => {
  // text
  await page.click('text=some text')

  // CSS selectors
  await page.click('button')
  await page.click('#id')
  await page.click('.class')

  //Only visible CSS selector
  await page.click('.submit-button:visible')

  // Combinations
  await page.click('#username .first')

  // XPath
  await page.click('//button')
})

test.describe('My first test suite', () => {
  test('Working with Inputs', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')

    await page.type('#user_login', 'some username')
    await page.type('#user_password', 'some password')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
  })

  test('Assertions @myTag', async ({ page }) => {
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
})

test.describe('Hooks', () => {
  test.beforeEach(async ({ page }) => {
    //1. step is load website
    await page.goto('https://www.example.com')
  })

  test('Screenshots', async ({ page }) => {
    //2. take screenshot of full page
    await page.screenshot({ path: 'screenshot.png', fullPage: true })
  })

  test('single element screenshot', async ({ page }) => {
    const element = await page.$('h1')
    await element?.screenshot({ path: 'single_element_screenshot.png' })
  })
})

test.only('Custom Helpers', async ({ page }) => {
  await loadHomePage(page)
  // await page.pause()
  await assertTitle(page)
})
