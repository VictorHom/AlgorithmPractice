// reverse singly linked list
// O(n)
// in O(n)!
class Node{
	constructor(data){
		this.data = data;
		this.next;
	}
}
const reverseLL = (node) => {
	let currentNode = node;
	let reversedTail;
	let newCurr;
	let newestHead;
	while(currentNode) {
		if (!reversedTail) {
			reversedTail = null;
		}
		newCurr = currentNode.next;
		currentNode.next = reversedTail;
		reversedTail = currentNode;
		newestHead = currentNode;
		currentNode = newCurr;
	}
	return newestHead;
}

let nodeA = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");

nodeA.next = nodeB;
nodeB.next = nodeC;
console.log(reverseLL(nodeA));
