const availableLicenses = [
  {
    license: 'mit',
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT"
  },
  {
    license: 'apache 2.0',
    badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0"
  },
  {
    license: 'gpl-3.0',
    badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0"
  },
  {
    license: 'MPL-2.0',
    badge: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0"
  },
  {
    license: 'EPL-1.0',
    badge: "https://img.shields.io/badge/License-EPL%201.0-red.svg",
    link: "https://opensource.org/licenses/EPL-1.0"
  },

]
  
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
