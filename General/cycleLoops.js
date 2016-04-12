const nextLocation = (arrLength, jump, current) => {
	let pt = 0;
	if (jump + current > arrLength-1) {
	    pt = (jump + current) % arrLength;
	} else if (jump + current < 0) {
	  	let val = ((Math.abs(jump + current)) % arrLength);
	    pt = (arrLength) - val;
	} else {
		pt = jump + current;
	}
	return pt;
}
const cycleLoops = (arr) => {
  let marker = [];
	let jump = arr[0];
	let current = 0;
	let pt = current;
  while (!marker[pt]) {
  	marker[pt] = true;
	pt = nextLocation(arr.length, jump, current)
	jump = arr[pt];
	current = pt;
  }
  if (marker.length === arr.length) return true
  return false;
}

cycleLoops([1,1,-2,1])
cycleLoops([2,2,-1,1])
cycleLoops([2,3,-1,1])
