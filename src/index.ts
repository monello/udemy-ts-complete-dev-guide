import fs from 'fs';

const matches = fs.
    readFileSync('football.csv', {
        // The 'encoding' setting tells fs what kind of file we are trying to read, by telling it the encoding of the file content.
        // In this case text encoded as "utf-8"
        encoding: 'utf-8',
    })
    // Split the full-file string by newline characters to get an array of comma-separated line
    .split('\n')
    // Iterate over each line and split by comma to return an array of strings, with each column in its own element
    // (the Typing below is redundant as TS is perfectly able to infer the types, but it's added here for clarity)
    .map((row: string): string[] => row.split(','));

console.log(matches);
