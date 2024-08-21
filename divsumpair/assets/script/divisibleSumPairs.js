// Example 1

const ar = [1, 3, 2, 6, 1, 2],
  n = 6,
  k = 3;

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
  }
  console.log(`${count}`);
}
divisibleSumPairs(n, k, ar);

// Example 2

const arr = [1, 2, 3, 4, 5, 6],
  d = 5,
  m = 6;

function divideSumPair(m, d, arr) {
  let count = 0;
  for (let i = 0; i <= m - 2; i++) {
    for (let j = i + 1; j <= m - 1; j++) {
      if ((arr[i] + arr[j]) % d == 0) count++;
    }
  }
  console.log(`${count}`);
}
divideSumPair(m, d, arr);
