import inquiry from '../../locators/inquiry'
import URL from '../../fixtures/URL'
const year = new Date().getFullYear()
let vehicleModel = '';

describe('Pass the first page of the form step successfully', () => {
  before(() => {
    cy.request(URL.vehicleSelectionsAudiA1)
      .then((resp) => {
      expect(resp.status).to.equal(200)
      expect(resp.body).to.be.an('array').not.to.be.empty
      vehicleModel = resp.body[0].vehicleType
  });
  })
  beforeEach(() => {
    cy.clearCookies()
    cy.visit('/inquiry');
    cy.get(inquiry.acceptTermsButton, {setTimeout: 10000}).click()
  });
  
	it('Verify that user can pass the first form page', () => {
    // Brand input
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.brandLabel, 'Marke');
    cy.get(inquiry.passedCheckedIcon).should('not.exist');
    inquiry.dropDownIconStyles(inquiry.brandMenuIcon);
    cy.get(inquiry.brandInput).should('be.visible')
      .and('have.attr', 'placeholder', 'Bitte auswählen').click().type('audi');
    cy.get(inquiry.brandFromListItem).click();
    cy.get(inquiry.brandInput).should('have.attr', 'value', 'AUDI');
    inquiry.clearIconStyles(inquiry.brandMenuIcon)
    cy.get(inquiry.placeOnMarket).should('be.visible');
    inquiry.passIconCheck();

    // Placing on the market (new menu oppened)
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.pomLabel, '1. Inverkehrsetzung');
    inquiry.checkTooltip(inquiry.pomTooltipButton, inquiry.tooltipsMessages, 'Place on market');
    cy.get(inquiry.pomFirstRegistrationYearLabel).should('be.visible')
      .and('have.text', 'Jahr');
    inquiry.dropDownIconStyles(inquiry.pomYearDropDownIcon);
    cy.get(inquiry.pomFirstRegistrationYearDropDown).click();
    cy.get(inquiry.pomFirstRegistrationYearMenu).should('be.visible');
    cy.get(inquiry.pomFirstRegistrationYearMenuItem).click();
    cy.get(inquiry.pomFirstRegistrationYearDropDown).should('have.text', year);
    cy.get(inquiry.pomFirstRegistrationMonthLabel).should('be.visible')
      .and('have.text', 'Monat');
    inquiry.dropDownIconStyles(inquiry.pomMonthDropDownIcon);
    cy.get(inquiry.pomFirstRegistrationMonthDropDown).click();
    cy.get(inquiry.pomFirstRegistrationMonthMenu).should('be.visible');
    cy.get(inquiry.pomFirstRegistrationMonthMenuItem).click();
    cy.get(inquiry.pomFirstRegistrationMonthDropDown).should('have.text', 'Januar');
    inquiry.passIconCheck();

    // Model and type (new menu oppened)
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.modelAndType, 'Modell und Typ oder Typengenehmigung');
    inquiry.checkTooltip(inquiry.matTooltipButton, inquiry.tooltipsMessages, 'Model and type');
    cy.get(inquiry.matInput).should('be.visible')
      .and('have.attr', 'placeholder', 'Modell Typ')
      .type(vehicleModel);
    cy.get(inquiry.matModel).click();
    cy.get(inquiry.matInput).should('have.attr', 'value', vehicleModel)
    inquiry.passIconCheck();

    // Select vehicle radio element
    inquiry.passIconCheck(); // this is predefined that's the reason for the first check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.selectVehicleLabel, 'Bitte wähle das Fahrzeug');
    inquiry.checkboxCheckedStylesAndText(
            inquiry.selectVehicleCheckbox, 
            inquiry.selectVehicleCheckboxText,
            'AUDI A1 Allstreet 30 TFSI Attraction S-tronic \n 110 PS - CHF 33\'950.⁠—');
            
    // Current mileage input
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.currentMilageLabel, 'Aktueller Kilometerstand');
    inquiry.inputElementPlaceholderCheck(inquiry.currentMilageRightText, 'Km');
    cy.get(inquiry.currentMilageInput).should('be.visible')
      .type('20000').should('have.attr', 'value', '20\'000');
    inquiry.passIconCheck();
    
    // Price of accessory input
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.valueOfAccessoryLabel, 'Wert des Zubehörs');
    inquiry.inputElementPlaceholderCheck(inquiry.valueOfAccessoryLeftText, 'CHF');
    inquiry.checkTooltip(inquiry.valueOfAccessoryTooltipButton, inquiry.tooltipsMessages, 'Value of accessories');
    cy.get(inquiry.valueOfAccessoryInput).should('be.visible')
      .clear().type('4000').should('have.attr', 'value', '4\'000');
    inquiry.passIconCheck();

    // Own the vehicle radio check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.ownVehicleCheckboxLabel, 'Bist du bereits im Besitz des Fahrzeugs?');
    inquiry.checkboxPlaceholderCheck(inquiry.ownVehicleCheckboxYesText, 'Ja');
    inquiry.checkboxPlaceholderCheck(inquiry.ownVehicleCheckboxNoText, 'Nein');
    cy.get(inquiry.ownVehicleCheckboxFirstOption).click();
    inquiry.checkboxCheckedStylesAndText(
      inquiry.ownVehicleCheckboxYes, 
      inquiry.ownVehicleCheckboxYesText,
      'Ja');
    cy.get(inquiry.ownVehicleCheckboxSecondOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)');
    cy.get(inquiry.ownVehicleCheckboxSecondOption).click();
    cy.get(inquiry.ownVehicleCheckboxFirstOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)');
    inquiry.checkboxCheckedStylesAndText(
      inquiry.ownVehicleCheckboxNo, 
      inquiry.ownVehicleCheckboxNoText,
      'Nein');
    cy.get(inquiry.ownVehicleCheckboxFirstOption).click();
    inquiry.passIconCheck();

    // Year of purchase check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.expectedPurchaseYearLabel, 'Kaufjahr');
    inquiry.dropDownIconStyles(inquiry.expectedPurchaseYearDropDownIcon);
    cy.get(inquiry.expectedPurchaseYearDropDown).should('be.visible')
      .and('have.text', 'Bitte auswählen').click();
    cy.get(inquiry.expectedPurchaseYearDropDownMenu).should('be.visible');
    cy.get(inquiry.expectedPurchaseYearDropDownMenuItem).click();
    cy.get(inquiry.expectedPurchaseYearDropDown).should('have.text', year);

    // Leasing vehicle radio check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.leasingVehicleLabel, 'Hast du das Fahrzeug geleast oder wirst du es leasen?');
    inquiry.checkTooltip(inquiry.leasingVehicleTooltipButton, inquiry.tooltipsMessages, 'Leasing vehicle');
    inquiry.checkboxPlaceholderCheck(inquiry.leasingVehicleYesText, 'Ja');
    inquiry.checkboxPlaceholderCheck(inquiry.leasingVehicleNoText, 'Nein');
    cy.get(inquiry.leasingVehicleCheckboxFirstOption).click();
    inquiry.checkboxCheckedStylesAndText(
      inquiry.leasingVehicleCheckboxYes, 
      inquiry.leasingVehicleYesText,
      'Ja');
    cy.get(inquiry.leasingVehicleCheckboxSecondOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)');
    cy.get(inquiry.leasingVehicleCheckboxSecondOption).click();
    cy.get(inquiry.leasingVehicleCheckboxFirstOption).should('be.visible')
      .and('have.css', 'border-color', 'rgb(100, 100, 100)');
    inquiry.checkboxCheckedStylesAndText(
      inquiry.leasingVehicleCheckboxNo, 
      inquiry.leasingVehicleNoText,
      'Nein');
    inquiry.passIconCheck();

    // Kilometer per year check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.kilometerPerYearLabel, 'Deine Fahrleistung pro Jahr in Kilometern');
    inquiry.checkTooltip(inquiry.kilometerPerYearTooltipButton, inquiry.tooltipsMessages, 'Kilometer per year');
    inquiry.inputElementPlaceholderCheck(inquiry.kilometerPerYearRightText, 'Km');
    cy.get(inquiry.kilometerPerYearInput).should('be.visible')
      .type('5000').should('have.attr', 'value', '5\'000');
    inquiry.textElementsCheck(inquiry.kilometerPerYearMostCommonAnswers, 'Häufigste Antworten');
    inquiry.mostCommonAnswersButtonsCheck(
      inquiry.kilometerPerYearMostCommonAnswersButtons,
      inquiry.commonAnswers,
      inquiry.kilometerPerYearInput);
    inquiry.passIconCheck();

    // Type of use check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.usageLabel, 'Art der Nutzung');
    inquiry.checkTooltip(inquiry.usageTooltipButton, inquiry.tooltipsMessages, 'Type of use');
    cy.get(inquiry.usageCheckboxes)
      .should('be.visible')
      .and('have.length', inquiry.typeOfUse.length)
      .each(($checkbox) => {
        cy.wrap($checkbox).click();
        cy.wrap($checkbox).should('have.attr', 'data-checked');
        cy.get(inquiry.usageCheckedIcon).should('be.visible');
      });
    cy.get(inquiry.usageCheckboxIcons)
      .should('be.visible')
      .and('have.length', inquiry.typeOfUse.length)
      .each(($icon) => {
        cy.wrap($icon).should('be.visible')
          .and('have.attr', 'width', '24')
          .and('have.attr', 'height', '24');
      });
    cy.get(inquiry.usageText)
      .should('be.visible')
      .and('have.length', inquiry.typeOfUse.length)
      .each(($text, index) => {
        cy.wrap($text).should('be.visible')
          .and('have.text', inquiry.typeOfUse[index].type)
          .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
          .and('have.css', 'font-size', '18px')
          .and('have.css', 'color', 'rgb(51, 51, 51)');
      });
    inquiry.passIconCheck();
    
    // Canton vehicle check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.cantonLabel, 'In welchem Kanton hast du das Fahrzeug eingelöst oder wirst du es einlösen?');
    inquiry.dropDownIconStyles(inquiry.cantonDropDownIcon);
    cy.get(inquiry.cantonDropDown).should('be.visible')
      .and('have.text', 'Bitte auswählen').click();
    cy.get(inquiry.cantonDropDownMenu).should('be.visible');
    cy.get(inquiry.cantonDropDownMenuItem).click();
    cy.get(inquiry.cantonDropDown).should('have.text', 'Aargau');
    inquiry.passIconCheck();

    // Garage vehicle check
    inquiry.checkFormLabelHedingsStylesAndText(inquiry.garageLabel, 'Kann das Fahrzeug in einer geschlossenen Garage untergebracht werden?');
    inquiry.checkTooltip(inquiry.garageTooltipButton, inquiry.tooltipsMessages, 'Garage');
    inquiry.checkboxPlaceholderCheck(inquiry.garageCheckboxNoText, 'Nein');
    inquiry.checkboxPlaceholderCheck(inquiry.garageCheckboxYes1Text, 'Ja, zuhause');
    inquiry.checkboxPlaceholderCheck(inquiry.garageCheckboxYes2Text, 'Ja, am Arbeitsplatz');
    inquiry.checkboxPlaceholderCheck(inquiry.garageCheckboxYes3Text, 'Ja, zuhause und am Arbeitsplatz');
    cy.get(inquiry.garageCheckboxOption1).click();
    inquiry.checkboxCheckedStylesAndText(
      inquiry.garageCheckbox1, 
      inquiry.garageCheckboxNoText,
      'Nein');
    cy.get(inquiry.garageCheckboxOption2).click();
    inquiry.checkboxCheckedStylesAndText(
      inquiry.garageCheckbox2, 
      inquiry.garageCheckboxYes1Text,
      'Ja, zuhause');
    cy.get(inquiry.garageCheckboxOption3).click();
    inquiry.checkboxCheckedStylesAndText(
      inquiry.garageCheckbox3, 
      inquiry.garageCheckboxYes2Text,
      'Ja, am Arbeitsplatz');
    cy.get(inquiry.garageCheckboxOption4).click();
    inquiry.checkboxCheckedStylesAndText(
      inquiry.garageCheckbox4, 
      inquiry.garageCheckboxYes3Text,
      'Ja, zuhause und am Arbeitsplatz');
    inquiry.passIconCheck();

    // Check buttons section and verify that user can pass to the next page
    inquiry.checkNextButtonStyles(inquiry.nextButton, 'Weiter');
    inquiry.checkPreviousButtonStyles(inquiry.backButton, 'Zurück');
    inquiry.checkSecureDataDisclamer();
    cy.get(inquiry.nextButton).click();
    cy.get(inquiry.stepperPassedFirstStep).should('be.visible')
      .and('have.css', 'background-color', 'rgb(0, 208, 178)')
      .parent()
      .should('have.attr', 'data-done', 'true');
    cy.get(inquiry.stepperSecondStep).should('be.visible')
      .and('have.css', 'background-color', 'rgb(51, 51, 51)')
      .children()
      .should('have.text', '2');
    cy.get(inquiry.secondPageHeading).should('be.visible')
      .and('have.text', 'Wer fährt das Fahrzeug am häufigsten?')
    cy.url().should('eq', `${Cypress.config('baseUrl')}/inquiry?step=driver`);

    // Verify that user is able to return to a previous page
    cy.get(inquiry.backButton).click();
    cy.get(inquiry.hedingText).should('be.visible');
    cy.url().should('eq', `${Cypress.config('baseUrl')}/inquiry?step=usageDetails`);
	});
});
