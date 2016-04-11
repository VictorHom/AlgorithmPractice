// merge sort has  an average and worst case of O(n log n)

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
