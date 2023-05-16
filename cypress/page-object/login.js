import { faker } from '@faker-js/faker';
class LoginPage {
  elements = {
    emailInput: () => cy.get('input[name="identification"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button.login.gh-btn'),
    forgotBtn: () => cy.get('button.forgotten-link.gh-btn'),

    emailInputValidator: () => cy.get('form.gh-signin div.form-group:nth-child(2)'),
    passwordInputValidator: () => cy.get('form.gh-signin div.form-group:nth-child(3)'),
    errorTextValidator: () => cy.get('p.main-error'),
  }

  login(user, password) { // Correct login flow
    cy.wait(1000)
    this.elements.emailInput().type(user);
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
    cy.url().should('include', '/dashboard');
    cy.wait(1000)
  }
}


module.exports = new LoginPage();