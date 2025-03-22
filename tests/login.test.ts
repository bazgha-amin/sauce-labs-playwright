import { test, expect } from "../fixtures/baseFixture";
import { users } from "../utils/helpers";

test.describe("Login Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test("Valid Login", async ({ loginPage }) => {
    await loginPage.login(users.validUser.username, users.validUser.password);
    await loginPage.verifyLoginSuccess();
  });

  test("Invalid Login", async ({ loginPage }) => {
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await loginPage.verifyLoginFailure();
  });
});
