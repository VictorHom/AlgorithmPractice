//** One Away **

// There are 3 types of basic edits that can be performed on strings:
//     insert a character, remove a character, and replace a character
// Given 2 strings, write a function to check if they are one (or zero) edits away from each other


// console.log(oneAway('pale', 'ple')) //true
// console.log(oneAway('pales', 'pale')) //true
// console.log(oneAway('hello', 'hello')) //true
// console.log(oneAway('pale', 'bale')) //true
// console.log(oneAway('pale', 'bae')) //false

const switchCharacter = (strA, strB) => {
	let different = false;
	for (let i = 0; i < strA.length; i++) {
		if (strA[i] !== strB[i]){
			if (different) return false; // there was already a difference so return false;
			different = true;
		}
	}
	return true;
};

// the name is remove or insert because depending on
// how you look at it, it can be a remove or an insert
const removeOrInsert = (strA, strB) => {
	let shorterStr, longerStr;
	// setting shorter and longer str to be explicit
	[shorterStr, longerStr] = (strA.length > strB.length) ? [strB, strA] : [strA, strB]; 
	let longerStrCounter = 0;
	let shorterStrCounter = 0;
	while (shorterStrCounter < strA.length) {
		if (shorterStr[shorterStrCounter] === longerStr[longerStrCounter]) {
			shorterStrCounter++;
			longerStrCounter++;
		} else {
			// this means the counter was already in the else portion
			if (shorterStrCounter !== longerStrCounter) return false;
			longerStrCounter = longerStrCounter + 1;
		}
	}
	return true;
}

const oneAway = (strA, strB) => {
	// if the difference in length is greater than 1, it's already false
	if (Math.abs(strA.length - strB.length) > 1) return false;
	if(strA.length === strB.length) return switchCharacter(strA, strB);
	return removeOrInsert(strA, strB);
};