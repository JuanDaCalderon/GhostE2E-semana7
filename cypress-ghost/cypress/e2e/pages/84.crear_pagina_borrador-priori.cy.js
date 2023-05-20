import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import PrioriDataPool from "../../helpers/prioriData";

const nameScreenshots = 'pages/page_draft/page_draft_';

const pageData = {
    title: PrioriDataPool.getRandomShortSentence(),
    description: PrioriDataPool.getRandomLongSentence()
}

describe('Escenarios page', () => {
    it('Página, crear página con titulo de menos de 255 caracteres y descripción y dejarla en borrador', () => {
        // Given
        let i = 0
        cy.visit(configJson.host);

        // When
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        PagesPage.goToNewPageFromListPageView();

        PagesPage.typeTitleAndDescription(pageData.title, pageData.description);

        PagesPage.goToAnchorButtonPage();

        // Then
        cy.get("h3.gh-content-entry-title").contains(pageData.title).should('exist');
        cy.get("span.gh-content-status-draft").contains('Draft').should('exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title));
    });
})

