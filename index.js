// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
     {
      type: 'input',
      message: 'Enter projects title',
      name: 'title',
    },
    {
      type: 'input',
         message: 'Enter projects description',
         name: 'description',
      },
         {
         type: 'input',
         message: 'Enter projects installation instructions',
         name: 'installationInstructions',
        },
        {
        type: 'input',
        message: 'Enter projects usage information',
        name: 'usageInformation',
      },
      {
        type: 'input',
        message: 'Enter projects contribution guidelines ',
        name: 'contributionGuidelines',
      },
      {
        type: 'input',
        message: 'Enter projects test instructions',
        name: 'testInstructions',
      },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
