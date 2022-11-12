import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalyzer } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// 1. Create an object that satisfies the 'DataReader' interfacs
const csvFileReader = new CsvFileReader('football.csv');

// 2. Create an instance of the 'MatchReader' class and pass in something
//    satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
// 3. Load (and transform) the data
matchReader.load();

// 4. Initialize the Analyser and Reporter
const summary = new Summary(
    new WinsAnalyzer('Man United'),
    new ConsoleReport()
);
// 5. Produce the report from the extracted data
summary.buildAndPrintReport(matchReader.matches);
