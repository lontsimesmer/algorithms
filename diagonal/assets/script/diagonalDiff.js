// Method 1

const arr = [11, 2, 4, 4, 5, 6, 10, 8, -12];

function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr.length - 1 + i];
  }
  console.log(Math.abs(leftDiagonal - rightDiagonal));
}
diagonalDifference(arr);

// Method 2

function diagonalDiff(arr) {
  let digonal1 = 0,
    digonal2 = 0;
  for (let i = 0; i < arr.length; i++) {
    digonal1 += arr[i][i];
    digonal2 += arr[i].reverse()[i];
  }
  console.log(Math.abs(digonal1 - digonal2));
}
diagonalDiff([1, 2, 3, 4, 5, 6, 9, 8, 9]);
