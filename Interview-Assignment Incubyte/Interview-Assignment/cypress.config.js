const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  e2e: {
    //Environment vairables,User can override these env data dynamically
    env: {
      EMAIL: 'test@gmail.com',
      PASSWORD: 'tes@123',
    },
    // e2e testing node events setup code
    setupNodeEvents(on, config) {
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }))
      preprocessor.addCucumberPreprocessorPlugin(on, config)
      return config
    },
    //The default behavior of Cypress can be modified any configuration options
    baseUrl: "https://magento.softwaretestingboard.com/",
    specPattern: "**/*.feature",
  }
})