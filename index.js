#!/usr/bin/env node

const { exec } = require("child_process");
const fs = require("fs");

const inputFile = process.argv[2];
const rootValue = parseFloat(process.argv[3]) || 16;

if (!inputFile) {
  console.error("Usage: node index.js <input-file> [root-value]");
  process.exit(1);
}

// Update the root value dynamically in postcss.config.js
const configContent = `
module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: ${rootValue},
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        }
    }
};
`;
fs.writeFileSync("postcss.config.js", configContent);

// Run the postcss-cli command to process the CSS file
exec(`npx postcss ${inputFile} --replace`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  } else {
    console.log(`Conversion complete! File ${inputFile} has been updated.`);
  }
});
