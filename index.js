const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are the usage instructions for your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use for your project?',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines for your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions for your project?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((response) => writeFileAsync('README.md', generateMarkdown(response)))
  .then(() => console.log('README.md generated successfully!'))
  .catch((err) => console.error(err));
  

