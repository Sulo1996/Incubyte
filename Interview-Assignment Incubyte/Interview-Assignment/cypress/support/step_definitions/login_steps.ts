import { DataTable, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { commonPageElements } from '../../pageLocators/common.locators'
import { signupPageElements } from '../../pageLocators/singnup.locators'
import * as helpers from '../helpers'



When('User enters invalid login credentils and can see error message', (datatable: DataTable) => {
    datatable.hashes().forEach(element =>{
        cy.get(commonPageElements.getUserEmail).clear().type(element.loginEmail)
        cy.get(commonPageElements.getUserPassword).clear().type(element.loginPassword)
        cy.get(commonPageElements.btnLogin).click({ force: true })
        cy.get(commonPageElements.getErrorMessage).contains(element.errorMsg)
    })
   
})

When('User is login with valid data', () => {
    cy.log('User credentils:-',Cypress.env('EMAIL'),Cypress.env('PASSWORD'))
        cy.get(commonPageElements.getUserEmail).clear().type(Cypress.env('EMAIL'))
        cy.get(commonPageElements.getUserPassword).clear().type(Cypress.env('PASSWORD'))
        cy.get(commonPageElements.btnLogin).click({ force: true })
})

When('User enters personal information', () => {
    cy.get(signupPageElements.getFirstName).should('be.visible').type(helpers.getTextWithLengthOf(5))
    cy.get(signupPageElements.getLastName).type(helpers.getTextWithLengthOf(5))
})

When('Users enters signin information', () => {
    let  cred = [helpers.getTextWithLengthOf(5)+'@magento.softwaretestingboard.com', '&^Lw'+helpers.getTextWithLengthOf(5)]
    Cypress.env('EMAIL', cred[0])
    Cypress.env('PASSWORD', cred[1])
    cy.get(signupPageElements.getEmail).should('be.visible').type(cred[0])
    cy.get(signupPageElements.getPassword).type(cred[1])
    cy.get(signupPageElements.getConfirmPassword).type(cred[1])

})

When('User clicks on create account button', () => {
    cy.get(signupPageElements.btnCreateAccount).click()
})

Then('User can see account creation success message', () => {
    cy.get(signupPageElements.getRegistrationSuccessMsg).should('have.text', 'Thank you for registering with Main Website Store.')
})

Then('User should logged in and redirected to home page', () => {
    cy.get(commonPageElements.getWelcomeMsg).should('be.visible').contains('Welcome')
})
