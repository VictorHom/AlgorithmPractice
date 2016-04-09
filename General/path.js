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
    if (start === destination) return true;
    let neighbors = currentNode.neighbors;
    neighbors.forEach((neighbor) => {
      if (!neighbor.visited) queue.push(neighbor)
    });
  }

  return false;
}
