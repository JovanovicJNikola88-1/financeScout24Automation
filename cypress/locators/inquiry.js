const checkedIconSelector= [
  {
    selector: '#make-label svg'
  },
  {
    selector: '#yearMonthInput-label svg'
  },
  {
    selector: '#vehicleSearchText-label svg'
  },
  {
    selector: '#vehicleSelection-label svg'
  },
  {
    selector: '#mileage-label svg'
  },
  {
    selector: '#priceOfAccessories-label svg'
  },
  {
    selector: '#expectedPurchaseYear-label svg'
  },
  {
    selector: 'div.chakra-form-control:nth-of-type(8) #expectedPurchaseYear-label svg'
  },
  {
    selector: '#leasing-label svg'
  },
  {
    selector: '#kilometerPerYear-label svg'
  },
  {
    selector: '#usage-label svg'
  },
  {
    selector: '#registrationCanton-label svg'
  },
  {
    selector: '#garage-label svg'
  },
];

const stepperParams = [
  {
    stepperText: 'Fahrzeug'
  },
  {
    stepperText: 'Lenker'
  },
  {
    stepperText: 'Deckung'
  },
  {
    stepperText: 'Weiteres'
  },
  {
    stepperText: 'Deine Angebote'
  },
];
  
const labelHeadingsText = [
  {
    text: 'Marke',
  },
  {
    text: 'Aktueller Kilometerstand',
  },
  {
    text: 'Wert des Zubehörs',
  },
  {
    text: 'Bist du bereits im Besitz des Fahrzeugs?',
  },
  {
    text: 'Hast du das Fahrzeug geleast oder wirst du es leasen?',
  },
  {
    text: 'Deine Fahrleistung pro Jahr in Kilometern',
  },
  {
    text: 'Art der Nutzung',
  },
  {
    text: 'In welchem Kanton hast du das Fahrzeug eingelöst oder wirst du es einlösen?',
  },
  {
    text: 'Kann das Fahrzeug in einer geschlossenen Garage untergebracht werden?',
  },
];
  
const tooltipsParams = [
  {
    type: 'Place on market',
    message: 'Das Datum findest du im Feld 36 im Fahrzeugausweis.'
  },
  {
    type: 'Model and type',
    message: 'Die Typengenehmigung findest du an Position 24 im Fahrzeugausweis.'
  },
  {
    type: 'Value of accessories',
    message: 'Der Wert des Zubehörs beträgt in der Regel 10 % des Listenpreises.' 
    + ' Wenn du ein Modell ausgewählt hast, berechnen wir dir automatisch diesen Wert.' 
    + ' Du kannst ihn jedoch anpassen.'
  },
  {
    type: 'Leasing vehicle',
    message: 'Bitte beachte, dass bei den meisten Leasingverträgen eine Vollkasko-Versicherung obligatorisch ist.'
  },
  {
    type: 'Kilometer per year',
    message: 'Wir fragen nach der Fahrleistung, weil diese einen Einfluss auf die Höhe der Versicherungsprämie hat.'
  },
  {
    type: 'Type of use',
    message: 'Bitte beachte, dass einige Versicherungen keine Onlineangebote für Fahrzeuge mit geschäftlicher Nutzung anbieten.'
  },
  {
    type: 'Garage',
    message: 'Wir benötigen diese Angabe, um für dich den besten Preis zu ermitteln.'
  },
];

const commonAnswers = [
  {
    answer: "10'000 km"
  },
  {
    answer: "15'000 km"
  },
  {
    answer: "20'000 km"
  },
];

const typeOfUse = [
  {
    type: 'Privat'
  },
  {
    type: 'Arbeitsweg'
  },
  {
    type: 'Beruflich'
  },
];

const laguageMenuOptions = [
  {
    codeName: 'DE',
    option: 'Deutsch',
    heading: 'Welches Fahrzeug soll versichert werden?'
  },
  {
    codeName: 'FR',
    option: 'Français',
    heading: 'Quel véhicule souhaitez-vous assurer?'
  },
  {
    codeName: 'IT',
    option: 'Italiano',
    heading: 'Quale veicolo desideri assicurare?'
  }
];

