/// <reference types="Cypress"/>


describe('No site União Tintas, Identifique os Componentes em Home.', () => {
    it('Apenas Identificação, Nada mais', () => {
        cy.visit("https://uniaotintas.com.br")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.telefones').should('contain', 'Telefones')
        cy.get('.ferramentas > a').click
        cy.visit("https://uniaotintas.com.br")
        cy.get('.ambientes > a').click
        cy.visit("https://uniaotintas.com.br")
        cy.get('.dicas > a').click
        cy.visit("https://uniaotintas.com.br")
        cy.get('.infos > h1').should('contain', 'Cobrimos qualquer oferta')
        cy.get('.infos > h2').should('contain', 'União Tintas')
        cy.get('h3').should('contain', 'Tradição em qualidade!')
        cy.get('.infos > p').should('contain', 'Empresariais (CDL) e Top of Mind.')
        cy.get('.conheca').click
        cy.visit("https://uniaotintas.com.br")
        cy.get('.infos > img').click
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')        
    });
});