const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    reportFilename: '[status]_[datetime]-report',
    timestamp: 'shortDate',
    charts: true,
    reportPageTitle: 'Reals Test Suite Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  
  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    step_definitions: './cypress/e2e/stepDefs/',

  },

  e2e: {

    setupNodeEvents(on, config) {

      return on('file:preprocessor', cucumber())

    },

    specPattern: 'cypress/e2e/**/*.feature',

    supportFile:false,

     // Ajout de la configuration pour le timeout
     defaultCommandTimeout: 10000, // 10 secondes, ajustable selon tes besoins

      // Configuration du reporter pour console
    reporter: 'cypress-mochawesome-reporter',
  },

})