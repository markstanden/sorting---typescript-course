"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbers = new NumbersCollection_1.NumbersCollection([100, -100, 10, 50, 3, 2, -4, 6, 45, -4, -5, 0, -60]);
//const unSorted = ['a', 'v', 'S', 'd', 'e', 'X', 'Q'];
console.log(`...
Initial Array: ${numbers.data}`);
const sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(`...
Final Array: ${numbers.data}`);
