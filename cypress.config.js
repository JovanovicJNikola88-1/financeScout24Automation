const { defineConfig } = require("cypress");
const setConfig = require('./cypress/plugins/index');

module.exports = defineConfig({
  env: {
    device: 'desktop',
  },
  retries: {
    runMode: 1,
  },
  defaultCommandTimeout: 10000,
  viewportHeight: 1200,
  viewportWidth: 1400,
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  screenshotsFolder: 'reports/mochawesome/screenshots/desktop',
  blockHosts: [
    '*.yahoo.com',
    '*.adform.net',
    '*.optimizely.com',
    '*.demdex.net',
    '*.snapchat.com',
    '*.tiqcdn.com',
    '*.tealiumiq.com',
  ],
  e2e: {
    setupNodeEvents: setConfig,
  },
});
