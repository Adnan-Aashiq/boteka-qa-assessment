import HomePage from "../../PageObjects/HomePage";
import ProductDetailPage from "../../PageObjects/ProductDetailPage";

const homepage = new HomePage();
const productdetailpage = new ProductDetailPage();

describe("Login Functionality", { tags: "Regression" }, () => {
  it("should allow login with valid credentials", () => {
    homepage.visitUrl();
    homepage.clickLoginButtonNavbar();
    cy.wait(5000);
    homepage.inputUsername();
    cy.wait(5000);
    homepage.inputPassword();
    cy.wait(5000);
    homepage.clickLoginButton();
    cy.wait(5000);
    homepage.verifyLoggedInUsername();
    cy.wait(5000);
    homepage.clickRandomProduct();
    cy.wait(5000);
    productdetailpage.addToCart();
    cy.wait(5000);
    productdetailpage.verifyProductAddedAlertText();
    cy.wait(5000);
    productdetailpage.acceptAlert();
    cy.wait(5000);
  });
});
