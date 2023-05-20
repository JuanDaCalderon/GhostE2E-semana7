Feature: Asociar tag

@user1 @web
Scenario: Se asocia un tag desde el inicio de sesión hasta la finalización de la asociación

    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 2 seconds
    When I enter email "<Usuario1>"
    And I wait for 2 seconds
    And I enter password "<Password1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 5 seconds
    And I click tags
    And I wait for 2 seconds
    And I click newTag
    And I wait for 2 seconds
    When I enter tagname "<tagpruebaasociar>"
    And I wait for 2 seconds
    When I enter tagdescription "<tagdescripciónpruebaasociar>"
    And I wait for 2 seconds
    And I click savetag
    And I wait for 2 seconds
    And I click in New post
    And I wait for 2 seconds
    And I write in post title "<tagpruebaasociar>"
    And I Write in post text "<tagdescripciónpruebaasociar>"
    And I click in Publish
    And I wait for 2 seconds
    And I click in Publish button
    And I wait for 2 seconds
    And I click in Cancel button
    And I wait for 2 seconds
    And I click in Posts
    And I wait for 2 seconds
    And I click published posts menu
    And I wait for 5 seconds
    And I select the post with title "<tagpruebaasociar>"
    And I wait for 2 seconds
    And I click post-settings
    And I wait for 2 seconds
    And I click tag-list
    And I wait for 2 seconds
    And I click tag-element
    And I wait for 2 seconds
    And I click close-post-settings
    And I wait for 2 seconds
    And I click publish-after-tag
    And I wait for 2 seconds
    And I click confirm-publish-after-tag
    And I wait for 2 seconds
    And I click return-posts
    And I wait for 2 seconds
    And I click published posts menu
    And I wait for 2 seconds
    And I select the post with title "<tagpruebaasociar>"
    And I wait for 2 seconds
    And I click post-settings
    And I wait for 2 seconds
    And I click close-post-settings
    And I wait for 2 seconds
    And I click return-posts
    And I wait for 2 seconds
    And I click tags
    And I wait for 2 seconds
    Then I check tag name "<tagname1>"
    And I wait for 2 seconds




