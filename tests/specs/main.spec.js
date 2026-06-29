import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page'; 

test.describe('Main Navigation', () => {

    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.navigateToMainPage();
        await mainPage.rejectCookies();
    });

});