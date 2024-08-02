
Feature: End to end E-commerce validation

    application Regression
    @Regression
    Scenario: E-Commerce products delivery
        Given I open E-commerce page
        When I add items to Cart
        And Validate the total prices
        Then select the country submit and verify Thank you

    @Smoke
    Scenario: Filling the form to shop
        Given I open E-commerce page
        When I fill the form details
        |   name    | gender    | productName   |
        |   Jane    | Female    | Blackberry    |
        Then Validate the forms behaviour
        And select the shop page

        Examples:        
        |   name    | gender    | productName   |
        |   Jane    | Female    | Blackberry    |
    