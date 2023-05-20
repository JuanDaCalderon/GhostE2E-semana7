import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json'
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";

let pageData = {
    title: faker.name.findName(),
    description: faker.name.findName()
}

const nameScreenshots = 'eliminar_page_p';

describe('Crear page publicado', () => {
    it('Se crea una page publicada - se valida que este en la lista', () => {
        let i = 0
        // Given
        cy.visit(configJson.host);
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.goToNewPageFromListPageView();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        // When
        PagesPage.typeTitleAndDescription(pageData.title, pageData.description);
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.publishPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.goToAnchorButtonPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        const pageCreated = cy.get("h3.gh-content-entry-title").contains(pageData.title);
        pageCreated.should('exist');

        PagesPage.cleanRecentPage(pageCreated); // Delete the page
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        // Then
        cy.get(".no-posts").should('exist');

    });

})

