import { test, expect } from '@playwright/test';
import { HEADERPAGE } from '../data/pages/header.data';

export class HeaderPage {
    constructor(page) {
        this.page = page;
        
        // ===== Fixed locators =====
        this.searchInputBox = page.getByRole('textbox', { name: HEADERPAGE.labels.searchInputBox });
        this.searchInputButton = page.getByRole('button', { name: HEADERPAGE.labels.searchInputButton });
        this.cartButton = page.getByRole('button', { name: HEADERPAGE.labels.cartButton });

    }

    async fillSearchBar(searchText) {
        await this.searchInputBox.fill(searchText);
        await this.searchInputButton.click();
    }

    async openCartMenu() {
        await this.cartButton.click();
    }

}