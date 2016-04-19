// we know that the array is sorted, so that should give
// you a hint that you can do better than n and possibly half the search space
// distinct numbers stored
const iterativeMagicIndex = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (i === arr[i]) {
			return true;
		}
	}
	return false
}
console.log(iterativeMagicIndex([0,1,2,3,4,5]))
console.log(iterativeMagicIndex([1,2,3,4,5,6]))


// [a,b,c,d,e,f,g]
// d is at 3
//[e,f,g]
// f is 1 + 3 + 1 = 5 check
// distinct with a recursive solution
// distinct with a recursive solution
const distinctMagicIndex = (arr, incrementIndex = 0) => {
	if (arr.length === 0) {
		return false;
	}
	// select the middle index
	let halfIndex = Math.floor(arr.length / 2);
	if ((halfIndex + incrementIndex) === arr[halfIndex]) {
		return true;
	} else if ( (halfIndex + incrementIndex) > arr[halfIndex]) {
		// i 3 4 5 6 7
		// v 2 3/4 4/5 5/6 6/7
		// it can only be everything on the right set
		return distinctMagicIndex(arr.slice(halfIndex+1), halfIndex + 1 + incrementIndex);
	} else if ((halfIndex + incrementIndex) < arr[halfIndex]) {
		return false;
		// i 2 2 3 4 5
		// v 4 1 2 3 4
	}
}

// non distinct , so repeat values, with a recursive solution
const nondistinctMagicIndex = (arr, incrementIndex = 0) => {
	if (arr.length === 0) {
		return false;
	}
		// select the middle index
	let halfIndex = Math.floor(arr.length / 2);
	if ((halfIndex + incrementIndex) === arr[halfIndex]) {
		return true;
	} else if ( (halfIndex + incrementIndex) > arr[halfIndex]) {
		// i 3  4 5 6
		// v 3  3 5
		// it can only be everything on the right set
		let right = distinctMagicIndex(arr.slice(halfIndex+1), halfIndex + 1 + incrementIndex);
		let left = distinctMagicIndex(arr.slice(0,arr[halfIndex])); // note the arr[halfIndex]
    // this is because we now know that all lower values have to be at least up until arr[index]
    // A[5] = 3
    // the only next match has to be at A[3] = 3 or less :)
		return [right, left].includes(true);
	} else if ((halfIndex + incrementIndex) < arr[halfIndex]) {
		// 5 i 6 7 8
		// 5 v 7 7 7
		// return false;
		// why does it seem the same
		let right = distinctMagicIndex(arr.slice(halfIndex+1), halfIndex + 1 + incrementIndex);
		let left = distinctMagicIndex(arr.slice(0,halfIndex));
		return [right, left].includes(true);
	}
}
