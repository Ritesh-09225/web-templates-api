const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'templates_data');
const outputFile = path.join(__dirname, 'templates.json');

const files = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));

let allTemplates = [];

for (const file of files) {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    allTemplates = allTemplates.concat(data);
  }
}

fs.writeFileSync(outputFile, JSON.stringify(allTemplates, null, 2));
console.log(`Merged ${allTemplates.length} templates into templates.json`);
