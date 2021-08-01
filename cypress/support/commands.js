Cypress.Commands.add('loadMain', () => {
    cy.fixture('art.json').as('art')

    const baseURL = "https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23"
    
    cy.intercept(`${baseURL}/981313`, {
        fixture: "art"
    });

    cy.visit('http://localhost:3000')

});

Cypress.Commands.add('fetchMovie', () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/1",
      {
        statusCode: 201,
        body: {
          movie: {
            id: 1,
            title: "Fake Movie Title",
            poster_path:
              "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
            release_date: "2019-12-04",
            overview:
              "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
            average_rating: 6,
            genres: ["Drama"],
            budget: 63000000,
            revenue: "100,853,753",
            runtime: 139,
            tagline: "It's a movie!",
          },
        },
      }
    );

});