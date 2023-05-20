import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PrioriDataPool from "../../helpers/prioriData.js";

const nameScreenshots = 'tags/login/login_contraseña_vacia';

const tagData = {
    email: PrioriDataPool.getRandomEmail()
}

describe('Escenarios login', () => {
    it('Login con contraseña vacía', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.emailInput(tagData.email)
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        loginPage.loginButton();

        // Then
        loginPage.validateErrorTextFeedback('Please fill out the form to sign in.');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})