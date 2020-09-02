import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([100, -100, 10, 50, 3, 2, -4, 6, 45, -4, -5, 0, -60]);
console.log(`... Initial Array: ${numbers.data}`);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(`...Final Array: ${numbers.data}`);

const unSorted = new CharactersCollection('zXxassdWQccbsrZZzzYWWwXfdsSWwejgdDFGghhrRRrRHGmgmuiuioPPPGHJmm');
console.log(`...Initial Array: ${unSorted.data}`);
const sorter2 = new Sorter(unSorted);
sorter2.sort();
console.log(`...Final Array: ${unSorted.data}`);

const linkedList = new LinkedList();
linkedList.add(1000);
linkedList.add(101);
linkedList.add(33);
linkedList.add(10);
linkedList.add(2);
linkedList.add(4);
linkedList.add(6);
linkedList.add(93);
linkedList.add(3);
linkedList.add(4);
linkedList.add(23);
linkedList.add(14);
linkedList.add(22);
linkedList.add(2);
linkedList.add(6);
linkedList.add(3);
linkedList.print();
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
