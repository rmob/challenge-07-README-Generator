function getLicenseMarkdown(data) {
    `## License
${data.license}


![license](https://img.shields.io/badge/license-${data.license}-blue?style=plastic&logo=appveyor)`
}