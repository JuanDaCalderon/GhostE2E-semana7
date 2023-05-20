import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import TagsTag from "../../page-object/tags";
import PrioriDataPool from "../../helpers/prioriData.js";

const nameScreenshots = 'tags/crear_tag/crear_tag_sin_nombre_y_con_descripcion';

const tagData = {
    name: PrioriDataPool.getRandomtagName20(),
    description: PrioriDataPool.getRandomtagDescription80()
}

describe('Escenarios tags', () => {
    it('Crear tag sin nombre y con descripción', () => {
        let i = 0

        // Given
        cy.visit(configJson.host);

        // When
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });

        TagsTag.goToTagButtonMain();

        TagsTag.goToNewTagButton();

        TagsTag.enterTagDescription(tagData.description);

        TagsTag.goToSaveTag();

        TagsTag.goToTagButtonTags();

        TagsTag.goToleaveTags();

        // Then
        cy.get("h3.gh-tag-list-name").should('not.exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    })
})