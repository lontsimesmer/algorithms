const word = "aabbccddeeffgghhiiiiii";

function miniNumPush(word) {
  // Count the frequency of occurence of each letter
  const letterCounts = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
  console.log(letterCounts);

  // Get the frequencies and sort them in descending order
  const frequencies = Object.values(letterCounts).sort((a, b) => b - a);
  console.log(frequencies);

  let totalKeystrokes = 0,
    keyPads = 8; // Using keys 2 to 9 (8 keys)

  // Distribute frequencies across keys
  for (let i = 0; i < frequencies.length; i++) {
    const position = Math.floor(i / keyPads) + 1; // 1 push for first group, 2 for second, etc
    totalKeystrokes += frequencies[i] * position;
  }
  return totalKeystrokes;
}
console.log(miniNumPush(word));
