// TODO: Include packages needed for this application
const fs = require('fs'); //used to write the file to generateMarkdown
const inquirer = require('inquirer'); //used to ask the prompt questions
const generateMarkdown = require('./utils/generateMarkdown'); //links the generateMarkdown.js file

// TODO: Create an array of questions for user input
const questions = () => { //An array of detailedd questions to ask the user to generate a professional README
  return inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository? (Required)',
    validate: nameInput => {
      if (nameInput) { //Checks to see if the user entered anything and continues if they did
        return true;
      }
      
      else {
        console.log('Please enter your repository title.');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository? (Required)',
    validate: nameInput => {
      if (nameInput) { //Checks to see if the user entered anything and continues if they did
        return true;
      }
      
      else {
        console.log('Please enter a description of the repository.');
        return false;
      }
    }
  },

  {
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Is there an installation process?'
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Please list installation instructions.',
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      }
      
      else {
        return false;
      }
    }
  },

  {
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to give instructions for using your application?'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Please list instructions for using your application. It is recommended to add descriptive images later as well.',
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      }
      
      else {
        return false;
      }
    }
  },

  {
    type: 'confirm',
    name: 'confirmContribution',
    message: 'May other developers contribute to your repository?'
  },

  {
    type: 'input',
    name: 'contributing',
    message: 'Please explain how other developers may contribute to your project.',
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      }
      
      else {
        return false;
      }
    }
  },

  {
    type: 'confirm',
    name: 'testConfirm',
    message: 'Is testing available?'
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Please explain how users may test your application.',
    when: ({ testConfirm }) => {
      if (testConfirm) {
        return true;
      }
      
      else {
        return false;
      }
    }
  },

  {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['GNU AGPLv3', 'GNU GPLv3',
      'GNU LGPLv3', 'Mozilla Public License 2.0',
      'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
      'The Unlicense', 'None']
  },

  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: nameInput => {
      if (nameInput) { //Checks to see if the user entered anything and continues if they did
        return true;
      }
      
      else {
        console.log('Please enter your GitHub username.');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: nameInput => {
      if (nameInput) { //Checks to see if the user entered anything and continues if they did
        return true;
      }
      
      else {
        console.log('Please enter your email.');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'additional',
    message: 'Please list instructions for those who wish to contact you.',
    validate: (nameInput) => {
      if (nameInput) { //Checks to see if the user entered anything and continues if they did
        return true;
      }
      
      else {
        return false;
      }
    }
  }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({ ok: true, message: 'README Created!' });
    });
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await questions();
    writeToFile('README.md', generateMarkdown(answers));
  }
  
  catch (err) {
    console.log(err);
  }
};

// Function call to initialize app
init();