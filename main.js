// import fs from 'fs';
const fs = require('fs');
import { insertionSort } from './Sorts/insertion';
// console.log(insertionSort);

/** PART OF GIVEN TEMPLATE
const resolve = () => {};
const reject = () => {};
var readFile = new Promise(resolve, reject);
fs.readFile("./package.json", (err, data) => {
	//console.log(data.toString());
})
*/

// use mocha and chai
// CREATE TEST CASES with assertions and tests
let cases = [
	[],
	[1],
	[1, 2],
	[9, 3],
	[1, 2, 3],
	[1, 4, 6, 3],
	[6, 4, 3, 2, 1]
];

cases.forEach( (arr) => {
	console.log(insertionSort(arr));
})

