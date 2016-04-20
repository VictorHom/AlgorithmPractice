// given a set in javascript
// using es6 sets
// return all subsets of a set/
// technically, if I try to add repeats to the set, it will not work
// however, doing this problem so that it does not do that

// you can combine multiple set new Set([...setA, ...setB, ...setC ])
const powerSet = (set) => {
  if (set.length === 0) {
    return set;
  }
  let bigsets = [""];
  const generateSet = (set) => {
  	set.forEach((elem) => {
  		let tempContainer = []
  		bigsets.forEach((bigset) => {
  			let temp = [...bigset,elem];
  			tempContainer.push(temp);
  		})
  		bigsets = bigsets.concat(tempContainer);
  		tempContainer = [];
  	})
  }
  generateSet(set);
  return bigsets.slice(1);
}
// make recursive

console.dir(JSON.stringify(powerSet([1,2,3])))
