import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'login/login_success/login_success_';

describe('Escenarios Login', () => {
    it('Iniciar sesión, se ingresa un correo y una contraseña valida', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);

        // When
        loginPage.login(configJson.user, configJson.password);

        // Then
        loginPage.validateHasLoggedIn();
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})

