// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

// each index represent a minute from 9:30 when the market opens

// where is the greatest profit located if you buy one sell
// this doesn't work right
// const getMaxProfit = (stockPrices) => {
// 	let profits = 0;
//
// 	let i = 0, j = stockPrices.length-1;
// 	while (i != j) {
// 		let buyOne = stockPrices[i];
// 		let sellOne = stockPrices[j];
// 		if ((sellOne - buyOne) > 0) {
// 			if (profits < (sellOne - buyOne)) {
// 				profits = sellOne - buyOne;
// 			}
// 			i++;
// 		} else {
// 			j--;
// 		}
// 	}
//
// 	return profits;
// }

var getMaxProfit = arr => {
    let min = Infinity;
    let maxProf = 0;
    arr.forEach(num => {
        if (num < min) min = num;
        if (maxProf < num - min) maxProf = num - min;
    })
    return maxProf;
}
//https://repl.it/CAsT/2
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
var anotherTest = [100, 180, 260, 310, 40, 535, 695];
var small = [100, 180, 260];
console.log(getMaxProfit(stockPricesYesterday));
console.log(getMaxProfit(anotherTest))
console.log(getMaxProfit(small));

// NEXT Step is to see if you can find the max profit
// multiple times of buying and selling in a given time period
// which is dictated by the array that is given
