import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import TagsTag from "../../page-object/tags";
import { faker } from '@faker-js/faker';

const nameScreenshots = 'tags/crear_tag/crear_tag_descripcion_charespecial_y_numero';

const chars = ['@', '#', '$', '%', '&', '!'];
const specialChar = chars[Math.floor(Math.random() * chars.length)];
const tagData = {
    name: faker.random.alphaNumeric(5),
    description: faker.random.alphaNumeric(10) + specialChar + specialChar
};

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