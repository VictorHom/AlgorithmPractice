const decimal2Binary = (decimal) =>{
  var result = "";
  while (decimal !== 0){
    if (decimal % 2 === 0) {
      result += "0";
    } else {
      result += "1";
    }
    decimal = Math.floor(decimal / 2);
  }
  // decimal2Binary(8) => 0001
  return result;
}

// unsure of the proper term for endianness
// assuming that the number 8 in binary will be inputted as '1000'
const binary2Decimal = (binary) =>{
  let exp = 0;
  let result = 0;
  for (i = binary.length-1; i >= 0; i--){
    if (parseInt(binary[i],10) === 1){
      result += Math.pow(2,exp);
    }

    exp += 1;
  }
  return result;
}
