Feature: Crear un post

@user1 @web
Scenario: Se crea un post - se publica - se valida que se encuentre en la lista de publicados
    Given I navigate to page "<host4_44>" "ghost/#/signin"
    And I wait for 2 seconds
    When I enter email "<Usuario1>"
    And I enter password "<Password1>"
    And I click next
    And I wait for 5 seconds
    
    And I click in New post
    And I wait for 2 seconds
    And I write in post title "$name_1"
    And I Write in post text "$string_2"
    And I wait for 5 seconds

    And I click in Posts
    And I wait for 2 seconds

    And I click draft posts menu
    And I wait for 5 seconds

    Then I check Post with title "$$name_1" is in the list 