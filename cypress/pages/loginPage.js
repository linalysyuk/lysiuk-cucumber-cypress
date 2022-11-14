
class headers {
  selectors = {
      headerMenuPage:"#mainnav > ul > li:nth-child(3) > ul",
      SectionShopMenu:"#mainnav > ul > li:nth-child(3) > ul > li > a",
      closeModalWindow:"[aria-label='Close']",
      headerPageShopMenu:".top-banner-content > h4"
  };

  openShopMenu(nameSection) {
      cy.get(this.selectors.headerMenuPage).invoke('show'),
      cy.get(this.selectors.sectionShopMenu).contains(nameSection).click();
  };

  OpenPageShop(OpenFirstSection) {
      cy.get(this.selectors.headerPageShopMenu).should('be.be.visible').and('have.text', textPageHeader)
  };
} module.exports = new headers();


