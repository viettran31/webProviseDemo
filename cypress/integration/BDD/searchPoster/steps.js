//<reference types="Cypress"/>

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import getElement from '../../../support/PageObject/webProviseWebObject'
const getWebElement = new getElement()
const testData = require('../../../support/testData/webProvise.json')
const dayjs = require('dayjs')


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

Then('User can search for poster', function () {
    getWebElement.get3rdPostername().invoke('text').then((posterName) => {
        cy.log(posterName)
        getWebElement.getPosterSearchInput().click().type(posterName)
        cy.wait(5000)
        getWebElement.getPosterResultName().invoke('text').then((posterResultName) => {
            cy.log(posterResultName)
            expect(posterName).to.eq(posterResultName)
        })
    })
})