import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { HeaderPage } from '../pages/header.page';
import { ProductListPage } from '../pages/productList.page';
import { ProductDetailsPage } from '../pages/productDetails.page';
import { ProductCartPage } from '../pages/productCart.page';
import { SCENARIO4 } from '../data/scenarios/scenario4.data';

/**
 * Test Scenario 4: Validate Total Quantity on Cart Menu
 *   Validate the Cart is Empty;
 *   Search for "Quarta Asa";
 *   Add Searched Book to Cart;
 *   Open Cart menu;
 *   Increase Book Quantity by 1;
 *   Validate Total Quantity is Equals to 2 on Cart;
 *   Decrease Book Quantity by 1;
 *   Validate Total Quantity is Equals to 1 on Cart;
 *   Set Book Quantity to 10;
 *   Validate Total Quantity is Equals to 10 on Cart;
 *   Delete Books from Cart;
 *   Validate Total Quantity is Equals to 0 on Cart;
 *   Validate Empty Cart message on Cart Menu.
 */
test.describe('Test Suite Scenario 4', () => {

    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateToMainPage();
        await mainPage.rejectCookies();
    });

    test('Scenario 4', async ({ page }) => {
        const headerPage = new HeaderPage(page);
        const productListPage = new ProductListPage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const productCartPage = new ProductCartPage(page);

        await test.step('Validate Empty Cart', async () => {
            const cartStartCount = await productCartPage.getCartItemsCount();
            expect(cartStartCount).toBe(0);
        });

        await test.step('Search for Book', async () => {
            await headerPage.fillSearchBar(SCENARIO4.searchBook);
            const productsList = productListPage.getProductsList();
            await productListPage.selectProductFromTable(SCENARIO4.bookSelectedIdPosition);
        });

        await test.step('Validate New Product in Cart', async () => { 
            await productDetailsPage.addToCart();  
            await headerPage.openCartMenu();
            const cartEndCount = await productCartPage.getCartItemsCount();
            expect(cartEndCount).toBe(1);
        });

        await test.step('Validate Quantity Increase on + Button', async () => { 
            await productCartPage.increaseProductQuantity('0');
            const cartIncrease = await productCartPage.getCartItemsCount();
            expect(cartIncrease).toBe(2);
        });
        
        await test.step('Validate Quantity Decrease on - Button', async () => { 
            await productCartPage.decreaseProductQuantity('0');
            const cartDecrease = await productCartPage.getCartItemsCount();
            expect(cartDecrease).toBe(1);
        });

        await test.step('Validate Quantity Set on Input Box', async () => { 
            await productCartPage.setProductQuantity('0', SCENARIO4.bookQuantityManuallyInserted);
            const cartQtd = await productCartPage.getCartItemsCount(SCENARIO4.bookQuantityManuallyInserted);
            expect(cartQtd).toBe(SCENARIO4.bookQuantityManuallyInserted);
        });

        await test.step('Validate Empty Items on Cart', async () => { 
            await productCartPage.deleteProductFromCart('0');
            const cartEmpty = await productCartPage.getCartItemsCount();
            expect(cartEmpty).toBe(0);
        });

        await test.step('Validate Empty Cart Message', async () => { 
            await productCartPage.validateEmptyCart();
        });

    });

});