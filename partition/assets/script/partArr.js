const arr = [1, 15, 7, 9, 2, 5, 10],
  k = 3;
const arr1 = [1],
  K = 1;

const maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  const partArr = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxVal = 0;
    for (let j = 1; j <= Math.min(k, i); j++) {
      maxVal = Math.max(maxVal, arr[i - j]);
      partArr[i] = Math.max(partArr[i], partArr[i - j] + maxVal * j);
    }
  }
  return partArr[n];
};
console.log(maxSumAfterPartitioning(arr, k));
console.log(maxSumAfterPartitioning(arr1, K));
