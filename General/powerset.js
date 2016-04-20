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
  // recursive call to generate sets
  const generateSet = (set) => {
    let subset = [];
    set.forEach((elem) => {
      bigsets.forEach(oset => {
        subset.push([...[oset],...[elem]]);
      });
     	bigsets.push(subset);
      subset = [];
    });
  }
  generateSet(set);
  return bigsets;
}
// make recursive

console.dir(JSON.stringify(powerSet([1,2,3])))
