class Node {
	constructor(data) {
		this.data = data;
		this.right;
		this.left;
	}
}

// is the tree balanced?

const BalancedTree_BFS = (head) => {
	let multiplier = 2;

}

const BalancedTree_DFS = (head) => {
	if (!head.left && !head.right) {
		return 0;
	} else {
		let rightHeight = 0;
		let leftHeight = 0;
		if (head.right) {
			rightHeight =  1 + BalancedTree_DFS(head.right)
		}
		if (head.left) {
			leftHeight = 1 + BalancedTee_DFS(head.left);
		}
		return Math.abs(rightHeight - leftHeight) <= 1;
	}
}
