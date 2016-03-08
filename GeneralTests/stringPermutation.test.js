let expect = require('chai').expect;
import {stringPermutation} from '../General/stringPermutation.js';

// to have members ignores order
describe('this is testing string permutation', () => {
	it ('should give permutatation of str parameter with subsequences', () => {
		expect(stringPermutation("abc")).to.have.members([' ',
		  'a ',
		  'b ',
		  'ba ',
		  'ab ',
		  'c ',
		  'ca ',
		  'ac ',
		  'cb ',
		  'bc ',
		  'cba ',
		  'bca ',
		  'bac ',
		  'cab ',
		  'abc ',
		  'acb '
		   ]);
	});
});

describe('this is testing string permutation', () => {
	it ('should give permutatation of str parameter with subsequences', () => {
		expect(stringPermutation("")).to.have.members([' ']);
	});
});