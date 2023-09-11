// Method 1

const s = "The quick brown fox jumps over the lazy dog";
countSort = (s) => {
  let letters = s
    .replace(/\s+/g, "")
    .trim()
    .toLowerCase("")
    .split("")
    .sort()
    .filter((i) => i !== "");
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === -1) {
      console.log("not pangram");
    }
  }
  console.log("pangram");
};
countSort(s);

// Method 2

const m = "We promptly judged antique ivory buckles for the prize";
function sortCount(m) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringArr = m
    .toLowerCase("")
    .split("")
    .filter((a) => a !== "");
  console.log(stringArr);
  for (let i = 0; i < alphabet.length; i++) {
    if (stringArr.indexOf(alphabet[i]) === -1) {
      console.log("not pangram");
    }
  }
  console.log("pangram");
}
sortCount(m);
