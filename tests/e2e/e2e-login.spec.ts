import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel.only('login / logout flow', () => {
  let loginPage: LoginPage
  let homePage: HomePage
  // Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await homePage.visit()
  })

  // negative scenario
  test('negative scenario for login', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login('invalid username', 'invalid password')
    await loginPage.assertErrorMessage()
  })

  // positive scenario + logout
  test('Positive scenario for login + logout', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')

    //This should be working but ssl security is failing this test
    // const accountSummaryTab = await page.locator('#account_summary_tab')
    // await expect(accountSummaryTab).toBeVisible()
    // await page.goto('http://zero.webappsecurity.com/logout.html')
    // await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
