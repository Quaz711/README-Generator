// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  
  let licenseChoice = `${license}`;
  if (licenseChoice === 'GNU AGPLv3') {
    licenseChoice = 'GNUAGPLv3';
  }

  else if (licenseChoice === 'GNU GPLv3') {
    licenseChoice = 'GNUGPLv3';
  }

  else if (licenseChoice === 'GNU LGPLv3') {
    licenseChoice = 'GNULGPLv3';
  }

  else if (licenseChoice === 'Mozilla Public License 2.0') {
    licenseChoice = 'MozillaPublicLicense2.0';
  }

  else if (licenseChoice === 'Apache License 2.0') {
    licenseChoice = 'ApacheLicense2.0';
  }

  else if (licenseChoice === 'MIT License') {
    licenseChoice = 'MITLicense';
  }

  else if (licenseChoice === 'Boost Software License 1.0') {
    licenseChoice = 'BoostSoftwareLicense1.0';
  }

  else if (licenseChoice === 'The Unlicense') {
    licenseChoice = 'TheUnlicense';
  }

  else {
    licenseChoice = '';
  }

  licenseBadge = `![badge](https://img.shields.io/badge/license-${licenseChoice}-orange)`;
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseChoice = `${license}`;
  let licenseLink = '';
  if (licenseChoice === 'GNU AGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  }

  else if (licenseChoice === 'GNU GPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  }

  else if (licenseChoice === 'GNU LGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  }

  else if (licenseChoice === 'Mozilla Public License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  }

  else if (licenseChoice === 'Apache License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  }

  else if (licenseChoice === 'MIT License') {
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  }

  else if (licenseChoice === 'Boost Software License 1.0') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  }

  else if (licenseChoice === 'The Unlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  }
  
  else {
    licenseLink = '';
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = `License: ${license}`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.license.length === 0) {
    data.license = 'None';
  }
  
  if (!data.installation) {
    data.installation = 'None';
  }

  if (!data.usage) {
    data.usage = 'None';
  }

  if (!data.contributing) {
    data.contributing = 'None';
  }

  if (!data.tests) {
    data.tests = 'None';
  }

  return `# ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ###  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contributing)
  - [Testing](#tests)
  - [License](#license)
  - [Questions?](#questions)
    
  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contributing:
  ${data.contributing}

  ## Tests:
  ${data.tests}

  ## Questions?:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
  - Additional: ${data.additional}`;
}

module.exports = generateMarkdown;