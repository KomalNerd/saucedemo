import * as data from "../../cypress/fixtures/data.json";
import productListPo from "../pageObject/productList.po";
import removeItemPo from "../pageObject/removeItem.po";

describe("Add to cart items and remove", () => {
  it("Verify that the user is able to add items in the cart", () => {
    cy.visit("/");
    cy.login(data.valid_username, data.valid_password);
    cy.get(productListPo.selector.product_bagpack).click();
    cy.get(productListPo.selector.link_cart).click();
    cy.get(removeItemPo.selector.remove_product_bagpack).click();
  });
});
