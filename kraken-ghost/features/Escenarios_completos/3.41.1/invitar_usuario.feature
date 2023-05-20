Feature: Invitar usuario

@user1 @web
Scenario: Se inicia sesion y se va al menu staff para invitar un usuario
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
    And I click invite
    And I wait for 2 seconds
    When I enter mailinvita "<invitemail>"
    And I wait for 2 seconds
    When I select role "<role>"
    And I wait for 2 seconds
    And I click invitenow
    And I wait for 5 seconds
    
    
    
    #And I click tags
    #And I wait for 2 seconds
    #And I click pruebaCreacion
    #And I wait for 2 seconds
    #When I enter tagname "<tagnameeditado1>"
    #And I wait for 2 seconds
    #When I enter tagdescription "<tagdescriptioneditado1>"
    #And I wait for 2 seconds
    #And I click savetag
    #And I wait for 2 seconds
    #And I click tags
    #And I wait for 2 seconds
    #And I click pruebaCreacion
    #And I wait for 2 seconds
    #And I click eliminartag
    #And I wait for 2 seconds
    #And I click confirmareliminaciontag
    #And I wait for 2 seconds


    #And I click pagina
    #And I wait for 2 seconds
    #And I click nuevapagina
    #And I wait for 2 seconds
    #When I enter titulopagina "<titulopagina1>"
    #And I wait for 2 seconds
