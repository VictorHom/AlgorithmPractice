// nodes for singly linked list
function Node(data) {
  this.data = data;
  this.next = null;
}

const makeNodeLinkedList = (arr) => {
	// returns the head of the list
	let head;
	let current;
	arr.forEach((elem) => {
		if (!current) {
			head = new Node(elem);
			current = head;
		} else {
			current.next = new Node(elem);
			current = current.next;
		}
	});
	return head;
}

const makeCyclicLinkedList = (arr) => {
  // returns the head of the list
  let head;
  let current;
  let cycle;
  arr.forEach((elem, index) => {
    if (!current) {
      head = new Node(elem);
      current = head;
    } else {
      // hard coding the linked area;
      current.next = new Node(elem);
      current = current.next;
      if (index == arr.length-1) {
        current.next = cycle;
      } else if (index === 5) {
        cycle = current;
      }
    }
  });
  return head;
}

const isThereCycle = (node) => {
  let tracker1 = node;
  let tracker2 = node;
  let start = 0;
  while (tracker2.next !== null) {
    if (tracker1 === tracker2 && start !== 0) {
      // there is cycle because tracker2 will have caught up with tracker1
      return true;
    }
    // going by 1
    tracker1 = tracker1.next;
    if (tracker2.next === null) {
    	return fasle;
    }
    tracker2 = tracker2.next;
    if (tracker2.next === null) {
    	return false;
    }
    tracker2 = tracker2.next;
    start++;
  }
  return false;
}

// determine if there is a cycle
// return length of cycle
// return first node in cycle
// restriction - no arrays, no objects, no maps, no linkedlist
// head is a node
const cycleInformation = (head) => {
// determine if there is a cycle
// get first node in the cycle
  let currentNode = head;
  let cycle = isThereCycle(currentNode);
  if (!cycle) throw "no cycle @ all!";
  let sizeOfCycle = findCycleLength(currentNode);
  return [sizeOfCycle, getFirstCycleNode(currentNode), ];
}

let head = makeCyclicLinkedList([1,2,3,4,5,6,7,8,9,10,11,12])
console.log(head.data);
console.log(head.next);
console.log(head.next.next.next.next.next.next.next.next.next.next)
