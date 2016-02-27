/**
	this sort is n^2 in runtime
	it essentially compares a pair of values and if the first value is greater
	than the next value, it makes a swap
	it keeps looping and making swaps
*/

const swap = (indexA, indexB, arrNumbers) => {
	// explanation of this swap is in selection.js. It's ES6 destructuring
	[ arrNumbers[indexA] ,  arrNumbers[indexB] ] = [ arrNumbers[indexB] ,  arrNumbers[indexA] ];
};
export const bubbleSort = (list) => {
	for (let j = 0; j < list.length; j++){
		for (let i = list.length-1; i >= j; i--) {
			if (list[i] < list[i-1]) {
				swap(i, i-1, list); 
			}
		}
	}
	return list;
};