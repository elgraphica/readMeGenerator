//function to generate markdown

function generateMarkdown(response) {
  return `
# ${response.title}

${response.license === 'MIT' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' : ''}

## Description

${response.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

This project is covered under the ${response.license} license.

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

If you have any questions about the project, you can reach me through my [GitHub profile](https://github.com/${response.username}) or email me at ${response.email}.
`;
}

module.exports = generateMarkdown;
