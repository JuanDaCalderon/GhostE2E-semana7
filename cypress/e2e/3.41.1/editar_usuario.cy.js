import configJson from '../../../config/config.json';
describe('editar usuario', () => {
    it('Se hace editar al usuario', () => {
      //Given I navigate to page "http://localhost:2368/ghost"  
      cy.visit(configJson.host)
      cy.wait(2000)

      //When I enter email "<Usuario1>"
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)

      //And I enter password "<Password1>"
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)

      //And I click next
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p1");

      //And I click staff menu
      cy.get('a[href="#/staff/"][class="ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p2");

      //And I click in User pruebas
      cy.get('a[href="#/staff/pruebas/"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p3");

      //And I enter user name
      cy.get('input[id="user-name"]').clear().type('pruebas automatizadas 2',{force: true})
      cy.wait(2000)
      cy.screenshot("editar_usuario_p4");

      //And I click save
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p5");

      //And I click staff menu
      cy.get(".gh-canvas-title > a[href='#/staff/']").click();
      cy.wait(2000)
      cy.screenshot("editar_usuario_p6");
      
    })
})