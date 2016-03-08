
/*
* input is a string example "abc"
* returns an array of string permutations ["abc", "acb", "bac", "bca", "cab", "cba"]
* include the subsequences
* to remove subsequences, can filter with this version
*/
export const stringPermutation = (str) => {
	let differentPerms = [' ']; //important to have a space so that you have length
	let index = 0;
	while(index < str.length){
		let currentPerms = [];
		for (let i = 0; i < differentPerms.length; i++) {
			let currentChar = str[index];
			for (let j = 0; j < differentPerms[i].length; j++) {
			    let currentPerm = differentPerms[i].slice(0, j) + currentChar + differentPerms[i].slice(j);
			    currentPerms.push(currentPerm);
			}
		}
		differentPerms = [...differentPerms, ...currentPerms];
		index = index + 1;
	}
	return differentPerms;
}


// permutation - order matters; I can filter out the smaller subsequences
// combination - order does not matter;
// test
// what is speed? 

// It's pretty slow right now
// does it mean you want to have the shorter snippets or just the full length ones