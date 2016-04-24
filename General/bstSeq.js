// helper function to generate a combination of numbers for possible orders of insertion
// for a height of data values
const generateCombinations = (arr) => {
	let results = [];
	for (let i = 0; i < arr.length; i++) {
		console.log("results:", results)
		if (i === 0) {
			results.push([arr[i]]);
		} else{
			let resultsReplace = [];
			for (let j = 0; j < results.length; j++){
				let currentArrToInsert = results[j];
				for (let k = 0; k <= currentArrToInsert.length; k++) {
					let result = currentArrToInsert.slice(0,k).concat(arr[i]).concat(currentArrToInsert.slice(k));
					resultsReplace.push(result);
				}
			}
			results = resultsReplace;
		}

	}
	return results;
 }

// assuming that the node data is a unique integer
// to get the order right, I am thinking that a BFS approach
const BSTSequences = (head) => {
	// sequences is an array of different possibilities
	let sequences = [];
	let queue = [head];
	while(queue.length !== 0) {
		if (sequences.length === 0) {
			let current = queue.shift();
			sequences.push([current.data]);
			if (current.right) queue.push(current.right)
			if (current.left) queue.push(current.left);
		} else {
			let currentHeightDatas = [];
			let toBeInsertedQueue = [];
			while (queue.length > 0) {
				let nodeTarget = queue.shift();
				if (nodeTarget.right) toBeInsertedQueue.push(nodeTarget.right);
				if (nodeTarget.left) toBeInsertedQueue.push(nodeTarget.left);
				currentHeightDatas.push(nodeTarget.data);
			}
			//this is a list of numbers
			// need to create the different combinations of these numbers
			let combos = generateCombinations(currentHeightDatas);
			let newSequences = [];
			sequences.forEach(seq => {
				combos.forEach(combo => {
					newSequences.push([...seq,...combo]); //order matters here
				})
			});
			queue = toBeInsertedQueue;
			sequences = newSequences;
		}
	}
}



 console.log(generateCombinations([1,2,3]))
