Feature: Editar informacion del usuario

@user1 @web
    Scenario: se ingresa y se edita la informacion del usuario
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "<Usuario1>"
    And I wait for 2 seconds
    And I enter password "<Password1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click staff
    And I wait for 2 seconds
    And I click usuario
    And I wait for 2 seconds
    And I enter fullname "<fullname>"
    And I wait for 2 seconds
    And I click savename
    And I wait for 2 seconds
    And I click staff
    And I wait for 2 seconds
    Then I check Name with fullname "<fullname>" is in the list