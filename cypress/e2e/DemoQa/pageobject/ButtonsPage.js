class ButtonsPage {
  selectButton(buttonName) {
    return cy.contains(buttonName);
  }
}

export default ButtonsPage;