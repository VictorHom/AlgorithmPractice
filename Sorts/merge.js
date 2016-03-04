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
				return listB.concat(listA);
			} else {
				return listA.concat(listB);
			}
		} else {
			// order does not matter because one is empty
			return listA.concat(listB);
		}
	} else {
		let result = []
		if (listA.length >= 1) {
			result = result.concat(mergeSort(listA));
		}
		if (listB.length >= 1) {
			result = result.concat(mergeSort(listB));
		}
		return result;
	}
	// else {
	// 	return 
	// }

}

export const mergeSort = (list) => {
	let splitUp = split(list); 
	var final = merge(splitUp[0], splitUp[1]);
	console.log(final);
	return final;
}
//split to smallest parts
//combine 
// merge sort is made up of a merge piece and a sort piece
