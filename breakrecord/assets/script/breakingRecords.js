const scores = [12, 24, 10, 24];

function breakingRecords(scores) {
  // Write your code here
  let main = 0;
  least = 0;
  mainScore = scores[0];
  leastScore = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > mainScore) {
      mainScore = scores[i];
      main++;
      continue;
    }
    if (scores[i] < leastScore) {
      leastScore = scores[i];
      least++;
      continue;
    }
  }
  console.log(main, least);
}
breakingRecords(scores);
