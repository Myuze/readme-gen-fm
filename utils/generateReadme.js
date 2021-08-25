function createTitle(title) {
    return `# ${title}\n`;
}

function addLicense(license) {
    //TODO: Add License Badge
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
    let sectionTitle = 'Table of Contents'
    let finalTableOfContents = "";
    console.log('orderedContentList: ', orderedContentList)
    finalTableOfContents += addHeading(sectionTitle + ':', headingLevel);
    finalTableOfContents += addRule();
    finalTableOfContents += createTableOfContents(orderedContentList);

    return finalTableOfContents;
}

function createTableOfContents(orderedContentList) {
    let tableOfContents = "";
    orderedContentList.forEach((section, index) => {
        console.log('section: ', section)
        let section_name = section.split(' ').join('-');
        tableOfContents += `${index + 1}. `;
        tableOfContents += addLink(section_name, `#${section_name}`);
    });

    return tableOfContents;
}

function addInstructions(instructions, headingLevel = 2) {
    let sectionTitle = 'Instructions';
    let finalInstructions = "";

    finalInstructions += addHeading(sectionTitle + ':', headingLevel)
    finalInstructions += addRule();
    finalInstructions += instructions + "\n";

    return finalInstructions;
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
    let sectionTitle = 'Contributors'
    let finalContributors = "";

    finalContributors += addHeading(sectionTitle + ':', headingLevel)
    finalContributors += addRule();
    finalContributors += addList(contributorsList);

    return finalContributors;
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
