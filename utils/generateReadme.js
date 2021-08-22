function createTitle(title) {
    return `# ${title}\n`;
}

function addLicense(license) {
    //TODO: Add License Badge
}

function addDescription(description, headingLevel = 2) {
    let finalDescription = "";

    finalDescription += addHeading('Description:\n', headingLevel);
    finalDescription += addRule();
    finalDescription += description + "\n"

    return finalDescription;
}

function addTableOfContents() {
    //TODO: Add Table of Contents
}

function addInstructions(instructions, headingLevel = 2) {
    let finalInstructions = "";

    finalInstructions += addHeading('Instructions:\n', headingLevel)
    finalInstructions += addRule();
    finalInstructions += instructions + "\n"

    return finalInstructions;
}

function addUsage(usage, headingLevel = 2) {
    let finalUsage = "";

    finalUsage += addHeading('Usage:\n', headingLevel)
    finalUsage += addRule();
    finalUsage += usage + "\n"

    return finalUsage;
}

function addContributors(contributorsList, headingLevel = 2) {
    let finalContributors = "";

    finalContributors += addHeading('Contributors:\n', headingLevel)
    finalContributors += addRule();
    finalContributors += addList(contributorsList)

    return finalContributors;
}

function addHeading(text, level) {
    let head = '\n';

    for (let i = 0; i < level; i++) {
        head += '#';
    }

    head += " "
    head += text;
    head += '\n'

    return head;
}

function addImage(alt, src) {
    return `![${alt}](${src})\n`;
}

function addLink(alt, src) {
    return `[${alt}(${src})]\n`;
}

function md(text) {
    return `\`\`\`md\n${text}\n\`\`\`\n`
}

function bash(text) {
    return `\`\`\`bash\n${text}\n\`\`\`\n`
}

function bold(text) {
    return `**${text}**`;
}

function italic(text) {
    return `_${text}_`;
}

function italicBold(text) {
    return `***${text}***`
}

function addRule() {
    return '---\n';
}

function addList(list) {
    let markupList = "";

    list.forEach(listItem => {
        markupList += `- ${listItem.trim()}\n`
    })

    return markupList;
}

function addOrderedList(oList) {
    let orderedList = "";

    oList.forEach(listItem, index => {
        orderedList = `${index}. ${listItem.trim()}\n`
    })

    return orderedList;
}

module.exports = {
    createTitle,
    addDescription,
    addInstructions,
    addUsage,
    addContributors,
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
