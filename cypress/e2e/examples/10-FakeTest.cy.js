/// <reference types="cypress" />

describe('My Fake Test Suite', function () {

    it('My FakeTest Case', function () {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo");

        cy.intercept({
            // This is a Request Parameter
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },

        {
            // This is a Response Parameter
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"  }]
        }).as('bookretrievals')
        
        cy.get('.btn-primary').click()

        cy.wait('@bookretrievals').then(({request, response}) => 
            
        {
            cy.get('tr').should('have.length', response.body.length + 1)
            
        })

        cy.get('p').should('have.text', 'Oops only 1 Book available')



        // Length of the response array = rows of the table

    })

})
