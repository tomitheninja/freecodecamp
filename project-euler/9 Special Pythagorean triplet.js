function specialPythagoreanTriplet(n) {
 for (let a = 1; a < 60000; a++) {
     for (let b = 1; b < a; b++) {
         let c = (a ** 2 + b ** 2) ** 0.5
         if (!Number.isInteger(c)) continue
         if (a + b + c == n) {
             return a * b * c
         }
     }
 }
}

specialPythagoreanTriplet(1000);

