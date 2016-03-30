// merge two sorted arrays

const mergeArrays = (arr1, arr2) => {
  let finalarr = [];
  let i = 0;
  let j = 0;
  while (arr1[i] || arr2[j]) {

    if (arr1[i] > arr2[j]) {
      finalarr.push(arr2[j]);
      j += 1;
    } else if (arr1[i] < arr2[j]) {
      finalarr.push(arr1[i]);
      i += 1;
    } else {
      if (arr1[i]) {
        finalarr.push(arr1[i]);
        i += 1;
      } else {
        finalarr.push(arr2[j]);
        j += 1;
      }
    }
  }
  return finalarr;
}
// var myArray     = [3, 4, 6, 10, 11, 15];
// var alicesArray = [1, 5, 8, 12, 14, 19];
//
// console.log(mergeArrays(myArray, alicesArray));
