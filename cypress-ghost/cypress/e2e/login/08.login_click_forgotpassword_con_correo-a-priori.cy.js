import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'tags/login/forgot_con_email';

describe('Escenarios login', () => {
    it('Click en forgot con email', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.emailInput(configJson.user);
        loginPage.forgotButton();
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Then
        loginPage.validateErrorTextFeedback("Failed to send email. Reason: Can't send mail - all recipients were rejected.");
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})