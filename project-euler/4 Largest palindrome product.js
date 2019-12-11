function isPalindrome (str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
} 

function largestPalindromeProduct(n) {
  let largest = -Infinity
  for (let i = 1; i < 10 ** n; i++) {
    for (let j = 1; j < 10 ** n; j++) {
      let product = i * j
      if (isPalindrome(product + '')) {
        largest = Math.max(product, largest)
      }
    }
  }
  return largest
}

largestPalindromeProduct(3);
