interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  /** Compares two values and returns true if the value of leftIndex is greater than the value of rightIndex */
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  /** Swaps the value stored at leftIndex with the value stored at rightIndex */
  abstract swap(leftIndex: number, rightIndex: number): void;
  /** The total length of the collection to be sorted */
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - (1 + i); j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
