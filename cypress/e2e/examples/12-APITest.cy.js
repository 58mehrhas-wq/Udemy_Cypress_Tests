/// <reference types="cypress" />

describe('My First API Suite', function() {

    it('My First API Test', function() {

        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php', {

            "name": "Learn how to be a good person",
            "isbn": "bctnnr",
            "aisle": "98b2",
            "author": "Ed Handsome"
        }).then(function(response) {

        expect(response.body).to.have.property("Msg", "successfully added")
        expect(response.status).to.eq(200)

        })

    })
    
})