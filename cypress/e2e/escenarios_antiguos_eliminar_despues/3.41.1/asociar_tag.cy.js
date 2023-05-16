import configJson from '../../../config/config.json';
describe('Asociar tag', () => {
    it('Se asocia un tag desde el inicio de sesión hasta la finalización de la creación', () => {
      
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
      cy.screenshot("asociar_tag_p1")
      
      //And I click tags
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p2")
      
      //And I click newTag
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p3")
      
      //When I enter tagname "<tagpruebaasociar>"
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      
      //When I enter tagdescription "<tagdescripciónpruebaasociar>"
      cy.get('#tag-description').type('Se asocia un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      
      //And I click savetag
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p4")
      
      //And I click in New post
      cy.get('.gh-nav-new-post').click();
      cy.wait(2000)
      cy.screenshot("asociar_tag_p5")
      
      //And I write in post title "<tagpruebaasociar>"
      cy.get('.gh-editor-title').type('AAAAAAAAAA Tag prueba');
      //And I Write in post text "<tagdescripciónpruebaasociar>"
      cy.get('.koenig-editor__editor').type('Se asocia un tag de prueba para validar la funcionalidad');
      //And I click in Publish
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p6")
      
      //And I click in Publish button
      cy.get('.gh-publishmenu-button').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p7")
      
      //And I click in Publish button
      cy.get('.gh-btn.gh-btn-outline.gh-btn-link').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p8")
      
      //And I click in Posts
      cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p9")
      
      //And I click published posts menu
      cy.get("a[href='#/posts/?type=published']").click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p10")
      
      //And I select the post with title "<tagpruebaasociar>"
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p11")
      
      //And I click post-settings
      cy.get('button[class="post-settings"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p12")
      
      //And I click tag-list
      cy.get('#tag-input').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p13")
      
      //And I click tag-element
      cy.contains('li', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p14")
      
      //And I click close-post-settings
      cy.get('button[class="close settings-menu-header-action"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p15")
      
      //And I click publish-after-tag
      cy.get('div.gh-publishmenu-trigger').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p16")
      
      //And I click confirm-publish-after-tag
      cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p17")
      
      //And I click return-posts
      cy.get('a[class="blue link fw4 flex items-center ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p18")
      
      //And I click posts
      cy.get(".gh-nav-list-new > a[href='#/posts/']").click();
      cy.wait(2000)
      cy.screenshot("asociar_tag_p19")
      
      //And I click published posts menu
      cy.get("a[href='#/posts/?type=published']").click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p20")
      
      //And I select the post with title "<tagpruebaasociar>"
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p21")
      
      //And I click post-settings
      cy.get('button[class="post-settings"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p22")
      
      //And I click close-post-settings
      cy.get('button[class="close settings-menu-header-action"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p23")
      
      //And I click return-posts
      cy.get('a[class="blue link fw4 flex items-center ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p24")
      
      //And I click tags
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p25")
      
      //Then I check tag name "<tagname1>"
      cy.get("h3.gh-tag-list-name").contains("AAAAAAAAAA Tag prueba").should('exist');
    })
})
      
      