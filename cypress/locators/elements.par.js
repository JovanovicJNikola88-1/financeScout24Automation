const inputForm = 'div.chakra-form-control';
const stepper = 'ul.fs24-stepper';

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
]

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
]

const tooltipsText = [
  {
    message: 'Der Wert des Zubehörs beträgt in der Regel 10 % des Listenpreises.' 
    + ' Wenn du ein Modell ausgewählt hast, berechnen wir dir automatisch diesen Wert.' 
    + ' Du kannst ihn jedoch anpassen.'
  },
  {
    message: 'Bitte beachte, dass bei den meisten Leasingverträgen eine Vollkasko-Versicherung obligatorisch ist.'
  },
  {
    message: 'Wir fragen nach der Fahrleistung, weil diese einen Einfluss auf die Höhe der Versicherungsprämie hat.'
  },
  {
    message: 'Bitte beachte, dass einige Versicherungen keine Onlineangebote für Fahrzeuge mit geschäftlicher Nutzung anbieten.'
  },
  {
    message: 'Wir benötigen diese Angabe, um für dich den besten Preis zu ermitteln.'
  },
]
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
]

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
]

module.exports = {
  stepper,
  stepperSteps: stepper + ' li',
  stepperIcons: stepper + ' li div',
  stepperText: stepper + ' li p',
  inputForm,
  hedingText: 'h2:first-child',
  labelHeadings: inputForm + ' > label',
  inputFields: inputForm + ' > div > div > input',
  inputRightElement: 'div.chakra-input__right-element',
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
  tooltipsText,
  commonAnswers,
  typeOfUse
}
