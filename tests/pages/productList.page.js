import { test, expect } from '@playwright/test';
import { PRODUCTLISTPAGE } from '../data/pages/productList.data';

export class ProductListPage {
    constructor(page) {
        this.page = page;
        
        // ===== Fixed locators =====
        this.productsTable = page.locator(PRODUCTLISTPAGE.locators.productsTable);

    }

    async getProductsList() {
        await expect(this.productsTable).toBeVisible();
        return this.productsTable;
    }

    async selectProductFromTable(productsNumber) {
        const product = await this.productsTable.locator(PRODUCTLISTPAGE.locators.productData.replace('@id@', productsNumber));
        await product.locator(PRODUCTLISTPAGE.locators.productDetailsLink).first().click();
    }

}