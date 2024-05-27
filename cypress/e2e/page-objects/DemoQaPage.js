class DemoQaPage {
  visitHomePage() {
    cy.visit("https://demoqa.com/");
  }

  seletCard(cardName) {
    cy.get(".card")
      .contains(cardName)
      .should("exist")
      .should("be.visible")
      .click();
  }

  selectButton(buttonName) {
    cy.get(".btn")
      .contains(buttonName)
      .should("exist")
      .should("be.visible")
      .click();
  }

  selectElementsPage(cardName, buttonName) {
    this.visitHomePage();
    this.seletCard(cardName);
    cy.get(".element-group").contains(cardName).should("be.visible");
    this.selectButton(buttonName);
  }
}

export default DemoQaPage;

