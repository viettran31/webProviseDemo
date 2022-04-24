/// <reference types="Cypress" />
class getElement {
    getLoginButton (){
        return cy.get('button[type="submit"]')
    }
    getUserNameHelperText (){
        return cy.get('#username-helper-text')
    }
    getPasswordHelperText (){
        return cy.get('#password-helper-text')
    }
    getUserNameInput (){
        return cy.get('input[name="username"]')
    }
    getPassWordInput(){
        return cy.get('input[name="password"]')
    }
    getCatalogsIcon (){
        return cy.get('svg[data-testid="CollectionsIcon"]')
    }
    get3rdPostername(){
        return cy.get('ul a:nth-child(3)').children().children().children().eq(0)
    }
    getPosterSearchInput(){
        return cy.get('input[placeholder="Search"]')
    }
    getPosterResultName(){
        return cy.get('ul a:nth-child(1)').children().children().children().eq(0)
    }
    getCustomerIcon(){
        return cy.get('svg[data-testid="PeopleIcon"]')
    }
    getSaveButton(){
        return cy.get('.RaToolbar-defaultToolbar').children()
    }
    getAddCustomerButton(){
        return cy.get('a[href="#/customers/create"]')
    }
    getBirthdayField(){
        return cy.get('#birthday')
    }
    getFirstNameInput(){
        return cy.get('#first_name')
    }
    getLastNameInput(){
        return cy.get('#last_name')
    }
    getEmailInput(){
        return cy.get('#email')
    }
    getBirthdayPicker(){
        return cy.get('#birthday')
    }
    getAddressInput(){
        return cy.get('#address')
    }
    getFirstNameHelperText(){
        return cy.get('#first_name-helper-text')
    }
    getLastNameHelperText(){
        return cy.get('#last_name-helper-text')
    }
    getEmailHelperText(){
        return cy.get('#email-helper-text')
    }
    getCustomerTitle(){
        return cy.get('#react-admin-title')
    }
    getCityInput(){
        return cy.get('#city')
    }
    getStateInput(){
        return cy.get('#stateAbbr')
    }
    getZipCodeInput(){
        return cy.get('#zipcode')
    }
    getPassWordInput(){
        return cy.get('#password')
    }
    getConfirmPasswordInput(){
        return cy.get('#confirm_password')
    }
    getShowPasswordInput(){
        return cy.get('#password').parent().children().children().children()
    }
    getShowConfirmPasswordInput(){
        return cy.get('#confirm_password').parent().children().children().children()
    }
}
export default getElement;