import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import PrioriDataPool from "../../helpers/prioriData.js";
import { faker } from '@faker-js/faker';

const nameScreenshots = 'pages/page_excerpt_mas_300/page_excerpt_mas_300_';

const pageData = {
    title: faker.lorem.sentence(3),
    description: faker.lorem.paragraphs(1),
    excerpt: PrioriDataPool.getRandomLongSentence()
}

describe('Escenarios page', () => {
    it('Página, editar el campo Excerpt de la página con una cadena de mas de 300 caracteres', () => {
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

        const newPage = cy.get("h3.gh-content-entry-title");

        newPage.contains(pageData.title).should('exist');
        newPage.click();

        PagesPage.changeExcerptTo(pageData.excerpt);

        PagesPage.publishPage();

        // Then
        cy.get("div.gh-alert-content").contains('Excerpt cannot be longer than 300 characters').should('exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        PagesPage.goToAnchorButtonPage();
        PagesPage.clickOnRedModalButton();
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title));
    });
})

