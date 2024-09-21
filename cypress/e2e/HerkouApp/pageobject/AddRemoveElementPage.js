class AddRemovePage {
  selectButton(buttonName) {
    cy.get("button")
      .contains(buttonName)
      .should("exist")
      .should("be.visible")
      .click();
  }

  checkIfDeleteButtonExists() {
    cy.get("button").contains("Delete").should("not.exist");
  }
}

export default AddRemovePage;
