const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vkudyw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
