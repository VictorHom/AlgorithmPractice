// one function takes a number in base 10
// turns into string rep in base 2

// other takes a base 2
// turns into a base 10 value

// simplest base 10 to string binary
const simpleDecimalToBinary = (decimal) => {
  return parseInt(decimal, 2) + "";
}

const DecimalToBinary = (decimal) => {
  if (!num) return "";
  return DecimalToBinary(Math.floor(decimal/2)) + decimal%2;
}

const BinaryToDecimal = (binary) => {
  let number = 0;
  binary = binary.split("").map((elem)=> parseInt(elem, 10));
  binary.forEach( (elem, index) => {
    number = number + parseInt(elem,10) > 0 ? Math.pow(2, index) : 0;
  })
  return number;
}

console.log(parseInt(16,10).toString(2));
BinaryToDecimal(parseInt(16,10).toString(2));
