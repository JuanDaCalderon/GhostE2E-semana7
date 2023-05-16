import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

describe('revokar invitacion de usuario', () => {
    it('Se hace revokar invitacion de usuario', () => {

      //Given I navigate to page "http://localhost:3002/ghost"  
      cy.visit(configJson.host4_44)
      cy.wait(2000)

      
      //When I enter email "<Usuario1>"
      //And I enter password "<Password1>"
      //And I click next
      loginPage.login(configJson.user, configJson.password);
      cy.wait(2000)

      //And I click en Member menu
      cy.get('li a[href="#/members/"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p2");

      //And I click create invitacion
      cy.get('a.gh-btn-primary[href="#/members/new/"]').click()
      cy.wait(5000)
      cy.screenshot("revoke_invitacion_p3");

      //And I enter email "prueba@prueba.com"
      cy.get('input[name="name"]').type('pruebaName',{force: true})
      cy.wait(2000)
      cy.get('input[name="email"]').type('prueba@prueba.com')
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p4");

      //And I click send invitation
      //cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
      cy.get('button.gh-btn-primary:contains("Save")').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p5");

      //And I reload page
      cy.reload()
      cy.wait(2000)

      //And I click revoke invitation
      cy.get('button[class="gh-btn gh-btn-icon icon-only gh-btn-action-icon closed ember-view"]').click()
      cy.wait(2000)
      cy.get('button[class="mr2"] span[class="red"]').click()
      cy.wait(2000)
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p6");
    })
})