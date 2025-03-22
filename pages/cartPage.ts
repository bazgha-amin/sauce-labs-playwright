import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(public page: Page) {}

  async addItemToCart(itemName) {
    await this.page.locator(`#add-to-cart-${itemName}`).click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async verifyItemInCart(itemName) {
    const cartItem = this.page.locator('.cart_item');
    await expect(cartItem).toBeVisible();
    await expect(cartItem.locator('.inventory_item_name')).toHaveText(
      itemName.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
    );
  }
}
