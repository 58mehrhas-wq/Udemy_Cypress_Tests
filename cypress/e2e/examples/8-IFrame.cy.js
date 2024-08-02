/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('My eighth Test', function () {

    it('My 8th Test Case', function () {

        cy.visit(Cypress.env('url_test') + "/AutomationPractice/")

        cy.frameLoaded('#courses-iframe')


        cy.iframe().find("a[href*='mentorship']").eq(0).click()


        cy.iframe().find('h1[class="pricing-title"]').should('have.length', 0)

        cy.get("input[id='name']").type("test")

        cy.get("input[value*='radio']").eq(1).click()

        cy.frameLoaded("#courses-iframe")

        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)


    })
})