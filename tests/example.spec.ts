import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const counter = page.getByTestId('contador')

  // Expect a initial counter state "to contain" a 0.
  expect(await counter.innerText()).toBe('0')
});
