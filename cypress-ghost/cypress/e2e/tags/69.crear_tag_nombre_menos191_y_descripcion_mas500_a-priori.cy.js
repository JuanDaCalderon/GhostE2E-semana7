import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import TagsTag from "../../page-object/tags";
import { faker } from '@faker-js/faker';

const nameScreenshots = 'tags/crear_tag/crear_tag_nombre_menos191_descripcion_mas500';

const tagData = {
    name: faker.random.alpha(190),
    description: faker.random.alpha(501)
}

describe('Escenarios tags', () => {
    it('Crear tag con nombre de menos de 191 caracteres y descripción con más de 500 caracteres', () => {
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

        TagsTag.goToleaveTags();

        // Then
        cy.get("h3.gh-tag-list-name").should('not.exist');
        cy.screenshot(`${nameScreenshots}${i += 1}`, { overwrite: true });
    })
})