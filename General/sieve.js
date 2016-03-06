const sieveOfE = (n) => {
	let sieve = new Array(n).fill(true);
	console.log(sieve);
	let numsOfPrimes = [];
	for (let i = 0; i < sieve.length; i++){
		console.log(sieve);
		if (i === 0)  {
			//0 represents the number 1 which is not prime
			sieve[i] =  false; 
		} else if (sieve[i] === true) {
			let jumper = i + 1;

			numsOfPrimes.push(i + 1); // the number is prime

			for (let j = i + jumper; j < sieve.length; j = j + jumper){
				sieve[j] = false; // not prime
			}

			// now go through all the multiples and mark as true and therefore not prime
		}
	}
	return numsOfPrimes;
}

// need to optimize
// other considerations : is it supposed to be increaments / multiples?
// what are the tradeoffs of using one over the other?