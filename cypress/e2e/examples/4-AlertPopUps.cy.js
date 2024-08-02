/// <reference types="cypress" />

describe('My Fourth Test', function() {

    it('My 4th Test Case', function() {


        cy.visit("http://qaclickacademy.com/practice.php")

        // Alert and Popup
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        // Window:alert
        cy.on('window:alert', (str) => {

            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.on('window:confirm', (str) => {

            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

        // cy.get('#opentab').invoke('removeAttr', 'target').click()


        // cy.url().should('include', 'qaclickacademy')

        // cy.go('back')

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        
        cy.origin('https://www.qaclickacademy.com/', () => {

        cy.url().should('include', 'qaclickacademy')

        cy.go('back')

        })

    })
})