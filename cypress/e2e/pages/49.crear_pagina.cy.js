import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import { faker } from '@faker-js/faker';

const nameScreenshots = 'login/login_success/login_success_';

const pageData = {
    title: faker.lorem.sentence(5),
    description: faker.lorem.paragraphs()
}

describe('Escenarios page', () => {
    it('Página, crear página con titulo de menos de 255 caracteres y descripción y publicarla', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);

        // When
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        PagesPage.goToNewPageFromListPageView();
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });


        PagesPage.typeTitleAndDescription(pageData.title, pageData.description);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        PagesPage.publishPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        PagesPage.goToAnchorButtonPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Then
        cy.get("h3.gh-content-entry-title").contains(pageData.title).should('exist');

        // Clean the enviroment tested
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title));
    });
})

