export class CharactersCollection {
    constructor(public data: string) { }

    get length(): number {
        return this.data.length;
    }

    // this function simply needs to return a boolean
    // true if the left character is alphabetically higher that the right
    // false if not
    compare(leftIndex: number, rightIndex: number): boolean {
        // the character code range of uppercase letters (characters) is lower than that of the lowercase letters
        // Seeing as all we want to know is if the left letter is alpahabetically higher than the righr (irrespective of casing)
        //   we force both letters to lowercase
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
}
