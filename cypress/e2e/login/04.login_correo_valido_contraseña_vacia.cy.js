import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'tags/login/login_contraseña_vacia';

describe('Escenarios login', () => {
    it('Login con contraseña vacía', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.emailInput(configJson.user);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        loginPage.loginButton();

        // Then
        loginPage.validateErrorTextFeedback('Please fill out the form to sign in.');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})