/// <reference types="cypress"/>


describe('Items', () => {


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
      cy.wait(1000)

      cy.contains('Slight bonuses to Critical Strike Chance, Move Speed and Attack Speed')
      cy.contains('150')
      cy.contains('1050')
    })

    it('Check if Eclipse exists', () => {
      cy.contains('Eclipse').should("exist").click()
      cy.wait(1000)

      cy.contains('Mythic Passive: Grants all other Legendary items Armor Penetration and Move Speed.')
      cy.contains('750')
      cy.contains('3100')
    })


    it('Filter Item List by Name', () => {
      cy.typeInSearch('pi')
      cy.wait(1000)

      cy.contains('Pickaxe').should("exist")
      cy.contains('Vampiric Scepter').should("exist")
      cy.contains('Spirit Visage').should("exist")
    })

    it('Search for an item', () => {
      cy.typeInSearch('ravenous')
      cy.wait(1000)

      cy.contains('Ravenous Hydra').should("exist")
    })

    it('Search for a non existent item', () => {
      cy.typeInSearch('tax refund')
      cy.wait(1000)

      cy.contains("No Item fits this search crtieria.")
    })


  })

})