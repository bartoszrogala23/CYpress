import "cypress-xpath";

class HomePage {
  homePageURL = "https://the-internet.herokuapp.com/";

  visitHomePage() {
    cy.visit(this.homePageURL);
  }

  navigateToTopic(topic) {
    cy.visit(this.homePageURL + topic + "/");
  }

  selectTopic(text) {
    cy.xpath(`.//*[text()="${text}"]`).click();
  }

  selectTopicByPartialText(text) {
    cy.xpath(`.//*[contains(text(),"${text}")]`).click();
  }
}
export default HomePage;
