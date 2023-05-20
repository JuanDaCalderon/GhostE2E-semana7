Feature: Crear tag sin nombre y con descripción

@user1 @web
Scenario: Se crea un tag desde el inicio de sesión hasta la finalización de la creación
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<Usuario1>"
    And I wait for 2 seconds
    And I enter password "<Password1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click tags
    And I wait for 2 seconds
    And I click newTag
    And I wait for 2 seconds
    When I enter tagdescription "$string_2"
    And I wait for 2 seconds
    And I click savetag
    And I wait for 2 seconds
    And I click tags
    And I wait for 2 seconds
    And I click leavetag
    And I wait for 2 seconds
    