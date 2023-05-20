import { faker } from '@faker-js/faker';
class Usuario {
  elements = {
    emailInput: () => cy.get('input[name="identification"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button.login.gh-btn'),
    forgotBtn: () => cy.get('button.forgotten-link.gh-btn'),

    emailInputValidator: () => cy.get('form.gh-signin div.form-group:nth-child(1)'),
    passwordInputValidator: () => cy.get('form.gh-signin div.form-group:nth-child(2)'),
    errorTextValidator: () => cy.get('p.response'),
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
}


module.exports = new Usuario();