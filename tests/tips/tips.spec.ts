import { test } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utils/data-helpers'

test.describe.only('Tips & Tricks Section', () => {
  test('TestInfo Object', async ({ page }, testInfo) => {
    await page.goto('https://www.example.com')
    // console.log('testInfo', testInfo.expectedStatus)
    let newNumber = await getRandomNumber()
    console.log(newNumber)
    let newString = await getRandomString()
    console.log(newString)
  })

  test('Test skip browser', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Feature not ready in Chrome Browser')
    await page.goto('https://www.example.com')
  })

  test('Test fixme annotation', async ({ page, browserName }) => {
    test.fixme(browserName === 'chromium', 'Test is not stable, needs revision')
    await page.goto('https://www.example.com')
  })

  const people = ['Mike', 'Judy', 'Peter', 'Elon', 'Alice']
  for (const name of people) {
    test(`Running test for ${name}`, async ({ page }) => {
      await page.goto('http://zero.webappsecurity.com/index.html')
      await page.type('#searchTerm', `${name}`)
      // await page.waitForTimeout(3000)
    })
  }

  test('Mouse movement simulation', async ({ page }) => {
    await page.goto('https://www.example.com')
    await page.mouse.move(0, 0)
    await page.mouse.down()
    await page.mouse.move(0, 100)
    await page.mouse.up()
  })

  test('multiple browser tabs inside 1 browser', async ({ browser }) => {
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const page3 = await context.newPage()

    await page1.goto('https://www.example.com')
    await page2.goto('https://www.example.com')
    await page3.goto('https://www.example.com')
    // await page1.waitForTimeout(5000)
  })

  //npx playwright open --device='iPhone 11' wikipedia.org
  //npx playwright pdf https://www.example.com my-file.pdf
  //npx playwright screenshot --device='iPhone 11' --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png
  //npx playwright open --timezone="Europe/Rome" --lang="it-IT" google.com
})
