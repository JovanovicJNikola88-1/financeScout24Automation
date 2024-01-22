import inquiry from '../../locators/inquiry'
import URL from '../../fixtures/URL'
const year = new Date().getFullYear()
let vehicleModel = '';

describe('Pass the first form step successfully', () => {
  before(() => {
    cy.request(URL.vehicleSelectionsAudiA1)
    .then((resp) => {
      expect(resp.status).to.equal(200)
      expect(resp.body).to.be.an('array').not.to.be.empty
      vehicleModel = resp.body[0].vehicleType
  });
  })
  beforeEach(() => {
    cy.visit('');
  });

  it('Verify visibility of the form steper in the first state', () => {
    cy.get(inquiry.stepper)
      .should('be.visible')
      .and('have.css', 'height', '65px');

    // Check stepper box elements
    cy.get(inquiry.stepperSteps)
      .should('be.visible')
      .and('have.length', inquiry.stepperParams.length)
      .each(($step, index) => {
          if(index === 0) {
            cy.wrap($step)
              .should('have.css', 'margin-right', '16px');
          } else if (index === inquiry.stepperParams.length - 1) {
            cy.wrap($step)
              .should('have.css', 'margin-left', '16px');
          } else {
            cy.wrap($step)
              .should('have.css', 'margin-left', '16px')
              .and('have.css', 'margin-right', '16px');
          }
          cy.wrap($step)
            .should('have.css', 'width', '140px')
            .and('have.css', 'height', '65px');
        });
    
    // Check stepper icons
    cy.get(inquiry.stepperIcons)
        .should('be.visible')
        .and('have.length', inquiry.stepperParams.length)
        .each(($icon, index) => {
          cy.wrap($icon)
            .should('be.visible')
            .and('have.css', 'height', '28px')
            .and('have.css', 'width', '28px')
            .and('have.css', 'border', '1px solid rgb(51, 51, 51)')
            .and('have.css', 'margin-bottom', '16px')
            .and('have.text', index + 1)
            .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'color', 'rgb(51, 51, 51)');
            if(index === 0) {
              cy.wrap($icon)
                .should('have.css', 'background-color', 'rgb(51, 51, 51)')
            }
        });
    
    // Check stepper text
    cy.get(inquiry.stepperText)
      .should('be.visible')
      .and('have.length', inquiry.stepperParams.length)
      .each(($text, index) => {
        cy.wrap($text)
          .should('have.css', 'color', 'rgb(51, 51, 51)')
          .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
          .and('have.css', 'font-size', '14px')
          .and('have.text', inquiry.stepperParams[index].stepperText)
      })
  });
  
	it.only('Verify that user can pass the first form page', () => {
    // Brand input
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.brandLabel, 'Marke')
    cy.get(inquiry.passedCheckedIcon).should('not.exist')
    inquiry.dropDownIconStyles(inquiry.brandMenuIcon)
    cy.get(inquiry.brandInput).should('be.visible')
      .and('have.attr', 'placeholder', 'Bitte auswählen').click().type('audi');
    cy.get(inquiry.brandFromList).click();
    cy.get(inquiry.brandInput).should('have.attr', 'value', 'AUDI');
    inquiry.clearIconStyles(inquiry.brandMenuIcon)
    cy.get(inquiry.placeOnMarket).should('be.visible');
    inquiry.passIconCheck();

    // Placing on the market (new menu oppened)
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.pomLabel, '1. Inverkehrsetzung');
    inquiry.checkTooltip(inquiry.pomTooltipButton, inquiry.tooltipsMessages, 'Place on market')
    cy.get(inquiry.pomFirstRegistrationYearLabel).should('be.visible')
      .and('have.text', 'Jahr')
    inquiry.dropDownIconStyles(inquiry.pomYearDropDownIcon)
    cy.get(inquiry.pomFirstRegistrationYearDropDown).click()
    cy.get(inquiry.pomFirstRegistrationYearMenu).should('be.visible')
    cy.get(inquiry.pomFirstRegistrationYearMenuItem).click()
    cy.get(inquiry.pomFirstRegistrationYearDropDown).should('have.text', year)
    cy.get(inquiry.pomFirstRegistrationMonthLabel).should('be.visible')
      .and('have.text', 'Monat')
    inquiry.dropDownIconStyles(inquiry.pomMonthDropDownIcon)
    cy.get(inquiry.pomFirstRegistrationMonthDropDown).click()
    cy.get(inquiry.pomFirstRegistrationMonthMenu).should('be.visible')
    cy.get(inquiry.pomFirstRegistrationMonthMenuItem).click()
    cy.get(inquiry.pomFirstRegistrationMonthDropDown).should('have.text', 'Januar')
    inquiry.passIconCheck();

    // Model and type (new menu oppened)
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.modelAndType, 'Modell und Typ oder Typengenehmigung')
    inquiry.checkTooltip(inquiry.matTooltipButton, inquiry.tooltipsMessages, 'Model and type')
    cy.get(inquiry.matInput).should('be.visible')
      .and('have.attr', 'placeholder', 'Modell Typ')
      .type(vehicleModel)
    cy.get(inquiry.matModel).click()
    cy.get(inquiry.matInput).should('have.attr', 'value', vehicleModel)
    inquiry.passIconCheck();

    // Select vehicle radio element
    inquiry.passIconCheck() // this is predefined that's the reason for the first check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.selectVehicleLabel, 'Bitte wähle das Fahrzeug');
    inquiry.checkboxCheckedStylesAndText(
            inquiry.selectVehicleInput, 
            inquiry.selectVehicleInputText,
            'AUDI A1 Allstreet 30 TFSI Attraction S-tronic \n 110 PS - CHF 33\'950.⁠—')
            
    // Current mileage input
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.currentMilageLabel, 'Aktueller Kilometerstand')
    inquiry.inputElementPlaceholderCheck(inquiry.currentMilageRightText, 'Km')
    cy.get(inquiry.currentMilageInput).should('be.visible')
      .type('20000').should('have.attr', 'value', '20\'000')
    inquiry.passIconCheck()
    
    // Price of accessory input
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.valueOfAccessoryLabel, 'Wert des Zubehörs')
    inquiry.inputElementPlaceholderCheck(inquiry.valueOfAccessoryLeftText, 'CHF')
    inquiry.checkTooltip(inquiry.valueOfAccessoryTooltipButton, inquiry.tooltipsMessages, 'Value of accessories')
    cy.get(inquiry.valueOfAccessoryInput).should('be.visible')
      .clear().type('4000').should('have.attr', 'value', '4\'000')
    inquiry.passIconCheck()

    // Own the vehicle radio check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.ownVehicleCheckboxLabel, 'Bist du bereits im Besitz des Fahrzeugs?')
    inquiry.checkboxPlaceholderCheck(inquiry.ownVehicleCheckboxYesText, 'Ja')
    inquiry.checkboxPlaceholderCheck(inquiry.ownVehicleCheckboxNoText, 'Nein')
    cy.get(inquiry.ownVehicleCheckboxFirstOption).click()
    inquiry.checkboxCheckedStylesAndText(
      inquiry.ownVehicleCheckboxYes, 
      inquiry.ownVehicleCheckboxYesText,
      'Ja')
    cy.get(inquiry.ownVehicleCheckboxSecondOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)')
    cy.get(inquiry.ownVehicleCheckboxSecondOption).click()
    cy.get(inquiry.ownVehicleCheckboxFirstOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)')
    inquiry.checkboxCheckedStylesAndText(
      inquiry.ownVehicleCheckboxNo, 
      inquiry.ownVehicleCheckboxNoText,
      'Nein')
    inquiry.passIconCheck()

    // Leasing vehicle radio check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.leasingVehicleLabel, 'Hast du das Fahrzeug geleast oder wirst du es leasen?')
    inquiry.checkTooltip(inquiry.leasingVehicleTooltipButton, inquiry.tooltipsMessages, 'Leasing vehicle')
    inquiry.checkboxPlaceholderCheck(inquiry.leasingVehicleYesText, 'Ja')
    inquiry.checkboxPlaceholderCheck(inquiry.leasingVehicleNoText, 'Nein')
    cy.get(inquiry.leasingVehicleCheckboxFirstOption).click()
    inquiry.checkboxCheckedStylesAndText(
      inquiry.leasingVehicleCheckboxYes, 
      inquiry.leasingVehicleYesText,
      'Ja')
    cy.get(inquiry.leasingVehicleCheckboxSecondOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)')
    cy.get(inquiry.leasingVehicleCheckboxSecondOption).click()
    cy.get(inquiry.leasingVehicleCheckboxFirstOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)')
    inquiry.checkboxCheckedStylesAndText(
      inquiry.leasingVehicleCheckboxNo, 
      inquiry.leasingVehicleNoText,
      'Nein')
    inquiry.passIconCheck()

    // Kilometer per year check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.kilometerPerYearLabel, 'Deine Fahrleistung pro Jahr in Kilometern')
    inquiry.checkTooltip(inquiry.kilometerPerYearTooltipButton, inquiry.tooltipsMessages, 'Kilometer per year')
    inquiry.inputElementPlaceholderCheck(inquiry.kilometerPerYearRightText, 'Km')
    cy.get(inquiry.kilometerPerYearInput).should('be.visible')
      .type('5000').should('have.attr', 'value', '5\'000')
    inquiry.textElementsCheck(inquiry.kilometerPerYearMostCommonAnswers, 'Häufigste Antworten')
    inquiry.mostCommonAnswersButtonsCheck(
      inquiry.kilometerPerYearMostCommonAnswersButtons,
      inquiry.commonAnswers,
      inquiry.kilometerPerYearInput);
    inquiry.passIconCheck()

	});
});
