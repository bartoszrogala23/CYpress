import TextBoxPage from "../pageobject/TextBoxPage";
import DemoQaPage from "../pageobject/DemoQaPage";

describe("TextBoxPage test", () => {
  const textBoxPage = new TextBoxPage();
  const demoQaPage = new DemoQaPage();

  beforeEach(() => {
    demoQaPage.selectPage("Elements", "Text Box");
  });

  it("should fill the form correcly", () => {
    textBoxPage.fillForm();
  });
});
