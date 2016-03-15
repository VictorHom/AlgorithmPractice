const maxSubarray = (arr) => {
	let minSum = 0, maxSum = 0, lb =0, ub = 0;

	for (let i = 0; i < arr.length; i++) {
		let currentVal = arr[i];
		// if the current val does not add value
		if (currentVal + maxSum < maxSum) {

		//if the current val does add value
		} else if (currentVal + maxSum > maxSum) {

		}
	}
}