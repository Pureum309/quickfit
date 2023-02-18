import { test, devices, expect } from '@playwright/test';

let urlHome = 'http://localhost:3000/';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
})

test.describe("Checking background coulor for home mobile", () => {
    test("Checking for colours on mobile", async ({ page }) => {
        await page.goto(urlHome)
        
        const mainContainer = page.locator('#main');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(242, 249, 255)");
    })
})

test.describe('Custom form area', () => {
    test('Checking Display for home mobile', async({ page }) => {
        await page.goto(urlHome)

        const customForm = page.locator("#form")

        const grabbedDisplay = await customForm.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(grabbedDisplay)
        expect(grabbedDisplay).toBe("flex")
    })
})