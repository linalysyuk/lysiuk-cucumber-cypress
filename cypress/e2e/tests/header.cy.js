import authorizationPage from "../../pages/loginPage"

describe('login', () => {

    it('', () => {
        cy.visit('/');
        authorizationPage.openLoginPage();
        authorizationPage.AuthorizationForm('userEmail@ yopmail', 'userPassword');
        cy.get(authorizationPage.selectors.errorAlertDescription).contains('Invalid email address.')
    });
});