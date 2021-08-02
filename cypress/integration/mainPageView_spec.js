describe("Main Page View", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should have a 201 status code", () => {
    cy.get('div[title*="#981313"]').click();
    cy.intercept(
      {
        method: "GET",
        url: "https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23981313",
      },
      {
        status: 201,
        body: [
          {
            id: "en-SK-A-128",
            title: "The Massacre of the Innocents",
            longTitle:
              "The Massacre of the Innocents, Cornelis Cornelisz. van Haarlem, 1590",
            principalOrFirstMaker: "Cornelis Cornelisz. van Haarlem",
            webImage:
              "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0",
          },
        ],
      }
    );
    cy.get("img").should("have.length", 10);
    cy.get("#en-SK-A-128").should(
      "have.attr",
      "src",
      "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
    );
  });

  it("Should show the user a page title", () => {
    cy.get("h1").contains("Paint by");
    cy.get("span").contains("(hex)");
    cy.get("span").contains("Numbers");
  });

  it("Should have instructions for the user", () => {
    cy.get("h2").contains(
      "To get started, please select a color from the palette!"
    );
  });

  it("Should have a favorites view section", () => {
    cy.get("a").contains("My Collection");
  });

  it("Should be able to click on favorites view section", () => {
    cy.get("a").contains("My Collection").click();
  });

  it("Should have an aside", () => {
    cy.get("aside").should("have.class", "palette-container");
    cy.get("p").should("have.class", "select-color");
  });

  it("Should have a color palette", () => {
    cy.get("div").should("have.class", "swatches-picker");
  });

  it("Should be able to click a color swatch", () => {
    cy.get("div").should("have.class", "each-color-swatch");
    cy.get('div[title*="#981313"]').click();
  });

  it("Should have a loading message before images load", () => {
    cy.get("div").should("have.class", "each-color-swatch");
    cy.get('div[title*="#981313"]').click();
    cy.get("h2").contains("Loading matching paintings 🎨");
  });

  it("Should load images after clicking on a swatch", () => {
    cy.get('div[title*="#981313"]').click();
    cy.get("img").should("have.length", 10);
    cy.get("#en-SK-A-128").should(
      "have.attr",
      "src",
      "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
    );
  });

  it("Should be able to get more information for each image", () => {
    cy.get('div[title*="#981313"]').click();
    cy.get("img").should(
      "have.attr",
      "src",
      "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
    );
    cy.get("h3").contains("The Massacre of the Innocents");
  });

  it("Should be able to click on the Add to Collection Button", () => {
    cy.get('div[title*="#981313"]').click();
    cy.get("img").should(
      "have.attr",
      "src",
      "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
    );
    cy.get("h3").contains("The Massacre of the Innocents");
    cy.get("button").contains("Add to Collection").click();
  });

  it("Should be able to click on the title to return to the main page", () => {
    cy.get('div[title*="#981313"]').click();
    cy.get("img").should(
      "have.attr",
      "src",
      "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
    );
    cy.get("h3").contains("The Massacre of the Innocents");
    cy.get("button").contains("Add to Collection").click();
    cy.get("a").contains("My Collection").click();
    cy.get("h1").contains("Paint by");
    cy.get("span").contains("(hex)");
    cy.get("span").contains("Numbers").click();
    cy.get("img").should("have.length", 10);
  });

  it("Should notify the user if the url they typed does not exist", () => {
    cy.visit("http://localhost:3000/gimmeart");
    cy.get("h2").contains(
      "Whoops! Looks like this path doesn't exist. Click the button to go back to the main page 🎨"
    );
  });

  it("Should allow the user to click on the Go Back button and return home if they reach an incorrect URL", () => {
    cy.visit("http://localhost:3000/gimmeart");
    cy.get("h2").contains(
      "Whoops! Looks like this path doesn't exist. Click the button to go back to the main page 🎨"
    );
    cy.get("button").contains("Go Back").click();
    cy.location("pathname").should("eq", "/");
  });
});
