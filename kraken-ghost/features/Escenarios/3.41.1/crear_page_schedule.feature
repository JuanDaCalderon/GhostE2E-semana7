Feature: Crear Page Schedule

@user1 @web
Scenario: Como admin creo una página y la agendo
  Given I navigate to page "<host>" "ghost/#/signin"
  And I wait for 1 seconds
  And I login with "<Usuario1>" "<Password1>"
  And I wait for 1 seconds
  When I click pages
  And I click new page
  And I wait for 1 seconds
  And I create a page with "<page_title>" "descripcion de prueba pagina 1"
  And I wait for 1 seconds
  And I publish it schedule
  And I wait for 1 seconds
  And I reload
  Then I wait for 1 seconds
  And I check if it is schedule
  And I wait for 1 seconds