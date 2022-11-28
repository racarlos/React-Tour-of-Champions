/// <reference types="cypress"/>

describe('Champions', () => {

  context("Champion List Page", () => {
    
    beforeEach(() => {
      cy.visit("http://localhost:3000/champions")
      cy.clearLocalStorage();
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
      cy.wait(1000)

      cy.contains('Diana')
      cy.contains('Scorn of the Moon')

      cy.contains('Morgana')
      cy.contains('the Fallen')

      cy.contains('Tristana')
      cy.contains('the Yordle Gunner')
    })

    it('Filter champion list by Role', () => {
      cy.selectRole('Marksman')
      cy.wait(1000)
      
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
      cy.wait(1000)

      cy.contains('Yasuo')
      cy.contains('the Unforgiven')

      cy.contains('Qiyana')
      cy.contains('Empress of the Elements')
    })

    it('Search for a non existent Champion', () => {
      cy.getByData('name-input').clear().type('hahahah')
      cy.wait(1000)

      cy.getByData('no-champion-image').should("exist")
      cy.getByData('champion-list').should('not.exist')
      cy.contains("No Champion fits this search crtieria.")
    })

    it('Each page must have at least 1 Champion Card', () => {

      cy.getByData('pagination-control').find('.page-link').each((pageLink) => {        
        cy.wait(500).then(() => {
          cy.getByData('champion-list').should('exist').find('.champion-card').should('have.length.least', 1)
          pageLink[0].click()
        })
      })
    })
  })

  context("Champion Detail Page", () => { 

    beforeEach(() => {
      cy.visit("http://localhost:3000/champions")
    })

    it('Go To A Champion in First Page', () => {
      cy.contains("Aatrox").click()
      cy.wait(1000)
      cy.title().should('eq', 'Aatrox')
    })
    
    it('Go To A Champion and check if they have 4 skills', () => {
      cy.contains("Anivia").click()
      cy.getByData('spell-container').find('.spell-row').should('have.length', 4)
    })
    
    it('Check if Local Storage Items: Name and Title Match actual',() => {
      cy.get(':nth-child(10) > .page-link').click()
      cy.wait(1000)

      cy.getByData('Nilah').should('exist').click()
      cy.wait(1000)
      
      cy.get('.splash').should('exist').then(() => {
        expect(JSON.parse(localStorage.getItem('name'))).to.equal('Nilah')
        expect(JSON.parse(localStorage.getItem('title'))).to.equal('the Joy Unbound')
      })
    })

    it('Check if Role badge redirects to filtered champion list',() => { 

    })


    it('Check if Local Storage Items are cleared',() => {

      cy.get(':nth-child(8) > .page-link').click()
      cy.getByData('Kindred').should('exist').click()

      cy.clearLocalStorage().should((ls) => {
        expect(ls.getItem('name')).to.be.null
        expect(ls.getItem('title')).to.be.null
      })
    })

  })
})