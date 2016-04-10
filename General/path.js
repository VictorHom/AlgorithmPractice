// is there a path?
// do breadth first and depth first

// given a node start position and a node destination position
// is there a path from start to destination?
// the nodes create a force directed graph
// where each node has a neighbor property
// the neighbor property has a list of neighbor nodes that it can get to
class Node {
  constructor(data) {
    this.data = data;
    this.neighbors = [];
    this.visited = false;
  }
}

const clearVisitStatus = (arr) => {
  arr.forEach( node => {
    node.visited = false;
  })
}
// create a function that will construct a graph for you given
// a list of 2 tuple arrays [[1,2], [2,3]] =>
// node 1 leads to 2 and node 2 leads to 3

// in these examples, the nodes will have a visted property
const DFSPath = (start, destination) => {
  if (start === destination) return true;
  let neighbors = start.neighbors;
  return neighbors.map((neighbor) => {
    if (neighbor.visited) return false;
    neighbor.visited = true;
    return DFSPath(neighbor, destination);
  }).includes(true);
}

// shift to remove
// push in
const BFSPath = (start, destination) => {
  let queue = [];
  queue.push(start);
  while (queue.length !== 0) {
    let currentNode = queue.shift();
    currentNode.visited = true;
    if (currentNode === destination) return true;
    let neighbors = currentNode.neighbors;
    neighbors.forEach((neighbor) => {
      if (!neighbor.visited) queue.push(neighbor)
    });
  }

  return false;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.neighbors.push(node2, node3)
node3.neighbors.push(node4);
node4.neighbors.push(node1);

console.log(DFSPath(node1, node1))
clearVisitStatus([node1, node2, node3, node4, node5]);
console.log(DFSPath(node1, node2))
clearVisitStatus([node1, node2, node3, node4, node5]);
console.log(DFSPath(node1, node4))
clearVisitStatus([node1, node2, node3, node4, node5]);
console.log(!DFSPath(node1, node5))

console.log(BFSPath(node1, node1))
clearVisitStatus([node1, node2, node3, node4, node5]);
console.log(BFSPath(node1, node2))
clearVisitStatus([node1, node2, node3, node4, node5]);
console.log(BFSPath(node1, node4))
clearVisitStatus([node1, node2, node3, node4, node5]);
console.log(!BFSPath(node1, node5))
