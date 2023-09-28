const fs = require('fs');
const path = require('path');

let concatenatedContent = '';

const readDir = (dir) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);

    if (stats.isDirectory()) {
      readDir(filepath);
    } else if (stats.isFile()) {
      const content = fs.readFileSync(filepath, 'utf8');
      concatenatedContent += `// File: ${filepath}\n${content}\n\n`;
    }
  });
};

const writeConcatenatedFile = () => {
  fs.writeFileSync('srcConcatenated.txt', concatenatedContent, 'utf8');
  console.log('Successfully concatenated all files in src folder into srcConcatenated.txt');
};

// Start reading from the 'src' folder
readDir('src');

// Write the concatenated content to a file
writeConcatenatedFile();
