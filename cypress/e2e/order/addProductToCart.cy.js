import HomePage from "../../PageObjects/HomePage";
import ProductDetailPage from "../../PageObjects/ProductDetailPage";

const homepage = new HomePage();
const productdetailpage = new ProductDetailPage();

describe("Add to Cart Functionality", { tags: "Regression" }, () => {
  it("User should be able to add the prp=oduct to the successfully", () => {
    homepage.visitUrl();
    homepage.clickLoginButtonNavbar();
    homepage.inputUsername();
    homepage.inputPassword();
    homepage.clickLoginButton();
    homepage.verifyLoggedInUsername();
    homepage.clickRandomProduct();

    productdetailpage.clickAddToCart();
    productdetailpage.verifyProductAddedAlertText();
    productdetailpage.acceptAlert();
  });
});
