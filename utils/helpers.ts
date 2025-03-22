export const users = {
    validUser: { username: "standard_user", password: "secret_sauce" },
    invalidUser: { username: "invalid_user", password: "wrong_password" },
  };
  
  export async function waitForElement(page, selector) {
    await page.locator(selector).waitFor({ state: "visible" });
  }
  