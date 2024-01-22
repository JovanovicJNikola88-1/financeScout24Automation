const inputForm = 'div.chakra-form-control';
const stepper = 'ul.fs24-stepper';

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
      message: 'Bitte beachte, dass einige Versicherungen keine Onlineangebote für Fahrzeuge mit geschäftlicher Nutzung anbieten.'
    },
    {
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
}

function checkFormLabelHedingsStylesAndText (headingId, text) {
  cy.get(headingId)
    .should('be.visible')
    .and('have.text', text)
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px')
    .and('have.css', 'color', 'rgb(51, 51, 51)');
}

function dropDownIconStyles (iconId) {
  cy.get(iconId)
    .should('be.visible')
    .and('have.css', 'width', '24px')
    .and('have.css', 'height', '26px')
    .and('have.attr', 'class', 'fs24-select__icon')
}

function clearIconStyles (iconId) {
  cy.get(iconId)
    .should('be.visible')
    .and('have.css', 'width', '24px')
    .and('have.css', 'height', '26px')
    .and('have.attr', 'class', 'fs24-autocomplete-clear__icon')
}

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
}

function checkboxCheckedStylesAndText (checkboxId, textId, expectedText) {
  cy.get('body').click({force: true}) // click on side, so cypress can reach border values
  cy.get(checkboxId)
    .should('be.visible')
    .and('have.css', 'background-color', 'rgb(241, 252, 255)')
    .and('have.css', 'border', '2px solid rgb(175, 240, 255)')
    cy.get(textId)
    .should('be.visible')
    .invoke('text')
    .then((actualText) => {
      const normalizedExpectedText = expectedText.replace(/\s+/g, ' ').trim();
      const normalizedActualText = actualText.replace(/\s+/g, ' ').trim();

      expect(normalizedActualText).to.equal(normalizedExpectedText);
  })
}

function inputElementPlaceholderCheck (elementId, text) {
  cy.get(elementId)
    .should('be.visible')
    .and('have.css', 'width', '60px')
    .and('have.css', 'height', '60px')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px')
    .and('have.css', 'color', 'rgb(100, 100, 100)')
    .and('have.text', text)
}

function checkboxPlaceholderCheck (element, text) {
  cy.get(element)
    .should('be.visible')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '18px')
    .and('have.css', 'color', 'rgb(51, 51, 51)')
    .and('have.text', text)
}

function textElementsCheck (textSelector, text) {
  cy.get(textSelector)
    .should('be.visible')
    .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
    .and('have.css', 'font-size', '14px')
    .and('have.css', 'color', 'rgb(51, 51, 51)')
    .and('have.text', text)
}

function mostCommonAnswersButtonsCheck (buttonsId, params, input) {
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
        .click()
        cy.get(input).should('be.visible')
          .and('have.attr', 'value', params[index].answer.split(' ')[0])
        cy.get($button)
          .should('have.css', 'border', '1px solid rgb(0, 205, 249)')
          .and('have.css', 'background-color', 'rgb(241, 252, 255)')
    });
  }

module.exports = {
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
    stepper,
    stepperSteps: stepper + ' li',
    stepperIcons: stepper + ' li div',
    stepperText: stepper + ' li p',
    inputForm,
    hedingText: 'h2:first-child',
    labelHeadings: inputForm + ' > label',
    inputFields: inputForm + ' > div > div > input',
    inputLeftElement: 'div.chakra-input__left-element',
    radioFields: inputForm + ' > div > div[role=radiogroup] > label',
    radioFieldLabels: 'span.chakra-radio__label',
    tooltipsButtons: inputForm + ' button',
    tooltipsMessages: 'div[id*="tooltip"]',
    mostCommonAnswerHeadings: 'p.chakra-text:first-child',
    mostCommonAnswerButtons: 'form > div:nth-child(6) div:nth-child(2) button',
    typeOfUseCheckboxes: 'div.chakra-form-control:nth-child(7) div.chakra-stack > label div',
    nextButton: 'div.chakra-stack button:first-of-type',
    backButton: 'div.chakra-stack button:last-of-type',
    safeDataMessage: 'p.chakra-text:last-child',
    stepperParams,
    labelHeadingsText,
    tooltipsParams,
    commonAnswers,
    typeOfUse,
    brandLabel: '#make-label',
    brandMenuIcon: 'div.fs24-autocomplete-select svg',
    brandInput: 'input[id=":R5di6l9al6f6:"]',
    brandFromList: 'div[id=":R5di6l9al6f6:-menu"] li:first-child',
    placeOnMarket: 'form > div:nth-child(2)',
    pomLabel: '#yearMonthInput-label span',
    pomYearDropDownIcon: 'div[id=":re:"] + div > svg',
    pomTooltipButton: 'form > div:nth-child(2) button',
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
    matTooltipButton: 'form > div:nth-child(3) button',
    matInput: '#vehicleSearchText',
    matModel: '#react-autowhatever-1--item-0',
    selectVehicleLabel: '#vehicleSelection-label',
    selectVehicleInput: 'div.chakra-form-control:nth-of-type(4) label.chakra-radio',
    selectVehicleInputText: 'div.chakra-form-control:nth-of-type(4) label.chakra-radio span.chakra-radio__label',
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
}