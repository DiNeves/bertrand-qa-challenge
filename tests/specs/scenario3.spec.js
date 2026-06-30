import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { HeaderPage } from '../pages/header.page';
import { ProductListPage } from '../pages/productList.page';
import { SCENARIO3 } from '../data/scenarios/scenario3.data';

/**
 * Test Scenario 3:
 *   Search for the book "Do Not Disturb";
 *   Validate that the author is "Freida McFadden";
 *   Validate the idiom is "Inglês" and the flag of UK is displayed.
 */
test.describe('Test Suite Scenario 3', () => {

    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateToMainPage();
        await mainPage.rejectCookies();
    });

    test('Scenario 3', async ({ page }) => {
        const headerPage = new HeaderPage(page);
        const productListPage = new ProductListPage(page);

        await test.step('Search for Book', async () => {
            await headerPage.fillSearchBar(SCENARIO3.expectedBook);
            const productsList = productListPage.getProductsList();
        });

        await test.step('Validate Author Name', async () => {
            const bookAuthor = await productListPage.getBookAuthor(SCENARIO3.productSelectedIdPosition);
            expect(bookAuthor).toBe(SCENARIO3.expectedBookAuthor);
        });

        await test.step('Validate Book Language', async () => {
            const bookLanguage = await productListPage.getBookLanguage(SCENARIO3.productSelectedIdPosition);
            expect(bookLanguage).toBe(SCENARIO3.expectedLanguage);
        });

        await test.step('Validate Book Flag', async () => {
            const bookLanguageFlag = await productListPage.getBookLanguageFlag(SCENARIO3.productSelectedIdPosition);
            expect(bookLanguageFlag).toContain(SCENARIO3.expectedLanguageFlag);
        });

    });

});