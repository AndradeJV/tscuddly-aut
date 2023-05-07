import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/tests/**/**.test.ts',
    env: {
      booksApi: 'https://fakerestapi.azurewebsites.net/api/v1/'
    },

    setupNodeEvents(on, config) {
      
    },
  },
});
