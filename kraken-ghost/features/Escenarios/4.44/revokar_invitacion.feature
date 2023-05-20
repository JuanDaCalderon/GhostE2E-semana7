Feature: Invitar usuario

@user1 @web
Scenario: Se inicia sesion, se invita un usuario y luego revoka su invitacion
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
    When I enter mailinvita "<name>" "<invitemail>"
    And I wait for 2 seconds
    When I select role "<role>"
    And I wait for 2 seconds
    And I click invitenow
    And I wait for 5 seconds
    And I click staff
    And I wait for 2 seconds
    And I reload
    And I wait for 2 seconds
    And I click revoke
    And I wait for 2 seconds