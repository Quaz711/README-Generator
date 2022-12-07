// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge = ''; //Creates the variable licenseBadge with empty string
  let licenseChoice = `${license}`; //Takes the license array and stores it to a string for comparison
  if (licenseChoice === 'GNU AGPLv3') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'GNUAGPLv3';
  }

  else if (licenseChoice === 'GNU GPLv3') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'GNUGPLv3';
  }

  else if (licenseChoice === 'GNU LGPLv3') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'GNULGPLv3';
  }

  else if (licenseChoice === 'Mozilla Public License 2.0') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'MozillaPublicLicense2.0';
  }

  else if (licenseChoice === 'Apache License 2.0') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'ApacheLicense2.0';
  }

  else if (licenseChoice === 'MIT License') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'MITLicense';
  }

  else if (licenseChoice === 'Boost Software License 1.0') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'BoostSoftwareLicense1.0';
  }

  else if (licenseChoice === 'The Unlicense') { //Checks to see if the licenseChoice is the same as its check and eliminates any spaces for the badge link
    licenseChoice = 'TheUnlicense';
  }

  else {
    licenseChoice = ''; //None was chosen by user or nothing was entered
  }

  licenseBadge = `![badge](https://img.shields.io/badge/license-${licenseChoice}-orange)`; //Assigned the licenseBadge a link
  return licenseBadge; //Returns that link
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  let licenseChoice = `${license}`; //Takes the license array and stores it to a string for comparison
  let licenseLink = ''; //Creates the variable licenseLink with empty string
  if (licenseChoice === 'GNU AGPLv3') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  }

  else if (licenseChoice === 'GNU GPLv3') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  }

  else if (licenseChoice === 'GNU LGPLv3') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  }

  else if (licenseChoice === 'Mozilla Public License 2.0') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  }

  else if (licenseChoice === 'Apache License 2.0') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  }

  else if (licenseChoice === 'MIT License') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  }

  else if (licenseChoice === 'Boost Software License 1.0') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  }

  else if (licenseChoice === 'The Unlicense') { //Checks to see if the licenseChoice is the same as its check and stores the license link to licenseLink
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  }
  
  else {
    licenseLink = ''; //None was chosen by user or nothing was entered
  }

  return licenseLink; //Returns that link
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  let licenseSection = `License: ${license}`; //Takes the license array and stores it to a string for returning
  return licenseSection; //Returns the selected license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.license.length === 0) { //Checks to see if user did not select a license choice and changes the array to have None instead of it being empty
    data.license = 'None';
  }
  
  if (!data.installation) { //Checks to see if user did not want to leave installation instructions and changes the array to have None instead of it being empty
    data.installation = 'None';
  }

  if (!data.usage) { //Checks to see if user did not want to leave usuage instructions and changes the array to have None instead of it being empty
    data.usage = 'None';
  }

  if (!data.contributing) { //Checks to see if user did not want to leave contributing instructions and changes the array to have None instead of it being empty
    data.contributing = 'None';
  }

  if (!data.tests) { //Checks to see if user did not want to leave testing instructions and changes the array to have None instead of it being empty
    data.tests = 'None';
  }
  //This returns the entire markdown file with all data needed and answers by user in a professional format
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

module.exports = generateMarkdown; //Exports this file to be utilized in other files