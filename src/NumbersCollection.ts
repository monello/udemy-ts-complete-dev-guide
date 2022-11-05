export class NumbersCollection {
    constructor(public data: number[]) { }

    // I'm not sure why the lecturer didn't just do the following instead of the getter/accessor below.
    // Is an access better practice, or was it just for educational purposes (he didn't say)
    // length: number = this.data.length;

    // when adding the "get" keyword in front of a class method you are creating an accessor,
    // more specifically a getter.
    // As far as I know the puspose of this you normally be to give other classes controlled
    // access to private and protected properties and to give the external classes a way to
    // access a complex property with a simple propery notation: objectName.property instead
    // of objectName/property()
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
