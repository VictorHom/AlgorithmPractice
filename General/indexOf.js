// write an indexOf (input, query)
// it will return  the index of the first letter of query if it exits
require('babel-register');
// take a look at writing that cool way of checking if two numbers add up to a particular number;
const indexOf = (strValue, query) => {
	for (let i = 0; i < strValue.length; i++) {
		// if there is a match, then i would be the index to return 
		if (strValue[i] === query[0]) {
			// at least first str value matches, which is a good sign
			let match = true; // undefined until proven true;
			let counter = i;
			for (let j = 0; j < query.length; j++) {
				// loop through the array and see if you can find match
				if (!(query.charAt(j) === strValue.charAt(counter))){
					match = false;
				}
			}
			if (match){
				return i;
			}
		}
	}
	return false;
}

// O(MN) solution
// improvements?