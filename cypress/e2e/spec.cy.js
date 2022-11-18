describe('My First Test', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })


  it('Visits the Home Page', () => {

    // Check Page title
    cy.title().should('eq', 'League Of Legends')

    // Check Nav Bar, Should have 3 nav items 
    cy.getByData('navbar').should("exist")

    // Check 3 Nav Link
    cy.getByData('navlink-home').should("exist")
    cy.getByData('navlink-champions').should("exist")
    cy.getByData('navlink-items').should("exist")


  })




})