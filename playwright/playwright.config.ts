import type { PlaywrightTestConfig } from "@playwright/test";
//import { resultsOutputDir } from "./lib/env";
import { testConfig } from "./lib/env";

const config: PlaywrightTestConfig = {
  testDir: `./tests`,
  outputDir: `${testConfig.resultsOutputDir}/traces`,
  timeout: 90000,
  expect: {
    timeout: 15000,
  },
  reporter: [
    ["list"],
    [
      "html",
      {
        open: "on-failure",
        outputFolder: `${testConfig.resultsOutputDir}/reports/html-report`,
      },
    ],
    [
      "json",
      {
        outputFile: `${testConfig.resultsOutputDir}/reports/json-report/test-results.json`,
      },
    ],
  ],
  use: {
    // Browser options
    headless: true,
    browserName: "chromium",

    // Context options
    //baseURL: 'http://localhost:9001/',
    ignoreHTTPSErrors: true,

    // Artifacts
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",

    // https://playwright.dev/docs/api/class-browsertype#browser-type-launch
    launchOptions: {},
  },
};

export default config;
