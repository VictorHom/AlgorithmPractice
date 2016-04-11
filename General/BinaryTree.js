// Notes on Binary Tree
// a tree is a type of graph
// A binary tree is different from a binary search tree
// in a bst, each node fits the condition where all left descendants
// are less than the node and all right descendants are greater

// balance v. unbalance
// balance means good enough to ensure O(lg n) for insert and find

// complete binary trees
// every level of the tree is fully filled, except the last level
// if that is the case, it is filled left to right
// if the last filled is right, it is not complete

// full binary trees
// every node has zero or 2 children

// perfect binary trees
// both full and complete
// all leaf nodes will be at the same level, and this level
// will have max number of nodes
class Node {
  constructor(data) {
    this.data = data;
    this.leftChild;
    this.rightChild;
  }

  get left() {
    return this.leftChild;
  }

  get right() {
    return this.rightChild;
  }

  set left(node) {
    this.leftChild = node;
    return this.leftChild;
  }

  set right(node) {
    this.rightChild = node;
    return this.rightChild;
  }
}

// given a list of numbers, create a bst
// return the head (root) node
const createBST = (arr, headNode) => {
  // set up a headnode
  if (headNode === undefined) {
    let rootNode = new Node(arr.slice(0,1));
    return createBST(arr.slice(1), rootNode)
  // base case where there is no more leaves to insert
  } else if (arr.length === 0){
    return headNode;
  } else {
    // nextNode is used, but if it isnt defined, then use nextNode
    let checker = headNode;
    let currentValue = arr.slice(0,1);
    let added = false;

    while (!added) {
      if (currentValue <= checker.data) {
        if (checker.leftChild) {
          checker = checker.leftChild;
        } else {
          checker.leftChild = new Node(currentValue);
          added = true;
        }
      } else if (currentValue > checker.data){
        if (checker.rightChild) {
          checker = checker.rightChild;
        } else {
          checker.rightChild = new Node(currentValue);
          added = true;
        }
      }
    }

    return createBST(arr.slice(1), headNode);
  }
}

// alternatively, if the array is unsorted, you can sort it
// and create an array where you keep picking out the middle 3 values for array set up

// if arr is sorted
// and you wanted to create a balanced tree
const createBalanceBST = (arr) => {
  if (arr.length === 0) return;
  var middlePoint = Math.floor(arr.length / 2);
  var headNode = new Node(arr[middlePoint]);
  headNode.leftChild = createBalanceBST(arr.slice(0, middlePoint))
  headNode.rightChild = createBalanceBST(arr.slice(middlePoint + 1));
  return headNode;
}


// BST traversals
// In-Order Traversals - vist left branch, current node, then right
// Pre-Order Traversals - visit the current node, left node, right nodes
// Post-Order Traversals - visit left node, visit right node, visit current nodes

// Binary Heaps (Min Heaps and Max Heaps)
// a min heap is a complete binary tree
// in a min heap where each node is smaller than its children
// the root is therefore is the min element in the tree
// min heap has two key operations : insert and extract-min

// insert - we always start by inserting
// the elements at the bottom to maintain complete property
// then we fix the tree by swapping the new element with its parent,
// until we find appropriate spot for the elements
// insert should be O(lg n) time

// extract is easy
// it's always at the top
// the tricky part is how to remove it
// swap it with the last element in the heap (bot rightmost element)
// then swap it childrent until properties is restored
// also O(lg n)
