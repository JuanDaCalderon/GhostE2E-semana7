Feature: Invitar usuario

@user1 @web
Scenario: Se inicia sesion y se va al menu staff para invitar un usuario
    Given I navigate to page "http://localhost:3002/ghost"
    And I wait for 5 seconds
    When I enter email "<Usuario1>"
    And I wait for 2 seconds
    And I enter password "<Password1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click staff
    And I wait for 2 seconds
    And I click invite
    And I wait for 2 seconds
    When I enter mailinvita "<invitemail>"
    And I wait for 2 seconds
    When I select role "<role>"
    And I wait for 2 seconds
    And I click invitenow
    And I wait for 5 seconds