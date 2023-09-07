const strings = ["ab", "ab", "abc"];
queries = ["ab", "abc", "bc"];

function matchingStrings(strings, queries) {
  let results = [];
  queries.map(function (query) {
    let ocurrence = 0;
    strings.map(function (string) {
      if (string === query) {
        ocurrence++;
      }
    });
    results.push(ocurrence)
  });
  console.log(results);
}
matchingStrings(strings, queries);
