class Body {
    selector ={
    cookiesClose:()=> cy.get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll.CybotCookiebotDialogBodyButton",{timeout:1500}),
    buttonBuy:()=>cy.get("[aria-label='Navigation'] a[href='/ru/buy']"),
    maxonButtonBuy:()=> cy.get('#annual article .card-actions a:nth-child(1)',{timeout:1500}),
    };
    cookieClose(){
        this.selector.cookiesClose().should('be.visible').click();
    }
    buttonsBuy(){
        this.selector.buttonBuy().should('be.visible').click();
    }
    maxonsButtonBuy(){
        this.selector.maxonButtonBuy().should('be.visible').click();
    }
}module.exports = new Body();