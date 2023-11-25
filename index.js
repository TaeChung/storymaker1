const inquirer = require('inquirer');
const fs = require('fs');

function generateREADME(answers) {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Usage
  ${answers.usage}

  ## License
  This application is covered  under the ${answers.liicense} license.

  ## Contributing
  ${answers.contributing}

  `;
}



inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What would you like your title to be??',
    },
    {
      type: 'input',
      name: 'location',
      message: 'where is your location?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });