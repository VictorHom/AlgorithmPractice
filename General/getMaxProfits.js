// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 ana  selling for $11)

// each index represent a minute from 9:30 when the market opens

// where is the greatest profit located if you buy one sell

const getMaxProfit = (stockPrices) => {

	let testingInvim = 0;
	
	let profits = 0;

	let i = 0, j = stockPrices.length-1;
	while (i != j) {
		let buyOne = stockPrices[i];
		let sellOne = stockPrices[j];
		if ((sellOne - buyOne) > 0) {
			if (profits < (sellOne - buyOne)) {
				profits = sellOne - buyOne;
			}
			i++;
		} else {
			j--;
		}
	}

	return profits;
}

// a recursive solution
const getMaxProfit = (prices) => {
	// base cases
	if (prices.length === 2) {
		if (prices[1] - prices[0] > 0) {
			return prices[1] - prices[0];
		}
		return -1;
	} else {
		// make the cases to become base cases
		// if the first price is the lowest price
		let firstCase = Math.max.apply(null, prices.slice(1)) - prices[0];
		// where the first price is not the lowest price
		let secondCase = getMaxProfit(prices.slice(1))
		return Math.max.apply(null, [firstCase].concat([secondCase]));
	}
}

const getMaxProfit = (prices) => {
	let maxProfit = 0;
	let minPrice = prices[0];

	for (let i = 0; i < prices.length; i++) {
		let currentMinPrice = Math.min(minPrice, prices[i]);
		minPrice = currentMinPrice;
		let currentProfit = prices[i] - currentMinPrice;
		maxProfit = Math.max(currentProfit, maxProfit);
	}
	return maxProfit;
}

// NEXT Step is to see if you can find the max profit
// multiple times of buying and selling in a given time period
// which is dictated by the array that is given
