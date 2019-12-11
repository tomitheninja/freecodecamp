function addToProp(obj, propName, amount) {
  let newProp = (obj[propName] || 0) + amount
  return {
    ...obj,
    ...{ [propName]: newProp }
  }
}

let getFactorsCache = {}

function getFactors (n) {
  if (n in getFactorsCache) return getFactorsCache[n]
  if (n < 1) return { } // Nothing
  if (1 <= n && n <= 3) return { [n]: 1 } // there is one 1 or 2 or 3
  let factors = {}
  for (let i = 2; ; i++) {
    if (n % i === 0) {
      let result = addToProp(getFactors(n / i), i, 1)
      getFactorsCache[n] = result
      return result
    }
  }
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
