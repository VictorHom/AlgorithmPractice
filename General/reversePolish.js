// assumption is that input is correct with non spaces
const rpn = (expression) => {
	let i = 0;
	let queue = [];
	let total = 0;
	while (i < expression.length) {
		if (typeof expression[i] === 'number'){
			queue.push(expression[i]);
		} else {
			if(expression[i] === "+") {
				total = queue.shift() + queue.shift();
			} else if (expression[i] === "-") {
				total = queue.shift() - queue.shift();
			} else if (expression[i] === "*") {
				total = queue.shift() * queue.shift();
			} else {
				total = queue.shift() / queue.shift();
			}
			queue.push(total);
		}
	}
	return total;
}