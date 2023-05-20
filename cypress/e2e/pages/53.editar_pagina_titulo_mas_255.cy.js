import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import ApiDataPool from '../../helpers/apiData';

const nameScreenshots = 'pages/page_edit_titulo_mas_255/page_edit_titulo_mas_255_';

describe('Escenarios page', () => {
    it('Página, editar el titulo de una página con un titulo de mas de 255 caracteres', async () => {
        const pageData = {
            title: await ApiDataPool.getRandomShortSentence(),
            titleToEdit: await ApiDataPool.getRandomLongSentence(),
            description: await ApiDataPool.getRandomShortSentence()
        }
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

        PagesPage.typeTitle(pageData.titleToEdit);
        PagesPage.publishPage();

        // Then
        cy.get("div.gh-alert-content").contains('Title cannot be longer than 255 characters').should('exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        PagesPage.goToAnchorButtonPage();
        PagesPage.clickOnRedModalButton();
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title));

    });
})

