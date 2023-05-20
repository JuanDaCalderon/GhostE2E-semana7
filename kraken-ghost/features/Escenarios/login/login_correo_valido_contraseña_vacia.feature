Feature: Login correo válido y contraseña vacía

@user1 @web
Scenario: Se crea un tag desde el inicio de sesión hasta la finalización de la creación
    Given I navigate to page "http://localhost:2368/ghost"
    And I wait for 5 seconds
    When I enter email "$email_1"
    And I wait for 2 seconds
    And I click next