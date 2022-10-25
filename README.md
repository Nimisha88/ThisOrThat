# React Employee Poll App: This or that!

**This or that!** is a Employee poll app that allows every employee to login and create a poll with two proposed options. Employees can then vote on these options and see which option has the most votes. Application dashbord contains the list of answered/unanswered polls and leaderboard lists every employee ordered by the total number of polls they've created and answered. In case one tries to access a poll that doesn't exist, 404 error is shown with an option for user to navigate back to the application dashboard.

## Application Preview



## Software, Firmware and Hardware:

* HTML, CSS, JavaScript
* React - react, react-redux, react-router-dom, redux-thunk, react-avatar
* Jest and React Testing Library
* [Create React App](https://github.com/facebook/create-react-app)

## Installation

Download/clone the project. `cd` to the project directory, then run:

### `npm install`

Installs the project dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload automatically when you make changes.

### Application Login

Presently, only 4 username/password combination can be used to login to the application. They are:
  * sarahedo/pwd_sarahedo
  * tylermcginnis/pwd_tylermcginnis
  * mtsamis/pwd_mtsamis
  * zoshikanlu/pwd_zoshikanlu

They each mimic an employee and using any one combination should make you login to the application as that employee.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Folder Structure

* main
  * README.md - Read me file
  * .gitignore - Files that were ignored in commit
  * package.json - Contains list of installable dependencies needed to run the application locally
  * src/index.js - Creating root and rendering App component
  * src/assets - Contains image files
  * src/actions - Contains actions to change Redux State
  * src/components - Contains React Components
  * src/reducers - Contains Redux Reducers
  * src/middlewares - Contains Redux middlewares
  * src/styles - Contains style sheets
  * src/utils - Contains API and helper file
  * public/index.html - HTML file

## Copyright

The application is designed and developed by Nimisha Viraj as a part of [Udacity React Nanodegree](https://www.udacity.com/)

## Acknowledgements

* [Udacity](https://udacity.com) - Source of application requirements
* [Pixabay](https://pixabay.com/) - For Hero Image
* [ColorHunt](https://colorhunt.co/) - Source of Color Stack
* [GoogleFonts](https://fonts.google.com/) - Source of Font Stack
* [Flaticon](https://www.flaticon.com/) - Source of App Icon
* [Stackoverflow](https://stackoverflow.com/) - Source of resolutions to coding errors and roadblocks

## Limitation and Scope

* Presently, employee cannot signup or change/create thier own password.
* Application can be expanded to allow multiple choice polls and send notifications when a new poll is created
