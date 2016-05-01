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

//currently testing
let n = 0;
let map = {};
const coinChangeMemo = (denoms, amt) => {
	n += 1;
	let coinCount = [];
	if (amt === 0){
		return 0;
	}
	for (let i = 0; i < denoms.length; i++) {
		if (denoms[i] === Infinity) {
			coinCount.push(Infinity);
			continue;
		}
		let namt = amt - denoms[i];
		if (namt >= 0) {
			if (!map[namt]){
				map[namt] = coinChangeMemo(denoms,namt);
			}
			coinCount.push( 1 + map[namt]);
		} else {
			coinCount.push(Infinity);
		}
	}
	return Math.min.apply(null, coinCount);
}
console.log(coinChangeMemo([1,4,25,5],33))
console.log(n); // 858,856 calls lols without map
// 37 calls with memoization

// a little cleaner
//currently testing

const coinChange = (denoms, amt) => {
	let map = {};
	const getMinCoins = (denoms, amt) => {
		let coinCount = [];
		if (amt === 0){
			return 0;
		}
		for (let i = 0; i < denoms.length; i++) {

			if (denoms[i] === Infinity) {
				coinCount.push(Infinity);
				continue;
			}

			let newAmt = amt - denoms[i];
			if (newAmt >= 0) {
				if (!map[newAmt]){
					map[newAmt] = getMinCoins(denoms, newAmt);
				}
				coinCount.push( 1 + map[newAmt]);
			} else {
				coinCount.push(Infinity);
			}
		}
		return Math.min.apply(null, coinCount);
	}
	return getMinCoins(denoms, amt);

}
console.log(coinChange([1,4,25,5],33))
