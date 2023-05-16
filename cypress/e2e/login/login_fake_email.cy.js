import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

const nameScreenshots = 'login/fake_email/login_fake_email_';

describe('Escenarios Login', () => {
    it('Se hace login con un correo que no existe pero la contraseña valida', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);

        // When
        loginPage.loginFakeEmail(configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Then
        loginPage.validateErrorTextFeedback('There is no user with that email address.');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})

