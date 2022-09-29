import { test, expect } from '@playwright/test'
import { FeedbackPage } from '../../page-objects/FeedbackPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe('Feedback form', () => {
  let homePage: HomePage
  let feedbackPage: FeedbackPage

  test.beforeEach(async ({ page }) => {
    feedbackPage = new FeedbackPage(page)
    homePage = new HomePage(page)
    await homePage.visit()
    await homePage.clickOnFeedbackLink()
  })

  // reset feedback form
  test('Reset feedback form', async ({ page }) => {
    await feedbackPage.fillForm('name', 'email', 'subject', 'comment')
    await feedbackPage.resetForm()
    await feedbackPage.assertReset()
  })

  // submit feedback form
  test('Submit feedback form', async ({ page }) => {
    await feedbackPage.fillForm('name', 'email', 'subject', 'comment')
    await feedbackPage.submitForm()
    await feedbackPage.feedbackFormSent()
  })
})
