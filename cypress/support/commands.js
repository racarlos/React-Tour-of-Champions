Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("selectRole", (selectedRole) => {
    return cy.getByData('role-select').select(selectedRole)
})

Cypress.Commands.add("typeInSearch", (searchString) => {
    return cy.getByData('name-input').clear().type(searchString)
})