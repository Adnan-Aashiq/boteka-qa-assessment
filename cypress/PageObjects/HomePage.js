/// <reference types="cypress" />

class HomePage {
  constructor() {
    // Selectors
    this.loginButtonNavbar = '#login2';
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
    this.loggedInUserName= "#nameofuser";
  }

  visitUrl() {
    cy.visit('/');
  }

  clickLoginButtonNavbar() {
    return cy.get(this.loginButtonNavbar).click();
  }

  inputUsername() {
    return cy.get(this.username).type("adnantestuser", { delay: 1 });
  }

  inputInvalidUsername() {
    return cy.get(this.username).type("adnan", { delay: 1 });
  }

  inputPassword() {
    return cy.get(this.password).type("test");
  }

  clickLoginButton() {
    return cy.get(this.loginButton).click();
  }
  
  verifyLoggedInUsername() {
    return cy.get(this.loggedInUserName, { timeout: 10000 })
      .should('be.visible')
      .then(($element) => {
        const actualText = $element.text().trim();
        expect(actualText).to.include('adnantest');
      });
  }

  verifyInvalidUserAlertText() {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal("Wrong password.");
    });
  }
}

export default HomePage;
