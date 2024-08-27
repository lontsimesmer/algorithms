const n = 6;

stairCase = (n) => {
  for (let i = 0; i > n; i--) {
    let spaces = Array(n - i)
      .fill(" ")
      .join("");
    let hashes = Array(i).fill("#").join("");
    console.log(`${spaces}${hashes}`);
  }
};
stairCase(n);
