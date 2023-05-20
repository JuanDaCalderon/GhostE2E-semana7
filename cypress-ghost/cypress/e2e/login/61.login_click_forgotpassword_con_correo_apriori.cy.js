import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PrioriDataPool from "../../helpers/prioriData.js";

const nameScreenshots = 'tags/login/forgot_con_email';

const tagData = {
    email: PrioriDataPool.getRandomEmail()
}

describe('Escenarios login', () => {
    it('Click en forgot con email', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.emailInput(tagData.email)
        loginPage.forgotButton();
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Then
        loginPage.validateErrorTextFeedback("User not found.");
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    });
})