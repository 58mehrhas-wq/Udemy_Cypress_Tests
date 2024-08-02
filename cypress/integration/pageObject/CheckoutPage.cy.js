class CheckoutPage 
{
    getCheckoutBtn() 
    {
        return cy.contains('Checkout')
    }

    getCountryEntry()
    {
        return cy.get('#country')
    }

    getCountrySelect()
    {
        return cy.get('.suggestions > :nth-child(1) > li > a')
    }

    getCheckbox()
    {
        return cy.get('#checkbox2')
    }

    getPurchaseBtn()
    {
        return cy.get('input[value="Purchase"]')
    }

    getAlertMsg()
    {
        return cy.get('.alert')
    }

}
export default CheckoutPage