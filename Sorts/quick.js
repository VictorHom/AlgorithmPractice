
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns a split up array
const pivotSort = (arr, pivotIndex) => {
	let lessThanEqualPivot = [];
	let greaterThanPivot = [];
	let pivotValue = arr[pivotIndex];

	return arr.reduce((accumulator,elem)=> {
		if (elem <= pivotValue) accumulator[0].push(elem);
		else accumulator[1].push(elem);
		return accumulator;
	}, [lessThanEqualPivot, greaterThanPivot]);
}

const conquer = (arr) => {
	if (arr.length <= 1) return arr;
	return quickSort(arr);
}

export const quickSort = (arr) => {
	let pivotIndex = getRandomIntInclusive(0, arr.length);
	let dividedArr = pivotSort(arr, pivotIndex);
	return [...conquer(dividedArr[0]), ...conquer(dividedArr[1])];

}