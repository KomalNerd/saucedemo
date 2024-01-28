import * as data from "../../cypress/fixtures/data.json";
import productListPo from "../pageObject/productList.po";
import viewCartPo from "../pageObject/viewCart.po";

describe("place an order", () => {
  it("Verify that the user is able to place the order ", () => {
    cy.visit("/");
    cy.login(data.valid_username, data.valid_password);
    cy.get(productListPo.selector.product_bagpack).click();
    cy.get(productListPo.selector.link_cart).click();
    cy.get(viewCartPo.selector.page_view_cart).click();
    cy.get(viewCartPo.selector.inputbox_first_name)
      .click()
      .type(data.first_name);
    cy.get(viewCartPo.selector.inputbox_last_name).click().type(data.last_name);
    cy.get(viewCartPo.selector.inputbox_postal_code)
      .click()
      .type(data.Zip_code);
    cy.get(viewCartPo.selector.button_continue).click();
    cy.get(viewCartPo.selector.button_finish).click();
    cy.contains(viewCartPo.selector.order_confirmation_msg).should(
      "be.visible"
    );
  });
});
