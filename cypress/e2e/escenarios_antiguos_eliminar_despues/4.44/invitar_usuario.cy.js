import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

describe('invitar usuario', () => {
    it('Se hace invitacion a un usuario', () => {

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
      cy.screenshot("invitar_usuario_p2");

      //And I click in invite people
      cy.get('a.gh-btn-primary[href="#/members/new/"]').click()
      //cy.get('button[class="ember-view gh-btn gh-btn-primary"]').click()
      cy.wait(5000)
      cy.screenshot("invitar_usuario_p3");

      //And I enter email invitation
      cy.get('input[name="name"]').type('pruebaName',{force: true})
      cy.wait(2000)
      cy.get('input[name="email"]').type('prueba@prueba.com')
      cy.wait(2000)
      cy.screenshot("invitar_usuario_p4");

      //And I click send invitation now
      cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("invitar_usuario_p5");

      //And I reload pages
      cy.reload()
      cy.wait(2000)
      cy.screenshot("invitar_usuario_p6");
    })
})