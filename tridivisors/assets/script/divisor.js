function solution(n, m) {
  function threeDivisorsOnly(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count++;
        if (i !== 1 && num / i !== i) {
          count++;
        }
      }
    }
    return count === 3;
  }

  // Put the result in an array
  let result = [];
  for (let i = n; i <= m; i++) {
    if (threeDivisorsOnly(i)) {
      result.push(i);
    }
  }
  return result.sort((a, b) => a - b);
}
console.log(solution(2, 20));
