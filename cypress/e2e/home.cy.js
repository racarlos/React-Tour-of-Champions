/// <reference types="cypress"/>

describe('Home Page', () => {

  it('Go to Home Page', () => {
    cy.visit("http://localhost:3000")
  })

  it('Check Page Title', () => {
    cy.title().should('eq', 'Home')
  })

  it('Checks if the navbar and nav-items are present', () => {
    // Check Nav Bar, Should have 3 nav items 
    cy.getByData('navbar').should("exist")

    // Check 3 Nav Link
    cy.getByData('navlink-logo').should("exist")
    cy.getByData('navlink-home').should("exist")
    cy.getByData('navlink-champions').should("exist")
    cy.getByData('navlink-items').should("exist")
  })

  it('Checks if the navbuttons are present', () => {
    // Check 3 Nav Buttons
    cy.getByData('navButton-champions').should("exist")
    cy.getByData('navButton-items').should("exist")
    cy.getByData('navButton-maps').should("exist")
  })

})
