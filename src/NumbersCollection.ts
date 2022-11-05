export class NumbersCollection {
    constructor(public data: number[]) { }

    // compare to adjacent elements to see if the left is greater than the right
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
}
