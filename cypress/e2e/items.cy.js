/// <reference types="cypress"/>


describe('empty spec', () => {


  context("Item List Page", () => { 
    beforeEach(() => {
      cy.visit("http://localhost:3000/items")
    })

    it('Check if Page Title and Elements Exist', () => {
      cy.title().should('eq', 'Items')
      cy.getByData('item-list').should('exist')
    })

    it('Check if there are 185 items', () => {
      cy.getByData('item-list').find('.item-card').should('have.length', 185) 
    })

    it('Check if Zeal exists', () => {
      cy.contains('Zeal').should("exist").click()
      cy.contains('Slight bonuses to Critical Strike Chance, Move Speed and Attack Speed')
      cy.contains('150')
      cy.contains('1050')
    })

    it('Check if Eclipse exists', () => {
      cy.contains('Eclipse').should("exist").click()
      cy.contains('Mythic Passive: Grants all other Legendary items Armor Penetration and Move Speed.')
      cy.contains('750')
      cy.contains('3100')
    })



  })

})