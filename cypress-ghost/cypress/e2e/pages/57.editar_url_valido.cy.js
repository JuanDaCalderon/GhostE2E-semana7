import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PagesPage from "../../page-object/pages";
import ApiDataPool from '../../helpers/apiData';

const nameScreenshots = 'pages/page_url/page_url_';

describe('Escenarios page', () => {
    it('Página, editar la URL de la página con un texto valido', async () => {
        // Given
        const pageData = {
            title: await ApiDataPool.getRandomShortSentence(),
            description: await ApiDataPool.getRandomLongSentence(),
            url: await ApiDataPool.getRandomWord()
        }
        let i = 0
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

        PagesPage.changeUrlTo(pageData.url);

        PagesPage.publishPage();

        PagesPage.goToAnchorButtonPage();

        // Then
        cy.get("h3.gh-content-entry-title").contains(pageData.title).should('exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        PagesPage.cleanRecentPage(cy.get("h3.gh-content-entry-title").contains(pageData.title));
    });
})

