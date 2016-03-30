
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

// another approach on 4/30
function strPermutation(str) {
	if (str.length === 1) return [str];
	
	return str.split("").reduce(function(acc, start, startIndex, arr) {
		console.log("here")
		let temp = [];
		acc.forEach(function(ss) {
			for (var i = 0; i < ss.length; i++) {
				temp.push(ss.slice(0,i) + start + ss.slice(i))	
			}
		})
		return acc.concat(temp);	
		
		
	}, [' '])
}
// results have an extra space at the end
// can filter and map if I really wanted to
// [ ' ',
//   'a ',
//   'b ',
//   'ba ',
//   'ab ',
//   'c ',
//   'ca ',
//   'ac ',
//   'cb ',
//   'bc ',
//   'cba ',
//   'bca ',
//   'bac ',
//   'cab ',
//   'acb ',
//   'abc ' ]

// console.log(strPermutation("a"));
// console.log(strPermutation("ab"));

// ANOTHER WAY
// function strPermutation(str) {
// 	if (str.length === 1) return [str];
	
// 	return str.slice(1).split("").reduce(function(acc, start, startIndex, arr) {
// 		console.log("here")
// 		let temp = [];
// 		acc.forEach(function(ss) {
// 			temp.push(start + ss);
// 			for (var i = 0; i < ss.length; i++) {
// 				temp.push(ss.slice(0,i) + start + ss.slice(i))	
// 			}
// 		})
// 		return acc.concat(temp);	
		
		
// 	}, [str.slice(0,1)])
// }

//[ 'a', 'ba', 'ba', 'ca', 'ca', 'cba', 'cba', 'bca', 'cba', 'cba', 'bca' ]

