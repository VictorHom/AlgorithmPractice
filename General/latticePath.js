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