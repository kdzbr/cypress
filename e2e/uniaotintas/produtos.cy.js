/// <reference types="Cypress"/>


describe('No site União Tintas, Identifique os Componentes em Produtos.', () => {
    it('Apenas Identificação', () => {
        cy.visit("uniaotintas.com.br/produtos/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Catálogo de Produtos')
        cy.get('.internas > .navegacao > :nth-child(1) > :nth-child(1) > a').should('contain', 'Dicas de Pintura')
        cy.get('.internas > .navegacao > :nth-child(1) > :nth-child(1) > a').click()
        cy.visit("uniaotintas.com.br/produtos/")
        cy.get('.catalogo > [href="#"]').trigger('mouseover');
        cy.get('.internas > .navegacao > :nth-child(1) > :nth-child(3) > a').click()
        cy.get('.casa > h2').should('contain', 'Entre sem bater!')
        cy.get('.casa > p').should('contain', 'Segmentamos nosso catálogo')
    });

    it('Mapa de Casa', () => {
        cy.visit("uniaotintas.com.br/produtos/")
        cy.get('.complementos').click()
        cy.get('.internas > h2').should('contain', 'Produtos > Complementos')
        cy.get('ul > :nth-child(1) > img').trigger('mouseover');
        cy.get(':nth-child(1) > h3').should('contain', 'Massa Acrílica')
        cy.get('ul > :nth-child(2) > img').trigger('mouseover');
        cy.get(':nth-child(2) > h3').should('contain', 'Massa Corrida')
        cy.get('ul > :nth-child(3) > img').trigger('mouseover');
        cy.get(':nth-child(3) > h3').should('contain', 'Brilho para Tinta')
        cy.get('ul > :nth-child(4) > img').trigger('mouseover');
        cy.get(':nth-child(4) > h3').should('contain', 'Selador Acrílico')
        cy.get('ul > :nth-child(5) > img').trigger('mouseover');
        cy.get(':nth-child(5) > h3').should('contain', 'FUNDO PREPARADOR')
        cy.visit("uniaotintas.com.br/produtos/")
    });
});