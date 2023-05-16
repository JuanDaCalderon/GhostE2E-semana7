import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'login/invalid_password/login_invalid_password_';

describe('Escenarios Login', () => {
    it('Se hace login con un correo valido pero una constraseña invalida', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);

        // When
        loginPage.loginInvalidPassword(configJson.user);

        // Then
        loginPage.validateErrorTextFeedback('Your password is incorrect.');
        loginPage.validateErrorInputFeedback('password', 'error');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})

