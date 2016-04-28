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


// another approach that someone came up with
// really neat way

//common ancestor problem
const leastCommonPath = (parent, n1, n2) => {
	let n1Path, n2Path;
	(function traverser (current, n1, n2, storage) {
		storage = storage || [];
		storage.push(current);
		if (current === n1) n1Path = storage;
		if (current === n2) n2Path = storage;
		if (current.left) {
			traverser(current.left, n1, n2, storage.slice());
		}
		if (current.right) {
			traverser(current.right, n1, n2, storage.slice());
		}
		return;
	})(parent, n1, n2);
	for (let i = n1Path.length-1; i >= 0; i--) {
		for (let j = n2Path.length-1; j >= 0; j--) {
			if (n1Path[i] === n2Path[j]) {
				return n1Path[i];
			}
		}
	}
	return "You are not the father."
};

class Node{
	constructor(data){
		this.data = data;
		this.right;
		this.left;
	}
}

// basic case
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
a.right = b;
a.left = c;
//console.log(leastCommonPath(a, b, c));

// staggered case
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")
let g = new Node("g")
let h = new Node("h")
d.right = e;
d.left = f;
f.right = g;
f.left = h;
//console.log(leastCommonPath(d,e,h));


// left side, not root parent is ancestor
let i = new Node("i")
let j = new Node("j")
let k = new Node("k")
let l = new Node("l")
let m = new Node("m")
let n = new Node("n")
i.left = j;
i.right = k;
k.left = l;
l.left = m
l.right = n;
// console.log(leastCommonPath(i, m, n));

// input is the ancestor
let o = new Node("o");
let p = new Node("p");
let q = new Node("q");
o.left = p;
o.right = q;
console.log(leastCommonPath(o, o, p))

// my rewrite of this function
// helper method to check if a particular node exists given the start node
const covers = (start, node) => {
	let queue = [];
	queue.push(start);
	while (queue.length > 0) {
		let current = queue.pop();
		if (current === node) return true;
		if (current.right) queue.push(current.right)
		if (current.left) queue.push(current.left);
	}
	return false;
}

const commonAncestor = (start, node1, node2) => {
	if (start === node1) return node1;
	if (start === node2) return node2;
	if (!start.left) {
		return commonAncestor(start.right, node1, node2);
	}
	if (!start.right){
		return commonAncestor(start.left, node1, node2);
	}

	var node1CheckLeft = covers(start.left, node1);
	var node2CheckRight = covers(start.left, node2);
	if (node1CheckLeft && node2CheckRight) {
		return commonAncestor(start.left, node1, node2);
	} else if (!node1CheckLeft && !node2CheckRight) {
		return commonAncestor(start.right, node1, node2);
	} else {
		return start;
	}
}

class Node{
	constructor(data){
		this.data = data;
		this.right;
		this.left;
	}
}


// basic case
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
a.right = b;
a.left = c;
// console.log(commonAncestor(a, b, c));

// staggered case
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")
let g = new Node("g")
let h = new Node("h")
d.right = e;
d.left = f;
f.right = g;
f.left = h;
// console.log(commonAncestor(d,e,h));


// left side, not root parent is ancestor
let i = new Node("i")
let j = new Node("j")
let k = new Node("k")
let l = new Node("l")
let m = new Node("m")
let n = new Node("n")
i.left = j;
i.right = k;
k.left = l;
l.left = m
l.right = n;
// console.log(commonAncestor(i, m, n));

// input is the ancestor
let o = new Node("o");
let p = new Node("p");
let q = new Node("q");
o.left = p;
o.right = q;
// console.log(commonAncestor(o, o, p))
