import { test, expect } from "../fixtures/baseFixture";
import { users } from "../utils/helpers";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";

test.describe("Sauce Demo End-to-End Flow", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);
  });

  test("Add item to cart and verify", async ({ page }) => {
    const cartPage = new CartPage(page);
    
    await cartPage.addItemToCart("sauce-labs-backpack");
    await cartPage.goToCart();
    await cartPage.verifyItemInCart("sauce-labs-backpack");
  });

  test("Complete checkout process", async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await cartPage.addItemToCart("sauce-labs-bike-light");
    await cartPage.goToCart();
    await cartPage.verifyItemInCart("sauce-labs-bike-light");

    await checkoutPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm("John", "Doe", "12345");
    await checkoutPage.completeOrder();
    await checkoutPage.verifyOrderCompletion();
  });

  test("Checkout validation errors", async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    const cartPage = new CartPage(page);
    await cartPage.goToCart();
    await checkoutPage.proceedToCheckout();
    await page.locator('#continue').click();
    await checkoutPage.verifyErrorMessages();
  });
});