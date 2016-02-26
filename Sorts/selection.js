const swap = (indexA, indexB, arrNumbers) => {
	// The usual swap
	/**
	let temp = arrNumbers[indexA];
	arrNumbers[indexA] = arrNumbers[indexB];
	arrNumbers[indexB] = temp;
	*/

	// ES6 way with destructuring!
	// How neat is that? That's pretty neat! 
	//https://www.youtube.com/watch?v=Hm3JodBR-vs&ab_channel=vicscrappyvideos
	[ arrNumbers[indexA] ,  arrNumbers[indexB] ] = [ arrNumbers[indexB] ,  arrNumbers[indexA] ];
};

export const selectionSort = (list) => {
	for (let i = 0; i < list.length; i++) {
		let currValue = list[i];
		let index = i;
		for (let j = i + 1; j < list.length; j++) {
			if (list[j] < currValue) {
				currValue = list[j];
				index = j;
			}
		}
		// some lower value exists, so swap
		if (index !== i){
			swap(index, i, list);
			i = i - 1;
		}
	}
	return list;
}