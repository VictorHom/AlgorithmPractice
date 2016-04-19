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

// distinct with a recursive solution
const distinctMagicIndex = (arr, incrementIndex = 0) => {
	// select the middle index
	let halfIndex = Math.floor(arr.length / 2);
	if (halfIndex + incrementIndex === arr) {
		return true;
	} else if ( halfIndex + incrementIndex > arr[halfIndex]) {
		// i 3 4 5 6 7
		// v 2 3/4 4/5 5/6 6/7
		// it can only be everything on the right set
		return distinct(arr.slice(halfIndex+1), halfIndex + 1 + incrementIndex);
	} else if (halfIndex + incrementIndex < arr[halfIndex]) {
		return false;
		// i 2 2 3 4 5
		// v 4 1 2 3 4
	}
}
