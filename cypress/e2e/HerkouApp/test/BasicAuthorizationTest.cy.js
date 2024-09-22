import HomePage from "../pageobject/HomePage";

const credentialValue = "admin";

describe("when authorizing with correct credentials", () => {
  const homePage = new HomePage();

  describe("Basic Auth Test", () => {
    it.only("should access the page with Basic Auth", () => {
      cy.intercept("GET", "/basic_auth", (request) => {
        request.headers["Authorization"] = "Basic " + btoa("admin:admin");
      }).as("authRequest");

      cy.visit("/https://admin:admin@the-internet.herokuapp.com/basic_auth");
      cy.contains(
        "Congratulations! You must have the proper credentials."
      ).should("be.visible");
    });
  });
});
