Feature: Eliminar tag

@user1 @web
Scenario: Se elimina un tag desde el inicio de sesión hasta la finalización de la eliminación
    Given I navigate to page "http://localhost:3002/ghost"
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
    And I click pruebaCreacion
    And I wait for 2 seconds
    And I click eliminartag
    And I wait for 2 seconds
    And I click confirmareliminaciontag
    And I wait for 2 seconds