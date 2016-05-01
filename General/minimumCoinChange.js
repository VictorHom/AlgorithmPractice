//currently testing
const coinChange = (denoms, amt) => {
	let coinCount = [];
	if (amt === 0){
		return 0;
	}

	// countCounts(denoms, amt);
	// return Math.min.apply(null, coinCount.filter(count => !Number.isNaN(count)));
	for (let i = 0; i < denoms.length; i++) {
		if (denoms[i] === Infinity) {
			coinCount.push(Infinity);
			continue;
		}
		let namt = amt - denoms[i];
		if (namt >= 0) {
			coinCount.push( 1 + coinChange(denoms, namt))
		} else {
			coinCount.push(Infinity);
		}
	}
	return Math.min.apply(null, coinCount);
}
coinChange([1,4,25,5],33)
