// https://on.cypress.io/api

describe('Renders properly', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Conheça o COVIDY')
  })
})
