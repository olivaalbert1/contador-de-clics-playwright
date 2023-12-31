import { test, expect } from '@playwright/test'
import { randomInt } from 'crypto';

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

test('Decrementar button decreases 1 to the counter', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const counterNumberAfterDecrement = parseInt(await page.getByTestId('contador').innerText())

  // Click the decrementar button.
  await page.getByRole('button', { name: 'Decrementar' }).click()

  const counterNumberBeforeDecrement = parseInt(await page.getByTestId('contador').innerText())

  const expectedResult = counterNumberAfterDecrement - 1;

  // Expects an decrement of 1.
  expect(counterNumberBeforeDecrement).toStrictEqual(expectedResult)
});

test('Reset button resets the counter to initial state', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const initialStatus = parseInt(await page.getByTestId('contador').innerText())

  const randomNumberClicks = randomInt(100)

  await page.getByRole('button', { name: 'Decrementar' }).click({clickCount:randomNumberClicks})

  // Click the reset button.
  await page.getByRole('button', { name: 'Reiniciar' }).click()

  const counterNumberBeforeDecrement = parseInt(await page.getByTestId('contador').innerText())

  // Expects the counter to initial state.
  expect(counterNumberBeforeDecrement).toStrictEqual(initialStatus)
});

test.skip('I do not really want run this test',async({page}) => {
  expect(1).toBe(1)
})