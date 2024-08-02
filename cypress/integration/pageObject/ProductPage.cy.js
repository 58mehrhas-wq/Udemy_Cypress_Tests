class ProductPage
{
    getCheckoutBtn() 
    {
        return cy.contains('Checkout')
    }

    getCheckoutItems()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotal()
    {
        return cy.get('h3 strong')
    }

}
export default ProductPage;