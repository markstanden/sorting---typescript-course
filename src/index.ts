class Sorter {
  constructor(public collection: number[] | string[]) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - (1 + i); j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  swap(indexA: number, indexB: number): void {
    if (this.collection instanceof Array) {
      const initialA = this.collection[indexA];
      const initialB = this.collection[indexB];
      this.collection[indexA] = initialB;
      this.collection[indexB] = initialA;
    }
  }
}

// const unSorted = [100, -100, 10, 50, 3, 2, -4, 6, 45, -4, -5, 0, -60];
const unSorted = ['a', 'v', 'S', 'd', 'e', 'X', 'Q'];
const sorter = new Sorter([...unSorted]);
sorter.sort();
console.log(`...
Initial Array: ${unSorted}
...
Sorted Array: ${sorter.collection}
...`);
