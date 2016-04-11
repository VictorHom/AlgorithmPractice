const cycleLoops = (arr) => {
  let marker = [];
  marker[0] = true //visited
  let jump = arr[0];
  let current = 0;

  let pt = 0;
  // need to check
  if (jump + current > arr.length) {
    pt = (jump + current) % arr.length;
  } else  {
    pt = (arr.length-1) - ((Math.abs(jump + current)) % arr.length);
  }
  // need to do this, but it should not be bad
  while (!marker[pt]) {

  }
  if (marker.length === arr.length) return true
  return false;
}
