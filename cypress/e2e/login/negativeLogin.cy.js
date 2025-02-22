import HomePage from "../../PageObjects/HomePage";

const homepage = new HomePage();

describe("Login Functionality", { tags: "Regression" }, () => {
  it("Should not allow login with invalid username or password", () => {
    homepage.visitUrl();
    homepage.clickLoginButtonNavbar();
    homepage.inputInvalidUsername();
    homepage.inputPassword();
    homepage.clickLoginButton();
    homepage.verifyInvalidUserAlertText();
  });
});
