/**
	The idea is that for each value of the array that you are on,
	you compare all the 'previous' values (those with a lower index)
	you store the current value and look at the previous values
	if the previous value is greater, then you shift them over
	and fit the current number where the left side is less than the current number
	and the right side is greater than the current number
*/
export const insertionSort = (arrNumbers) => {
	let arrLength = arrNumbers.length;
	for (let i = 1; i < arrLength; i++) {
		let keyValue = arrNumbers[i];
		let prevIndex = i - 1;
		while (prevIndex > 0 && arrNumbers[prevIndex] > keyValue) {
			//swap(prevIndex, i, arrNumbers);
			arrNumbers[prevIndex + 1] = arrNumbers[prevIndex];
			prevIndex--;
		}
		arrNumbers[prevIndex + 1] = key;
	}
};
