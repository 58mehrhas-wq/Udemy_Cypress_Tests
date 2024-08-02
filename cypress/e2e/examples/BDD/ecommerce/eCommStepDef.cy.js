import { Given, When, Then, dataTable } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../../../integration/pageObject/HomePage.cy'
import ProductPage from '../../../../integration/pageObject/ProductPage.cy'
import CheckoutPage from '../../../../integration/pageObject/CheckoutPage.cy'
const homePage = new HomePage()
const productPage = new ProductPage()
const checkoutPage = new CheckoutPage()
let name

before(function() {
    // runs once before all tests in the block
    cy.fixture('example').then(function(data) 
    {

        this.data = data

    })

})

// Given I open E-commerce page
Given('I open E-commerce page', () => {
    cy.visit(Cypress.env('url_test') + "/angularpractice/")
    // cy.visit(Cypress.env('url_test') + "/seleniumPractise/#/")
})
// productName = dataTable.rawTable[1][2]
// When I add items to the Cart
let productName
When('I add items to Cart', function() {
    homePage.getShopTab().click()


    productName = dataTable.rawTable[1][2]
    productName.forEach(function (element) {
        console.log(element);
        cy.selectProduct(element)
    })

    productPage.getCheckoutBtn().click()

})

// And validate the total prices
When('Validate the total prices', () => {
    productPage.getCheckoutItems().each(($el, index, $list) => {

        const amount = $el.text()
        var res = amount.split(' ')
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    }).then(function () {
        cy.log(sum)

    })

    productPage.getTotal().then(function (element) {
        const amount = element.text()
        var res = amount.split(' ')
        var total = res[1].trim()

        expect(Number(total)).to.equal(sum)

    })
})


// Then select the country submit and verify Thank you
Then('select the country submit and verify Thank you', () => {
    checkoutPage.getCheckoutBtn().click()
    checkoutPage.getCountryEntry().type('Ind')
    checkoutPage.getCountrySelect().click()
    checkoutPage.getCheckbox().click({ force: true })
    checkoutPage.getPurchaseBtn().click()
    // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    checkoutPage.getAlertMsg().then(function (element) {

        const actualText = element.text()
        expect(actualText.includes('Success')).to.be.true
    })
})

// When I fill the form details
// name = dataTable.rawTable[1][0]
When('I fill the form details', function(dataTable) {

    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

// Then Validate the forms behaviour
Then('Validate the forms behaviour', function()  {
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 9000)
})

// And select the shop page
When('select the shop page', () => {
    homePage.getShopTab().click()

})
