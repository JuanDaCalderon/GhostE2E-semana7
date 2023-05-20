Feature: Crear Page Schedule

@user1 @web
Scenario: Como admin creo una página y la agendo
  Given I navigate to page "<host>" "ghost/#/signin"
  And I wait for 1 seconds
  And I login with "<Usuario1>" "<Password1>"
  And I wait for 1 seconds
  When I click pages
  And I wait for 1 seconds
  And I click new page
  And I wait for 1 seconds
  And I create a page with "<page_title_schedule>" "descripcion de prueba pagina 2"
  And I wait for 1 seconds
  And I publish it schedule
  And I wait for 1 seconds
  And I get back to page list
  And I wait for 2 seconds
  And I click new page
  And I wait for 1 seconds
  And I create a page with "<page_title>" "descripcion de prueba pagina 2"
  And I wait for 1 seconds
  And I publish it now
  And I wait for 1 seconds
  And I get back to page list
  And I wait for 1 seconds
  And I click new page
  And I wait for 1 seconds
  And I create a page with "<page_title_draft>" "descripcion de prueba pagina 3"
  And I wait for 1 seconds
  And I get back to page list
  And I wait for 1 seconds
  And I click filter type
  And I wait for 1 seconds
  And I click Draft type
  And I wait for 1 seconds
  Then I check if Draft is first
  And I wait for 5 seconds