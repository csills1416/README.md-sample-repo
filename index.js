const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the steps required to use your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the steps required to contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the steps required to test your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["Apache", "GNU", "ISC", "MIT", "Mozilla"],
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?",
  },
];

function generateReadme(answers) {
  const readmeContent = `
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

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any additional questions, please contact:
GitHub: [${answers.GitHub}](https://github.com/${answers.GitHub})
Email: ${answers.email}
`;

  return readmeContent;
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README-Sample.md", generateMarkdown(data));
  });
}

function generateMarkdown(data) {
  return generateReadme(data);
}

init();
