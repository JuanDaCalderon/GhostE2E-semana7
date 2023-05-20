import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PostsPage from "../../page-object/posts";

let postData = {
    title: faker.name.fullName(),
    description: faker.random.alpha(100),
    excerpt: faker.random.alpha(300)
}

const nameScreenshots = '"crear_post_programado_p';

describe('Crear post programado con excerpt 300 caracteres', () => {

it('Se crea un post programado digitando excerpt con 300 caracteres (frontera) - se valida que este en la lista', () => {    
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

    //And I click in Publish button
    PostsPage.openPulishDropDown();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click Schedule it for later
    PostsPage.schedulePost();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click Schedule button 
    PostsPage.publishPost();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click in Cancel button
    PostsPage.closeScheduleModal();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);


      //And I open settings menu
      PostsPage.goToSettingsMenu

      //And I type excerpt field
      PostsPage.typeExcerpt(postData.excerpt);

    //And I click in Posts 
    PostsPage.goToListPostView();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click published posts menu 
    PostsPage.goToScheduledFilter();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //Then I check Post with title "$$dataPost.titel" is in the list 
    cy.get("h3.gh-content-entry-title").contains(postData.title).should('exist');

     /* --- Borra el post creado en la prueba para mantener limpia la aplicacion  ---*/

    //And I select the post with title "$$postData.title_1" 
    PostsPage.elements.postTitleFieldList().contains(postData.title).click({force:true});
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I delete the post    
    PostsPage.deletePost();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);
        
    //And I click confirm delete post 
    PostsPage.deletePostModal();
    //cy.screenshot(`${nameScreenshots}${i += 1}`);

    //Then I check Post with title "$$postData.text_1" is not in the list
    PostsPage.validateDeletedPost(postData.title);

    });
})