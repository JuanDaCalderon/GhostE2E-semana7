import configJson from '../../../config/config.json';
describe('edit info general', () => {
    it('Editar informacion titulo y descripcion de la pagina ', () => {

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
      cy.screenshot("editar_info_general_p1");

      //And I click settings general
      cy.get('a[href="#/settings/general/"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p2");

      //And I click Expand 
      cy.get('button[data-ember-action-74="74"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p3");

      //And I enter name user
      //cy.get('button[class="form-group ember-view"]').clear().type('pruebas automatizadas 3',{force: true})
      cy.contains('The name of your site').parent().find('input').clear().type('pruebas automatizadas 3',{force: true})
      cy.wait(2000)

      //And I entre description
      //cy.get('button[class="description-container form-group ember-view"]').clear().type('descripicio de pruebas automatizadas',{force: true})
      cy.contains('Used in your theme, meta data and search results').parent().find('input').clear().type('descripción de pruebas automatizadas',{force: true})
      cy.wait(2000)
      cy.screenshot("editar_info_general_p4");

      //And I click Save settings
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p5");

      //And I click Expand 
      cy.get('button[data-ember-action-74="74"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p6");
    })
})