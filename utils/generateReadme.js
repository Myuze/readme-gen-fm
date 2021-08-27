// Required Packages
const genLicense = require('./generateLicense');

// Markdown Functions
function createTitle(title) {
    return `# ${title}\n`;
}

function addLicense(license, headingLevel) {
    let sectionTitle = 'Licenses';
    let finalLicenses = "";

    finalLicenses += addHeading(sectionTitle + ':', headingLevel);
    finalLicenses += addRule();
    finalLicenses += genLicense.renderLicenseLink(license);

    return finalLicenses;
}

function addDescription(description, headingLevel = 2) {
    let sectionTitle = 'Description';
    let finalDescription = "";

    finalDescription += addHeading(sectionTitle + ':', headingLevel);
    finalDescription += addRule();
    finalDescription += description + "\n";

    return finalDescription;
}

function addTableOfContents(orderedContentList, headingLevel) {
    let sectionTitle = 'Table of Contents';
    let finalTableOfContents = "";

    finalTableOfContents += addHeading(sectionTitle + ':', headingLevel);
    finalTableOfContents += addRule();
    finalTableOfContents += createTableOfContents(orderedContentList);

    return finalTableOfContents;
}

function createTableOfContents(orderedContentList) {
    let tableOfContents = "";
    orderedContentList.forEach((section, index) => {
        let section_name = section.split(' ').join('-');
        tableOfContents += `${index + 1}. `;
        tableOfContents += addLink(section, `#${section_name}`);
    });

    return tableOfContents;
}

function addInstallInstructions(instructions, headingLevel = 2) {
    let sectionTitle = 'Installation Instructions';
    let finalInstallInstructions = "";

    finalInstallInstructions += addHeading(sectionTitle + ':', headingLevel);
    finalInstallInstructions += addRule();
    finalInstallInstructions += instructions + "\n";

    return finalInstallInstructions;
}

function addUsage(usage, headingLevel = 2) {
    let sectionTitle = 'Usage';
    let finalUsage = "";

    finalUsage += addHeading(sectionTitle + ':', headingLevel);
    finalUsage += addRule();
    finalUsage += usage + "\n";

    return finalUsage;
}

function addContributors(contributorsList, headingLevel = 2) {
    let sectionTitle = 'Contribute';
    let finalContributors = "";

    finalContributors += addHeading(sectionTitle + ':', headingLevel);
    finalContributors += addRule();
    finalContributors += addList(contributorsList);

    return finalContributors;
}

function addTestInstructions(testInstructions, headingLevel) {
    let sectionTitle = 'Test Instructions';
    let finalTestInstructions = "";

    finalTestInstructions += addHeading(sectionTitle + ':', headingLevel);
    finalTestInstructions += addRule();
    finalTestInstructions += testInstructions + "\n";

    return finalTestInstructions;
}

function addQuestions(contactQuestions, headingLevel) {
    let sectionTitle = 'Questions';
    let finalQuestions = "";

    finalQuestions += addHeading(sectionTitle + ':', headingLevel);
    finalQuestions += addRule();
    finalQuestions += addHeading("Where can I find your other work?", headingLevel + 1);
    finalQuestions += `[Github: ${contactQuestions.github}](https://github.com/${contactQuestions.github})\n`;
    finalQuestions += addHeading("If you have any other questions, you can reach me at:", headingLevel + 1);
    finalQuestions += `[${contactQuestions.email}](mailto:${contactQuestions.email})\n`;

    return finalQuestions;
}

function addHeading(text, level) {
    let head = '\n';

    for (let i = 0; i < level; i++) {
        head += '#';
    }

    head += " ";
    head += text;
    head += '\n\n';

    return head;
}

function addImage(alt, src) {
    return `![${alt}](${src})\n`;
}

function addAnchor() {}

function addLink(alt, src) {
    let lowerSrc = src.toLowerCase();
    return `[${alt}](${lowerSrc})\n`;
}

function md(text) {
    return `\`\`\`md\n${text}\n\`\`\`\n`;
}

function bash(text) {
    return `\`\`\`bash\n${text}\n\`\`\`\n`;
}

function bold(text) {
    return `**${text}**`;
}

function italic(text) {
    return `_${text}_`;
}

function italicBold(text) {
    return `***${text}***`;
}

function addRule() {
    return '---\n';
}

function addList(list) {
    let markupList = "";

    list.forEach(listItem => {
        markupList += `- ${listItem.trim()}\n`;
    })

    return markupList;
}

function addOrderedList(oList) {
    let orderedList = "";

    oList.forEach(listItem, index => {
        orderedList = `${index}. ${listItem.trim()}\n`;
    });

    return orderedList;
}

module.exports = {
    createTitle,
    addDescription,
    addTableOfContents,
    addInstallInstructions,
    addUsage,
    addContributors,
    addLicense,
    addTestInstructions,
    addQuestions,
    addHeading,
    addImage,
    addLink,
    md,
    bash,
    bold,
    italic,
    italicBold,
    addRule,
    addList,
    addOrderedList
};
