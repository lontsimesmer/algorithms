// Method 1

function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zero = 0,
    p = 0,
    n = 0,
    z = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
      p = positive / arr.length;
    }
    if (arr[i] < 0) {
      negative++;
      n = negative / arr.length;
    }
    if (arr[i] == 0) {
      zero++;
      z = zero / arr.length;
    }
  }
  console.log(p.toPrecision(6));
  console.log(n.toPrecision(6));
  console.log(z.toPrecision(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);


// Method 2

function positiveNegative(array) {
  let positive = 0,
    negative = 0,
    zero = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive++;
    }
    if (array[i] < 0) {
      negative++;
    }
    if (array[i] == 0) {
      zero++;
    }
  }
  console.log((positive / array.length).toPrecision(6));
  console.log((negative / array.length).toPrecision(6));
  console.log((zero / array.length).toPrecision(6));
}
positiveNegative([-1, -1, 0, 1, 1]);
