//<reference types="Cypress"/>

import getElement from '../support/PageObject/webProviseWebObject'
const getWebElement = new getElement()
const testData = require('../support/testData/webProvise.json')
const dayjs = require('dayjs')


describe('webProviseTest', function () {
    it('Test Suite 1: Login', function () {
        //Did not input username, password, click Login
        cy.viewport(1360, 768)
        cy.visitLoginUrl()
        getWebElement.getLoginButton().click()
        getWebElement.getUserNameHelperText().should('contain', 'Required')
        getWebElement.getPasswordHelperText().should('contain', 'Required')
        //Input username but leave password empty, click Login
        getWebElement.getUserNameInput().type(testData.login.username)
        getWebElement.getLoginButton().click()
        getWebElement.getPasswordHelperText().should('contain', 'Required')
        getWebElement.getUserNameInput().clear()
        //Input password but leave username empty, click Login
        getWebElement.getPassWordInput().type(testData.login.password)
        getWebElement.getLoginButton().click()
        getWebElement.getUserNameHelperText().should('contain', 'Required')
        getWebElement.getPassWordInput().clear()
        //Input correct username, password, click Login
        getWebElement.getUserNameInput().type(testData.login.username)
        getWebElement.getPassWordInput().type(testData.login.password)
        getWebElement.getLoginButton().click()
        cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/')
    })
    it('Test Suite 2: Verify Search Poster Function', function () {
        //Login
        cy.viewport(1360, 768)
        cy.visitLoginUrl()
        getWebElement.getUserNameInput().type(testData.login.username)
        getWebElement.getPassWordInput().type(testData.login.password)
        getWebElement.getLoginButton().click()
        cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/')

        //Click on Catalog > Posters
        getWebElement.getCatalogsIcon().click()

        //Get 3rd poster name 
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
    it('Test suite 3: verify add customers', function () {
        //Login
        cy.viewport(1360, 768)
        cy.visitLoginUrl()
        getWebElement.getUserNameInput().type(testData.login.username)
        getWebElement.getPassWordInput().type(testData.login.password)
        getWebElement.getLoginButton().click()
        cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/')

        //Click on Customer at Menu
        getWebElement.getCustomerIcon().click()

        //Click Add Customer
        getWebElement.getAddCustomerButton().click()

        //Save button should be Disabled at first
        getWebElement.getSaveButton().should('be.disabled')

        //Birthday default value is today
        getWebElement.getBirthdayField()
            .invoke('val')
            .then(actualDateText => {
                cy.log(actualDateText)
                cy.log(dayjs().format('MM/DD/YYYY')).then(actualDate => {
                    expect(actualDate).to.eq(actualDateText)
                })

                //Save button is enabled after input at least one field
                getWebElement.getFirstNameInput().type(testData.customer.firstName)
                getWebElement.getSaveButton().click()
                getWebElement.getSaveButton().should('be.enabled')
                getWebElement.getFirstNameInput().clear()


                //Errors when leaving required fields empty and click Save
                getWebElement.getAddressInput().type(testData.customer.address)
                getWebElement.getSaveButton().click()
                getWebElement.getFirstNameHelperText().should('contain', 'Required')
                getWebElement.getLastNameHelperText().should('contain', 'Required')
                getWebElement.getEmailHelperText().should('contain', 'Required')
                cy.url().should('contain', 'https://marmelab.com/react-admin-demo/#/customers/create')
                getWebElement.getAddressInput().clear()
            })

        //Able to make the password visible
        // getWebElement.getPassWordInput().type(testData.customer.password)
        // // getWebElement.getShowPasswordInput().click()
        // getWebElement.getPassWordInput().should('have.value','123123')
        // getWebElement.getPassWordInput().clear()


        // getWebElement.getConfirmPasswordInput().type(testData.customer.password)
        // getWebElement.getShowConfirmPasswordInput().click()
        // cy.contains(testData.customer.password).should('be.visible')
        // getWebElement.getShowConfirmPasswordInput().clear()

        //Fill all required fields and click Save
        getWebElement.getFirstNameInput().type(testData.customer.firstName).invoke('val').then(firstName => {
            cy.log(firstName)
            getWebElement.getLastNameInput().type(testData.customer.lastName).invoke('val').then(lastName => {
                cy.log(lastName)
                getWebElement.getEmailInput().type(testData.customer.email)
                getWebElement.getSaveButton().click()
                cy.wait(3000)
                getWebElement.getCustomerTitle().invoke('text').then(customerTitle => {
                    expect(customerTitle).to.include(firstName)
                    expect(customerTitle).to.include(lastName)
                })
            })
        })
        getWebElement.getFirstNameInput().should('have.value',(testData.customer.firstName))
        getWebElement.getLastNameInput().should('have.value',(testData.customer.lastName))
        getWebElement.getEmailInput().should('have.value',(testData.customer.email))
        cy.go('back')

        //Fill all fields and hit Save
        getWebElement.getFirstNameInput().type(testData.customer.firstName).invoke('val').then(firstName => {
            cy.log(firstName)
            getWebElement.getLastNameInput().type(testData.customer.lastName).invoke('val').then(lastName => {
                cy.log(lastName)
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
                getWebElement.getCustomerTitle().invoke('text').then(customerTitle => {
                    expect(customerTitle).to.include(firstName)
                    expect(customerTitle).to.include(lastName)
                })
            })
        })
        getWebElement.getFirstNameInput().should('have.value',(testData.customer.firstName))
        getWebElement.getLastNameInput().should('have.value',(testData.customer.lastName))
        getWebElement.getEmailInput().should('have.value',(testData.customer.email))
        getWebElement.getBirthdayField().should('have.value',(testData.customer.birthday))
        getWebElement.getCityInput().should('have.value',(testData.customer.city))
        getWebElement.getAddressInput().should('have.value',(testData.customer.address))
        getWebElement.getStateInput().should('have.value',(testData.customer.state))
        getWebElement.getZipCodeInput().should('have.value',(testData.customer.zipcode))
        getWebElement.getPassWordInput().should('have.value',(testData.customer.password))
        getWebElement.getConfirmPasswordInput().should('have.value',(testData.customer.password))
    })
})
