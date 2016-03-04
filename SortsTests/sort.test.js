let expect = require('chai').expect;
import { insertionSort } from '../Sorts/insertion';
import { selectionSort } from '../Sorts/selection';
import { bubbleSort } from '../Sorts/bubble';
import { mergeSort } from '../Sorts/merge';
//export default


var cases = [
	[],
	[1],
	[1, 2],
	[9, 3],
	[1, 2, 3],
	[1, 4, 6, 3],
	[6, 4, 3, 2, 1],
	[5, 6, 1, 34, 2, 3, 7,8,56, 90]
];

let cases_answers = [
	[],
	[1],
	[1, 2],
	[3, 9],
	[1, 2, 3],
	[1, 3, 4, 6],
	[1, 2, 3, 4, 6], 
	[1, 2, 3, 5, 6, 7, 8, 34, 56, 90]
];

/** initial test to make sure mocha and chai work */
describe('this works', function() {
	it('should work', function() {
		expect(true).to.be.true;
	});
});

// DRY OUT THE TEST SPECS
const arrayTests = (cbFunction) =>{
	expect(cbFunction(cases[0])).to.deep.equal(cases_answers[0]);
	expect(cbFunction(cases[1])).to.deep.equal(cases_answers[1]);
	expect(cbFunction(cases[2])).to.deep.equal(cases_answers[2]);
	expect(cbFunction(cases[3])).to.deep.equal(cases_answers[3]);
	expect(cbFunction(cases[4])).to.deep.equal(cases_answers[4]);
	expect(cbFunction(cases[5])).to.deep.equal(cases_answers[5]);
	expect(cbFunction(cases[6])).to.deep.equal(cases_answers[6]);
	expect(cbFunction(cases[7])).to.deep.equal(cases_answers[7]);
}

describe('this is testing insertion sort', () => {
	it('should order the test cases', () => {
		arrayTests(insertionSort);
	});
});


describe('this is testing selection sort', () => {
	it('should order the test cases', () => {
		arrayTests(selectionSort);
	});
});

describe('this is testing bubble sort', () => {
	it('should order the test cases', () => {
		arrayTests(bubbleSort);
	});
});


describe('this is testing merge sort', () => {
	it('should order the test cases', () => {
		arrayTests(mergeSort);
	});
});