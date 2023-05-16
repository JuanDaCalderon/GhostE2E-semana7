import configJson from '../../../config/config.json';
describe('Ver internal tags', () => {
    it('Se revisar la pestaña internal tags desde el inicio de sesión hasta la finalización de la creación', () => {
      
      //Given I navigate to page "http://localhost:3002/ghost"
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
      cy.screenshot("ver_internal_tags_p1");
      
      //And I click tags
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.screenshot("ver_internal_tags_p2");
      
      //And I click newTag
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.wait(2000)
      cy.screenshot("ver_internal_tags_p3");
      
      //When I enter tagname "<tagname1>"
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      
      //When I enter tagdescription "<tagdescription1>"
      cy.get('#tag-description').type('Se crea un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.screenshot("ver_internal_tags_p4");
      
      //And I click savetag
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("ver_internal_tags_p5");
      
      //And I click tags
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.wait(2000)
      cy.screenshot("ver_internal_tags_p6");
      
      //Then I check tag name "<tagname1>"
      cy.get("h3.gh-tag-list-name").contains("AAAAAAAAAA Tag prueba").should('exist');
      
      //And I click internal-tags
      cy.get('section.view-actions div.gh-contentfilter button:last-child').click()
      cy.wait(2000)
      cy.screenshot("ver_internal_tags_p7");
    })
})