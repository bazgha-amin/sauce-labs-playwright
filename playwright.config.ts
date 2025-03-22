import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://www.saucedemo.com",
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    trace: "on",
  },
  reporter: [
    ["list"], // Console output
    ["html", { outputFolder: "playwright-report", open: "on" }], // Auto-open HTML report
  ],
});
