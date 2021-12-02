![](https://img.shields.io/badge/Microverse-blueviolet)

# Yuriy Chamkoriyski To Do List project

> Second Javascript project from Module 2 at Microverse

![screenshot](./ToDoList.jpg)

In this project, you will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.

## List structure (step 1):

- [x] Set up a new project with webpack that is based on the webpack exercise you have already completed.
- [x] Create an index.html file and write your HTML markup here. Create an empty To Do List placeholder (<div> or <ul> element). The index.html file must be set as a template using the HTML Webpack Plugin.
- [x] Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:
  - [x] i.   description [string].
  - [x] ii.  completed [bool].
  - [x] iii. index: [number].
- [x] Write a function to iterate over the tasks array and populate an HTML list item element for each task.
- [x] On page load render the dynamically created list of tasks in the dedicated placeholder. The list should appear in order of the index values for each task.
- [x] Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. Your list should be a clone of the part of the minimalist project captured in the video below.

[Video](https://www.youtube.com/watch?v=AcUd-_Yjjqg)

## Interactive list (step 2):

- Add a new JavaScript files and import it as a module:
    - it will contain methods related to the status updates (`completed: true/false`)
- Add event listener to the checkbox (`change`).
- Update items object's value for (`completed`) key upon user actions.
- Store the updated array of items in local storage, so the user gets the correct list values after the page reloads.

## Built With

- Major languages: HTML, CSS, JS
- Frameworks: none
- Technologies used: Git, webpack

## Live Demo

- Not deployed yet.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Internet connection and browser
- A text editor(preferably Visual Studio Code)
- Browser

### Setup

- For detail description of how to get started with webpack, please, look at: [webpack](https://webpack.js.org/guides/getting-started/)

### Install

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

### Usage

- Clone the repository using "git clone git@github.com:Hombre2014/ToDoList.git"
- Change directory into the project folder
- Run npm install
- Start the project using LiveServer extension or open project in a browser

### Run tests

- Passed Lighthouse, webhint, Stylelint and ESLint tests

### Deployment

- All the files necessary for deployment are in the /dist folder

## Author

👤 **Yuriy Chamkoriyski**

- GitHub: [@Hombre2014](https://github.com/Hombre2014)
- Twitter: [@Chamkoriyski](https://twitter.com/Chamkoriyski)
- LinkedIn: [axebit](https://linkedin.com/in/axebit)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Hombre2014/ToDoList/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments


## 📝 License

This project is [MIT](./MIT.md) licensed.
