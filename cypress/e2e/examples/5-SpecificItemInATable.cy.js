/// <reference types="cypress" />

describe('My Fifth Test', function() {

    it('My 5th Test Case', function() {


        cy.visit("http://qaclickacademy.com/practice.php")

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text=$el.text()
            if(text.includes("Python")) {

                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {

                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })

            }

        })
    })
})