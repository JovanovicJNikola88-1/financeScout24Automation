import inquiry, { mobileLanguageState } from "../../locators/inquiry";

describe("Verify auto form language change functionallity", () => {
  beforeEach(() => {
    cy.visit('')
  })
  it("Verify that user is able to change language", () => {
    if(Cypress.env('device') === 'mobile') {
      cy.get(inquiry.mobileMainManuIcon).click()
    }
    cy.get(inquiry.languageChangeMenuCode)
    .should("be.visible")
    .and("have.text", "DE")
    .click();
    if(Cypress.env('device') === 'mobile') {
      cy.get(mobileLanguageState).should('be.visible')
      .and('have.attr', 'open')
    }
    cy.get(inquiry.languageManu).should("be.visible");
    cy.get(inquiry.languageManuItems)
      .should("be.visible")
      .and("have.length", inquiry.laguageMenuOptions.length)
      .each(($language, index) => {
        cy.wrap($language)
          .should("be.visible")
          .and("have.text", inquiry.laguageMenuOptions[index].option)
          .click();
        cy.get(inquiry.hedingText)
          .should("be.visible")
          .and("have.text", inquiry.laguageMenuOptions[index].heading);
        if(Cypress.env('device') === 'mobile') {
          cy.get(inquiry.mobileMainManuIcon).click()
          cy.get(inquiry.languageChangeMenuCode)
            .should("be.visible")
            .and("have.text", inquiry.laguageMenuOptions[index].codeName)
            .click();
          cy.get(mobileLanguageState).should('be.visible')
            .and('have.attr', 'open')
        } else {
          cy.get(inquiry.languageChangeMenuCode)
          .should("be.visible")
          .and("have.text", inquiry.laguageMenuOptions[index].codeName)
        cy.get(inquiry.languageChangeMenuCode).click();
        }
      });
      if(Cypress.env('device') === 'mobile') {
        cy.get(inquiry.mobileMainManuIcon).click()
      }
  })
});
