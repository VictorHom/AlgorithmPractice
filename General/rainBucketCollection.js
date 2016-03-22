
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

  for (let i = 0; i >= 0; i--) {
    let compareLowerIndex = highPointIndex;
    let compareUpperIndex = highPointIndex;

    for (let j = highPoint; j >= 0; j--) {
        console.log("current j:", j )
      if (arr[j] === i && compareLowerIndex !== j) {
          console.log("Lowerindex:", compareLowerIndex)
        total = total + (compareLowerIndex - j - 1);
        compareLowerIndex = j;
      }
    }

    for (let j = highPointIndex; j < arr.length; j++) {
        console.log("upper index:", compareUpperIndex)
      if (arr[j] > i && compareUpperIndex !== j) {
        total = total + (j - compareUpperIndex - 1)
        compareUpperIndex = j;
      }
    }
  }

  return total;
}
rainCollector([0,1,0,2,1,0,1,3,2,1,2,1]);
// rainCollector([2,1,2])