const requiredFieldValidationMessages = [
  {
    selector: '#make-feedback',
    message: 'Bitte wähle eine Marke'
  },
  {
    selector: '#mileage-feedback',
    message: 'Bitte gib den aktuellen Kilomenterstand an'
  },
  {
    selector: '#priceOfAccessories-feedback',
    message: 'Bitte mach Angaben zum Zubehörpreis'
  },
  {
    selector: '#expectedPurchaseYear-feedback',
    message: 'Bitte mach eine Angabe.'
  },
  {
    selector: '#expectedPurchaseYear-feedback',
    message: 'Bitte gib das Kaufjahr an.'
  },
  {
    selector: '#leasing-feedback',
    message: 'Bitte gib an, ob das Fahrzeug geleast wird'
  },
  {
    selector: '#kilometerPerYear-feedback',
    message: 'Bitte mach Angaben zur Fahrleistung'
  },
  {
    selector: '#usage-label ~ div p',
    message: 'Bitte mach Angaben zur Fahrzeugnutzung'
  },
  {
    selector: '#registrationCanton-feedback',
    message: 'Bitte wähle den Zulassungskanton'
  },
  {
    selector: '#garage-feedback',
    message: 'Bitte wähle die zutreffende Option'
  },
];

// Negative tests parameters
const inputFieldsCheckParams = [
  {
    param: '  '
  },
  {
    param: '!@#$%^&*'
  },
  {
    param: 1237485990
  },
  {
    param: -123485931
  },
  {
    param: 123456789101234567
  },
];

let testIconCounter = 0;

function passIconCheck() {
  if (testIconCounter < checkedIconSelector.length) {
    const currentIcon = checkedIconSelector[testIconCounter].selector;
    cy.get(currentIcon, { timeout: 10000 })
      .should('be.visible')
      .then((icon) => {
        expect(icon).to.have.css('color', 'rgb(82, 171, 84)');
        expect(icon).to.have.css('width', '20px');
        expect(icon).to.have.css('height', '20px');
      });

    testIconCounter++;
  }
};

function checkFormLabelHedingsStylesAndText(headingId, text) {
  cy.get(headingId)
    .should('be.visible')
    .and('have.text', text)
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px')
    .and('have.css', 'color', 'rgb(51, 51, 51)');
};

function dropDownIconStyles(iconId) {
  cy.get(iconId)
    .should('be.visible')
    .and('have.css', 'width', '24px')
    .and('have.css', 'height', '26px')
    .and('have.attr', 'class', 'fs24-select__icon');
};

function clearIconStyles(iconId) {
  cy.get(iconId)
    .should('be.visible')
    .and('have.css', 'width', '24px')
    .and('have.css', 'height', '26px')
    .and('have.attr', 'class', 'fs24-autocomplete-clear__icon');
};

function checkTooltip(tooltipId, messageId, type) {
  const tooltipParams = tooltipsParams.find(params => params.type === type);
  if (!tooltipParams) {
    throw new Error(`Tooltip type "${type}" not found in tooltipsParams.`);
  }
  const tooltipMessage = tooltipParams.message;
  cy.get(tooltipId).trigger('mouseover').click()
    .then(() => {
      cy.get(messageId).should('be.visible')
        .and('have.text', tooltipMessage);
    });
};

function checkboxCheckedStylesAndText(checkboxId, textId, expectedText) {
  cy.get('body').invoke('show').click({force: true}) // click on side, so cypress can reach border values
  cy.get(checkboxId)
    .should('be.visible')
    .and('have.css', 'background-color', 'rgb(241, 252, 255)')
    .and('have.css', 'border', '2px solid rgb(175, 240, 255)');
  cy.get(textId)
    .should('be.visible')
    .invoke('text')
    .then((actualText) => {
      const normalizedExpectedText = expectedText.replace(/\s+/g, ' ').trim();
      const normalizedActualText = actualText.replace(/\s+/g, ' ').trim();

      expect(normalizedActualText).to.equal(normalizedExpectedText);
  });
};

function inputElementPlaceholderCheck(elementId, text) {
  cy.get(elementId)
    .should('be.visible')
    .and('have.css', 'width', '60px')
    .and('have.css', 'height', '60px')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px')
    .and('have.css', 'color', 'rgb(100, 100, 100)')
    .and('have.text', text);
};

function checkboxPlaceholderCheck(element, text) {
  cy.get(element)
    .should('be.visible')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px')
    .and('have.css', 'color', 'rgb(51, 51, 51)')
    .and('have.text', text);
};

