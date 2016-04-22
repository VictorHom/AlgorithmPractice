class Node {
	constructor(data) {
		this.data = data;
		this.right;
		this.left;
	}
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let G = new Node("G");

A.right = B;
A.left = C;
B.right = D;
C.right = E;
B.left = F;
C.left = G;

const BalancedTree_DFS = (head) => {

	const getHeightDifference = (node) => {
		if (!head.left && !head.right) {
			return 0;
		} else {
			let rightHeight = 0;
			let leftHeight = 0;
			if (head.right) {
				rightHeight =  1 + BalancedTree_DFS(head.right)
			}
			if (head.left) {
				leftHeight = 1 + BalancedTree_DFS(head.left);
			}
			return Math.abs(rightHeight - leftHeight);
		}
	}
	return getHeightDifference(head) <= 1;
}

console.log(BalancedTree_DFS(A));
