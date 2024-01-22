// Method 1

const s = "SOSTOT";

marsExploration = (s) => {
  return s.split("").filter((char, index) => {
    if ((index + 2) % 3 === 0 && char !== "O") {
      console.log(char);
    } else if (char !== "S" && (index + 2) % 3 !== 0) {
      console.log(char);
    }
  }).length;
};
marsExploration(s);

// Method 2

const o = "SOSSOT";

function marsExploration(o) {
  let expectSignal = new Array(o.length / 3).fill("SOS").join("");
  console
    .log(expectSignal)
    .split("")
    .filter((char, index) => char !== o.charAt(index)).length;
}
marsExploration(o);

// Method 3

const S = "SOSSPSSQSSOR";

marsExploration = (s) => {
  const wordLength = s.length / 3;
  const defaultMsg = "SOS";
  const expectedMsg = defaultMsg.repeat(wordLength);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== expectedMsg[i]) {
      count++;
    }
  }
  console.log(count);
};
marsExploration(S);
