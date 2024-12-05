function happyNumber(n) {
  // Helper function to calculate the sum of the squares of the digits
  function sumOfSquares(num) {
    let sum = 0;
    const digits = String(num).split("");

    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(Number(digits[i]), 2);
    }
    return sum;
  }

  const happy = new Set();

  while (n !== 1) {
    if (happy.has(n)) {
      return false; // Cycle detected
    }
    happy.add(n);
    n = sumOfSquares(n);
  }

  return true; // Number is happy
}
console.log(happyNumber(19));
console.log(happyNumber(2));
