import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import { faker } from '@faker-js/faker';

const nameScreenshots = 'pages/page_titulo_mas_255/page_titulo_mas_255_';

const pageData = {
    title: faker.lorem.words(50),
    description: faker.lorem.paragraphs(1)
}

describe('Escenarios page', () => {
    it('Página, crear página con titulo de mas de 255 caracteres y publicarla', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);

        // When
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        PagesPage.goToNewPageFromListPageView();

        PagesPage.typeTitleAndDescription(pageData.title, pageData.description);

        // Then
        cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").should('not.exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        PagesPage.goToAnchorButtonPage();
        PagesPage.clickOnRedModalButton();
        cy.get("h3.gh-content-entry-title").should('not.exist');
    });
})

