const fs = require('fs');

const fonts = './fonts/';

fs.readdir(fonts, (err, files) => {
  const cleanedFiles = files.map(font => {
    return font.slice(0, -4);
  });
  fs.writeFile('fonts.txt', cleanedFiles, () => {
    console.log('done');
  });
});
