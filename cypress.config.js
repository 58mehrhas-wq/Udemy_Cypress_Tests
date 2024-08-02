const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');

async function setupNodeEvents(on, config) {

  // The following information should be filled out when a SQL Server DB is created
  config.db = {
    userName: "",
    password: "",
    server: "",
    options: {
        database: "",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}


  // implement node event listeners here
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plug in

  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',

  env: {
    url_test: "https://rahulshettyacademy.com",

    url_fashion: "https://www.fashionnova.com"
  },
  retries: {
    runMode: 1,
  },

  projectId: "iacfrq",
  e2e: {
    setupNodeEvents,
      // implement node event listeners here
      // async setupNodeEvents(on, config) {
    //   // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);
    // },
    specPattern: 'cypress/e2e/examples/*.js'
    // specPattern: 'cypress/e2e/examples/BDD/*.feature'
    
  },
});
