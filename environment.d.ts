declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
      RESULTS_OUTPUT_DIR: string;
      ADMIN_USERNAME: string;
      ADMIN_PASSWORD: string;
    }
  }
}

export {};
