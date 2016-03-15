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