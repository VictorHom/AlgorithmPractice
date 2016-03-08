
/*
* input is a string example "abc"
* returns an array of string permutations ["abc", "acb", "bac", "bca", "cab", "cba"]
* 
*/
const stringPermutation = (str) => {
	let differentPerms = [''];
	let index = 0;
	while(index < str.length){
		let currentPerms = [];
		for (let i = 0; i < differentPerms.length; i++) {
			let currentChar = str[index];
			let currentPerm = differentPerms[i] + currentChar;
			currentPerms.push(currentPerm);
		}
		index = index + 1;
	}
	return differentPerms;
}

// test
// what is speed?