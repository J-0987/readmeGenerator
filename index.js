// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

generateMarkdown = (userInput) => {
    return `
# ${userInput.title}
## Description
${userInput.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${userInput.installation}
## Usage
${userInput.usage}
## License
${userInput.license}
## Contributing
${userInput.contributing}
## Tests
${userInput.tests}
## Questions
If you have any questions, please contact me at ${userInput.questions}. You can also find me on GitHub at [${userInput.username}]

`;
}


// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt ([{
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
    name: 'installation',
    message: 'What are the steps required to install your project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
},
{
    type: 'input',
    name: 'license',
    message: 'Provide the license for your project.'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for how other developers can contribute to your project.'
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide examples on how to run tests.'
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
])

.then((response) => {
   
    let markdownContent = generateMarkdown(response);
    console.log('Markdown content:', markdownContent);
   

    fs.writeFile('draft.md', markdownContent, (err) => {
        err ? console.error(err) : console.log('Awesome we got it!');

})
});





// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

