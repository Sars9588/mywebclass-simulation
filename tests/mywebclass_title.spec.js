// @ts-check
const { test, expect } = require('@playwright/test')

//Test #1 (DEAFULT) --> Checking Webpage Title for GetTracking
test('Should have MyWebClass.org title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle('Homepage - GetTracking')
})

//Test #2 (Issue #20) --> Testng the Learn More Button
test('Clicking the Learning More Button', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('text=Learn More')
  await expect(page).toHaveURL('http://localhost:3000/story.html')
})
