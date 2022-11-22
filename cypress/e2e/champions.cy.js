/// <reference types="cypress"/>


describe('Champions', () => {

  context("Champion List Page", () => {
    
    beforeEach(() => {
      cy.visit("http://localhost:3000/champions")
      cy.getByData('role-select').select('All Roles')
      cy.getByData('name-input').clear()
    })

    it('Check if Page Elements exist ', () => {
      cy.title().should('eq', 'Champions')

      cy.getByData('role-select').should("exist")
      cy.getByData('name-input').should("exist")
    })

    it('Check if there are exactly 10 champions in the first page', () => {
      cy.getByData('champion-list').find('.champion-card').should('have.length', 10)
    })

    it('Check If Champions exist', () => {
      cy.contains('Aatrox')
      cy.contains('the Darkin Blade')

      cy.contains('Annie')
      cy.contains('the Dark Child')

      cy.contains('Ashe')
      cy.contains('the Frost Archer')
    })

    it('Filter champion list by Name', () => {
      cy.typeInSearch('Ana')

      cy.contains('Diana')
      cy.contains('Scorn of the Moon')

      cy.contains('Morgana')
      cy.contains('the Fallen')

      cy.contains('Tristana')
      cy.contains('the Yordle Gunner')
    })

    it('Filter champion list by Role', () => {
      cy.selectRole('Marksman')
      
      cy.contains('Akshan')
      cy.contains('the Rogue Sentinel')

      cy.contains('Jayce')
      cy.contains('the Defender of Tomorrow')

      cy.contains('Ezreal')
      cy.contains('the Prodigal Explorer')
    })

    it('Filter champion list by Name and Role', () => {
      cy.typeInSearch('Ya')
      cy.selectRole('Fighter')

      cy.contains('Yasuo')
      cy.contains('the Unforgiven')

      cy.contains('Qiyana')
      cy.contains('Empress of the Elements')
    })

    it('Search for a non existent Champion', () => {
      cy.getByData('name-input').clear().type('hahahah')
      cy.getByData('no-champion-image').should("exist")
      cy.contains("No Champion fits this search crtieria.")
    })
  
  })

  context("Champion Detail Page", () => { 

    beforeEach(() => {
      cy.visit("http://localhost:3000/champions")
    })

    it('Go To A Champion in First Page', () => {
      cy.contains("Aatrox").click()
      cy.title().should('eq', 'Aatrox')
    })

    
    it('Go To A Champion and check if they have 4 skills', () => {
      cy.contains("Anivia").click()
      cy.getByData('spell-container').find('.spell-row').should('have.length', 4)
    })
    
    it.only('Look for a champion in the list and go to it', () => {

      cy.getByData('pagination-control').find('.page-link').each((pageLink) => {        
        cy.wait(500).then(() => {
          cy.getByData('champion-list').should('exist')
          pageLink[0].click()
        })
      })
    })

  })
})