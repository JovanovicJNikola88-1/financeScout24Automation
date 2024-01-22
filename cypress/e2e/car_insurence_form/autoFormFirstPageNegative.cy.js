import inquiry from '../../locators/inquiry';

describe('Autoform negative cases', () => {
	beforeEach(() => {
		cy.visit('')
	})
  it('Verify form validation of required fields', () => {
		cy.get(inquiry.nextButton).click()
    inquiry.requiredFieldValidationMessages.forEach(({ selector, message }, index) => {
      cy.get(selector).should('be.visible')
				.and('have.text', message)
				.and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
				.and('have.css', 'color', index !== 7 ? 'rgb(229, 75, 60)' : 'rgb(231, 75, 60)') // possible bug
				.and('have.css', 'font-size', index !==7 ? '14px' : '16px')
			if(index === 3) {
				cy.get(inquiry.ownVehicleCheckboxFirstOption).click()
			}
    });
  });
});
