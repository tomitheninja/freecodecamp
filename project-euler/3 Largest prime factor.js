function largestPrimeFactor(number) {
  let n = number
  let largestFactor = -Infinity
  for (let factor = 2; n > 1; factor++) {
    if (n % factor === 0) {
      n /= factor
      largestFactor = Math.max(factor, largestFactor)
    }
  }
  return largestFactor
}

largestPrimeFactor(13195);
