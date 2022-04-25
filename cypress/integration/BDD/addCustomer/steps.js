//<reference types="Cypress"/>

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import getElement from '../../../support/PageObject/webProviseWebObject'
const getWebElement = new getElement()
const testData = require('../../../support/testData/webProvise.json')
const dayjs = require('dayjs')

Given('User is logged in', function (){
    cy.viewport(1360, 768)
    cy.visitLoginUrl()
    getWebElement.getUserNameInput().type(testData.login.username)
    getWebElement.getPassWordInput().type(testData.login.password)
    getWebElement.getLoginButton().click()
    cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/')
})

When('User first arrive at add customer screen', function (){
    getWebElement.getCustomerIcon().click()
    getWebElement.getAddCustomerButton().click()
})

Then('Save button should be disabled', function(){
    getWebElement.getSaveButton().should('be.disabled')
})

Given('User arrives at add customer UI',function (){
    cy.viewport(1360, 768)
    cy.visitLoginUrl()
    getWebElement.getUserNameInput().type(testData.login.username)
    getWebElement.getPassWordInput().type(testData.login.password)
    getWebElement.getLoginButton().click()
    cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/')
    cy.visit('https://marmelab.com/react-admin-demo/#/customers/create')
})

Then('Default birthday value should be today', function (){
    getWebElement.getBirthdayField().invoke('val').then(actualDateText => {
                cy.log(actualDateText)
                cy.log(dayjs().format('MM/DD/YYYY')).then(actualDate => {
                    expect(actualDate).to.eq(actualDateText)
        })
    })
})

When('User input some texts in a field', function (){
    getWebElement.getFirstNameInput().type(testData.customer.firstName)
    getWebElement.getSaveButton().click()
})

Then('Save button should be enabled', function (){
    getWebElement.getSaveButton().should('be.enabled')
    getWebElement.getFirstNameInput().clear()
})
      
When('Input address and click Save', function (){
    getWebElement.getAddressInput().type(testData.customer.address)
    getWebElement.getSaveButton().click()
})

Then('User sees error messages', function (){
    getWebElement.getFirstNameHelperText().should('contain', 'Required')
    getWebElement.getLastNameHelperText().should('contain', 'Required')
    getWebElement.getEmailHelperText().should('contain', 'Required')
    cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/customers/create')
    getWebElement.getAddressInput().clear()
})

When('User is at add customer screen', function (){
    cy.visit('https://marmelab.com/react-admin-demo/#/customers/create')
})

And('User fills all required fields and click Save', function (){
    cy.viewport(1360,768)
    getWebElement.getFirstNameInput().type(testData.customer.firstName)
    getWebElement.getLastNameInput().type(testData.customer.lastName)
    getWebElement.getEmailInput().type(testData.customer.email)
    getWebElement.getSaveButton().click()
    cy.wait(3000)       
})

Then('User should be able to create customer', function (){
    getWebElement.getFirstNameInput().invoke('val').then(firstName => {
        cy.log(firstName)  
    getWebElement.getLastNameInput().invoke('val').then(lastName => {
            cy.log(lastName)          
    getWebElement.getCustomerTitle().invoke('text').then(customerTitle => {
        expect(customerTitle).to.include(firstName)
        expect(customerTitle).to.include(lastName)
    getWebElement.getFirstNameInput().should('have.value',(testData.customer.firstName))
    getWebElement.getLastNameInput().should('have.value',(testData.customer.lastName))
    getWebElement.getEmailInput().should('have.value',(testData.customer.email))
    cy.go('back')
})
})
})
})

And('User fills all fields and click Save', function (){
    getWebElement.getFirstNameInput().type(testData.customer.firstName)
    getWebElement.getLastNameInput().type(testData.customer.lastName)
    getWebElement.getEmailInput().type(testData.customer.email)

    getWebElement.getBirthdayField().clear()
    getWebElement.getBirthdayField().type(testData.customer.birthday)

    getWebElement.getAddressInput().type(testData.customer.address)
        
    getWebElement.getCityInput().type(testData.customer.city)
    getWebElement.getStateInput().type(testData.customer.state)
    getWebElement.getZipCodeInput().type(testData.customer.zipcode)
    getWebElement.getPassWordInput().type(testData.customer.password)
    getWebElement.getConfirmPasswordInput().type(testData.customer.password)
    getWebElement.getSaveButton().click()
    cy.wait(3000)
})

Then('User should be able to create customer1', function (){
    getWebElement.getFirstNameInput().invoke('val').then(firstName => {
        cy.log(firstName)
    getWebElement.getLastNameInput().invoke('val').then(lastName => {
        cy.log(lastName)
    getWebElement.getCustomerTitle().invoke('text').then(customerTitle => {
        expect(customerTitle).to.include(firstName)
        expect(customerTitle).to.include(lastName)
    })
    })
    })
})