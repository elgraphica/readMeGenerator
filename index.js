const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
//Title
{
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
},
//Description
{
    type: 'input',
    name: 'description',
    message: 'Put your project description here'
},

//Licence
{
    type: 'list',
    choices: ['MIT', 'GPL', 'GNU', 'Bsd-2-Clause'],
    name: 'licence',
    message: 'What is your project licence type?'
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answear => {
console.log(answear);
const markdown = generateMarkdown(answear);
    });

}

// function call to initialize program
init();
