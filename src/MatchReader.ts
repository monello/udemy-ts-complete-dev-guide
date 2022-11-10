import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    constructor(public reader: DataReader) { }


    //     .map((row: string[]): MatchData => {
    //     return [
    //         dateStringToDate(row[0]),
    //         row[1],
    //         row[2],
    //         +row[3],
    //         +row[4],
    //         row[5] as MatchResult,
    //         row[6]
    //     ];
    // });
}
