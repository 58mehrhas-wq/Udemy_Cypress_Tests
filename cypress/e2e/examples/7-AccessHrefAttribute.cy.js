/// <reference types="cypress" />

describe('My seventh Test', function() {

    it('My 7th Test Case', function() {


        cy.visit(Cypress.env('url_test') + "/AutomationPractice/")

        cy.get('#opentab').then(function(el) {

            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () =>
            {

                cy.get("div.sub-menu-bar a[href*='about']").click()

                cy.go('back')
                cy.go('forward')
                cy.go('back')
                cy.go('back')




            })
        })
    })
})