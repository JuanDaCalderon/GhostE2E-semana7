Feature: Crear tag

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
    When I enter tagname "<tagname1>"
    And I wait for 2 seconds
    When I enter tagdescription "<tagdescription1>"
    And I wait for 2 seconds
    And I click savetag
    And I wait for 2 seconds
    And I click tags
    And I wait for 2 seconds
    Then I check tag name "<tagname1>"
    And I wait for 2 seconds

