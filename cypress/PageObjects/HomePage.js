/// <reference types="cypress" />

class HomePage {
  constructor() {
    // Selectors
    this.loginButtonNavbar = "#login2";
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
    this.loggedInUserName = "#nameofuser";
    this.allProducts = "#tbodyid h4";
  }

  visitUrl() {
    cy.visit("/");
  }

  clickLoginButtonNavbar() {
    return cy.get(this.loginButtonNavbar).click();
  }

  inputUsername() {
    return cy
      .get(this.username)
      .click()
      .focused()
      .type("adnantestuser", { delay: 0 });
  }

  inputInvalidUsername() {
    return cy.get(this.username).click().focused().type("adnan", { delay: 0 });
  }

  inputPassword() {
    return cy.get(this.password).click().focused().type("test", { delay: 0 });
  }

  clickLoginButton() {
    return cy.get(this.loginButton).click();
  }

  verifyLoggedInUsername() {
    return cy
      .get(this.loggedInUserName, { timeout: 10000 })
      .should("be.visible")
      .then(($element) => {
        const actualText = $element.text().trim();
        expect(actualText).to.include("adnantest");
      });
  }

  verifyInvalidUserAlertText() {
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Wrong password.");
    });
  }

  clickRandomProduct() {
    cy.get(this.allProducts)
      .should("be.visible")
      .should("have.length.gt", 0) // Ensure products exist
      .then(($products) => {
        const randomIndex = Math.floor(Math.random() * $products.length);
        const selectedProduct = $products[randomIndex];
        const productName = selectedProduct.innerText;
        Cypress.log({
          name: "clickRandomProduct",
          message: `Clicking product: ${productName}`,
        });
        cy.wrap(selectedProduct).click();
      })
      .then(() => {
        cy.url().should("include", "/prod.html");
      });
  }
}

export default HomePage;
