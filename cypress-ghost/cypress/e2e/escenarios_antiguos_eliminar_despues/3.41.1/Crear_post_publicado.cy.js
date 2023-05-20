import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json'


let postData = {
    title: faker.name.fullName(),
    description: faker.name.fullName()
}

describe('Crear post publicado', () => {


    it('Se crea un post publicado - se valida que este en la lista', () => {
      
        //Given I navigate to page "http://localhost:2368/ghost"  
        cy.visit(configJson.host)
        cy.wait(5000)
      
        //When I enter email "<Usuario1>"
        cy.get('input[name="identification"').type(configJson.user)
      
        //And I enter password "<Password1>"
        cy.get('input[name="password"').type(configJson.password)
      
        //And I click next
        cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
        cy.wait(5000)
        cy.screenshot("crear_post_publicado_p1");
    
        //And I click Posts menu
        cy.get(".gh-nav-list-new > a[href='#/posts/']").click();
        cy.wait(2000)
        cy.screenshot("crear_post_publicado_p2");

        //And I click in New post 
        cy.get('.gh-nav-new-post').click();
        cy.wait(2000)
        cy.screenshot("crear_post_publicado_p3");

        //And I write in post title An I write in post description 
        cy.get('.gh-editor-title').type(postData.title);
        cy.get('.koenig-editor__editor').type(postData.description);
        cy.screenshot("crear_post_publicado_p4");
     
        //And I click in Publish button And I wait for 2 seconds
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.screenshot("crear_post_publicado_p5");

        //And I click Schedule button And I wait for 2 seconds
        cy.get('.gh-publishmenu-button').click();
        cy.wait(2000);
        cy.screenshot("crear_post_publicado_p6");

        //And I click in Cancel button And I wait for 2 seconds
        cy.get('.gh-btn.gh-btn-outline.gh-btn-link').click();
        cy.wait(6000);
        cy.screenshot("crear_post_publicado_p7");
    
        //And I click in Posts And  I wait for 2 seconds
        cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
        cy.wait(2000);
        cy.screenshot("crear_post_publicado_p8");

        //And I click published posts menu And I wait for 5 seconds
        cy.get("a[title='Published']").click();
        cy.wait(2000);
        cy.screenshot("crear_post_publicado_p9");

        //Then I check Post with title "$$dataPost.titel" is in the list 
        cy.get("h3.gh-content-entry-title").contains(postData.title).should('exist');

        });

    })
  
