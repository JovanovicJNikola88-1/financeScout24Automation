import inquiry from '../../locators/inquiry';

describe('Autoform negative cases', () => {
	beforeEach(() => {
		cy.visit('/inquiry');
	})
  it('Verify form validation of required fields', () => {
		cy.get(inquiry.nextButton).click();
    inquiry.requiredFieldValidationMessages.forEach((arr, index) => {
      cy.get(arr.selector).should('be.visible')
				.and('have.text', arr.message)
				.and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
				.and('have.css', 'color', index !== 7 ? 'rgb(229, 75, 60)' : 'rgb(231, 75, 60)') // possible bug
				.and('have.css', 'font-size', index !==7 ? '14px' : '16px');
			if(index === 3) {
				cy.get(inquiry.ownVehicleCheckboxFirstOption).click();
			}
    });
  });

  it('Brand input field check', () => {
    inquiry.inputFieldsCheckParams.forEach((arr) => {
    cy.get(inquiry.brandInput).should('be.visible')
      .type(arr.param).then(() => {
        cy.get(inquiry.brandFromListItem)
          .should('be.visible')
          .and('have.text', 'Keine Ergebnisse gefunden')
          .click(); 
        cy.get(inquiry.brandInput).clear();
      });
    });
  });

  it('Current milage input field check', () => {
    inquiry.numberInputsCheck(
      inquiry.inputFieldsCheckParams,
      inquiry.brandInput, 
      inquiry.currentMilageInput)
  });  

  it('Value of accessories input field check', () => {
    inquiry.numberInputsCheck(
      inquiry.inputFieldsCheckParams,
      inquiry.brandInput, 
      inquiry.valueOfAccessoryInput)
  });  

  it('Milage per year input field check', () => {
    inquiry.numberInputsCheck(
      inquiry.inputFieldsCheckParams,
      inquiry.brandInput, 
      inquiry.kilometerPerYearInput)
  });
});
