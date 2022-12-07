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
      
      else { //Tells the user to enter something as nothing was detected
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
      
      else { //Tells the user to enter something as nothing was detected
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
      if (confirmInstallation) { //Checks to make sure confirmInstallation is true and lets user input information about it
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
    message: 'Please list instructions for using your application.',
    when: ({ confirmUsage }) => { //Checks to make sure confirmUsage is true and lets user input information about it
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
    when: ({ confirmContribution }) => { //Checks to make sure confirmContribution is true and lets user input information about it
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
    when: ({ testConfirm }) => { //Checks to make sure testConfirm is true and lets user input information about it
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
      
      else { //Tells the user to enter something as nothing was detected
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
      
      else { //Tells the user to enter something as nothing was detected
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
      if (err) { //If there is errors then it throws back the errors to let the user know so they can fix whatever they didn't enter correctly
        reject(err);
        return;
      }

      resolve({ ok: true, message: 'README Created!' }); //If there is no errors then it creates the README.md file
    });
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await questions(); //Awaits for all the questions to be answered from the user
    writeToFile('README.md', generateMarkdown(answers)); //Goes to the writeToFile function when all answers have been answered
  }
  
  catch (err) { //Catches any errors and console.logs them for the user so they understand what is happening
    console.log(err);
  }
};

// Function call to initialize app
init();