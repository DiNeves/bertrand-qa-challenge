import { test, expect } from '@playwright/test';
import { PRODUCTCARTPAGE } from '../data/pages/productCart.data';

export class ProductCartPage {
    constructor(page) {
        this.page = page;
        
        // ===== Fixed locators =====
        this.cartItemsCount = page.locator(PRODUCTCARTPAGE.locators.cartItemsCount);
        this.cartTable =  (bookPosition) => page.locator(PRODUCTCARTPAGE.locators.cartTable.replace('@item@', bookPosition));

    }

    async getCartItemsCount() {
        await new Promise(resolve => setTimeout(resolve, 1500));

        await expect(this.cartItemsCount).toBeEnabled();
        await this.page.locator(PRODUCTCARTPAGE.locators.cartOverlay).evaluate(element => element.style.display = 'none');

        const textCount = await this.cartItemsCount.textContent();
        
        return parseInt(textCount) || 0;
    }
    
    async setProductQuantity(bookPosition, quantity) {
        await this.cartTable(bookPosition).locator(PRODUCTCARTPAGE.locators.quantityInputBox).fill(quantity.toString());
        await this.page.keyboard.press("Enter");
    }

    async increaseProductQuantity(bookPosition) {
        await this.cartTable(bookPosition).locator(PRODUCTCARTPAGE.locators.plusButton).click();
    }
    
    async decreaseProductQuantity(bookPosition) {
        await this.cartTable(bookPosition).locator(PRODUCTCARTPAGE.locators.minusButton).click();
    }

    async deleteProductFromCart(bookPosition) {
        await this.cartTable(bookPosition).locator(PRODUCTCARTPAGE.locators.trashButton).click();
    }

    async validateEmptyCart() {
        await expect(this.page.locator(PRODUCTCARTPAGE.locators.emptyMessage)).toHaveText(PRODUCTCARTPAGE.labels.emptyMessage);
    }

}