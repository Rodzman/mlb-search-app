/// <reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should be able to type on input, click search button and navigate to the item details page', () => {
    const input = cy.get('[data-testid="search-bar-input"]');
    input.click().focused().type('test').should('have.value', 'test');

    const button = cy.get('[data-testid="search-bar-button"]');
    button.click();

    const item = cy.get('ol li:first', { timeout: 10000 });
    // cy.url().should('include', '/items');
    item.should('be.visible')
    item.click();

    cy.get('h2', { timeout: 10000 }).contains('Descripción del producto');
  });
});

export { };

