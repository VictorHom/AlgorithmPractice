
const rainCollector = (arr) => {
  let total = 0 ;
  let highPoint = arr[0];
  let highPointIndex = 0;

  arr.forEach( (elem, index) =>{
    if (elem > highPoint) {
      highPoint = elem;
      highPointIndex = index;
    }
  });
//   console.log(highPoint);
//   console.log(highPointIndex);

  for (let i = highPoint; i >= 0; i--) {
    let compareLowerIndex = highPointIndex;
    let compareUpperIndex = highPointIndex;
 console.log("high point:", i )
    for (let j = highPointIndex-1; j >= 0; j--) {

      if (arr[j] === i) {
        //   console.log("Lowerindex:", compareLowerIndex)
        //   console.log("j: innner:", j)
          console.log("total:",(compareLowerIndex - j - 1))
        total = total + (compareLowerIndex - j - 1);
        // not changing this quick enough
        compareLowerIndex = j;
      }
    }

    for (let j = highPointIndex+1; j < arr.length; j++) {
        // console.log("upper index:", compareUpperIndex)
      if (arr[j] === i) {
          console.log("total:",  (j - compareUpperIndex - 1))
        total = total + (j - compareUpperIndex - 1)
        compareUpperIndex = j;
      }
    }
  }

  return total;
}
rainCollector([0,1,0,2,1,0,1,3,2,1,2,1]);
// rainCollector([2,1,2])
// https://repl.it/By9m
