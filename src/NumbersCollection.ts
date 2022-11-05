export class NumbersCollection {
    constructor(public data: number[]) { }

    get length(): number {
        return this.data.length;
    }

    // compare to adjacent elements to see if the left is greater than the right
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    // swap the left and right elements
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
