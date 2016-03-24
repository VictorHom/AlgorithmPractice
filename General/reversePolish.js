// assumption is that input is correct with non spaces
const rpn = (expression) => {
  expression = expression.split(" ");
	let i = 0;
	let queue = [];
	let total = 0;
	while (i < expression.length) {
	    	if(expression[i] === "+") {
				total = queue.shift() + queue.shift();
				queue.push(total);
			} else if (expression[i] === "-") {
				total = queue.shift() - queue.shift();
				queue.push(total);
			} else if (expression[i] === "*") {
				total = queue.shift() * queue.shift();
				queue.push(total);
			} else if (expression[i] === "/"){
				total = queue.shift() / queue.shift();
				queue.push(total);
			} else {
			    queue.push(parseInt(expression[i],10));
			}
      i++;
	}
	return total;
}
 // need to support spaces as the delimiter
 // or better yet, split into an array by delimiter
console.log(rpn("34+"))
