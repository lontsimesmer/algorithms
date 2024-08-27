const w = "ab";

function biggerIsGreater(w) {
  const arr = w.split("");
  let i;

  // Find the first character from the right smaller than its next character
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      break;
    }
  }

  // For the entire string in ascending order, return "no answer"
  if (i < 0) {
    return "no answer";
  }

  // Find the smallest character to the right that is greater than arr[i]
  let j;
  for (let j = arr.length - 1; j > i; j--) {
    if (arr[j] > arr[i]) {
      break;
    }
  }

  // Swap the characters at i and j
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // Reverse the character to the right of i
  let left = i + 1,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}
console.log(biggerIsGreater(w));
