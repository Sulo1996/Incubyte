import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { commonPageElements } from '../../pageLocators/common.locators';



Given('User navigates to login screen', () => {
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.visit('/')
    cy.get(commonPageElements.getLnkSignIn).click()
})

Given('User navigates to create account screen', () => {
    cy.visit('/customer/account/create/')
})


