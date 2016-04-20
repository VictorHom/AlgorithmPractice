// given a sorted array of unique integer elements
// write an algo to create abinary search
// tree with minimal height
// given a sorted array of unique integer elements
// write an algo to create abinary search
// tree with minimal height
class Node {
	constructor(data) {
		this.data = data;
		this.left;
		this.right;
	}
}

const minimalTree = (arr) => {
	if (arr.length === 1) {
		return new Node(arr[0]);
	}
	if (arr.length === 0) {
		return;
	}

	let midpoint = Math.floor(arr.length / 2) + 1;
	let head = new Node(arr[midpoint]);
	head.left = minimalTree(arr.slice(0, midpoint));
	head.right = minimalTree(arr.slice(midpoint + 1));
}
