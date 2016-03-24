/**
* the amount n to make change for
* m is a list of coin values
* you have an infinite number of these values of coins
* returns the number of ways of using m value coins to get to n
*/

const coinChange = (n, m) => {
	m = m.sort(function(a, b){return a-b; });
	let cache = {};
	let numberOfWays = 0;

	const subCoinChange = (n, m) => {
		for (let i = 0; i < m.length; i++){
			if (n - m[i] < 0) return 0;
		}
		if (n - m[m.length] > 0) {

		}
		if (n - m[m.length] === 0) {
			return 1 + subCoinChange(n, m.slice(0, m.length-1));
		}
		// subtract the max amount
		// if it becomes zero, 1 + cool subCoinChange(n, m.slice(0,m.length-1));
		// else
		return numberOfWays + subCoinChange(n, m.slice(0, m.length-1))
	}

}


const coinChange = (amt, coins) => {
    // base case - if this coin can go into amt evenly, it counts as adding up to amt
    if (coins.length === 1) return ( (amt % coins[0]) === 0) ? 1 : 0;
    let ways = 0;
    for(let i = 0; i*coins[0] <= amt; i++) {
        let otherCoins = coins.slice(1);
        ways += coinChange(amt - i*coins[0], otherCoins);
    }
    return ways;
}
