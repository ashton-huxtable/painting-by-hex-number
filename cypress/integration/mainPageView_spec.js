describe ('Main Page View', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });

      it('Should have a 201 status code', () => {
            cy.intercept(
              {
                  method: "GET",
                  url: "https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23981313"
              }, 
              {
                  status: 201,
                //   body: [{
                //       name: "Lourdes",
                //       date: "07/22",
                //       time: "6:00pm", 
                //       number: 2,
                //       id: 1
                //   }]
              }
            
    ) });
  
    it("Should show the user a page title", () => {
      cy.get('h1').contains('Paint')
      cy.get('span').contains('By ^')
      cy.get('span').contains('(hex)')
      cy.get('span').contains('Numbers')

    });

    it("Should have a color palette", () => {
      cy.get("div").should("have.class", "swatches-picker");
    });
  
    it("Should be able to click on a color swatch", () => {
        // cy.title("#B35A1F").click()
        cy.get('div')
        .title("#B35A1F")
    });

    it("Should be able to click on a color swatch", () => {
        // cy.title("#B35A1F").click()
        cy.get('div')
        .title("#B35A1F").click()
    //   cy.get("div").contains("title")
    //   .contains('98313');
    //   cy.url().should("include", "http://localhost:3000");
    });
  
    // it("Should show the user a random movie image", () => {
    //   cy.get("img").should("have.class", "random-movie-backdrop");
    // });
  
    // it("Should have a more info button on random movie image", () => {
    //   cy.get(".random-info-button").contains("More Info").click();
    // })
  
    // it("Should redirect the user once more info button is clicked", () => {
    //   cy.get(".random-info-button").contains("More Info").click();
    //   cy.url().should("include", "movies/");
    // })
  
    // it("Should show the user a search bar", () => {
    //   cy.get("input").should("have.class", "search-box");
    // });
  
    // it('Should have a "more info" button for each poster', () => {
    //   cy.get(".info-button").should("have.length", 41).contains("More Info").click();
    // });
  
    // it('Should redirect user to selected movie view when more info is clicked', () => {
    //   cy.get("#1").click();
    //   cy.url().should("include", "movies/");
    // });
  
    // it("Should show the user a selection of movies from a database upon page load", () => {
    //   cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2", {
    //     statusCode: 201,
    //     delay: 100,
    //   });
    //   cy.visit("http://localhost:3000");
    //   cy.get("img").should("have.class", "movie-poster");
    //   cy.get(".movie-poster").should("have.length", 41);
    // });
  
    // it("Should show the user an error message if a 400 error is encountered", () => {
    //   cy.intercept("https://rancid-tomatillos.herokuapp.com/api//v2/movies/",
    //     {
    //       statusCode: 404,
    //       body: {
    //         message: "Something went wrong. Please try again later.",
    //       }
    //     }
    //   );
    //   cy.get("h2").contains("Something went wrong. Please try again later.");
    // });
  
    // it("Should show the user an error message if a 500 error is encountered", () => {
    //   cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v1/movies/",
    //     {
    //       statusCode: 500,
    //       body: {
    //         message: "Our servers are currently down. Please try again.",
    //       }
    //     }
    //   );
    //   cy.get("h2").contains("Our servers are currently down. Please try again.");
    // });
  });
  