/// <reference types="cypress"/>


describe('Network Intercepts', () => {

    // Visit Network
    it('Intercepts Network Requests on Champion Page', () => { 
        cy.intercept('GET','/champions').as('request')
        cy.visit("http://localhost:3000/champions")
    
        cy.wait('@request').its('response').then((response) => {
            expect(response.statusCode).to.equal(200)
            expect(response.statusMessage).to.equal("OK")
        })
    })

    it('162 Champions in Champion.json Network Request', () => { 
        cy.request("http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json").its('body.data').should((response) => {

            console.log(response)        
            expect(Object.keys(response).length).to.equal(162)
        })
    })

    // Assert NUmber of Ezreal skins 
    it('Aatrox has 9 skins in Champion Detail json', () => {

        const championName = 'Aatrox';
        const numberOfSkins = 10;

        cy.request(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${championName}.json`).its('body.data').should((response) => {
    
            console.log(response)        
            expect(response[championName].skins.length).to.equal(numberOfSkins);
        })
    })
})


