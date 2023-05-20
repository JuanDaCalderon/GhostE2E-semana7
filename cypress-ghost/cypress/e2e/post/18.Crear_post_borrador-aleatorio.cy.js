import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PostsPage, { typeExcerpt } from "../../page-object/posts";

let postData = {
    title: faker.name.fullName(),
    description: faker.random.alpha(100),
    excerpt: faker.random.alpha(299)
}

const nameScreenshots = 'crear_post_borrador_p';

describe('Crear post borrador', () => {
    it('Se crea un post borrador - se valida que este en la lista - lo elimina', () => {
        
    let i = 0;
    //Given
    cy.visit(configJson.host);
    loginPage.login(configJson.user, configJson.password);
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //When I click Posts menu
    
    PostsPage.goToAnchorButtonPost();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click in New post 
    PostsPage.goToNewPost();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I write in post title And I write in post description  
    PostsPage.typeTitleAndDescription(postData.title, postData.description);
    //cy.screenshot(`${nameScreenshots}${i += 1}`);
    
    //And I click in Posts 
    PostsPage.goToListPostView();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click draft posts menu
    PostsPage.goToDraftFilter();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //Then I check Post with title "$$dataPost.titel" is in the list 
    PostsPage.elements.postTitleFieldList().contains(postData.title).should('exist');


    /* --- Borra el post creado en la prueba para mantener limpia la aplicacion  ---*/

    //When I select the post with title "$$postData.text_1" And I wait for 2 seconds
    cy.get("h3.gh-content-entry-title").contains(postData.title).click({force:true})
    //cy.screenshot("eliminar_post_p10");
            
    //And I delete the post And I wait for 5 seconds   
    cy.get("button.post-settings").click();
    cy.get("button.settings-menu-delete-button").click();
    cy.wait(1000);
    //cy.screenshot("eliminar_post_p11");
        
    //And I click confirm delete post And I wait for 2 seconds
    cy.get(".modal-content > .modal-footer > .gh-btn-red").click();
    cy.wait(1000);
    //cy.screenshot("eliminar_post_p12");

    //Then I check Post with title "$$postData.text_1" is not in the list
    PostsPage.validateDeletedPost(postData.title);

    
    });

})
  
