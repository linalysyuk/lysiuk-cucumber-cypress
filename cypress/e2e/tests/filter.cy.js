import filter from "../../pages/filterPage"
import headers from "../../pages/loginPage"


describe('Filter', () => {
    it('Filter category', () => {
        cy.viewport(1920, 1080)
        cy.visit('/');
        cy.get(headers.selectors.closeModalWindow).click();
        headers.openShopMenu('left sidebar')
        headers.OpenPageShop('fashion')
        filter.openFilterCategory('shoes')
        filter.FilterCategoryOpened()
    });
});