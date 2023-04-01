// Method 1

const arr = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
  }

  for (let i = 1; i < arr.length; i++) {
    maxSum += arr[i];
  }
  console.log(`${minSum}, ${maxSum}`);
}
miniMaxSum(arr);


// Method 2

const array = [1, 3, 5, 7, 9];

function miniMaxSum(array) {
  let minSum = 0,
    maxSum = 0;
  for (let i = 0; i < 4; i++) {
    minSum += array[i];
  }

  for (let i = 4; i > 0; i--) {
    maxSum += array[i];
  }
  console.log(`${minSum}, ${maxSum}`);
}
miniMaxSum(array);
