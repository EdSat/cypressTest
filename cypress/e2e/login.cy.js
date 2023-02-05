describe('Login Page Tests', function() {

  //Availability check 
  //Skipping tests if not
  beforeEach(() => {
    cy.request('GET', 'https://www.vodafone.de/business/business-portale/login.html').then((response) => { 
      if (response.status < 200 || response.status >= 400) {  
        throw new Error('Login page is not available') 
      } 
    }) 
  })

  it('Visits the login page', function() {
    cy.visit('https://www.vodafone.de/business/business-portale/login.html')
  })
})