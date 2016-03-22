const rainCollector = (arr) => {
  //
  let highestPoint = arr[0];
  let highestPointIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestPoint) {
      highestPoint = arr[i];
      highestPointIndex = i;
    }
  }
  // should have the highest point and index;
  for (let j = highestPoint; j >= 0; j--) {
    // everything before the peak
    for (let i = highestPointIndex; i >= 0 ; i--) {
      

    }
    // everything past the peak
    for (let i = arr.length; i >= highestPointIndex; i--) {

    }
  }

}
