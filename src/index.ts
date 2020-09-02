import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

//const numbers = new NumbersCollection([100, -100, 10, 50, 3, 2, -4, 6, 45, -4, -5, 0, -60]);
const unSorted = new CharactersCollection('zxassdWQccbsrGmgmuiuioPPPGHJmm');

console.log(`...
Initial Array: ${unSorted.data}`);

const sorter = new Sorter(unSorted);
sorter.sort();

console.log(`...
Final Array: ${unSorted.data}`);
