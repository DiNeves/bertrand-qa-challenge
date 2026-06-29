import { test, expect } from '@playwright/test';
import { MAINPAGE } from '../data/pages/main.data';

/**
 * Page Object Model for navigating between Store tabs in Bertrand website.
 */
export class MainPage {
    constructor(page) {
        this.page = page;
        
        // ===== Fixed locators =====
        this.homeCookieTitle = page.locator(MAINPAGE.locators.cookiesTabTitle);
        this.homeCookieRejectButton = page.locator(MAINPAGE.locators.cookiesRejectButton);
        this.homeCookieRejectButtonText = page.getByRole('button', { name: MAINPAGE.labels.cookiesRejectButtonText });
    }

    // ===== Navigation =====

   /**
   * Navigate to the homepage page and validate the website's title.
   */
    async navigateToMainPage() {
        await test.step('Go to main page', async () => {
            await this.page.goto('', { waitUntil: 'domcontentloaded' });
            // # Wait until network is idle
            await this.page.waitForLoadState('networkidle');
            await expect(this.page).toHaveTitle(MAINPAGE.labels.pageTitle);
        });
    };

    async navigateToMainPageWebkitOnly() {
        await test.step('Go to main page', async () => {
            await this.page.goto('', { waitUntil: 'domcontentloaded' });
        });
    };

    // ===== Cookies =====~

   /**
   * Check if the Reject button is visible in the Cookies div and clicks it.
   */
    async rejectCookies() {
        await test.step('Click Cookies Reject Button', async () => {
            await expect(this.homeCookieRejectButtonText).toBeVisible();
            await this.homeCookieRejectButtonText.click();
        });
    };

};