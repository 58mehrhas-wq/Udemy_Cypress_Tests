/// <reference types="cypress" />

describe('My Second Test', function(){

    it('My 2nd Test Case', function(){


        cy.visit(Cypress.env('url_test') + "/seleniumPractise/#/")
        //fixture
        
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress acts like findElement of selenium

        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('.product-name').text()

            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(2000)
        cy.contains('Place Order').click()
    })
})