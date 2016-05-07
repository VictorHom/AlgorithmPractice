// write a function that will spiral through a 2d array
// and return an array of the spiral traversal

// [[1,2,3,4]
// [5,6,7,8]]
// returns [ 1, 2, 3, 4, 8, 7, 6, 5 ]

// approach 1, remove top, keep flipping, and remove the top
const spiral = (arr) => {
	let finalArr = [];
	while (arr.length > 0) {
		finalArr.push(...arr.shift());
		if(arr.length === 0) return finalArr;
		arr = rotateNinetyCounter(arr);
	}
}

// [1,2,3,4]
// [5,6,7,8]

// [4,8]
// [3,7]
// [2,6]
// [1,5]

function rotateNinetyCounter(arr){
	let finalArr = [];
	for (let j = arr[0].length-1; j >= 0; j--) {
		let row = [];
		for (let i = 0; i < arr.length; i++){
			row.push(arr[i][j]);
		}
		finalArr.push(row);
	}
	return finalArr;
}

// console.log(spiral([[1,2,3]]))
console.log(spiral([[1,2,3,4], [5,6,7,8]]));


// alternative

// alternative approach to spiral traverse
// what if I perform a list of instructions to repeat
// instead of rotating the 2d array and skimming the top

const skimTop = (arr) => {
	// a mutating function
	// arr is now changed
	// return the top row
	return arr.shift();
}

const popRight = (arr) => {
	// the popped off pieces
	// this also mutates the origin arr
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		temp.push(arr[i].pop())
	}
	return temp;
}

const skimBottom = (arr) => {
	return arr.pop().reverse();
}

const shiftLeft = (arr) => {
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		temp.push(arr[i].shift())
	}
	return temp;
}


const spiral = (arr) => {
	// 0 is remove top
	// 1 is remove right
	// 2 is remove bottom
	// 3 is remove left
	let list = {
		"0" : skimTop,
		"1" : popRight,
		"2" : skimBottom,
		"3" : shiftLeft
	};
	let finalArr = [];
	let repeatCounter = 0;
	while(arr.length > 0) {
		// do stuff here
		finalArr.push(...list[repeatCounter](arr));
		repeatCounter += 1;
		if (repeatCounter === 4){
			repeatCounter = 0;
		}
		if (arr.length === 0) return finalArr;
	}
	return finalArr
}


console.log(spiral([[1,2,3,4], [5,6,7,8]]));
