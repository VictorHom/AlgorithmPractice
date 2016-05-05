const maxSubarray = (arr) => {
	let minSum = 0, maxSum = 0, minlb = 0, minub = 0, maxlb = 0, maxub = 0;

	for (let i = 0; i < arr.length; i++) {
		let currentVal = arr[i];
		// if the current val does not add value
		if (currentVal + maxSum < maxSum) {
			// do I need to check if the current maxSum
			if (maxSum > minSum) {
				minSum = maxSum;
				minlb = maxlb;
				minub = maxub;
				// not including this negative value
				maxub = i+1;
				maxlb = i+1;
				maxSum = 0;
			}
		//if the current val does add value
		} else if (currentVal + maxSum > maxSum) {
			maxub = maxub + 1;
			maxSum = currentVal + maxSum;
		}
	}
    console.log(maxSum);
    console.log(minSum)
	if (maxSum > minSum) return arr.slice(maxlb, maxub);
	if (maxSum < minSum) return arr.slice(minlb, minub);
}

console.log(maxSubarray([7,2,3,-5, 1,2,10]))
console.log(maxSubarray([7,2,3,-5, 1,2]))
// need to test;

//only deals with sums
// in this version, I only want the highest recorded sum
const maxContSum = (arr) =>{
	if (arr.length === 1) {
		return arr[0];
	}
	let localSum = -Infinity;
	let highestRecorded = - Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			localSum = arr[i];
		} else if (arr[i] + localSum > localSum){
			localSum = localSum + arr[i];
		} else {
			highestRecorded = highestRecorded > localSum ? highestRecorded : localSum;
			localSum = -Infinity;
		}
	}
  // need to check the local version
  //[-1,2,3]
  // in this case, the 2 add to -1 is an improvement, but it would mess with the answer
  // if I don't consider the [2,3] only
	let smallerset = maxContSum(arr.slice(1));
	let current = highestRecorded > localSum ? highestRecorded : localSum;
	return current > smallerset ? current : smallerset
}

console.log(maxContSum([1,2,3]) === 6)
console.log(maxContSum([-1,2,3]) === 5)
console.log(maxContSum([-1,-2,-3]) === -1) // -1 ?
console.log(maxContSum([-2,-2,-2]) === -2) // -2 ?
console.log(maxContSum([1,2,3,-5,7,8,-3]) === 15)
