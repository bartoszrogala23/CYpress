const credentialValue = "admin";

describe("when authorizing with correct credentials", () => {
  it("should be possible to send credentials via adress", () => {
    cy.visit("http://admin:admin@https://the-internet.herokuapp.com/basic_auth");
    cy.get("#content")
      .contains("Basic Auth")
      .contains("Congratulations! You must have the proper credentials.")
      .should("be.visible");
  });
});
