// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const licenseGenerator = require('./utils/generateMarkdown.js');

// inquirer prompts:
const promptUser = () => {
    return inquirer.prompt([
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
      {
        type: 'input',
        message: 'Enter your github Username',
        name: 'gitHUb',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is application license?',
        choices: ['MIT', 'Apache', 'Boost', 'BSD', 'Eclipse', 'GNU GPL v3', 'GNU AGPL v3', 'Mozilla', 'Open Database License (ODbL)'],
      },
      {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
      },
  ]);
};


// Creating a function to generate README file 
const writeToFile = ({ title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, gitHUb, license, email  }) => 
    `
<h1>${title}'s Read Me</h1>
    
## Description 
    
${description}

${licenseGenerator.renderLicenseBadge(license)}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
${installationInstructions}
    
## Usage 
    
${usageInformation}
    
## License
    
${licenseGenerator.renderLicenseSection(license)}
    
## Contributing
    
${contributionGuidelines}
    
## Tests
    
${testInstructions}
    
## Questions
    
- Feel free to add any issues and contact me at ${email} if you have any questions;

- Follow my code: https://github.com/${gitHUb};
    
`;

// Creating a function to initialize app
const init = () => {
    promptUser()
    // Using writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('ReadMe.md', writeToFile(answers)))
      .then(() => console.log('Successfully created a ReadMe file!'))
      .catch((err) => console.error(err));
  };
  


// Function call to initialize app
init();


