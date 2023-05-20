Feature: Activar / desactivar  privacidad general

@user1 @web
Scenario: Se inicia sesion y se va al menu general y se activa / desactiva la privacidad
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
    And I click checkbox
    And I wait for 2 seconds