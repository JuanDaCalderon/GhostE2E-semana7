import { faker } from '@faker-js/faker';
import configJson from '../../../../config/config.json';
import loginPage from "../../../page-object/login";
import PostsPage from "../../../page-object/posts";

let postData = {
    title_1: faker.name.fullName(),
    description_1: faker.name.fullName(),
    title_2: faker.name.fullName(),
    description_2: faker.name.fullName()
}

const nameScreenshots = 'editar_post_p';

describe('Editar post ', () => {
    it('Se crea un post publicado - Actualiza title y descripcion - Valida que este en la lista con los valores actualizados', () => {
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
        PostsPage.typeTitleAndDescription(postData.title_1, postData.description_1);
        cy.screenshot(`${nameScreenshots}${i += 1}`);
     
        //And I click in Publish button
        PostsPage.openPulishDropDown();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I click Schedule button 
        PostsPage.publishPost();
        cy.screenshot(`${nameScreenshots}${i += 1}`);
        
        //And I click in publish button 
        PostsPage.publishPostModal();
        cy.screenshot(`${nameScreenshots}${i += 1}`);
    
        //And I click in Posts 
        PostsPage.goToListPostView();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I click published posts menu 
        PostsPage.goToPublishedFilter();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I select the post with title "$$postData.title_1" 
        PostsPage.elements.postTitleFieldList().contains(postData.title_1).click();

        //And I write in post title "$postData.title_2" And I Write in post text "$postData.description_2"
        PostsPage.typeTitleAndDescription(postData.title_2, postData.description_2);
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I click in Publish button
        PostsPage.openPulishDropDown();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        //And I click Schedule button 
        PostsPage.publishPost();
        cy.screenshot(`${nameScreenshots}${i += 1}`);
        
        //And I click in publish button 
        PostsPage.closeScheduleModal();
        cy.screenshot(`${nameScreenshots}${i += 1}`);
    
        //And I click in Posts 
        PostsPage.goToListPostView();
        cy.screenshot(`${nameScreenshots}${i += 1}`);

        //Then I check Post with title "$$appData.titl2_2" is in the list 
        cy.get("h3.gh-content-entry-title").contains(postData.title_2).should('exist');

        });

    })
  

  
