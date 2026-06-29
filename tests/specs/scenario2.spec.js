import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { HeaderPage } from '../pages/header.page';
import { ProductListPage } from '../pages/productList.page';
import { ProductDetailsPage } from '../pages/productDetails.page';
import { SCENARIO2 } from '../data/scenarios/scenario2.data';

/**
 * Test Scenario 2:
 *   Search for the book "1984";
 *   Verify that the book "A Quinta dos Animais" is authored by the same author ("George Orwell").
 */
test.describe('Test Suite Scenario 2', () => {

    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateToMainPage();
        await mainPage.rejectCookies();
    });

    test('Scenario 2', async ({ page }) => {
        const headerPage = new HeaderPage(page);
        const productListPage = new ProductListPage(page);
        const productDetailsPage = new ProductDetailsPage(page);

        await test.step('Search for book 1984', async () => {
            await headerPage.fillSearchBar(SCENARIO2.expectedFirstBook);
            const productsList = productListPage.getProductsList();
            await productListPage.selectProductFromTable(SCENARIO2.productSelectedIdPosition);
        });

    });

});