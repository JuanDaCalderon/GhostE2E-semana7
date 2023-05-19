import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import { faker } from '@faker-js/faker';

const nameScreenshots = 'pages/page_sin_descripcion/page_sin_descripcion_';

const pageData = {
    title: faker.lorem.sentence(5),
    description: ''
}

describe('Escenarios page', () => {
    it('Página, crear página con titulo pero sin descripción y publicarla', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);

        // When
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        PagesPage.goToNewPageFromListPageView();

        PagesPage.typeTitleAndDescription(pageData.title, pageData.description);

        PagesPage.elements.outsideClickElement().click();
        PagesPage.publishPage();

        PagesPage.goToAnchorButtonPage();

        // Then
        cy.get("h3.gh-content-entry-title").contains(pageData.title).should('exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title));

    });
})

