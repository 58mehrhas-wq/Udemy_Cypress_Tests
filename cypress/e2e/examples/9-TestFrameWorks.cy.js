///<reference types="cypress"/>
import HomePage from '../../integration/pageObject/HomePage.cy'
import ProductPage from '../../integration/pageObject/ProductPage.cy'
import CheckoutPage from '../../integration/pageObject/CheckoutPage.cy'
describe('My ninth Test Suite', function() {


    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data) 
        {

            this.data = data

        })

    })

    it('My 9th TestCase', function() {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()

        cy.visit(Cypress.env('url_test') + "/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 9000)
        homePage.getShopTab().click()

        

        this.data.productName.forEach(function(element) {
            console.log(element);
            cy.selectProduct(element)
        })

        productPage.getCheckoutBtn().click()

        var sum = 0
        productPage.getCheckoutItems().each(($el, index, $list) => {

            const amount = $el.text()
            var res = amount.split(' ')
            res = res[1].trim()
            sum = Number(sum)+Number(res)                
        }).then(function()
        {
            cy.log(sum)

        })

        
        productPage.getTotal().then(function(element) 
        {
            const amount = element.text()
            var res = amount.split(' ')
            var total = res[1].trim()

            expect(Number(total)).to.equal(sum)

        })

         
        
        checkoutPage.getCheckoutBtn().click()
        checkoutPage.getCountryEntry().type('Ind')
        checkoutPage.getCountrySelect().click()
        checkoutPage.getCheckbox().click({force:true})
        checkoutPage.getPurchaseBtn().click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        checkoutPage.getAlertMsg().then(function(element) {

            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true

        })
    })
})