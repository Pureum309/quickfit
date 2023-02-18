import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlResult = "http://localhost:3000/result";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlResult)

        await expect(page).toHaveTitle('QuickFit Result');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlResult)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109_Sarah Sun")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Result Page')

        const metaDescriptionThree = page.locator('meta[property="og:description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'BCIT Digital Design and Development Diploma')
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlResult)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/images/logo.png')
    })
})


test.describe('Result Page Container Style testing', () => {
    test('The Result Page Container Style', async({ page }) => {
        await page.goto(urlResult)

        const mainCont = page.locator("#mainCont");

        const grabbedDisplay = await mainCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(grabbedDisplay);
        expect(grabbedDisplay).toBe("flex");

        const grabbedFlexDirection = await mainCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction")
        })
        console.log(grabbedFlexDirection);
        expect(grabbedFlexDirection).toBe("column");

        const grabbedAlignItems = await mainCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("align-items")
        })
        console.log(grabbedAlignItems);
        expect(grabbedAlignItems).toBe("center");

    })
})


test.describe('Result Page Button Style testing', () => {
    test('The Result Page Button Style', async({ page }) => {
        await page.goto(urlResult)

        const headingCont = page.locator("#headingCont")
        const button = page.locator("#backBtn");

        //button container style
        const grabbedDisplay = await headingCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(grabbedDisplay);
        expect(grabbedDisplay).toBe("flex");

        const grabbedJustifyContent = await headingCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("justify-content")
        })
        console.log(grabbedJustifyContent);
        expect(grabbedJustifyContent).toBe("space-between");

        const grabbedContPosition = await headingCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("position")
        })
        console.log(grabbedContPosition);
        expect(grabbedContPosition).toBe("relative");

        //Button style 
        const grabbedBorder = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("border")
        })
        console.log(grabbedBorder + "+ heeeeeeeeeeerrreee!!!!!!!!!!");
        expect(grabbedBorder).toBe("0px none rgb(255, 255, 255)");

        const grabbedBorderRadius = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("border-radius")
        })
        console.log(grabbedBorderRadius);
        expect(grabbedBorderRadius).toBe("5px");

        const grabbedCursor = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("cursor")
        })
        console.log(grabbedCursor);
        expect(grabbedCursor).toBe("pointer");

        const grabbedFontWeight = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-weight")
        })
        console.log(grabbedFontWeight);
        expect(grabbedFontWeight).toBe("700");

        const grabbedColor = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color")
        })
        console.log(grabbedColor)
        expect(grabbedColor).toBe("rgb(255, 255, 255)")
    })
})


