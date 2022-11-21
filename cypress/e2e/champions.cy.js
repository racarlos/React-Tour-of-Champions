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

    it('Search for a champion by Name', () => {
      cy.getByData('name-input').type('Akali')

      cy.contains('Akali')
      cy.contains('the Rogue Assassin')
    })

    it('Search for a champion by Role', () => {
      cy.getByData('role-select').select('Marksman').invoke("val").should("eq", "Marksman");
      
      cy.contains('Akshan')
      cy.contains('the Rogue Sentinel')

      cy.contains('Jayce')
      cy.contains('the Defender of Tomorrow')

      cy.contains('Ezreal')
      cy.contains('the Prodigal Explorer')
    })

    it('Search for a champion by Name and Role', () => {
      cy.getByData('name-input').clear().type('Akali')

      cy.contains('Akali')
      cy.contains('the Rogue Assassin')
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