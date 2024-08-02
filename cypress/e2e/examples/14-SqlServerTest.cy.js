/// <reference types="cypress" />

context('window', () => {

    it('DB interaction', () => {

        cy.sqlServer("Sselect * from Persons").then(function(result){

            console.log(result[0][1])


        })

    })
})