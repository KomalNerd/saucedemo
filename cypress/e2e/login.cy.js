import * as data from "../../cypress/fixtures/data.json";

describe("Login scenario", () => {
  beforeEach("visit the main url", () => {
    cy.visit("/");
  });

  it("Verify login with invalid username and password", () => {
    cy.login(data.invalid_username, data.invalid_password);
    cy.contains(data.errMsg_CredMismatch).should("be.visible");
  });

  it("Verify with blank username and password", () => {
    cy.get("#login-button").click();
    cy.contains("Epic sadface: Username is required").should("be.visible");
  });

  it("Verify with valid username and invalid password", () => {
    cy.login(data.valid_username, data.invalid_password);
    cy.contains(data.errMsg_CredMismatch).should("be.visible");
  });

  it("Verify with invalid username and valid password", () => {
    cy.login(data.invalid_username, data.valid_password);
    cy.contains(data.errMsg_CredMismatch).should("be.visible");
  });

  it("Verify with valid username and valid password", () => {
    cy.login(data.valid_username, data.valid_password);
    cy.url().should("eq", data.url_inventory);
  });
});
