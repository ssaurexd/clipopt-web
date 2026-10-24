import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "browser.spec.mjs",
  use: { baseURL: process.env.SITE_URL || "http://127.0.0.1:8089/clipopt-web/" },
  webServer: process.env.SITE_URL ? undefined : {
    command: "node tests/serve.mjs",
    url: "http://127.0.0.1:8089/clipopt-web/",
    reuseExistingServer: false,
  },
});
