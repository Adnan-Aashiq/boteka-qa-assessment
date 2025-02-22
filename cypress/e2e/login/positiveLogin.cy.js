import HomePage from '../../PageObjects/HomePage';

const homepage = new HomePage();

describe('Login Functionality', { tags: 'Regression' }, () => {
  it('should allow login with valid credentials', () => {

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

  });
});
