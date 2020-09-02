import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

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
