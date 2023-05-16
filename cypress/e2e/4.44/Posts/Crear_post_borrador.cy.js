import { faker } from '@faker-js/faker';
import configJson from '../../../../config/config.json';
import loginPage from "../../../page-object/login";
import PostsPage from "../../../page-object/posts";

let postData = {
    title: faker.name.fullName(),
    description: faker.name.fullName()
}

const nameScreenshots = 'crear_post_borrador_p';

describe('Crear post borrador', () => {
    it('Se crea un post borrador - se valida que este en la lista', () => {
        
    let i = 0;
    //Given
    cy.visit(configJson.host4_44);
    loginPage.login(configJson.user, configJson.password);
    cy.screenshot(`${nameScreenshots}${i += 1}`);

    //When I click Posts menu
    
    PostsPage.goToAnchorButtonPost();
    cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click in New post 
    PostsPage.goToNewPost();
    cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I write in post title And I write in post description  
    PostsPage.typeTitleAndDescription(postData.title, postData.description);
    cy.screenshot(`${nameScreenshots}${i += 1}`);
    
    //And I click in Posts 
    PostsPage.goToListPostView();
    cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click draft posts menu
    PostsPage.goToDraftFilter();
    cy.screenshot(`${nameScreenshots}${i += 1}`);

    //Then I check Post with title "$$dataPost.titel" is in the list 
    PostsPage.elements.postTitleFieldList().contains(postData.title).should('exist');

    });

})
  
