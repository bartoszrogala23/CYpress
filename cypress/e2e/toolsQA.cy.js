import DemoQaPage from "./page-objects/DemoQaPage";
import ButtonsPage from "./page-objects/ButtonsPage";

describe("toolsQA button click test", () => {
  const demoQaPage = new DemoQaPage();
  const buttonsPage = new ButtonsPage();

  beforeEach(() => {
    demoQaPage.selectElementsPage("Elements", "Buttons");
  });

  it("should double click 'double click me' button", () => {
    buttonsPage.selectButton("Double Click Me").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .should("contain.text", "You have done a double click");
  });

  it("should right click on the 'right click me' button", () => {
    buttonsPage.selectButton("Right Click Me").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .should("contain.text", "You have done a right click");
  });
});
