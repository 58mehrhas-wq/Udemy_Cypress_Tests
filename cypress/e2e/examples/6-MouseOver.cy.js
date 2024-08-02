/// <reference types="cypress" />

describe('My sixth Test', function () {

    it('My 6th Test Case', function () {


        cy.visit(Cypress.env('url_test') + "/AutomationPractice/")

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

    })
})