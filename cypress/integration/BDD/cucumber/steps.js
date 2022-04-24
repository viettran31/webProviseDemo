//<reference types="Cypress"/>

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import getElement from '../../../support/PageObject/webProviseWebObject'
const getWebElement = new getElement()
const testData = require('../../../support/testData/webProvise.json')
const dayjs = require('dayjs')


//Did not input username, password, click Login
Given('Visit webpage URL', function() {
    cy.viewport(1360, 768)
    cy.visit('https://marmelab.com/react-admin-demo/#/login')
})

When('Did not input username and password, click Login', function() {
    getWebElement.getLoginButton().click()
})    

Then('Error messages appear', function () {
    getWebElement.getUserNameHelperText().should('contain', 'Required')
    getWebElement.getPasswordHelperText().should('contain', 'Required')
})

//Input username but leave password empty, click Login
When('Input username but leave password empty, click Login', function() {
    getWebElement.getUserNameInput().type(testData.login.username)
    getWebElement.getLoginButton().click()
})

Then ('Error message appears', function () {
    getWebElement.getPasswordHelperText().should('contain', 'Required')
})

//Input password but leave username empty, click Login
When('Input password but leave username empty, click Login', function () {
    getWebElement.getPassWordInput().type(testData.login.password)
    getWebElement.getLoginButton().click()
})

Then('Error message appears for username', function () {
    getWebElement.getUserNameHelperText().should('contain', 'Required')
})

When('Input correct username, password, click Login', function () {
    getWebElement.getUserNameInput().type(testData.login.username)
    getWebElement.getPassWordInput().type(testData.login.password)
    getWebElement.getLoginButton().click()
})

Then('Able to login', function (){
    cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/')
})

//Verify Search Poster
Given('User is logged in', function (){
    cy.viewport(1360, 768)
    cy.visitLoginUrl()
    getWebElement.getUserNameInput().type(testData.login.username)
    getWebElement.getPassWordInput().type(testData.login.password)
    getWebElement.getLoginButton().click()
    cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/')
})

When('User navigate to Catalog > Posters', function (){
    getWebElement.getCatalogsIcon().click()
})


