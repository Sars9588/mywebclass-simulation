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

//Test #10 (Issue #29) --> Testing the Privacy Policy Button NavBar
test('Clicking the Privacy Policy in NavBar', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await page.click('#navbar-PrivacyPolicy')
  await expect(page).toHaveURL('http://localhost:3000/privacy.html')
})

//Test #11 (Issue #30) --> Testing the GetTracking Text Present
test('Testing the GetTracking Text Visible', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await expect(page.locator('#JumboHeader')).toHaveText('GetTracking');
})

//Test #12 (Issue #31) --> Testing the Learn More Button Text
test('Testing the Learn More Button Text', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await expect(page.locator('#learnMoreText')).toHaveText('Learn More');
})

//Test #13 (Issue #32) --> Begin Tracking Section Text
test('Begin Tracking Section Text', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await expect(page.locator('#secondSectionHomePage')).toHaveText('Begin Tracking today!');
})

//Test #14 (Issue #33) --> Checking if the Image is Present
test('Checking if Main Image is Present on Homepage', async ({ page }) => {
  await page.goto('http://localhost:3000')
  //await page.click('#agreeButton')
  //await expect(page).toHaveScreenshot('homepageimage-4309ec7b54c81b41fb8a.jpg');
  const image = await page.$('img[src="assets/images/homepageimage-4309ec7b54c81b41fb8a.jpg"]');
  const image2 = await page.$('img[src="c184c34a5618ab94fabf.jfif"]');
  expect(image).not.toBeNull();
  expect(image2).not.toBeNull();
})

//Test #15 (Issue #34) --> Checking the Author Name
test('Checking Author Name on Homepage of Quote', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('#agreeButton')
  await expect(page.locator('#authorName')).toHaveText('Joyce Meyer / American Author');
})

//Test #16 (Issue #35) --> Testing Homepage Button Our Story Page
test('Clicking the HomepageButton in Nav Bar', async ({ page }) => {
  await page.goto('http://localhost:3000/story.html')
  await page.click('#agreeButton')
  await page.click('#navBar-Homepage')
  await expect(page).toHaveURL('http://localhost:3000/index.html')
})

//Test #17 (Issue #36) --> Testing Our Story Page Title
test('Testing Our Story Page Title', async ({ page }) => {
  await page.goto('http://localhost:3000/story.html')
  await page.click('#agreeButton')
  await expect(page.locator('#title')).toHaveText('Our Story');
})

//Test #18 (Issue #37) --> Testing Our Story - Get Tracking in Navigation
test('Testing Our Story in Navigation', async ({ page }) => {
  await page.goto('http://localhost:3000/story.html')
  await page.click('#agreeButton')
  const pageTitle = "Our Story - Get Tracking"
  await expect(page.locator('#pageTitleNav')).toHaveText(pageTitle);
})

//Test #19 (Issue #39) --> Testing Mission Present in Our Story
test('Testing if Mission Present in Our Story', async ({ page }) => {
  await page.goto('http://localhost:3000/story.html')
  await page.click('#agreeButton')
  await expect(page.locator('#missionSubTitle')).toHaveText("Mission");
})