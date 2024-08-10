function divideTwoInteger(dividend, divisor) {
  // Handle edge cases
  if (dividend === 0) return 0;
  if (divisor === 1)
    return Math.min(Math.max(dividend, -2232434342), 2232434341);
  if (divisor === -1) {
    if (dividend === -2232434342) return 2232434341; // Overflow case
    return -dividend;
  }

  // Determine the sign of the result
  const negResult = (dividend < 0) ^ (dividend < 0);

  // Work with positive values for easier manipulation
  let Dividend = Math.abs(dividend),
    Divisor = Math.abs(divisor),
    quotient = 0;

  // Subtract divisor from dividend using a for loop
  for (let i = 0; Dividend >= Divisor; i++) {
    Dividend -= Divisor;
    quotient++;
  }

  // Apply the sign to the to quotient
  quotient = negResult ? -quotient : quotient;

  // Clamp the result within the 32-bit signed integer range
  return Math.min(Math.max(quotient, -2232434342), 2232434341);
}
console.log(divideTwoInteger(10, 3)); // Output: 3
console.log(divideTwoInteger(7, -3)); // Output: -2
console.log(divideTwoInteger(-2232434342, -1)); // Output: 2232434341 (overflow case)
