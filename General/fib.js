// fib(n) takes an and returns the nth fib number
// fib(0) = 0
// fib(1) = 1
// fib(2) = 1
// fib(3) = 2 ...

// naive approach
const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n-1) + fib(n-2);
}


// memoized approach to remove repeated calls
const fib = (n) => {
  let memo = { 0 : 1, 1 : 1, 2 : 1};
  const innerFib = (n) =>{
    if (memo[n]) return memo[n];
    memo[n] = fib(n-1) + fib(n - 2);
    return memo[n];
  }
  return innerFib(n);
}
