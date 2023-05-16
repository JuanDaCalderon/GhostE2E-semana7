import configJson from '../../../config/config.json';
describe('Eliminar tag', () => {
    it('Se elimina un tag desde el inicio de sesión hasta la finalización de la eliminación', () => {
      
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
      cy.screenshot("eliminar_tag_p1");
      
      //And I click tags
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p2");
      
      //And I click newTag
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p3");
      
      //When I enter tagname "<tagname1>"
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p4");
      
      //When I enter tagdescription "<tagdescription1>"
      cy.get('#tag-description').type('Se elimina un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p5");
      
      //And I click savetag
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p6");
      
      //And I click tags
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p7");
      
      //Then I check tag name "<tagname1>"
      cy.get("h3.gh-tag-list-name").contains("AAAAAAAAAA Tag prueba").should('exist');
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p8");
      
      //And I click pruebaCreacion
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p9");
      
      //And I click eliminartag
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click()
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p10");
      
      //And I click confirmareliminaciontag
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("eliminar_tag_p11");
    })
  })