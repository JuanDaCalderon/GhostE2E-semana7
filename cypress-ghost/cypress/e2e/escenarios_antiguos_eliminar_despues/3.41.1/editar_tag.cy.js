import configJson from '../../../config/config.json';
describe('Editar tag', () => {
  it('Se crea tag desde inicio de sesión hasta fin de la creación', () => {
    
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
    cy.screenshot("editar_tag_p1");
    
    //And I click tags
    cy.get('a[href="#/tags/"]').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p2");
    
    //And I click newTag
    cy.get('a[href="#/tags/new/"]:first').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p3");
    
    //When I enter tagname "<tagname1>"
    cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
    cy.wait(2000)
    cy.screenshot("editar_tag_p4");
    
    //When I enter tagdescription "<tagdescription1>"
    cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
    cy.wait(2000)
    cy.screenshot("editar_tag_p5");
    
    //And I click savetag
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p6");
    
    //And I click tags
    cy.get('li:has(a[href="#/tags/"])').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p7");
    
    //And I click pruebaCreacion
    cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p8");
    
    //When I enter tagname "<tagnameeditado1>"
    cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
    cy.wait(2000)
    cy.screenshot("editar_tag_p9");
    
    //When I enter tagdescription "<tagdescriptioneditado1>"
    cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
    cy.wait(2000)
    cy.screenshot("editar_tag_p10");
    
    //And I click savetag
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p11");
    
    //And I click tags
    cy.get('li:has(a[href="#/tags/"])').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p12");
    
    //Then I check tag description "<tagname1>"
    cy.get("p.gh-tag-list-description").contains("edita").should('exist');
  })
})