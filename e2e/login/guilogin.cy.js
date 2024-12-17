/// <reference types="Cypress"/>


describe('Testes Funcional De Login', () => {
    it('Conseguir fazer o Login', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
    });

    it('Conseguindo Login Incorreto', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("problem_user8")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
    });

    it('Conseguindo Senha Incorreta', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secretsauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
    });
});