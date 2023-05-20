import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

describe('editar usuario', () => {
    it('Se hace editar al usuario', () => {

      //Given I navigate to page "http://localhost:3002/ghost"  
      cy.visit(configJson.host4_44)
      cy.wait(2000)

      
      //When I enter email "<Usuario1>"
      //And I enter password "<Password1>"
      //And I click next
      loginPage.login(configJson.user, configJson.password);
      cy.wait(2000)

      //And I click members menu
      cy.get('li a[href="#/members/"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p2");

      //And I click in User pruebas
      cy.get('a[id="ember79"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p3");

      //And I enter user name
      cy.get('input[id="member-name"]').clear().type('pruebas automatizadas 2',{force: true})
      cy.get('input[id="member-email"]').clear().type('pruebas2@pruebas.com',{force: true})
      cy.wait(2000)
      cy.screenshot("editar_usuario_p4");

      //And I click save
      cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p5");

      //And I click staff menu
      cy.get('li a[href="#/members/"]').click();
      cy.wait(2000)
      cy.screenshot("editar_usuario_p6");
    })
})