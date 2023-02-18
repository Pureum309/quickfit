import { test, devices, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";
let urlResult = "http://localhost:3000/result";

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe('Result Page Meal Card Style Testing', () => {
    test('The Result Page Meal Card Style', async({ page }) => {
        await page.goto(urlResult)

        const meals = page.locator("#meals");

        const grabbedDisplay = await meals.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(grabbedDisplay);
        expect(grabbedDisplay).toBe("flex")

        const grabbedFlexWrap = await meals.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-wrap")
        })
        console.log(grabbedFlexWrap);
        expect(grabbedFlexWrap).toBe("wrap")

        const grabbedJustifyContent = await meals.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("justify-content")
        })
        console.log(grabbedJustifyContent);
        expect(grabbedJustifyContent).toBe("space-between")

        const grabbedPadding = await meals.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })
        console.log(grabbedPadding);
        expect(grabbedPadding).toBe("16px")
    })
})

test.describe('Click Button', () => {
    test('Buttong click and navigation', async({ page }) => {
        await page.goto(urlHome);
    })
})