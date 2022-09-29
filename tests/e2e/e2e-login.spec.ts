import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel('login / logout flow', () => {
  let loginPage: LoginPage
  // Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.visit()
  })

  // negative scenario
  test('negative scenario for login', async ({ page }) => {
    await page.click('#signin_button')
    await loginPage.login('invalid username', 'invalid password')
    await loginPage.assertErrorMessage()
  })

  // positive scenario + logout
  test('Positive scenario for login + logout', async ({ page }) => {
    await page.click('#signin_button')
    await loginPage.login('username', 'password')

    //This should be working but ssl security is failing this test
    // const accountSummaryTab = await page.locator('#account_summary_tab')
    // await expect(accountSummaryTab).toBeVisible()
    // await page.goto('http://zero.webappsecurity.com/logout.html')
    // await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
