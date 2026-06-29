import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { HeaderPage } from '../pages/header.page';
import { ProductListPage } from '../pages/productList.page';
import { ProductDetailsPage } from '../pages/productDetails.page';
import { SCENARIO1 } from '../data/scenarios/scenario1.data';

/**
 * Test Scenario 1:
 *   Search for the book "1984"
 *   Validate that the author is "George Orwell"
 *   Confirm that the ISBN is "9789722071550"
 *   Check that the number of pages is "344"
 *   Ensure that the dimensions of the book are "156 x 238 x 22 mm"
 */
test.describe('Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateToMainPage();
        await mainPage.rejectCookies();
    });

    test('Scenario 1', async ({ page }) => {
        const headerPage = new HeaderPage(page);
        const productListPage = new ProductListPage(page);
        const productDetailsPage = new ProductDetailsPage(page);

        await test.step('Search for book 1984', async () => {
            await headerPage.fillSearchBar(SCENARIO1.searchBook);
            const productsList = productListPage.getProductsList();
            await productListPage.selectProductFromTable(SCENARIO1.productSelectedIdPosition);
        });

        await test.step('Validate Author', async () => {
            const author = await productDetailsPage.getAuthor();
            expect(author).toBe(SCENARIO1.expectedBookAuthor);
        });
  
        await test.step('Validate ISBN', async () => {
            const isbn = await productDetailsPage.getIsbn();
            expect(isbn).toBe(SCENARIO1.expectedIsbn);
        });

        await test.step('Validate Number of Pages', async () => {
            const bookPagesNumber = await productDetailsPage.getBookPagesNumber();
            expect(bookPagesNumber).toBe(SCENARIO1.expectedPagesNumber);
        });

        await test.step('Validate Book Dimensions', async () => {
            const bookDimensions = await productDetailsPage.getBookDimensions();
            expect(bookDimensions).toBe(SCENARIO1.expectedDimensions);
        });

    });

});