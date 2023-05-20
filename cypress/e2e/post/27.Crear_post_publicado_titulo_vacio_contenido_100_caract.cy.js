import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PostsPage from "../../page-object/posts";

let postData = {
    title: "",
    description: faker.random.alpha(100)
}

const nameScreenshots = 'crear_post_publicado_p';

describe('Crear post publicado con el titulo vacio y el contenido digitado', () => {
    it('Se crea un post publicado sin titulo- se valida que el titulo quede (untitled) - lo elimina', () => {
      
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
        PostsPage.clearTitleAndTypeDescription(postData.description);
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
     
        //And I click in Publish button
        PostsPage.openPulishDropDown();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I click Schedule button 
        PostsPage.publishPost();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
        
        //And I click in Cancel button
        PostsPage.closeScheduleModal();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
    
        //And I click in Posts 
        PostsPage.goToListPostView();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I click published posts menu And I wait for 5 seconds
        PostsPage.goToPublishedFilter();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);

        //Then I check Post with title "$$dataPost.titel" is in the list 
        cy.get("h3.gh-content-entry-title").contains("(Untitled)").should('exist');

        
        /* --- Borra el post creado en la prueba para mantener limpia la aplicacion  ---*/

        //And I select the post with title "$$postData.title_1" 
        PostsPage.elements.postTitleFieldList().contains("(Untitled)").click({force:true});
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
    
        //And I delete the post    
        PostsPage.deletePost();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
           
        //And I click confirm delete post 
        PostsPage.deletePostModal();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);

        //Then I check Post with title "$$postData.text_1" is not in the list
        PostsPage.validateDeletedPost("(Untitled)");

        });

    })
  
