import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {
  const baseURL = 'https://reqres.in/api'
  test('simple api test - Assert response status', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/2`)
    expect(response.status()).toBe(200)
  })

  test('simple api test - assert invalid endpoint', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/non-existing-endpoint`)
    expect(response.status()).toBe(404)
  })

  test('Get request - Get user details', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/1`)
    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(1)
    expect(responseBody.data.first_name).toBe('George')
    expect(responseBody.data.last_name).toBe('Bluth')
    expect(responseBody.data.email).toBeTruthy()
  })
})
