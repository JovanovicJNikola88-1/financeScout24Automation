import inquiry from "../../locators/inquiry";

describe("Verify auto form language change functionallity", () => {
  beforeEach(() => {
    cy.visit('')
  })
  it("Verify that user is able to change language", () => {
    cy.get(inquiry.languageChangeIcon)
      .should("be.visible")
      .and("have.text", "DE")
      .click();
    cy.get(inquiry.languageManu).should("be.visible");
    cy.get(inquiry.languageManuItems)
      .should("be.visible")
      .and("have.length", inquiry.laguageMenuOptions.length)
      .each(($language, index) => {
        cy.wrap($language)
          .should("be.visible")
          .and("have.text", inquiry.laguageMenuOptions[index].option)
          .click();
        cy.get(inquiry.languageChangeIcon)
          .should("be.visible")
          .and("have.text", inquiry.laguageMenuOptions[index].codeName);
        cy.get(inquiry.hedingText)
          .should("be.visible")
          .and("have.text", inquiry.laguageMenuOptions[index].heading);
        cy.get(inquiry.languageChangeIcon).click();
      });
    cy.get(inquiry.languageChangeIcon).click();
  });
});
