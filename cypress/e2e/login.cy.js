describe('Login Page Tests', function() {

  beforeEach(() => {
    cy.visit('https://www.vodafone.de/business/business-portale/login.html')
  })

  it('Availability check', () => {
    cy.request('GET', 'https://www.vodafone.de/business/business-portale/login.html').then((response) => { 
      if (response.status < 200 || response.status >= 400) {  
        throw new Error('Login page is not available') 
      } 
    })
  });
  
  it('Check login section input fields and buttons', () => {
      cy.get('#username').should('be.visible');
      cy.get('#password').should('be.visible');
      cy.get('[data-cy="login"]').should('be.visible');
      cy.get('[data-cy="register"]').should('be.visible');
      cy.get('[data-cy="button-text-label icon-undefined"]').should('be.visible');
      cy.get('[data-cy="link-information"]').should('be.visible');
      cy.get('[data-cy="link-login"]').should('be.visible');
      cy.get('[data-cy="text-field-ShowPassword-icon"]').should('be.visible');
  });

  it('Check error message for short username', function() {
    cy.get('#username').type('x');
    cy.get('[data-cy="text-field-error-text"]').contains('Ihr Benutzername muss zwischen 2 und 64 Zeichen lang sein.').should('be.visible');
  });

  it('Check error message for short password', function() {
    cy.get('#password').type('123');
    cy.get('[data-cy="text-field-error-text"]').contains('Ihr Portal-Passwort muss zwischen 8 und 64 Zeichen lang sein.').should('be.visible');
  });
});