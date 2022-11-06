import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    // The 'encoding' setting tells fs what kind of file we are trying to read, by telling it the encoding of the file content.
    // In this case text encoded as "utf-8"
    encoding: 'utf-8',
});

console.log(matches);
