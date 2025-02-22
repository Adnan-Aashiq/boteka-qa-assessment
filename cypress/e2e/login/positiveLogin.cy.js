import HomePage from "../../PageObjects/HomePage";

const homepage = new HomePage();

describe("Login Functionality", { tags: "Regression" }, () => {
  it("Should allow login with valid credentials", () => {
    homepage.visitUrl();
    homepage.clickLoginButtonNavbar();
    homepage.inputUsername();
    homepage.inputPassword();
    homepage.clickLoginButton();
    homepage.verifyLoggedInUsername();
  });
});
