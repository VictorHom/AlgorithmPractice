function add(a,b){
	return a + b;
}

function subtract(a,b){
	return a-b;
}

function multiply(a,b){
	return a * b
}

function divide(a,b){
	return a / b;
}

var operations = {
	"+" : add,
	"-" : subtract,
	"*" : multiply,
	"/" : divide
}

// this will generate the number of permutations with replacement for operations
// this is a cartesian product calculation. Woah Math!
function cartesianCalc(str, num, main) {
	if (num === 0) return main;
	var main = main || [];
	if (num > 0){
		if (main.length === 0){
			for (var i = 0; i < str.length; i++){
				main.push(str[i]);
			}
			return cartesianCalc(str, num-1, main);
		}
		var newMain = [];
		for(var j = 0; j < main.length; j++) {
			for (var k = 0; k < str.length; k++){
				newMain.push(main[j] + str[k]);
			}
		}
		return cartesianCalc(str, num-1, newMain);
	}
}

// console.log(cartesianCalc("+-/*", 3))



// found this online
function generateSubstrOfNumbers(strNumbers, left, right) {
	// Push current left + right to the result list
    strNumbers.push(left.concat(right));

    if (right.length > 1){
      // For each combination left/right split call splitAllWays()
      for(var i = 1; i < right.length; i++){
        generateSubstrOfNumbers(strNumbers, left.concat(right.substring(0, i)), right.substring(i));
      }
    }

    // Return result
    return strNumbers;
}

// console.log(operations["*"](3,4))

function f(numberList, targetNum) {

	var allExpressions = []; // this will be all possible results;

	var possibilities = generateSubstrOfNumbers([],[],numberList)
	possibilities = possibilities.slice(1) //since it's just itself
	// possibilities is array of all numbers possible

	// generate operations list based on size of list
	// if the list is size n
	// there will be n - 1 operations possible
	// generate a space of operations of n-1
	// attach to the arrays of stringed Numbers
	// then perform something like a reverse polish notation


	helperF(numberList, targetNum);
	return allExpressions;

}

console.log(f("1234",4));
