describe("ToolsQA element site test", () => {
  it("should open element site correctly", () => {
    cy.visit("https://reqres.in/");
    cy.get(".tagline").should(
      "contain.text",
      "Test your front-end against a real API"
    );
  });
});
