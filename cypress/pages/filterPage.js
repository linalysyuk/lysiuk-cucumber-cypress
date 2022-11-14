class filter {
  selectors = {
      filterCategory:'.category-list a',
      filterCategoryShoes:'.category-list li:nth-child(2)',
      OpenCategory:'#products > div'
  } 

  openFilterCategory(nameCategory) {
      cy.get(this.selectors.filterCategory).should('be.visible').contains(nameCategory).click();

  };

  OpenFilterCategory() {
      cy.get(this.selectors.OpenCategory).should('be.visible')
  };

} module.exports = new filter();
