/// <reference types="cypress" />

describe('My Third Test', function() {

    it('My 3rd Test Case', function() {


        cy.visit(Cypress.env('url_test') + "/AutomationPractice/")

        // Test Checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')
        
        // Dynamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text() === 'India') {

                cy.wrap($el).click()

            }
        })
        // Autocomplete
        cy.get('#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})