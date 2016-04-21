// not necessarily a binary search tree
// find the first common ancestor of 2 nodes in a binary tree
// avoid storing additional nodes in a data structure
// nodeA and nodeB are children of head
// consideration - head children immediately
// what if they are staggered? on different levels/ one or more
// far off
//

// this checks that the immediate child is nodeA and nodeB
const checkImmediate = (nodeA, nodeB, head) => {
	aChild = false;
	bChild = true
	if (head.left === nodeA || head.right === nodeA) {
		aChild = true;
	}
	if (head.left === nodeB || head.right === nodeB) {
		bChild = true;
	}
	return aChild && bChild;
}

const firstCommonAncestor = (nodeA, nodeB, head) => {
	let queue =  [];
	let ancestorOrder = [];
	queue.push(head);
	while (queue.length !== 0){
		let current =  queue.shift();
		if (checkImmediate(nodeA, nodeB, current)) {
			return current;
		} else if (current.left === nodeA || current.right === nodeA){
			return firstCommonAncestor(nodeA, nodeB, current);
		} else if (current.left === nodeB || current.right === nodeB){
			return ancestorOrder.pop() // or is it the shift
		}
		else {
			ancestorOrder.push(current);
			queue.push(current.left)
			queue.push(current.right)
		}
	}
}
