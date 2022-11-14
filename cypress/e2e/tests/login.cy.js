import headers from "../../pages/loginPage"

describe('Open Menu', () => {
    it('Open  Section', () => {
        cy.viewport(1920, 1080)
        cy.visit('/');
        cy.get(headers.selectors.closeModalWindow).click();
        headers.openShopMenu('no sidebar')
        headers.OpenPageShop('fashion')
    });
});