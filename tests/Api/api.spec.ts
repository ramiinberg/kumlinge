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

  test('POST Request - Create new user', async ({ request }) => {
    const response = await request.post(`${baseURL}/users`, {
      data: {
        id: 1000
      }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(201)
    expect(responseBody.id).toBe(1000)
    expect(responseBody.createdAt).toBeTruthy()
  })

  test('POST Request - Login', async ({ request }) => {
    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(200)
    expect(responseBody.token).toBeTruthy()
  })

  test('Post request - Login fail', async ({ request }) => {
    const response = await request.post(`${baseURL}/login`, {
      data: {
        email: 'eve.holt@reqres.in'
      }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(400)
    expect(responseBody.error).toBe('Missing password')
  })

  test('Put request - update user', async ({ request }) => {
    const response = await request.put(`${baseURL}/users/2`, {
      data: {
        name: 'new name',
        job: 'new job'
      }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(200)
    expect(responseBody.name).toBe('new name')
    expect(responseBody.job).toBe('new job')
    expect(responseBody.updatedAt).toBeTruthy()
  })

  test('Delete request - Delete user', async ({ request }) => {
    const response = await request.delete(`${baseURL}/users/2`)
    expect(response.status()).toBe(204)
  })
})
