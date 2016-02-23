// import fs from 'fs';
const fs = require('fs');
import { insertionSort } from './Sorts/insertion';
console.log(insertionSort);
const resolve = () => {};
const reject = () => {};

var readFile = new Promise(resolve, reject);
fs.readFile("./package.json", (err, data) => {
	console.log(data.toString());
})