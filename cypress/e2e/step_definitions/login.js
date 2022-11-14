const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import headers from "../pages/loginPage"

Given ("Open autopract.com", () => {
    cy.viewport(1920,1080)
    cy.visit('/');
});

When("Close modal letter", () => {
    cy.get(headers.selectors.closeModalWindow).click();
});

When ('Open section {string} in shop header', (section) => {
    headers.openShopMenu(section)
});

Then ("Page have banner  {string}", (banner) => {
    headers.OpenPageShop(banner)
});
