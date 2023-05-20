import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PostsPage from "../../page-object/posts";

let postData = {
    title_1: faker.name.fullName(),
    description_1: faker.random.alphaNumeric(100),
    title_2: faker.name.fullName(),
    description_2: faker.random.alphaNumeric(100),
}

const nameScreenshots = 'editar_post_p';

describe('Editar post seleccionado feature ', () => {
    it('Se crea un post publicado - Lo actualiza seleccionando feature  - Valida que este en la lista de posts feature ', () => {
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
        PostsPage.typeTitleAndDescription(postData.title_1, postData.description_1);
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

        
        //And I select the post with title "$$postData.title_1" 
        PostsPage.elements.postTitleFieldList().contains(postData.title_1).click({force:true});

        //And I write in post title "$postData.title_2" And I Write in post text "$postData.description_2"
        PostsPage.typeTitleAndDescription(postData.title_2, postData.description_2);
        //cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I go to settings menu
        PostsPage.goToSettingsMenu();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
        
        //And I click feature checkbox
        PostsPage.clickFeatureCheckbox ();

        //And I close settings window
        PostsPage.clickCloseSettingsButton();
      
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


        //And I confirm exit new post page
        //PostsPage.confirmExitNewPostPage();

        //And I click in the featured post filter
        PostsPage.goToFeaturedFilter();

        //Then I check Post with title "$$appData.titl2_2" is in the list 
        PostsPage.validatePostinList(postData.title_2);


        /* --- Borra el post creado en la prueba para mantener limpia la aplicacion  ---*/

        //And I select the post with title "$$postData.title_1" 
        PostsPage.elements.postTitleFieldList().contains(postData.title_2).click({force:true});
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
    
        //And I delete the post    
        PostsPage.deletePost();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);
           
        //And I click confirm delete post 
        PostsPage.deletePostModal();
        //cy.screenshot(`${nameScreenshots}${i += 1}`);

        //Then I check Post with title "$$postData.text_1" is not in the list
        PostsPage.validateDeletedPost(postData.title_2);

        });

    })
  

  
