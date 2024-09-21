class TextBoxPage {
  getNameInput() {
    return cy.get("#userName");
  }

  getEmailInput() {
    return cy.get("#userEmail");
  }

  getCurrentAdressInput() {
    return cy.get("#currentAddress");
  }

  getPermanentAddressInput() {
    return cy.get("#permanentAddress");
  }

  getSumbitButton() {
    return cy.get("#submit");
  }

  getOutput() {
    return cy.get("#output");
  }

  fillForm() {
    cy.get("#userName").type("Eddie Brock");
    cy.get("#userEmail").type("Eddie.Brock@test.com");
    cy.get("#currentAddress").type("Sample Address 11/1");
    cy.get("#permanentAddress").type("Sample Address 22/2");
    cy.get("#submit").click();
    cy.get("#output")
      .should("be.visible")
      .should("contain.text", "Sample Address 11/1");
  }
}

export default TextBoxPage;
