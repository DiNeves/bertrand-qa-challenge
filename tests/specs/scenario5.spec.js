import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { HeaderPage } from '../pages/header.page';
import { ProductListPage } from '../pages/productList.page';
import { SCENARIO5 } from '../data/scenarios/scenario5.data';

/**
 * Test Scenario 5: Validate if all items have price > 0 in product list after searching for a given book:
 *   Search for "Chama de Ferro";
 *   Verify that all the items have price > 0;
 *   Screenshot of the full page.
 */
test.describe('Test Suite Scenario 5', () => {

    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateToMainPage();
        await mainPage.rejectCookies();
    });

    test('Scenario 5', async ({ page, browserName }) => {
        const headerPage = new HeaderPage(page);
        const productListPage = new ProductListPage(page);

        await test.step('Search for Book', async () => {
            await headerPage.fillSearchBar(SCENARIO5.searchBook);
        });

        await test.step('Validate All Items Have Price > 0 in Product List', async () => {
            const productsListCount = await productListPage.getProductsListCount();

            for (let i = 1; i <= productsListCount; ++i) {
                let activePrice = await productListPage.getBookActivePrice(i);

                activePrice = parseInt(activePrice * 100);

                /** it was needed to convert active price from Float to an Integer 
                 *  because the toBeGreaterThan assertion doesn't accept Floats.
                 */
                expect(activePrice).toBeGreaterThan(0);
            }
        });

        await test.step('Screenshot of Full Page', async () => {
            await page.screenshot({ path: SCENARIO5.screenshotPath + browserName + SCENARIO5.screenshotExtension, fullPage: true });
        });

    });

});