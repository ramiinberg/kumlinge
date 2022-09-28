import { PlaywrightTestConfig } from '@playwright/test'
//npx playwright test --config=playwright.config.ts --project=Webkit

const config: PlaywrightTestConfig = {
  timeout: 30000,
  retries: 0,
  testDir: 'tests/e2e',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off'
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox'
      }
    },
    {
      name: 'Webkit',
      use: {
        browserName: 'webkit'
      }
    }
  ]
}

export default config
