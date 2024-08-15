Feature: User registration feature

    Scenario: Verify user creates new account with valid
        Given User navigates to create account screen
        When User enters personal information
        And Users enters signin information
        And User clicks on create account button
        Then User can see account creation success message

    Scenario: Verify user login with valid credentials
        Given User navigates to login screen
        When User is login with valid data
        Then User should logged in and redirected to home page