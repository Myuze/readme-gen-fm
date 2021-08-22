function createTitle(title) {
    return `### ${title}\n`;
}

function addHeading(text, level) {
    let head = '';

    for (i = 0; i < level; i++) {
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

module.exports = generateReadme;