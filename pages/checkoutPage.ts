import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(public page: Page) {}

  async proceedToCheckout() {
    await this.page.locator('#checkout').click();
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(postalCode);
    await this.page.locator('#continue').click();
  }

  async completeOrder() {
    await this.page.locator('#finish').click();
  }

  async verifyOrderCompletion() {
    await expect(this.page.locator('.complete-header')).toHaveText(
      'Thank you for your order!'
    );
  }

  async verifyErrorMessages() {
    // Check for the first error message (First Name)
    await expect(this.page.locator('text=Error: First Name is required')).toBeVisible();

    // Fill the first name field and click continue, then check for the second error message
    await this.page.locator('#first-name').fill('test');
    await this.page.locator('#continue').click();
    await expect(this.page.locator('text=Error: Last Name is required')).toBeVisible();

    // Fill the last name field and click continue, then check for the third error message
    await this.page.locator('#last-name').fill('test');
    await this.page.locator('#continue').click();
    await expect(this.page.locator('text=Error: Postal Code is required')).toBeVisible();
  }
}