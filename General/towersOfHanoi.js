// Takes an input of the number of rings to move
// start is where the ring is, and finish is where the  ring should go
// start and finish can be string "first", "middle", "last"
const towerOfHanoi = (numRings, from, to) => {
	// base case : if there is one piece, then just move to the end
	if (numRings === 1) {
	    console.log(`move ring from ${from} to ${to}`)
	    return;
    }
    const locations = ["start", "middle", "last"];
    let availableSpot = locations.filter(location => {
        if (location !== from && location !== to) return true;
        return false;
    })[0];
    // perform towerOfHanoi up to the base case, from the start to an available opening
    towerOfHanoi(numRings-1, from, availableSpot);
    // now perform towerOfHanoi on the base case which is the if statement at the top
    towerOfHanoi(1, from, to);
    // move from the available smaller tower of hanoi from here to the end
    towerOfHanoi(numRings-1, availableSpot, to);
    
    
}