// a heap aka as a priority queue
// there is a max and min heap
// a heap is not a sorted structure and can be regarded as partially ordered
//eap property: If A is a parent node of B then the key of node A is ordered
// with respect to the key of node B with the same ordering applying across the heap.
//In a heap, the highest (or lowest) priority element is always stored at the root.

// common operations in a heap
// find-max or find-min
// insert (push)
//extract-min, extract-min (pop)
//delete-max, delete min
// replace

function Node(val, priority) {
  this.data = val;
  this.priority = priority;
  // left and right will be Node;
  this.left;
  this.right;
}