function textElementsCheck(textSelector, text) {
  cy.get(textSelector)
    .should('be.visible')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'color', 'rgb(51, 51, 51)')
    .and('have.text', text);
};

function mostCommonAnswersButtonsCheck(buttonsId, params, input) {
  cy.get(buttonsId)
    .should('be.visible')
    .and('have.length', params.length)
    .each(($button, index) => {
      cy.wrap($button)
        .should('be.visible')
        .and('have.text',params[index].answer)
        .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
        .and('have.css', 'font-size', '16px')
        .and('have.css', 'color', 'rgb(51, 51, 51)')
        .and('have.css', 'padding', '8px 12px')
        .and('have.css', 'border', '1px solid rgb(51, 51, 51)')
        .and('have.css', 'border-radius', '24px')
        .click();
      cy.get(input).should('be.visible')
        .and('have.attr', 'value', params[index].answer.split(' ')[0]);
      cy.get($button)
        .should('have.css', 'border', '1px solid rgb(0, 205, 249)')
        .and('have.css', 'background-color', 'rgb(241, 252, 255)');
    });
};

function checkNextButtonStyles(selector, text) {
  cy.get(selector).should('be.visible')
    .and('have.text', text)
    .and('have.css', 'background-color', 'rgb(0, 223, 255)')
    .and('have.css', 'width', Cypress.env('device') === 'desktop' ? '432px': '406px')
    .and('have.css', 'height', '60px')
    .and('have.css', 'padding', '0px 16px')
    .and('have.css', 'color', 'rgb(51, 51, 51)')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px');
};

function checkPreviousButtonStyles(selector, text) {
  cy.get(selector).should('be.visible')
    .and('have.text', text)
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    .and('have.css', 'width', Cypress.env('device') === 'desktop' ? '432px': '406px')
    .and('have.css', 'height', '60px')
    .and('have.css', 'padding', '0px 16px')
    .and('have.css', 'color', 'rgb(51, 51, 51)')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px');
};

function checkSecureDataDisclamer() {
  const safeUserDataText ='#lastStepButton-container ~ div p';
  const safeUserDataIcon = '#lastStepButton-container ~ div svg';
  cy.get(safeUserDataText).should('be.visible')
    .and('have.text', 'Deine Daten sind bei uns sicher')
    .and('have.css', 'color', 'rgb(100, 100, 100)')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '14px');
  cy.get(safeUserDataIcon).should('be.visible')
    .and('have.css', 'width', '24px')
    .and('have.css', 'height', '20px')
    .and('have.css', 'border', '0px solid rgb(51, 51, 51)');
};

