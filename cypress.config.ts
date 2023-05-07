import { defineConfig } from "cypress"; 

export default defineConfig({
  projectId: "2j9g7e",
  video: false,
  e2e: {
    specPattern: 'cypress/tests/**/**.test.ts',
    env: {
      booksApi: 'https://fakerestapi.azurewebsites.net/api/v1/'
    },

    setupNodeEvents(on, config) {
      
    },
  },
});
