function sumSquareDifference(n) {
  let sum1 = ((n + 1) * n / 2) ** 2
  let sum2 = n * (n + 1) * (2*n + 1) / 6
  // let sum1 = 0, sum2 = 0
  // for (let i = 1; i <= n; i++) {
  //   sum1 += i
  //   sum2 += i ** 2
  // }
  // sum1 = sum1 ** 2
  return sum1 - sum2
}

sumSquareDifference(100);
