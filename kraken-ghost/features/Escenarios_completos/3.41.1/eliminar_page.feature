Feature: Eliminar Page

@user1 @web
Scenario: Como admin elimino una página
  Given I navigate to page "<host>" "ghost/#/signin"
  And I wait for 1 seconds
  And I login with "<Usuario1>" "<Password1>"
  And I wait for 1 seconds
  When I click pages
  And I click new page
  And I create a page with "<page_title_delete>" "descripcion de prueba pagina 1"
  And I publish it now
  And I wait for 1 seconds
  And I send a signal to user 2 containing "page created"
  And I wait for 1 seconds
  And I wait for a signal containing "page created checked" for 30 seconds
  And I wait for 1 seconds
  And I reload
  And I wait for 2 seconds
  And I click page settings
  And I click delete page
  And I wait for 2 seconds
  And I click delete page modal
  And I wait for 2 seconds
  Then I send a signal to user 2 containing "page deleted"


@user2 @web
Scenario: Como usuario externo compruebo que la página fue eliminada
  Given I wait for a signal containing "page created" for 30 seconds
  When I navigate to page "<host>" "<page_title_delete>"
  And I wait for 1 seconds
  And I check if the page was created with the name "<page_title_delete>"
  And I wait for 1 seconds
  And I send a signal to user 1 containing "page created checked"
  And I wait for 1 seconds
  Then I wait for a signal containing "page deleted" for 30 seconds
  And I wait for 1 seconds
  And I reload
  And I wait for 1 seconds
  And I check if the page was deleted
  And I wait for 3 seconds