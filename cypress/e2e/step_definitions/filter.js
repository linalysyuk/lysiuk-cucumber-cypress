const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import headers from "../../pages/loginPage";
import filter from "../../pages/filterPage";



Given('Open autopract.com', () => {
    cy.viewport(1920,1080)
    cy.visit('/')
});

When('Close modal letter', () => {
    cy.get(headers.selectors.closeModalWindow).click()
});

When('Open  section {string} in shop header', (NameSection) => {
    headers.openShopMenu(NameSection)
});

Then('Filter section name {string}', (SectionName) => {
    headers.OpenPageShop(SectionName)
});

When('Open section {string} in filter category', (section) => {
    filter.openFilterCategory(section)
});

Then('Page open', () => {
    filter.OpenFilterCategory
});