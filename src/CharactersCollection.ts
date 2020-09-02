export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const left: string = this.data[leftIndex].toLowerCase();
    const right: string = this.data[rightIndex].toLowerCase();
    return left > right;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const letters: string[] = this.data.split('');

    const tempLetter: string = letters[leftIndex];
    letters[leftIndex] = letters[rightIndex];
    letters[rightIndex] = tempLetter;
    this.data = letters.join('');
  }
}
