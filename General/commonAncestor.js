// not necessarily a binary search tree
// find the first common ancestor of 2 nodes in a binary tree
// avoid storing additional nodes in a data structure
// nodeA and nodeB are children of head
// consideration - head children immediately
// what if they are staggered? on different levels/ one or more
// far off
//

const commonAncestor = (nodeA, nodeB, head) => {
	if (head === null) {
		return null;
	} else if (!covers(nodeA, head)) {
		return null;
	} else if (!covers(nodeB, head)) {
		return null;
	}
	return helperAncestorFinder(nodeA, nodeB, head);
}

function helperAncestorFinder(nodeA, nodeB, head) {
	if (head === null) {
		return null
	} else if (nodeA === head) {
		return head;
	} else if (nodeB === head) {
		return head;
	}

	let nodeRightSide = covers(nodeA, head.right);
	let nodeBSide = covers(nodeB, head.right);
	if (nodeRightSide !== nodeBSide) {
		return head;
	} else {
		if (nodeRightSide) {
			return commonAncestor(nodeA, nodeB, head.right);
		} else {
			return commonAncestor(nodeA, nodeB, head.left);
		}
	}
}

function covers(questionNode, startPoint) {
	if (startPoint === null) {
		return false;
	}
	if (questionNode === startPoint) {
		return true;
	}
	return covers(questionNode, startPoint.right) || covers(questionNode, startPoint.left);
}
