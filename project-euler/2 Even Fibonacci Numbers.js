function fiboEvenSum(n) {
  let a = 0, b = 1, sum = 0
  for (let i = 1; i <= n; i++) {
    [a, b] = [b, a + b]
    sum += b % 2 === 0 ? b : 0
  }
  return sum
}

fiboEvenSum(10);
