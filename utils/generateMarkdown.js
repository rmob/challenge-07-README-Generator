// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

    let info

    if (data.license == 'Apache') {
        info = 'Apache'
    } else if (data.license == 'GNU'){
        info = 'GNU'
    } else if (data.license == 'MIT') {
        info = 'MIT'
    } else if (data.license == 'Creative Commons') {
        info = 'CreativeCommons'
    } else {
        return ''
    }

   return '![license](https://img.shields.io/badge/license-' + info + '-blue?style=plastic&logo=appveyor)\n'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const Apache = `Copyright 2023 

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        (http://www.apache.org/licenses/LICENSE-2.0)
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`

const GNU = `Copyright (C) 2023  

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see (https://www.gnu.org/licenses/).`

const MIT = `Copyright © 2023 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

const CreativeCommons = `You are free to:
Share — copy and redistribute the material in any medium or format
Adapt — remix, transform, and build upon the material
for any purpose, even commercially.
This license is acceptable for Free Cultural Works.
The licensor cannot revoke these freedoms as long as you follow the license terms.`
// let info

function renderLicenseSection(data) {

    let info

    if (data.license == 'Apache') {
        info =  Apache
    } else if (data.license == 'GNU'){
        info = GNU
    } else if (data.license == 'MIT') {
        info = MIT
    } else if (data.license == 'Creative Commons') {
        info = CreativeCommons
    } else {
        return ''
    }

   return info
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   
return `

## Installation
${data.install}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Testing
${data.test}

## License
The ${data.license} License

${renderLicenseLink(data)}\n
${renderLicenseSection(data)}


## Questions
### Github: [${data.github}](https://github.com/${data.github}/)
### Email: [${data.email}](mailto:${data.email})
`;


}

module.exports = generateMarkdown