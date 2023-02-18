import { test, devices, expect } from '@playwright/test';

let urlHome = 'http://localhost:3000/';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("Checking justify-content for home tablet", () => {
    test("Checking for justifyContent on tablet", async ({ page }) => {
        await page.goto(urlHome)
        
        const contentCont = page.locator('#main');

        const grabbedJustifyContent = await contentCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("justify-content")
        })
        console.log(grabbedJustifyContent);
        expect(grabbedJustifyContent).toBe("center");
    })
})

test.describe("Checking padding for home tablet", () => {
    test("Checking for padding on tablet", async ({ page }) => {
        await page.goto(urlHome)
        
        const contentCont = page.locator('#para');

        const grabbedPadding = await contentCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })
        console.log(grabbedPadding);
        expect(grabbedPadding).toBe("0px 164px 32px");
    })
})