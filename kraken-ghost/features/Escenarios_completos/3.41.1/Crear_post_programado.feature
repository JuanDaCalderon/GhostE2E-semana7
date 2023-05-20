Feature: Crear un post programado

@user1 @web
Scenario: Se crea un post programado y se valida que se encuentre en la lista
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 2 seconds
    When I enter email "<Usuario1>"
    And I enter password "<Password1>"
    And I click next
    And I wait for 5 seconds
    
    And I click in New post
    And I wait for 2 seconds
    And I write in post title "$name_1"
    And I Write in post text "$string_2"
    And I click in Publish
    And I wait for 2 seconds

    And I click Schedule it for later
    And I wait for 2 seconds
    And I click Schedule button
    And I wait for 6 seconds

    And I click in Cancel button
    And I wait for 2 seconds
    And I click in Posts

    And I click scheduled posts menu
    And I wait for 5 seconds

    Then I check Post with title "$$name_1" is in the list 

