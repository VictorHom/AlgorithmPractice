// merge sort has  an average and worst case of O(n log n)
// O(n) for space complexity
const split = (list) => {
	let midPoint = Math.floor(list.length / 2);
	let leftArray = list.slice(0 , midPoint);
	let rightArray = list.slice(midPoint, list.length);
	return [leftArray, rightArray];
}

const merge = (listA, listB) => {
	// do merge sort in here if it doesn't work
	if (listA.length <= 1 || listB.length <= 1) {
		if (listA.length === 1 && listB.length === 1) {
			if (listA[0] > listB[0]) {
				return [...listB,...listA];
			} else {
				return [...listA, ...listB];
			}
		} else {
			// order does not matter because one is empty
			return [...listA,...listB];
		}
	} else {
		let result = []
		if (listA.length >= 1) {
			result = [...result, ...mergeSort(listA)];
		}
		if (listB.length >= 1) {
			result = [...result, ...mergeSort(listB)];
		}
		return result;
	}
}

export const mergeSort = (list) => {
	let splitUp = split(list);
	return merge(splitUp[0], splitUp[1]);
}
//split to smallest parts
//combine
// merge sort is made up of a merge piece and a sort piece
// I think the version below looks better for reading
//https://github.com/nzakas/computer-science-in-javascript/blob/master/algorithms/sorting/merge-sort-recursive/merge-sort-recursive.js


// writing merge sorting cold
// on 4/11/2016

const sort = (arr) => {
	if(arr.length <= 2) {
		if (arr.length <= 1) {
			return arr;
		} else if (arr.length === 2) {
			let val1 = arr[0];
			let val2 = arr[1];
			if (val1 < val2) return arr;
			return [val2, val1];
		}
	}
	return mergeSort(arr);
}

const merge = (arrA, arrB) => {
	let indexA = 0;
	let indexB = 0;
	let finalArr = [];
	while (indexA < arrA.length && indexB < arrB.length) {
		if (arrA[indexA] < arrB[indexB]) {
			finalArr.push(arrA[indexA]);
			indexA += 1;
		} else {
			finalArr.push(arrB[indexB]);
			indexB += 1
		}
	}

	if (indexA === arrA.length) return finalArr.concat(arrB.slice(indexB));
	if (indexB === arrB.length) return finalArr.concat(arrA.slice(indexA));
}


const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let midIndex = Math.floor(arr.length / 2);
	let lowerHalf = sort(arr.slice(0, midIndex));
	let upperHalf = sort(arr.slice(midIndex));
	return  merge(lowerHalf, upperHalf);
}
////// end
