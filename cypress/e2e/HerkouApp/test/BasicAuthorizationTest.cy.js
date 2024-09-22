import HomePage from "../pageobject/HomePage";
import AuthSpec from "../specification/AuthSpec";
import credentialValue from "../specification/ConstantValue";

describe("when authorizing with correct credentials", () => {
  const homePage = new HomePage();
  const authSpec = new AuthSpec();

  describe("Basic Auth Test", () => {
    it.only("should access the page with Basic Auth", () => {
      cy.intercept("GET", "/basic_auth", (request) => {
        request.headers["Authorization"] = authSpec.setBasicAuth(
          credentialValue,
          credentialValue
        );
      }).as("authRequest");
      cy.visit("https://the-internet.herokuapp.com/basic_auth");
      cy.contains("Congratulations! You must have the proper credentials.");
      cy.contains("Basic Auth").should("be.visible");
    });
  });
});
