// if (!process.env.RESULTS_OUTPUT_DIR) {
//   const currentDateTime = new Date()
//     .toISOString()
//     .replace(/[:.]/g, "_") //Dot does not need to be escaped inside character class []
//     .slice(0, -1);
//   process.env.RESULTS_OUTPUT_DIR = `./results/results-${currentDateTime}`;
// }

process.env.RESULTS_OUTPUT_DIR = !process.env.RESULTS_OUTPUT_DIR
  ? `./results/results-${new Date()
      .toISOString()
      .replace(/[:.]/g, "_")
      .slice(0, -1)}`
  : process.env.RESULTS_OUTPUT_DIR;

interface TestConfig {
  appUrl: string;
  resultsOutputDir: string;
  adminUserName: string;
  adminPassword: string;
}

export const testConfig: TestConfig = {
  appUrl: process.env.APP_URL || "",
  resultsOutputDir: process.env.RESULTS_OUTPUT_DIR || "",
  adminUserName: process.env.ADMIN_USERNAME || "",
  adminPassword: process.env.ADMIN_PASSWORD || "",
};
