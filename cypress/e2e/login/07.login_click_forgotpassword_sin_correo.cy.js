import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'tags/login/forgot_sin_email';

describe('Escenarios login', () => {
    it('Click en forgot sin email', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.forgotButton();
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Then
        loginPage.validateErrorTextFeedback('We need your email address to reset your password!');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})