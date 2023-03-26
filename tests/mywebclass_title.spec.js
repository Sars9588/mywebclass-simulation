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
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('text=Learn More')
  await expect(page).toHaveURL('http://localhost:3000/story.html')
})

//Test #3 (Issue #21) --> Testing the Logo Button Click
test('Clicking the Logo in Nav Bar', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('.navbar-brand')
  await expect(page).toHaveURL('http://localhost:3000')
})

//Test #4 (Issue #22) --> Testing the Our Story Footer
test('Clicking the Our Story in Footer', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('#footer-ourstory')
  await expect(page).toHaveURL('http://localhost:3000/story.html')
})

//Test #5 (Issue #23) --> Testing the Privacy Policy Footer
test('Clicking the Privacy Policy in Footer', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('#footer-privacypolicy')
  await expect(page).toHaveURL('http://localhost:3000/privacy.html')
})