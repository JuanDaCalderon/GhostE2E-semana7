import { faker } from '@faker-js/faker';
import configJson from '../../../../config/config.json';
import loginPage from "../../../page-object/login";
import PagesPage from "../../../page-object/pages";

let pageData = {
    title: faker.name.findName(),
    description: faker.name.findName(),
    title_2: faker.name.findName(),
    description_2: faker.name.findName()
}

const nameScreenshots = 'editar_page_';

describe('Crear page publicado', () => {
    it('Se crea una page publicada - se valida que este en la lista', () => {
        let i = 0
        // Given
        cy.visit(configJson.host4_44);
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        // When
        PagesPage.goToNewPageFromListPageView();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.typeTitleAndDescription(pageData.title, pageData.description);
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.elements.dropdownPublish = () => cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-publishmenu-trigger');
        PagesPage.publishPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.goToAnchorButtonPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        const pageCreated = cy.get("h3.gh-content-entry-title").contains(pageData.title);
        pageCreated.should('exist');

        PagesPage.clickOnEspecificPage(pageCreated);
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.typeTitleAndDescription(pageData.title_2, pageData.description_2);
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.elements.dropdownPublish = () => cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-publishmenu-trigger');
        PagesPage.publishPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        PagesPage.goToAnchorButtonPage();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        // Then
        cy.get("h3.gh-content-entry-title").contains(pageData.title_2).should('exist');

        // Clean the enviroment tested
        PagesPage.elements.settingsPageMenu = () => cy.get('.settings-menu-toggle');
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title_2));
    });

})

