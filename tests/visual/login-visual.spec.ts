import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe('Login page visual test', () => {
  let homePage: HomePage
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
  })

  test('login form', async () => {
    await loginPage.snapshotLoginForm()
  })

  test('Login error message', async () => {
    await loginPage.login('fail', 'some invalid password')
    await loginPage.snapshotErrorMessage()
  })
})
