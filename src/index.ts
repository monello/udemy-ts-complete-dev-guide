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


// console.log(`Man United won ${manUnitedWins} games`);
