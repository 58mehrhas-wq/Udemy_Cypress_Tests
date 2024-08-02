/// <reference types="cypress" />

describe('My Fake Test Suite', function () {

    it('My FakeTest Case', function () {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo");

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
            (req) =>
            {
                req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

                req.continue((res) => 
                {
                    // expect(res.statusCode).to.equal(403)
                })
            }
        ).as("dummyUrl")

        cy.get('.btn-primary').click()

        cy.wait('@dummyUrl')



        // Length of the response array = rows of the table

    })

})
