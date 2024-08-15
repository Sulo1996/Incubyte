Feature: Login features
    Background: User navigates to login screen
        Given User navigates to login screen

    # Scenario: Verify user login with valid credentials
    #     When User is login with valid data
    #     Then User should logged in and redirected to home page

    Scenario: Verify user login with invalid data
        When User enters invalid login credentils and can see error message
            | loginEmail      | loginPassword | errorMsg                                                     |
            | sulochana@gmail | test          | Please enter a valid email address (Ex: johndoe@domain.com). |
