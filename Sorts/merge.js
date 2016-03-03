const split = (list) => {
	let midPoint = Math.floor(list.length / 2);
	let leftArray = list.slice(0 , midPoint);
	let rightArray = list.slice(midPoint, list.length);
	return [leftArray, rightArray];
}

const merge = (listA, listB) => {
}

const mergeSort = (list) => {
	let splitUp = split(list);
	merge(splitUp[0], splitUp[1]);
}
//split to smallest parts
//combine 
// merge sort is made up of a merge piece and a sort piece
