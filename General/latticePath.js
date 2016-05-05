// can go right and bottom, how many ways to get to the bottom right corner?i
// const latticePath = (x, y) => {
// 	let total = 0;
// 	if (x === 0 && y === 0) return total + 1;
// 	let horizonal = 0, vertical = 0;
// 	while (horizonal < x) {
// 		total = total + latticePath(x-1, y);
// 		horizonal = horizonal + 1;
// 	}
// 	while (vertical < y) {
// 		total = total + latticePath(x, y-1);
// 		vertical = vertical + 1;
// 	}
// 	return total;
// }

const latticePath = (max, x, y) => {
	x = x || 0, y = y || 0;
	if (x === max || y === max) return 1;
	return latticePath(max, x + 1, y) + latticePath(max, x , y + 1);
}

let n = 0
let memo = {};
const latticePathMemo = (max, x, y) => {
	n++;
	x = x || 0, y = y || 0;
	if (x === max || y === max) return 1;
	let xDir = 0;
	let yDir = 0;
	if (!memo[(x+1).toString() + y.toString()]){
		xDir = latticePathMemo(max, x + 1, y)
		memo[(x+1).toString() + y.toString()] = xDir;
	} else {
		xDir = memo[(x+1).toString() + y.toString()]
	}
	if (!memo[(x).toString() + (y+1).toString()]){
		yDir = latticePathMemo(max, x, y+1)
		memo[x.toString() + (y+1).toString()] = yDir;
	} else {
		yDir = memo[x.toString() + (y+1).toString()]
	}
	return  xDir + yDir;
}

console.log(latticePathMemo(2))
console.log(n)
