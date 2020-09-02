export class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    //tail is the Node 'next' property which is either the next node or null
    let tail = this.head;

    // tail.next is null, then we are at the end of the linked list and will exit the loop
    while (tail.next) {
      tail = tail.next;
    }

    // tail.next is currently pointing at null (since we exited the while loop) so instead point it at our created node
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let pointer = this.head;
    let counter = 1;

    while (pointer.next) {
      pointer = pointer.next;
      counter++;
    }
    return counter;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is Empty');
    }

    const leftValue = this.at(leftIndex).data;
    const rightValue = this.at(rightIndex).data;
    return leftValue > rightValue;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tempValue = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = tempValue;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;

    let printArray: number[] = [];

    while (node) {
      printArray.push(node.data);
      node = node.next;
    }
    console.log(printArray);
  }
}
