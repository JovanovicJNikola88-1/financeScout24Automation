import homePage from '../../locators/home';
import carInsurance from '../../locators/carInsurance';
import inquiry from '../../locators/inquiry';
import url from '../../fixtures/URL';

describe('Access form from the pages check', () => {
  it('Verify that user is able to access auto form from the home page', () => {
    cy.visit(url.homePage);
    cy.get(carInsurance.acceptTermsButton, { setTimeout: 20000 }).click();
    if (Cypress.env('device') === 'desktop') {
      cy.get(homePage.bannerBackgroundImg).should('be.visible');
    }
    cy.get(homePage.carInsuranceButton).click();
    cy.url().should('eq', url.carInsurance);
    cy.get(carInsurance.pageHeading).should('be.visible');
    cy.get(carInsurance.startComparisonButton).click();
    cy.url().should('include', `${Cypress.config('baseUrl')}`);
    cy.get(inquiry.hedingText).should('be.visible');
  });
});
