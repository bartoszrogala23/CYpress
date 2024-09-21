import HomePage from "../pageobject/HomePage";

describe("Home Page test", () => {
  const homePage = new HomePage();

  it("should open the home page", () => {
    homePage.visitHomePage();
    cy.get(".heading")
      .should("be.visible")
      .should("contain.text", "Welcome to the-internet");
  });

  it("should open 'Dropdown' page", () => {
    homePage.visitHomePage();
    homePage.selectTopic("Dropdown");
    cy.get("h3").should("be.visible").should("contain.text", "Dropdown List");
  });
});
