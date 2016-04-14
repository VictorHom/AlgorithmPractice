
// write a function that checks if a binary search tree is a binary search tree
// the property that holds for a bst is that the parent is greater/equal to the left
// and is less than the right child
class Node {
	constructor(data) {
		this.data = data;
		this.left;
		this.right;
	}
}

const validateBST = (node) => {
	let currentVal = node;
	let stateHolds = [];
	if (currentVal.left) {
		if (currentVal.left.data <= currentVal.data) {
			stateHolds.push(true);
			stateHolds = stateHolds.concat(validateBST(currentVal.left))
		} else {
			// short circuit
			return [false];
		}
	}

	if (node.right) {
		if (currentVal.right.data > currentVal.data) {
			stateHolds.push(true);
			stateHolds = stateHolds.concat(validateBST(currentVal.right))
		} else {
			// short circuit
			return [false];
		}
	}
	if (stateHolds.includes(false)) return false;
	return true;
}
