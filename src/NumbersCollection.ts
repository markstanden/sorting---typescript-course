export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number = leftIndex + 1): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  /** Swaps the values of the .data array at given indices */
  swap(leftIndex: number, rightIndex: number = leftIndex + 1): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
