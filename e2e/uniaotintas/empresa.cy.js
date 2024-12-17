/// <reference types="Cypress"/>


describe('No site União Tintas, Identifique os Componentes em Empresa.', () => {
    it('Apenas Identificação, Nada mais', () => {
        cy.visit("https://uniaotintas.com.br/empresa/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').click()
        cy.get('.conteudo > :nth-child(3)').click()
        cy.get('.conteudo > :nth-child(5)').click()
        cy.get('.conteudo > :nth-child(7)').click()
        cy.get('.conteudo > ul > :nth-child(1)').should('contain', 'Competência: realizar todos os seus processos de forma eficiente;')
        cy.get('.conteudo > ul > :nth-child(2)').should('contain', 'Integridade: tratar o cliente sempre de maneira ética, honesta e polida;')
        cy.get('.conteudo > ul > :nth-child(3)').should('contain', 'Satisfação: superar as expectativas do cliente através dos produtos e serviços oferecidos pela empresa;')
        cy.get('.conteudo > ul > :nth-child(4)').should('contain', 'Transparência: ser claro em todas as suas ações.')
        cy.get('ul > :nth-child(1) > img').click
        cy.get('ul > :nth-child(1) > :nth-child(3)').should('contain', 'Belo Horizonte')
        cy.get('ul > :nth-child(2) > img').click
        cy.get('ul > :nth-child(2) > :nth-child(3)').should('contain', 'Afonso Pena')
        cy.get('ul > :nth-child(3) > img').click
        cy.get('ul > :nth-child(3) > :nth-child(3)').should('contain', 'Rondon Pacheco')
        cy.get('ul > :nth-child(4) > img').click
        cy.get('ul > :nth-child(4) > :nth-child(3)').should('contain', 'Batalhão Mauá')
        cy.get('ul > :nth-child(5) > img').click
        cy.get('ul > :nth-child(5) > :nth-child(3)').should('contain', 'Mato Grosso')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')
    });
});