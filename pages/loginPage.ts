import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.page.locator("#user-name").fill(username);
    await this.page.locator("#password").fill(password);
    await this.page.locator("#login-button").click();
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator(".title")).toHaveText("Products");
  }

  async verifyLoginFailure() {
    await expect(this.page.locator(".error-message-container")).toBeVisible();
  }
}
