/// <reference types="cypress" />

export default {
    ciclarCadastrar() {
        cy.get('#btnRegister')
            .click()
    },

    validarMensagemError(mensagem) {
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem )
    },

    preencherNome(nome) {
        cy.get('#user')
            .type(nome)
    },

    preencherEmail(email) {
        cy.get('#email')
            .type(email)

    },

    preencherSenha(senha) {
        cy.get('#password')
            .type(senha)

    },

    validaMessangemSucesso(nome) {
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${nome}`)
    }


}