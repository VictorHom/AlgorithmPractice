(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	The idea is that for each value of the array that you are on,
	you compare all the 'previous' values (those with a lower index)
	you store the current value and look at the previous values
	if the previous value is greater, then you shift them over
	and fit the current number where the left side is less than the current number
	and the right side is greater than the current number
*/
var insertionSort = exports.insertionSort = function insertionSort(arrNumbers) {
	var arrLength = arrNumbers.length;
	for (var i = 1; i < arrLength; i++) {
		var keyValue = arrNumbers[i];
		var prevIndex = i - 1;
		while (prevIndex >= 0 && arrNumbers[prevIndex] > keyValue) {
			//swap(prevIndex, i, arrNumbers);
			arrNumbers[prevIndex + 1] = arrNumbers[prevIndex];
			prevIndex--;
		}
		arrNumbers[prevIndex + 1] = keyValue;
	}
	return arrNumbers;
};

},{}],2:[function(require,module,exports){
'use strict';

var _insertion = require('./Sorts/insertion');

// import fs from 'fs';
var fs = require('fs');

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
var cases = [[], [1], [1, 2], [9, 3], [1, 2, 3], [1, 4, 6, 3], [6, 4, 3, 2, 1]];

cases.forEach(function (arr) {
	console.log((0, _insertion.insertionSort)(arr));
});

},{"./Sorts/insertion":1,"fs":3}],3:[function(require,module,exports){

},{}]},{},[2]);
