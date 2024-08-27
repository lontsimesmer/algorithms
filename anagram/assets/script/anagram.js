function groupAnagrams(strs) {
  const anagrams = {};

  for (const str of strs) {
    // Sort the string to create a key
    const key = str.split("").sort().join("");

    // Add the original string to the corresponding list in the object
    if (!anagrams[key]) {
      anagrams[key] = [];
    }
    anagrams[key].push(str);
  }

  // Return the grouped anagrams as an array of arrays
  return Object.values(anagrams);
}
console.log(groupAnagrams(["eat", "tab", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
