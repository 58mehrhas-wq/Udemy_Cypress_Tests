/// <reference types="cypress" />

describe('My Very First Test', function () {

    it('My First Test Case', function () {


        cy.visit(Cypress.env('url_test') + "/seleniumPractise/#/")
        //fixture

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress acts like findElement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        // // This way it shows in the console after other steps are executed.
        // cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
        //     console.log('Moohoos')
        // })

        console.log('Mooshk')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('.product-name').text()

            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })
        // assert if logo text is  correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        cy.get('.brand').then(function (logoelement) {

            cy.log(logoelement.text())

        })
        // cy.log(logo.text())

    })
})