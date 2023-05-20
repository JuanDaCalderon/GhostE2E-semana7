Feature: Crear Page

@user1 @web
Scenario: Como admin creo una página
  Given I navigate to page "<host>" "ghost/#/signin"
  And I wait for 1 seconds
  And I login with "<Usuario1>" "<Password1>"
  And I wait for 1 seconds
  When I click pages
  And I click new page
  And I wait for 1 seconds
  And I create a page with "<page_title>" "descripcion de prueba pagina 1"
  And I wait for 1 seconds
  And I publish it now
  And I wait for 1 seconds
  Then I send a signal to user 2 containing "page created"


@user2 @web
Scenario: Como usuario externo compruebo que la página fue creada
  Given I wait for a signal containing "page created" for 30 seconds
  When I navigate to page "<host>" "<page_title>"
  And I wait for 1 seconds
  Then I check if the page was created with the name "<page_title>"
  And I wait for 5 seconds