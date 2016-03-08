
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
//below is much quicker
// n!

// the non es6 solution
// function stringPermutation(str) {
// 	var differentPerms = [' ']; //important to have a space so that you have length
// 	var index = 0;
// 	while(index < str.length){
// 		var currentPerms = [];
// 		for (var i = 0; i < differentPerms.length; i++) {
// 			var currentChar = str[index];
// 			for (var j = 0; j < differentPerms[i].length; j++) {
// 			    var currentPerm = differentPerms[i].slice(0, j) + currentChar + differentPerms[i].slice(j);
// 			    currentPerms.push(currentPerm);
// 			}
// 		}
// 		differentPerms = differentPerms.concat(currentPerms);
// 		index = index + 1;
// 	}
// 	return differentPerms;
// }

// Another solution- not mine, but definitely clearer for a recursive solution
// function permutations(str) {
//     if(str.length === 1) return [str];
//     var perms = [];
//     for(var i = 0; i < str.length; i++) {
//         var char = str[i];
//         permutations(str.slice(0,i) + str.slice(i+1)).forEach(function(perm) {
//             perms.push(char + perm);
//         });
//     }
//     var sorted = perms.sort();
//     return sorted.filter(function(perm, i) {
//         return perm !== sorted[i+1];
//     });
// }

