// import { test, expect } from '@playwright/test'

// let urlHome = "http://localhost:3000";
// let urlResult = "http://localhost:3000/result";

// test.beforeAll(async () => {
//     console.log('Before tests');
// });

// test.afterAll(async () => {
//     console.log('After tests');
// });

// test.describe('Header area', () => {
//     test('The title tag', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page).toHaveTitle('QuickFit Home');
//     })

//     test('The meta tag', async ({ page }) => { 
//         // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
//         await page.goto(urlHome)
        
//         const metaDescriptionOne = page.locator('meta[name="author"]')
//         await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109_Sarah Sun")

//         const metaDescriptionTwo = page.locator('meta[property="og:title"]');
//         await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Home Page')

//         const metaDescriptionThree = page.locator('meta[property="og:description"]');
//         await expect(metaDescriptionThree).toHaveAttribute('content', 'BCIT Digital Design and Development Diploma')
//     })

//     test('The link tag', async ({ page }) => {
//         await page.goto(urlHome)

//         const linkTag = page.locator('link[rel="icon"]');
//         await expect(linkTag).toHaveAttribute('href', '/images/logo.png')
//     })
// })

// test.describe('Headoer components area', () => {
//     //Check Header components
//     test('Count number of image under first content area', async ({ page }) => {
//         await page.goto(urlHome);
//         await expect(page.locator('div > img')).toHaveCount(1);
//     })

//     test('Check image alt tag', async ({ page }) => {
//         await page.goto(urlHome);
//         const imageTag = page.locator('Image[alt="logo"]');
//         await expect(imageTag).toBeTruthy();
//     })
// })

// test.describe('Main area', () => {
//     test('Count number of div in first content area', async ({ page }) => {
//         await page.goto(urlHome);
//         await expect(page.locator('div')).toHaveCount(15);
//     })
//     //Custome form area
//     test('Count number of forms content area', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page.locator('div > form')).toHaveCount(1);
//     })
//     test('Header tag of form', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page.locator('div > form > h2')).toHaveCount(1);
//     })
//     test('Count div in form ', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page.locator('div > form > div')).toHaveCount(4);
//     })
//     test('Count label div in form ', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page.locator('div > form > div > div')).toHaveCount(4);
//     })
//     test('Count input in form ', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page.locator('div > form > div > input')).toHaveCount(4);
//     })
//     test('Count number of buttons in main area', async({ page }) => {
//         await page.goto(urlHome);
//         // const buttonCount = await page.$$eval('button', buttons => buttons.length);
//         // console.log(`Number of buttons found: ${buttonCount}`);
//         await expect(page.locator('button')).toHaveCount(1);
//     });
//     test('Submit Button', async({ page }) => {
//         await page.goto(urlHome)
//         await page.locator('input#name');
//         await page.locator('input#age');
//         await page.locator('input#weight');
//         await page.locator('input#height');
//     })
// })
