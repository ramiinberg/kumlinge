import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {
  const baseURL = 'https://regres.in/api'
  test('simple api test - Assert response status', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/2`)
    expect(response.status()).toBe(200)
  })

  // test('simple api test - assert invalid endpoint', async ({ request }) => {
  //   const response = await request.get(`${baseURL}/non-existing-endpoint`)
  //   expect(response.status()).toBe(404)
  // })
})
