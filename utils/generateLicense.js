// Array of available Licenses
const availableLicenses = [
  {
    license: 'mit',
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
    short: `**MIT License**\nCopyright &#169; <YEAR> <NAME>`
  },
  {
    license: 'apache-2.0',
    badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
    short: `**Apache License Version 2.0**, January 2004\nhttp://www.apache.org/licenses/`
  },
  {
    license: 'gpl-3.0',
    badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0",
    short: `**GNU AFFERO GENERAL PUBLIC LICENSE**\nVersion 3, 19 November 2007`
  },
  {
    license: 'MPL-2.0',
    badge: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0",
    short: `**Mozilla Public License Version 2.0**`
  },
  {
    license: 'EPL-1.0',
    badge: "https://img.shields.io/badge/License-EPL%201.0-red.svg",
    link: "https://opensource.org/licenses/EPL-1.0",
    short: `**Eclipse Public License - v 2.0**\nTHE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE\nPUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION\nOF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
  },
];
  
// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  availableLicenses.forEach(licenseInfo => {
    if (licenseInfo.license === license) {
      badge = `[![License](${licenseInfo.badge})](${licenseInfo.link})\n`;
    } else { return; };
  });

  return badge;
};

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var badgeLink = "";
  availableLicenses.forEach(licenseInfo => {
    if (licenseInfo.license === license) {
      badgeLink = `${licenseInfo.short}\n`;
    } else { return; };
  });

  return badgeLink;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
};
