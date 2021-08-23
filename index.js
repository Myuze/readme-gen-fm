// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readmeGen = require('./utils/generateReadme');
const prompt = inquirer.createPromptModule();

// An array of questions for user input
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
    },
    {
        type: 'list',
        message: "Select a License: ",
        choices: ['mit', 'apache-2.0', 'ms-pl', 'osl-3.0','postgresql'],
        name: 'license'
    }
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error, data) =>
    error ? console.error(error) : console.log(data));
}

// A function to initialize app
function init() {
    questions.forEach(({name: tocItem}) => {
        toc.push(tocItem);
    });
}

// Function call to initialize app
const toc = [];
init();

// Main
prompt(questions)
    .then((response) => {
        console.log(response)
        var markdown = "";
        var contributorsList = [];
        
        markdown += readmeGen.createTitle(response.title);
        markdown += readmeGen.addDescription(response.desc, 2);
        markdown += readmeGen.addTableOfContents(toc, 2);
        markdown += readmeGen.addInstructions(response.instructions, 2);
        markdown += readmeGen.addUsage(response.usage, 2);
        
        contributorsList = response.contributors.replace(/\s+/g, ' ').split(',');
        markdown += readmeGen.addContributors(contributorsList, 2);
        
        writeToFile('README.md', markdown);
    }).catch((error) => error ? console.log(new Error(error)): console.log('SUCCESS'));
