# Painting by (hex) Number 

### Table of Contents
- [Overview](#overview)
- [Achitechture and Learning Goals](#architechture-and-learning-goals)
- [Instructions for Viewing](#instructions-for-viewing)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Future Features](#future-features)
- [Contributors](#contributors)

### Front-End Mod 3 Project by: [Ashton Huxtable](https://github.com/ashton-huxtable), [Lourdes Mendoza](https://github.com/mendozalourdes),  & [Em Orendorff](https://github.com/emorendorff)

## Overview

When an art lover visits an art museum, they walk around the museum, and naturally find themselves gravitating towards art that fits their style or overall preferences which can include a preference towards certain color palettes. Painting by (hex) Numbers is an app that facilitates this! Users are be able to view only art that matches their preferred color palettes by allowing them to specify what color swatches they want to see, and they are then led to see art that matches those colors and favorite them into thier collection. This project was created in roughly one week to demonstrate our ability to learn a new technology to make a fully functioning application, in this case, Typescript and React with Hooks. The rubric for this project is found [here](https://frontend.turing.edu/projects/module-3/stretch.html). 

Check it out [here on heroku]() or see instructions for viewing locally below. 


# Instructions for Viewing Locally 
  * Clone down this repo by copying the SSH key and from your terminal git clone <repo SSH key>
  * `npm i` to install dependencies
  * cd into the repo
  * `npm start` to activate the server
  * Open localhost:3000 in your browser to view the project

  
# Architecture and Learning Goals 
  * Self-teach Typescript and React Hooks to create a fully functioning app in roughly one week. 
  * Demonstrate working knowledge of functional components with hooks, types and interfaces. 
  * Build upon the foundational skills of React  
  * Utilizes React Router for url navigation
  * Retrieve and display artwork from the The Rijks Museum API endpoints
  * Style and format color-picker dependency React Color 
  * Testing performed with Cypress to better understand asych JS
  
# Walkthrough
  
- As a user, you may select from any of the given swatches on the left. Upon selection, artwork that has a matching hex code included in it will render to the page. Users can hover over each one for information including the title, artist and year created. You can pick a different color at anytime to render a different set of paintings with different hex codes. 
  
![home view](https://user-images.githubusercontent.com/77934658/127924815-0d7c3e39-6a1b-4fb3-985e-d1f2bca4caad.gif)

- Love a painting and don't want to lose it? Favorite it! Users may save as many pieces of art as they would like and then view them in "My Collection"   
  
![my collection](https://user-images.githubusercontent.com/77934658/127924865-b8163887-8538-4306-b4de-8c3b77f051e2.gif)
   
- Router error handling - Trying to go to a url that doesn't exist? Don't worry, we'll guide you back to where you're supposed to be. 
  
![routererror](https://user-images.githubusercontent.com/77934658/127925102-7017232a-1f0f-4550-8bbe-c69b556f8edf.gif)

  
- Testing via Cypress - Extensive user flow testings with Cypress and stubs. 
![cypress](https://media.giphy.com/media/P12IvgYIX06rvcu7oH/giphy.gif)
  
- Responsiveness - Viewable on mobile, tablet and desktop! 
<img width="261" alt="Screen Shot 2021-08-02 at 4 22 00 PM" src="https://user-images.githubusercontent.com/77934658/127925509-c718fa3a-b9a7-4323-b30e-ff5ae3f03250.png">
<img width="420" alt="Screen Shot 2021-08-02 at 4 21 50 PM" src="https://user-images.githubusercontent.com/77934658/127925524-cbb72d05-c441-4135-b600-62394d5f5b52.png">

  
# Tech Stack
<table>
  <tr>
    <td>React w/ Hooks</td>
    <td>React Router</td>
    <td>CSS</td>
    <td>Cypress</td>
    <td>Typescript</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
    <td><img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/64px-Typescript_logo_2020.svg.png"/></td>
  </tr>
</table>
  
# Future Features 
 
  - User ability to delete artwork from their collection  
  - Additional error handling and redirects 
  - Additional filtering to allow users to select multiple swatches for artwork that has multiple matches 
  - Additional museums APIs for even more artwork
  - User login and Express or local storage so collections are saved
  
# Contributors
 
 <table>
  <tr>
    <td><a href="https://github.com/emorendorff">Em Orendorff</td>
    <td><a href="https://github.com/ashton-huxtable">Ashton Huxtable</td>
    <td><a href="https://github.com/mendozalourdes">Lourdes Mendoza</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/77934658?v=4" alt="Em Orendorff avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/78318468?v=4" alt="Ashton Huxtable avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/78240633?v=4" alt="Lourdes Mendoza avatar"/></td>
  </tr>
</table>

Project Managers:  
  Kayla Wood https://github.com/kaylaewood  
  Scott Ertmer https://github.com/sertmer
  
Turing School of Software & Design 
  
