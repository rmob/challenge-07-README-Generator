const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const generateTitleandDesc = require('./utils/generateTitleandDesc')



// TODO: Create an array of questions for user input
const questions1 = [
   {
    type: 'input',
    message: 'What is your title?',
    name: 'title',
  },

  {
    type: 'input',
    message: 'Provide a project description',
    name: 'description',
  },

  {
    type: 'list',
    message: 'Provide a table of contents?',
    name: 'confirmation',
    choices: ['yes', 'no']
    
  },

]


const questions2 = [
  {
    type: 'input',
    message: 'Installation instructions',
    name: 'install',
  },

  {
    type: 'input',
    message: 'Usage information',
    name: 'usage',
  },

  {
    type: 'input',
    message: 'Contribution guidelines',
    name: 'contribution',
  },

  {
    type: 'input',
    message: 'Test instructions',
    name: 'test',
  },

  {
    type: 'list',
    message: 'Which license?',
    name: 'license',
    choices: ['Apache', 'GNU', 'MIT', 'CreativeCommons', 'N/A'],
  },

  {
    type: 'input',
    message: 'Github user name?',
    name: 'github'
  },

  {
    type: 'input',
    email: 'Whats your email address?',
    name: 'email'
  },



]

// write initial README.md

function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) => {
      err ? console.error(err)
      : console.log('')
    })
}


// function for appending files to README.md

function appendToFile(data) {
    fs.appendFile('README.md', data, (err) => {
        err ? console.error(err)
        : console.log('')
      })
}


// generate TOC section

function makeTOCSection() {
    inquirer.prompt({
    input: 'text',
    message: 'Name your section',
    name: 'section1'
  }).then((res) => {
    fs.appendFile('README.md', `\n- [${res.section1}](#${res.section1.toLowerCase()})`, (err) => {
        err ? console.error(err)
        : console.log('---')
        anotherSection()
  })
  
 })
 
}

// prompt to check if another section is desired

function anotherSection() {
    inquirer.prompt([{
        input: 'list',
        message: 'another section? (y/n)',
        name: 'another',
        choices: ['yes', 'no']
    }]).then(res => {
        if(res.another == 'y') {
            makeTOCSection()
        } else {
            restOfQuestions()
            
        }
        
    })
    
}


// generate markdown after TOC

function restOfQuestions() {
    inquirer.prompt(questions2)
    .then(res => {
        appendToFile(generateMarkdown(res))
    })
}

// function to initialize app

function init() {
inquirer
  .prompt(questions1)
  .then((response) => {
   
    writeToFile(generateTitleandDesc(response))
    
    if (response.confirmation == 'yes') {
        fs.appendFile('README.md', `## Table of Contents`, (err) => {
            err ? console.error(err)
            : makeTOCSection()
  })

    // makeTOCSection()
    
    
} else {
    restOfQuestions()
    
    
}


})

}


// Function call to initialize app
init()