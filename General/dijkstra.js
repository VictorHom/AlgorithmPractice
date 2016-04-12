// algo for finding shortest path between nodes in a graph
// such as road networks
// find the shortest path from src to destination


class Node {
  constructor(name, distanceTos) {
    this.name = name;
    this.distance = distanceTos;
    // the distanceTos should be used
    // neighbors should array of [nodes/name of node, "distance" to node]
    this.neighbors = [];
    this.visited = false;
  }
}

let nodeB = new Node("B", [["D", 1]]);
let nodeC = new Node("C", [["D", 2]]);
let nodeD = new Node("D", [["A", 5]]); // should have no effects;
let nodeA = new Node("A", [["B", 1], ["C", 2]]);

// let nodeE = new Node(4, "E");
// let nodeG = new Node(4, "G"); // g for goal

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
    let unvisitedSet = currentNode.neighbors.filter(elem => {
      // only use unvisited nodes, because otherwise you can end up in a cycle
      return !elem.visited;
    });
    // set the distance for each of the nodes
    unvisitedSet.forEach( node => {
      let tentativeDistance = currentNode.distance + (node.distance || 0);
      // if the calculated tentative distance is greater than  the current distance on the node, then it's a better option
      node.distance = node.distance > tentativeDistance ? tentativeDistance : node.distance; //it shouldn't need || 0 but since I am writing this cold
    });
    queue = queue.concat(unvisitedSet);
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
