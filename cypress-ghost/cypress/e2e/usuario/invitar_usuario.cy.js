import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

let postData = {
  mail: faker.internet.email()
}

describe('invitar usuario', () => {
    it('Se hace invitacion a un usuario', () => {
      //Given I navigate to page "http://localhost:2368/ghost"  
      cy.visit(configJson.host)
      cy.wait(2000)
      // When I loguin
      loginPage.login(configJson.user, configJson.password);
      

      //And I click staff menu
      cy.get('a[href="#/staff/"][class="ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("invitar_usuario_p2");

      //And I click in invite people
      cy.get('button[class="gh-btn gh-btn-green"]').click()
      cy.wait(5000)
      cy.screenshot("invitar_usuario_p3");

      //And I enter email invitation
      cy.get('input[name="email"]').type(postData.mail)
      cy.wait(2000)
      cy.screenshot("invitar_usuario_p4");

      //And I click send invitation now
      cy.get('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("invitar_usuario_p5");

      //And I reload pages
      cy.reload()
      cy.wait(2000)
      cy.screenshot("invitar_usuario_p6");
    })
})