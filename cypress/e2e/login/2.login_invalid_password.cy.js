import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'login/invalid_password/login_invalid_password_';

describe('Escenarios Login', () => {
    it('Iniciar sesión, se ingresa un correo valido pero una contraseña invalida.', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);

        // When
        loginPage.loginInvalidPassword(configJson.user);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Then
        loginPage.validateErrorTextFeedback('Your password is incorrect.');
        loginPage.validateErrorInputFeedback('password', 'error');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})

