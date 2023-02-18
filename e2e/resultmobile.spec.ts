import { test, devices, expect } from '@playwright/test';

let urlResult = "http://localhost:3000/result";

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})


test.describe('Result Page Greeting Text Style Testing', () => {
    test('The Result Page Greeting Text Style', async({ page }) => {
        await page.goto(urlResult)

        const greet = page.locator("#greet");

        const grabbedBackgroundColor = await greet.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(grabbedBackgroundColor);
        expect(grabbedBackgroundColor).toBe("rgb(249, 160, 80)")
    })
})

test.describe('Result Page Total Text Style Testing', () => {
    test('The Result Page Total Text Style', async({ page }) => {
        await page.goto(urlResult)

        const total = page.locator("#total");

        const grabbedBackgroundColor = await total.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(grabbedBackgroundColor);
        expect(grabbedBackgroundColor).toBe("rgb(171, 96, 49)")

        const grabbedMarginTop = await total.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin-top")
        })
        console.log(grabbedMarginTop);
        expect(grabbedMarginTop).toBe("0px")
    })
})
