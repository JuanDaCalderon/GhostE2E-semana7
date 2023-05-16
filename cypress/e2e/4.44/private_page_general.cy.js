import configJson from '../../../config/config.json';
import loginPage from "../../page-object/login";

describe('edit info general', () => {
    it('Editar informacion titulo y descripcion de la pagina ', () => {

      //Given I navigate to page "http://localhost:3002/ghost"  
      cy.visit(configJson.host4_44)
      cy.wait(2000)
      
      
      //When I enter email "<Usuario1>"
      //And I enter password "<Password1>"
      //And I click next
      loginPage.login(configJson.user, configJson.password);
      cy.wait(2000)

      //And I click Sttings general
      cy.get('a[href="#/settings/"]').click()
      cy.wait(2000)
      cy.get('a[href="#/settings/general/"]').click()
      cy.wait(2000)
      cy.screenshot("private_page_general_p2");

      //And I click privada o publica
      cy.get('label[class="switch"]').click()
      cy.wait(2000)
      cy.screenshot("private_page_general_p3");
    })
})