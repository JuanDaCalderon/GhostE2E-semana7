import configJson from '../../../config/config.json';

describe('revokar invitacion de usuario', () => {
    it('Se hace revokar invitacion de usuario', () => {

      //Given I navigate to page "http://localhost:2368/ghost"  
      cy.visit(configJson.host)
      cy.wait(2000)

      //And I enter email "<Usuario1>"
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)

      //And I enter password "<Password1>"
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)

      //And I click next
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p1");

      //And I click en Staff
      cy.get('a[href="#/staff/"][class="ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p2");

      //And I click create invitacion
      cy.get('button[class="gh-btn gh-btn-green"]').click()
      cy.wait(5000)
      cy.screenshot("revoke_invitacion_p3");

      //And I enter email "prueba@prueba.com"
      cy.get('input[name="email"]').type('prueba@prueba.com')
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p4");

      //And I click send invitation
      cy.get('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p5");

      //And I reload page
      cy.reload()
      cy.wait(2000)

      //And I click revoke invitation
      cy.get('a[href="#revoke"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p6");
    })
})