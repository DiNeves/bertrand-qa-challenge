import { test, expect } from '@playwright/test';
import { HEADERPAGE } from '../data/pages/header.data';

export class HeaderPage {
    constructor(page) {
        this.page = page;
        
        // ===== Fixed locators =====
        this.searchInputBox = page.getByRole('textbox', { name: HEADERPAGE.labels.searchInputBox });
        this.searchInputButton = page.getByRole('button', { name: HEADERPAGE.labels.searchInputButton });

    }

    async fillSearchBar(searchText) {
        await this.searchInputBox.fill(searchText);
        await this.searchInputButton.click();
    }

}