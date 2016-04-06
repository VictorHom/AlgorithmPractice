// array of points can be a an array of n dimensions
// depth should be called with zero the first time
const kdtree = (arrOfPoints, depth = 0) => {


  if (!arrOfPoints || arrOfPoints.length === 0) return;
  let axis = depth % arrOfPoints[0].length;

  let node = {};

  // sort the array based on the axis level
  arrOfPoints.sort((a,b) => {
    if (a[axis] < b[axis]) return -1;
    else if (a[axis] > b[axis]) return 1;
    else return 0;
  });
  let median = Math.floor(arrOfPoints.length / 2);

  node.location = arrOfPoints[median];
  node.left = kdtree(arrOfPoints.slice(0, median), depth + 1);
  node.right = kdtree(arrOfPoints.slice(median+1), depth + 1);
  return node;
}

console.dir(kdtree([ [2,3], [5,4], [4,7], [8,1], [7,2], [9,6] ]))
