import { test, expect } from '@playwright/test';
import { PRODUCTLISTPAGE } from '../data/pages/productList.data';

export class ProductListPage {
    constructor(page) {
        this.page = page;
        
        // ===== Fixed locators =====
        this.productsTable = page.locator(PRODUCTLISTPAGE.locators.productsTable);
        this.singleProduct = (productsNumber) => page.locator(PRODUCTLISTPAGE.locators.productData.replace('@id@', productsNumber));

    }

    async getProductsList() {
        await expect(this.productsTable).toBeVisible();
        return this.productsTable;
    }

    async getBookAuthor(bookPosition) {
        const product = await this.singleProduct(bookPosition);
        const authorName = await product.locator(PRODUCTLISTPAGE.locators.tableBookAuthor)
                            .locator(PRODUCTLISTPAGE.locators.productDetailsLink).textContent();
        return authorName;
    }

    async getBookLanguage(bookPosition) {
        const product = await this.singleProduct(bookPosition);
        const bookLanguage = await product.locator(PRODUCTLISTPAGE.locators.tableBookLanguage).textContent();
        return bookLanguage;
    }

    async getBookLanguageFlag(bookPosition) {
        const product = await this.singleProduct(bookPosition);
        const bookLanguageFlag = await product.locator(PRODUCTLISTPAGE.locators.tableBookLanguageFlag).getAttribute('class');
        return bookLanguageFlag;
    }

    async selectProductFromTable(productsNumber) {
        await this.singleProduct(productsNumber).locator(PRODUCTLISTPAGE.locators.productDetailsLink).first().click();
    }

}