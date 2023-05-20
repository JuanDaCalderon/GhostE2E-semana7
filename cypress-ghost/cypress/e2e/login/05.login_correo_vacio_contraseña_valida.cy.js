import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'tags/login/login_contraseña_vacia';

describe('Escenarios login', () => {
    it('Login con email vacío', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.passwordInput(configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        loginPage.loginButton();

        // Then
        loginPage.validateErrorTextFeedback('Please fill out the form to sign in.');
        //loginPage.validateErrorInputFeedback('password', 'error');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})