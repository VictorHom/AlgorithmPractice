// create a queue with 2 stacks
// since I am using javascript here
// in the two stacks, I will only use pop/push
// methods from the arrays to mimic the stacks and
// avoid shift/unshift

function Queue() {
  this.mainStack = [];
  this.tempStack = [];
}
// s1 = [1]
// s2 = []
// enqueue 2
// s2 = [1]
// s1 = [2]
// s1 =  [2, 1]
// enqueue 3
// s2 = [1,2]
// s1 = [3]
// s2 = [3,2,1]
Queue.prototype.enqueue = function(newElem) {
if (newElem === undefined) throw "give me something to work with here!"
  while (this.mainStack.length !== 0) {
  	this.tempStack.push(this.mainStack.pop());
  }
  this.mainStack.push(newElem);

  while (this.tempStack.length !== 0) {
    this.mainStack.push(this.tempStack.pop());
  }
  return this;
};

Queue.prototype.dequeue = function() {
	if (this.mainStack.length === 0) throw "cannot deq off empty array!"
 	return this.mainStack.pop();
}

Queue.prototype.length = function() {
  return this.mainStack.length;
}

var myQueue = new Queue();
myQueue.enqueue(1).enqueue(2).enqueue(3)
console.log("queue size: ", myQueue.length());
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
myQueue.enqueue(1);
myQueue.dequeue();
myQueue.enqueue(3);
console.log(myQueue)
