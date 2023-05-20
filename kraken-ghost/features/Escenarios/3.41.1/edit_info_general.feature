Feature: Editar informacion general

@user1 @web
Scenario: Se inicia sesion y se va al menu staff para invitar un usuario
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<Usuario1>"
    And I wait for 2 seconds
    And I enter password "<Password1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click General
    And I wait for 2 seconds
    And I click expand
    And I wait for 2 seconds
    And I enter title "<titulo_general>"
    And I wait for 2 seconds
    And I enter descripcion "<descripcion_general>"
    And I wait for 2 seconds
    And I click savegeneral
    And I wait for 2 seconds