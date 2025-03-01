const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qw9xjz',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportTitle: 'Relatório de Testes',
    reportPageTitle: 'Relatório de Testes',
  },
  e2e: {
    baseUrl: 'https://www.automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
