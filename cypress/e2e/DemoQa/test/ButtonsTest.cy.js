import DemoQaPage from "../pageobject/DemoQaPage";
import ButtonsPage from "../pageobject/ButtonsPage";

describe("toolsQA button click test", () => {
  const demoQaPage = new DemoQaPage();
  const buttonsPage = new ButtonsPage();

  beforeEach(() => {
    demoQaPage.selectPage("Elements", "Buttons");
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
