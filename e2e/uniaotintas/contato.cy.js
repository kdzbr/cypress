/// <reference types="Cypress"/>


describe('No site União Tintas, Identifique os Componentes em Contato.', () => {
    it('Apenas identificação', () => {
        cy.visit("https://uniaotintas.com.br/contato/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Contato')
        cy.get('.your-name > .wpcf7-form-control').click()
        cy.get('.your-email > .wpcf7-form-control').click()
        cy.get('.your-tel > .wpcf7-form-control').click()
        cy.get('.your-subject > .wpcf7-form-control').click()
        cy.get('.your-message > .wpcf7-form-control').click()
        cy.get('.wpcf7-form > :nth-child(3) > .wpcf7-form-control').click()
        cy.get('.wpcf7-response-output').should('contain', 'Ocorreram erros de validação. Por favor confira os dados e envie novamente.')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')
    });

    it('Escrevendo Apenas o Nome', () => {
        cy.visit("https://uniaotintas.com.br/contato/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Contato')
        cy.get('.your-name > .wpcf7-form-control').type("Fernanda")
        cy.get('.your-email > .wpcf7-form-control').click()
        cy.get('.your-tel > .wpcf7-form-control').click()
        cy.get('.your-subject > .wpcf7-form-control').click()
        cy.get('.your-message > .wpcf7-form-control').click()
        cy.get('.wpcf7-form > :nth-child(3) > .wpcf7-form-control').click()
        cy.get('.wpcf7-response-output').should('contain', 'Ocorreram erros de validação. Por favor confira os dados e envie novamente.')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')
    });

    it('Escrevendo Apenas Nome e E-mail', () => {
        cy.visit("https://uniaotintas.com.br/contato/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Contato')
        cy.get('.your-name > .wpcf7-form-control').type("Fernanda")
        cy.get('.your-email > .wpcf7-form-control').type("fernandamartins23@outlook.com")
        cy.get('.your-tel > .wpcf7-form-control').click()
        cy.get('.your-subject > .wpcf7-form-control').click()
        cy.get('.your-message > .wpcf7-form-control').click()
        cy.get('.wpcf7-form > :nth-child(3) > .wpcf7-form-control').click()
        cy.get('.wpcf7-response-output').should('contain', 'Ocorreram erros de validação. Por favor confira os dados e envie novamente.')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')
    });

    it('Escrevendo Apenas Nome, E-mail e Telefone', () => {
        cy.visit("https://uniaotintas.com.br/contato/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Contato')
        cy.get('.your-name > .wpcf7-form-control').type("Fernanda")
        cy.get('.your-email > .wpcf7-form-control').type("fernandamartins23@outlook.com")
        cy.get('.your-tel > .wpcf7-form-control').type("(+55) 34 98426-3502")
        cy.get('.your-subject > .wpcf7-form-control').click()
        cy.get('.your-message > .wpcf7-form-control').click()
        cy.get('.wpcf7-form > :nth-child(3) > .wpcf7-form-control').click()
        cy.get('.wpcf7-response-output').should('contain', 'Ocorreram erros de validação. Por favor confira os dados e envie novamente.')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')
    });

    it('Escrevendo Apenas Nome, E-mail, Telefone e o Assunto', () => {
        cy.visit("https://uniaotintas.com.br/contato/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Contato')
        cy.get('.your-name > .wpcf7-form-control').type("Fernanda")
        cy.get('.your-email > .wpcf7-form-control').type("fernandamartins23@outlook.com")
        cy.get('.your-tel > .wpcf7-form-control').type("(+55) 34 98426-3502")
        cy.get('.your-subject > .wpcf7-form-control').type("Mofo ou fungos")
        cy.get('.your-message > .wpcf7-form-control').click()
        cy.get('.wpcf7-form > :nth-child(3) > .wpcf7-form-control').click()
        cy.get('.wpcf7-response-output').should('contain', 'Ocorreram erros de validação. Por favor confira os dados e envie novamente.')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')
    });

    it('Escrevendo Apenas Nome, E-mail, Telefone e o Assunto', () => {
        cy.visit("https://uniaotintas.com.br/contato/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Contato')
        cy.get('.your-name > .wpcf7-form-control').type("Fernanda")
        cy.get('.your-email > .wpcf7-form-control').type("fernandamartins23@outlook.com")
        cy.get('.your-tel > .wpcf7-form-control').type("(+55) 34 98426-3502")
        cy.get('.your-subject > .wpcf7-form-control').type("Mofo ou fungos")
        cy.get('.your-message > .wpcf7-form-control').type("Pintei recentemente, mas apareceram manchas de mofo nas paredes. Preciso de ajuda urgente para resolver isso!")
        cy.get('.wpcf7-form > :nth-child(3) > .wpcf7-form-control').click()
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')
    });
});