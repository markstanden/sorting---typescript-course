import { Sorter } from './Sorter';
export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const left: string = this.data[leftIndex].toLowerCase();
    const right: string = this.data[rightIndex].toLowerCase();
    return left > right;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // turn string into array to allow index replacement (strings do not allow this)
    const letters: string[] = this.data.split('');

    const tempLetter: string = letters[leftIndex];
    letters[leftIndex] = letters[rightIndex];
    letters[rightIndex] = tempLetter;

    // turn array back into a string.
    this.data = letters.join('');
  }
}
