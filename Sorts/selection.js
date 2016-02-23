const swap = (indexA, indexB, arrNumbers) => {
	// The usual swap
	/**
	let temp = arrNumbers[indexA];
	arrNumbers[indexA] = arrNumbers[indexB];
	arrNumbers[indexB] = temp;
	*/

	// ES6 way with destructuring!
	[ arrNumbers[indexA] ,  arrNumbers[indexB] ] = [ arrNumbers[indexB] ,  arrNumbers[indexA] ];
}