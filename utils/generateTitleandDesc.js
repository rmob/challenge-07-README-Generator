function generateTitleandDesc (data) {
    return `# ${data.title}
  
## Project Description
${data.description}\n \n`

}

module.exports = generateTitleandDesc