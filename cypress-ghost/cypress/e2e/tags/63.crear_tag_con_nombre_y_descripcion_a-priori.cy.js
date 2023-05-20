import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import TagsTag from "../../page-object/tags";
import PrioriDataPool from "../../helpers/prioriData.js";

const nameScreenshots = 'tags/crear_tag/crear_tag_con_nombre_y_descripcion';

const tagData = {
    name: PrioriDataPool.getRandomFirstName(),
    description: PrioriDataPool.getRandomShortSentence()
}

describe('Escenarios tags', () => {
    it('Crear tag con nombre y descripción validas', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        TagsTag.goToTagButtonMain();

        TagsTag.goToNewTagButton();

        TagsTag.enterTagName(tagData.name);

        TagsTag.enterTagDescription(tagData.description);

        TagsTag.goToSaveTag();

        TagsTag.goToTagButtonTags();

        // Then
        cy.get("h3.gh-tag-list-name").contains(tagData.name).should('exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        // Clean the enviroment tested
        TagsTag.cleanRecentTag(cy.get("h3.gh-tag-list-name").contains(tagData.name));
    })
})