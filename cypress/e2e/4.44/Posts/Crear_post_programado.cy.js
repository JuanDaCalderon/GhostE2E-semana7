import { faker } from '@faker-js/faker';
import configJson from '../../../../config/config.json';
import loginPage from "../../../page-object/login";
import PostsPage from "../../../page-object/posts";

let postData = {
    title: faker.name.fullName(),
    description: faker.name.fullName()
}

const nameScreenshots = '"crear_post_programado_p';

describe('Crear post programado', () => {

it('Se crea un post programado - se valida que este en la lista', () => {    
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

    //And I click in Publish button
    PostsPage.openPulishDropDown();
    cy.screenshot(`${nameScreenshots}${i += 1}`);

    //And I click Schedule it for later
    PostsPage.schedulePost();
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
     PostsPage.goToScheduledFilter();
     cy.screenshot(`${nameScreenshots}${i += 1}`);

     //Then I check Post with title "$$dataPost.titel" is in the list 
     cy.get("h3.gh-content-entry-title").contains(postData.title).should('exist');


    });
})