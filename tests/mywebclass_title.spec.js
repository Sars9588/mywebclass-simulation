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

//Test #6 (Issue #24) --> Testing the LinkedIn Button
test('Clicking the LinkedIn in Footer', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('#footer-linkedin')
  await expect(page).toHaveURL('https://www.linkedin.com/')
})

//Test #7 (Issue #25) --> Testing the Twitter Button
test('Clicking the Twitter in Footer', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('#footer-twitter')
  await expect(page).toHaveURL('https://twitter.com/')
})

//Test #8 (Issue #27) --> Testing the Facebook Button
test('Clicking the Facebook in Footer', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('#footer-facebook')
  await expect(page).toHaveURL('https://www.facebook.com/')
})

//Test #9 (Issue #28) --> Testing the Our Story Button NavBar
test('Clicking the Our Story in NavBar', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('#navbar-OurStory')
  await expect(page).toHaveURL('http://localhost:3000/story.html')
})