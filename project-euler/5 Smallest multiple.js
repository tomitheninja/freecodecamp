// TODO: cache + recursion
function getFactors (n) {
  let factors = {}
  let i = 1
  while (n > 1) {
    if (n % i === 0) {
      factors[i] = (factors[i] || 0) + 1
      n /= i
      i = 2
    } else {
      i++
    }
  }
  return factors
}

function smallestMult(n) {
  let maxFactors = {}
  for (let i = 1; i <= n; i++) {
    let currentFactors = getFactors(i)
    for (let factor in currentFactors) {
      let currentAmount = currentFactors[factor]
      let maxAmount = maxFactors[factor] || 0

      maxFactors[factor] = Math.max(maxAmount, currentAmount)
    }
  }

  let sum = 1
  for (let factorStr in maxFactors) {
    let factor = Number.parseInt(factorStr, 10)
    let factorAmount = maxFactors[factorStr]
    sum *= factor ** factorAmount
  }
  return sum
}

smallestMult(20);
