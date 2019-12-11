const LENGTH = 999999

let arr = new Array(LENGTH + 1)
  .fill(true)

arr[0] = arr[1] = false

for (let i = 2; i <= LENGTH; i++) {
  if(arr[i] === false) continue // Not a prime, optimization
  for (let j = i * 2; j <= LENGTH; j += i) {
    arr[j] = false
  }
}

function nthPrime(n) {
  let numFound = 0
  for (let i = 1; i < LENGTH + 1; i++) {
    if (arr[i]) numFound += 1
    if (numFound === n) return i
  }
}

nthPrime(6);
