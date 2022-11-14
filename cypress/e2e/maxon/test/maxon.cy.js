import Body from "./PageObject"
describe('HomePage',()=>{
    before('',()=>{
        cy.visit('https://www.maxon.net/ru/');
        cy.viewport(1920,1080);
        cy.wait(2000);
    })
    it('cookiesClose',()=>{
        Body.cookieClose();
        Body.buttonsBuy();
        Body.maxonsButtonBuy();
    })
});