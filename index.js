// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeGen = require('./utils/generateReadme');
const prompt = inquirer.createPromptModule();

// import { renderLicenseBadge, renderLicenseLink, renderLicenseSection } from "generateMarkdown";

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
        type: 'editor',
        message: "Enter installation instructions: ",
        name: 'instructions'
    },
    {
        type: 'editor',
        message: "Enter usage information: ",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Your contributors: ",
        name: 'contributors'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error, data) =>
    error ? console.error(error) : console.log(data));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
prompt(questions)
    .then((response) => {
        console.log(response)
        var markdown = "";
        var contributorsList = [];
        
        markdown += readmeGen.createTitle(response.title);
        markdown += readmeGen.addDescription(response.desc, 2);
        markdown += readmeGen.addInstructions(response.instructions, 2);
        markdown += readmeGen.addUsage(response.usage, 2);
        
        contributorsList = response.contributors.replace(/\s+/g, ' ').split(',')
        markdown += readmeGen.addContributors(contributorsList, 2)
        
        writeToFile('README.md', markdown)
    }).catch((error) => error ? console.log(new Error(error)): console.log('SUCCESS'))
