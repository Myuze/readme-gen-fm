const availableLicenses = [
  {
    license: 'mit',
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
    short: `MIT License
    Copyright (c) <YEAR> <NAME>`
  },
  {
    license: 'apache 2.0',
    badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
    short: `Apache License
    Version 2.0, January 2004
    http://www.apache.org/licenses/`
  },
  {
    license: 'gpl-3.0',
    badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0",
    short: `GNU AFFERO GENERAL PUBLIC LICENSE
    Version 3, 19 November 2007`
  },
  {
    license: 'MPL-2.0',
    badge: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0",
    short: `Mozilla Public License Version 2.0`
  },
  {
    license: 'EPL-1.0',
    badge: "https://img.shields.io/badge/License-EPL%201.0-red.svg",
    link: "https://opensource.org/licenses/EPL-1.0",
    short: `Eclipse Public License - v 2.0
    THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE
    PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION
    OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
  },
];
  
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  availableLicenses.forEach(licenseInfo => {
    if (licenseInfo.license === license) {
      return `[![License](${licenseInfo.badge})](${licenseInfo.link})`;
    };
  });
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  availableLicenses.forEach(licenseInfo => {
    if (licenseInfo.license === license) {
      return `${licenseInfo.short}`;
    };
  });
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
