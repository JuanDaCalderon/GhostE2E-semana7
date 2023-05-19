import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import PostsPage from "../../page-object/posts";

let postData = {
    title: faker.random.alpha(256),
    description: faker.random.alpha(50)
}

const nameScreenshots = 'crear_post_publicado_p';

describe('Crear post publicado', () => {
    it('Se crea un post publicado - se valida que este en la lista', () => {
      
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
     
        cy.get(".gh-publishmenu").should('not.exist');

        });

    })
  
