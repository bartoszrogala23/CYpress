import HomePage from "../pageobject/HomePage";
import AddRemoveElement from "../pageobject/AddRemoveElementPage";

describe("AddRemoveElement Test", () => {
  const homePage = new HomePage();
  const addRemoveElement = new AddRemoveElement();

  it("should add and remove 'Delete' button", () => {
    homePage.navigateToTopic("add_remove_elements");
    addRemoveElement.checkIfDeleteButtonExists();
    addRemoveElement.selectButton("Add Element");
    addRemoveElement.selectButton("Delete");
    addRemoveElement.checkIfDeleteButtonExists();
  });
});
