/// <reference types="cypress" />

const neatCSV = require('neat-csv');

let productName



describe('JWT Session', () => {

    it('Is logged in through local storage', async() => {

        cy.LoginAPI().then(function() {

            cy.visit("https://rahulshettyacademy.com/client", {

                onBeforeLoad : function(window) {

                    window.localStorage.setItem('token', Cypress.env('token'))
                }


            })

        })

        // Grabbing the the Product Name text 
        cy.get(".card-body b").eq(1).then(function(ele) {

            productName = ele.text();
        })

        

        cy.get(".card-body button:last-of-type").eq(1).click();
        
        cy.get("[routerlink*='cart']").click();

        cy.contains("Checkout").click()

        cy.get("[placeholder*='Country']").type("ind")

        cy.get(".ta-results button").each(($el,index,$list) => {

            if($el.text() === " India") 
            {                
                    cy.wrap($el).click()
            }
        })

        // cy.get('.ta-results > :nth-child(3)').click()

        
        cy.get(".action__submit").click()
        cy.wait(5000)

        // cy.get(".order-summary button").click()

        cy.contains("Click To Download Order Details in CSV").click()


        // Cypress.config("fileServerFolder")
        cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_mike.testman.csv")
        .then(async(text) =>
        {
            const csv = await neatCSV(text)

            console.log(csv)

            const actualProductCSV = csv[0]["Product Name"]  

            expect(productName).to.equal(actualProductCSV)

        })

    })
})