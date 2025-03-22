import { test as baseTest, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

type Fixtures = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect };
