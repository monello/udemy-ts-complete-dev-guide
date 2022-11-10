import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// 1. Create an object that satisfies the 'DataReader' interfacs
const csvFileReader = new CsvFileReader('football.csv');

// 2. Create an instance of the 'MatchReader' class and pass in something
//    satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
// 3. Load (and transform) the data
matchReader.load();

// Some basic data analysis
let manUnitedWins = 0;

// 4. Update the reference from where to get the data to report on
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
