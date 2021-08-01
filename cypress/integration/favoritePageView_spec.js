describe("Favorites Page View", () => {
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

  it("Should have a favorites view section", () => {
    cy.get("a").contains("My Favs");
  });

  it("Should be able to click on favorites view section", () => {
    cy.get("a").contains("My Favs").click();
  });

  it("Should be able to click a color swatch", () => {
    cy.get("div").should("have.class", "each-color-swatch");
    cy.get('div[title*="#981313"]').click();
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

  it("Should be able to click on the Add to Favorites Button", () => {
    cy.get('div[title*="#981313"]').click();
    cy.get("img").should(
      "have.attr",
      "src",
      "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
    );
    cy.get("h3").contains("The Massacre of the Innocents");
    cy.get("button").contains("Add to Favorites").click();
  });

  it("Should be able to view favorites after adding image to favorites", () => {
    cy.get('div[title*="#981313"]').click();
    cy.get("#en-SK-A-128").should(
      "have.attr",
      "src",
      "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
    );
    cy.get("h3").contains("The Massacre of the Innocents");
    cy.get("button").contains("Add to Favorites").click();
    cy.get("a").contains("My Favs").click();
    cy.get("section")
      .should("have.class", "favorites-container")
      .get("img")
      .should(
        "have.attr",
        "src",
        "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0"
      );
  });
});