function numberInputsCheck(params, helperInput, testInput){
  params.forEach((arr) => {
  cy.get(helperInput).type('Audi').click();
  cy.get(testInput).should('be.visible')
    .type(arr.param).then(() => {
      if(arr.param[0] || arr.param[1]) {
        cy.get(testInput)
          .should('be.visible')
          .and('have.attr', 'value', '');
        cy.get(testInput).clear();
        cy.get(helperInput).clear();
        cy.get(helperInput).click();
      } else {
        cy.get(testInput)
          .should('be.visible')
          .invoke('attr', 'value').then((value) => {
            let cleanOutput = value.replace(/'/g, '').toString();
            expect(cleanOutput).to.contain(arr.param.toString().replace(/['-]/g, ''));
            cy.get(testInput).clear();
            cy.get(helperInput).clear();
            cy.get(helperInput).click();
        });
      }
    });
  });
};

const stepper = 'ul.fs24-stepper';

module.exports = {
  // test functions and parameters
  passIconCheck,
  checkFormLabelHedingsStylesAndText,
  dropDownIconStyles,
  clearIconStyles,
  checkTooltip,
  checkboxCheckedStylesAndText,
  inputElementPlaceholderCheck,
  checkboxPlaceholderCheck,
  textElementsCheck,
  mostCommonAnswersButtonsCheck,
  checkNextButtonStyles,
  checkPreviousButtonStyles,
  checkSecureDataDisclamer,
  numberInputsCheck,
  stepperParams,
  labelHeadingsText,
  tooltipsParams,
  commonAnswers,
  typeOfUse,
  laguageMenuOptions,
  requiredFieldValidationMessages,
  inputFieldsCheckParams,

  acceptTermsButton: '#onetrust-accept-btn-handler',

  // Stepper test selectors
  stepper,
  stepperSteps: stepper + ' li',
  stepperIcons: stepper + ' li div',
  stepperText: stepper + ' li p',

  // First auto form selectors 
  hedingText: 'h2:first-child',
  brandLabel: '#make-label',
  tooltipsMessages: 'div[id*="tooltip"]',
  brandMenuIcon: 'input[id=":R5di6l9al6f6:"] ~ div > svg',
  brandInput: 'input[id=":R5di6l9al6f6:"]',
  brandFromListItem: 'div[id=":R5di6l9al6f6:-menu"] li:first-child',
  placeOnMarket: 'form > div:nth-child(2)',
  pomLabel: '#yearMonthInput-label span',
  pomTooltipButton: '#yearMonthInput-label ~ button',
  pomYearDropDownIcon: 'div[id=":re:"] + div > svg',
  pomFirstRegistrationYearLabel: '#firstRegistrationYear-label',
  pomFirstRegistrationYearDropDown: 'div[id=":re:"]',
  pomFirstRegistrationYearMenu: 'div[id=":re:-menu"]',
  pomFirstRegistrationYearMenuItem: 'li[id=":re:-item-1"]',
  pomMonthDropDownIcon: 'div[id=":rj:"] + div > svg',
  pomFirstRegistrationMonthLabel: '#firstRegistrationMonth-label',
  pomFirstRegistrationMonthDropDown: 'div[id=":rj:"]',
  pomFirstRegistrationMonthMenu: 'div[id=":rj:-menu"]',
  pomFirstRegistrationMonthMenuItem: 'li[id=":rj:-item-1"]',
  modelAndType: '#vehicleSearchText-label span',
  matTooltipButton: '#vehicleSearchText-label ~ button',
  matInput: '#vehicleSearchText',
  matModel: '#react-autowhatever-1--item-0',
  selectVehicleLabel: '#vehicleSelection-label',
  selectVehicleCheckbox: '#vehicleSelection-label ~ div label',
  selectVehicleCheckboxText: 'div.chakra-form-control:nth-of-type(4) label.chakra-radio span.chakra-radio__label',
  currentMilageLabel: '#mileage-label',
  currentMilageInput: '#mileage',
  currentMilageRightText: '#mileage-label + div div.chakra-input__right-element',
  valueOfAccessoryLabel: '#priceOfAccessories-label',
  valueOfAccessoryInput: '#priceOfAccessories',
  valueOfAccessoryLeftText: '#priceOfAccessories-label + button + div div.chakra-input__left-element',
  valueOfAccessoryTooltipButton: '#priceOfAccessories-label + button',
  ownVehicleCheckboxLabel: '#expectedPurchaseYear-label',
  ownVehicleCheckboxYesText: 'input[id="radio-:R6mmqil9al6f6:"] + span + span.chakra-radio__label',
  ownVehicleCheckboxNoText: 'input[id="radio-:Rammqil9al6f6:"] + span + span.chakra-radio__label',
  ownVehicleCheckboxFirstOption: 'input[id="radio-:R6mmqil9al6f6:"] + span',
  ownVehicleCheckboxSecondOption: 'input[id="radio-:Rammqil9al6f6:"] + span',
  ownVehicleCheckboxYes: '#expectedPurchaseYear-label + div label:first-child',
  ownVehicleCheckboxNo: '#expectedPurchaseYear-label + div label:last-child',
  expectedPurchaseYearLabel: 'div.chakra-form-control:nth-of-type(8) #expectedPurchaseYear-label',
  expectedPurchaseYearDropDown: 'div.chakra-form-control:nth-of-type(8) > div > div div:first-child',
  expectedPurchaseYearDropDownIcon: 'div.chakra-form-control:nth-of-type(8) > div > div svg',
  expectedPurchaseYearDropDownMenu: 'ul.fs24-dropdown-select__menu-element',
  expectedPurchaseYearDropDownMenuItem: 'ul.fs24-dropdown-select__menu-element li:nth-child(2)',
  leasingVehicleLabel: '#leasing-label',
  leasingVehicleTooltipButton: '#leasing-label + button',
  leasingVehicleYesText: 'input[id="radio-:R1llmml9al6f6:"] + span + span.chakra-radio__label',
  leasingVehicleNoText: 'input[id="radio-:R2llmml9al6f6:"] + span + span.chakra-radio__label',
  leasingVehicleCheckboxFirstOption: 'input[id="radio-:R1llmml9al6f6:"] + span',
  leasingVehicleCheckboxSecondOption: 'input[id="radio-:R2llmml9al6f6:"] + span',
  leasingVehicleCheckboxYes: '#leasing-label + button + div label:first-child',
  leasingVehicleCheckboxNo: '#leasing-label + button + div label:last-child',
  kilometerPerYearLabel: '#kilometerPerYear-label',
  kilometerPerYearInput: '#kilometerPerYear',
  kilometerPerYearRightText: '#kilometerPerYear-label + button + div div.chakra-input__right-element',
  kilometerPerYearTooltipButton: '#kilometerPerYear-label + button',
  kilometerPerYearMostCommonAnswers: 'p.chakra-text:first-child',
  kilometerPerYearMostCommonAnswersButtons: 'p.chakra-text:first-child + div button',
  usageLabel: '#usage-label',
  usageTooltipButton: '#usage-label + button',
  usageCheckboxes: 'span.chakra-checkbox__control',
  usageCheckboxIcons: 'span.chakra-checkbox__label svg',
  usageText: 'span.chakra-checkbox__label span',
  usageCheckedIcon: '#usage-label svg',
  cantonLabel: '#registrationCanton-label',
  cantonDropDown: 'div[id=":Rln2l9al6f6:"]',
  cantonDropDownIcon: 'div[id=":Rln2l9al6f6:"] + div > svg',
  cantonDropDownMenu: 'div[id=":Rln2l9al6f6:-menu"]',
  cantonDropDownMenuItem: 'li[id=":Rln2l9al6f6:-item-1"]',
  garageLabel: '#garage-label',
  garageTooltipButton: '#garage-label + button',
  garageCheckboxNoText: 'input[id="radio-:R1lln6l9al6f6:"] + span + span.chakra-radio__label',
  garageCheckboxYes1Text: 'input[id="radio-:R2lln6l9al6f6:"] + span + span.chakra-radio__label',
  garageCheckboxYes2Text: 'input[id="radio-:R3lln6l9al6f6:"] + span + span.chakra-radio__label',
  garageCheckboxYes3Text: 'input[id="radio-:R4lln6l9al6f6:"] + span + span.chakra-radio__label',
  garageCheckboxOption1: 'input[id="radio-:R1lln6l9al6f6:"] + span',
  garageCheckboxOption2: 'input[id="radio-:R2lln6l9al6f6:"] + span',
  garageCheckboxOption3: 'input[id="radio-:R3lln6l9al6f6:"] + span',
  garageCheckboxOption4: 'input[id="radio-:R4lln6l9al6f6:"] + span',
  garageCheckbox1: '#garage-label ~ div label.chakra-radio:first-child',
  garageCheckbox2: '#garage-label ~ div label.chakra-radio:nth-child(2)',
  garageCheckbox3: '#garage-label ~ div label.chakra-radio:nth-child(3)',
  garageCheckbox4: '#garage-label ~ div label.chakra-radio:last-child',
  nextButton: '#lastStepButton-container ~ button:nth-of-type(1)',
  backButton: '#lastStepButton-container ~ button:nth-of-type(2)',
  safeUserDataText: '#lastStepButton-container ~ div p',
  safeUserDataIcon: '#lastStepButton-container ~ div svg',
  stepperPassedFirstStep: 'ul.fs24-stepper > li:first-child div',
  stepperSecondStep: 'ul.fs24-stepper > li:nth-child(2) div',
  secondPageHeading: 'h2.chakra-heading',

  //Language change test selectors
  languageChangeMenuCode: Cypress.env('device') === 'desktop' 
    ? 'li.fs24-header__language-menu span' 
    : '#main-navigation > li:last-child span',
  languageManu: 'li.fs24-header__language-menu ul',
  languageManuItems: Cypress.env('device') === 'desktop'
    ? 'li.fs24-header__language-menu ul li'
    : '#main-navigation > li:last-child ul li button',
  mobileMainManuIcon: 'label[for=mainNavigationButton]',
  mobileLanguageChangeManu: '#main-navigation > li:last-child',
  mobileLanguageState: '#main-navigation > li:last-child details',
}
