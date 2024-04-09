// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}




generateMarkdown = (userInput) => {
    return `

  
${renderLicenseBadge(userInput.license)}
# ${userInput.title}

## Description

${userInput.description}

## Table of Contents
- [Installation](#installation)
- Visuals(#visuals)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Install Command

 > ${userInput.installCommand}


## Installation
${userInput.installation}

## Visuals
${userInput.images}

## Usage
${userInput.usage}


## License
This project is licensed by:

${renderLicenseBadge(userInput.license)}


## Contributing
${userInput.contributing}


## Tests
${userInput.tests}


## Questions
If you have any questions, you may reach me through the following:

Email: ${userInput.questions}


Github: [${userInput.username}](${userInput.usernamelink})

`;
}


// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },


    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'Please insert the install comamand for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },

    {
        type: 'input',
        name: 'images',
        message: 'To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ![alt text](assets/images/screenshot.png) .'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide the license for your project.',
        choices: ['MIT', 'GNU', 'Apache License 2.0', 'GPL', 'BSD', 'None', 'Mozilla Public License 2.0', 'Eclipse Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'The Unlicense', 'GNU Affero General Public License v3.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License v3.0', 'Boost Software License 1.0', 'ISC License', 'Microsoft Public License', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'Zlib License']


    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for how other developers can contribute to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide testing instructions.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide your email address for questions.'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Provide your GitHub username.'
    },

    {
        type: 'input',
        name: 'usernamelink',
        message: 'Provide your the link to your GitHub.'
    },
    ])

    .then((userInput) => {

        let markdownContent = generateMarkdown(userInput);
        console.log('Markdown content:', markdownContent);


        fs.writeFile('ExampleReadMe.md', markdownContent, (err) => {
            err ? console.error(err) : console.log('Awesome we got it!');

        })
    });



