import { faker } from '@faker-js/faker';
class LoginPage {
  elements = {
    emailInput: () => cy.get('input[name="identification"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button.login.gh-btn'),
    forgotBtn: () => cy.get('button.forgotten-link.gh-btn'),

    emailInputValidator: () => cy.get('form.gh-signin div.form-group:nth-child(1)'),
    passwordInputValidator: () => cy.get('form.gh-signin div.form-group:nth-child(2)'),
    errorTextValidator: () => cy.get('p.main-error'),
  }

  login(user, password) { // Correct login flow
    cy.wait(1000)
    this.elements.emailInput().type(user);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    cy.wait(1000)
  }

  loginFakeEmail(password) {
    cy.wait(1000)
    this.elements.emailInput().type(faker.internet.email());
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    cy.wait(1000)
  }

  loginInvalidPassword(user) {
    cy.wait(1000)
    this.elements.emailInput().type(user);
    this.elements.passwordInput().type(faker.internet.password());
    this.elements.loginBtn().click();
    cy.wait(1000)
  }

  validateErrorTextFeedback(text) {
    cy.wait(1000)
    this.elements.errorTextValidator().contains(text).should('exist');
    cy.wait(1000)
  }

  validateErrorInputFeedback(type, classname) {
    cy.wait(1000)
    switch (type) {
      case 'email':
        this.elements.emailInputValidator().should('have.class', classname);
        break;
      case 'password':
        this.elements.passwordInputValidator().should('have.class', classname);
        break;
    }
    cy.wait(1000)
  }

  validateHasLoggedIn() {
    cy.wait(1000)
    cy.url().should('include', '/site');
    cy.wait(1000)
  }

  emailInput(user){
    cy.wait(1000)
    this.elements.emailInput().type(user);
    cy.wait(1000)
  }

  passwordInput(password){
    cy.wait(1000)
    this.elements.passwordInput().type(password);
    cy.wait(1000)
  }

  loginButton(){
    cy.wait(1000)
    this.elements.loginBtn().click();
    cy.wait(1000)
  }

  forgotButton(){
    cy.wait(1000)
    this.elements.forgotBtn().click();
    cy.wait(1000)
  }
}


module.exports = new LoginPage();