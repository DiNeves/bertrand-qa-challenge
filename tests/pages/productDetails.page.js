import { test, expect } from '@playwright/test';
import { PRODUCTDETAILSPAGE } from '../data/pages/productDetails.data';

export class ProductDetailsPage {
    constructor(page) {
        this.page = page;
        
        // ===== Fixed locators =====
        this.author = page.locator(PRODUCTDETAILSPAGE.locators.author);
        this.isbn = page.locator(PRODUCTDETAILSPAGE.locators.isbn);
        this.numberOfPages = page.locator(PRODUCTDETAILSPAGE.locators.numberOfPages);
        this.dimensions = page.locator(PRODUCTDETAILSPAGE.locators.dimensions);
        this.addToCartButton = page.getByRole('button', { name: PRODUCTDETAILSPAGE.labels.addToCartButton });
    }

    async getAuthor() {
        return await this.author.locator(PRODUCTDETAILSPAGE.locators.dataHrefInfo).textContent();
    }

    async getIsbn() {
        return await this.isbn.getByText(PRODUCTDETAILSPAGE.labels.isbnText).locator(PRODUCTDETAILSPAGE.locators.dataClassInfo).textContent(); 
    }

    async getBookPagesNumber() {
        return await this.numberOfPages.locator(PRODUCTDETAILSPAGE.locators.dataClassInfo).textContent();
    }

    async getBookDimensions() {
        return await this.dimensions.locator(PRODUCTDETAILSPAGE.locators.dataClassInfo).textContent();
    }

    async addToCart() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await expect(this.addToCartButton).toBeEnabled();
        await this.addToCartButton.click();
    }

}