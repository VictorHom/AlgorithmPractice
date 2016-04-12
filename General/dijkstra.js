// algo for finding shortest path between nodes in a graph
// such as road networks
// find the shortest path from src to destination


class Node {
  constructor(distance, name) {
    this.name = name;
    this.distance;
    this.neighbors = [];
    this.visited = false;
  }
}

// to be used between consecutive test cases
// that will use the same nodes
const clearVisits = (arrOfNodes) => {
  arrOfNodes.forEach(elem => {
    elem.visited = false;
  })
};

// dijkstra is a breadth first search
const dijkstraSearch = (src, dest) => {
  // using the array as a queue, so will shift and push on
  let queue = [];
  // let srcNeighbors = src.neighbors;
  queue = queue.push(src);
  // src.visited = true;
  // let currentNode;
  while (queue.length !== 0) {
    let currentNode = queue.shift();
    currentNode.visited = true;
    currentNode.distance = currentNode.distance || 0;
    let unvisitedSet = currentNode.neighbors;
    // set the distance for each of the nodes
    unvisitedSet.forEach( node => {
      node.distance = currentNode.distance + node.distance || 0; //it shouldn't need || 0 but since I am writing this cold
    })
  }
}
// dijkstra's algorithm
// used to calculate the shortest path from src to destination
// set the initial node as the currentNode
// mark all other nodes as unvisited
// create a set of all the unvisited nodes called the unvisited set
// for the current node, consider all of its unvisited neighbors and calculate
// their tentative distances
// compare the newly calculated tentative distance to the current assigned value and assign the smaller one
// if the value is greater, then change it, otherwise keep.
