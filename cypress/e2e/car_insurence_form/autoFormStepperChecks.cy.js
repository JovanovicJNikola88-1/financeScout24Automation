import inquiry from '../../locators/inquiry';

describe('Auto form stepper state checks', () => {
  beforeEach(() => {
    cy.visit('/inquiry');
  });

  it('Verify auto form initial stepper state', () => {
    cy.get(inquiry.stepper)
      .should('be.visible')
      .and(
        'have.css',
        'height',
        Cypress.env('device') === 'desktop' ? '65px' : '57px'
      );

    // Check stepper box elements
    cy.get(inquiry.stepperSteps)
      .should('be.visible')
      .and('have.length', inquiry.stepperParams.length)
      .each(($step, index) => {
        if (index === 0) {
          cy.wrap($step).should('have.css', 'margin-right', '16px');
        } else if (index === inquiry.stepperParams.length - 1) {
          cy.wrap($step).should('have.css', 'margin-left', '16px');
        } else {
          cy.wrap($step)
            .should('have.css', 'margin-left', '16px')
            .and('have.css', 'margin-right', '16px');
        }
        cy.wrap($step).should(
          'have.css',
          'width',
          Cypress.env('device') === 'desktop' ? '140px' : '110px'
        );
      });

    // Check stepper icons
    cy.get(inquiry.stepperIcons)
      .should('be.visible')
      .and('have.length', inquiry.stepperParams.length)
      .each(($icon, index) => {
        cy.wrap($icon)
          .scrollIntoView()
          .should('be.visible')
          .and('have.css', 'height', '28px')
          .and('have.css', 'width', '28px')
          .and('have.css', 'border', '1px solid rgb(51, 51, 51)')
          .and(
            'have.css',
            'margin-bottom',
            Cypress.env('device') === 'desktop' ? '16px' : '8px'
          )
          .and('have.text', index + 1)
          .and(
            'have.css',
            'font-family',
            '"Make It Sans", fallback-font, sans-serif'
          )
          .and('have.css', 'font-size', '16px')
          .and('have.css', 'color', 'rgb(51, 51, 51)');
        if (index === 0) {
          cy.wrap($icon).should(
            'have.css',
            'background-color',
            'rgb(51, 51, 51)'
          );
        }
      });

    // Check stepper text
    cy.get(inquiry.stepperText)
      .should('be.visible')
      .and('have.length', inquiry.stepperParams.length)
      .each(($text, index) => {
        cy.wrap($text)
          .should('have.css', 'color', 'rgb(51, 51, 51)')
          .and(
            'have.css',
            'font-family',
            '"Make It Sans", fallback-font, sans-serif'
          )
          .and('have.css', 'font-size', '14px')
          .and('have.text', inquiry.stepperParams[index].stepperText);
      });
  });
});
