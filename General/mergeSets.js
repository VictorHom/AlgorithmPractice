// you are given a list of "sets" and each set describes a range.
// the goal is to combine ranges so that they can become a bigger set
// for example [1,5] and [2,9] => [1,9]
// the list is unsorted to begin with
const combinable = (setA, setB) => {
	if (setA[1] >setB[0]) {
		return true;
	} else if (setB[1] > setA[0]) {
		return true;
	}
	return false;
}

const combine = (setA, setB) => {
	if (setA[1] >setB[0]) {
		return [setA[0], setB[1]];
	} else if (setB[1] > setA[0]) {
		return [setB[0], setA[1]];
	}
}


const mergeSet = (arrSets) => {
	//O( n lg n)
	arrSets = arrSets.sort((a,b) => {
		return a[0] - b[0];
	});
	// O(n)
	let arrFinal = [arrSets.shift()];
	while (arrSets.length !== 0) {
		let cur = arrSets.shift();
		if (combinable(cur, arrFinal[arrFinal.length-1])) {
			arrFinal[arrFinal.length-1] = combine(cur, arrFinal[arrFinal.length-1])
		} else {
			arrFinal.push(cur);
		}
	}
	return arrFinal;
	// overall it would be O(n lg n);
}
