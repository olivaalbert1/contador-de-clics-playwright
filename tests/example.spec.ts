import { test, expect } from '@playwright/test'

test('The counter starts at 0', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const counter = page.getByTestId('contador')

  // Expect a initial counter state "to contain" a 0.
  expect(await counter.innerText()).toBe('0')
});

test('Incrementar button adds 1 to the counter', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const counterNumberAfterIncrement = parseInt(await page.getByTestId('contador').innerText())

  // Click the incrementar button.
  await page.getByRole('button', { name: 'Incrementar' }).click()

  const counterNumberBeforeIncrement = parseInt(await page.getByTestId('contador').innerText())

  const expectedResult = counterNumberAfterIncrement + 1;

  // Expects an increment of 1.
  expect(counterNumberBeforeIncrement).toStrictEqual(expectedResult)
});

