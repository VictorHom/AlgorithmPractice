// O(n^2)
function inplaceRotation(arr){
	let traverseLen = Math.floor(arr.length/2);
	let arrLen = arr.length;

	// coord is in the form of {x, y}
	// return the updated coordinates to swap with
	function updateCoordinate(coord){
		let temp = coord.x;
		coord.x = coord.y;
		coord.y = Math.abs((arrLen - 1) - temp);
		return coord;
	}

	// given two coordinates, swap the values in the array based on those coordinates.
	// mutates the original array
	function swapCoordinateValues(coordinateA, coordinateB){
		let temp = arr[coordinateA.x][coordinateA.y];
		arr[coordinateA.x][coordinateA.y] = arr[coordinateB.x][coordinateB.y];
		arr[coordinateB.x][coordinateB.y] = temp;
	}

	// this going half way diagonally
	for(let i = 0; i < traverseLen; i++){
    // subtract 1 because you will have already swapped the first corner from the first index
    // subtract i because on each row traversal, you do slightly less since you will have already swapped
		for(let j = i; j < arr[0].length-i-1; j++){
			// pivot point to always swap with;
			let x = i;
			let y = j;
			let lastCoordinateUsed;
			// there should always be 4 swaps
			for (let k = 0; k < 4; k++){
					let currentCoord = (!lastCoordinateUsed) ? {x,y} : lastCoordinateUsed;
					let updatedCoord = updateCoordinate(currentCoord);
					lastCoordinateUsed = updatedCoord;
					swapCoordinateValues({x,y},updatedCoord);
			}


		}
	}
	return arr;
}

let arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(inplaceRotation(arr));
let arrB = [[1,2],[3,4]];
console.log(inplaceRotation(arrB));
let arrC = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(inplaceRotation(arrC));
