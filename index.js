// TODO: Include packages needed for this application
const prompt = require('inquirer');
const fs = require('fs');
import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from "generateMarkdown";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter a Title: ",
        name: 'title'
    },
    {
        type: 'input',
        message: "Enter a Description: ",
        name: 'desc'
    },
    {
        type: 'input',
        message: "Enter installation instructions: ",
        name: 'instructions'
    },
    {
        type: 'input',
        message: "Enter usage information: ",
        name: 'usage'
    },
    {
        type: 'input',
        message: ""
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
