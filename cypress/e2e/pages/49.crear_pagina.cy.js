import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import PrioriDataPool from "../../helpers/prioriData.js";
import { faker } from '@faker-js/faker';

const nameScreenshots = 'pages/page_publish/page_publish_';

const pageData = {
    title: PrioriDataPool.getRandomShortSentence(),
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

        PagesPage.typeTitleAndDescription(pageData.title, pageData.description);

        PagesPage.publishPage();

        PagesPage.goToAnchorButtonPage();

        // Then
        cy.get("h3.gh-content-entry-title").contains(pageData.title).should('exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title));
    });
})

