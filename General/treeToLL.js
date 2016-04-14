// given the head node of a binary tree, return an array of LinkedList
// each linkedlist represents the nodes at the depth of that tree
class Node{
	constructor(data) {
		this.data = data;
		this.right;
		this.left;
	}
}

class NodeLL{
	constructor(data) {
		this.data = data;
		this.next;
	}
}

class LinkedList{
	constructor(headNode) {
		this.head = headNode;
	}
}

const treeToLinkedListDFS = (head) => {
	const treeLevels = [];
	const ll = [];
	const separateNodes = (node, depth = 0) => {
		//if tree levels is already made at that position
		if (!treeLevels[depth]) {
			treeLevels[depth] = [node];
		} else {
			treeLevels[depth].push(node);
		}
		if (node.right || node.left) {
			if (node.right) {
				separateNodes(node.right, depth + 1);
			}
			if (node.left) {
				separateNodes(node.left, depth + 1);
			}
		}
	}
	separateNodes(head, 0);
	treeLevels.forEach((nodes) =>{
		let singleLL;
		nodes.forEach((node,index) => {
			if (index === 0) {
				singleLL = new LinkedList(new NodeLL(node.data));
			} else {
				let current = singleLL.head;
				while (current.next) {
					current = current.next;
				}
				current.next = new NodeLL(node.data);
			}
		})
		ll.push(singleLL);
	});

	return ll;
}


const treeToLinkedListBFS = (head) => {
	let queue = [head];
	let tempQueue = [];
	let finalTree = [];
	let counter = 0;
	while (queue.length !== 0) {
		let currentNode = queue.shift();
		// temp storage for next level
		if (currentNode.left) {
			tempQueue.push(currentNode.left);
		}
		if (currentNode.right) {
			tempQueue.push(currentNode.right);
		}
		// keep shifting off the queue for the current ll creation
		if (!finalTree[counter]) {
			finalTree[counter] = new LinkedList(new NodeLL(currentNode.data));
		} else {
			let current = finalTree[counter].head;
			while (current.next) {
				current = current.next;
			}
			current.next = new NodeLL(currentNode.data);
		}
		// when the queue is empty
		if (queue.length === 0 && tempQueue.length > 0) {
			queue = queue.concat(tempQueue);
			tempQueue = [];
			counter += 1;
		}
	}



}
