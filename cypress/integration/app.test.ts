/// <reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home page with the searchbar and be able to type', () => {
    const input = cy.get('[data-testid="search-bar-input"]');
    input.should('be.visible');
    input.click().focused().type('test').should('have.value', 'test');
  });

  it('should render the home page with the search button and be able to click', () => {
    const button = cy.get('[data-testid="search-bar-button"]');
    button.should('be.visible').click();
  });

  it('should be able to type on input, click search button and navigate to the items page', () => {
    const input = cy.get('[data-testid="search-bar-input"]');
    input.click().focused().type('test').should('have.value', 'test');

    const button = cy.get('[data-testid="search-bar-button"]');
    button.click();

    const item = cy.get('ol li:first');
    item.should('be.visible');
  });

  it('should be able to type on input, click search button and navigate to the item details page', () => {
    const input = cy.get('[data-testid="search-bar-input"]');
    input.click().focused().type('test').should('have.value', 'test');

    const button = cy.get('[data-testid="search-bar-button"]');
    button.click();

    const item = cy.get('ol li:first');
    item.should('be.visible').click();

    cy.url().should('include', '/items');
    cy.get('h2').contains('Descripción del producto');
  });
});

export { };

