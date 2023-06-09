import { faker } from '@faker-js/faker';
import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import Usuario from "../../page-object/usuario";

let postData = {
  name: faker.random.alpha(500),
  description: faker.random.alpha(100),
  excerpt: faker.random.alpha(299)
}


describe('editar usuario', () => {
    it('Se hace editar al usuario', () => {
      //Given I navigate to page "http://localhost:2368/ghost"  
      cy.visit(configJson.host)
      cy.wait(2000)

      // When I loguin
      loginPage.login(configJson.user, configJson.password);

      //And I click staff menu
      cy.get('a[href="#/staff/"][class="ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p2");

      //And I click in User pruebas
      //cy.get('a[href="#/staff/pruebas/"]').click()
      cy.contains('Owner').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p3");

      //And I enter user name
      cy.get('input[id="user-name"]').clear().type(postData.name,{force: true})
      cy.wait(2000)
      cy.screenshot("editar_usuario_p4");

      //And I click save
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p5");

      // Name is too long
      //then
      Usuario.validateErrorTextFeedback('Name is too long');
      
      
    })
})