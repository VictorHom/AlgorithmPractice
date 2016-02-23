(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var insertionSort = exports.insertionSort = function insertionSort(arrNumbers) {
	console.log("insertionSort");
};

},{}],2:[function(require,module,exports){
'use strict';

var _insertion = require('./Sorts/insertion');

// import fs from 'fs';
var fs = require('fs');

console.log(_insertion.insertionSort);
var resolve = function resolve() {};
var reject = function reject() {};

var readFile = new Promise(resolve, reject);
fs.readFile("./package.json", function (err, data) {
	console.log(data.toString());
});

},{"./Sorts/insertion":1,"fs":3}],3:[function(require,module,exports){

},{}]},{},[2]);
