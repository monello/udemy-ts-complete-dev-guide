import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

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

    swap(leftIndex: number, rightIndex: number): void {
        // strings are an immutable data type, so we cannot swop characters i=on the string itself
        // a workaround is to split the string int an array of characters, do the swapping there
        // then join the array of characters back into a string and ovberride the original string
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
}
