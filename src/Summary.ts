import { MatchData } from "./MatchData";

/*
    NOTE:
    Here we export the interfaces, because we want to specifically implement it in other classes to get some additional TypeScript support.
    Explicitly "implementing" the interfaces on class definitions is totally optiona;, because TS will automatically (implictly) make sure these
        classes comply with these interfaces when we try and use them where the interfaces are applicable.
    The benefit of implementing the interface explicitly on a class definition ensures we make this class comply with the interface at
        the of coding it up.
*/

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

// So here we see the whole KEY TO UNDERSTANING object composition:
// We pass in REFERENCES to the objects that contain the specific logic as ARGUMENTS to this class. See the arguments to the constructor()
// This will allow us to call theit methods on these object instances (DELEGATION)
export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
