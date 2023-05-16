import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json'

let postData = {
    title_1: faker.name.fullName(),
    description_1: faker.name.fullName(),
    title_2: faker.name.fullName(),
    description_2: faker.name.fullName()
}

describe('Editar post ', () => {


    it('Se crea un post publicado - Actualiza title y descripcion - Valida que este en la lista con los valores actualizados', () => {
      
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
         cy.screenshot("editar_post_p1");
    
        //And I click Posts menu
        cy.get(".gh-nav-list-new > a[href='#/posts/']").click();
        cy.wait(2000)
        cy.screenshot("editar_post_p2");

        //And I click in New post 
        cy.get('.gh-nav-new-post').click();
        cy.wait(2000)
        cy.screenshot("editar_post_p3");

        //And I write in post title An I write in post description  
        cy.get('.gh-editor-title').type(postData.title_1);
        cy.get('.koenig-editor__editor').type(postData.description_1);
        cy.screenshot("editar_post_p4");
    
        //And I click in Publish And I wait for 2 seconds
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.screenshot("editar_post_p5");

        //And I click publish button And I wait for 6 seconds
        cy.get('.gh-publishmenu-button').click();
        cy.wait(6000);
        cy.screenshot("editar_post_p6");

        //And I click in Cancel button And I wait for 2 seconds
        cy.get('.gh-btn.gh-btn-outline.gh-btn-link').click();
        cy.wait(2000);
        cy.screenshot("editar_post_p7");
    
        //And I click in Posts And  I wait for 2 seconds
        cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
        cy.wait(2000);
        cy.screenshot("editar_post_p8");

        //And I click published posts menu And I wait for 5 seconds
        cy.get("a[href='#/posts/?type=published']").click();
        cy.wait(5000);
        cy.screenshot("editar_post_p9");

        //And I select the post with title "$$postData.title_1" And I wait for 2 seconds
        cy.get("h3.gh-content-entry-title").contains(postData.title_1).click()
        cy.wait(2000);
        cy.screenshot("editar_post_p10");
    
        //And I write in post title "$postData.title_2" And I Write in post text "$postData.description_2"
        cy.get('.gh-editor-title').clear().type(postData.title_2);
        cy.get('.koenig-editor__editor').clear().type(postData.description_2);

        //And I click in Publish And I wait for 2 seconds
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.screenshot("editar_post_p11");

        //And I click in Publish button And I wait for 6 seconds
        cy.get('.gh-publishmenu-button').click();
        cy.wait(6000);
        cy.screenshot("editar_post_p12");

        //And I click in Cancel button And I wait for 2 seconds
        cy.get('.gh-btn.gh-btn-outline.gh-btn-link').click();
        cy.wait(2000);
        cy.screenshot("editar_post_p13");
    
        //And I click in Posts
        cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
        cy.wait(2000);
        cy.screenshot("editar_post_p14");

        //Then I check Post with title "$$appData.titel_2" is in the list 
        cy.get("h3.gh-content-entry-title").contains(postData.title_2).should('exist');

        });

    })
  

  
