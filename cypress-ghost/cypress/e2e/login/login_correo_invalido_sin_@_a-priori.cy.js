import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PrioriDataPool from "../../helpers/prioriData.js";

const nameScreenshots = 'tags/login/login_contraseña_vacia';

const tagData = {
    email: PrioriDataPool.getRandomFirstName()
}

describe('Escenarios login', () => {
    it('Login con email inválido, sin @', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.emailInput(tagData.email)

        loginPage.passwordInput(configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        loginPage.loginButton();

        // Then
        loginPage.validateErrorTextFeedback('Please fill out the form to sign in.');
        //loginPage.validateErrorInputFeedback('password', 'error');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})