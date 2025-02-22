import HomePage from '../../PageObjects/HomePage';

const homepage = new HomePage();

describe('Login Functionality', { tags: 'Regression' }, () => {
  it('should not allow login with invalid username or password', () => {

    homepage.visitUrl();
    homepage.clickLoginButtonNavbar();
    cy.wait(5000);
    homepage.inputInvalidUsername();
    cy.wait(5000);
    homepage.inputPassword();
    cy.wait(5000);
    homepage.clickLoginButton();
    cy.wait(5000);
    homepage.verifyInvalidUserAlertText();

  });
});
