import homePage from '../../locators/home'
import carInsurance from '../../locators/carInsurance'
import inquiry from '../../locators/inquiry'

describe('Access form from the pages check', () => {
    it('Verify that user is able to access auto form from the home page', () => {
        cy.visit('https://www.financescout24.ch/de')
        cy.get(homePage.bannerBackgroundImg).should('be.visible')
        cy.get(homePage.carInsuranceButton).click()
        cy.get(carInsurance.acceptTermsButton, {setTimeout: 10000}).click()
        cy.url().should('eq', 'https://www.financescout24.ch/de/lp/autoversicherung')
        cy.get(carInsurance.pageHeading).should('be.visible')
        cy.get(carInsurance.startComparisonButton).click()
        cy.url().should('eq', 'https://autoversicherung.financescout24.ch/de/inquiry?step=usageDetails&submit=')
        cy.get(inquiry.hedingText).should('be.visible')
    })
})