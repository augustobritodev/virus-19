// https://on.cypress.io/api

describe('Renders properly', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Conheça o COVIDY')
    cy.contains('p', 'Fique atualizado com velocidade e transparência. O COVIDY é um covidômetro que mostra para você em tempo real o número de casos e óbitos relacionados a pandemia da COVID-19 ao redor do mundo. ')
    cy.contains('button', 'Obter dados')
    cy.contains('a', 'Contribua')
      .click()
  })
})
