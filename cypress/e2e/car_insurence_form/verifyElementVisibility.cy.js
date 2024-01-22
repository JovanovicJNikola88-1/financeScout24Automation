import firstForm from '../../locators/elements.par'

describe('First form elements visibility and styles', () => {
    beforeEach(() => {
      cy.visit('');
    });

    it('Verify visibility of the form steper in the first state', () => {
      cy.get(firstForm.stepper)
        .should('be.visible')
        .and('have.css', 'height', '65px');

      // Check stepper box elements
      cy.get(firstForm.stepperSteps)
        .should('be.visible')
        .and('have.length', firstForm.stepperParams.length)
        .each(($step, index) => {
            if(index === 0) {
              cy.wrap($step)
                .should('have.css', 'margin-right', '16px');
            } else if (index === firstForm.stepperParams.length - 1) {
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
      cy.get(firstForm.stepperIcons)
          .should('be.visible')
          .and('have.length', firstForm.stepperParams.length)
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
      cy.get(firstForm.stepperText)
        .should('be.visible')
        .and('have.length', firstForm.stepperParams.length)
        .each(($text, index) => {
          cy.wrap($text)
            .should('have.css', 'color', 'rgb(51, 51, 51)')
            .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
            .and('have.css', 'font-size', '14px')
            .and('have.text', firstForm.stepperParams[index].stepperText)
        })
    });

    it('Verify visibility of the form elements and styles', () => {
      cy.get(firstForm.hedingText)
        .should('be.visible')
        .and('have.text', 'Welches Fahrzeug soll versichert werden?')
        .and('have.css', 'font-size', '28px')
        .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
        .and('have.css', 'color', 'rgb(51, 51, 51)')
        .and('have.css', 'margin-top', '32px')
        .and('have.css', 'margin-bottom', '48px');
      
      // Check the labels headings text
      cy.get(firstForm.labelHeadings)
        .should('be.visible')
        .and('have.length', firstForm.labelHeadingsText.length)
        .each(($label, index) => {
          cy.wrap($label)
            .should('be.visible')
            .and('have.text', firstForm.labelHeadingsText[index].text)
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
            .and('have.css', 'color', 'rgb(51, 51, 51)');
        });
      
      // Check the input fields
      cy.get(firstForm.inputFields)
        .should('be.visible')
        .and('have.length', 4)
        .each(($form, index) => {
          cy.wrap($form)
            .should('have.css', 'border', '1px solid rgb(100, 100, 100)')
            .and('have.css', 'border-radius', '6px')
            .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'color', 'rgb(51, 51, 51)');
            if (index === 0) {
              cy.get($form).should('have.attr', 'placeholder', 'Bitte auswählen');
            } else if(index === 2) {
              cy.get(firstForm.inputLeftElement)
                .should('have.text', 'CHF')
            } else {
              cy.get(firstForm.inputRightElement)
                .should('have.length', 2)
                .each((el) => {
                  cy.wrap(el).should('have.text', 'Km')
                });
            }
        });

      // Check the radio button fields
      cy.get(firstForm.radioFields)
        .should('be.visible')
        .and('have.length', 8)
        .each(($radio, index) => {
          cy.wrap($radio)
            .should('have.css', 'border', '1px solid rgb(100, 100, 100)')
            .and('have.css', 'border-radius', '6px')
            .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'color', 'rgb(51, 51, 51)')
            switch (index) {
              case 0:
              case 2:
                cy.get($radio).should('have.text', 'Ja')
              break;
              case 5:
                cy.get($radio).should('have.text', 'Ja, zuhause')
              break;
              case 6:
                cy.get($radio).should('have.text', 'Ja, am Arbeitsplatz')
              break;
              case 7:
                cy.get($radio).should('have.text', 'Ja, zuhause und am Arbeitsplatz')
              break;
              default:
                cy.get($radio).should('have.text', 'Nein')
              break;
            }
        });
      
      // Check most common answers section
      cy.get(firstForm.mostCommonAnswerHeadings)
        .should('be.visible')
        .and('have.text', 'Häufigste Antworten')
        .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'color', 'rgb(51, 51, 51)')

      cy.get(firstForm.mostCommonAnswerButtons)
        .should('be.visible')
        .and('have.length', firstForm.commonAnswers.length)
        .each(($button, index) => {
          cy.wrap($button)
            .should('be.visible')
            .and('have.text', firstForm.commonAnswers[index].answer)
            .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'color', 'rgb(51, 51, 51)')
            .and('have.css', 'padding', '8px 12px')
            .and('have.css', 'border', '1px solid rgb(51, 51, 51)')
            .and('have.css', 'border-radius', '24px')
        });

      // Check type of use
      cy.get(firstForm.typeOfUseCheckboxes)
        .should('be.visible')
        .and('have.length', firstForm.typeOfUse.length)
        .each(($type, index) => {
          cy.wrap($type)
            .should('be.visible')
            .and('have.text', firstForm.typeOfUse[index].type)
            .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'color', 'rgb(51, 51, 51)')
        })

      // Check next and back buttons
      cy.get(firstForm.nextButton)
        .should('be.visible')
        .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
        .and('have.css', 'font-size', '18px')
        .and('have.css', 'color', 'rgb(51, 51, 51)')
        .and('have.css', 'background-color', 'rgb(0, 223, 255)')
        .and('have.css', 'padding', '0px 16px')
        .and('have.css', 'height', '60px')
        .and('have.css', 'border', '0px none rgb(51, 51, 51)')
        .and('have.css', 'border-radius', '6px')

      cy.get(firstForm.backButton)
        .should('be.visible')
        .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
        .and('have.css', 'font-size', '18px')
        .and('have.css', 'color', 'rgb(51, 51, 51)')
        .and('have.css', 'padding', '0px 16px')
        .and('have.css', 'height', '60px')
        .and('have.css', 'border', '1px solid rgb(51, 51, 51)')
        .and('have.css', 'border-radius', '6px')

      cy.get(firstForm.safeDataMessage)
        .should('be.visible')
        .and('have.text', 'Deine Daten sind bei uns sicher')
        .and('have.css', 'font-family', '"Make It Sans", fallback-font, sans-serif')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'color', 'rgb(100, 100, 100)')

    });

    it('Verify tooltips functionality and messages', () => {
      cy.get(firstForm.tooltipsButtons)
        .should('be.visible')
        .and('have.length', firstForm.tooltipsText.length)
        .each(($tooltip, index) => {
          cy.wrap($tooltip)
            .should('be.visible')
            .trigger('mouseover').click()
            .then(() => {
              cy.get(firstForm.tooltipsMessages).should('be.visible')
              .and('have.text', firstForm.tooltipsText[index].message)
            });
        });
    })
});
