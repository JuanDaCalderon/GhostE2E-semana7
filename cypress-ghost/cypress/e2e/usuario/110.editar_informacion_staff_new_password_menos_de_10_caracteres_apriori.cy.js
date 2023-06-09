import PrioriDataPool from "../../helpers/prioriData.js";
import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";
import Usuario from "../../page-object/usuario";

let postData = {
  password: PrioriDataPool.getRandomPassword9(),
  password_new: PrioriDataPool.getRandomPassword9(),
  password_verification: PrioriDataPool.getRandomPassword9()
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

      //And I enter password
      cy.get('input[id="user-password-old"]').clear().type(configJson.password,{force: true})
      cy.wait(2000)
      cy.screenshot("editar_usuario_p4");

      //And I enter password new
      cy.get('input[id="user-password-new"]').clear().type(postData.password_new,{force: true})
      cy.wait(2000)
      cy.screenshot("editar_usuario_p4");

      //And I enter password verification
      cy.get('input[id="user-new-password-verification"]').clear().type(postData.password_new,{force: true})
      cy.wait(2000)
      cy.screenshot("editar_usuario_p4");

      //And I change password
      cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p5");
      
      //then
      Usuario.validateErrorTextFeedback('Password must be at least 10 characters long');
      
      
    })
})